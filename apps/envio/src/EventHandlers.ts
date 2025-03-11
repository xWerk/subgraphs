/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  StationRegistry,
  StationRegistry_AccountCreated,
  StationRegistry_ModuleKeeperUpdated,
  StationRegistry_RoleAdminChanged,
  StationRegistry_RoleGranted,
  StationRegistry_RoleRevoked,
  StationRegistry_SignerAdded,
  StationRegistry_SignerRemoved,
  StationRegistry_SpaceCreated,
  StationRegistry_StationOwnershipTransferred,
} from "generated";

StationRegistry.AccountCreated.handler(async ({ event, context }) => {
  const entity: StationRegistry_AccountCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
    accountAdmin: event.params.accountAdmin,
  };

  context.StationRegistry_AccountCreated.set(entity);
});

StationRegistry.ModuleKeeperUpdated.handler(async ({ event, context }) => {
  const entity: StationRegistry_ModuleKeeperUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newModuleKeeper: event.params.newModuleKeeper,
  };

  context.StationRegistry_ModuleKeeperUpdated.set(entity);
});

StationRegistry.RoleAdminChanged.handler(async ({ event, context }) => {
  const entity: StationRegistry_RoleAdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    previousAdminRole: event.params.previousAdminRole,
    newAdminRole: event.params.newAdminRole,
  };

  context.StationRegistry_RoleAdminChanged.set(entity);
});

StationRegistry.RoleGranted.handler(async ({ event, context }) => {
  const entity: StationRegistry_RoleGranted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.StationRegistry_RoleGranted.set(entity);
});

StationRegistry.RoleRevoked.handler(async ({ event, context }) => {
  const entity: StationRegistry_RoleRevoked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.StationRegistry_RoleRevoked.set(entity);
});

StationRegistry.SignerAdded.handler(async ({ event, context }) => {
  const entity: StationRegistry_SignerAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
    signer: event.params.signer,
  };

  context.StationRegistry_SignerAdded.set(entity);
});

StationRegistry.SignerRemoved.handler(async ({ event, context }) => {
  const entity: StationRegistry_SignerRemoved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
    signer: event.params.signer,
  };

  context.StationRegistry_SignerRemoved.set(entity);
});

StationRegistry.SpaceCreated.handler(async ({ event, context }) => {
  const entity: StationRegistry_SpaceCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    stationId: event.params.stationId,
    space: event.params.space,
  };

  context.StationRegistry_SpaceCreated.set(entity);
});

StationRegistry.StationOwnershipTransferred.handler(async ({ event, context }) => {
  const entity: StationRegistry_StationOwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    stationId: event.params.stationId,
    oldOwner: event.params.oldOwner,
    newOwner: event.params.newOwner,
  };

  context.StationRegistry_StationOwnershipTransferred.set(entity);
});
