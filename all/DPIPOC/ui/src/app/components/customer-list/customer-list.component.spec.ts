import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerService } from "../../services/customer.service";
import { MatDialog, MatDialogModule,MatToolbarModule } from "@angular/material";
import { DialogService } from "../../services/dialog.service";
import { NotificationsService } from "../../services/notifications.service";
import { CustomerListComponent } from './customer-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {MatIconModule} from '@angular/material/icon';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatSnackBar} from '@angular/material';
import { MatTableDataSource } from "@angular/material/table";
import { Customer } from "../../interfaces/customer";
describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;
  let service:CustomerService;
  let serviceNotification:NotificationsService;
  let dialog:MatDialog;
  let serviceDialog:DialogService;
  let  dataSource: MatTableDataSource<Customer>;
  let data;
  let dialogMock = {
    filter:  { }
};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerListComponent ],
      imports: [HttpClientTestingModule,FormsModule,MatTableModule ,MatDialogModule,MatToolbarModule,MatIconModule, BrowserAnimationsModule],
      providers: [{provide:MatTableDataSource,useValue:dialogMock},DialogService,NotificationsService,CustomerService,MatSnackBar,MatTableDataSource],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    service = TestBed.get(CustomerService);
    serviceNotification = TestBed.get(NotificationsService);
    serviceDialog = TestBed.get(DialogService);
    dialog = TestBed.get(MatDialog);
    dataSource=TestBed.get(MatTableDataSource);
   
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should execute ngOninit()', () => {
    component.ngOnInit();
    spyOn(component,'getcustomer');
    expect(component.getcustomer).toBeDefined();
  });


  xit('should execute onSearchClear()', () => {
    component.onSearchClear();
    spyOn(component,'onSearchClear');
    component.searchKey="";
    spyOn(component,'applyFilter');
    expect(component.applyFilter).toHaveBeenCalled();
    expect(component.onSearchClear()).toBeDefined();
  });


  xit('should execute applyFilter()', () => {
    component.applyFilter();
    spyOn(component,'applyFilter');
    let spy = spyOn(component.searchKey, 'trim').and.callThrough();
let app=component.dataSource.filter;
    expect(spy).toHaveBeenCalled();   
   expect(app).toMatch(component.searchKey.trim().toLowerCase());
  });

  xit('should execute onCreate()', () => {
    component.onCreate();
    spyOn(component, 'onCreate');
    expect(component.onCreate).toHaveBeenCalled();
    spyOn(serviceDialog, 'opemForm');
    expect(serviceDialog.opemForm).toHaveBeenCalled();
    component.dialogservice.opemForm(0).afterClosed().subscribe(res => {
      spyOn(component, 'getcustomer');
      expect(component.getcustomer).toHaveBeenCalled();
      expect(component.getcustomer()).toBeDefined();
    });
});


    it('should execute getcustomer()', () => {
      const dataFromService: Customer[] = [];
  service.getCustomerList().subscribe(data => {
    expect(data.length).toBe(2);
      expect(data).toEqual(dataFromService);
  });
    });
  

});


