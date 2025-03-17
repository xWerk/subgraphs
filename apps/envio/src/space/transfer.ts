import { Space_Transfer, USDC } from "generated";
import { getSpaceAddresses } from "../utils/get-space-addresses";
import { formatUnits } from "viem";

USDC.Transfer.handler(async ({ event, context }) => {
  const spaceAddresses = await getSpaceAddresses(context);

  if (spaceAddresses.includes(event.params.from) || spaceAddresses.includes(event.params.to)) {
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
