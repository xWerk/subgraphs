import { Space, Space_Transfer } from "generated";
import { ZERO_ADDRESS } from "../../constants";

Space.NativeReceived.handler(async ({ event, context }) => {
  const entity: Space_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: event.chainId.toString(),
    asset: ZERO_ADDRESS,
    from: event.params.from,
    to: event.srcAddress,
    value: event.params.amount,
  };

  context.Space_Transfer.set(entity);
});
