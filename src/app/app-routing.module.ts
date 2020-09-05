import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LotteryComponent } from './lottery/lottery.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'draft/:type', component: LotteryComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
