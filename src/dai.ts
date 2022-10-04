import {
  DaiApproval as DaiApprovalEvent,
  LogNote as LogNoteEvent,
  DaiTransfer as DaiTransferEvent,
} from '../generated/Dai/Dai';
import { User } from '../generated/schema';
import { BigInt } from '@graphprotocol/graph-ts';

export function handleDaiTransfer(event: DaiTransferEvent): void {
  let userFrom = User.load(event.params.src.toHexString());
  let userTo = User.load(event.params.dst.toHexString());
  if (userFrom == null) {
    userFrom = new User(event.params.src.toHexString());
    userFrom.bat = BigInt.fromI32(0);
    userFrom.bnb = BigInt.fromI32(0);
    userFrom.dai = BigInt.fromI32(0);
    userFrom.xrp = BigInt.fromI32(0);
    userFrom.usdt = BigInt.fromI32(0);
  }
  if (userTo == null) {
    userTo = new User(event.params.dst.toHexString());
    userTo.bat = BigInt.fromI32(0);
    userTo.bnb = BigInt.fromI32(0);
    userTo.dai = BigInt.fromI32(0);
    userTo.xrp = BigInt.fromI32(0);
    userTo.usdt = BigInt.fromI32(0);
  }

  const value = event.params.wad;
  const hasBalanceGreaterThanZero = !userFrom.dai.isZero();
  if(hasBalanceGreaterThanZero){
    userFrom.dai = userFrom.dai.minus(value);
  }
  userTo.dai = userTo.dai.plus(value);

  userFrom.save();
  userTo.save();
}
