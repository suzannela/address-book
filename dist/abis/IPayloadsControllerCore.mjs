// src/ts/abis/IPayloadsControllerCore.ts
var IPayloadsControllerCore_ABI = [
  {
    type: "function",
    name: "EXPIRATION_DELAY",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint40",
        internalType: "uint40"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "GRACE_PERIOD",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint40",
        internalType: "uint40"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MAX_EXECUTION_DELAY",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint40",
        internalType: "uint40"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MIN_EXECUTION_DELAY",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint40",
        internalType: "uint40"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "cancelPayload",
    inputs: [
      {
        name: "payloadId",
        type: "uint40",
        internalType: "uint40"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "createPayload",
    inputs: [
      {
        name: "actions",
        type: "tuple[]",
        internalType: "struct IPayloadsControllerCore.ExecutionAction[]",
        components: [
          {
            name: "target",
            type: "address",
            internalType: "address"
          },
          {
            name: "withDelegateCall",
            type: "bool",
            internalType: "bool"
          },
          {
            name: "accessLevel",
            type: "uint8",
            internalType: "enum PayloadsControllerUtils.AccessControl"
          },
          {
            name: "value",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "signature",
            type: "string",
            internalType: "string"
          },
          {
            name: "callData",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint40",
        internalType: "uint40"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "executePayload",
    inputs: [
      {
        name: "payloadId",
        type: "uint40",
        internalType: "uint40"
      }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "getExecutorSettingsByAccessControl",
    inputs: [
      {
        name: "accessControl",
        type: "uint8",
        internalType: "enum PayloadsControllerUtils.AccessControl"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IPayloadsControllerCore.ExecutorConfig",
        components: [
          {
            name: "executor",
            type: "address",
            internalType: "address"
          },
          {
            name: "delay",
            type: "uint40",
            internalType: "uint40"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPayloadById",
    inputs: [
      {
        name: "payloadId",
        type: "uint40",
        internalType: "uint40"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IPayloadsControllerCore.Payload",
        components: [
          {
            name: "creator",
            type: "address",
            internalType: "address"
          },
          {
            name: "maximumAccessLevelRequired",
            type: "uint8",
            internalType: "enum PayloadsControllerUtils.AccessControl"
          },
          {
            name: "state",
            type: "uint8",
            internalType: "enum IPayloadsControllerCore.PayloadState"
          },
          {
            name: "createdAt",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "queuedAt",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "executedAt",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "cancelledAt",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "expirationTime",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "delay",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "gracePeriod",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "actions",
            type: "tuple[]",
            internalType: "struct IPayloadsControllerCore.ExecutionAction[]",
            components: [
              {
                name: "target",
                type: "address",
                internalType: "address"
              },
              {
                name: "withDelegateCall",
                type: "bool",
                internalType: "bool"
              },
              {
                name: "accessLevel",
                type: "uint8",
                internalType: "enum PayloadsControllerUtils.AccessControl"
              },
              {
                name: "value",
                type: "uint256",
                internalType: "uint256"
              },
              {
                name: "signature",
                type: "string",
                internalType: "string"
              },
              {
                name: "callData",
                type: "bytes",
                internalType: "bytes"
              }
            ]
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPayloadState",
    inputs: [
      {
        name: "payloadId",
        type: "uint40",
        internalType: "uint40"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "enum IPayloadsControllerCore.PayloadState"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPayloadsCount",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint40",
        internalType: "uint40"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "updateExecutors",
    inputs: [
      {
        name: "executors",
        type: "tuple[]",
        internalType: "struct IPayloadsControllerCore.UpdateExecutorInput[]",
        components: [
          {
            name: "accessLevel",
            type: "uint8",
            internalType: "enum PayloadsControllerUtils.AccessControl"
          },
          {
            name: "executorConfig",
            type: "tuple",
            internalType: "struct IPayloadsControllerCore.ExecutorConfig",
            components: [
              {
                name: "executor",
                type: "address",
                internalType: "address"
              },
              {
                name: "delay",
                type: "uint40",
                internalType: "uint40"
              }
            ]
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "ExecutorSet",
    inputs: [
      {
        name: "accessLevel",
        type: "uint8",
        indexed: true,
        internalType: "enum PayloadsControllerUtils.AccessControl"
      },
      {
        name: "executor",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "delay",
        type: "uint40",
        indexed: false,
        internalType: "uint40"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "PayloadCancelled",
    inputs: [
      {
        name: "payloadId",
        type: "uint40",
        indexed: false,
        internalType: "uint40"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "PayloadCreated",
    inputs: [
      {
        name: "payloadId",
        type: "uint40",
        indexed: true,
        internalType: "uint40"
      },
      {
        name: "creator",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "actions",
        type: "tuple[]",
        indexed: false,
        internalType: "struct IPayloadsControllerCore.ExecutionAction[]",
        components: [
          {
            name: "target",
            type: "address",
            internalType: "address"
          },
          {
            name: "withDelegateCall",
            type: "bool",
            internalType: "bool"
          },
          {
            name: "accessLevel",
            type: "uint8",
            internalType: "enum PayloadsControllerUtils.AccessControl"
          },
          {
            name: "value",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "signature",
            type: "string",
            internalType: "string"
          },
          {
            name: "callData",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      },
      {
        name: "maximumAccessLevelRequired",
        type: "uint8",
        indexed: true,
        internalType: "enum PayloadsControllerUtils.AccessControl"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "PayloadExecuted",
    inputs: [
      {
        name: "payloadId",
        type: "uint40",
        indexed: false,
        internalType: "uint40"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "PayloadExecutionMessageReceived",
    inputs: [
      {
        name: "originSender",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "originChainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "delivered",
        type: "bool",
        indexed: true,
        internalType: "bool"
      },
      {
        name: "message",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      },
      {
        name: "reason",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "PayloadQueued",
    inputs: [
      {
        name: "payloadId",
        type: "uint40",
        indexed: false,
        internalType: "uint40"
      }
    ],
    anonymous: false
  }
];
export {
  IPayloadsControllerCore_ABI
};
//# sourceMappingURL=IPayloadsControllerCore.mjs.map