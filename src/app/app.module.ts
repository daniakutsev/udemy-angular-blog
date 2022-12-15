import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { CreatePageComponent } from './admin/create-page/create-page.component';
import { EditPageComponent } from './admin/edit-page/edit-page.component';
import { DashboardPageComponent } from './admin/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './admin/login-page/login-page.component';
import { AdminLayoutComponent } from './admin/shared/components/admin-layout/admin-layout.component';
import { PostComponent } from './shared/components/post/post.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostPageComponent,
    MainLayoutComponent,
    CreatePageComponent,
    EditPageComponent,
    DashboardPageComponent,
    LoginPageComponent,
    AdminLayoutComponent,
    PostComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
