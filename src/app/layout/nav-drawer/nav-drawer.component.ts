import { Component } from '@angular/core';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss']
})
export class NavDrawerComponent {

  visible = false;
  placement: NzDrawerPlacement = 'left';
  open(): void {
    this.visible = true;
  }

  openDrawer(){
    this.visible = !this.visible;
  }
}
