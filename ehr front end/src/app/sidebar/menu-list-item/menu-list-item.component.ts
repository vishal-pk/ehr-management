import { Component, OnInit ,Input} from '@angular/core';
import {SideNavItem} from 'src/app/menu-item';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.css']
})
export class MenuListItemComponent implements OnInit {
  @Input() item: SideNavItem;
  constructor() { }

  ngOnInit(): void {
  }

}
