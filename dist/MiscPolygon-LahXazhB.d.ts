declare const AAVE_POL_ETH_BRIDGE = "0x1C2BA5b8ab8e795fF44387ba6d251fa65AD20b36";
declare const PARASWAP_FEE_CLAIMER = "0x9abf798f5314BFd793A9E57A654BEd35af4A1D60";
declare const TRANSPARENT_PROXY_FACTORY = "0xB4e496f70602fE2AC6Ae511D028BA4D194773B29";
declare const PROXY_ADMIN = "0xD3cF979e676265e4f6379749DECe4708B9A22476";
declare const CREATE_3_FACTORY = "0x3b56998Ec06477704622ca8e2eA1b4db134cec32";
declare const PROTOCOL_GUARDIAN = "0x1450F2898D6bA2710C98BE9CAF3041330eD5ae58";
declare const AAVE_MERKLE_DISTRIBUTOR = "0x7A9ff54A6eE4a21223036890bB8c4ea2D62c686b";

declare const MiscPolygon_AAVE_MERKLE_DISTRIBUTOR: typeof AAVE_MERKLE_DISTRIBUTOR;
declare const MiscPolygon_AAVE_POL_ETH_BRIDGE: typeof AAVE_POL_ETH_BRIDGE;
declare const MiscPolygon_CREATE_3_FACTORY: typeof CREATE_3_FACTORY;
declare const MiscPolygon_PARASWAP_FEE_CLAIMER: typeof PARASWAP_FEE_CLAIMER;
declare const MiscPolygon_PROTOCOL_GUARDIAN: typeof PROTOCOL_GUARDIAN;
declare const MiscPolygon_PROXY_ADMIN: typeof PROXY_ADMIN;
declare const MiscPolygon_TRANSPARENT_PROXY_FACTORY: typeof TRANSPARENT_PROXY_FACTORY;
declare namespace MiscPolygon {
  export { MiscPolygon_AAVE_MERKLE_DISTRIBUTOR as AAVE_MERKLE_DISTRIBUTOR, MiscPolygon_AAVE_POL_ETH_BRIDGE as AAVE_POL_ETH_BRIDGE, MiscPolygon_CREATE_3_FACTORY as CREATE_3_FACTORY, MiscPolygon_PARASWAP_FEE_CLAIMER as PARASWAP_FEE_CLAIMER, MiscPolygon_PROTOCOL_GUARDIAN as PROTOCOL_GUARDIAN, MiscPolygon_PROXY_ADMIN as PROXY_ADMIN, MiscPolygon_TRANSPARENT_PROXY_FACTORY as TRANSPARENT_PROXY_FACTORY };
}

export { AAVE_POL_ETH_BRIDGE as A, CREATE_3_FACTORY as C, MiscPolygon as M, PARASWAP_FEE_CLAIMER as P, TRANSPARENT_PROXY_FACTORY as T, PROXY_ADMIN as a, PROTOCOL_GUARDIAN as b, AAVE_MERKLE_DISTRIBUTOR as c };
