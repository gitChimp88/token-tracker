import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { FrozenFunds } from "../generated/schema"
import { FrozenFunds as FrozenFundsEvent } from "../generated/MyAdvancedToken/MyAdvancedToken"
import { handleFrozenFunds } from "../src/my-advanced-token"
import { createFrozenFundsEvent } from "./my-advanced-token-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let target = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let frozen = "boolean Not implemented"
    let newFrozenFundsEvent = createFrozenFundsEvent(target, frozen)
    handleFrozenFunds(newFrozenFundsEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("FrozenFunds created and stored", () => {
    assert.entityCount("FrozenFunds", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "FrozenFunds",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "target",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "FrozenFunds",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "frozen",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
