declare const POOL_ADDRESSES_PROVIDER = "0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb";
declare const POOL = "0x794a61358D6845594F94dc1DB02A252b5b4814aD";
declare const POOL_CONFIGURATOR = "0x8145eddDf43f50276641b55bd3AD95944510021E";
declare const ORACLE = "0xD81eb3728a631871a7eBBaD631b5f424909f0c77";
declare const PRICE_ORACLE_SENTINEL = "0xE229d5DE4BD5beEAf12d427B5B57BFe66abD2c3b";
declare const AAVE_PROTOCOL_DATA_PROVIDER = "0xd9Ca4878dd38B021583c1B669905592EAe76E044";
declare const ACL_MANAGER = "0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B";
declare const ACL_ADMIN = "0x746c675dAB49Bcd5BB9Dc85161f2d7Eb435009bf";
declare const COLLECTOR = "0xB2289E329D2F85F1eD31Adbb30eA345278F21bcf";
declare const DEFAULT_INCENTIVES_CONTROLLER = "0x929EC64c34a17401F460460D4B9390518E5B473e";
declare const DEFAULT_A_TOKEN_IMPL_REV_2 = "0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B";
declare const DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_2 = "0x04a8D477eE202aDCE1682F5902e1160455205b12";
declare const DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_3 = "0x69713dA5fDfacf77E80C31F9B928Ec0Fc3716384";
declare const EMISSION_MANAGER = "0x048f2228D7Bf6776f99aB50cB1b1eaB4D1d4cA73";
declare const CAPS_PLUS_RISK_STEWARD = "0x5E76E98E0963EcDC6A065d1435F84065b7523f39";
declare const FREEZING_STEWARD = "0x3829943c53F2d00e20B58475aF19716724bF90Ba";
declare const DEBT_SWAP_ADAPTER = "0xcFaE0D8c5707FCc6478D6a65fFA31efADeF8b8EC";
declare const L2_ENCODER = "0x9abADECD08572e0eA5aF4d47A9C7984a5AA503dC";
declare const CONFIG_ENGINE = "0x893411580e590D62dDBca8a703d61Cc4A8c7b2b9";
declare const POOL_ADDRESSES_PROVIDER_REGISTRY = "0x770ef9f4fe897e59daCc474EF11238303F9552b6";
declare const RATES_FACTORY = "0xDd81E6F85358292075B78fc8D5830BE8434aF8BA";
declare const REPAY_WITH_COLLATERAL_ADAPTER = "0xa12734e64417f61f8442E7D5132EdBFdbDDeF0fa";
declare const STATIC_A_TOKEN_FACTORY = "0x22D76094730fA377184100EFB8CEfC673B89B372";
declare const SWAP_COLLATERAL_ADAPTER = "0x830C5A67a0C95D69dA5fb7801Ac1773c6fB53857";
declare const UI_INCENTIVE_DATA_PROVIDER = "0x6F143FE2F7B02424ad3CaD1593D6f36c0Aab69d7";
declare const UI_POOL_DATA_PROVIDER = "0xbd83DdBE37fc91923d59C8c1E0bDe0CccCa332d5";
declare const WALLET_BALANCE_PROVIDER = "0xBc790382B3686abffE4be14A030A96aC6154023a";
declare const WETH_GATEWAY = "0x76D3030728e52DEB8848d5613aBaDE88441cbc59";
declare const WITHDRAW_SWAP_ADAPTER = "0x78F8Bd884C3D738B74B420540659c82f392820e0";
declare const CHAIN_ID = 10;
declare const ASSETS: {
    readonly DAI: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1";
        readonly A_TOKEN: "0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE";
        readonly S_TOKEN: "0xd94112B5B62d53C9402e7A60289c6810dEF1dC9B";
        readonly V_TOKEN: "0x8619d80FB0141ba7F184CbF22fd724116D9f7ffC";
        readonly INTEREST_RATE_STRATEGY: "0x6D6D3b7FC50999bf20dE5CC8e0F63AFD18B95f0e";
        readonly ORACLE: "0x8dBa75e83DA73cc766A7e5a0ee71F656BAb470d6";
        readonly STATA_TOKEN: "0x6dDc64289bE8a71A707fB057d5d07Cc756055d6e";
    };
    readonly LINK: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6";
        readonly A_TOKEN: "0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530";
        readonly S_TOKEN: "0x89D976629b7055ff1ca02b927BA3e020F22A44e4";
        readonly V_TOKEN: "0x953A573793604aF8d41F306FEb8274190dB4aE0e";
        readonly INTEREST_RATE_STRATEGY: "0xeE1BAc9355EaAfCD1B68d272d640d870bC9b4b5C";
        readonly ORACLE: "0xCc232dcFAAE6354cE191Bd574108c1aD03f86450";
        readonly STATA_TOKEN: "0x39BCf217ACc4Bf2fCaF7BC8800E69D986912c75e";
    };
    readonly USDC: {
        readonly decimals: 6;
        readonly UNDERLYING: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607";
        readonly A_TOKEN: "0x625E7708f30cA75bfd92586e17077590C60eb4cD";
        readonly S_TOKEN: "0x307ffe186F84a3bc2613D1eA417A5737D69A7007";
        readonly V_TOKEN: "0xFCCf3cAbbe80101232d343252614b6A3eE81C989";
        readonly INTEREST_RATE_STRATEGY: "0x769EbC5106bF09D9A665CCb691e1907612b57F16";
        readonly ORACLE: "0x16a9FA2FDa030272Ce99B29CF780dFA30361E0f3";
        readonly STATA_TOKEN: "0x9F281eb58fd98ad98EDe0fc4C553AD4D73e7Ca2C";
    };
    readonly WBTC: {
        readonly decimals: 8;
        readonly UNDERLYING: "0x68f180fcCe6836688e9084f035309E29Bf0A2095";
        readonly A_TOKEN: "0x078f358208685046a11C85e8ad32895DED33A249";
        readonly S_TOKEN: "0x633b207Dd676331c413D4C013a6294B0FE47cD0e";
        readonly V_TOKEN: "0x92b42c66840C7AD907b4BF74879FF3eF7c529473";
        readonly INTEREST_RATE_STRATEGY: "0x04daBC3C1c052AB94AA2ca80140f2b978d2F6E17";
        readonly ORACLE: "0xD702DD976Fb76Fffc2D3963D037dfDae5b04E593";
        readonly STATA_TOKEN: "0x6d998FeEFC7B3664eaD09CAf02b5a0fc2E365F18";
    };
    readonly WETH: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x4200000000000000000000000000000000000006";
        readonly A_TOKEN: "0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8";
        readonly S_TOKEN: "0xD8Ad37849950903571df17049516a5CD4cbE55F6";
        readonly V_TOKEN: "0x0c84331e39d6658Cd6e6b9ba04736cC4c4734351";
        readonly INTEREST_RATE_STRATEGY: "0x5f58C25D17C09c9e1892F45DE6dA45ed973A5326";
        readonly ORACLE: "0x13e3Ee699D1909E989722E753853AE30b17e08c5";
        readonly STATA_TOKEN: "0x98d69620C31869fD4822ceb6ADAB31180475FD37";
    };
    readonly USDT: {
        readonly decimals: 6;
        readonly UNDERLYING: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58";
        readonly A_TOKEN: "0x6ab707Aca953eDAeFBc4fD23bA73294241490620";
        readonly S_TOKEN: "0x70eFfc565DB6EEf7B927610155602d31b670e802";
        readonly V_TOKEN: "0xfb00AC187a8Eb5AFAE4eACE434F493Eb62672df7";
        readonly INTEREST_RATE_STRATEGY: "0x6D6D3b7FC50999bf20dE5CC8e0F63AFD18B95f0e";
        readonly ORACLE: "0xECef79E109e997bCA29c1c0897ec9d7b03647F5E";
        readonly STATA_TOKEN: "0x035c93db04E5aAea54E6cd0261C492a3e0638b37";
    };
    readonly AAVE: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x76FB31fb4af56892A25e32cFC43De717950c9278";
        readonly A_TOKEN: "0xf329e36C7bF6E5E86ce2150875a84Ce77f477375";
        readonly S_TOKEN: "0xfAeF6A702D15428E588d4C0614AEFb4348D83D48";
        readonly V_TOKEN: "0xE80761Ea617F66F96274eA5e8c37f03960ecC679";
        readonly INTEREST_RATE_STRATEGY: "0xeE1BAc9355EaAfCD1B68d272d640d870bC9b4b5C";
        readonly ORACLE: "0x338ed6787f463394D24813b297401B9F05a8C9d1";
        readonly STATA_TOKEN: "0xae0Ca1B1Bc6cac26981B5e2b9c40f8Ce8A9082eE";
    };
    readonly sUSD: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9";
        readonly A_TOKEN: "0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97";
        readonly S_TOKEN: "0xF15F26710c827DDe8ACBA678682F3Ce24f2Fb56E";
        readonly V_TOKEN: "0x4a1c3aD6Ed28a636ee1751C69071f6be75DEb8B8";
        readonly INTEREST_RATE_STRATEGY: "0xD61ca03Eac0352090f45bE50403F7B17d20E11F2";
        readonly ORACLE: "0x7f99817d87baD03ea21E05112Ca799d715730efe";
        readonly STATA_TOKEN: "0x3A956E2Fcc7e71Ea14b0257d40BEbdB287d19652";
    };
    readonly OP: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x4200000000000000000000000000000000000042";
        readonly A_TOKEN: "0x513c7E3a9c69cA3e22550eF58AC1C0088e918FFf";
        readonly S_TOKEN: "0x08Cb71192985E936C7Cd166A8b268035e400c3c3";
        readonly V_TOKEN: "0x77CA01483f379E58174739308945f044e1a764dc";
        readonly INTEREST_RATE_STRATEGY: "0xeE1BAc9355EaAfCD1B68d272d640d870bC9b4b5C";
        readonly ORACLE: "0x0D276FC14719f9292D5C1eA2198673d1f4269246";
        readonly STATA_TOKEN: "0xd4F1Cf9A038269FE8F03745C2875591Ad6438ab1";
    };
    readonly wstETH: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb";
        readonly A_TOKEN: "0xc45A479877e1e9Dfe9FcD4056c699575a1045dAA";
        readonly S_TOKEN: "0x78246294a4c6fBf614Ed73CcC9F8b875ca8eE841";
        readonly V_TOKEN: "0x34e2eD44EF7466D5f9E0b782B5c08b57475e7907";
        readonly INTEREST_RATE_STRATEGY: "0x6BA97468e2e6a3711a6DD05F0075d48E878c910e";
        readonly ORACLE: "0x80f2c02224a2E548FC67c0bF705eBFA825dd5439";
        readonly STATA_TOKEN: "0xb972abef80046A57409e37a7DF5dEf2638917516";
    };
    readonly LUSD: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xc40F949F8a4e094D1b49a23ea9241D289B7b2819";
        readonly A_TOKEN: "0x8Eb270e296023E9D92081fdF967dDd7878724424";
        readonly S_TOKEN: "0x3EF10DFf4928279c004308EbADc4Db8B7620d6fc";
        readonly V_TOKEN: "0xCE186F6Cccb0c955445bb9d10C59caE488Fea559";
        readonly INTEREST_RATE_STRATEGY: "0x41365f2aC2D19c3B4Bc691007d314aba80af3669";
        readonly ORACLE: "0x9dfc79Aaeb5bb0f96C6e9402671981CdFc424052";
        readonly STATA_TOKEN: "0x84648dc3Cefb601bc28a49A07a1A8Bad04D30Ad3";
    };
    readonly MAI: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xdFA46478F9e5EA86d57387849598dbFB2e964b02";
        readonly A_TOKEN: "0x8ffDf2DE812095b1D19CB146E4c004587C0A0692";
        readonly S_TOKEN: "0xa5e408678469d23efDB7694b1B0A85BB0669e8bd";
        readonly V_TOKEN: "0xA8669021776Bc142DfcA87c21b4A52595bCbB40a";
        readonly INTEREST_RATE_STRATEGY: "0x049E42fe40368384d04bC10f8494Ea6FD164442a";
        readonly ORACLE: "0x73A3919a69eFCd5b19df8348c6740bB1446F5ed0";
        readonly STATA_TOKEN: "0x60495bC8D8Baf7E866888ecC00491e37B47dfF24";
    };
    readonly rETH: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x9Bcef72be871e61ED4fBbc7630889beE758eb81D";
        readonly A_TOKEN: "0x724dc807b04555b71ed48a6896b6F41593b8C637";
        readonly S_TOKEN: "0xDC1fad70953Bb3918592b6fCc374fe05F5811B6a";
        readonly V_TOKEN: "0xf611aEb5013fD2c0511c9CD55c7dc5C1140741A6";
        readonly INTEREST_RATE_STRATEGY: "0x3B57B081dA6Af5e2759A57bD3211932Cb6176997";
        readonly ORACLE: "0x52d5F9f884CA21C27E2100735d793C6771eAB793";
        readonly STATA_TOKEN: "0xf9ce3c97b4b54F3D16861420f4816D9f68190B7B";
    };
    readonly USDCn: {
        readonly decimals: 6;
        readonly UNDERLYING: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85";
        readonly A_TOKEN: "0x38d693cE1dF5AaDF7bC62595A37D667aD57922e5";
        readonly S_TOKEN: "0x8a9FdE6925a839F6B1932d16B36aC026F8d3FbdB";
        readonly V_TOKEN: "0x5D557B07776D12967914379C71a1310e917C7555";
        readonly INTEREST_RATE_STRATEGY: "0xB57Ff919A953424d6B143ABfD6740A225eab953e";
        readonly ORACLE: "0x16a9FA2FDa030272Ce99B29CF780dFA30361E0f3";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
};
declare const E_MODES: {
    readonly NONE: 0;
    readonly STABLECOINS: 1;
    readonly ETH_CORRELATED: 2;
};

declare const AaveV3Optimism_AAVE_PROTOCOL_DATA_PROVIDER: typeof AAVE_PROTOCOL_DATA_PROVIDER;
declare const AaveV3Optimism_ACL_ADMIN: typeof ACL_ADMIN;
declare const AaveV3Optimism_ACL_MANAGER: typeof ACL_MANAGER;
declare const AaveV3Optimism_ASSETS: typeof ASSETS;
declare const AaveV3Optimism_CAPS_PLUS_RISK_STEWARD: typeof CAPS_PLUS_RISK_STEWARD;
declare const AaveV3Optimism_CHAIN_ID: typeof CHAIN_ID;
declare const AaveV3Optimism_COLLECTOR: typeof COLLECTOR;
declare const AaveV3Optimism_CONFIG_ENGINE: typeof CONFIG_ENGINE;
declare const AaveV3Optimism_DEBT_SWAP_ADAPTER: typeof DEBT_SWAP_ADAPTER;
declare const AaveV3Optimism_DEFAULT_A_TOKEN_IMPL_REV_2: typeof DEFAULT_A_TOKEN_IMPL_REV_2;
declare const AaveV3Optimism_DEFAULT_INCENTIVES_CONTROLLER: typeof DEFAULT_INCENTIVES_CONTROLLER;
declare const AaveV3Optimism_DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_3: typeof DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_3;
declare const AaveV3Optimism_DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_2: typeof DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_2;
declare const AaveV3Optimism_EMISSION_MANAGER: typeof EMISSION_MANAGER;
declare const AaveV3Optimism_E_MODES: typeof E_MODES;
declare const AaveV3Optimism_FREEZING_STEWARD: typeof FREEZING_STEWARD;
declare const AaveV3Optimism_L2_ENCODER: typeof L2_ENCODER;
declare const AaveV3Optimism_ORACLE: typeof ORACLE;
declare const AaveV3Optimism_POOL: typeof POOL;
declare const AaveV3Optimism_POOL_ADDRESSES_PROVIDER: typeof POOL_ADDRESSES_PROVIDER;
declare const AaveV3Optimism_POOL_ADDRESSES_PROVIDER_REGISTRY: typeof POOL_ADDRESSES_PROVIDER_REGISTRY;
declare const AaveV3Optimism_POOL_CONFIGURATOR: typeof POOL_CONFIGURATOR;
declare const AaveV3Optimism_PRICE_ORACLE_SENTINEL: typeof PRICE_ORACLE_SENTINEL;
declare const AaveV3Optimism_RATES_FACTORY: typeof RATES_FACTORY;
declare const AaveV3Optimism_REPAY_WITH_COLLATERAL_ADAPTER: typeof REPAY_WITH_COLLATERAL_ADAPTER;
declare const AaveV3Optimism_STATIC_A_TOKEN_FACTORY: typeof STATIC_A_TOKEN_FACTORY;
declare const AaveV3Optimism_SWAP_COLLATERAL_ADAPTER: typeof SWAP_COLLATERAL_ADAPTER;
declare const AaveV3Optimism_UI_INCENTIVE_DATA_PROVIDER: typeof UI_INCENTIVE_DATA_PROVIDER;
declare const AaveV3Optimism_UI_POOL_DATA_PROVIDER: typeof UI_POOL_DATA_PROVIDER;
declare const AaveV3Optimism_WALLET_BALANCE_PROVIDER: typeof WALLET_BALANCE_PROVIDER;
declare const AaveV3Optimism_WETH_GATEWAY: typeof WETH_GATEWAY;
declare const AaveV3Optimism_WITHDRAW_SWAP_ADAPTER: typeof WITHDRAW_SWAP_ADAPTER;
declare namespace AaveV3Optimism {
  export { AaveV3Optimism_AAVE_PROTOCOL_DATA_PROVIDER as AAVE_PROTOCOL_DATA_PROVIDER, AaveV3Optimism_ACL_ADMIN as ACL_ADMIN, AaveV3Optimism_ACL_MANAGER as ACL_MANAGER, AaveV3Optimism_ASSETS as ASSETS, AaveV3Optimism_CAPS_PLUS_RISK_STEWARD as CAPS_PLUS_RISK_STEWARD, AaveV3Optimism_CHAIN_ID as CHAIN_ID, AaveV3Optimism_COLLECTOR as COLLECTOR, AaveV3Optimism_CONFIG_ENGINE as CONFIG_ENGINE, AaveV3Optimism_DEBT_SWAP_ADAPTER as DEBT_SWAP_ADAPTER, AaveV3Optimism_DEFAULT_A_TOKEN_IMPL_REV_2 as DEFAULT_A_TOKEN_IMPL_REV_2, AaveV3Optimism_DEFAULT_INCENTIVES_CONTROLLER as DEFAULT_INCENTIVES_CONTROLLER, AaveV3Optimism_DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_3 as DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_3, AaveV3Optimism_DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_2 as DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_2, AaveV3Optimism_EMISSION_MANAGER as EMISSION_MANAGER, AaveV3Optimism_E_MODES as E_MODES, AaveV3Optimism_FREEZING_STEWARD as FREEZING_STEWARD, AaveV3Optimism_L2_ENCODER as L2_ENCODER, AaveV3Optimism_ORACLE as ORACLE, AaveV3Optimism_POOL as POOL, AaveV3Optimism_POOL_ADDRESSES_PROVIDER as POOL_ADDRESSES_PROVIDER, AaveV3Optimism_POOL_ADDRESSES_PROVIDER_REGISTRY as POOL_ADDRESSES_PROVIDER_REGISTRY, AaveV3Optimism_POOL_CONFIGURATOR as POOL_CONFIGURATOR, AaveV3Optimism_PRICE_ORACLE_SENTINEL as PRICE_ORACLE_SENTINEL, AaveV3Optimism_RATES_FACTORY as RATES_FACTORY, AaveV3Optimism_REPAY_WITH_COLLATERAL_ADAPTER as REPAY_WITH_COLLATERAL_ADAPTER, AaveV3Optimism_STATIC_A_TOKEN_FACTORY as STATIC_A_TOKEN_FACTORY, AaveV3Optimism_SWAP_COLLATERAL_ADAPTER as SWAP_COLLATERAL_ADAPTER, AaveV3Optimism_UI_INCENTIVE_DATA_PROVIDER as UI_INCENTIVE_DATA_PROVIDER, AaveV3Optimism_UI_POOL_DATA_PROVIDER as UI_POOL_DATA_PROVIDER, AaveV3Optimism_WALLET_BALANCE_PROVIDER as WALLET_BALANCE_PROVIDER, AaveV3Optimism_WETH_GATEWAY as WETH_GATEWAY, AaveV3Optimism_WITHDRAW_SWAP_ADAPTER as WITHDRAW_SWAP_ADAPTER };
}

export { AaveV3Optimism as A, COLLECTOR as C, DEFAULT_INCENTIVES_CONTROLLER as D, EMISSION_MANAGER as E, FREEZING_STEWARD as F, L2_ENCODER as L, ORACLE as O, POOL_ADDRESSES_PROVIDER as P, RATES_FACTORY as R, STATIC_A_TOKEN_FACTORY as S, UI_INCENTIVE_DATA_PROVIDER as U, WALLET_BALANCE_PROVIDER as W, POOL as a, POOL_CONFIGURATOR as b, PRICE_ORACLE_SENTINEL as c, AAVE_PROTOCOL_DATA_PROVIDER as d, ACL_MANAGER as e, ACL_ADMIN as f, DEFAULT_A_TOKEN_IMPL_REV_2 as g, DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_2 as h, DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_3 as i, CAPS_PLUS_RISK_STEWARD as j, DEBT_SWAP_ADAPTER as k, CONFIG_ENGINE as l, POOL_ADDRESSES_PROVIDER_REGISTRY as m, REPAY_WITH_COLLATERAL_ADAPTER as n, SWAP_COLLATERAL_ADAPTER as o, UI_POOL_DATA_PROVIDER as p, WETH_GATEWAY as q, WITHDRAW_SWAP_ADAPTER as r, CHAIN_ID as s, ASSETS as t, E_MODES as u };
