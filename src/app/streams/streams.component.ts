import { Component, OnInit } from "@angular/core";
import { TokenService } from "../services/token.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-streams",
  templateUrl: "./streams.component.html",
  styleUrls: ["./streams.component.css"]
})
export class StreamsComponent implements OnInit {
  constructor(private tokenService: TokenService, private router: Router) {}

  ngOnInit() {}

  logout() {
    this.tokenService.deleteToken();
    this.router.navigate(["/"]);
  }
}
