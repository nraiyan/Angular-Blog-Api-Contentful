import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { BlogpostComponent } from './blog/blogpost/blogpost.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule,  } from "@angular/material/icon";
import { MatMenuModule,  } from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogpostComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
