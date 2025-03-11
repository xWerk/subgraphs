import { StationRegistry, StationRegistry_StationOwnershipTransferred } from "generated";

StationRegistry.StationOwnershipTransferred.handler(async ({ event, context }) => {
  const entity: StationRegistry_StationOwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    stationId: event.params.stationId,
    oldOwner: event.params.oldOwner,
    newOwner: event.params.newOwner,
  };

  context.StationRegistry_StationOwnershipTransferred.set(entity);
});
