import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StreamsComponent } from "./streams.component";
import { StreamsRoutingModule } from "./streams-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TokenService } from "../services/token.service";

@NgModule({
  declarations: [StreamsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StreamsRoutingModule
  ],
  providers: [TokenService]
})
export class StreamsModule {}
