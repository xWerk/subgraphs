import { formatUnits } from "viem";
import { Space, Space_Transfer } from "generated";
import { USDC_ADDRESS } from "../../constants";

Space.Transfer.handler(
  async ({ event, context }) => {
    // Filter and store only the USDC transfers that involve a Space address
    if (event.srcAddress === USDC_ADDRESS[event.chainId as keyof typeof USDC_ADDRESS]) {
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
  },
  { wildcard: true, eventFilters: ({ addresses }) => [{ from: addresses }, { to: addresses }] }
);
