import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { DaiApproval } from "../generated/schema"
import { DaiApproval as DaiApprovalEvent } from "../generated/Dai/Dai"
import { handleDaiApproval } from "../src/dai"
import { createDaiApprovalEvent } from "./dai-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let src = Address.fromString("0x0000000000000000000000000000000000000001")
    let guy = Address.fromString("0x0000000000000000000000000000000000000001")
    let wad = BigInt.fromI32(234)
    let newDaiApprovalEvent = createDaiApprovalEvent(src, guy, wad)
    handleDaiApproval(newDaiApprovalEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DaiApproval created and stored", () => {
    assert.entityCount("DaiApproval", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DaiApproval",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "src",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DaiApproval",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "guy",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DaiApproval",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "wad",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
