
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { CustomerService } from "../../services/customer.service";
import { NotificationsService } from "../../services/notifications.service";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule, MatToolbarModule, MatDialogRef } from "@angular/material";
import { CustomerDetailsComponent } from './customer-details.component';
import { OverlayContainer } from '@angular/cdk/overlay';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
describe('CustomerDetailsComponent', () => {
  let component: CustomerDetailsComponent;
  let fixture: ComponentFixture<CustomerDetailsComponent>;
  let service: CustomerService;
  let serviceNotification: NotificationsService;
  let dialogref: MatDialogRef<CustomerDetailsComponent>;
  let overlayContainerElement: HTMLElement;
  let overlayContainer: OverlayContainer;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerDetailsComponent],
      imports: [HttpClientTestingModule, BrowserDynamicTestingModule, MatTableModule, MatDialogModule, MatToolbarModule, MatIconModule, BrowserAnimationsModule],
      providers: [CustomerService, NotificationsService, MatDialogRef, MatToolbarModule, { provide: MAT_DIALOG_DATA, useValue: {}, }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dialogref = TestBed.get(MatDialogRef);
    service = TestBed.get(CustomerService);
    serviceNotification = TestBed.get(NotificationsService);
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
