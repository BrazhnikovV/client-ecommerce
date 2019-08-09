'use strict';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  providers: [AuthService]
})
export class LogoutComponent implements OnInit {

  /**
   * constructor
   * @param authService -
   */
  constructor( private authService: AuthService, private router: Router ) { }

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.authService.logout();
    this.router.navigate(['/'] );
  }
}
