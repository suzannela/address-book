declare const CROSS_CHAIN_CONTROLLER = "0x5488A48E5C22175548E8d68622211F5928cBbf23";
declare const VOTING_MACHINE = "0x79Edd77c76F95b6b69907CaD1d8241F9DB0e3FD0";
declare const PAYLOADS_CONTROLLER = "0xf1842f9D6C3D9ec1153d7afCBb9cDBC537Ea5d15";
declare const EXECUTOR_LVL_1 = "0xACd2b1bA0B85FaF0f45D4974Ba8ee538E157fBc6";
declare const EXECUTOR_LVL_2 = "0x0000000000000000000000000000000000000000";
declare const VOTING_STRATEGY = "0x8c55a1bf3DC7076522C5cd025f497A498eF90143";
declare const DATA_WAREHOUSE = "0xDB23939d4C483E748c2487916fB20d7fF7e39588";

declare const GovernanceV3Fuji_CROSS_CHAIN_CONTROLLER: typeof CROSS_CHAIN_CONTROLLER;
declare const GovernanceV3Fuji_DATA_WAREHOUSE: typeof DATA_WAREHOUSE;
declare const GovernanceV3Fuji_EXECUTOR_LVL_1: typeof EXECUTOR_LVL_1;
declare const GovernanceV3Fuji_EXECUTOR_LVL_2: typeof EXECUTOR_LVL_2;
declare const GovernanceV3Fuji_PAYLOADS_CONTROLLER: typeof PAYLOADS_CONTROLLER;
declare const GovernanceV3Fuji_VOTING_MACHINE: typeof VOTING_MACHINE;
declare const GovernanceV3Fuji_VOTING_STRATEGY: typeof VOTING_STRATEGY;
declare namespace GovernanceV3Fuji {
  export { GovernanceV3Fuji_CROSS_CHAIN_CONTROLLER as CROSS_CHAIN_CONTROLLER, GovernanceV3Fuji_DATA_WAREHOUSE as DATA_WAREHOUSE, GovernanceV3Fuji_EXECUTOR_LVL_1 as EXECUTOR_LVL_1, GovernanceV3Fuji_EXECUTOR_LVL_2 as EXECUTOR_LVL_2, GovernanceV3Fuji_PAYLOADS_CONTROLLER as PAYLOADS_CONTROLLER, GovernanceV3Fuji_VOTING_MACHINE as VOTING_MACHINE, GovernanceV3Fuji_VOTING_STRATEGY as VOTING_STRATEGY };
}

export { CROSS_CHAIN_CONTROLLER as C, DATA_WAREHOUSE as D, EXECUTOR_LVL_1 as E, GovernanceV3Fuji as G, PAYLOADS_CONTROLLER as P, VOTING_MACHINE as V, EXECUTOR_LVL_2 as a, VOTING_STRATEGY as b };
