// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class FrozenFunds extends ethereum.Event {
  get params(): FrozenFunds__Params {
    return new FrozenFunds__Params(this);
  }
}

export class FrozenFunds__Params {
  _event: FrozenFunds;

  constructor(event: FrozenFunds) {
    this._event = event;
  }

  get target(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get frozen(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class MyAdvancedTokenTransfer extends ethereum.Event {
  get params(): MyAdvancedTokenTransfer__Params {
    return new MyAdvancedTokenTransfer__Params(this);
  }
}

export class MyAdvancedTokenTransfer__Params {
  _event: MyAdvancedTokenTransfer;

  constructor(event: MyAdvancedTokenTransfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class MyAdvancedTokenBurn extends ethereum.Event {
  get params(): MyAdvancedTokenBurn__Params {
    return new MyAdvancedTokenBurn__Params(this);
  }
}

export class MyAdvancedTokenBurn__Params {
  _event: MyAdvancedTokenBurn;

  constructor(event: MyAdvancedTokenBurn) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MyAdvancedToken extends ethereum.SmartContract {
  static bind(address: Address): MyAdvancedToken {
    return new MyAdvancedToken("MyAdvancedToken", address);
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  approve(_spender: Address, _value: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_spender),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);

    return result[0].toBoolean();
  }

  try_approve(_spender: Address, _value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_spender),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transferFrom(_from: Address, _to: Address, _value: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_value)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    _from: Address,
    _to: Address,
    _value: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_value)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  burn(_value: BigInt): boolean {
    let result = super.call("burn", "burn(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);

    return result[0].toBoolean();
  }

  try_burn(_value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("burn", "burn(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  sellPrice(): BigInt {
    let result = super.call("sellPrice", "sellPrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_sellPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("sellPrice", "sellPrice():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(param0: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  burnFrom(_from: Address, _value: BigInt): boolean {
    let result = super.call("burnFrom", "burnFrom(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_from),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);

    return result[0].toBoolean();
  }

  try_burnFrom(_from: Address, _value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("burnFrom", "burnFrom(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_from),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  buyPrice(): BigInt {
    let result = super.call("buyPrice", "buyPrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_buyPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("buyPrice", "buyPrice():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  frozenAccount(param0: Address): boolean {
    let result = super.call("frozenAccount", "frozenAccount(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_frozenAccount(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "frozenAccount",
      "frozenAccount(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  approveAndCall(
    _spender: Address,
    _value: BigInt,
    _extraData: Bytes
  ): boolean {
    let result = super.call(
      "approveAndCall",
      "approveAndCall(address,uint256,bytes):(bool)",
      [
        ethereum.Value.fromAddress(_spender),
        ethereum.Value.fromUnsignedBigInt(_value),
        ethereum.Value.fromBytes(_extraData)
      ]
    );

    return result[0].toBoolean();
  }

  try_approveAndCall(
    _spender: Address,
    _value: BigInt,
    _extraData: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "approveAndCall",
      "approveAndCall(address,uint256,bytes):(bool)",
      [
        ethereum.Value.fromAddress(_spender),
        ethereum.Value.fromUnsignedBigInt(_value),
        ethereum.Value.fromBytes(_extraData)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  allowance(param0: Address, param1: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );

    return result[0].toBigInt();
  }

  try_allowance(param0: Address, param1: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class SetPricesCall extends ethereum.Call {
  get inputs(): SetPricesCall__Inputs {
    return new SetPricesCall__Inputs(this);
  }

  get outputs(): SetPricesCall__Outputs {
    return new SetPricesCall__Outputs(this);
  }
}

export class SetPricesCall__Inputs {
  _call: SetPricesCall;

  constructor(call: SetPricesCall) {
    this._call = call;
  }

  get newSellPrice(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get newBuyPrice(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetPricesCall__Outputs {
  _call: SetPricesCall;

  constructor(call: SetPricesCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get _spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get _value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class MintTokenCall extends ethereum.Call {
  get inputs(): MintTokenCall__Inputs {
    return new MintTokenCall__Inputs(this);
  }

  get outputs(): MintTokenCall__Outputs {
    return new MintTokenCall__Outputs(this);
  }
}

export class MintTokenCall__Inputs {
  _call: MintTokenCall;

  constructor(call: MintTokenCall) {
    this._call = call;
  }

  get target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get mintedAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintTokenCall__Outputs {
  _call: MintTokenCall;

  constructor(call: MintTokenCall) {
    this._call = call;
  }
}

export class BurnFromCall extends ethereum.Call {
  get inputs(): BurnFromCall__Inputs {
    return new BurnFromCall__Inputs(this);
  }

  get outputs(): BurnFromCall__Outputs {
    return new BurnFromCall__Outputs(this);
  }
}

export class BurnFromCall__Inputs {
  _call: BurnFromCall;

  constructor(call: BurnFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BurnFromCall__Outputs {
  _call: BurnFromCall;

  constructor(call: BurnFromCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class BuyCall extends ethereum.Call {
  get inputs(): BuyCall__Inputs {
    return new BuyCall__Inputs(this);
  }

  get outputs(): BuyCall__Outputs {
    return new BuyCall__Outputs(this);
  }
}

export class BuyCall__Inputs {
  _call: BuyCall;

  constructor(call: BuyCall) {
    this._call = call;
  }
}

export class BuyCall__Outputs {
  _call: BuyCall;

  constructor(call: BuyCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }
}

export class ApproveAndCallCall extends ethereum.Call {
  get inputs(): ApproveAndCallCall__Inputs {
    return new ApproveAndCallCall__Inputs(this);
  }

  get outputs(): ApproveAndCallCall__Outputs {
    return new ApproveAndCallCall__Outputs(this);
  }
}

export class ApproveAndCallCall__Inputs {
  _call: ApproveAndCallCall;

  constructor(call: ApproveAndCallCall) {
    this._call = call;
  }

  get _spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _extraData(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class ApproveAndCallCall__Outputs {
  _call: ApproveAndCallCall;

  constructor(call: ApproveAndCallCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SellCall extends ethereum.Call {
  get inputs(): SellCall__Inputs {
    return new SellCall__Inputs(this);
  }

  get outputs(): SellCall__Outputs {
    return new SellCall__Outputs(this);
  }
}

export class SellCall__Inputs {
  _call: SellCall;

  constructor(call: SellCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SellCall__Outputs {
  _call: SellCall;

  constructor(call: SellCall) {
    this._call = call;
  }
}

export class FreezeAccountCall extends ethereum.Call {
  get inputs(): FreezeAccountCall__Inputs {
    return new FreezeAccountCall__Inputs(this);
  }

  get outputs(): FreezeAccountCall__Outputs {
    return new FreezeAccountCall__Outputs(this);
  }
}

export class FreezeAccountCall__Inputs {
  _call: FreezeAccountCall;

  constructor(call: FreezeAccountCall) {
    this._call = call;
  }

  get target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get freeze(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class FreezeAccountCall__Outputs {
  _call: FreezeAccountCall;

  constructor(call: FreezeAccountCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get initialSupply(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tokenName(): string {
    return this._call.inputValues[1].value.toString();
  }

  get tokenSymbol(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}