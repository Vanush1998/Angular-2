import {User} from './user';

export class ActiveUserService {
  private activeUser: User;

  public set(user: User) {
    this.activeUser = user;
  }

  public get() {
    return this.activeUser;
  }

  constructor() {
  }
}
