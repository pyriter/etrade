import { LocalFileCredentialProvider } from "../providers/localFileCredentialProvider";
import { CREDENTIALS_FILE_NAME } from "./constants";
import { EtradeClient } from "../connection/etradeClient";

export async function providerEtradeClientWithLocalCacheProvider(): Promise<EtradeClient> {
  const localFileCredentialProvider = new LocalFileCredentialProvider(
    CREDENTIALS_FILE_NAME
  );
  const { access_token, client_id, refresh_token } =
    await localFileCredentialProvider.getCredential();
  return EtradeClient.from({
    access_token,
    client_id,
    refresh_token,
  });
}
