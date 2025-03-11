import { Space_Transfer, USDC } from "generated";

const WHITELISTED_ADDRESSES = "0xc8bA2314dD3268cE7f0F33B1A9dA92e775036eAb";

USDC.Transfer.handler(async ({ event, context }) => {
  if (WHITELISTED_ADDRESSES === event.params.from || WHITELISTED_ADDRESSES === event.params.to) {
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
