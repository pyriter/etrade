import { Interceptor } from "./interceptor";
import { CredentialProvider } from "../providers/credentialProvider";
import { EtradeClientBuilder } from "./etradeClientBuilder";
import { Client } from "./client";
import { oauth, OAuthData, OAuthResponse } from "../api/authenticate";
import { AuthorizationTokenInterceptor } from "./authorizationTokenInterceptor";

export interface ClientConfig {
  authorizationInterceptor: Interceptor;
}

export interface EtradeClientBuilderConfig {
  access_token?: string;
  refresh_token?: string;
  client_id?: string;
  redirect_uri?: string;
  fileName?: string;
  credentialProvider?: CredentialProvider;
  authorizationInterceptor?: AuthorizationTokenInterceptor;
}

export class EtradeClient {
  private readonly client: Client;

  constructor(private config: ClientConfig) {
    this.client = new Client();
    this.client.addInterceptor(config.authorizationInterceptor);
  }

  static from(config: EtradeClientBuilderConfig): EtradeClient {
    return new EtradeClientBuilder(config).build();
  }

  async authenticate(config: OAuthData): Promise<OAuthResponse> {
    return await oauth(config, this.client);
  }
}
