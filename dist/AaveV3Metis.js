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

// src/ts/AaveV3Metis.ts
var AaveV3Metis_exports = {};
__export(AaveV3Metis_exports, {
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
  WALLET_BALANCE_PROVIDER: () => WALLET_BALANCE_PROVIDER
});
module.exports = __toCommonJS(AaveV3Metis_exports);
var POOL_ADDRESSES_PROVIDER = "0xB9FABd7500B2C6781c35Dd48d54f81fc2299D7AF";
var POOL = "0x90df02551bB792286e8D4f13E0e357b4Bf1D6a57";
var POOL_CONFIGURATOR = "0x69FEE8F261E004453BE0800BC9039717528645A6";
var ORACLE = "0x38D36e85E47eA6ff0d18B0adF12E5fC8984A6f8e";
var PRICE_ORACLE_SENTINEL = "0x2B5EA1604BAbb7B730120950Cb13951f3525828A";
var AAVE_PROTOCOL_DATA_PROVIDER = "0x99411FC17Ad1B56f49719E3850B2CDcc0f9bBFd8";
var ACL_MANAGER = "0xcDCb65fc657B701a5100a12eFB663978E7e8fFB8";
var ACL_ADMIN = "0x6fD45D32375d5aDB8D76275A3932c740F03a8718";
var COLLECTOR = "0xB5b64c7E00374e766272f8B442Cd261412D4b118";
var DEFAULT_INCENTIVES_CONTROLLER = "0x30C1b8F0490fa0908863d6Cbd2E36400b4310A6B";
var DEFAULT_A_TOKEN_IMPL_REV_1 = "0x246405C70461f93513C74606815615c24c5C8C79";
var DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 = "0xE7fA271BD76FC9c6F2F968976E9f4f553256E02f";
var DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 = "0x52aC2476Fc6F788B4c5A9B12Cfcb7fDB163955f4";
var EMISSION_MANAGER = "0xfDb2580A1ac4CDc67E4236738b28af59e2022Dd2";
var CAPS_PLUS_RISK_STEWARD = "0x5f4d15d761528c57a5C30c43c1DAb26Fc5452731";
var FREEZING_STEWARD = "0x2C77153fF4a1e83A8d8D750735FB101ECB55949f";
var L2_ENCODER = "0x9f3A1B399A9074eBA63Dc4fc274bE2A2b2d80cB9";
var CONFIG_ENGINE = "0x8be473dCfA93132658821E67CbEB684ec8Ea2E74";
var POOL_ADDRESSES_PROVIDER_REGISTRY = "0x9E7B73ffD9D2026F3ff4212c29E209E09C8A91F5";
var RATES_FACTORY = "0x87Aaba7cf8e1F319d0E3402d68017171201dEcd5";
var UI_INCENTIVE_DATA_PROVIDER = "0x3e7BC5EcE0f22DbB16c3e3EeA288a10A57d68927";
var UI_POOL_DATA_PROVIDER = "0x7dd60bd8507fDC3d300d53427b7AE566701a7320";
var WALLET_BALANCE_PROVIDER = "0x1df710eb1E2FD9C21494aF2BFb1F210a4185885b";
var STATIC_A_TOKEN_FACTORY = "0x9C62AdC332888F56998542415c38D7CDf3Ff7619";
var CHAIN_ID = 1088;
var ASSETS = {
  mDAI: {
    decimals: 18,
    UNDERLYING: "0x4c078361FC9BbB78DF910800A991C7c3DD2F6ce0",
    A_TOKEN: "0x85ABAdDcae06efee2CB5F75f33b6471759eFDE24",
    S_TOKEN: "0xf1cd706E177F3AEa620c722Dc436B5a2066E4C68",
    V_TOKEN: "0x13Bd89aF338f3c7eAE9a75852fC2F1ca28B4DDbF",
    INTEREST_RATE_STRATEGY: "0x4a8de3E62B4a63905f62e56292ECdCfD3593d1c9",
    ORACLE: "0xe0351cAAE70B5AdBD0107cD5331AD1D79c4c1CA1",
    STATA_TOKEN: "0x66a2E4cff95BDE6403Ed5541B396aA0B171e5509"
  },
  Metis: {
    decimals: 18,
    UNDERLYING: "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
    A_TOKEN: "0x7314Ef2CA509490f65F52CC8FC9E0675C66390b8",
    S_TOKEN: "0xeF547E238d689BAa811E597105A596bBE2Fe0761",
    V_TOKEN: "0x0110174183e13D5Ea59D7512226c5D5A47bA2c40",
    INTEREST_RATE_STRATEGY: "0xfe8FF9a19E251fe6cf2e8cBf0959ACa9624A97d1",
    ORACLE: "0xD4a5Bb03B5D66d9bf81507379302Ac2C2DFDFa6D",
    STATA_TOKEN: "0x5DE732A094A0ceF0eBFEcF0A916bDAB29650a784"
  },
  mUSDC: {
    decimals: 6,
    UNDERLYING: "0xEA32A96608495e54156Ae48931A7c20f0dcc1a21",
    A_TOKEN: "0x885C8AEC5867571582545F894A5906971dB9bf27",
    S_TOKEN: "0x81aC531A7CA8Bdaeb571d8d948e29481A35495C8",
    V_TOKEN: "0x571171a7EF1e3c8c83d47EF1a50E225E9c351380",
    INTEREST_RATE_STRATEGY: "0x3c8DF161A59F2a3ed4D40F073395d6a0f14290C0",
    ORACLE: "0x663855969c85F3BE415807250414Ca9129533a5f",
    STATA_TOKEN: "0xb24451C231C6e6A60aC46f45E98a267caae898f4"
  },
  mUSDT: {
    decimals: 6,
    UNDERLYING: "0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC",
    A_TOKEN: "0xd9fa75D14c26720d5ce7eE2530793a823e8f07b9",
    S_TOKEN: "0xb4984c08984776074fB9BB78fFE24e9F1E97CD3F",
    V_TOKEN: "0x6B45DcE8aF4fE5Ab3bFCF030d8fB57718eAB54e5",
    INTEREST_RATE_STRATEGY: "0x082612269926F85741E6c2B0447D000469880c1C",
    ORACLE: "0x51864b8948Aa5e35aace2BaDaF901D63418A3b9D",
    STATA_TOKEN: "0xAAea6F041425B813760dA201d08d46487034A266"
  },
  WETH: {
    decimals: 18,
    UNDERLYING: "0x420000000000000000000000000000000000000A",
    A_TOKEN: "0x8acAe35059C9aE27709028fF6689386a44c09f3a",
    S_TOKEN: "0x38cFF1C1dFE9e2566F11CB717Ac43fa56fEeCFbd",
    V_TOKEN: "0x8Bb19e3DD277a73D4A95EE434F14cE4B92898421",
    INTEREST_RATE_STRATEGY: "0x83e654d42f437915bf849dE04c19AAd8C5e8c01E",
    ORACLE: "0x3BBe70e2F96c87aEce7F67A2b0178052f62E37fE",
    STATA_TOKEN: "0x2f1606864d6322c54b50a1762D4a1ca67f42d23d"
  }
};
var E_MODES = {
  NONE: 0
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
  WALLET_BALANCE_PROVIDER
});
//# sourceMappingURL=AaveV3Metis.js.map