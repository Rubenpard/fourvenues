  import { Injectable } from '@angular/core';
  import { from, Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root',
  })
  export class RandomUserService {
    private apiUrl = 'https://randomuser.me/api/';

    constructor() {}

    getRandomUser(): Observable<any> {
      // Usamos 'from' para convertir la Promise en Observable
      return from(fetch(this.apiUrl).then(response => response.json()));
    }
  }
