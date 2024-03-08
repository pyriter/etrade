import * as fs from "fs";
import { Credentials } from "./credentialProvider";
import { CredentialProviderImpl } from "./credentialProviderImpl";

const ENCODING = "utf8";

export class LocalFileCredentialProvider extends CredentialProviderImpl {
  constructor(private fileName: string) {
    super();
  }

  async update(credentials: Credentials): Promise<void> {
    fs.writeFileSync(
      this.fileName,
      JSON.stringify(credentials, null, 2),
      ENCODING
    );
  }

  async fetch(): Promise<Credentials> {
    const credential = JSON.parse(fs.readFileSync(this.fileName, ENCODING));
    if (!credential) {
      throw new Error(
        "You need to create the test credential file if you want to run the tests. Check out the README.md file"
      );
    }
    return credential;
  }
}
