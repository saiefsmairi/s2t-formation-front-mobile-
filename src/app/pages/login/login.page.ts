import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;

  constructor( private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      cin: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{8}')
      ]),
      nom: new FormControl(''),
      prenom: new FormControl(''),
      datenais: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      tel: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{8}')
      ]),
    },
     );

   }
   get f() { return this.form.controls; }

  ngOnInit() {
  }

}
