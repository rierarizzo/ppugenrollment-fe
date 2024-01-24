import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss']
})
export class NavDrawerComponent {

  visible = false;
  placement: NzDrawerPlacement = 'left';
  profileName: string;
  isApprover: boolean = this.authService.userIsApprover();

  constructor(private router: Router, private authService: AuthService) {
    const userData = JSON.parse(localStorage.getItem("userData")!);
    this.profileName = userData.data.name + " " + userData.data.surname;
  }

  open(): void {
    this.visible = true;
  }

  openDrawer() {
    this.visible = !this.visible;
  }

  logout() {
    localStorage.removeItem('userData');
    this.router.navigate(['/']);
  }
}
