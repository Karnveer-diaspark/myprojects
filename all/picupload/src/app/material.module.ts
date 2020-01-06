import {
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    MAT_DIALOG_DATA,
    MatTooltipModule,
    MatMenuModule,
    MatSidenavModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatDialogModule,
    MatDialogRef,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatExpansionModule

} from '@angular/material';



import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatTooltipModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatMenuModule,
        MatSidenavModule,
        MatSelectModule,
        MatRadioModule,
        MatTableModule,
        MatDialogModule,
        MatPaginatorModule,
        MatExpansionModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatMenuModule,
        MatSidenavModule,
        MatSelectModule,
        MatTableModule,
        MatRadioModule,
        MatPaginatorModule,
        MatExpansionModule
    ],
    providers: [
        {
            provide: MatDialogRef,
            useValue: {}
        },
        {
            provide: MAT_DIALOG_DATA,
            useValue: {}
        }
    ]

})

export class MaterialModule { }
