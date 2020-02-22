import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import { ROUTE_ANIMATIONS_ELEMENTS, NotificationService } from 'app/core/core.module';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "anms-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  form = this.fb.group({
    autosave: false,
    username: ["", [Validators.required]],
    password: ["", [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private translate: TranslateService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      this.notificationService.info(
        (this.form.value.requestGift
          ? this.translate.instant("anms.examples.form.text4")
          : this.translate.instant("anms.examples.form.text5")) +
          " : " +
          this.translate.instant("anms.examples.form.text6")
      );
    }
  }

  login(){
    console.log('login');
  }
  
  cadastroUsuario(){
    this.router.navigate(['../cadastro-usuario'], { relativeTo: this.activeRoute.parent });
  }

}
