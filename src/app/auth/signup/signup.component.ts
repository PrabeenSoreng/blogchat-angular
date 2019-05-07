import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMessage: string[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  onSubmit() {
    this.authService.signup(this.signupForm.value).subscribe(
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
        this.signupForm.reset();
      }
    );
  }

  get username() {
    return this.signupForm.get("username");
  }

  get email() {
    return this.signupForm.get("email");
  }

  get password() {
    return this.signupForm.get("password");
  }
}
