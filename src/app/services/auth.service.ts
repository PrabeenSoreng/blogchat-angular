import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const url = "http://localhost:8080/api/auth";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(body) {
    return this.http.post(`${url}/signup`, body);
  }

  login(body) {
    return this.http.post(`${url}/login`, body);
  }
}
