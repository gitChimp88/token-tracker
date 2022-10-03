import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { LogRefund } from "../generated/schema"
import { LogRefund as LogRefundEvent } from "../generated/BAToken/BAToken"
import { handleLogRefund } from "../src/ba-token"
import { createLogRefundEvent } from "./ba-token-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _to = Address.fromString("0x0000000000000000000000000000000000000001")
    let _value = BigInt.fromI32(234)
    let newLogRefundEvent = createLogRefundEvent(_to, _value)
    handleLogRefund(newLogRefundEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("LogRefund created and stored", () => {
    assert.entityCount("LogRefund", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "LogRefund",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_to",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "LogRefund",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_value",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
