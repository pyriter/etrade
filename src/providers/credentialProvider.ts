export interface Credentials {
  access_token: string;
  refresh_token: string;
  scope?: string;
  expires_in: number;
  refresh_token_expires_in: number;
  token_type?: string;
  access_token_modified_date: number;
  refresh_token_modified_date: number;
  client_id: string;
  redirect_uri: string;
}

export interface CredentialProvider {
  // Initiates the call to get credentials with a chance to do some preprocessing
  // Is called by AuthorizationTokenInterceptor
  getCredential(): Promise<Credentials>;

  // Makes the call to get the credential from the persistent store
  // Is called by getCredential. See above.
  fetch(): Promise<Credentials>;

  // Initiates the call to update credentials with a chance to do some preprocessing
  // Is called by AuthorizationTokenInterceptor
  updateCredential(credentials: Credentials): Promise<void>;

  // Makes the call to update the credential to the persistent store.
  // Is called by updateCredential. See above.
  update(credentials: Credentials): Promise<void>;
}
