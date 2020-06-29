import { UserService } from './../../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-reclamersession',
  templateUrl: './reclamersession.page.html',
  styleUrls: ['./reclamersession.page.scss'],
})
export class ReclamersessionPage implements OnInit {
  form: FormGroup;
  nom;
  email;
  user_id;
  constructor( private fb: FormBuilder,private userService:UserService,    private toastService: ToastService
    ) {

    this.form=fb.group({
      details:new FormControl('',[Validators.required]),
      typecheck:new FormControl('',[Validators.required])
          });
   }

  ngOnInit() {
    this.nom=JSON.parse(sessionStorage.getItem('auth-user')).nom;
    this.email=JSON.parse(sessionStorage.getItem('auth-user')).email;
    this.user_id=JSON.parse(sessionStorage.getItem('auth-user')).user_id;

  }

  get f(){return this.form.controls}
  public removeValidators(form: FormGroup) {
    for (const key in form.controls) {
      this.form.get(key).clearValidators();
      this.form.get(key).updateValueAndValidity();
    }
  }

  onFormSubmit(){
    if (
      this.f.details.invalid ||
      this.f.typecheck.invalid     ) {
      this.toastService.presentToast('Veuillez vérifier vos coordonnées .');
    } else {
    this.userService.ajoutReclamation(this.f,this.user_id).subscribe(data=>{
      console.log('recla posted');
      this.toastService.presentToast('Votre réclamation à été envoyé .');

      
    });
    this.form.reset();
    this.removeValidators(this.form);

  }
    

  }


}
