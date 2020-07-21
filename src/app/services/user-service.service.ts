import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const USERS_API = 'http://192.168.1.46:9080/api/users/';
const MAIL_API = 'http://192.168.1.46:9080/api/test/';
const NOTIF_API = 'http://192.168.1.46:9080/api/notif/';

const params = new HttpParams();

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  params,
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getuserByid(id): Observable<any> {
    const params = new HttpParams().set('id', id);

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };
    return this.http.get(USERS_API + 'profil/' + id, httpOptions);
  }

  Allusers(): Observable<any> {
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };
    return this.http.get(USERS_API + 'AllUsers/', httpOptions);
  }

  update(user, id): Observable<any> {
    const params = new HttpParams().set('id', id);

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };
    return this.http.put(
      USERS_API + 'profil',
      {
        nom: user.nom.value,
        prenom: user.prenom.value,
        email: user.email.value,
        cin: user.cin.value,

        tel: user.tel.value,
      },
      httpOptions
    );
  }

  SendMail(nom, prenom, email): Observable<any> {
    const params = new HttpParams();
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };

    return this.http.post(
      MAIL_API + 'sendmail',
      {
        nom: nom,
        prenom: prenom,
        email: email,
      },
      httpOptions
    );
  }

  sendnotif(id, notif): Observable<any> {
    const params = new HttpParams();
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };

    return this.http.post(
      NOTIF_API + 'ajout-notif',
      {
        user_id: id,
        notif_id: notif,
      },
      httpOptions
    );
  }

  getlisteNotifByuser(id): Observable<any> {
    const params = new HttpParams().set('id', id);

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };
    return this.http.get(NOTIF_API + 'liste_notif/' + id, httpOptions);
  }

  getlisteNotifForGest(): Observable<any> {
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };
    return this.http.get(NOTIF_API + 'liste_notifGest', httpOptions);
  }

  passwordChange(user, id): Observable<any> {
    console.log('passchange');
    console.log(user.passwordold.value);
    const params = new HttpParams().set('id', id);

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };
    return this.http.put(
      USERS_API + 'password',
      {
        oldPassword: user.passwordold.value,
        newPassword: user.passwordnew.value,
      },
      httpOptions
    );
  }

  public ajoutReclamation(reclamation: any, user_id: any): Observable<any> {
    const params = new HttpParams();
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };
    return this.http.post(
      USERS_API + 'ajout-reclamation',
      {
        description: reclamation.details.value,
        type_prob: reclamation.typecheck.value,
        user_id: user_id,
      },
      httpOptions
    );
  }

  SendMailReponseRecla(nom, prenom, email, reponse): Observable<any> {
    const params = new HttpParams();
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };

    return this.http.post(
      MAIL_API + 'sendmailReponseRecla',
      {
        nom: nom,
        prenom: prenom,
        email: email,
        reponseRecla: reponse,
      },
      httpOptions
    );
  }

  public ajoutModifPhotoProfil(photo): any {
    this.http
      .post(USERS_API + 'photo-profile', photo)
      .subscribe((response) => {});
  }
  public ajoutRecu(photo): any {
    this.http.post(USERS_API + 'depot-recu', photo).subscribe((response) => {});
  }

  public ajoutRecuMobile(recu: any):Observable<any> {
    const params = new HttpParams();
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };
    return this.http.post(USERS_API + 'depot-recu-mobile',recu);

  }

  

  public getUserSessions(id): Observable<any> {
    const params = new HttpParams().set('id', id);

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };
    return this.http.get(USERS_API + 'dashboard-apprenant/' + id, httpOptions);
  }

  public verifNbFeedbackPerApprenantpersession(
    user_id,
    session
  ): Observable<any> {
    const params = new HttpParams()
      .set('user_id', user_id)
      .set('session_id', session);

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };
    return this.http.get(
      USERS_API + 'verifNbFeedbackPerApprenantpersession',
      httpOptions
    );
  }
  SendFeedback(
    quest: any,
    check: any,
    type: any,
    user_id: any,
    session_id: any
  ): Observable<any> {
    const params = new HttpParams();
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };

    return this.http.post(
      USERS_API + 'ajout-feedback',
      {
        question: quest,
        etat: check,
        //comment:email,
        type: type,
        user_id: user_id,
        session_id: session_id,
      },
      httpOptions
    );
  }
}
