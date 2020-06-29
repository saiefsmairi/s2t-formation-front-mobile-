import { TokenStorageService } from './../../services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  hide = true;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    public toastController: ToastController,
    private toastService: ToastService
  ) {
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      cin: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{8}'),
      ]),
      nom: new FormControl(''),
      prenom: new FormControl(''),
      datenais: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      tel: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{8}'),
      ]),
    });
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.router.navigateByUrl('tabs');
    }
  }

  onSubmit() {
    if (this.f.cin.invalid || this.f.password.invalid) {
      this.toastService.presentToast('Veuillez vérifier vos coordonnées .');
    } else {
      this.authService.login(this.f).subscribe(
        (data) => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          console.log(this.roles);
          if (this.roles.toLocaleString() === 'ROLE_APPRENANT') {
            this.router.navigate(['tabs']);

          } else {
            this.toastService.presentToast(
              'Désole cette application est destiné pour les apprenants :)'
            );
          }
        },
        (err) => {
          this.toastService.presentToast(
            'Les coordonnées que vous avez entrez ne correspond au aucun compte .'
          );

          this.isLoginFailed = true;
        }
      );
    }
  }
}
