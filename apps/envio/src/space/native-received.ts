import { Space, Space_Transfer } from "generated";
import { ZERO_ADDRESS } from "../../constants";
import { formatUnits } from "viem";

Space.NativeReceived.handler(async ({ event, context }) => {
  const entity: Space_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    timestamp: BigInt(event.block.timestamp),
    chainId: event.chainId.toString(),
    asset: ZERO_ADDRESS,
    from: event.params.from,
    to: event.srcAddress,
    value: formatUnits(event.params.amount, 18),
    hash: event.transaction.hash,
  };

  context.Space_Transfer.set(entity);
});
