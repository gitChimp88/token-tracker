import { BigInt } from '@graphprotocol/graph-ts';
import { Transfer } from '../generated/TetherToken/TetherToken';
import { User } from '../generated/schema';
// export function handleIssue(event: Issue): void {
//   // Entities can be loaded from the store using a string ID; this ID
//   // needs to be unique across all entities of the same type
//   let entity = ExampleEntity.load(event.transaction.from.toHex())

//   // Entities only exist after they have been saved to the store;
//   // `null` checks allow to create entities on demand
//   if (!entity) {
//     entity = new ExampleEntity(event.transaction.from.toHex())

//     // Entity fields can be set using simple assignments
//     entity.count = BigInt.fromI32(0)
//   }

//   // BigInt and BigDecimal math are supported
//   entity.count = entity.count + BigInt.fromI32(1)

//   // Entity fields can be set based on event parameters
//   entity.amount = event.params.amount

//   // Entities can be written to the store with `.save()`
//   entity.save()

// Note: If a handler doesn't require existing field values, it is faster
// _not_ to load the entity from the store. Instead, create it fresh with
// `new Entity(...)`, set the fields that should be updated and save the
// entity back to the store. Fields that were not set or unset remain
// unchanged, allowing for partial updates to be applied.

// It is also possible to access smart contracts from mappings. For
// example, the contract that has emitted the event can be connected to
// with:
//
// let contract = Contract.bind(event.address)
//
// The following functions can then be called on this contract to access
// state variables and other data:
//
// - contract.name(...)
// - contract.deprecated(...)
// - contract.totalSupply(...)
// - contract.upgradedAddress(...)
// - contract.balances(...)
// - contract.decimals(...)
// - contract.maximumFee(...)
// - contract._totalSupply(...)
// - contract.getBlackListStatus(...)
// - contract.allowed(...)
// - contract.paused(...)
// - contract.balanceOf(...)
// - contract.getOwner(...)
// - contract.owner(...)
// - contract.symbol(...)
// - contract.allowance(...)
// - contract.basisPointsRate(...)
// - contract.isBlackListed(...)
// - contract.MAX_UINT(...)
// }

export function handleTransfer(event: Transfer): void {
  let userFrom = User.load(event.params.from.toHexString());
  let userTo = User.load(event.params.to.toHexString());
  if (userFrom == null) {
    userFrom = new User(event.params.from.toHexString());
    userFrom.bat = BigInt.fromI32(0);
    userFrom.bnb = BigInt.fromI32(0);
    userFrom.dai = BigInt.fromI32(0);
    userFrom.xrp = BigInt.fromI32(0);
    userFrom.usdt = BigInt.fromI32(0);
  }
  if (userTo == null) {
    userTo = new User(event.params.to.toHexString());
    userTo.bat = BigInt.fromI32(0);
    userTo.bnb = BigInt.fromI32(0);
    userTo.dai = BigInt.fromI32(0);
    userTo.xrp = BigInt.fromI32(0);
    userTo.usdt = BigInt.fromI32(0);
  }

  const value = event.params.value;
  userFrom.usdt = userFrom.usdt.plus(value);
  userTo.usdt = userTo.usdt.minus(value);
  userFrom.save();
  userTo.save();
}
