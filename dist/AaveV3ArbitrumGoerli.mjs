// src/ts/AaveV3ArbitrumGoerli.ts
var POOL_ADDRESSES_PROVIDER = "0xD64dDe119f11C88850FD596BE11CE398CC5893e6";
var POOL = "0x20fa38a4f8Af2E36f1Cc14caad2E603fbA5C535c";
var POOL_CONFIGURATOR = "0x4850e2E7c92Fe5cC80E64FD9FA32216E0C30E2E9";
var ORACLE = "0x4C0EBa43c13ac25885fE0edf3E8Fd4fe32b528dE";
var PRICE_ORACLE_SENTINEL = "0x0000000000000000000000000000000000000000";
var AAVE_PROTOCOL_DATA_PROVIDER = "0x7E4025a4e9Ae4e7EcA533cDFF1ba269eDD31146F";
var ACL_MANAGER = "0xFBeB1c59e7aBb71A93ddc36359e57a116E602668";
var ACL_ADMIN = "0x9973Ce75946D56fA3B0C6aa3647d67D440BDAec8";
var COLLECTOR = "0xbE46486f69fc2882e5E4769CFBCe704E3EfecD25";
var DEFAULT_INCENTIVES_CONTROLLER = "0xC8283AA1fAD9cc32f13334B914a602037772984D";
var DEFAULT_A_TOKEN_IMPL_REV_1 = "0x23eA12332Ef09AF8C30799D299A1085a09149d4D";
var DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 = "0x4579e891f735E4d3C0B10aEE041E4672f04636cb";
var DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 = "0x64be7D8Aed08c7adAEeBBCcca7eC41d5E49f9e74";
var EMISSION_MANAGER = "0xEF6a0951fE054F78Adc90ee9181297e40637C061";
var FAUCET = "0xc1b3cc37cf2f922abDFE7F01A17bc932F4078665";
var L2_ENCODER = "0x46605375317C3E8bd19E0ED70987354Cb6D16720";
var UI_INCENTIVE_DATA_PROVIDER = "0x159E642e34ad712242F6057477277b093eb43950";
var UI_POOL_DATA_PROVIDER = "0x1d5a0287E4ac7Ff805D8399D0177c75C8C95d4dC";
var WALLET_BALANCE_PROVIDER = "0x8c7914af3926CfA5131Ce294c48E03C6d3aDc916";
var WETH_GATEWAY = "0xcD1065F2c3A0e0a94d543Ce41720BFF515f753B7";
var CHAIN_ID = 421613;
var ASSETS = {
  DAI: {
    decimals: 18,
    UNDERLYING: "0xe73C6dA65337ef99dBBc014C7858973Eba40a10b",
    A_TOKEN: "0x48d70B5EF8aBF23944322c291D183EdCb3d1d09e",
    S_TOKEN: "0x9326836cb60D287f45E6c1F0f12494A2FB8f6884",
    V_TOKEN: "0x5eDfaf5467A8d68F0069d58c208DE24aB331cE8d",
    INTEREST_RATE_STRATEGY: "0x8a93EEFc0E92451277B572173fCB22bB5545134d",
    ORACLE: "0x3FF18768FeC4f61428a4D9188408cc8a96BeA7d0"
  },
  LINK: {
    decimals: 18,
    UNDERLYING: "0xB35Ec24CACC44C5F161bF098Ed5320BCbcda34FD",
    A_TOKEN: "0xB7C5a28bE43543eccE023A63d69b88d441cB6a28",
    S_TOKEN: "0x8B6003c72D161Bd74123217CD3c240973aB42F3D",
    V_TOKEN: "0x16A9DCf2DF1C73B95B7aB3BD60dEB59d98BD0d56",
    INTEREST_RATE_STRATEGY: "0x2E8FE952067C7f4e9782bA0743620bDEa6a14004",
    ORACLE: "0xaD714A38D2348Cf62e9f375BD8eE79c2F9d717A5"
  },
  USDC: {
    decimals: 6,
    UNDERLYING: "0xd513E4537510C75E24f941f159B7CAFA74E7B3B9",
    A_TOKEN: "0xC68eE187eb44227dCEaB89ce789193027887a30d",
    S_TOKEN: "0xA1c1094877EF91e400697D5104cd9a7cA6a529f8",
    V_TOKEN: "0xeF7D160a47bbe2dF4c2Ca893036e7Cf690415466",
    INTEREST_RATE_STRATEGY: "0x1949f5dE0F6D5a57918734B659c112616fCb7af7",
    ORACLE: "0x1E82Cd5eE25223247a2dDB69f1954626EB7DA315"
  },
  WBTC: {
    decimals: 8,
    UNDERLYING: "0x1377b75237a9ee83aC0C76dE258E68e875d96334",
    A_TOKEN: "0x65Ae5B31CDC763F58cc70fC8780E07DEBccB4D4e",
    S_TOKEN: "0xCb0Bf8E233b611D51100E1Bf97F6265daCf5e011",
    V_TOKEN: "0xC60a4b631e9057193daf1C96DF9ea917EC9AC0F1",
    INTEREST_RATE_STRATEGY: "0x2E8FE952067C7f4e9782bA0743620bDEa6a14004",
    ORACLE: "0x6fBa7439D9D7c902C485D0373b189431aC230240"
  },
  WETH: {
    decimals: 18,
    UNDERLYING: "0x4284186b053ACdBA28E8B26E99475d891533086a",
    A_TOKEN: "0x878092a3313bD2437ffbb6dC43638C0a1Cd0A8D2",
    S_TOKEN: "0xe164EA80aB17C5f8D61286943b42F69c8FAA7Ca4",
    V_TOKEN: "0x644E7aA021E14fE3cE8F973464B58A0935259D25",
    INTEREST_RATE_STRATEGY: "0x2E8FE952067C7f4e9782bA0743620bDEa6a14004",
    ORACLE: "0xabF81FF65097be8f19977D5fEEA6f58a90E5ea1f"
  },
  USDT: {
    decimals: 6,
    UNDERLYING: "0x8dA9412AbB78db20d0B496573D9066C474eA21B8",
    A_TOKEN: "0xcDA8CEF39c407c2C00818C9A1aD99067fF06c142",
    S_TOKEN: "0xda68dC7F3B64710a7F1C4BBc77D80Af322A6e50c",
    V_TOKEN: "0x1f0Cec2f0dFDb673CD894450224d911A8FB4D80a",
    INTEREST_RATE_STRATEGY: "0x1949f5dE0F6D5a57918734B659c112616fCb7af7",
    ORACLE: "0xF60e69a57461257A873a8f3C5B66B54c9191567a"
  },
  AAVE: {
    decimals: 18,
    UNDERLYING: "0xD8A70FC58BC069CFE6529EBF0c1Db067f2b5347E",
    A_TOKEN: "0xA4be980CE12b9bfe1C2976bD7Fc923b516Dcd4Ec",
    S_TOKEN: "0x0dF6Aac6a80C1759C40b486e9DC7Ad71E7a9e666",
    V_TOKEN: "0x0aDeE8D5d63aa67F9e03BD51ea23Fbbc8D11A804",
    INTEREST_RATE_STRATEGY: "0x2E8FE952067C7f4e9782bA0743620bDEa6a14004",
    ORACLE: "0x13dFCEfeB04fAbCB221D0f3d6122CFfd69B8b3d3"
  },
  EURS: {
    decimals: 2,
    UNDERLYING: "0x322bCff7b69F832B1a1F56E6BC600C9229CFb907",
    A_TOKEN: "0x1dbe58049F741b78B87700C979e72C666f63c525",
    S_TOKEN: "0xa8D2A9E7527dB0DED64E418C905627A0B2f5A255",
    V_TOKEN: "0x5D975D3EB5f8b7472F0FEa5a12A977ad23500B1C",
    INTEREST_RATE_STRATEGY: "0x1949f5dE0F6D5a57918734B659c112616fCb7af7",
    ORACLE: "0x796F08fA985C4AA91CB6da871cc8eCd8410375eC"
  }
};
var E_MODES = {
  NONE: 0,
  STABLECOINS: 1
};
export {
  AAVE_PROTOCOL_DATA_PROVIDER,
  ACL_ADMIN,
  ACL_MANAGER,
  ASSETS,
  CHAIN_ID,
  COLLECTOR,
  DEFAULT_A_TOKEN_IMPL_REV_1,
  DEFAULT_INCENTIVES_CONTROLLER,
  DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1,
  DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1,
  EMISSION_MANAGER,
  E_MODES,
  FAUCET,
  L2_ENCODER,
  ORACLE,
  POOL,
  POOL_ADDRESSES_PROVIDER,
  POOL_CONFIGURATOR,
  PRICE_ORACLE_SENTINEL,
  UI_INCENTIVE_DATA_PROVIDER,
  UI_POOL_DATA_PROVIDER,
  WALLET_BALANCE_PROVIDER,
  WETH_GATEWAY
};
//# sourceMappingURL=AaveV3ArbitrumGoerli.mjs.map