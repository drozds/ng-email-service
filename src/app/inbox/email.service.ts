import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Email {
  id: string;
  subject: string;
  from: string;
}

export interface EmailFull {
  id: string;
  subject: string;
  from: string;
  to: string;
  text: string;
  html: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  rootUrl = 'https://api.angular-email.com'

  constructor(private http: HttpClient) { }

  getEmails = () => 
    this.http.get<Email[]>(`${this.rootUrl}/emails`)
  
  getEmail = (id: string) => 
    this.http.get<EmailFull>(`${this.rootUrl}/emails/${id}`)
  
  sendEmail = (email: EmailFull) =>
    this.http.post(`${this.rootUrl}/emails`, email)
}
