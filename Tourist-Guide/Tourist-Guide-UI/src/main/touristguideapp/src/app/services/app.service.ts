import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  registerUser(form: any): Observable<any> {

    const url = 'http://localhost:8181/app/register';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(url, form.value, { headers })
      .pipe(
        catchError(error => {
          console.error("Error during registration:", error);
          return of({ success: false, message: 'Registration failed' });
        })
      );
  }
}
