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

// src/ts/AaveV3Gnosis.ts
var AaveV3Gnosis_exports = {};
__export(AaveV3Gnosis_exports, {
  AAVE_PROTOCOL_DATA_PROVIDER: () => AAVE_PROTOCOL_DATA_PROVIDER,
  ACL_ADMIN: () => ACL_ADMIN,
  ACL_MANAGER: () => ACL_MANAGER,
  ASSETS: () => ASSETS,
  CAPS_PLUS_RISK_STEWARD: () => CAPS_PLUS_RISK_STEWARD,
  CHAIN_ID: () => CHAIN_ID,
  COLLECTOR: () => COLLECTOR,
  CONFIG_ENGINE: () => CONFIG_ENGINE,
  DEFAULT_A_TOKEN_IMPL_REV_1: () => DEFAULT_A_TOKEN_IMPL_REV_1,
  DEFAULT_INCENTIVES_CONTROLLER: () => DEFAULT_INCENTIVES_CONTROLLER,
  DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1: () => DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1,
  DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1: () => DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1,
  EMISSION_MANAGER: () => EMISSION_MANAGER,
  E_MODES: () => E_MODES,
  FREEZING_STEWARD: () => FREEZING_STEWARD,
  L2_ENCODER: () => L2_ENCODER,
  ORACLE: () => ORACLE,
  POOL: () => POOL,
  POOL_ADDRESSES_PROVIDER: () => POOL_ADDRESSES_PROVIDER,
  POOL_ADDRESSES_PROVIDER_REGISTRY: () => POOL_ADDRESSES_PROVIDER_REGISTRY,
  POOL_CONFIGURATOR: () => POOL_CONFIGURATOR,
  PRICE_ORACLE_SENTINEL: () => PRICE_ORACLE_SENTINEL,
  RATES_FACTORY: () => RATES_FACTORY,
  STATIC_A_TOKEN_FACTORY: () => STATIC_A_TOKEN_FACTORY,
  UI_INCENTIVE_DATA_PROVIDER: () => UI_INCENTIVE_DATA_PROVIDER,
  UI_POOL_DATA_PROVIDER: () => UI_POOL_DATA_PROVIDER,
  WALLET_BALANCE_PROVIDER: () => WALLET_BALANCE_PROVIDER,
  WETH_GATEWAY: () => WETH_GATEWAY
});
module.exports = __toCommonJS(AaveV3Gnosis_exports);
var POOL_ADDRESSES_PROVIDER = "0x36616cf17557639614c1cdDb356b1B83fc0B2132";
var POOL = "0xb50201558B00496A145fE76f7424749556E326D8";
var POOL_CONFIGURATOR = "0x7304979ec9E4EaA0273b6A037a31c4e9e5A75D16";
var ORACLE = "0xeb0a051be10228213BAEb449db63719d6742F7c4";
var PRICE_ORACLE_SENTINEL = "0x0000000000000000000000000000000000000000";
var AAVE_PROTOCOL_DATA_PROVIDER = "0x501B4c19dd9C2e06E94dA7b6D5Ed4ddA013EC741";
var ACL_MANAGER = "0xEc710f59005f48703908bC519D552Df5B8472614";
var ACL_ADMIN = "0x1dF462e2712496373A347f8ad10802a5E95f053D";
var COLLECTOR = "0x3e652E97ff339B73421f824F5b03d75b62F1Fb51";
var DEFAULT_INCENTIVES_CONTROLLER = "0xaD4F91D26254B6B0C6346b390dDA2991FDE2F20d";
var DEFAULT_A_TOKEN_IMPL_REV_1 = "0x589750BA8aF186cE5B55391B0b7148cAD43a1619";
var DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 = "0xBeC519531F0E78BcDdB295242fA4EC5251B38574";
var DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 = "0x06C35Cfd3FC61eC2aC437f0d08840d5776b945af";
var EMISSION_MANAGER = "0x41585C50524fb8c3899B43D7D797d9486AAc94DB";
var L2_ENCODER = "0xab923C4BD40eab9824C0b86FD8562eEcb933b56a";
var CONFIG_ENGINE = "0x3238FC1d642b60F41a35f62570237656C85F4744";
var POOL_ADDRESSES_PROVIDER_REGISTRY = "0x1236010CECea55998384e795B59815D871f5f94d";
var RATES_FACTORY = "0x73dDE2A75c06a108912bf7Ff600eDdCE9d96Ed25";
var UI_INCENTIVE_DATA_PROVIDER = "0xCFDAdA7DCd2e785cF706BaDBC2B8Af5084d595e9";
var UI_POOL_DATA_PROVIDER = "0x86E2938daE289763D4e09a7e42c5cCcA62Cf9809";
var WALLET_BALANCE_PROVIDER = "0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D";
var WETH_GATEWAY = "0xb7E51aA2A5f4dD478F183A593F67637ed6F1d1D9";
var CAPS_PLUS_RISK_STEWARD = "0x33AE1f41546a2e05368Bf789b3d868813c0Ae658";
var FREEZING_STEWARD = "0x3Ceaf9b6CAb92dFe6302D0CC3F1BA880C28d35e5";
var STATIC_A_TOKEN_FACTORY = "0x02e9b27599C4Bf8f789d34b6E65C51092c3d9FA6";
var CHAIN_ID = 100;
var ASSETS = {
  WETH: {
    decimals: 18,
    UNDERLYING: "0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1",
    A_TOKEN: "0xa818F1B57c201E092C4A2017A91815034326Efd1",
    S_TOKEN: "0x436D82d905b014926a2375C576500B6fea0D2496",
    V_TOKEN: "0x0c0fce05F2314540EcB095bF4D069e5E0ED90fF8",
    INTEREST_RATE_STRATEGY: "0xD84d86083010FB683f1e8fA3809ee8DC90A4C4DB",
    ORACLE: "0xa767f745331D267c7751297D982b050c93985627",
    STATA_TOKEN: "0xD843FB478c5aA9759FeA3f3c98D467e2F136190a"
  },
  wstETH: {
    decimals: 18,
    UNDERLYING: "0x6C76971f98945AE98dD7d4DFcA8711ebea946eA6",
    A_TOKEN: "0x23e4E76D01B2002BE436CE8d6044b0aA2f68B68a",
    S_TOKEN: "0x5CBc43c339F5202D2dcB59583D33cA8498b75031",
    V_TOKEN: "0x9D881f67F20B49243c98f53d2B9E91E39d02Ae09",
    INTEREST_RATE_STRATEGY: "0x9E57695Dab0DCdb42BC220ff1E9eb2e22a31209b",
    ORACLE: "0xcb0670258e5961CCA85D8F71D29C1167Ef20De99",
    STATA_TOKEN: "0xECfD0638175e291BA3F784A58FB9D38a25418904"
  },
  GNO: {
    decimals: 18,
    UNDERLYING: "0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb",
    A_TOKEN: "0xA1Fa064A85266E2Ca82DEe5C5CcEC84DF445760e",
    S_TOKEN: "0x1A126F613D7705E59ADb39909b25E1223aDF05dd",
    V_TOKEN: "0xBc59E99198DbA71985A66E1713cC89FFEC53f7FC",
    INTEREST_RATE_STRATEGY: "0x777fDAB3C03aA63d7d7CbCbaB22724cEe50F1731",
    ORACLE: "0x22441d81416430A54336aB28765abd31a792Ad37",
    STATA_TOKEN: "0x2D737e2B0e175f05D0904C208d6C4e40da570f65"
  },
  USDC: {
    decimals: 6,
    UNDERLYING: "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83",
    A_TOKEN: "0xc6B7AcA6DE8a6044E0e32d0c841a89244A10D284",
    S_TOKEN: "0x8220133C3a631de3C7A5B679A2417BD61431FEcf",
    V_TOKEN: "0x5F6f7B0a87CA3CF3d0b431Ae03EF3305180BFf4d",
    INTEREST_RATE_STRATEGY: "0x345f7fcd88207fe060AD03c2656A23A3Ab596479",
    ORACLE: "0x26C31ac71010aF62E6B486D1132E266D6298857D",
    STATA_TOKEN: "0x270bA1f35D8b87510D24F693fcCc0da02e6E4EeB"
  },
  WXDAI: {
    decimals: 18,
    UNDERLYING: "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d",
    A_TOKEN: "0xd0Dd6cEF72143E22cCED4867eb0d5F2328715533",
    S_TOKEN: "0xaC8b1cE0548C69318920C3e0b21Db296d5770D57",
    V_TOKEN: "0x281963D7471eCdC3A2Bd4503e24e89691cfe420D",
    INTEREST_RATE_STRATEGY: "0x345f7fcd88207fe060AD03c2656A23A3Ab596479",
    ORACLE: "0x678df3415fc31947dA4324eC63212874be5a82f8",
    STATA_TOKEN: "0x7f0EAE87Df30C468E0680c83549D0b3DE7664D4B"
  },
  EURe: {
    decimals: 18,
    UNDERLYING: "0xcB444e90D8198415266c6a2724b7900fb12FC56E",
    A_TOKEN: "0xEdBC7449a9b594CA4E053D9737EC5Dc4CbCcBfb2",
    S_TOKEN: "0x916E13857FeeD0d982Df148DBe8d8542519aB96e",
    V_TOKEN: "0xb96404e475f337A7E98e4a541C9b71309BB66c5A",
    INTEREST_RATE_STRATEGY: "0x6c3b7e7B8b9609D57C70C3F630228F979EAbb450",
    ORACLE: "0xab70BCB260073d036d1660201e9d5405F5829b7a",
    STATA_TOKEN: "0x8418D17640a74F1614AC3E1826F29e78714488a1"
  },
  sDAI: {
    decimals: 18,
    UNDERLYING: "0xaf204776c7245bF4147c2612BF6e5972Ee483701",
    A_TOKEN: "0x7a5c3860a77a8DC1b225BD46d0fb2ac1C6D191BC",
    S_TOKEN: "0xa2E0335175Da40b081717FfD394C0E1de738cb9B",
    V_TOKEN: "0x8Fe06E1D8Aff42Bf6812CacF7854A2249a00bED7",
    INTEREST_RATE_STRATEGY: "0x6c3b7e7B8b9609D57C70C3F630228F979EAbb450",
    ORACLE: "0x1D0f881Ce1a646E2f27Dec3c57Fa056cB838BCC2",
    STATA_TOKEN: "0xf3f45960f8dE00D8ED614D445a5a268c6F6Dec4f"
  }
};
var E_MODES = {
  NONE: 0,
  ETH_CORRELATED: 1
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AAVE_PROTOCOL_DATA_PROVIDER,
  ACL_ADMIN,
  ACL_MANAGER,
  ASSETS,
  CAPS_PLUS_RISK_STEWARD,
  CHAIN_ID,
  COLLECTOR,
  CONFIG_ENGINE,
  DEFAULT_A_TOKEN_IMPL_REV_1,
  DEFAULT_INCENTIVES_CONTROLLER,
  DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1,
  DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1,
  EMISSION_MANAGER,
  E_MODES,
  FREEZING_STEWARD,
  L2_ENCODER,
  ORACLE,
  POOL,
  POOL_ADDRESSES_PROVIDER,
  POOL_ADDRESSES_PROVIDER_REGISTRY,
  POOL_CONFIGURATOR,
  PRICE_ORACLE_SENTINEL,
  RATES_FACTORY,
  STATIC_A_TOKEN_FACTORY,
  UI_INCENTIVE_DATA_PROVIDER,
  UI_POOL_DATA_PROVIDER,
  WALLET_BALANCE_PROVIDER,
  WETH_GATEWAY
});
//# sourceMappingURL=AaveV3Gnosis.js.map