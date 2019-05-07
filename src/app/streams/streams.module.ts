import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StreamsComponent } from "./streams.component";
import { StreamsRoutingModule } from "./streams-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [StreamsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StreamsRoutingModule
  ]
})
export class StreamsModule {}
