import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'anms-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CadastroUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
