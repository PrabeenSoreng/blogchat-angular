import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required)
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe(
      result => {
        console.log(result);
        this.router.navigate(["/streams"]);
      },
      err => {
        console.log(err);
        if (!err.error.data) this.errorMessage.push(err.error.message);
        else {
          err.error.data.map(msg => {
            return this.errorMessage.push(msg.msg);
          });
        }
        this.loginForm.reset();
      }
    );
  }

  get email() {
    return this.loginForm.get("email");
  }

  get password() {
    return this.loginForm.get("password");
  }
}
