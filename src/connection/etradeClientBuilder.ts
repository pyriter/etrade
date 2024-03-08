import { AuthorizationTokenInterceptor } from "./authorizationTokenInterceptor";
import { LocalFileCredentialProvider } from "../providers/localFileCredentialProvider";
import { LocalCacheCredentialProvider } from "../providers/localCacheCrendentialProvider";
import { Credentials } from "../providers/credentialProvider";
import { EtradeClient, EtradeClientBuilderConfig } from "./etradeClient";

export class EtradeClientBuilder {
  constructor(private config: EtradeClientBuilderConfig) {}

  build(): EtradeClient {
    const authorizationInterceptor = this.getAuthorizationInterceptor();
    return new EtradeClient({
      authorizationInterceptor,
    });
  }

  private getAuthorizationInterceptor(): AuthorizationTokenInterceptor {
    if (this.config.authorizationInterceptor)
      return this.config.authorizationInterceptor;
    let provider;
    if (this.config.fileName) {
      provider = new LocalFileCredentialProvider(this.config.fileName);
    } else {
      const { access_token, refresh_token, client_id, redirect_uri } =
        this.config;
      provider = new LocalCacheCredentialProvider({
        access_token,
        refresh_token,
        client_id,
        redirect_uri,
      } as Credentials);
    }
    return new AuthorizationTokenInterceptor(provider);
  }
}
