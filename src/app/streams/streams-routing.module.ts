import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { StreamsComponent } from "./streams.component";
import { AuthGuard } from "../services/auth.guard";

const routes: Routes = [
  { path: "streams", component: StreamsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class StreamsRoutingModule {}
