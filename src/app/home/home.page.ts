import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private router: Router) {}
  
  navToClaim(event: Event){
    this.router.navigate(['/claim']);
  }

  navToCamera(event: Event){
    this.router.navigate(['/photo']);
  }
}
