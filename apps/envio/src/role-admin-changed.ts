import { StationRegistry, StationRegistry_RoleAdminChanged } from "generated";

StationRegistry.RoleAdminChanged.handler(async ({ event, context }) => {
  const entity: StationRegistry_RoleAdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    previousAdminRole: event.params.previousAdminRole,
    newAdminRole: event.params.newAdminRole,
  };

  context.StationRegistry_RoleAdminChanged.set(entity);
});
