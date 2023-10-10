import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from 'src/shared/components/navbar/navbar.component';
import { ReportComponent } from 'src/shared/components/report/report.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
