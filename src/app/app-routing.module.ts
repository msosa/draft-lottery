import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LotteryComponent} from './lottery/lottery.component';

const routes: Routes = [
	{path: '', component: LotteryComponent, pathMatch: 'full'},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
