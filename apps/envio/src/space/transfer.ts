import { formatUnits } from "viem";
import { Space_Transfer, USDC } from "generated";
import { STATION_REGISTRY_ADDRESS } from "../../constants";

USDC.Transfer.handler(async ({ event, context }) => {
  // Retrieve the {StationRegistry_Spaces} context entity
  const stationRegistry = await context.StationRegistry_Spaces.get(`${event.chainId}_${STATION_REGISTRY_ADDRESS}`);

  // Get the Space deployed on the current chain ID through the `StationRegistry` factory contract
  const spaceAddresses = stationRegistry?.spaces;

  // Filter and store only the USDC transfers that involve a Space address
  if (spaceAddresses && (spaceAddresses.includes(event.params.from) || spaceAddresses.includes(event.params.to))) {
    const entity: Space_Transfer = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      timestamp: BigInt(event.block.timestamp),
      chainId: event.chainId.toString(),
      asset: event.srcAddress,
      from: event.params.from,
      to: event.params.to,
      value: formatUnits(event.params.value, 6),
      hash: event.transaction.hash,
    };

    context.Space_Transfer.set(entity);
  }
});
