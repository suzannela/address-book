// AUTOGENERATED - MANUALLY CHANGES WILL BE REVERTED BY THE GENERATOR
export const IMetaDelegateHelper_ABI = [
  {
    inputs: [
      {
        internalType: 'struct IMetaDelegateHelper.MetaDelegateParams[]',
        name: 'delegateParams',
        type: 'tuple[]',
        components: [
          {
            internalType: 'contract IGovernancePowerDelegationToken',
            name: 'underlyingAsset',
            type: 'address',
            components: [],
          },
          {
            internalType: 'enum IMetaDelegateHelper.DelegationType',
            name: 'delegationType',
            type: 'uint8',
            components: [],
          },
          {
            internalType: 'address',
            name: 'delegator',
            type: 'address',
            components: [],
          },
          {
            internalType: 'address',
            name: 'delegatee',
            type: 'address',
            components: [],
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
            components: [],
          },
          {
            internalType: 'uint8',
            name: 'v',
            type: 'uint8',
            components: [],
          },
          {
            internalType: 'bytes32',
            name: 'r',
            type: 'bytes32',
            components: [],
          },
          {
            internalType: 'bytes32',
            name: 's',
            type: 'bytes32',
            components: [],
          },
        ],
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'batchMetaDelegate',
    outputs: [],
  },
] as const;
