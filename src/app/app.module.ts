import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./auth/auth.module";
import { StreamsModule } from "./streams/streams.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuthModule, StreamsModule, AppRoutingModule],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
