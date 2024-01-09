declare const POOL_ADDRESSES_PROVIDER = "0xD64dDe119f11C88850FD596BE11CE398CC5893e6";
declare const POOL = "0x20fa38a4f8Af2E36f1Cc14caad2E603fbA5C535c";
declare const POOL_CONFIGURATOR = "0x4850e2E7c92Fe5cC80E64FD9FA32216E0C30E2E9";
declare const ORACLE = "0x4C0EBa43c13ac25885fE0edf3E8Fd4fe32b528dE";
declare const PRICE_ORACLE_SENTINEL = "0x0000000000000000000000000000000000000000";
declare const AAVE_PROTOCOL_DATA_PROVIDER = "0x7E4025a4e9Ae4e7EcA533cDFF1ba269eDD31146F";
declare const ACL_MANAGER = "0xFBeB1c59e7aBb71A93ddc36359e57a116E602668";
declare const ACL_ADMIN = "0x9973Ce75946D56fA3B0C6aa3647d67D440BDAec8";
declare const COLLECTOR = "0xbE46486f69fc2882e5E4769CFBCe704E3EfecD25";
declare const DEFAULT_INCENTIVES_CONTROLLER = "0xC8283AA1fAD9cc32f13334B914a602037772984D";
declare const DEFAULT_A_TOKEN_IMPL_REV_1 = "0x23eA12332Ef09AF8C30799D299A1085a09149d4D";
declare const DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 = "0x4579e891f735E4d3C0B10aEE041E4672f04636cb";
declare const DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 = "0x64be7D8Aed08c7adAEeBBCcca7eC41d5E49f9e74";
declare const EMISSION_MANAGER = "0xEF6a0951fE054F78Adc90ee9181297e40637C061";
declare const FAUCET = "0xc1b3cc37cf2f922abDFE7F01A17bc932F4078665";
declare const L2_ENCODER = "0x46605375317C3E8bd19E0ED70987354Cb6D16720";
declare const UI_INCENTIVE_DATA_PROVIDER = "0x159E642e34ad712242F6057477277b093eb43950";
declare const UI_POOL_DATA_PROVIDER = "0x1d5a0287E4ac7Ff805D8399D0177c75C8C95d4dC";
declare const WALLET_BALANCE_PROVIDER = "0x8c7914af3926CfA5131Ce294c48E03C6d3aDc916";
declare const WETH_GATEWAY = "0xcD1065F2c3A0e0a94d543Ce41720BFF515f753B7";
declare const CHAIN_ID = 421613;
declare const ASSETS: {
    readonly DAI: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xe73C6dA65337ef99dBBc014C7858973Eba40a10b";
        readonly A_TOKEN: "0x48d70B5EF8aBF23944322c291D183EdCb3d1d09e";
        readonly S_TOKEN: "0x9326836cb60D287f45E6c1F0f12494A2FB8f6884";
        readonly V_TOKEN: "0x5eDfaf5467A8d68F0069d58c208DE24aB331cE8d";
        readonly INTEREST_RATE_STRATEGY: "0x8a93EEFc0E92451277B572173fCB22bB5545134d";
        readonly ORACLE: "0x3FF18768FeC4f61428a4D9188408cc8a96BeA7d0";
    };
    readonly LINK: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xB35Ec24CACC44C5F161bF098Ed5320BCbcda34FD";
        readonly A_TOKEN: "0xB7C5a28bE43543eccE023A63d69b88d441cB6a28";
        readonly S_TOKEN: "0x8B6003c72D161Bd74123217CD3c240973aB42F3D";
        readonly V_TOKEN: "0x16A9DCf2DF1C73B95B7aB3BD60dEB59d98BD0d56";
        readonly INTEREST_RATE_STRATEGY: "0x2E8FE952067C7f4e9782bA0743620bDEa6a14004";
        readonly ORACLE: "0xaD714A38D2348Cf62e9f375BD8eE79c2F9d717A5";
    };
    readonly USDC: {
        readonly decimals: 6;
        readonly UNDERLYING: "0xd513E4537510C75E24f941f159B7CAFA74E7B3B9";
        readonly A_TOKEN: "0xC68eE187eb44227dCEaB89ce789193027887a30d";
        readonly S_TOKEN: "0xA1c1094877EF91e400697D5104cd9a7cA6a529f8";
        readonly V_TOKEN: "0xeF7D160a47bbe2dF4c2Ca893036e7Cf690415466";
        readonly INTEREST_RATE_STRATEGY: "0x1949f5dE0F6D5a57918734B659c112616fCb7af7";
        readonly ORACLE: "0x1E82Cd5eE25223247a2dDB69f1954626EB7DA315";
    };
    readonly WBTC: {
        readonly decimals: 8;
        readonly UNDERLYING: "0x1377b75237a9ee83aC0C76dE258E68e875d96334";
        readonly A_TOKEN: "0x65Ae5B31CDC763F58cc70fC8780E07DEBccB4D4e";
        readonly S_TOKEN: "0xCb0Bf8E233b611D51100E1Bf97F6265daCf5e011";
        readonly V_TOKEN: "0xC60a4b631e9057193daf1C96DF9ea917EC9AC0F1";
        readonly INTEREST_RATE_STRATEGY: "0x2E8FE952067C7f4e9782bA0743620bDEa6a14004";
        readonly ORACLE: "0x6fBa7439D9D7c902C485D0373b189431aC230240";
    };
    readonly WETH: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x4284186b053ACdBA28E8B26E99475d891533086a";
        readonly A_TOKEN: "0x878092a3313bD2437ffbb6dC43638C0a1Cd0A8D2";
        readonly S_TOKEN: "0xe164EA80aB17C5f8D61286943b42F69c8FAA7Ca4";
        readonly V_TOKEN: "0x644E7aA021E14fE3cE8F973464B58A0935259D25";
        readonly INTEREST_RATE_STRATEGY: "0x2E8FE952067C7f4e9782bA0743620bDEa6a14004";
        readonly ORACLE: "0xabF81FF65097be8f19977D5fEEA6f58a90E5ea1f";
    };
    readonly USDT: {
        readonly decimals: 6;
        readonly UNDERLYING: "0x8dA9412AbB78db20d0B496573D9066C474eA21B8";
        readonly A_TOKEN: "0xcDA8CEF39c407c2C00818C9A1aD99067fF06c142";
        readonly S_TOKEN: "0xda68dC7F3B64710a7F1C4BBc77D80Af322A6e50c";
        readonly V_TOKEN: "0x1f0Cec2f0dFDb673CD894450224d911A8FB4D80a";
        readonly INTEREST_RATE_STRATEGY: "0x1949f5dE0F6D5a57918734B659c112616fCb7af7";
        readonly ORACLE: "0xF60e69a57461257A873a8f3C5B66B54c9191567a";
    };
    readonly AAVE: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xD8A70FC58BC069CFE6529EBF0c1Db067f2b5347E";
        readonly A_TOKEN: "0xA4be980CE12b9bfe1C2976bD7Fc923b516Dcd4Ec";
        readonly S_TOKEN: "0x0dF6Aac6a80C1759C40b486e9DC7Ad71E7a9e666";
        readonly V_TOKEN: "0x0aDeE8D5d63aa67F9e03BD51ea23Fbbc8D11A804";
        readonly INTEREST_RATE_STRATEGY: "0x2E8FE952067C7f4e9782bA0743620bDEa6a14004";
        readonly ORACLE: "0x13dFCEfeB04fAbCB221D0f3d6122CFfd69B8b3d3";
    };
    readonly EURS: {
        readonly decimals: 2;
        readonly UNDERLYING: "0x322bCff7b69F832B1a1F56E6BC600C9229CFb907";
        readonly A_TOKEN: "0x1dbe58049F741b78B87700C979e72C666f63c525";
        readonly S_TOKEN: "0xa8D2A9E7527dB0DED64E418C905627A0B2f5A255";
        readonly V_TOKEN: "0x5D975D3EB5f8b7472F0FEa5a12A977ad23500B1C";
        readonly INTEREST_RATE_STRATEGY: "0x1949f5dE0F6D5a57918734B659c112616fCb7af7";
        readonly ORACLE: "0x796F08fA985C4AA91CB6da871cc8eCd8410375eC";
    };
};
declare const E_MODES: {
    readonly NONE: 0;
    readonly STABLECOINS: 1;
};

declare const AaveV3ArbitrumGoerli_AAVE_PROTOCOL_DATA_PROVIDER: typeof AAVE_PROTOCOL_DATA_PROVIDER;
declare const AaveV3ArbitrumGoerli_ACL_ADMIN: typeof ACL_ADMIN;
declare const AaveV3ArbitrumGoerli_ACL_MANAGER: typeof ACL_MANAGER;
declare const AaveV3ArbitrumGoerli_ASSETS: typeof ASSETS;
declare const AaveV3ArbitrumGoerli_CHAIN_ID: typeof CHAIN_ID;
declare const AaveV3ArbitrumGoerli_COLLECTOR: typeof COLLECTOR;
declare const AaveV3ArbitrumGoerli_DEFAULT_A_TOKEN_IMPL_REV_1: typeof DEFAULT_A_TOKEN_IMPL_REV_1;
declare const AaveV3ArbitrumGoerli_DEFAULT_INCENTIVES_CONTROLLER: typeof DEFAULT_INCENTIVES_CONTROLLER;
declare const AaveV3ArbitrumGoerli_DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1: typeof DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1;
declare const AaveV3ArbitrumGoerli_DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1: typeof DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1;
declare const AaveV3ArbitrumGoerli_EMISSION_MANAGER: typeof EMISSION_MANAGER;
declare const AaveV3ArbitrumGoerli_E_MODES: typeof E_MODES;
declare const AaveV3ArbitrumGoerli_FAUCET: typeof FAUCET;
declare const AaveV3ArbitrumGoerli_L2_ENCODER: typeof L2_ENCODER;
declare const AaveV3ArbitrumGoerli_ORACLE: typeof ORACLE;
declare const AaveV3ArbitrumGoerli_POOL: typeof POOL;
declare const AaveV3ArbitrumGoerli_POOL_ADDRESSES_PROVIDER: typeof POOL_ADDRESSES_PROVIDER;
declare const AaveV3ArbitrumGoerli_POOL_CONFIGURATOR: typeof POOL_CONFIGURATOR;
declare const AaveV3ArbitrumGoerli_PRICE_ORACLE_SENTINEL: typeof PRICE_ORACLE_SENTINEL;
declare const AaveV3ArbitrumGoerli_UI_INCENTIVE_DATA_PROVIDER: typeof UI_INCENTIVE_DATA_PROVIDER;
declare const AaveV3ArbitrumGoerli_UI_POOL_DATA_PROVIDER: typeof UI_POOL_DATA_PROVIDER;
declare const AaveV3ArbitrumGoerli_WALLET_BALANCE_PROVIDER: typeof WALLET_BALANCE_PROVIDER;
declare const AaveV3ArbitrumGoerli_WETH_GATEWAY: typeof WETH_GATEWAY;
declare namespace AaveV3ArbitrumGoerli {
  export { AaveV3ArbitrumGoerli_AAVE_PROTOCOL_DATA_PROVIDER as AAVE_PROTOCOL_DATA_PROVIDER, AaveV3ArbitrumGoerli_ACL_ADMIN as ACL_ADMIN, AaveV3ArbitrumGoerli_ACL_MANAGER as ACL_MANAGER, AaveV3ArbitrumGoerli_ASSETS as ASSETS, AaveV3ArbitrumGoerli_CHAIN_ID as CHAIN_ID, AaveV3ArbitrumGoerli_COLLECTOR as COLLECTOR, AaveV3ArbitrumGoerli_DEFAULT_A_TOKEN_IMPL_REV_1 as DEFAULT_A_TOKEN_IMPL_REV_1, AaveV3ArbitrumGoerli_DEFAULT_INCENTIVES_CONTROLLER as DEFAULT_INCENTIVES_CONTROLLER, AaveV3ArbitrumGoerli_DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 as DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1, AaveV3ArbitrumGoerli_DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 as DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1, AaveV3ArbitrumGoerli_EMISSION_MANAGER as EMISSION_MANAGER, AaveV3ArbitrumGoerli_E_MODES as E_MODES, AaveV3ArbitrumGoerli_FAUCET as FAUCET, AaveV3ArbitrumGoerli_L2_ENCODER as L2_ENCODER, AaveV3ArbitrumGoerli_ORACLE as ORACLE, AaveV3ArbitrumGoerli_POOL as POOL, AaveV3ArbitrumGoerli_POOL_ADDRESSES_PROVIDER as POOL_ADDRESSES_PROVIDER, AaveV3ArbitrumGoerli_POOL_CONFIGURATOR as POOL_CONFIGURATOR, AaveV3ArbitrumGoerli_PRICE_ORACLE_SENTINEL as PRICE_ORACLE_SENTINEL, AaveV3ArbitrumGoerli_UI_INCENTIVE_DATA_PROVIDER as UI_INCENTIVE_DATA_PROVIDER, AaveV3ArbitrumGoerli_UI_POOL_DATA_PROVIDER as UI_POOL_DATA_PROVIDER, AaveV3ArbitrumGoerli_WALLET_BALANCE_PROVIDER as WALLET_BALANCE_PROVIDER, AaveV3ArbitrumGoerli_WETH_GATEWAY as WETH_GATEWAY };
}

export { AaveV3ArbitrumGoerli as A, COLLECTOR as C, DEFAULT_INCENTIVES_CONTROLLER as D, EMISSION_MANAGER as E, FAUCET as F, L2_ENCODER as L, ORACLE as O, POOL_ADDRESSES_PROVIDER as P, UI_INCENTIVE_DATA_PROVIDER as U, WALLET_BALANCE_PROVIDER as W, POOL as a, POOL_CONFIGURATOR as b, PRICE_ORACLE_SENTINEL as c, AAVE_PROTOCOL_DATA_PROVIDER as d, ACL_MANAGER as e, ACL_ADMIN as f, DEFAULT_A_TOKEN_IMPL_REV_1 as g, DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 as h, DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 as i, UI_POOL_DATA_PROVIDER as j, WETH_GATEWAY as k, CHAIN_ID as l, ASSETS as m, E_MODES as n };