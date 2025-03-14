import { Space_Transfer, USDC } from "generated";
import { getSpaceAddresses } from "../utils/get-space-addresses";

USDC.Transfer.handler(async ({ event, context }) => {
  const spaceAddresses = await getSpaceAddresses(context);

  if (spaceAddresses.includes(event.params.from) || spaceAddresses.includes(event.params.to)) {
    const entity: Space_Transfer = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      chainId: event.chainId.toString(),
      asset: event.srcAddress,
      from: event.params.from,
      to: event.params.to,
      value: event.params.value,
    };

    context.Space_Transfer.set(entity);
  }
});
