import ApiDecorator from "./ApiDecorator";

export default class UrlDecorator implements ApiDecorator {
  private apiClient: ApiDecorator;

  constructor(apiClient: ApiDecorator) {
    this.apiClient = apiClient;
  }

  public getUrl(type: string): string {
    return this.apiClient.getUrl() + type;
  }
}
