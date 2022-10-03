import {
  LogRefund as LogRefundEvent,
  CreateBAT as CreateBATEvent,
  BATokenTransfer as BATokenTransferEvent,
  BATokenApproval as BATokenApprovalEvent,
} from '../generated/BAToken/BAToken';
import { BigInt } from '@graphprotocol/graph-ts';
import { User } from '../generated/schema';

export function handleBATokenTransfer(event: BATokenTransferEvent): void {
  let userFrom = User.load(event.params._from.toHexString());
  let userTo = User.load(event.params._to.toHexString());
  if (userFrom == null) {
    userFrom = new User(event.params._from.toHexString());
    userFrom.bat = BigInt.fromI32(0);
    userFrom.bnb = BigInt.fromI32(0);
    userFrom.dai = BigInt.fromI32(0);
    userFrom.xrp = BigInt.fromI32(0);
    userFrom.usdt = BigInt.fromI32(0);
  }
  if (userTo == null) {
    userTo = new User(event.params._to.toHexString());
    userTo.bat = BigInt.fromI32(0);
    userTo.bnb = BigInt.fromI32(0);
    userTo.dai = BigInt.fromI32(0);
    userTo.xrp = BigInt.fromI32(0);
    userTo.usdt = BigInt.fromI32(0);
  }

  const value = event.params._value;
  userFrom.bat = userFrom.bat.plus(value);
  userTo.bat = userTo.bat.minus(value);
  userFrom.save();
  userTo.save();
}
