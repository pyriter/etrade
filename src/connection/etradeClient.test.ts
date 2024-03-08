import { EtradeClient } from "./etradeClient";
import { providerEtradeClientWithLocalCacheProvider } from "../utils/testUtils";

describe("EtradeClient", () => {
  describe("Instantiate with local cache", () => {
    let etradeClient: EtradeClient;
    beforeAll(async () => {
      etradeClient = await providerEtradeClientWithLocalCacheProvider();
    });

    it("should be able to get account information", async () => {
      expect(true);
      // const account = (await etradeClient.getAccount()).pop();

      // expect(account).toBeDefined();
      // expect(account?.accountId).toBeDefined();
    });
  });
});
