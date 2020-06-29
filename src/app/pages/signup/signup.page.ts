import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  form: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
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

  ngOnInit() {}

  onSubmit() {
    if (
      this.f.email.invalid ||
      this.f.cin.invalid ||
      this.f.nom.invalid ||
      this.f.prenom.invalid ||
      this.f.datenais.invalid ||
      this.f.password.invalid ||
      this.f.tel.invalid
    ) {
      this.toastService.presentToast('Veuillez vérifier vos coordonnées .');
    } else {

      this.authService.registerApprenant(this.f).subscribe(
        (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigateByUrl('login');
        },
        (err) => {
          this.toastService.presentToast(err.error.message);

          console.log('breaks here');
          // this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
    }
  }
}
