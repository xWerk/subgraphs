import { StationRegistry, StationRegistry_ModuleKeeperUpdated } from "generated";

StationRegistry.ModuleKeeperUpdated.handler(async ({ event, context }) => {
  const entity: StationRegistry_ModuleKeeperUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newModuleKeeper: event.params.newModuleKeeper,
  };

  context.StationRegistry_ModuleKeeperUpdated.set(entity);
});
