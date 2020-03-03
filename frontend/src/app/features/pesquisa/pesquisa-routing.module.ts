import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PesquisaComponent } from "./pesquisa/pesquisa.component";

const routes: Routes = [
  {
    path: "",
    component: PesquisaComponent,
    data: { title: "app.menu.pesquisa" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PesquisaRoutingModule {}
