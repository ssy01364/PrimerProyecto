import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [MatButtonModule,MatToolbarModule,MatIconModule, RouterLink,RouterModule],
  selector: 'app-nav-bar',
  styleUrl: './nav-bar.css',
  templateUrl: './nav-bar.html',
})
export class NavBar {
  private router = inject(Router);
  lista(){
    this.router.navigate(['/frutas']);
  }

}
