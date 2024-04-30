import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { CarouselModule } from 'primeng/carousel';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { StepperModule } from 'primeng/stepper';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { ChartPieDemoComponent } from './chart-pie-demo/chart-pie-demo.component';
import { ChartDoughnutDemoComponent } from './chart-doughnut-demo/chart-doughnut-demo.component';
import { ChartVerticalBarDemoComponent } from './chart-vertical-bar-demo/chart-vertical-bar-demo.component';
import { ChartLineDemoComponent } from './chart-line-demo/chart-line-demo.component';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TieredMenuPopupDemoComponent } from './tiered-menu-popup-demo/tiered-menu-popup-demo.component';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { BadgeModule } from 'primeng/badge';
import { ChipModule } from 'primeng/chip';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogHeadlessDemoComponent } from './confirm-dialog-headless-demo/confirm-dialog-headless-demo.component';
import { CalendarModule } from 'primeng/calendar';
import { CardComponent } from './card/card.component';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [
    AppComponent,
    ChartPieDemoComponent,
    ChartDoughnutDemoComponent,
    ChartVerticalBarDemoComponent,
    ChartLineDemoComponent,
    TieredMenuPopupDemoComponent,
    ConfirmDialogHeadlessDemoComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    PasswordModule,
    DropdownModule,
    TableModule,
    StepperModule,
    CarouselModule,
    AvatarGroupModule,
    AvatarModule,
    ChartModule,
    TieredMenuModule,
    EditorModule,
    InputTextModule,
    InputTextareaModule,
    ConfirmDialogModule,
    ToastModule,
    BadgeModule,
    ChipModule,
    CalendarModule,
    CardModule,
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
