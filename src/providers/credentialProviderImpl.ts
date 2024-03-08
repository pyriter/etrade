import { CredentialProvider, Credentials } from './credentialProvider';

export abstract class CredentialProviderImpl implements CredentialProvider {
  async fetch(): Promise<Credentials> {
    throw Error('You must implement a function to get the credential information and return it');
  }

  async update(credentials: Credentials): Promise<void> {
    throw Error('You must implement a function to store the given credential');
  }

  async updateCredential(credentials: Credentials): Promise<void> {
    const originalCredential = await this.getCredential();
    const credential = {
      ...originalCredential,
      ...credentials,
      modified_date: Date.now(),
    };
    await this.update(credential);
  }

  async getCredential(): Promise<Credentials> {
    return await this.fetch();
  }
}
