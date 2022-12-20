import {NgModule, Provider} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PostPageComponent} from './post-page/post-page.component';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {CreatePageComponent} from './admin/create-page/create-page.component';
import {EditPageComponent} from './admin/edit-page/edit-page.component';
import {DashboardPageComponent} from './admin/dashboard-page/dashboard-page.component';
import {LoginPageComponent} from './admin/login-page/login-page.component';
import {AdminLayoutComponent} from './admin/shared/components/admin-layout/admin-layout.component';
import {PostComponent} from './shared/components/post/post.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "./shared/shared.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./auth.interceptor";
import {AuthService} from "./admin/shared/services/auth.service";

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostPageComponent,
    MainLayoutComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [INTERCEPTOR_PROVIDER, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
