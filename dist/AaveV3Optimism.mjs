// src/ts/AaveV3Optimism.ts
var POOL_ADDRESSES_PROVIDER = "0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb";
var POOL = "0x794a61358D6845594F94dc1DB02A252b5b4814aD";
var POOL_CONFIGURATOR = "0x8145eddDf43f50276641b55bd3AD95944510021E";
var ORACLE = "0xD81eb3728a631871a7eBBaD631b5f424909f0c77";
var PRICE_ORACLE_SENTINEL = "0xE229d5DE4BD5beEAf12d427B5B57BFe66abD2c3b";
var AAVE_PROTOCOL_DATA_PROVIDER = "0xd9Ca4878dd38B021583c1B669905592EAe76E044";
var ACL_MANAGER = "0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B";
var ACL_ADMIN = "0x746c675dAB49Bcd5BB9Dc85161f2d7Eb435009bf";
var COLLECTOR = "0xB2289E329D2F85F1eD31Adbb30eA345278F21bcf";
var DEFAULT_INCENTIVES_CONTROLLER = "0x929EC64c34a17401F460460D4B9390518E5B473e";
var DEFAULT_A_TOKEN_IMPL_REV_2 = "0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B";
var DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_2 = "0x04a8D477eE202aDCE1682F5902e1160455205b12";
var DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_3 = "0x69713dA5fDfacf77E80C31F9B928Ec0Fc3716384";
var EMISSION_MANAGER = "0x048f2228D7Bf6776f99aB50cB1b1eaB4D1d4cA73";
var CAPS_PLUS_RISK_STEWARD = "0x5E76E98E0963EcDC6A065d1435F84065b7523f39";
var FREEZING_STEWARD = "0x3829943c53F2d00e20B58475aF19716724bF90Ba";
var DEBT_SWAP_ADAPTER = "0xcFaE0D8c5707FCc6478D6a65fFA31efADeF8b8EC";
var L2_ENCODER = "0x9abADECD08572e0eA5aF4d47A9C7984a5AA503dC";
var CONFIG_ENGINE = "0x893411580e590D62dDBca8a703d61Cc4A8c7b2b9";
var POOL_ADDRESSES_PROVIDER_REGISTRY = "0x770ef9f4fe897e59daCc474EF11238303F9552b6";
var RATES_FACTORY = "0xDd81E6F85358292075B78fc8D5830BE8434aF8BA";
var REPAY_WITH_COLLATERAL_ADAPTER = "0xa12734e64417f61f8442E7D5132EdBFdbDDeF0fa";
var STATIC_A_TOKEN_FACTORY = "0x22D76094730fA377184100EFB8CEfC673B89B372";
var SWAP_COLLATERAL_ADAPTER = "0x830C5A67a0C95D69dA5fb7801Ac1773c6fB53857";
var UI_INCENTIVE_DATA_PROVIDER = "0x6F143FE2F7B02424ad3CaD1593D6f36c0Aab69d7";
var UI_POOL_DATA_PROVIDER = "0xbd83DdBE37fc91923d59C8c1E0bDe0CccCa332d5";
var WALLET_BALANCE_PROVIDER = "0xBc790382B3686abffE4be14A030A96aC6154023a";
var WETH_GATEWAY = "0x76D3030728e52DEB8848d5613aBaDE88441cbc59";
var WITHDRAW_SWAP_ADAPTER = "0x78F8Bd884C3D738B74B420540659c82f392820e0";
var CHAIN_ID = 10;
var ASSETS = {
  DAI: {
    decimals: 18,
    UNDERLYING: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    A_TOKEN: "0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE",
    S_TOKEN: "0xd94112B5B62d53C9402e7A60289c6810dEF1dC9B",
    V_TOKEN: "0x8619d80FB0141ba7F184CbF22fd724116D9f7ffC",
    INTEREST_RATE_STRATEGY: "0x6D6D3b7FC50999bf20dE5CC8e0F63AFD18B95f0e",
    ORACLE: "0x8dBa75e83DA73cc766A7e5a0ee71F656BAb470d6",
    STATA_TOKEN: "0x6dDc64289bE8a71A707fB057d5d07Cc756055d6e"
  },
  LINK: {
    decimals: 18,
    UNDERLYING: "0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6",
    A_TOKEN: "0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530",
    S_TOKEN: "0x89D976629b7055ff1ca02b927BA3e020F22A44e4",
    V_TOKEN: "0x953A573793604aF8d41F306FEb8274190dB4aE0e",
    INTEREST_RATE_STRATEGY: "0xeE1BAc9355EaAfCD1B68d272d640d870bC9b4b5C",
    ORACLE: "0xCc232dcFAAE6354cE191Bd574108c1aD03f86450",
    STATA_TOKEN: "0x39BCf217ACc4Bf2fCaF7BC8800E69D986912c75e"
  },
  USDC: {
    decimals: 6,
    UNDERLYING: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
    A_TOKEN: "0x625E7708f30cA75bfd92586e17077590C60eb4cD",
    S_TOKEN: "0x307ffe186F84a3bc2613D1eA417A5737D69A7007",
    V_TOKEN: "0xFCCf3cAbbe80101232d343252614b6A3eE81C989",
    INTEREST_RATE_STRATEGY: "0x769EbC5106bF09D9A665CCb691e1907612b57F16",
    ORACLE: "0x16a9FA2FDa030272Ce99B29CF780dFA30361E0f3",
    STATA_TOKEN: "0x9F281eb58fd98ad98EDe0fc4C553AD4D73e7Ca2C"
  },
  WBTC: {
    decimals: 8,
    UNDERLYING: "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
    A_TOKEN: "0x078f358208685046a11C85e8ad32895DED33A249",
    S_TOKEN: "0x633b207Dd676331c413D4C013a6294B0FE47cD0e",
    V_TOKEN: "0x92b42c66840C7AD907b4BF74879FF3eF7c529473",
    INTEREST_RATE_STRATEGY: "0x04daBC3C1c052AB94AA2ca80140f2b978d2F6E17",
    ORACLE: "0xD702DD976Fb76Fffc2D3963D037dfDae5b04E593",
    STATA_TOKEN: "0x6d998FeEFC7B3664eaD09CAf02b5a0fc2E365F18"
  },
  WETH: {
    decimals: 18,
    UNDERLYING: "0x4200000000000000000000000000000000000006",
    A_TOKEN: "0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8",
    S_TOKEN: "0xD8Ad37849950903571df17049516a5CD4cbE55F6",
    V_TOKEN: "0x0c84331e39d6658Cd6e6b9ba04736cC4c4734351",
    INTEREST_RATE_STRATEGY: "0x5f58C25D17C09c9e1892F45DE6dA45ed973A5326",
    ORACLE: "0x13e3Ee699D1909E989722E753853AE30b17e08c5",
    STATA_TOKEN: "0x98d69620C31869fD4822ceb6ADAB31180475FD37"
  },
  USDT: {
    decimals: 6,
    UNDERLYING: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
    A_TOKEN: "0x6ab707Aca953eDAeFBc4fD23bA73294241490620",
    S_TOKEN: "0x70eFfc565DB6EEf7B927610155602d31b670e802",
    V_TOKEN: "0xfb00AC187a8Eb5AFAE4eACE434F493Eb62672df7",
    INTEREST_RATE_STRATEGY: "0x6D6D3b7FC50999bf20dE5CC8e0F63AFD18B95f0e",
    ORACLE: "0xECef79E109e997bCA29c1c0897ec9d7b03647F5E",
    STATA_TOKEN: "0x035c93db04E5aAea54E6cd0261C492a3e0638b37"
  },
  AAVE: {
    decimals: 18,
    UNDERLYING: "0x76FB31fb4af56892A25e32cFC43De717950c9278",
    A_TOKEN: "0xf329e36C7bF6E5E86ce2150875a84Ce77f477375",
    S_TOKEN: "0xfAeF6A702D15428E588d4C0614AEFb4348D83D48",
    V_TOKEN: "0xE80761Ea617F66F96274eA5e8c37f03960ecC679",
    INTEREST_RATE_STRATEGY: "0xeE1BAc9355EaAfCD1B68d272d640d870bC9b4b5C",
    ORACLE: "0x338ed6787f463394D24813b297401B9F05a8C9d1",
    STATA_TOKEN: "0xae0Ca1B1Bc6cac26981B5e2b9c40f8Ce8A9082eE"
  },
  sUSD: {
    decimals: 18,
    UNDERLYING: "0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9",
    A_TOKEN: "0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97",
    S_TOKEN: "0xF15F26710c827DDe8ACBA678682F3Ce24f2Fb56E",
    V_TOKEN: "0x4a1c3aD6Ed28a636ee1751C69071f6be75DEb8B8",
    INTEREST_RATE_STRATEGY: "0xD61ca03Eac0352090f45bE50403F7B17d20E11F2",
    ORACLE: "0x7f99817d87baD03ea21E05112Ca799d715730efe",
    STATA_TOKEN: "0x3A956E2Fcc7e71Ea14b0257d40BEbdB287d19652"
  },
  OP: {
    decimals: 18,
    UNDERLYING: "0x4200000000000000000000000000000000000042",
    A_TOKEN: "0x513c7E3a9c69cA3e22550eF58AC1C0088e918FFf",
    S_TOKEN: "0x08Cb71192985E936C7Cd166A8b268035e400c3c3",
    V_TOKEN: "0x77CA01483f379E58174739308945f044e1a764dc",
    INTEREST_RATE_STRATEGY: "0xeE1BAc9355EaAfCD1B68d272d640d870bC9b4b5C",
    ORACLE: "0x0D276FC14719f9292D5C1eA2198673d1f4269246",
    STATA_TOKEN: "0xd4F1Cf9A038269FE8F03745C2875591Ad6438ab1"
  },
  wstETH: {
    decimals: 18,
    UNDERLYING: "0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb",
    A_TOKEN: "0xc45A479877e1e9Dfe9FcD4056c699575a1045dAA",
    S_TOKEN: "0x78246294a4c6fBf614Ed73CcC9F8b875ca8eE841",
    V_TOKEN: "0x34e2eD44EF7466D5f9E0b782B5c08b57475e7907",
    INTEREST_RATE_STRATEGY: "0x6BA97468e2e6a3711a6DD05F0075d48E878c910e",
    ORACLE: "0x80f2c02224a2E548FC67c0bF705eBFA825dd5439",
    STATA_TOKEN: "0xb972abef80046A57409e37a7DF5dEf2638917516"
  },
  LUSD: {
    decimals: 18,
    UNDERLYING: "0xc40F949F8a4e094D1b49a23ea9241D289B7b2819",
    A_TOKEN: "0x8Eb270e296023E9D92081fdF967dDd7878724424",
    S_TOKEN: "0x3EF10DFf4928279c004308EbADc4Db8B7620d6fc",
    V_TOKEN: "0xCE186F6Cccb0c955445bb9d10C59caE488Fea559",
    INTEREST_RATE_STRATEGY: "0x41365f2aC2D19c3B4Bc691007d314aba80af3669",
    ORACLE: "0x9dfc79Aaeb5bb0f96C6e9402671981CdFc424052",
    STATA_TOKEN: "0x84648dc3Cefb601bc28a49A07a1A8Bad04D30Ad3"
  },
  MAI: {
    decimals: 18,
    UNDERLYING: "0xdFA46478F9e5EA86d57387849598dbFB2e964b02",
    A_TOKEN: "0x8ffDf2DE812095b1D19CB146E4c004587C0A0692",
    S_TOKEN: "0xa5e408678469d23efDB7694b1B0A85BB0669e8bd",
    V_TOKEN: "0xA8669021776Bc142DfcA87c21b4A52595bCbB40a",
    INTEREST_RATE_STRATEGY: "0x049E42fe40368384d04bC10f8494Ea6FD164442a",
    ORACLE: "0x73A3919a69eFCd5b19df8348c6740bB1446F5ed0",
    STATA_TOKEN: "0x60495bC8D8Baf7E866888ecC00491e37B47dfF24"
  },
  rETH: {
    decimals: 18,
    UNDERLYING: "0x9Bcef72be871e61ED4fBbc7630889beE758eb81D",
    A_TOKEN: "0x724dc807b04555b71ed48a6896b6F41593b8C637",
    S_TOKEN: "0xDC1fad70953Bb3918592b6fCc374fe05F5811B6a",
    V_TOKEN: "0xf611aEb5013fD2c0511c9CD55c7dc5C1140741A6",
    INTEREST_RATE_STRATEGY: "0x3B57B081dA6Af5e2759A57bD3211932Cb6176997",
    ORACLE: "0x52d5F9f884CA21C27E2100735d793C6771eAB793",
    STATA_TOKEN: "0xf9ce3c97b4b54F3D16861420f4816D9f68190B7B"
  },
  USDCn: {
    decimals: 6,
    UNDERLYING: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
    A_TOKEN: "0x38d693cE1dF5AaDF7bC62595A37D667aD57922e5",
    S_TOKEN: "0x8a9FdE6925a839F6B1932d16B36aC026F8d3FbdB",
    V_TOKEN: "0x5D557B07776D12967914379C71a1310e917C7555",
    INTEREST_RATE_STRATEGY: "0xB57Ff919A953424d6B143ABfD6740A225eab953e",
    ORACLE: "0x16a9FA2FDa030272Ce99B29CF780dFA30361E0f3",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  }
};
var E_MODES = {
  NONE: 0,
  STABLECOINS: 1,
  ETH_CORRELATED: 2
};
export {
  AAVE_PROTOCOL_DATA_PROVIDER,
  ACL_ADMIN,
  ACL_MANAGER,
  ASSETS,
  CAPS_PLUS_RISK_STEWARD,
  CHAIN_ID,
  COLLECTOR,
  CONFIG_ENGINE,
  DEBT_SWAP_ADAPTER,
  DEFAULT_A_TOKEN_IMPL_REV_2,
  DEFAULT_INCENTIVES_CONTROLLER,
  DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_3,
  DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_2,
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
  REPAY_WITH_COLLATERAL_ADAPTER,
  STATIC_A_TOKEN_FACTORY,
  SWAP_COLLATERAL_ADAPTER,
  UI_INCENTIVE_DATA_PROVIDER,
  UI_POOL_DATA_PROVIDER,
  WALLET_BALANCE_PROVIDER,
  WETH_GATEWAY,
  WITHDRAW_SWAP_ADAPTER
};
//# sourceMappingURL=AaveV3Optimism.mjs.map