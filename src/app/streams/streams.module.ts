import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TokenService } from "../services/token.service";
import { StreamsRoutingModule } from "./streams-routing.module";
import { StreamsComponent } from "./streams.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SideComponent } from './side/side.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [StreamsComponent, NavbarComponent, SideComponent, PostFormComponent, PostsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StreamsRoutingModule
  ],
  providers: [TokenService]
})
export class StreamsModule {}
