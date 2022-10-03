import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  LogRefund,
  CreateBAT,
  BATokenTransfer,
  BATokenApproval
} from "../generated/BAToken/BAToken"

export function createLogRefundEvent(_to: Address, _value: BigInt): LogRefund {
  let logRefundEvent = changetype<LogRefund>(newMockEvent())

  logRefundEvent.parameters = new Array()

  logRefundEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  logRefundEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromUnsignedBigInt(_value))
  )

  return logRefundEvent
}

export function createCreateBATEvent(_to: Address, _value: BigInt): CreateBAT {
  let createBatEvent = changetype<CreateBAT>(newMockEvent())

  createBatEvent.parameters = new Array()

  createBatEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  createBatEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromUnsignedBigInt(_value))
  )

  return createBatEvent
}

export function createBATokenTransferEvent(
  _from: Address,
  _to: Address,
  _value: BigInt
): BATokenTransfer {
  let baTokenTransferEvent = changetype<BATokenTransfer>(newMockEvent())

  baTokenTransferEvent.parameters = new Array()

  baTokenTransferEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  baTokenTransferEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  baTokenTransferEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromUnsignedBigInt(_value))
  )

  return baTokenTransferEvent
}

export function createBATokenApprovalEvent(
  _owner: Address,
  _spender: Address,
  _value: BigInt
): BATokenApproval {
  let baTokenApprovalEvent = changetype<BATokenApproval>(newMockEvent())

  baTokenApprovalEvent.parameters = new Array()

  baTokenApprovalEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  baTokenApprovalEvent.parameters.push(
    new ethereum.EventParam("_spender", ethereum.Value.fromAddress(_spender))
  )
  baTokenApprovalEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromUnsignedBigInt(_value))
  )

  return baTokenApprovalEvent
}
