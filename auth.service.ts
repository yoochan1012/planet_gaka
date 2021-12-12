import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Login, userNoPW } from '../models/User';
import { JwtHelperService } from '@auth0/angular-jwt';

const httpOptions = {
  headers: new HttpHeaders({
    ContentType: 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: User;

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }

  prefEndpoint(ep){
    return "http://localhost:5000/" + ep;
    // return ep;
  }
  registerUser(user): Observable<any> {
    const registerUrl = this.prefEndpoint('user/register');
    return this.http.post(registerUrl, user, httpOptions);
  }  

  authenticateUser(login): Observable<any> {
    const authUrl = this.prefEndpoint('user/authenticate');
    return this.http.post<Login>(authUrl, login, httpOptions);
  } 

  storeUserData(token: any, userNoPW: userNoPW) {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userNoPW', JSON.stringify(userNoPW));
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userNoPW');
    localStorage.removeItem('card');
  }

  
  
  loggedIn(): boolean {
    let authToken: any = localStorage.getItem('authToken');
    return !this.jwtHelper.isTokenExpired(authToken);
  }
}
