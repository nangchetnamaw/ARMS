import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient,HttpHeaders} from '@angular/common/http'
import { JwtHelperService } from '@auth0/angular-jwt';

const LOGIN_API="http://localhost:3000/api/checkvalidemployee"
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
        "Content-Type": "application/json"
    })
  };

  getToken(): string {
    return localStorage.getItem('x-auth-token');
  }

  tokenDecoder(): any {
    const helper = new JwtHelperService();
    return helper.decodeToken(this.getToken());
  }
   checkPermissions(idToken):Observable<any>{
    return this.http.post<any>(LOGIN_API,{idToken},{...this.httpOptions});
  }
}
