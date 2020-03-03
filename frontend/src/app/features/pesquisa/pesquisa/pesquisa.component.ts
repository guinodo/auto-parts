import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { ROUTE_ANIMATIONS_ELEMENTS } from "app/core/core.module";
import { Feature, features } from "app/features/feature-list/feature-list.data";

@Component({
  selector: "anms-pesquisa",
  templateUrl: "./pesquisa.component.html",
  styleUrls: ["./pesquisa.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PesquisaComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  features: Feature[] = features;

  constructor() {}

  ngOnInit(): void {}
}
