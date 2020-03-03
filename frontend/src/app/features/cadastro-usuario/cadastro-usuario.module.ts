import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { SharedModule } from 'app/shared/shared.module';
import { CadastroUsuarioRoutingModule } from './cadastro-usuario-routing.module';

@NgModule({
  declarations: [CadastroUsuarioComponent],
  imports: [
    CommonModule,
    SharedModule,
    CadastroUsuarioRoutingModule
  ]
})
export class CadastroUsuarioModule { }
