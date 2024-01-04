// src/ts/AaveV2Fuji.ts
var POOL_ADDRESSES_PROVIDER = "0x7fdC1FdF79BE3309bf82f4abdAD9f111A6590C0f";
var POOL = "0x76cc67FF2CC77821A70ED14321111Ce381C2594D";
var POOL_CONFIGURATOR = "0x4ceBAFAAcc6Cb26FD90E4cDe138Eb812442bb5f3";
var ORACLE = "0xfa4f5B081632c4709667D467F817C09d9008A46A";
var LENDING_RATE_ORACLE = "0x76Ec7c83aCb6af821E61F1DF1E0aBE684Bc904F8";
var AAVE_PROTOCOL_DATA_PROVIDER = "0x0668EDE013c1c475724523409b8B6bE633469585";
var POOL_ADMIN = "0x1128d177BdaA74Ae68EB06e693f4CbA6BF427a5e";
var EMERGENCY_ADMIN = "0x1128d177BdaA74Ae68EB06e693f4CbA6BF427a5e";
var COLLECTOR = "0xB45F5C501A22288dfdb897e5f73E189597e09288";
var DEFAULT_INCENTIVES_CONTROLLER = "0xa1EF206fb9a8D8186157FC817fCddcC47727ED55";
var EMISSION_MANAGER = "0x3b60cABB2C0e9ADe3e364b1F9752342A5D6079e2";
var LENDING_POOL_COLLATERAL_MANAGER = "0x007bbD6A554E27EcdA1D10b40974eb7478799EcB";
var FAUCET = "0x90E5BAc5A98fff59617080848959f44eACB4Cd7B";
var POOL_ADDRESSES_PROVIDER_REGISTRY = "0x04A6Fa9999E3C807Ee7b6Ca58eFAb93713d405BF";
var UI_INCENTIVE_DATA_PROVIDER = "0x9842E5B7b7C6cEDfB1952a388e050582Ff95645b";
var UI_POOL_DATA_PROVIDER = "0x88b4013f8C50e61ab027Cc253ab9a50663e2dF45";
var WALLET_BALANCE_PROVIDER = "0x3f5A507B33260a3869878B31FB90F04F451d28e3";
var WETH_GATEWAY = "0x1648C14DbB6ccdd5846969cE23DeEC4C66a03335";
var CHAIN_ID = 43113;
var ASSETS = {
  WETH: {
    UNDERLYING: "0x9668f5f55f2712Dd2dfa316256609b516292D554",
    decimals: 18,
    A_TOKEN: "0x2B2927e26b433D92fC598EE79Fa351d6591B8F95",
    S_TOKEN: "0x056AaAc3aAf49d00C4fA10bCf9661D2371427ECB",
    V_TOKEN: "0xB61CC359E2133b8618cc0319F359F8CA1d3d2b33",
    INTEREST_RATE_STRATEGY: "0x79bA34079AA04E5d5b25C29df03A3736a8eC7817",
    ORACLE: "0x86d67c3D38D2bCeE722E601025C25a575021c6EA"
  },
  USDT: {
    UNDERLYING: "0x02823f9B469960Bb3b1de0B3746D4b95B7E35543",
    decimals: 6,
    A_TOKEN: "0x5f049c41aF3856cBc171F61FB04D58C1e7445f5F",
    S_TOKEN: "0x8c5a8eB9dd4e029c1A5B9e740086eB6Cf4Ba7F13",
    V_TOKEN: "0x6422A7C91A48dD211BF6BdE1Db14d7734f9cbD69",
    INTEREST_RATE_STRATEGY: "0xC49F727470A367f29Bf4F55B53b4531a26E61E05",
    ORACLE: "0x7898AcCC83587C3C55116c5230C17a6Cd9C71bad"
  },
  WBTC: {
    UNDERLYING: "0x9C1DCacB57ADa1E9e2D3a8280B7cfC7EB936186F",
    decimals: 8,
    A_TOKEN: "0xD5B516FDbfb7264676Fd4901B9dD3F707db68733",
    S_TOKEN: "0x38A9d8f89Cf87FD4C50dd7B019b9af30c2540512",
    V_TOKEN: "0xbd0601970fE5b35649Fb92f292cde21f0f52eAE9",
    INTEREST_RATE_STRATEGY: "0xC58e46e20B11192Ecb90a8735362e3b633960bf5",
    ORACLE: "0x31CF013A08c6Ac228C94551d535d5BAfE19c602a"
  },
  WAVAX: {
    UNDERLYING: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
    decimals: 18,
    A_TOKEN: "0xf8C78Ba24DD965487f4472dfb280c46800a0c9B6",
    S_TOKEN: "0xE1c2E4E85d34CAed5c29447135c3ADfaD30364f1",
    V_TOKEN: "0x333f38B8E76077539Cde1d50Fb5dE0AC6F7E6837",
    INTEREST_RATE_STRATEGY: "0xd720420A83FefC64aE9Ff776e5B36621D0989AB7",
    ORACLE: "0x5498BB86BC934c8D34FDA08E81D444153d0D06aD"
  }
};
export {
  AAVE_PROTOCOL_DATA_PROVIDER,
  ASSETS,
  CHAIN_ID,
  COLLECTOR,
  DEFAULT_INCENTIVES_CONTROLLER,
  EMERGENCY_ADMIN,
  EMISSION_MANAGER,
  FAUCET,
  LENDING_POOL_COLLATERAL_MANAGER,
  LENDING_RATE_ORACLE,
  ORACLE,
  POOL,
  POOL_ADDRESSES_PROVIDER,
  POOL_ADDRESSES_PROVIDER_REGISTRY,
  POOL_ADMIN,
  POOL_CONFIGURATOR,
  UI_INCENTIVE_DATA_PROVIDER,
  UI_POOL_DATA_PROVIDER,
  WALLET_BALANCE_PROVIDER,
  WETH_GATEWAY
};
//# sourceMappingURL=AaveV2Fuji.mjs.map