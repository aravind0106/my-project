import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SemesterResultComponent } from './semester-result/semester-result.component';
import { HttpClientModule } from '@angular/common/http'; 
import { HomePageComponent } from './home-page/home-page.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FormsModule } from '@angular/forms';
import { IvyCarouselModule } from 'angular-responsive-carousel';



@NgModule({
  declarations: [
    AppComponent,
    SemesterResultComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    YouTubePlayerModule,
    FormsModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
