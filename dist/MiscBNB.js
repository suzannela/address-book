"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/ts/MiscBNB.ts
var MiscBNB_exports = {};
__export(MiscBNB_exports, {
  CREATE_3_FACTORY: () => CREATE_3_FACTORY,
  PARASWAP_FEE_CLAIMER: () => PARASWAP_FEE_CLAIMER,
  PROTOCOL_GUARDIAN: () => PROTOCOL_GUARDIAN,
  PROXY_ADMIN: () => PROXY_ADMIN,
  TRANSPARENT_PROXY_FACTORY: () => TRANSPARENT_PROXY_FACTORY
});
module.exports = __toCommonJS(MiscBNB_exports);
var TRANSPARENT_PROXY_FACTORY = "0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A";
var PROTOCOL_GUARDIAN = "0x25170e9Ed4077ABA7D3DD03cf4A9F45Dc6D0fcCD";
var PARASWAP_FEE_CLAIMER = "0xAe940e61E9863178b71500c9B5faE2a04Da361a1";
var PROXY_ADMIN = "0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c";
var CREATE_3_FACTORY = "0x3b56998Ec06477704622ca8e2eA1b4db134cec32";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CREATE_3_FACTORY,
  PARASWAP_FEE_CLAIMER,
  PROTOCOL_GUARDIAN,
  PROXY_ADMIN,
  TRANSPARENT_PROXY_FACTORY
});
//# sourceMappingURL=MiscBNB.js.map