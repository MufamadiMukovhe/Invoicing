import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', 'theme.css', 'demo.css' ]
  
})
export class DashboardComponent
 {
  
  constructor(private router: Router) { }

  navigateToDestination() {
      this.router.navigate(['/settings']);
  }

}
