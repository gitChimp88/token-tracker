import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { DaiApproval, LogNote, DaiTransfer } from "../generated/Dai/Dai"

export function createDaiApprovalEvent(
  src: Address,
  guy: Address,
  wad: BigInt
): DaiApproval {
  let daiApprovalEvent = changetype<DaiApproval>(newMockEvent())

  daiApprovalEvent.parameters = new Array()

  daiApprovalEvent.parameters.push(
    new ethereum.EventParam("src", ethereum.Value.fromAddress(src))
  )
  daiApprovalEvent.parameters.push(
    new ethereum.EventParam("guy", ethereum.Value.fromAddress(guy))
  )
  daiApprovalEvent.parameters.push(
    new ethereum.EventParam("wad", ethereum.Value.fromUnsignedBigInt(wad))
  )

  return daiApprovalEvent
}

export function createLogNoteEvent(
  sig: Bytes,
  usr: Address,
  arg1: Bytes,
  arg2: Bytes,
  data: Bytes
): LogNote {
  let logNoteEvent = changetype<LogNote>(newMockEvent())

  logNoteEvent.parameters = new Array()

  logNoteEvent.parameters.push(
    new ethereum.EventParam("sig", ethereum.Value.fromFixedBytes(sig))
  )
  logNoteEvent.parameters.push(
    new ethereum.EventParam("usr", ethereum.Value.fromAddress(usr))
  )
  logNoteEvent.parameters.push(
    new ethereum.EventParam("arg1", ethereum.Value.fromFixedBytes(arg1))
  )
  logNoteEvent.parameters.push(
    new ethereum.EventParam("arg2", ethereum.Value.fromFixedBytes(arg2))
  )
  logNoteEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )

  return logNoteEvent
}

export function createDaiTransferEvent(
  src: Address,
  dst: Address,
  wad: BigInt
): DaiTransfer {
  let daiTransferEvent = changetype<DaiTransfer>(newMockEvent())

  daiTransferEvent.parameters = new Array()

  daiTransferEvent.parameters.push(
    new ethereum.EventParam("src", ethereum.Value.fromAddress(src))
  )
  daiTransferEvent.parameters.push(
    new ethereum.EventParam("dst", ethereum.Value.fromAddress(dst))
  )
  daiTransferEvent.parameters.push(
    new ethereum.EventParam("wad", ethereum.Value.fromUnsignedBigInt(wad))
  )

  return daiTransferEvent
}
