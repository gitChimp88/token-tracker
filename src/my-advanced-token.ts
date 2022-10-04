import {
  FrozenFunds as FrozenFundsEvent,
  MyAdvancedTokenTransfer as MyAdvancedTokenTransferEvent,
  MyAdvancedTokenBurn as MyAdvancedTokenBurnEvent,
} from '../generated/MyAdvancedToken/MyAdvancedToken';
import { User } from '../generated/schema';
import { BigInt } from '@graphprotocol/graph-ts';

export function handleMyAdvancedTokenTransfer(
  event: MyAdvancedTokenTransferEvent
): void {
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
  const hasBalanceGreaterThanZero = !userFrom.xrp.isZero();
  if(hasBalanceGreaterThanZero){
    userFrom.xrp = userFrom.xrp.minus(value);
  }
  userTo.xrp = userTo.xrp.plus(value);
  
  userFrom.save();
  userTo.save();
}
