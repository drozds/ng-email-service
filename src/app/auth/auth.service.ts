import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
  
interface usernameAvailableResponse {
  available: boolean
}

interface UserCredentials {
  username: string;
  password: string;
  passwordConfirmation: string
}

interface SigninCredentials {
  username: string;
  password: string;
}

interface SignupResponse {
  username: string
}

interface SignedInResponse {
  authenticated: boolean;
  username: string;
}

interface SigninResponse {
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signedIn$ = new BehaviorSubject<boolean>(null);
  rootUrl = 'https://api.angular-email.com'

  constructor(private http: HttpClient) { }

  usernameAvailable = (username: string) =>
    this.http.post<usernameAvailableResponse>(`${this.rootUrl}/auth/username`, {
            username        
    })
  
  signup = (user: UserCredentials) => 
    this.http.post<SignupResponse>(`${this.rootUrl}/auth/signup`, user)
      .pipe(
        tap(() => {
          this.signedIn$.next(true);
        })
    )
  
  checkAuth = () => 
    this.http.get<SignedInResponse>(`${this.rootUrl}/auth/signedin`)
      .pipe(
        tap(({ authenticated }) => {
          this.signedIn$.next(authenticated);
        })
    )
  
  signout = () => 
    this.http.post(`${this.rootUrl}/auth/signout`, {})
      .pipe(
        tap(() => {
          this.signedIn$.next(false)
        })
    )
  
  signin = (credentials: SigninCredentials) => 
    this.http.post<SigninResponse>(`${this.rootUrl}/auth/signin`, credentials)
      .pipe(
        tap(() => {
      this.signedIn$.next(true)
    })
  )
  
}
