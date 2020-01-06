import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { CustomerService } from './services/customer.service';
import {MaterialModule} from './material/material.module'  //made module for material 
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { DialogService } from './services/dialog.service';
import { NotificationsService } from './services/notifications.service';
import { ConfirmDialogComponent } from "./components/confirm-dialog/confirm-dialog.component";
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import * as _ from "underscore";

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    ConfirmDialogComponent
    
  ],
  imports: [
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    PortalModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  
    HttpClientModule
  
  ],
  providers: [CustomerService,DialogService,NotificationsService],
  bootstrap: [AppComponent],
  entryComponents:[CustomerDetailsComponent,ConfirmDialogComponent]
})
export class AppModule { }






