"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/ts/abis/IAaveGovernanceV2.ts
var IAaveGovernanceV2_exports = {};
__export(IAaveGovernanceV2_exports, {
  IAaveGovernanceV2_ABI: () => IAaveGovernanceV2_ABI
});
module.exports = __toCommonJS(IAaveGovernanceV2_exports);
var IAaveGovernanceV2_ABI = [
  {
    type: "function",
    name: "__abdicate",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "authorizeExecutors",
    inputs: [
      {
        name: "executors",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "cancel",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "create",
    inputs: [
      {
        name: "executor",
        type: "address",
        internalType: "contract IExecutorWithTimelock"
      },
      {
        name: "targets",
        type: "address[]",
        internalType: "address[]"
      },
      {
        name: "values",
        type: "uint256[]",
        internalType: "uint256[]"
      },
      {
        name: "signatures",
        type: "string[]",
        internalType: "string[]"
      },
      {
        name: "calldatas",
        type: "bytes[]",
        internalType: "bytes[]"
      },
      {
        name: "withDelegatecalls",
        type: "bool[]",
        internalType: "bool[]"
      },
      {
        name: "ipfsHash",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "execute",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "getGovernanceStrategy",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getGuardian",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getProposalById",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IAaveGovernanceV2.ProposalWithoutVotes",
        components: [
          {
            name: "id",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "creator",
            type: "address",
            internalType: "address"
          },
          {
            name: "executor",
            type: "address",
            internalType: "contract IExecutorWithTimelock"
          },
          {
            name: "targets",
            type: "address[]",
            internalType: "address[]"
          },
          {
            name: "values",
            type: "uint256[]",
            internalType: "uint256[]"
          },
          {
            name: "signatures",
            type: "string[]",
            internalType: "string[]"
          },
          {
            name: "calldatas",
            type: "bytes[]",
            internalType: "bytes[]"
          },
          {
            name: "withDelegatecalls",
            type: "bool[]",
            internalType: "bool[]"
          },
          {
            name: "startBlock",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "endBlock",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "executionTime",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "forVotes",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "againstVotes",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "executed",
            type: "bool",
            internalType: "bool"
          },
          {
            name: "canceled",
            type: "bool",
            internalType: "bool"
          },
          {
            name: "strategy",
            type: "address",
            internalType: "address"
          },
          {
            name: "ipfsHash",
            type: "bytes32",
            internalType: "bytes32"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getProposalState",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "enum IAaveGovernanceV2.ProposalState"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getProposalsCount",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getVoteOnProposal",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "voter",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IAaveGovernanceV2.Vote",
        components: [
          {
            name: "support",
            type: "bool",
            internalType: "bool"
          },
          {
            name: "votingPower",
            type: "uint248",
            internalType: "uint248"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getVotingDelay",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "isExecutorAuthorized",
    inputs: [
      {
        name: "executor",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "queue",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setGovernanceStrategy",
    inputs: [
      {
        name: "governanceStrategy",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setVotingDelay",
    inputs: [
      {
        name: "votingDelay",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "submitVote",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "support",
        type: "bool",
        internalType: "bool"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "submitVoteBySignature",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "support",
        type: "bool",
        internalType: "bool"
      },
      {
        name: "v",
        type: "uint8",
        internalType: "uint8"
      },
      {
        name: "r",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "unauthorizeExecutors",
    inputs: [
      {
        name: "executors",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "ExecutorAuthorized",
    inputs: [
      {
        name: "executor",
        type: "address",
        indexed: false,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ExecutorUnauthorized",
    inputs: [
      {
        name: "executor",
        type: "address",
        indexed: false,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "GovernanceStrategyChanged",
    inputs: [
      {
        name: "newStrategy",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "initiatorChange",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalCanceled",
    inputs: [
      {
        name: "id",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalCreated",
    inputs: [
      {
        name: "id",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "creator",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "executor",
        type: "address",
        indexed: true,
        internalType: "contract IExecutorWithTimelock"
      },
      {
        name: "targets",
        type: "address[]",
        indexed: false,
        internalType: "address[]"
      },
      {
        name: "values",
        type: "uint256[]",
        indexed: false,
        internalType: "uint256[]"
      },
      {
        name: "signatures",
        type: "string[]",
        indexed: false,
        internalType: "string[]"
      },
      {
        name: "calldatas",
        type: "bytes[]",
        indexed: false,
        internalType: "bytes[]"
      },
      {
        name: "withDelegatecalls",
        type: "bool[]",
        indexed: false,
        internalType: "bool[]"
      },
      {
        name: "startBlock",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "endBlock",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "strategy",
        type: "address",
        indexed: false,
        internalType: "address"
      },
      {
        name: "ipfsHash",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalExecuted",
    inputs: [
      {
        name: "id",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "initiatorExecution",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalQueued",
    inputs: [
      {
        name: "id",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "executionTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "initiatorQueueing",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "VoteEmitted",
    inputs: [
      {
        name: "id",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "voter",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "support",
        type: "bool",
        indexed: false,
        internalType: "bool"
      },
      {
        name: "votingPower",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "VotingDelayChanged",
    inputs: [
      {
        name: "newVotingDelay",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "initiatorChange",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IAaveGovernanceV2_ABI
});
//# sourceMappingURL=IAaveGovernanceV2.js.map