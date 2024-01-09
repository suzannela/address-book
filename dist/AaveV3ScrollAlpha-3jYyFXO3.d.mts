declare const POOL_ADDRESSES_PROVIDER = "0x52A27dC690F8652288194Dd2bc523863eBdEa236";
declare const POOL = "0x48914C788295b5db23aF2b5F0B3BE775C4eA9440";
declare const POOL_CONFIGURATOR = "0x63BB78Fbac521998BD6E33f1a960677c7a1d4F10";
declare const ORACLE = "0x4B7C7D2EbcDc1015D35F617596318C15d9d24e59";
declare const PRICE_ORACLE_SENTINEL = "0x0000000000000000000000000000000000000000";
declare const AAVE_PROTOCOL_DATA_PROVIDER = "0xaE58b3Be9E159bDEc67Ada8507CA3001c80725Ee";
declare const ACL_MANAGER = "0x166601A0Cc6Cf979e2f0eF94EC5363B6BC24061C";
declare const ACL_ADMIN = "0xA5bf8BC3c35D9F92b038254B9B8675266f6b62c0";
declare const COLLECTOR = "0x104Cd7695C9247096F7AD37d3258B63c9675A00e";
declare const DEFAULT_INCENTIVES_CONTROLLER = "0xa76F05D0cdf599E0186dec880F2FA480fd0c5280";
declare const DEFAULT_A_TOKEN_IMPL_REV_1 = "0x0Eae78c97347bf6FCF784Aa91CABC4aCdB5cc2dd";
declare const DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 = "0xAb8eaAE8383Abe28203cB6e6FAa0477B2fb97f07";
declare const DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 = "0xC696d1c66Aa9F42764eE44fCc454a07a24aCe256";
declare const EMISSION_MANAGER = "0x01dd3Ad7D942406C47acd5b70cBad28fd377c6f2";
declare const FAUCET = "0x357A307A8036D54b454BD15B3B1A0fE4B9e8A561";
declare const L2_ENCODER = "0x3Bb33c67908D0d58F8d7349cBe726ff3b059e0fC";
declare const UI_INCENTIVE_DATA_PROVIDER = "0xBf67A725F976d4A7C1fa9ea5303FD57D13CA0A37";
declare const UI_POOL_DATA_PROVIDER = "0xDC55BcFC0963608401A4bA6298624E5895f8250a";
declare const WALLET_BALANCE_PROVIDER = "0x6c68e975764a56e62AF3d1C8209F789779Eb763B";
declare const WETH_GATEWAY = "0x57ce905CfD7f986A929A26b006f797d181dB706e";
declare const CHAIN_ID = 534353;
declare const ASSETS: {
    readonly DAI: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x7984E363c38b590bB4CA35aEd5133Ef2c6619C40";
        readonly A_TOKEN: "0x99Cb50E6bE36C8096e6731ED7738d93090B710DD";
        readonly S_TOKEN: "0x94Bb76d2420C1F083c53061CA862619D6056fdFE";
        readonly V_TOKEN: "0x09F9A7cd11BE8468064b06FF20Dce43E0A434a2A";
        readonly INTEREST_RATE_STRATEGY: "0x85AD5a4a0974b6092d1F7369eC39c8b2255b8e6f";
        readonly ORACLE: "0x58A5C0E02CF344c538F4Cf8d3EFC51e7c134B31A";
    };
    readonly LINK: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x279cBF5B7e3651F03CB9b71A9E7A3c924b267801";
        readonly A_TOKEN: "0x55DD1cDFE13fCa68F6D14D452E2a20cABe191841";
        readonly S_TOKEN: "0x89Bb2A2904E89A90559e423Ec8ec00cc2E127146";
        readonly V_TOKEN: "0x2f42470c67aA2f6D7d2855FBB691179a6Dba4822";
        readonly INTEREST_RATE_STRATEGY: "0x9a8D012c2e26cE911AD211976aa06Ca020487389";
        readonly ORACLE: "0x01BdbF85210e113db2216e837D9b1e401eb7003e";
    };
    readonly USDC: {
        readonly decimals: 6;
        readonly UNDERLYING: "0x2C9678042D52B97D27f2bD2947F7111d93F3dD0D";
        readonly A_TOKEN: "0x6E4A1BcBd3C3038e6957207cadC1A17092DC7ba3";
        readonly S_TOKEN: "0x307a974951cb1a06635432c40C8efDbc5C67446D";
        readonly V_TOKEN: "0x6ED2eB0A4141975A8A33558234137265f36055f7";
        readonly INTEREST_RATE_STRATEGY: "0x9c41A3E545126Cc2c160634405E00461Ec30F709";
        readonly ORACLE: "0xB1732127A07B05e6Ea1FA53c8B791560Ff768439";
    };
    readonly WBTC: {
        readonly decimals: 8;
        readonly UNDERLYING: "0x5EA79f3190ff37418d42F9B2618688494dBD9693";
        readonly A_TOKEN: "0x43AE2a14AD923915aa85d683D1b7d0d320ae87B2";
        readonly S_TOKEN: "0x0e78aC6Bf2a391bbBD15C3DEFadeC7B5d9f00343";
        readonly V_TOKEN: "0x52a011bF32a85D952aa259D85b705b7cF040836f";
        readonly INTEREST_RATE_STRATEGY: "0x9a8D012c2e26cE911AD211976aa06Ca020487389";
        readonly ORACLE: "0xb09f1850207Af7AFcd564632bB541B7b3c776006";
    };
    readonly WETH: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xb123dCe044EdF0a755505d9623Fba16C0F41cae9";
        readonly A_TOKEN: "0x9E8CEC4F2F4596141B62e88966D7167E9db555aD";
        readonly S_TOKEN: "0xeab312503904945BfeC5d56dFaC03d69Ef11DdE5";
        readonly V_TOKEN: "0xD502CD7A595ec36992b0601fae0A4b50A88084D4";
        readonly INTEREST_RATE_STRATEGY: "0x9a8D012c2e26cE911AD211976aa06Ca020487389";
        readonly ORACLE: "0xA0579Ea869d26CE4dfED0b65b54A08A4BdF3F5A8";
    };
    readonly USDT: {
        readonly decimals: 6;
        readonly UNDERLYING: "0x186C0C26c45A8DA1Da34339ee513624a9609156d";
        readonly A_TOKEN: "0x54Cb3ba40705d7CCB18c1C24edD8B602a88eF4CE";
        readonly S_TOKEN: "0x197E7980a9A5b2BE23345A492612FBb53317fb1D";
        readonly V_TOKEN: "0x4cB0Dd10789208630F4def0DAAB4161f4Bb7b09D";
        readonly INTEREST_RATE_STRATEGY: "0x9c41A3E545126Cc2c160634405E00461Ec30F709";
        readonly ORACLE: "0x2d00F2DBA40e677E23AC442B5ab932Ce699d163e";
    };
    readonly AAVE: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xfc2921bE7B2762F0E87039905d6019B0fF5978a8";
        readonly A_TOKEN: "0xC5209E1325A0DBeb28143D82e7E1DE709456Fc8a";
        readonly S_TOKEN: "0xD6CB6AE9f09eD5ffE6e0374482F9D64707Df061C";
        readonly V_TOKEN: "0x7AE95AD823943283c3D5b7E9bE5E24414ba980cD";
        readonly INTEREST_RATE_STRATEGY: "0x9a8D012c2e26cE911AD211976aa06Ca020487389";
        readonly ORACLE: "0x79fb53cF4Ba1B59E07Eeed92D641F8374DaAFC8f";
    };
    readonly EURS: {
        readonly decimals: 2;
        readonly UNDERLYING: "0xDf40f3a3566b4271450083f1Ad5732590BA47575";
        readonly A_TOKEN: "0xD49d1CF2886B1c95A94e8a9066E8b298646716b6";
        readonly S_TOKEN: "0x5D77C7207385a3D2A731f13E555066B209a2b9fc";
        readonly V_TOKEN: "0x2160F75FB89A6C35Bd59Ecf120B26f459956c925";
        readonly INTEREST_RATE_STRATEGY: "0x9c41A3E545126Cc2c160634405E00461Ec30F709";
        readonly ORACLE: "0xC6C58919440AD9daBF04D85b29820477AE7E808E";
    };
};
declare const E_MODES: {
    readonly NONE: 0;
    readonly STABLECOINS: 1;
};

declare const AaveV3ScrollAlpha_AAVE_PROTOCOL_DATA_PROVIDER: typeof AAVE_PROTOCOL_DATA_PROVIDER;
declare const AaveV3ScrollAlpha_ACL_ADMIN: typeof ACL_ADMIN;
declare const AaveV3ScrollAlpha_ACL_MANAGER: typeof ACL_MANAGER;
declare const AaveV3ScrollAlpha_ASSETS: typeof ASSETS;
declare const AaveV3ScrollAlpha_CHAIN_ID: typeof CHAIN_ID;
declare const AaveV3ScrollAlpha_COLLECTOR: typeof COLLECTOR;
declare const AaveV3ScrollAlpha_DEFAULT_A_TOKEN_IMPL_REV_1: typeof DEFAULT_A_TOKEN_IMPL_REV_1;
declare const AaveV3ScrollAlpha_DEFAULT_INCENTIVES_CONTROLLER: typeof DEFAULT_INCENTIVES_CONTROLLER;
declare const AaveV3ScrollAlpha_DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1: typeof DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1;
declare const AaveV3ScrollAlpha_DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1: typeof DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1;
declare const AaveV3ScrollAlpha_EMISSION_MANAGER: typeof EMISSION_MANAGER;
declare const AaveV3ScrollAlpha_E_MODES: typeof E_MODES;
declare const AaveV3ScrollAlpha_FAUCET: typeof FAUCET;
declare const AaveV3ScrollAlpha_L2_ENCODER: typeof L2_ENCODER;
declare const AaveV3ScrollAlpha_ORACLE: typeof ORACLE;
declare const AaveV3ScrollAlpha_POOL: typeof POOL;
declare const AaveV3ScrollAlpha_POOL_ADDRESSES_PROVIDER: typeof POOL_ADDRESSES_PROVIDER;
declare const AaveV3ScrollAlpha_POOL_CONFIGURATOR: typeof POOL_CONFIGURATOR;
declare const AaveV3ScrollAlpha_PRICE_ORACLE_SENTINEL: typeof PRICE_ORACLE_SENTINEL;
declare const AaveV3ScrollAlpha_UI_INCENTIVE_DATA_PROVIDER: typeof UI_INCENTIVE_DATA_PROVIDER;
declare const AaveV3ScrollAlpha_UI_POOL_DATA_PROVIDER: typeof UI_POOL_DATA_PROVIDER;
declare const AaveV3ScrollAlpha_WALLET_BALANCE_PROVIDER: typeof WALLET_BALANCE_PROVIDER;
declare const AaveV3ScrollAlpha_WETH_GATEWAY: typeof WETH_GATEWAY;
declare namespace AaveV3ScrollAlpha {
  export { AaveV3ScrollAlpha_AAVE_PROTOCOL_DATA_PROVIDER as AAVE_PROTOCOL_DATA_PROVIDER, AaveV3ScrollAlpha_ACL_ADMIN as ACL_ADMIN, AaveV3ScrollAlpha_ACL_MANAGER as ACL_MANAGER, AaveV3ScrollAlpha_ASSETS as ASSETS, AaveV3ScrollAlpha_CHAIN_ID as CHAIN_ID, AaveV3ScrollAlpha_COLLECTOR as COLLECTOR, AaveV3ScrollAlpha_DEFAULT_A_TOKEN_IMPL_REV_1 as DEFAULT_A_TOKEN_IMPL_REV_1, AaveV3ScrollAlpha_DEFAULT_INCENTIVES_CONTROLLER as DEFAULT_INCENTIVES_CONTROLLER, AaveV3ScrollAlpha_DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 as DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1, AaveV3ScrollAlpha_DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 as DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1, AaveV3ScrollAlpha_EMISSION_MANAGER as EMISSION_MANAGER, AaveV3ScrollAlpha_E_MODES as E_MODES, AaveV3ScrollAlpha_FAUCET as FAUCET, AaveV3ScrollAlpha_L2_ENCODER as L2_ENCODER, AaveV3ScrollAlpha_ORACLE as ORACLE, AaveV3ScrollAlpha_POOL as POOL, AaveV3ScrollAlpha_POOL_ADDRESSES_PROVIDER as POOL_ADDRESSES_PROVIDER, AaveV3ScrollAlpha_POOL_CONFIGURATOR as POOL_CONFIGURATOR, AaveV3ScrollAlpha_PRICE_ORACLE_SENTINEL as PRICE_ORACLE_SENTINEL, AaveV3ScrollAlpha_UI_INCENTIVE_DATA_PROVIDER as UI_INCENTIVE_DATA_PROVIDER, AaveV3ScrollAlpha_UI_POOL_DATA_PROVIDER as UI_POOL_DATA_PROVIDER, AaveV3ScrollAlpha_WALLET_BALANCE_PROVIDER as WALLET_BALANCE_PROVIDER, AaveV3ScrollAlpha_WETH_GATEWAY as WETH_GATEWAY };
}

export { AaveV3ScrollAlpha as A, COLLECTOR as C, DEFAULT_INCENTIVES_CONTROLLER as D, EMISSION_MANAGER as E, FAUCET as F, L2_ENCODER as L, ORACLE as O, POOL_ADDRESSES_PROVIDER as P, UI_INCENTIVE_DATA_PROVIDER as U, WALLET_BALANCE_PROVIDER as W, POOL as a, POOL_CONFIGURATOR as b, PRICE_ORACLE_SENTINEL as c, AAVE_PROTOCOL_DATA_PROVIDER as d, ACL_MANAGER as e, ACL_ADMIN as f, DEFAULT_A_TOKEN_IMPL_REV_1 as g, DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 as h, DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 as i, UI_POOL_DATA_PROVIDER as j, WETH_GATEWAY as k, CHAIN_ID as l, ASSETS as m, E_MODES as n };