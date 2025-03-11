import { StationRegistry, StationRegistry_SpaceCreated } from "generated";

StationRegistry.SpaceCreated.handler(async ({ event, context }) => {
  const entity: StationRegistry_SpaceCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    stationId: event.params.stationId,
    space: event.params.space,
  };

  context.StationRegistry_SpaceCreated.set(entity);
});
