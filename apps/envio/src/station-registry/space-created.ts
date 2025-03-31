import { StationRegistry, StationRegistry_SpaceCreated } from "generated";

StationRegistry.SpaceCreated.handler(async ({ event, context }) => {
  const entity: StationRegistry_SpaceCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    stationId: event.params.stationId,
    space: event.params.space,
  };

  // Add the `SpaceCreated` event to the `StationRegistry_SpaceCreated` context entity
  context.StationRegistry_SpaceCreated.set(entity);

  // Get the `StationRegistry` entity ID based on the event chain ID
  const STATION_REGISTRY_ID = `${event.chainId}_${event.srcAddress}`;

  // Get the `StationRegistry` entity based on the event chain ID
  const stationRegistry = await context.StationRegistry_Spaces.get(STATION_REGISTRY_ID);

  // Retrieve the list of deployed Space addresses through the `StationRegistry` factory contract
  const spaces = stationRegistry?.spaces || [];

  // Add the new Space address to the list of deployed Space addresses
  spaces.push(event.params.space);

  // Update the `StationRegistry_Spaces` context entity with the new list of deployed Space addresses
  context.StationRegistry_Spaces.set({ id: STATION_REGISTRY_ID, chainId: event.chainId.toString(), spaces });
});

/// Handler to register a `Space` contract through the {SpaceCreated} event
StationRegistry.SpaceCreated.contractRegister(({ event, context }) => {
  context.addSpace(event.params.space);
});
