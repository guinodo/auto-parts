import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PesquisaComponent } from "./pesquisa/pesquisa.component";

import { SharedModule } from "app/shared/shared.module";
import { PesquisaRoutingModule } from "./pesquisa-routing.module";

@NgModule({
  declarations: [PesquisaComponent],
  imports: [CommonModule, SharedModule, PesquisaRoutingModule]
})
export class PesquisaModule {}
