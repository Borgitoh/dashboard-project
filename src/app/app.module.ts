import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule  } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerformanceComponent } from './performance/performance.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { FinanceComponent } from './finance/finance.component';
import { ResearchComponent } from './research/research.component';
import { EmployabilityComponent } from './employability/employability.component';
import { SatisfactionComponent } from './satisfaction/satisfaction.component';
import { DemographicsComponent } from './demographics/demographics.component';
import { HomeComponent } from './home/home.component';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PerformanceComponent,
    AdmissionsComponent,
    FinanceComponent,
    ResearchComponent,
    EmployabilityComponent,
    SatisfactionComponent,
    DemographicsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
