import { StationRegistry, StationRegistry_SpaceCreated } from "generated";
import { addSpaceAddress } from "../utils/get-space-addresses";

StationRegistry.SpaceCreated.handler(async ({ event, context }) => {
  const entity: StationRegistry_SpaceCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    stationId: event.params.stationId,
    space: event.params.space,
  };

  // Add the Space address to the cached list of addresses
  addSpaceAddress(event.params.space);

  context.StationRegistry_SpaceCreated.set(entity);
});

/// Handler to register a `Space` contract through the {SpaceCreated} event
StationRegistry.SpaceCreated.contractRegister(
  ({ event, context }) => {
    context.addSpace(event.params.space);
  },
  {
    preRegisterDynamicContracts: true, // reduces indexing time
  }
);
