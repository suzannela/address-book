declare const POOL_ADDRESSES_PROVIDER = "0x7EEb8582fE8f8B0982f02619A04F344893df48c0";
declare const POOL = "0x545a706a898E4a4a3Cf90AA69D231151C38603bc";
declare const POOL_CONFIGURATOR = "0xC727DD0FA5F9f35e27a99fb056cBbA21B57c7D06";
declare const ORACLE = "0xF2f6A516C211d0310f5D58b16599e5E05347dCdC";
declare const PRICE_ORACLE_SENTINEL = "0x0000000000000000000000000000000000000000";
declare const AAVE_PROTOCOL_DATA_PROVIDER = "0x17100C740957d7B40E9AF5ecbA5716D6cF92A9eb";
declare const ACL_MANAGER = "0x586F324807b147f7f43d21111ed607587aa4B59f";
declare const ACL_ADMIN = "0xcbeD65Db7E177D4875dDF5B67E13326A43a7B03f";
declare const COLLECTOR = "0x22d4512557aa5a2F88AC9d505867218dB17a620A";
declare const DEFAULT_INCENTIVES_CONTROLLER = "0x59554D7c5693425cE9a1fB7d4fe1B7FAC4a66074";
declare const DEFAULT_A_TOKEN_IMPL_REV_1 = "0x777885b1f73f38990b43a766Dd0aAdd30C7D41F8";
declare const DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 = "0x4beCf11dB5a9dE303E0D3961855fB4a50b9FF55B";
declare const DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 = "0xa9a993275F308478f6C89438C23DdC91F210bc1B";
declare const EMISSION_MANAGER = "0x57A6Ecfc60A0c5A7C4E9813EFF1a87F857009CAB";
declare const FAUCET = "0xB653EC2fd50562d87EC15e1bECfAbeC7e318A5f1";
declare const UI_INCENTIVE_DATA_PROVIDER = "0x81C01ac70B1ee2BC281B3E6f73358e31dC2c83f0";
declare const UI_POOL_DATA_PROVIDER = "0xc9d35a9bC294fC01D6c21119D18f36edf07B2981";
declare const WALLET_BALANCE_PROVIDER = "0x43f6FCB86aa9D6222362aD78bBda238Af87881A0";
declare const WETH_GATEWAY = "0x5398fAad146b27639613879BeB90Db546c089037";
declare const CHAIN_ID = 11155111;
declare const ASSETS: {
    readonly DAII: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x6c0115846bEb8d1CD6b51DB72C5deE425deAD285";
        readonly A_TOKEN: "0x73Ac7D205330B877284ba5E0fb3171B7fba57bA7";
        readonly S_TOKEN: "0x024D6307dEC6718d4Df9e8a2536e84e8858d5C59";
        readonly V_TOKEN: "0xd4Db0ae5946B5962d12E2F54152283B1ac9131ec";
        readonly INTEREST_RATE_STRATEGY: "0xdb11044CF27d2086c86771A0ebeA4dA129F637DF";
        readonly ORACLE: "0x7911d586c32f66E2Fe0474df287D221A2f1C88A8";
    };
    readonly USDT: {
        readonly decimals: 6;
        readonly UNDERLYING: "0x76127399A0CafeDB59615A93A7ACF8552c1aEE4c";
        readonly A_TOKEN: "0x7BB8b6Bf92a05a2FC16FaD5Ac467628C0F1F6D17";
        readonly S_TOKEN: "0xEdf140e5cc85C6a27914c94020199628780b7F8b";
        readonly V_TOKEN: "0xEb285ff1bA91e2B7289710C34Aa4c13Da834d653";
        readonly INTEREST_RATE_STRATEGY: "0x7031c5B8bCdfD9a09D30c79a28243200Fe1D12a5";
        readonly ORACLE: "0x14866185B1962B63C3Ea9E03Bc1da838bab34C19";
    };
    readonly WETH: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xE55a23aaFb3a712BFae5BE96E0f61C745dedf33C";
        readonly A_TOKEN: "0x55a53F2A9C7f9BC1ab01366e2802a1765C57Be13";
        readonly S_TOKEN: "0xc31dB5a33B423ECA6dE4bb4Eb137D899fE68171e";
        readonly V_TOKEN: "0x44152e2a33AA0ed975f350e8b878fA084420EE69";
        readonly INTEREST_RATE_STRATEGY: "0xcEd4C9E6D3730F4316884d956b16F30C49e4451f";
        readonly ORACLE: "0x694AA1769357215DE4FAC081bf1f309aDC325306";
    };
    readonly WBTC: {
        readonly decimals: 8;
        readonly UNDERLYING: "0xAF48F7c5866c0Fd63492bAc0b7816c1933c4D43a";
        readonly A_TOKEN: "0xdb808735103603BbeBe3aaafAcf9AC898F9e5712";
        readonly S_TOKEN: "0x88011A742CFb4eCC4E51d4835E7EBfeF67f82848";
        readonly V_TOKEN: "0x9567b6332745C32255B61c965B1EC42fc345C392";
        readonly INTEREST_RATE_STRATEGY: "0xDc34b169283ba59041e4Bcb93a1a4E8E85E48Cb8";
        readonly ORACLE: "0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43";
    };
};
declare const E_MODES: {
    readonly NONE: 0;
};

declare const AaveV3Sepolia_AAVE_PROTOCOL_DATA_PROVIDER: typeof AAVE_PROTOCOL_DATA_PROVIDER;
declare const AaveV3Sepolia_ACL_ADMIN: typeof ACL_ADMIN;
declare const AaveV3Sepolia_ACL_MANAGER: typeof ACL_MANAGER;
declare const AaveV3Sepolia_ASSETS: typeof ASSETS;
declare const AaveV3Sepolia_CHAIN_ID: typeof CHAIN_ID;
declare const AaveV3Sepolia_COLLECTOR: typeof COLLECTOR;
declare const AaveV3Sepolia_DEFAULT_A_TOKEN_IMPL_REV_1: typeof DEFAULT_A_TOKEN_IMPL_REV_1;
declare const AaveV3Sepolia_DEFAULT_INCENTIVES_CONTROLLER: typeof DEFAULT_INCENTIVES_CONTROLLER;
declare const AaveV3Sepolia_DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1: typeof DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1;
declare const AaveV3Sepolia_DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1: typeof DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1;
declare const AaveV3Sepolia_EMISSION_MANAGER: typeof EMISSION_MANAGER;
declare const AaveV3Sepolia_E_MODES: typeof E_MODES;
declare const AaveV3Sepolia_FAUCET: typeof FAUCET;
declare const AaveV3Sepolia_ORACLE: typeof ORACLE;
declare const AaveV3Sepolia_POOL: typeof POOL;
declare const AaveV3Sepolia_POOL_ADDRESSES_PROVIDER: typeof POOL_ADDRESSES_PROVIDER;
declare const AaveV3Sepolia_POOL_CONFIGURATOR: typeof POOL_CONFIGURATOR;
declare const AaveV3Sepolia_PRICE_ORACLE_SENTINEL: typeof PRICE_ORACLE_SENTINEL;
declare const AaveV3Sepolia_UI_INCENTIVE_DATA_PROVIDER: typeof UI_INCENTIVE_DATA_PROVIDER;
declare const AaveV3Sepolia_UI_POOL_DATA_PROVIDER: typeof UI_POOL_DATA_PROVIDER;
declare const AaveV3Sepolia_WALLET_BALANCE_PROVIDER: typeof WALLET_BALANCE_PROVIDER;
declare const AaveV3Sepolia_WETH_GATEWAY: typeof WETH_GATEWAY;
declare namespace AaveV3Sepolia {
  export { AaveV3Sepolia_AAVE_PROTOCOL_DATA_PROVIDER as AAVE_PROTOCOL_DATA_PROVIDER, AaveV3Sepolia_ACL_ADMIN as ACL_ADMIN, AaveV3Sepolia_ACL_MANAGER as ACL_MANAGER, AaveV3Sepolia_ASSETS as ASSETS, AaveV3Sepolia_CHAIN_ID as CHAIN_ID, AaveV3Sepolia_COLLECTOR as COLLECTOR, AaveV3Sepolia_DEFAULT_A_TOKEN_IMPL_REV_1 as DEFAULT_A_TOKEN_IMPL_REV_1, AaveV3Sepolia_DEFAULT_INCENTIVES_CONTROLLER as DEFAULT_INCENTIVES_CONTROLLER, AaveV3Sepolia_DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 as DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1, AaveV3Sepolia_DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 as DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1, AaveV3Sepolia_EMISSION_MANAGER as EMISSION_MANAGER, AaveV3Sepolia_E_MODES as E_MODES, AaveV3Sepolia_FAUCET as FAUCET, AaveV3Sepolia_ORACLE as ORACLE, AaveV3Sepolia_POOL as POOL, AaveV3Sepolia_POOL_ADDRESSES_PROVIDER as POOL_ADDRESSES_PROVIDER, AaveV3Sepolia_POOL_CONFIGURATOR as POOL_CONFIGURATOR, AaveV3Sepolia_PRICE_ORACLE_SENTINEL as PRICE_ORACLE_SENTINEL, AaveV3Sepolia_UI_INCENTIVE_DATA_PROVIDER as UI_INCENTIVE_DATA_PROVIDER, AaveV3Sepolia_UI_POOL_DATA_PROVIDER as UI_POOL_DATA_PROVIDER, AaveV3Sepolia_WALLET_BALANCE_PROVIDER as WALLET_BALANCE_PROVIDER, AaveV3Sepolia_WETH_GATEWAY as WETH_GATEWAY };
}

export { AaveV3Sepolia as A, COLLECTOR as C, DEFAULT_INCENTIVES_CONTROLLER as D, EMISSION_MANAGER as E, FAUCET as F, ORACLE as O, POOL_ADDRESSES_PROVIDER as P, UI_INCENTIVE_DATA_PROVIDER as U, WALLET_BALANCE_PROVIDER as W, POOL as a, POOL_CONFIGURATOR as b, PRICE_ORACLE_SENTINEL as c, AAVE_PROTOCOL_DATA_PROVIDER as d, ACL_MANAGER as e, ACL_ADMIN as f, DEFAULT_A_TOKEN_IMPL_REV_1 as g, DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 as h, DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 as i, UI_POOL_DATA_PROVIDER as j, WETH_GATEWAY as k, CHAIN_ID as l, ASSETS as m, E_MODES as n };