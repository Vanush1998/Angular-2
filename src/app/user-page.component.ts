import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {ActiveUserService} from './active-user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.template.html',
})
export class UserPageComponent implements OnInit {
  activeUser: User;

  constructor(private http: Http, private router: Router, private activeUserService: ActiveUserService) {
    this.activeUser = this.activeUserService.get();
    if (this.activeUserService.get() == null) {
      this.router.navigate(['/SignInPage']);
    }
  }

  editProfile(): void {

  }

  ngOnInit(): void {


  }
}
