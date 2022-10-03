import {
  BNBTransfer as BNBTransferEvent,
  Burn as BurnEvent,
  Freeze as FreezeEvent,
  Unfreeze as UnfreezeEvent,
} from '../generated/BNB/BNB';
import { BigInt } from '@graphprotocol/graph-ts';
import { User } from '../generated/schema';

export function handleBNBTransfer(event: BNBTransferEvent): void {
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
  userFrom.bnb = userFrom.bnb.plus(value);
  userTo.bnb = userTo.bnb.minus(value);
  userFrom.save();
  userTo.save();
}
