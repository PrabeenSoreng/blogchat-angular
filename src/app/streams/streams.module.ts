import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TokenService } from "../services/token.service";
import { StreamsRoutingModule } from "./streams-routing.module";
import { StreamsComponent } from "./streams.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [StreamsComponent, NavbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StreamsRoutingModule
  ],
  providers: [TokenService]
})
export class StreamsModule {}
