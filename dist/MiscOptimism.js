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

// src/ts/MiscOptimism.ts
var MiscOptimism_exports = {};
__export(MiscOptimism_exports, {
  AAVE_MERKLE_DISTRIBUTOR: () => AAVE_MERKLE_DISTRIBUTOR,
  CREATE_3_FACTORY: () => CREATE_3_FACTORY,
  PARASWAP_FEE_CLAIMER: () => PARASWAP_FEE_CLAIMER,
  PROTOCOL_GUARDIAN: () => PROTOCOL_GUARDIAN,
  PROXY_ADMIN: () => PROXY_ADMIN,
  TRANSPARENT_PROXY_FACTORY: () => TRANSPARENT_PROXY_FACTORY
});
module.exports = __toCommonJS(MiscOptimism_exports);
var PARASWAP_FEE_CLAIMER = "0x9abf798f5314BFd793A9E57A654BEd35af4A1D60";
var TRANSPARENT_PROXY_FACTORY = "0xB4e496f70602fE2AC6Ae511D028BA4D194773B29";
var PROXY_ADMIN = "0xD3cF979e676265e4f6379749DECe4708B9A22476";
var CREATE_3_FACTORY = "0x3b56998Ec06477704622ca8e2eA1b4db134cec32";
var PROTOCOL_GUARDIAN = "0xE50c8C619d05ff98b22Adf991F17602C774F785c";
var AAVE_MERKLE_DISTRIBUTOR = "0x1685D81212580DD4cDA287616C2f6F4794927e18";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AAVE_MERKLE_DISTRIBUTOR,
  CREATE_3_FACTORY,
  PARASWAP_FEE_CLAIMER,
  PROTOCOL_GUARDIAN,
  PROXY_ADMIN,
  TRANSPARENT_PROXY_FACTORY
});
//# sourceMappingURL=MiscOptimism.js.map