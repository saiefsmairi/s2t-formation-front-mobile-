import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const SESSION_API = 'http://localhost:9080/api/sessions/';
const REGISTRE_API = 'http://localhost:9080/api/registre/';

const params = new HttpParams();

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  params
};
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  getAllSessions(userId: any): Observable<any> {
    // tslint:disable-next-line: no-shadowed-variable
    const params = new HttpParams().set('userId', userId);

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params
    };
    return this.http.get(SESSION_API + 'sessions/' +
      userId, httpOptions);

  }

 FindAllSessionsWithoutwhere(): Observable<any> {
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params
    };
    return this.http.get(SESSION_API + 'allSession/' , httpOptions);

  }

  
 
  getAllSessionsPerFormateur(id): Observable<any> {
    // tslint:disable-next-line: no-shadowed-variable
    const params = new HttpParams().set('id', id);

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params
    };
    return this.http.get(SESSION_API + 'sessions_perUser/' + id, httpOptions);

  }

getSessionInfo(id, UserRole): Observable<any> {
  // tslint:disable-next-line: no-shadowed-variable
  const params = new HttpParams().set('id', id);

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    params
  };


      return this.http.get(`${SESSION_API}sessionFormateur/${id}`, httpOptions);



}

getSessionByid(id): Observable<any> {
  const params = new HttpParams().set('id', id);

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    params
  };
      return this.http.get(`${SESSION_API}get-session-ById/${id}`, httpOptions);
}


ajoutSupportCours(file): Observable<any> {
  // tslint:disable-next-line: no-shadowed-variable
  const params = new HttpParams();
  httpOptions = {
    headers: new HttpHeaders({ }),
    params
  };

  return this.http.post(SESSION_API + 'support-cours', file

 , httpOptions);
}

getSupportCours(id): Observable<any> {
  // tslint:disable-next-line: no-shadowed-variable
  const params = new HttpParams().set('id', id);
  httpOptions = {
    headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'}),
    params
  };

  return this.http.get(SESSION_API + 'get-support-cours/' + id

 , httpOptions);
}

DeleteSupportCours(id): Observable<any> {
  // tslint:disable-next-line: no-shadowed-variable
  const params = new HttpParams().set('id', id);
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
    params
  };

  return this.http.delete(SESSION_API + 'delete-support-cours/' + id

 , httpOptions);
}
EditSupportCours(file): Observable<any> {
  console.log(file.get('name'))
  const params = new HttpParams();
  httpOptions = {
    headers: new HttpHeaders({ }),
    params
  };

  return this.http.put(SESSION_API + 'edit-support-cours', file

 , httpOptions);
}

AllSessions(): Observable<any> {
  // tslint:disable-next-line: no-shadowed-variable

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    params
  };
  return this.http.get(SESSION_API + 'sessions/' , httpOptions);

}

NbSessionParMonth(): Observable<any> {
  // tslint:disable-next-line: no-shadowed-variable

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    params
  };
  return this.http.get(SESSION_API + 'NbSessionParMonth/' , httpOptions);

}
}