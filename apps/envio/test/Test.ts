import assert from "assert";
import { 
  TestHelpers,
  StationRegistry_AccountCreated
} from "generated";
const { MockDb, StationRegistry } = TestHelpers;

describe("StationRegistry contract AccountCreated event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for StationRegistry contract AccountCreated event
  const event = StationRegistry.AccountCreated.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("StationRegistry_AccountCreated is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await StationRegistry.AccountCreated.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualStationRegistryAccountCreated = mockDbUpdated.entities.StationRegistry_AccountCreated.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedStationRegistryAccountCreated: StationRegistry_AccountCreated = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      account: event.params.account,
      accountAdmin: event.params.accountAdmin,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualStationRegistryAccountCreated, expectedStationRegistryAccountCreated, "Actual StationRegistryAccountCreated should be the same as the expectedStationRegistryAccountCreated");
  });
});
