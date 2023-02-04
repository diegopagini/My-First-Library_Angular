import { Injectable } from '@angular/core';

import { ApiKeyService } from './services/api-key.service';

@Injectable({
  providedIn: 'root',
})
export class MyLibService {
  constructor(private readonly _akService: ApiKeyService) {}

  sayHello(): void {
    console.log(`Hi! your api Key is ${this._akService.getApiKey()}`);
  }
}
