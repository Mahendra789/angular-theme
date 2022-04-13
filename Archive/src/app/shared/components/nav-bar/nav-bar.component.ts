import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isfullMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  toggleMenu(): void {
    this.isfullMenu = !this.isfullMenu;
  }
  showFullMenu(check: boolean): void {
    this.isfullMenu = check;
  }
}
