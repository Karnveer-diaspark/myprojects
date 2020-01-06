import { inject, TestBed } from '@angular/core/testing';
import { DialogService } from './dialog.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from "../components/confirm-dialog/confirm-dialog.component";
import { CustomerDetailsComponent } from "../components/customer-details/customer-details.component";

describe('DialogService', () => {
    let service: DialogService;
    let httpMock: HttpTestingController;
  let msg = "hello";
    let id;
    let data = {
        width: '390px',
        panelClass: 'confirm-dialog-container',
        disableClose: true,
        position: { top: "10px" },
        data: {
            message: msg
        }
    };
    let idData = {
        width: '80%',
        disableClose: true,
        data: {
            message: id
        }
    };


    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, MatDialogModule, BrowserAnimationsModule],
            providers: [DialogService]
        });
        service = TestBed.get(DialogService);
        httpMock = TestBed.get(HttpTestingController);
    });
    it('notification service should be created', () => {
        expect(service).toBeTruthy();
    });


    xit('should execute confirmdialog', () => {
        service.openConfirmDialog(ConfirmDialogComponent);
        // expect(service.openConfirmDialog).toHaveBeenCalledWith(ConfirmDialogComponent, data);
        expect(service.openConfirmDialog).toBeTruthy();
    });

    xit('should open opemform', () => {
        service.opemForm(ConfirmDialogComponent);
        expect(service.opemForm).toHaveBeenCalledWith(CustomerDetailsComponent, idData);
    });

    afterEach(() => {
        httpMock.verify();
    });
});


