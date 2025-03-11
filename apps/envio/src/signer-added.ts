import { StationRegistry, StationRegistry_SignerAdded } from "generated";

StationRegistry.SignerAdded.handler(async ({ event, context }) => {
  const entity: StationRegistry_SignerAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
    signer: event.params.signer,
  };

  context.StationRegistry_SignerAdded.set(entity);
});
