import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [
  {
    path: "",
    component: CadastroUsuarioComponent,
    data: { title: "app.menu.cadastro.usuario" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroUsuarioRoutingModule {}
