import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyLibService {
  constructor(@Inject('API_KEY') private apiKey: string) {}

  sayHello(): void {
    console.log(`Hi! your api Key is ${this.apiKey}`);
  }
}
