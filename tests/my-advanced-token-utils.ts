import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  FrozenFunds,
  MyAdvancedTokenTransfer,
  MyAdvancedTokenBurn
} from "../generated/MyAdvancedToken/MyAdvancedToken"

export function createFrozenFundsEvent(
  target: Address,
  frozen: boolean
): FrozenFunds {
  let frozenFundsEvent = changetype<FrozenFunds>(newMockEvent())

  frozenFundsEvent.parameters = new Array()

  frozenFundsEvent.parameters.push(
    new ethereum.EventParam("target", ethereum.Value.fromAddress(target))
  )
  frozenFundsEvent.parameters.push(
    new ethereum.EventParam("frozen", ethereum.Value.fromBoolean(frozen))
  )

  return frozenFundsEvent
}

export function createMyAdvancedTokenTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): MyAdvancedTokenTransfer {
  let myAdvancedTokenTransferEvent = changetype<MyAdvancedTokenTransfer>(
    newMockEvent()
  )

  myAdvancedTokenTransferEvent.parameters = new Array()

  myAdvancedTokenTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  myAdvancedTokenTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  myAdvancedTokenTransferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return myAdvancedTokenTransferEvent
}

export function createMyAdvancedTokenBurnEvent(
  from: Address,
  value: BigInt
): MyAdvancedTokenBurn {
  let myAdvancedTokenBurnEvent = changetype<MyAdvancedTokenBurn>(newMockEvent())

  myAdvancedTokenBurnEvent.parameters = new Array()

  myAdvancedTokenBurnEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  myAdvancedTokenBurnEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return myAdvancedTokenBurnEvent
}
