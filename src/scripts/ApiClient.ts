import ApiDecorator from "./ApiDecorator";

export default class ApiClient implements ApiDecorator {
  private static instance: ApiClient;
  private url: string = "https://random-data-api.com/api/v2/";
  private constructor() {}

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  public getUrl(): string {
    return this.url;
  }
}
