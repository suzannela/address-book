// src/ts/abis/IPayloadsControllerDataHelper.ts
var IPayloadsControllerDataHelper_ABI = [
  {
    inputs: [
      {
        internalType: "contract IPayloadsController",
        name: "payloadsController",
        type: "address",
        components: []
      },
      {
        internalType: "enum PayloadsControllerUtils.AccessControl[]",
        name: "accessLevels",
        type: "uint8[]",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getExecutorConfigs",
    outputs: [
      {
        internalType: "struct IPayloadsControllerDataHelper.ExecutorConfig[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "enum PayloadsControllerUtils.AccessControl",
            name: "accessLevel",
            type: "uint8",
            components: []
          },
          {
            internalType: "struct IPayloadsControllerCore.ExecutorConfig",
            name: "config",
            type: "tuple",
            components: [
              {
                internalType: "address",
                name: "executor",
                type: "address",
                components: []
              },
              {
                internalType: "uint40",
                name: "delay",
                type: "uint40",
                components: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "contract IPayloadsController",
        name: "payloadsController",
        type: "address",
        components: []
      },
      {
        internalType: "uint40[]",
        name: "payloadsIds",
        type: "uint40[]",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getPayloadsData",
    outputs: [
      {
        internalType: "struct IPayloadsControllerDataHelper.Payload[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
            components: []
          },
          {
            internalType: "struct IPayloadsControllerCore.Payload",
            name: "data",
            type: "tuple",
            components: [
              {
                internalType: "address",
                name: "creator",
                type: "address",
                components: []
              },
              {
                internalType: "enum PayloadsControllerUtils.AccessControl",
                name: "maximumAccessLevelRequired",
                type: "uint8",
                components: []
              },
              {
                internalType: "enum IPayloadsControllerCore.PayloadState",
                name: "state",
                type: "uint8",
                components: []
              },
              {
                internalType: "uint40",
                name: "createdAt",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "queuedAt",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "executedAt",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "cancelledAt",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "expirationTime",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "delay",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "gracePeriod",
                type: "uint40",
                components: []
              },
              {
                internalType: "struct IPayloadsControllerCore.ExecutionAction[]",
                name: "actions",
                type: "tuple[]",
                components: [
                  {
                    internalType: "address",
                    name: "target",
                    type: "address",
                    components: []
                  },
                  {
                    internalType: "bool",
                    name: "withDelegateCall",
                    type: "bool",
                    components: []
                  },
                  {
                    internalType: "enum PayloadsControllerUtils.AccessControl",
                    name: "accessLevel",
                    type: "uint8",
                    components: []
                  },
                  {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                    components: []
                  },
                  {
                    internalType: "string",
                    name: "signature",
                    type: "string",
                    components: []
                  },
                  {
                    internalType: "bytes",
                    name: "callData",
                    type: "bytes",
                    components: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
export {
  IPayloadsControllerDataHelper_ABI
};
//# sourceMappingURL=IPayloadsControllerDataHelper.mjs.map