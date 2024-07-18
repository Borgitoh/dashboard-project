import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerformanceComponent } from './performance/performance.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { FinanceComponent } from './finance/finance.component';
import { ResearchComponent } from './research/research.component';
import { EmployabilityComponent } from './employability/employability.component';
import { SatisfactionComponent } from './satisfaction/satisfaction.component';
import { DemographicsComponent } from './demographics/demographics.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'performance', component: PerformanceComponent  },
  { path: 'admissions', component: AdmissionsComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'employability', component: EmployabilityComponent },
  { path: 'satisfaction', component: SatisfactionComponent },
  { path: 'demographics', component: DemographicsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
