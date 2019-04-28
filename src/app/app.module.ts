import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrashAlt} from '@fortawesome/free-regular-svg-icons';
import {faFootballBall} from '@fortawesome/free-solid-svg-icons';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LotteryComponent} from './lottery/lottery.component';

@NgModule({
	declarations: [
		AppComponent,
		LotteryComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		FontAwesomeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor() {
		// Add an icon to the library for convenient access in other components
		library.add(faTrashAlt);
		library.add(faFootballBall);
	}
}
