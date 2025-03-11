import { StationRegistry, StationRegistry_SignerRemoved } from "generated";

StationRegistry.SignerRemoved.handler(async ({ event, context }) => {
  const entity: StationRegistry_SignerRemoved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
    signer: event.params.signer,
  };

  context.StationRegistry_SignerRemoved.set(entity);
});
