import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const LANG_KEY = 'lang';

@Injectable()
export class TokenStorageService {

  constructor() { }

  signOut() {
    sessionStorage.removeItem(TOKEN_KEY);
    //sessionStorage.removeItem(LANG_KEY);
    sessionStorage.clear();
  }

  public saveToken(token: string) {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }
}
