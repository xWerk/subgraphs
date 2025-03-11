import assert from "assert";
import { TestHelpers, StationRegistry_SpaceCreated } from "generated";
const { MockDb, StationRegistry } = TestHelpers;

describe("StationRegistry contract SpaceCreated event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for StationRegistry contract SpaceCreated event
  const event = StationRegistry.SpaceCreated.createMockEvent({
    /* It mocks event fields with default values. You can overwrite them if you need */
  });

  it("StationRegistry_SpaceCreated is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await StationRegistry.SpaceCreated.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualStationRegistrySpaceCreated = mockDbUpdated.entities.StationRegistry_SpaceCreated.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedStationRegistrySpaceCreated: StationRegistry_SpaceCreated = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      stationId: event.params.stationId,
      space: event.params.space,
    };

    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(
      actualStationRegistrySpaceCreated,
      expectedStationRegistrySpaceCreated,
      "Actual StationRegistrySpaceCreated should be the same as the expectedStationRegistrySpaceCreated"
    );
  });
});
