import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiKeyService {
  private apiKey: string;

  setApiKey(key: string): void {
    this.apiKey = key;
  }

  getApiKey(): string {
    return this.apiKey;
  }
}
