declare const POOL_ADDRESSES_PROVIDER = "0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb";
declare const POOL = "0x794a61358D6845594F94dc1DB02A252b5b4814aD";
declare const POOL_CONFIGURATOR = "0x8145eddDf43f50276641b55bd3AD95944510021E";
declare const ORACLE = "0xb023e699F5a33916Ea823A16485e259257cA8Bd1";
declare const PRICE_ORACLE_SENTINEL = "0x0000000000000000000000000000000000000000";
declare const AAVE_PROTOCOL_DATA_PROVIDER = "0x9441B65EE553F70df9C77d45d3283B6BC24F222d";
declare const ACL_MANAGER = "0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B";
declare const ACL_ADMIN = "0xDf7d0e6454DB638881302729F5ba99936EaAB233";
declare const COLLECTOR = "0xe8599F3cc5D38a9aD6F3684cd5CEa72f10Dbc383";
declare const DEFAULT_INCENTIVES_CONTROLLER = "0x929EC64c34a17401F460460D4B9390518E5B473e";
declare const DEFAULT_A_TOKEN_IMPL_REV_2 = "0xCf85FF1c37c594a10195F7A9Ab85CBb0a03f69dE";
declare const DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_2 = "0x79b5e91037AE441dE0d9e6fd3Fd85b96B83d4E93";
declare const DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_3 = "0xF4294973B7E6F6C411dD8A388592E7c7D32F2486";
declare const EMISSION_MANAGER = "0x048f2228D7Bf6776f99aB50cB1b1eaB4D1d4cA73";
declare const CAPS_PLUS_RISK_STEWARD = "0xc5de989E0D1BF605d19478Fdd32Aa827a10b464f";
declare const FREEZING_STEWARD = "0xa7b40ed4dfAC9255EA9Dd218A3874f380D9FbBEB";
declare const DEBT_SWAP_ADAPTER = "0xb58Fd91558fa213D97Ac94C97F831c7289278084";
declare const CONFIG_ENGINE = "0xfFD6F13c9574bedb3f4E131e9C4320186AF83c1D";
declare const POOL_ADDRESSES_PROVIDER_REGISTRY = "0x770ef9f4fe897e59daCc474EF11238303F9552b6";
declare const RATES_FACTORY = "0xcC47c4Fe1F7f29ff31A8b62197023aC8553C7896";
declare const REPAY_WITH_COLLATERAL_ADAPTER = "0xE3090207A2de94A856EA10a7e1Bd36dD6145712B";
declare const STATIC_A_TOKEN_FACTORY = "0x397202AB0b4E7C954ac0c493c00749C517210953";
declare const SWAP_COLLATERAL_ADAPTER = "0xC4aff49fCeD8ac1D818a6DCAB063f9f97E66ec5E";
declare const UI_INCENTIVE_DATA_PROVIDER = "0x874313A46e4957D29FAAC43BF5Eb2B144894f557";
declare const UI_POOL_DATA_PROVIDER = "0xC69728f11E9E6127733751c8410432913123acf1";
declare const WALLET_BALANCE_PROVIDER = "0xBc790382B3686abffE4be14A030A96aC6154023a";
declare const WETH_GATEWAY = "0x1e4b7A6b903680eab0c5dAbcb8fD429cD2a9598c";
declare const WITHDRAW_SWAP_ADAPTER = "0x78F8Bd884C3D738B74B420540659c82f392820e0";
declare const CHAIN_ID = 137;
declare const ASSETS: {
    readonly DAI: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063";
        readonly A_TOKEN: "0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE";
        readonly S_TOKEN: "0xd94112B5B62d53C9402e7A60289c6810dEF1dC9B";
        readonly V_TOKEN: "0x8619d80FB0141ba7F184CbF22fd724116D9f7ffC";
        readonly INTEREST_RATE_STRATEGY: "0xdef8F50155A6cf21181E29E400E8CffAE2d50968";
        readonly ORACLE: "0x4746DeC9e833A82EC7C2C1356372CcF2cfcD2F3D";
        readonly STATA_TOKEN: "0x83c59636e602787A6EEbBdA2915217B416193FcB";
    };
    readonly LINK: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39";
        readonly A_TOKEN: "0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530";
        readonly S_TOKEN: "0x89D976629b7055ff1ca02b927BA3e020F22A44e4";
        readonly V_TOKEN: "0x953A573793604aF8d41F306FEb8274190dB4aE0e";
        readonly INTEREST_RATE_STRATEGY: "0x03733F4E008d36f2e37F0080fF1c8DF756622E6F";
        readonly ORACLE: "0xd9FFdb71EbE7496cC440152d43986Aae0AB76665";
        readonly STATA_TOKEN: "0x37868a45c6741616F9E5a189dC0481AD70056B6a";
    };
    readonly USDC: {
        readonly decimals: 6;
        readonly UNDERLYING: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
        readonly A_TOKEN: "0x625E7708f30cA75bfd92586e17077590C60eb4cD";
        readonly S_TOKEN: "0x307ffe186F84a3bc2613D1eA417A5737D69A7007";
        readonly V_TOKEN: "0xFCCf3cAbbe80101232d343252614b6A3eE81C989";
        readonly INTEREST_RATE_STRATEGY: "0x588b62C84533232E3A881e096E5D639Fa754F093";
        readonly ORACLE: "0xfE4A8cc5b5B2366C1B58Bea3858e81843581b2F7";
        readonly STATA_TOKEN: "0x1017F4a86Fc3A3c824346d0b8C5e96A5029bDAf9";
    };
    readonly WBTC: {
        readonly decimals: 8;
        readonly UNDERLYING: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6";
        readonly A_TOKEN: "0x078f358208685046a11C85e8ad32895DED33A249";
        readonly S_TOKEN: "0x633b207Dd676331c413D4C013a6294B0FE47cD0e";
        readonly V_TOKEN: "0x92b42c66840C7AD907b4BF74879FF3eF7c529473";
        readonly INTEREST_RATE_STRATEGY: "0x07Fa3744FeC271F80c2EA97679823F65c13CCDf4";
        readonly ORACLE: "0xc907E116054Ad103354f2D350FD2514433D57F6f";
        readonly STATA_TOKEN: "0xbC0f50CCB8514Aa7dFEB297521c4BdEBc9C7d22d";
    };
    readonly WETH: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619";
        readonly A_TOKEN: "0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8";
        readonly S_TOKEN: "0xD8Ad37849950903571df17049516a5CD4cbE55F6";
        readonly V_TOKEN: "0x0c84331e39d6658Cd6e6b9ba04736cC4c4734351";
        readonly INTEREST_RATE_STRATEGY: "0xf6733B9842883BFE0e0a940eA2F572676af31bde";
        readonly ORACLE: "0xF9680D99D6C9589e2a93a78A04A279e509205945";
        readonly STATA_TOKEN: "0xb3D5Af0A52a35692D3FcbE37669b3B8C31dddE7D";
    };
    readonly USDT: {
        readonly decimals: 6;
        readonly UNDERLYING: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F";
        readonly A_TOKEN: "0x6ab707Aca953eDAeFBc4fD23bA73294241490620";
        readonly S_TOKEN: "0x70eFfc565DB6EEf7B927610155602d31b670e802";
        readonly V_TOKEN: "0xfb00AC187a8Eb5AFAE4eACE434F493Eb62672df7";
        readonly INTEREST_RATE_STRATEGY: "0xdef8F50155A6cf21181E29E400E8CffAE2d50968";
        readonly ORACLE: "0x0A6513e40db6EB1b165753AD52E80663aeA50545";
        readonly STATA_TOKEN: "0x87A1fdc4C726c459f597282be639a045062c0E46";
    };
    readonly AAVE: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xD6DF932A45C0f255f85145f286eA0b292B21C90B";
        readonly A_TOKEN: "0xf329e36C7bF6E5E86ce2150875a84Ce77f477375";
        readonly S_TOKEN: "0xfAeF6A702D15428E588d4C0614AEFb4348D83D48";
        readonly V_TOKEN: "0xE80761Ea617F66F96274eA5e8c37f03960ecC679";
        readonly INTEREST_RATE_STRATEGY: "0x03733F4E008d36f2e37F0080fF1c8DF756622E6F";
        readonly ORACLE: "0x72484B12719E23115761D5DA1646945632979bB6";
        readonly STATA_TOKEN: "0xCA2E1E33E5BCF4978E2d683656E1f5610f8C4A7E";
    };
    readonly WMATIC: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270";
        readonly A_TOKEN: "0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97";
        readonly S_TOKEN: "0xF15F26710c827DDe8ACBA678682F3Ce24f2Fb56E";
        readonly V_TOKEN: "0x4a1c3aD6Ed28a636ee1751C69071f6be75DEb8B8";
        readonly INTEREST_RATE_STRATEGY: "0xD87974E8ED49AB16d5053ba793F4e17078Be0426";
        readonly ORACLE: "0xAB594600376Ec9fD91F8e885dADF0CE036862dE0";
        readonly STATA_TOKEN: "0x98254592408E389D1dd2dBa318656C2C5c305b4E";
    };
    readonly CRV: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x172370d5Cd63279eFa6d502DAB29171933a610AF";
        readonly A_TOKEN: "0x513c7E3a9c69cA3e22550eF58AC1C0088e918FFf";
        readonly S_TOKEN: "0x08Cb71192985E936C7Cd166A8b268035e400c3c3";
        readonly V_TOKEN: "0x77CA01483f379E58174739308945f044e1a764dc";
        readonly INTEREST_RATE_STRATEGY: "0xBefcd01681224555b74eAC87207eaF9Bc3361F59";
        readonly ORACLE: "0x336584C8E6Dc19637A5b36206B1c79923111b405";
        readonly STATA_TOKEN: "0x4356941463eD4d75381AC23C9EF799B5d7C52AD8";
    };
    readonly SUSHI: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a";
        readonly A_TOKEN: "0xc45A479877e1e9Dfe9FcD4056c699575a1045dAA";
        readonly S_TOKEN: "0x78246294a4c6fBf614Ed73CcC9F8b875ca8eE841";
        readonly V_TOKEN: "0x34e2eD44EF7466D5f9E0b782B5c08b57475e7907";
        readonly INTEREST_RATE_STRATEGY: "0x03733F4E008d36f2e37F0080fF1c8DF756622E6F";
        readonly ORACLE: "0x49B0c695039243BBfEb8EcD054EB70061fd54aa0";
        readonly STATA_TOKEN: "0xe3eDe71d32240b7EC355F0e5DD1131BBe029F934";
    };
    readonly GHST: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7";
        readonly A_TOKEN: "0x8Eb270e296023E9D92081fdF967dDd7878724424";
        readonly S_TOKEN: "0x3EF10DFf4928279c004308EbADc4Db8B7620d6fc";
        readonly V_TOKEN: "0xCE186F6Cccb0c955445bb9d10C59caE488Fea559";
        readonly INTEREST_RATE_STRATEGY: "0x03733F4E008d36f2e37F0080fF1c8DF756622E6F";
        readonly ORACLE: "0xDD229Ce42f11D8Ee7fFf29bDB71C7b81352e11be";
        readonly STATA_TOKEN: "0x123319636A6a9c85D9959399304F4cB23F64327e";
    };
    readonly BAL: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3";
        readonly A_TOKEN: "0x8ffDf2DE812095b1D19CB146E4c004587C0A0692";
        readonly S_TOKEN: "0xa5e408678469d23efDB7694b1B0A85BB0669e8bd";
        readonly V_TOKEN: "0xA8669021776Bc142DfcA87c21b4A52595bCbB40a";
        readonly INTEREST_RATE_STRATEGY: "0xCbDC7D7984D7AD59434f0B1999D2006898C40f9A";
        readonly ORACLE: "0xD106B538F2A868c28Ca1Ec7E298C3325E0251d66";
        readonly STATA_TOKEN: "0x1a8969FD39AbaF228e690B172C4C3Eb7c67F95E1";
    };
    readonly DPI: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369";
        readonly A_TOKEN: "0x724dc807b04555b71ed48a6896b6F41593b8C637";
        readonly S_TOKEN: "0xDC1fad70953Bb3918592b6fCc374fe05F5811B6a";
        readonly V_TOKEN: "0xf611aEb5013fD2c0511c9CD55c7dc5C1140741A6";
        readonly INTEREST_RATE_STRATEGY: "0xd9d85499449f26d2A2c240defd75314f23920089";
        readonly ORACLE: "0x2e48b7924FBe04d575BA229A59b64547d9da16e9";
        readonly STATA_TOKEN: "0x73B788ACA5f4F0EeB3c6Da453cDf31041a77b36D";
    };
    readonly EURS: {
        readonly decimals: 2;
        readonly UNDERLYING: "0xE111178A87A3BFf0c8d18DECBa5798827539Ae99";
        readonly A_TOKEN: "0x38d693cE1dF5AaDF7bC62595A37D667aD57922e5";
        readonly S_TOKEN: "0x8a9FdE6925a839F6B1932d16B36aC026F8d3FbdB";
        readonly V_TOKEN: "0x5D557B07776D12967914379C71a1310e917C7555";
        readonly INTEREST_RATE_STRATEGY: "0x8F183Ee74C790CB558232a141099b316D6C8Ba6E";
        readonly ORACLE: "0x73366Fe0AA0Ded304479862808e02506FE556a98";
        readonly STATA_TOKEN: "0x02E26888Ed3240BB38f26A2adF96Af9B52b167ea";
    };
    readonly jEUR: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x4e3Decbb3645551B8A19f0eA1678079FCB33fB4c";
        readonly A_TOKEN: "0x6533afac2E7BCCB20dca161449A13A32D391fb00";
        readonly S_TOKEN: "0x6B4b37618D85Db2a7b469983C888040F7F05Ea3D";
        readonly V_TOKEN: "0x44705f578135cC5d703b4c9c122528C73Eb87145";
        readonly INTEREST_RATE_STRATEGY: "0x41B66b4b6b4c9dab039d96528D1b88f7BAF8C5A4";
        readonly ORACLE: "0x73366Fe0AA0Ded304479862808e02506FE556a98";
        readonly STATA_TOKEN: "0xD992DaC78Ef3F34614E6a7d325b7b6A320FC0AB5";
    };
    readonly agEUR: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xE0B52e49357Fd4DAf2c15e02058DCE6BC0057db4";
        readonly A_TOKEN: "0x8437d7C167dFB82ED4Cb79CD44B7a32A1dd95c77";
        readonly S_TOKEN: "0x40B4BAEcc69B882e8804f9286b12228C27F8c9BF";
        readonly V_TOKEN: "0x3ca5FA07689F266e907439aFd1fBB59c44fe12f6";
        readonly INTEREST_RATE_STRATEGY: "0xA9F3C3caE095527061e6d270DBE163693e6fda9D";
        readonly ORACLE: "0x73366Fe0AA0Ded304479862808e02506FE556a98";
        readonly STATA_TOKEN: "0xd3eb8796Ed36f58E03B7b4b5AD417FA74931d2c4";
    };
    readonly miMATIC: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1";
        readonly A_TOKEN: "0xeBe517846d0F36eCEd99C735cbF6131e1fEB775D";
        readonly S_TOKEN: "0x687871030477bf974725232F764aa04318A8b9c8";
        readonly V_TOKEN: "0x18248226C16BF76c032817854E7C83a2113B4f06";
        readonly INTEREST_RATE_STRATEGY: "0xA901Bf68Bebde17ba382e499C3e9EbAe649DF276";
        readonly ORACLE: "0xd8d483d813547CfB624b8Dc33a00F2fcbCd2D428";
        readonly STATA_TOKEN: "0x8486B49433cCed038b51d18Ae3772CDB7E31CA5e";
    };
    readonly stMATIC: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x3A58a54C066FdC0f2D55FC9C89F0415C92eBf3C4";
        readonly A_TOKEN: "0xEA1132120ddcDDA2F119e99Fa7A27a0d036F7Ac9";
        readonly S_TOKEN: "0x1fFD28689DA7d0148ff0fCB669e9f9f0Fc13a219";
        readonly V_TOKEN: "0x6b030Ff3FB9956B1B69f475B77aE0d3Cf2CC5aFa";
        readonly INTEREST_RATE_STRATEGY: "0x03733F4E008d36f2e37F0080fF1c8DF756622E6F";
        readonly ORACLE: "0xEe96b77129cF54581B5a8FECCcC50A6A067034a1";
        readonly STATA_TOKEN: "0x867A180B7060fDC27610dC9096E93534F638A315";
    };
    readonly MaticX: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xfa68FB4628DFF1028CFEc22b4162FCcd0d45efb6";
        readonly A_TOKEN: "0x80cA0d8C38d2e2BcbaB66aA1648Bd1C7160500FE";
        readonly S_TOKEN: "0x62fC96b27a510cF4977B59FF952Dc32378Cc221d";
        readonly V_TOKEN: "0xB5b46F918C2923fC7f26DB76e8a6A6e9C4347Cf9";
        readonly INTEREST_RATE_STRATEGY: "0x6B434652E4C4e3e972f9F267982F05ae0fcc24b6";
        readonly ORACLE: "0x0e1120524e14Bd7aD96Ea76A1b1dD699913e2a45";
        readonly STATA_TOKEN: "0xbcDd5709641Af4BE99b1470A2B3A5203539132Ec";
    };
    readonly wstETH: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x03b54A6e9a984069379fae1a4fC4dBAE93B3bCCD";
        readonly A_TOKEN: "0xf59036CAEBeA7dC4b86638DFA2E3C97dA9FcCd40";
        readonly S_TOKEN: "0x173e54325AE58B072985DbF232436961981EA000";
        readonly V_TOKEN: "0x77fA66882a8854d883101Fb8501BD3CaD347Fc32";
        readonly INTEREST_RATE_STRATEGY: "0xA6459195d60A797D278f58Ffbd2BA62Fb3F7FA1E";
        readonly ORACLE: "0xe34949A48cd2E6f5CD41753e449bd2d43993C9AC";
        readonly STATA_TOKEN: "0x5274453F4CD5dD7280011a1Cca3B9e1b78EC59A6";
    };
    readonly USDCn: {
        readonly decimals: 6;
        readonly UNDERLYING: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359";
        readonly A_TOKEN: "0xA4D94019934D8333Ef880ABFFbF2FDd611C762BD";
        readonly S_TOKEN: "0xc889e9f8370D14A428a9857205d99BFdB400b757";
        readonly V_TOKEN: "0xE701126012EC0290822eEA17B794454d1AF8b030";
        readonly INTEREST_RATE_STRATEGY: "0x53b13a6D43F647D788411Abfd28D229C274AfBF9";
        readonly ORACLE: "0xfE4A8cc5b5B2366C1B58Bea3858e81843581b2F7";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
};
declare const E_MODES: {
    readonly NONE: 0;
    readonly STABLECOINS: 1;
    readonly MATIC_CORRELATED: 2;
    readonly ETH_CORRELATED: 3;
};

declare const AaveV3Polygon_AAVE_PROTOCOL_DATA_PROVIDER: typeof AAVE_PROTOCOL_DATA_PROVIDER;
declare const AaveV3Polygon_ACL_ADMIN: typeof ACL_ADMIN;
declare const AaveV3Polygon_ACL_MANAGER: typeof ACL_MANAGER;
declare const AaveV3Polygon_ASSETS: typeof ASSETS;
declare const AaveV3Polygon_CAPS_PLUS_RISK_STEWARD: typeof CAPS_PLUS_RISK_STEWARD;
declare const AaveV3Polygon_CHAIN_ID: typeof CHAIN_ID;
declare const AaveV3Polygon_COLLECTOR: typeof COLLECTOR;
declare const AaveV3Polygon_CONFIG_ENGINE: typeof CONFIG_ENGINE;
declare const AaveV3Polygon_DEBT_SWAP_ADAPTER: typeof DEBT_SWAP_ADAPTER;
declare const AaveV3Polygon_DEFAULT_A_TOKEN_IMPL_REV_2: typeof DEFAULT_A_TOKEN_IMPL_REV_2;
declare const AaveV3Polygon_DEFAULT_INCENTIVES_CONTROLLER: typeof DEFAULT_INCENTIVES_CONTROLLER;
declare const AaveV3Polygon_DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_3: typeof DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_3;
declare const AaveV3Polygon_DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_2: typeof DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_2;
declare const AaveV3Polygon_EMISSION_MANAGER: typeof EMISSION_MANAGER;
declare const AaveV3Polygon_E_MODES: typeof E_MODES;
declare const AaveV3Polygon_FREEZING_STEWARD: typeof FREEZING_STEWARD;
declare const AaveV3Polygon_ORACLE: typeof ORACLE;
declare const AaveV3Polygon_POOL: typeof POOL;
declare const AaveV3Polygon_POOL_ADDRESSES_PROVIDER: typeof POOL_ADDRESSES_PROVIDER;
declare const AaveV3Polygon_POOL_ADDRESSES_PROVIDER_REGISTRY: typeof POOL_ADDRESSES_PROVIDER_REGISTRY;
declare const AaveV3Polygon_POOL_CONFIGURATOR: typeof POOL_CONFIGURATOR;
declare const AaveV3Polygon_PRICE_ORACLE_SENTINEL: typeof PRICE_ORACLE_SENTINEL;
declare const AaveV3Polygon_RATES_FACTORY: typeof RATES_FACTORY;
declare const AaveV3Polygon_REPAY_WITH_COLLATERAL_ADAPTER: typeof REPAY_WITH_COLLATERAL_ADAPTER;
declare const AaveV3Polygon_STATIC_A_TOKEN_FACTORY: typeof STATIC_A_TOKEN_FACTORY;
declare const AaveV3Polygon_SWAP_COLLATERAL_ADAPTER: typeof SWAP_COLLATERAL_ADAPTER;
declare const AaveV3Polygon_UI_INCENTIVE_DATA_PROVIDER: typeof UI_INCENTIVE_DATA_PROVIDER;
declare const AaveV3Polygon_UI_POOL_DATA_PROVIDER: typeof UI_POOL_DATA_PROVIDER;
declare const AaveV3Polygon_WALLET_BALANCE_PROVIDER: typeof WALLET_BALANCE_PROVIDER;
declare const AaveV3Polygon_WETH_GATEWAY: typeof WETH_GATEWAY;
declare const AaveV3Polygon_WITHDRAW_SWAP_ADAPTER: typeof WITHDRAW_SWAP_ADAPTER;
declare namespace AaveV3Polygon {
  export { AaveV3Polygon_AAVE_PROTOCOL_DATA_PROVIDER as AAVE_PROTOCOL_DATA_PROVIDER, AaveV3Polygon_ACL_ADMIN as ACL_ADMIN, AaveV3Polygon_ACL_MANAGER as ACL_MANAGER, AaveV3Polygon_ASSETS as ASSETS, AaveV3Polygon_CAPS_PLUS_RISK_STEWARD as CAPS_PLUS_RISK_STEWARD, AaveV3Polygon_CHAIN_ID as CHAIN_ID, AaveV3Polygon_COLLECTOR as COLLECTOR, AaveV3Polygon_CONFIG_ENGINE as CONFIG_ENGINE, AaveV3Polygon_DEBT_SWAP_ADAPTER as DEBT_SWAP_ADAPTER, AaveV3Polygon_DEFAULT_A_TOKEN_IMPL_REV_2 as DEFAULT_A_TOKEN_IMPL_REV_2, AaveV3Polygon_DEFAULT_INCENTIVES_CONTROLLER as DEFAULT_INCENTIVES_CONTROLLER, AaveV3Polygon_DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_3 as DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_3, AaveV3Polygon_DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_2 as DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_2, AaveV3Polygon_EMISSION_MANAGER as EMISSION_MANAGER, AaveV3Polygon_E_MODES as E_MODES, AaveV3Polygon_FREEZING_STEWARD as FREEZING_STEWARD, AaveV3Polygon_ORACLE as ORACLE, AaveV3Polygon_POOL as POOL, AaveV3Polygon_POOL_ADDRESSES_PROVIDER as POOL_ADDRESSES_PROVIDER, AaveV3Polygon_POOL_ADDRESSES_PROVIDER_REGISTRY as POOL_ADDRESSES_PROVIDER_REGISTRY, AaveV3Polygon_POOL_CONFIGURATOR as POOL_CONFIGURATOR, AaveV3Polygon_PRICE_ORACLE_SENTINEL as PRICE_ORACLE_SENTINEL, AaveV3Polygon_RATES_FACTORY as RATES_FACTORY, AaveV3Polygon_REPAY_WITH_COLLATERAL_ADAPTER as REPAY_WITH_COLLATERAL_ADAPTER, AaveV3Polygon_STATIC_A_TOKEN_FACTORY as STATIC_A_TOKEN_FACTORY, AaveV3Polygon_SWAP_COLLATERAL_ADAPTER as SWAP_COLLATERAL_ADAPTER, AaveV3Polygon_UI_INCENTIVE_DATA_PROVIDER as UI_INCENTIVE_DATA_PROVIDER, AaveV3Polygon_UI_POOL_DATA_PROVIDER as UI_POOL_DATA_PROVIDER, AaveV3Polygon_WALLET_BALANCE_PROVIDER as WALLET_BALANCE_PROVIDER, AaveV3Polygon_WETH_GATEWAY as WETH_GATEWAY, AaveV3Polygon_WITHDRAW_SWAP_ADAPTER as WITHDRAW_SWAP_ADAPTER };
}

export { AaveV3Polygon as A, COLLECTOR as C, DEFAULT_INCENTIVES_CONTROLLER as D, EMISSION_MANAGER as E, FREEZING_STEWARD as F, ORACLE as O, POOL_ADDRESSES_PROVIDER as P, RATES_FACTORY as R, STATIC_A_TOKEN_FACTORY as S, UI_INCENTIVE_DATA_PROVIDER as U, WALLET_BALANCE_PROVIDER as W, POOL as a, POOL_CONFIGURATOR as b, PRICE_ORACLE_SENTINEL as c, AAVE_PROTOCOL_DATA_PROVIDER as d, ACL_MANAGER as e, ACL_ADMIN as f, DEFAULT_A_TOKEN_IMPL_REV_2 as g, DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_2 as h, DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_3 as i, CAPS_PLUS_RISK_STEWARD as j, DEBT_SWAP_ADAPTER as k, CONFIG_ENGINE as l, POOL_ADDRESSES_PROVIDER_REGISTRY as m, REPAY_WITH_COLLATERAL_ADAPTER as n, SWAP_COLLATERAL_ADAPTER as o, UI_POOL_DATA_PROVIDER as p, WETH_GATEWAY as q, WITHDRAW_SWAP_ADAPTER as r, CHAIN_ID as s, ASSETS as t, E_MODES as u };
