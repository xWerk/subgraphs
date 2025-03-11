import { StationRegistry, StationRegistry_RoleGranted } from "generated";

StationRegistry.RoleGranted.handler(async ({ event, context }) => {
  const entity: StationRegistry_RoleGranted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.StationRegistry_RoleGranted.set(entity);
});
