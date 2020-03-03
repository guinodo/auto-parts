import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService, ROUTE_ANIMATIONS_ELEMENTS } from 'app/core/core.module';
import { Observable } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'anms-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CadastroUsuarioComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  form = this.fb.group({
    autosave: false,
    nome: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    usuario: ["", [Validators.required]],
    dataNascimento: ["", [Validators.required]],
    senha: [
      "",       
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ]
    ],
    confirmacaoSenha: [
      "",       
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ]
    ]
  });

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      console.log('cadastro');
    }
  }

  save() {
    console.log('salvando');
  }

  reset() {
    this.form.reset();
    this.form.clearValidators();
    this.form.clearAsyncValidators();
  }

}
