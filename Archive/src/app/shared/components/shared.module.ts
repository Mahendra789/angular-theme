import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SideMenuComponent } from './side-menu/side-menu.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
	declarations: [
		SideMenuComponent,
		NavBarComponent,
	],
	imports: [
		CommonModule,
		MatIconModule,
		MatTooltipModule,
		MatToolbarModule

	],
	exports: [
		SideMenuComponent,
		NavBarComponent
	],
	providers: [
	]
})
export class SharedModule { }
