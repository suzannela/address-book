declare const POOL_ADDRESSES_PROVIDER = "0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e";
declare const POOL = "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2";
declare const POOL_CONFIGURATOR = "0x64b761D848206f447Fe2dd461b0c635Ec39EbB27";
declare const ORACLE = "0x54586bE62E3c3580375aE3723C145253060Ca0C2";
declare const PRICE_ORACLE_SENTINEL = "0x0000000000000000000000000000000000000000";
declare const AAVE_PROTOCOL_DATA_PROVIDER = "0x7B4EB56E7CD4b454BA8ff71E4518426369a138a3";
declare const ACL_MANAGER = "0xc2aaCf6553D20d1e9d78E365AAba8032af9c85b0";
declare const ACL_ADMIN = "0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A";
declare const COLLECTOR = "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c";
declare const DEFAULT_INCENTIVES_CONTROLLER = "0x8164Cc65827dcFe994AB23944CBC90e0aa80bFcb";
declare const DEFAULT_A_TOKEN_IMPL_REV_1 = "0x7EfFD7b47Bfd17e52fB7559d3f924201b9DbfF3d";
declare const DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 = "0xaC725CB59D16C81061BDeA61041a8A5e73DA9EC6";
declare const DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 = "0x15C5620dfFaC7c7366EED66C20Ad222DDbB1eD57";
declare const EMISSION_MANAGER = "0x223d844fc4B006D67c0cDbd39371A9F73f69d974";
declare const CAPS_PLUS_RISK_STEWARD = "0x82dcCF206Ae2Ab46E2099e663F70DeE77caE7778";
declare const FREEZING_STEWARD = "0x2eE68ACb6A1319de1b49DC139894644E424fefD6";
declare const DEBT_SWAP_ADAPTER = "0x8761e0370f94f68Db8EaA731f4fC581f6AD0Bd68";
declare const DELEGATION_AWARE_A_TOKEN_IMPL_REV_1 = "0x21714092D90c7265F52fdfDae068EC11a23C6248";
declare const GHO_TOKEN = "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f";
declare const CONFIG_ENGINE = "0xA3e44d830440dF5098520F62Ebec285B1198c51E";
declare const POOL_ADDRESSES_PROVIDER_REGISTRY = "0xbaA999AC55EAce41CcAE355c77809e68Bb345170";
declare const RATES_FACTORY = "0xcC47c4Fe1F7f29ff31A8b62197023aC8553C7896";
declare const REPAY_WITH_COLLATERAL_ADAPTER = "0x02e7B8511831B1b02d9018215a0f8f500Ea5c6B3";
declare const STATIC_A_TOKEN_FACTORY = "0x411D79b8cC43384FDE66CaBf9b6a17180c842511";
declare const SWAP_COLLATERAL_ADAPTER = "0xADC0A53095A0af87F3aa29FE0715B5c28016364e";
declare const UI_GHO_DATA_PROVIDER = "0x379c1EDD1A41218bdbFf960a9d5AD2818Bf61aE8";
declare const UI_INCENTIVE_DATA_PROVIDER = "0x162A7AC02f547ad796CA549f757e2b8d1D9b10a6";
declare const UI_POOL_DATA_PROVIDER = "0x91c0eA31b49B69Ea18607702c5d9aC360bf3dE7d";
declare const WALLET_BALANCE_PROVIDER = "0xC7be5307ba715ce89b152f3Df0658295b3dbA8E2";
declare const WETH_GATEWAY = "0xD322A49006FC828F9B5B37Ab215F99B4E5caB19C";
declare const WITHDRAW_SWAP_ADAPTER = "0x78F8Bd884C3D738B74B420540659c82f392820e0";
declare const SAVINGS_DAI_TOKEN_WRAPPER = "0xE28E2c8d240dd5eBd0adcab86fbD79df7a052034";
declare const CHAIN_ID = 1;
declare const ASSETS: {
    readonly WETH: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
        readonly A_TOKEN: "0x4d5F47FA6A74757f35C14fD3a6Ef8E3C9BC514E8";
        readonly S_TOKEN: "0x102633152313C81cD80419b6EcF66d14Ad68949A";
        readonly V_TOKEN: "0xeA51d7853EEFb32b6ee06b1C12E6dcCA88Be0fFE";
        readonly INTEREST_RATE_STRATEGY: "0xA901Bf68Bebde17ba382e499C3e9EbAe649DF276";
        readonly ORACLE: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly wstETH: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0";
        readonly A_TOKEN: "0x0B925eD163218f6662a35e0f0371Ac234f9E9371";
        readonly S_TOKEN: "0x39739943199c0fBFe9E5f1B5B160cd73a64CB85D";
        readonly V_TOKEN: "0xC96113eED8cAB59cD8A66813bCB0cEb29F06D2e4";
        readonly INTEREST_RATE_STRATEGY: "0x7b8Fa4540246554e77FCFf140f9114de00F8bB8D";
        readonly ORACLE: "0x8B6851156023f4f5A66F68BEA80851c3D905Ac93";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly WBTC: {
        readonly decimals: 8;
        readonly UNDERLYING: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
        readonly A_TOKEN: "0x5Ee5bf7ae06D1Be5997A1A72006FE6C607eC6DE8";
        readonly S_TOKEN: "0xA1773F1ccF6DB192Ad8FE826D15fe1d328B03284";
        readonly V_TOKEN: "0x40aAbEf1aa8f0eEc637E0E7d92fbfFB2F26A8b7B";
        readonly INTEREST_RATE_STRATEGY: "0x07Fa3744FeC271F80c2EA97679823F65c13CCDf4";
        readonly ORACLE: "0x230E0321Cf38F09e247e50Afc7801EA2351fe56F";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly USDC: {
        readonly decimals: 6;
        readonly UNDERLYING: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
        readonly A_TOKEN: "0x98C23E9d8f34FEFb1B7BD6a91B7FF122F4e16F5c";
        readonly S_TOKEN: "0xB0fe3D292f4bd50De902Ba5bDF120Ad66E9d7a39";
        readonly V_TOKEN: "0x72E95b8931767C79bA4EeE721354d6E99a61D004";
        readonly INTEREST_RATE_STRATEGY: "0x53b13a6D43F647D788411Abfd28D229C274AfBF9";
        readonly ORACLE: "0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly DAI: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x6B175474E89094C44Da98b954EedeAC495271d0F";
        readonly A_TOKEN: "0x018008bfb33d285247A21d44E50697654f754e63";
        readonly S_TOKEN: "0x413AdaC9E2Ef8683ADf5DDAEce8f19613d60D1bb";
        readonly V_TOKEN: "0xcF8d0c70c850859266f5C338b38F9D663181C314";
        readonly INTEREST_RATE_STRATEGY: "0x9a158802cD924747EF336cA3F9DE3bdb60Cf43D3";
        readonly ORACLE: "0xAed0c38402a5d19df6E4c03F4E2DceD6e29c1ee9";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly LINK: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x514910771AF9Ca656af840dff83E8264EcF986CA";
        readonly A_TOKEN: "0x5E8C8A7243651DB1384C0dDfDbE39761E8e7E51a";
        readonly S_TOKEN: "0x63B1129ca97D2b9F97f45670787Ac12a9dF1110a";
        readonly V_TOKEN: "0x4228F8895C7dDA20227F6a5c6751b8Ebf19a6ba8";
        readonly INTEREST_RATE_STRATEGY: "0x24701A6368Ff6D2874d6b8cDadd461552B8A5283";
        readonly ORACLE: "0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly AAVE: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9";
        readonly A_TOKEN: "0xA700b4eB416Be35b2911fd5Dee80678ff64fF6C9";
        readonly S_TOKEN: "0x268497bF083388B1504270d0E717222d3A87D6F2";
        readonly V_TOKEN: "0xBae535520Abd9f8C85E58929e0006A2c8B372F74";
        readonly INTEREST_RATE_STRATEGY: "0x24701A6368Ff6D2874d6b8cDadd461552B8A5283";
        readonly ORACLE: "0x547a514d5e3769680Ce22B2361c10Ea13619e8a9";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly cbETH: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xBe9895146f7AF43049ca1c1AE358B0541Ea49704";
        readonly A_TOKEN: "0x977b6fc5dE62598B08C85AC8Cf2b745874E8b78c";
        readonly S_TOKEN: "0x82bE6012cea6D147B968eBAea5ceEcF6A5b4F493";
        readonly V_TOKEN: "0x0c91bcA95b5FE69164cE583A2ec9429A569798Ed";
        readonly INTEREST_RATE_STRATEGY: "0x24701A6368Ff6D2874d6b8cDadd461552B8A5283";
        readonly ORACLE: "0x5f4d15d761528c57a5C30c43c1DAb26Fc5452731";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly USDT: {
        readonly decimals: 6;
        readonly UNDERLYING: "0xdAC17F958D2ee523a2206206994597C13D831ec7";
        readonly A_TOKEN: "0x23878914EFE38d27C4D67Ab83ed1b93A74D4086a";
        readonly S_TOKEN: "0x822Fa72Df1F229C3900f5AD6C3Fa2C424D691622";
        readonly V_TOKEN: "0x6df1C1E379bC5a00a7b4C6e67A203333772f45A8";
        readonly INTEREST_RATE_STRATEGY: "0x588b62C84533232E3A881e096E5D639Fa754F093";
        readonly ORACLE: "0x3E7d1eAB13ad0104d2750B8863b489D65364e32D";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly rETH: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xae78736Cd615f374D3085123A210448E74Fc6393";
        readonly A_TOKEN: "0xCc9EE9483f662091a1de4795249E24aC0aC2630f";
        readonly S_TOKEN: "0x1d1906f909CAe494c7441604DAfDDDbD0485A925";
        readonly V_TOKEN: "0xae8593DD575FE29A9745056aA91C4b746eee62C8";
        readonly INTEREST_RATE_STRATEGY: "0x24701A6368Ff6D2874d6b8cDadd461552B8A5283";
        readonly ORACLE: "0x05225Cd708bCa9253789C1374e4337a019e99D56";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly LUSD: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0";
        readonly A_TOKEN: "0x3Fe6a295459FAe07DF8A0ceCC36F37160FE86AA9";
        readonly S_TOKEN: "0x37A6B708FDB1483C231961b9a7F145261E815fc3";
        readonly V_TOKEN: "0x33652e48e4B74D18520f11BfE58Edd2ED2cEc5A2";
        readonly INTEREST_RATE_STRATEGY: "0xaDbdb3d6B51151e4CDF32e4050B6F03D2bfB6477";
        readonly ORACLE: "0x3D7aE7E594f2f2091Ad8798313450130d0Aba3a0";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly CRV: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xD533a949740bb3306d119CC777fa900bA034cd52";
        readonly A_TOKEN: "0x7B95Ec873268a6BFC6427e7a28e396Db9D0ebc65";
        readonly S_TOKEN: "0x90D9CD005E553111EB8C9c31Abe9706a186b6048";
        readonly V_TOKEN: "0x1b7D3F4b3c032a5AE656e30eeA4e8E1Ba376068F";
        readonly INTEREST_RATE_STRATEGY: "0x76884cAFeCf1f7d4146DA6C4053B18B76bf6ED14";
        readonly ORACLE: "0xCd627aA160A6fA45Eb793D19Ef54f5062F20f33f";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly MKR: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2";
        readonly A_TOKEN: "0x8A458A9dc9048e005d22849F470891b840296619";
        readonly S_TOKEN: "0x0496372BE7e426D28E89DEBF01f19F014d5938bE";
        readonly V_TOKEN: "0x6Efc73E54E41b27d2134fF9f98F15550f30DF9B1";
        readonly INTEREST_RATE_STRATEGY: "0x27eFE5db315b71753b2a38ED3d5dd7E9362ba93F";
        readonly ORACLE: "0xec1D1B3b0443256cc3860e24a46F108e699484Aa";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly SNX: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F";
        readonly A_TOKEN: "0xC7B4c17861357B8ABB91F25581E7263E08DCB59c";
        readonly S_TOKEN: "0x478E1ec1A2BeEd94c1407c951E4B9e22d53b2501";
        readonly V_TOKEN: "0x8d0de040e8aAd872eC3c33A3776dE9152D3c34ca";
        readonly INTEREST_RATE_STRATEGY: "0xA6459195d60A797D278f58Ffbd2BA62Fb3F7FA1E";
        readonly ORACLE: "0xDC3EA94CD0AC27d9A86C180091e7f78C683d3699";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly BAL: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xba100000625a3754423978a60c9317c58a424e3D";
        readonly A_TOKEN: "0x2516E7B3F76294e03C42AA4c5b5b4DCE9C436fB8";
        readonly S_TOKEN: "0xB368d45aaAa07ee2c6275Cb320D140b22dE43CDD";
        readonly V_TOKEN: "0x3D3efceb4Ff0966D34d9545D3A2fa2dcdBf451f2";
        readonly INTEREST_RATE_STRATEGY: "0xd9d85499449f26d2A2c240defd75314f23920089";
        readonly ORACLE: "0xdF2917806E30300537aEB49A7663062F4d1F2b5F";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly UNI: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
        readonly A_TOKEN: "0xF6D2224916DDFbbab6e6bd0D1B7034f4Ae0CaB18";
        readonly S_TOKEN: "0x2FEc76324A0463c46f32e74A86D1cf94C02158DC";
        readonly V_TOKEN: "0xF64178Ebd2E2719F2B1233bCb5Ef6DB4bCc4d09a";
        readonly INTEREST_RATE_STRATEGY: "0x27eFE5db315b71753b2a38ED3d5dd7E9362ba93F";
        readonly ORACLE: "0x553303d460EE0afB37EdFf9bE42922D8FF63220e";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly LDO: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32";
        readonly A_TOKEN: "0x9A44fd41566876A39655f74971a3A6eA0a17a454";
        readonly S_TOKEN: "0xa0a5bF5781Aeb548db9d4226363B9e89287C5FD2";
        readonly V_TOKEN: "0xc30808705C01289A3D306ca9CAB081Ba9114eC82";
        readonly INTEREST_RATE_STRATEGY: "0x27eFE5db315b71753b2a38ED3d5dd7E9362ba93F";
        readonly ORACLE: "0xb01e6C9af83879B8e06a092f0DD94309c0D497E4";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly ENS: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72";
        readonly A_TOKEN: "0x545bD6c032eFdde65A377A6719DEF2796C8E0f2e";
        readonly S_TOKEN: "0x7617d02E311CdE347A0cb45BB7DF2926BBaf5347";
        readonly V_TOKEN: "0xd180D7fdD4092f07428eFE801E17BC03576b3192";
        readonly INTEREST_RATE_STRATEGY: "0xf6733B9842883BFE0e0a940eA2F572676af31bde";
        readonly ORACLE: "0x5C00128d4d1c2F4f652C267d7bcdD7aC99C16E16";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly ONE_INCH: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x111111111117dC0aa78b770fA6A738034120C302";
        readonly A_TOKEN: "0x71Aef7b30728b9BB371578f36c5A1f1502a5723e";
        readonly S_TOKEN: "0x4b62bFAff61AB3985798e5202D2d167F567D0BCD";
        readonly V_TOKEN: "0xA38fCa8c6Bf9BdA52E76EB78f08CaA3BE7c5A970";
        readonly INTEREST_RATE_STRATEGY: "0xf6733B9842883BFE0e0a940eA2F572676af31bde";
        readonly ORACLE: "0xc929ad75B72593967DE83E7F7Cda0493458261D9";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly FRAX: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x853d955aCEf822Db058eb8505911ED77F175b99e";
        readonly A_TOKEN: "0xd4e245848d6E1220DBE62e155d89fa327E43CB06";
        readonly S_TOKEN: "0x219640546c0DFDDCb9ab3bcdA89B324e0a376367";
        readonly V_TOKEN: "0x88B8358F5BC87c2D7E116cCA5b65A9eEb2c5EA3F";
        readonly INTEREST_RATE_STRATEGY: "0x9a158802cD924747EF336cA3F9DE3bdb60Cf43D3";
        readonly ORACLE: "0xB9E1E3A9feFf48998E45Fa90847ed4D467E8BcfD";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly GHO: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f";
        readonly A_TOKEN: "0x00907f9921424583e7ffBfEdf84F92B7B2Be4977";
        readonly S_TOKEN: "0x3f3DF7266dA30102344A813F1a3D07f5F041B5AC";
        readonly V_TOKEN: "0x786dBff3f1292ae8F92ea68Cf93c30b34B1ed04B";
        readonly INTEREST_RATE_STRATEGY: "0x00524e8E4C5FD2b8D8aa1226fA16b39Cad69B8A0";
        readonly ORACLE: "0xD110cac5d8682A3b045D5524a9903E031d70FCCd";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly RPL: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xD33526068D116cE69F19A9ee46F0bd304F21A51f";
        readonly A_TOKEN: "0xB76CF92076adBF1D9C39294FA8e7A67579FDe357";
        readonly S_TOKEN: "0x41e330fd8F7eA31E2e8F02cC0C9392D1403597B4";
        readonly V_TOKEN: "0x8988ECA19D502fd8b9CCd03fA3bD20a6f599bc2A";
        readonly INTEREST_RATE_STRATEGY: "0xD87974E8ED49AB16d5053ba793F4e17078Be0426";
        readonly ORACLE: "0x4E155eD98aFE9034b7A5962f6C84c86d869daA9d";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly sDAI: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x83F20F44975D03b1b09e64809B757c47f942BEeA";
        readonly A_TOKEN: "0x4C612E3B15b96Ff9A6faED838F8d07d479a8dD4c";
        readonly S_TOKEN: "0x48Bc45f084988bC01933EA93EeFfEBC0416534f6";
        readonly V_TOKEN: "0x8Db9D35e117d8b93C6Ca9b644b25BaD5d9908141";
        readonly INTEREST_RATE_STRATEGY: "0xdef8F50155A6cf21181E29E400E8CffAE2d50968";
        readonly ORACLE: "0x29081f7aB5a644716EfcDC10D5c926c5fEe9F72B";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly STG: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6";
        readonly A_TOKEN: "0x1bA9843bD4327c6c77011406dE5fA8749F7E3479";
        readonly S_TOKEN: "0xc3115D0660b93AeF10F298886ae22E3Dd477E482";
        readonly V_TOKEN: "0x655568bDd6168325EC7e58Bf39b21A856F906Dc2";
        readonly INTEREST_RATE_STRATEGY: "0x27eFE5db315b71753b2a38ED3d5dd7E9362ba93F";
        readonly ORACLE: "0x7A9f34a0Aa917D438e9b6E630067062B7F8f6f3d";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly KNC: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202";
        readonly A_TOKEN: "0x5b502e3796385E1e9755d7043B9C945C3aCCeC9C";
        readonly S_TOKEN: "0xdfEE0C9eA1309cB9611F33972E72a72166fcF548";
        readonly V_TOKEN: "0x253127Ffc04981cEA8932F406710661c2f2c3fD2";
        readonly INTEREST_RATE_STRATEGY: "0xf6733B9842883BFE0e0a940eA2F572676af31bde";
        readonly ORACLE: "0xf8fF43E991A81e6eC886a3D281A2C6cC19aE70Fc";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly FXS: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0";
        readonly A_TOKEN: "0x82F9c5ad306BBa1AD0De49bB5FA6F01bf61085ef";
        readonly S_TOKEN: "0x61dFd349140C239d3B61fEe203Efc811b518a317";
        readonly V_TOKEN: "0x68e9f0aD4e6f8F5DB70F6923d4d6d5b225B83b16";
        readonly INTEREST_RATE_STRATEGY: "0xf6733B9842883BFE0e0a940eA2F572676af31bde";
        readonly ORACLE: "0x6Ebc52C8C1089be9eB3945C4350B68B8E4C2233f";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
    readonly crvUSD: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E";
        readonly A_TOKEN: "0xb82fa9f31612989525992FCfBB09AB22Eff5c85A";
        readonly S_TOKEN: "0xb55C604075D79486b8A329c396Fc711Be54B5330";
        readonly V_TOKEN: "0x028f7886F3e937f8479efaD64f31B3fE1119857a";
        readonly INTEREST_RATE_STRATEGY: "0x44CaDF6E49895640D9De85ac01d97D44429Ad0A4";
        readonly ORACLE: "0xEEf0C605546958c1f899b6fB336C20671f9cD49F";
        readonly STATA_TOKEN: "0x0000000000000000000000000000000000000000";
    };
};
declare const E_MODES: {
    readonly NONE: 0;
    readonly ETH_CORRELATED: 1;
};

declare const AaveV3Ethereum_AAVE_PROTOCOL_DATA_PROVIDER: typeof AAVE_PROTOCOL_DATA_PROVIDER;
declare const AaveV3Ethereum_ACL_ADMIN: typeof ACL_ADMIN;
declare const AaveV3Ethereum_ACL_MANAGER: typeof ACL_MANAGER;
declare const AaveV3Ethereum_ASSETS: typeof ASSETS;
declare const AaveV3Ethereum_CAPS_PLUS_RISK_STEWARD: typeof CAPS_PLUS_RISK_STEWARD;
declare const AaveV3Ethereum_CHAIN_ID: typeof CHAIN_ID;
declare const AaveV3Ethereum_COLLECTOR: typeof COLLECTOR;
declare const AaveV3Ethereum_CONFIG_ENGINE: typeof CONFIG_ENGINE;
declare const AaveV3Ethereum_DEBT_SWAP_ADAPTER: typeof DEBT_SWAP_ADAPTER;
declare const AaveV3Ethereum_DEFAULT_A_TOKEN_IMPL_REV_1: typeof DEFAULT_A_TOKEN_IMPL_REV_1;
declare const AaveV3Ethereum_DEFAULT_INCENTIVES_CONTROLLER: typeof DEFAULT_INCENTIVES_CONTROLLER;
declare const AaveV3Ethereum_DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1: typeof DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1;
declare const AaveV3Ethereum_DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1: typeof DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1;
declare const AaveV3Ethereum_DELEGATION_AWARE_A_TOKEN_IMPL_REV_1: typeof DELEGATION_AWARE_A_TOKEN_IMPL_REV_1;
declare const AaveV3Ethereum_EMISSION_MANAGER: typeof EMISSION_MANAGER;
declare const AaveV3Ethereum_E_MODES: typeof E_MODES;
declare const AaveV3Ethereum_FREEZING_STEWARD: typeof FREEZING_STEWARD;
declare const AaveV3Ethereum_GHO_TOKEN: typeof GHO_TOKEN;
declare const AaveV3Ethereum_ORACLE: typeof ORACLE;
declare const AaveV3Ethereum_POOL: typeof POOL;
declare const AaveV3Ethereum_POOL_ADDRESSES_PROVIDER: typeof POOL_ADDRESSES_PROVIDER;
declare const AaveV3Ethereum_POOL_ADDRESSES_PROVIDER_REGISTRY: typeof POOL_ADDRESSES_PROVIDER_REGISTRY;
declare const AaveV3Ethereum_POOL_CONFIGURATOR: typeof POOL_CONFIGURATOR;
declare const AaveV3Ethereum_PRICE_ORACLE_SENTINEL: typeof PRICE_ORACLE_SENTINEL;
declare const AaveV3Ethereum_RATES_FACTORY: typeof RATES_FACTORY;
declare const AaveV3Ethereum_REPAY_WITH_COLLATERAL_ADAPTER: typeof REPAY_WITH_COLLATERAL_ADAPTER;
declare const AaveV3Ethereum_SAVINGS_DAI_TOKEN_WRAPPER: typeof SAVINGS_DAI_TOKEN_WRAPPER;
declare const AaveV3Ethereum_STATIC_A_TOKEN_FACTORY: typeof STATIC_A_TOKEN_FACTORY;
declare const AaveV3Ethereum_SWAP_COLLATERAL_ADAPTER: typeof SWAP_COLLATERAL_ADAPTER;
declare const AaveV3Ethereum_UI_GHO_DATA_PROVIDER: typeof UI_GHO_DATA_PROVIDER;
declare const AaveV3Ethereum_UI_INCENTIVE_DATA_PROVIDER: typeof UI_INCENTIVE_DATA_PROVIDER;
declare const AaveV3Ethereum_UI_POOL_DATA_PROVIDER: typeof UI_POOL_DATA_PROVIDER;
declare const AaveV3Ethereum_WALLET_BALANCE_PROVIDER: typeof WALLET_BALANCE_PROVIDER;
declare const AaveV3Ethereum_WETH_GATEWAY: typeof WETH_GATEWAY;
declare const AaveV3Ethereum_WITHDRAW_SWAP_ADAPTER: typeof WITHDRAW_SWAP_ADAPTER;
declare namespace AaveV3Ethereum {
  export { AaveV3Ethereum_AAVE_PROTOCOL_DATA_PROVIDER as AAVE_PROTOCOL_DATA_PROVIDER, AaveV3Ethereum_ACL_ADMIN as ACL_ADMIN, AaveV3Ethereum_ACL_MANAGER as ACL_MANAGER, AaveV3Ethereum_ASSETS as ASSETS, AaveV3Ethereum_CAPS_PLUS_RISK_STEWARD as CAPS_PLUS_RISK_STEWARD, AaveV3Ethereum_CHAIN_ID as CHAIN_ID, AaveV3Ethereum_COLLECTOR as COLLECTOR, AaveV3Ethereum_CONFIG_ENGINE as CONFIG_ENGINE, AaveV3Ethereum_DEBT_SWAP_ADAPTER as DEBT_SWAP_ADAPTER, AaveV3Ethereum_DEFAULT_A_TOKEN_IMPL_REV_1 as DEFAULT_A_TOKEN_IMPL_REV_1, AaveV3Ethereum_DEFAULT_INCENTIVES_CONTROLLER as DEFAULT_INCENTIVES_CONTROLLER, AaveV3Ethereum_DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 as DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1, AaveV3Ethereum_DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 as DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1, AaveV3Ethereum_DELEGATION_AWARE_A_TOKEN_IMPL_REV_1 as DELEGATION_AWARE_A_TOKEN_IMPL_REV_1, AaveV3Ethereum_EMISSION_MANAGER as EMISSION_MANAGER, AaveV3Ethereum_E_MODES as E_MODES, AaveV3Ethereum_FREEZING_STEWARD as FREEZING_STEWARD, AaveV3Ethereum_GHO_TOKEN as GHO_TOKEN, AaveV3Ethereum_ORACLE as ORACLE, AaveV3Ethereum_POOL as POOL, AaveV3Ethereum_POOL_ADDRESSES_PROVIDER as POOL_ADDRESSES_PROVIDER, AaveV3Ethereum_POOL_ADDRESSES_PROVIDER_REGISTRY as POOL_ADDRESSES_PROVIDER_REGISTRY, AaveV3Ethereum_POOL_CONFIGURATOR as POOL_CONFIGURATOR, AaveV3Ethereum_PRICE_ORACLE_SENTINEL as PRICE_ORACLE_SENTINEL, AaveV3Ethereum_RATES_FACTORY as RATES_FACTORY, AaveV3Ethereum_REPAY_WITH_COLLATERAL_ADAPTER as REPAY_WITH_COLLATERAL_ADAPTER, AaveV3Ethereum_SAVINGS_DAI_TOKEN_WRAPPER as SAVINGS_DAI_TOKEN_WRAPPER, AaveV3Ethereum_STATIC_A_TOKEN_FACTORY as STATIC_A_TOKEN_FACTORY, AaveV3Ethereum_SWAP_COLLATERAL_ADAPTER as SWAP_COLLATERAL_ADAPTER, AaveV3Ethereum_UI_GHO_DATA_PROVIDER as UI_GHO_DATA_PROVIDER, AaveV3Ethereum_UI_INCENTIVE_DATA_PROVIDER as UI_INCENTIVE_DATA_PROVIDER, AaveV3Ethereum_UI_POOL_DATA_PROVIDER as UI_POOL_DATA_PROVIDER, AaveV3Ethereum_WALLET_BALANCE_PROVIDER as WALLET_BALANCE_PROVIDER, AaveV3Ethereum_WETH_GATEWAY as WETH_GATEWAY, AaveV3Ethereum_WITHDRAW_SWAP_ADAPTER as WITHDRAW_SWAP_ADAPTER };
}

export { AaveV3Ethereum as A, COLLECTOR as C, DEFAULT_INCENTIVES_CONTROLLER as D, EMISSION_MANAGER as E, FREEZING_STEWARD as F, GHO_TOKEN as G, ORACLE as O, POOL_ADDRESSES_PROVIDER as P, RATES_FACTORY as R, STATIC_A_TOKEN_FACTORY as S, UI_GHO_DATA_PROVIDER as U, WALLET_BALANCE_PROVIDER as W, POOL as a, POOL_CONFIGURATOR as b, PRICE_ORACLE_SENTINEL as c, AAVE_PROTOCOL_DATA_PROVIDER as d, ACL_MANAGER as e, ACL_ADMIN as f, DEFAULT_A_TOKEN_IMPL_REV_1 as g, DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 as h, DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 as i, CAPS_PLUS_RISK_STEWARD as j, DEBT_SWAP_ADAPTER as k, DELEGATION_AWARE_A_TOKEN_IMPL_REV_1 as l, CONFIG_ENGINE as m, POOL_ADDRESSES_PROVIDER_REGISTRY as n, REPAY_WITH_COLLATERAL_ADAPTER as o, SWAP_COLLATERAL_ADAPTER as p, UI_INCENTIVE_DATA_PROVIDER as q, UI_POOL_DATA_PROVIDER as r, WETH_GATEWAY as s, WITHDRAW_SWAP_ADAPTER as t, SAVINGS_DAI_TOKEN_WRAPPER as u, CHAIN_ID as v, ASSETS as w, E_MODES as x };