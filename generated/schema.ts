// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bat(): BigInt {
    let value = this.get("bat");
    return value!.toBigInt();
  }

  set bat(value: BigInt) {
    this.set("bat", Value.fromBigInt(value));
  }

  get bnb(): BigInt {
    let value = this.get("bnb");
    return value!.toBigInt();
  }

  set bnb(value: BigInt) {
    this.set("bnb", Value.fromBigInt(value));
  }

  get dai(): BigInt {
    let value = this.get("dai");
    return value!.toBigInt();
  }

  set dai(value: BigInt) {
    this.set("dai", Value.fromBigInt(value));
  }

  get xrp(): BigInt {
    let value = this.get("xrp");
    return value!.toBigInt();
  }

  set xrp(value: BigInt) {
    this.set("xrp", Value.fromBigInt(value));
  }

  get usdt(): BigInt {
    let value = this.get("usdt");
    return value!.toBigInt();
  }

  set usdt(value: BigInt) {
    this.set("usdt", Value.fromBigInt(value));
  }
}