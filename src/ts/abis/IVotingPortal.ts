// AUTOGENERATED - MANUALLY CHANGES WILL BE REVERTED BY THE GENERATOR
export const IVotingPortal_ABI = [
  {
    type: 'function',
    name: 'CROSS_CHAIN_CONTROLLER',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'GOVERNANCE',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'VOTING_MACHINE',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'VOTING_MACHINE_CHAIN_ID',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'decodeMessage',
    inputs: [
      {
        name: 'message',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '',
        type: 'uint128',
        internalType: 'uint128',
      },
      {
        name: '',
        type: 'uint128',
        internalType: 'uint128',
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    name: 'forwardStartVotingMessage',
    inputs: [
      {
        name: 'proposalId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'blockHash',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'votingDuration',
        type: 'uint24',
        internalType: 'uint24',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'getStartVotingGasLimit',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint128',
        internalType: 'uint128',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'receiveCrossChainMessage',
    inputs: [
      {
        name: 'originSender',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'originChainId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'message',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setStartVotingGasLimit',
    inputs: [
      {
        name: 'gasLimit',
        type: 'uint128',
        internalType: 'uint128',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    name: 'StartVotingGasLimitUpdated',
    inputs: [
      {
        name: 'gasLimit',
        type: 'uint128',
        indexed: false,
        internalType: 'uint128',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'VoteMessageReceived',
    inputs: [
      {
        name: 'originSender',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'originChainId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'delivered',
        type: 'bool',
        indexed: true,
        internalType: 'bool',
      },
      {
        name: 'message',
        type: 'bytes',
        indexed: false,
        internalType: 'bytes',
      },
      {
        name: 'reason',
        type: 'bytes',
        indexed: false,
        internalType: 'bytes',
      },
    ],
    anonymous: false,
  },
] as const;
