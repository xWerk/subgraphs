import { StationRegistry, StationRegistry_RoleRevoked } from "generated";

StationRegistry.RoleRevoked.handler(async ({ event, context }) => {
  const entity: StationRegistry_RoleRevoked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.StationRegistry_RoleRevoked.set(entity);
});
