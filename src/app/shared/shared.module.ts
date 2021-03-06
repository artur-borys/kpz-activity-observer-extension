import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatTabsModule,
  MatToolbarModule,
  MatExpansionModule,
  MatChipsModule,
  MatMenuModule,
  MatDialogModule,
  MatCheckboxModule,
  MatStepperModule,
  MatRippleModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatTooltipModule,
  MatRadioModule,
  MatTableModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatBottomSheetModule,
  MatListModule,
  MatLineModule,
  MatAutocompleteModule,
  MatDatepickerModule
} from '@angular/material';
import {OverlayModule} from '@angular/cdk/overlay';
import {HttpClientModule} from '@angular/common/http';
import {NgxChartsModule} from "@swimlane/ngx-charts";

// import * as Components from './components';
import * as Directives from './directives';
import * as Loaders from './loaders';
import * as Layout from './layout';
import * as Forms from './forms';

@NgModule({
  declarations: [
    Layout.HeaderComponent,
    Layout.AuthWrapperComponent,
    Layout.AppWrapperComponent,
    Forms.InputComponent,
    Forms.ButtonComponent,
    Forms.CheckboxComponent,
    Forms.SelectComponent,
    Directives.BgImageDirective,
    Directives.SmoothHeightDirective,
    Directives.CountToDirective,
    Loaders.InfiniteScrollLoaderComponent,
    Loaders.PageLoaderComponent,
    Loaders.SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    OverlayModule,
    NgxChartsModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatExpansionModule,
    MatChipsModule,
    MatMenuModule,
    MatDialogModule,
    MatCheckboxModule,
    MatStepperModule,
    MatRippleModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatTooltipModule,
    MatRadioModule,
    MatTableModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatBottomSheetModule,
    MatListModule,
    MatLineModule,
    MatAutocompleteModule,
    MatDatepickerModule,
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Layout.HeaderComponent,
    Layout.AuthWrapperComponent,
    Layout.AppWrapperComponent,
    Forms.InputComponent,
    Forms.ButtonComponent,
    Forms.CheckboxComponent,
    Forms.SelectComponent,
    Directives.BgImageDirective,
    Directives.SmoothHeightDirective,
    Directives.CountToDirective,
    Loaders.InfiniteScrollLoaderComponent,
    Loaders.PageLoaderComponent,
    Loaders.SpinnerComponent,
    OverlayModule,
    NgxChartsModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatExpansionModule,
    MatChipsModule,
    MatMenuModule,
    MatDialogModule,
    MatCheckboxModule,
    MatStepperModule,
    MatRippleModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatTooltipModule,
    MatRadioModule,
    MatTableModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatBottomSheetModule,
    MatListModule,
    MatLineModule,
    MatAutocompleteModule,
    MatDatepickerModule,
  ]
})
export class SharedModule {
}
