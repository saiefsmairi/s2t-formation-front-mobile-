import { UserService } from './../../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-modifierprofil',
  templateUrl: './modifierprofil.page.html',
  styleUrls: ['./modifierprofil.page.scss'],
})
export class ModifierprofilPage implements OnInit {
  listCertif: any;
  userData: any;
  userCertifs: any;
  selectedFile: File;
  imgURLs: Array<any>;
  message: string;
  i: any;
  imagePath;
  userObject: any;
  cin: any;
  nom: any;
  prenom: any;
  email: any;
  tel: any;
  id: any;
  USER_KEY = 'auth-user';
  role: any;
  roleName: any;
  form: FormGroup;
  Passwordform: FormGroup;
  hide = true;
  photoProfil: any;
  photo: any;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private globalSrv: GlobalService,
    private toastService: ToastService
  ) {
    this.globalSrv.itemValue.subscribe((nextValue) => {
      console.log('changed');
      this.userObject = nextValue;
      this.cin = this.userObject.cin;
      this.nom = this.userObject.nom;
      this.prenom = this.userObject.prenom;
      this.email = this.userObject.email;
      this.tel = this.userObject.num_tel;
      this.id = this.userObject.user_id;
      this.role = this.userObject.roles;
      this.photoProfil =
        'data:image/jpeg;base64,' + this.userObject.photoProfil;
    });
  }

  ngOnInit() {
    this.userData = JSON.parse(sessionStorage.getItem('auth-user'));
    this.listCertif = this.userData.certifs;
    this.userCertifs = this.userData.certifs.filter((x) => {
      return x.photoCertif == null;
    });
    this.imgURLs = new Array();
    this.userObject = JSON.parse(sessionStorage.getItem('auth-user'));
    this.cin = this.userObject.cin;
    this.nom = this.userObject.nom;
    this.prenom = this.userObject.prenom;
    this.email = this.userObject.email;
    this.tel = this.userObject.num_tel;
    this.id = this.userObject.user_id;
    this.role = this.userObject.roles;
    this.photoProfil = 'data:image/jpeg;base64,' + this.userObject.photoProfil;

    if (
      this.role[0].name === 'ROLE_APPRENANT' ||
      this.role === 'ROLE_APPRENANT'
    ) {
      this.roleName = 'apprenant';
    }

    this.form = this.formBuilder.group({
      cin: new FormControl(this.cin, [
        Validators.required,
        Validators.pattern('[0-9]{8}'),
      ]),
      email: new FormControl(this.email, [
        Validators.required,
        Validators.email,
      ]),

      nom: new FormControl(this.nom, [Validators.required]),

      prenom: new FormControl(this.prenom, [Validators.required]),
      tel: new FormControl(this.tel, [
        Validators.required,
        Validators.pattern('[0-9]{8}'),
      ]),
    });

    this.Passwordform = this.formBuilder.group({
      passwordnew: new FormControl('', [Validators.required]),
      passwordold: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    Object.keys(this.form.controls).forEach((key) => {
      // console.log( this.form.controls[key]);
      if (
        this.form.controls[key].pristine == false &&
        this.form.controls[key].valid
      ) {
        // console.log( key);
        this.userService.update(this.f, this.id).subscribe(
          (data) => {
            console.log(data);
            this.role = this.userObject.roles;
            console.log(this.role[0]);

            const res = this.userService.getuserByid(this.id);
            res.subscribe(
              (data1) => {
                sessionStorage.setItem(this.USER_KEY, JSON.stringify(data1));
                this.globalSrv.theItem = data1;

                this.toastService.presentToast(
                  'profil mis à jour avec succées .'
                );
              },
              (err) => {}
            );
          },
          (err) => {
            //  this.message = err.error.message;

            this.toastService.presentToast('coordonnée(s) existe déja .');

            console.log('breaks here');
          }
        );
      }

      this.form.controls[key].markAsPristine();
    });

    if (this.form.invalid) {
      this.toastService.presentToast(
        'Veuillez vérifier les coordonnées que vous avez saisie  .'
      );
    }
  }

  reloadPage() {
    window.location.reload();
  }

  get passwordform() {
    return this.Passwordform.controls;
  }

  

onPasswordchange() {
  this.userService.passwordChange(this.passwordform, this.id).subscribe(
    data => {
      console.log(data);
      this.role = this.userObject.roles;
      console.log(this.role[0]);
      const res = this.userService.getuserByid(this.id);
      res.subscribe(
        data1 => {
          this.toastService.presentToast(
            'Mot de passe changé avec succées  .'
          );
        },
        err => {
          console.log('breaks here getuserbyid');
           this.message = err.error.message;
        }
      );


    },
    err => {

      console.log('breaks here');
    }
  );
}



}
