import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { BannerComponent } from './banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MerryChristmasDialogComponent } from './merry-christmas-dialog/merry-christmas-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FrontPageComponent,
    BannerComponent,
    MerryChristmasDialogComponent,
    EmployeeCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatMenuModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
