import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "pesquisa",
    pathMatch: "full"
  },
  {
    path: "pesquisa",
    loadChildren: () =>
      import("./features/pesquisa/pesquisa.module").then(m => m.PesquisaModule)
  },
  {
    path: "login",
    loadChildren: () =>
      import("./features/login/login.module").then(m => m.LoginModule)
  },
  {
    path: "cadastro-usuario",
    loadChildren: () =>
      import("./features/cadastro-usuario/cadastro-usuario.module").then(m => m.CadastroUsuarioModule)
  },
  {
    path: "feature-list",
    loadChildren: () =>
      import("./features/feature-list/feature-list.module").then(
        m => m.FeatureListModule
      )
  },
  {
    path: "settings",
    loadChildren: () =>
      import("./features/settings/settings.module").then(m => m.SettingsModule)
  },
  {
    path: "examples",
    loadChildren: () =>
      import("./features/examples/examples.module").then(m => m.ExamplesModule)
  },
  {
    path: "**",
    redirectTo: "pesquisa"
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: "enabled",
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
