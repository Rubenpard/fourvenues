import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RandomUserService {
  private apiUrl = 'https://randomuser.me/api/';
  private apiUrlDummy = 'https://dummyjson.com/users?limit=1';

  constructor() {}

  getRandomUser(): Observable<any> {
    return from(
      fetch(this.apiUrl).then(response => response.json())
    );
  }
// En caso de estar caida la pagina https://randomuser.me/api/
  getRandomUserDummy(): Observable<any> {
    return from(
      fetch(this.apiUrlDummy).then(response => response.json())
    );
  }
}
