declare const PARASWAP_FEE_CLAIMER = "0x9abf798f5314BFd793A9E57A654BEd35af4A1D60";
declare const TRANSPARENT_PROXY_FACTORY = "0xB4e496f70602fE2AC6Ae511D028BA4D194773B29";
declare const PROXY_ADMIN = "0xD3cF979e676265e4f6379749DECe4708B9A22476";
declare const CREATE_3_FACTORY = "0x3b56998Ec06477704622ca8e2eA1b4db134cec32";
declare const PROTOCOL_GUARDIAN = "0xE50c8C619d05ff98b22Adf991F17602C774F785c";
declare const AAVE_MERKLE_DISTRIBUTOR = "0x1685D81212580DD4cDA287616C2f6F4794927e18";

declare const MiscOptimism_AAVE_MERKLE_DISTRIBUTOR: typeof AAVE_MERKLE_DISTRIBUTOR;
declare const MiscOptimism_CREATE_3_FACTORY: typeof CREATE_3_FACTORY;
declare const MiscOptimism_PARASWAP_FEE_CLAIMER: typeof PARASWAP_FEE_CLAIMER;
declare const MiscOptimism_PROTOCOL_GUARDIAN: typeof PROTOCOL_GUARDIAN;
declare const MiscOptimism_PROXY_ADMIN: typeof PROXY_ADMIN;
declare const MiscOptimism_TRANSPARENT_PROXY_FACTORY: typeof TRANSPARENT_PROXY_FACTORY;
declare namespace MiscOptimism {
  export { MiscOptimism_AAVE_MERKLE_DISTRIBUTOR as AAVE_MERKLE_DISTRIBUTOR, MiscOptimism_CREATE_3_FACTORY as CREATE_3_FACTORY, MiscOptimism_PARASWAP_FEE_CLAIMER as PARASWAP_FEE_CLAIMER, MiscOptimism_PROTOCOL_GUARDIAN as PROTOCOL_GUARDIAN, MiscOptimism_PROXY_ADMIN as PROXY_ADMIN, MiscOptimism_TRANSPARENT_PROXY_FACTORY as TRANSPARENT_PROXY_FACTORY };
}

export { AAVE_MERKLE_DISTRIBUTOR as A, CREATE_3_FACTORY as C, MiscOptimism as M, PARASWAP_FEE_CLAIMER as P, TRANSPARENT_PROXY_FACTORY as T, PROXY_ADMIN as a, PROTOCOL_GUARDIAN as b };
