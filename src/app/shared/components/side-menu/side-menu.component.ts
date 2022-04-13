import { Component, OnInit } from '@angular/core';
import { MENU } from '../constants/constants';
import { Menu } from '../model/model';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  menuItems: Array<Menu> = MENU;

  constructor() { }

  ngOnInit(): void {}

}
