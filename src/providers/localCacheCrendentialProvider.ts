import { CredentialProvider, Credentials } from './credentialProvider';

export class LocalCacheCredentialProvider implements CredentialProvider {
  constructor(private credentials: Credentials) {}

  async updateCredential(credentials: Credentials): Promise<void> {
    this.credentials = credentials;
  }

  update(credentials: Credentials): Promise<void> {
    throw new Error('Not implemented');
  }

  async getCredential(): Promise<Credentials> {
    return this.credentials;
  }

  fetch(): Promise<Credentials> {
    throw new Error('Not implemented');
  }
}
