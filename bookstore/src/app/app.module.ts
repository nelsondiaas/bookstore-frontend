import {  BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlModule } from 'ngx-owl-carousel';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Add imports */
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgImageSliderModule } from 'ng-image-slider';
import { NgxSkltnModule, SkltnConfig } from 'ngx-skltn';

const skltnConfig: SkltnConfig = {
  rectRadius: 10,
  flareWidth: '150px',
  bgFill: '#d8d5d1',
  flareFill: 'rgba(255,255,255, 0.5)',
};

import * as MATERIAL_MODULES from '@angular/material';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/common/header/header.component';
import { SignupComponent } from './components/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './guard/auth-guard.service';
import { SliderComponent } from './components/common/slider/slider.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/common/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HeaderComponent,
    SliderComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

    /* Material */
    MATERIAL_MODULES.MatAutocompleteModule,
    MATERIAL_MODULES.MatButtonModule,
    MATERIAL_MODULES.MatButtonToggleModule,
    MATERIAL_MODULES.MatCardModule,
    MATERIAL_MODULES.MatCheckboxModule,
    MATERIAL_MODULES.MatChipsModule,
    MATERIAL_MODULES.MatDatepickerModule,
    MATERIAL_MODULES.MatDialogModule,
    MATERIAL_MODULES.MatExpansionModule,
    MATERIAL_MODULES.MatGridListModule,
    MATERIAL_MODULES.MatIconModule,
    MATERIAL_MODULES.MatInputModule,
    MATERIAL_MODULES.MatListModule,
    MATERIAL_MODULES.MatMenuModule,
    MATERIAL_MODULES.MatProgressBarModule,
    MATERIAL_MODULES.MatProgressSpinnerModule,
    MATERIAL_MODULES.MatRadioModule,
    MATERIAL_MODULES.MatRippleModule,
    MATERIAL_MODULES.MatSelectModule,
    MATERIAL_MODULES.MatSidenavModule,
    MATERIAL_MODULES.MatSlideToggleModule,
    MATERIAL_MODULES.MatSliderModule,
    MATERIAL_MODULES.MatSnackBarModule,
    MATERIAL_MODULES.MatStepperModule,
    MATERIAL_MODULES.MatTableModule,
    MATERIAL_MODULES.MatTabsModule,
    MATERIAL_MODULES.MatToolbarModule,
    MATERIAL_MODULES.MatTooltipModule,
    MATERIAL_MODULES.MatNativeDateModule,
    MATERIAL_MODULES.MatTreeModule,
    OwlModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    NgxSkltnModule.forRoot(skltnConfig)
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, SignupComponent]
})

export class AppModule { }