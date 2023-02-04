import { ApiKeyService } from './services/api-key.service';

export class ApiKeyProvider {
  constructor(private readonly apiKeyService: ApiKeyService) {}

  getApiKey(): string {
    return this.apiKeyService.getApiKey();
  }
}
