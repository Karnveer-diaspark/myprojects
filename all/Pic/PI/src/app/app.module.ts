import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageCropperModule } from 'ngx-image-cropper';
import { PopupComponent } from './popup/popup.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule, MatMenuModule, MatDatepickerModule, MatNativeDateModule, MatIconModule,
MatCardModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatTooltipModule, MatToolbarModule} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    LoginComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ImageCropperModule,
    MatDialogModule ,
    MatButtonModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
