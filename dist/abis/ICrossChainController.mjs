// src/ts/abis/ICrossChainController.ts
var ICrossChainController_ABI = [
  {
    type: "function",
    name: "allowReceiverBridgeAdapters",
    inputs: [
      {
        name: "bridgeAdaptersInput",
        type: "tuple[]",
        internalType: "struct ICrossChainReceiver.ReceiverBridgeAdapterConfigInput[]",
        components: [
          {
            name: "bridgeAdapter",
            type: "address",
            internalType: "address"
          },
          {
            name: "chainIds",
            type: "uint256[]",
            internalType: "uint256[]"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "approveSenders",
    inputs: [
      {
        name: "senders",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "deliverEnvelope",
    inputs: [
      {
        name: "envelope",
        type: "tuple",
        internalType: "struct Envelope",
        components: [
          {
            name: "nonce",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "origin",
            type: "address",
            internalType: "address"
          },
          {
            name: "destination",
            type: "address",
            internalType: "address"
          },
          {
            name: "originChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "destinationChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "message",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "disableBridgeAdapters",
    inputs: [
      {
        name: "bridgeAdapters",
        type: "tuple[]",
        internalType: "struct ICrossChainForwarder.BridgeAdapterToDisable[]",
        components: [
          {
            name: "bridgeAdapter",
            type: "address",
            internalType: "address"
          },
          {
            name: "chainIds",
            type: "uint256[]",
            internalType: "uint256[]"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "disallowReceiverBridgeAdapters",
    inputs: [
      {
        name: "bridgeAdaptersInput",
        type: "tuple[]",
        internalType: "struct ICrossChainReceiver.ReceiverBridgeAdapterConfigInput[]",
        components: [
          {
            name: "bridgeAdapter",
            type: "address",
            internalType: "address"
          },
          {
            name: "chainIds",
            type: "uint256[]",
            internalType: "uint256[]"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "emergencyEtherTransfer",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "emergencyTokenTransfer",
    inputs: [
      {
        name: "erc20Token",
        type: "address",
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "enableBridgeAdapters",
    inputs: [
      {
        name: "bridgeAdapters",
        type: "tuple[]",
        internalType: "struct ICrossChainForwarder.ForwarderBridgeAdapterConfigInput[]",
        components: [
          {
            name: "currentChainBridgeAdapter",
            type: "address",
            internalType: "address"
          },
          {
            name: "destinationBridgeAdapter",
            type: "address",
            internalType: "address"
          },
          {
            name: "destinationChainId",
            type: "uint256",
            internalType: "uint256"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "forwardMessage",
    inputs: [
      {
        name: "destinationChainId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "destination",
        type: "address",
        internalType: "address"
      },
      {
        name: "gasLimit",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "message",
        type: "bytes",
        internalType: "bytes"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "getConfigurationByChain",
    inputs: [
      {
        name: "chainId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct ICrossChainReceiver.ReceiverConfiguration",
        components: [
          {
            name: "requiredConfirmation",
            type: "uint8",
            internalType: "uint8"
          },
          {
            name: "validityTimestamp",
            type: "uint120",
            internalType: "uint120"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getCurrentEnvelopeNonce",
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
    name: "getCurrentTransactionNonce",
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
    name: "getEnvelopeState",
    inputs: [
      {
        name: "envelopeId",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "enum ICrossChainReceiver.EnvelopeState"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getEnvelopeState",
    inputs: [
      {
        name: "envelope",
        type: "tuple",
        internalType: "struct Envelope",
        components: [
          {
            name: "nonce",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "origin",
            type: "address",
            internalType: "address"
          },
          {
            name: "destination",
            type: "address",
            internalType: "address"
          },
          {
            name: "originChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "destinationChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "message",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "enum ICrossChainReceiver.EnvelopeState"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getForwarderBridgeAdaptersByChain",
    inputs: [
      {
        name: "chainId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct ICrossChainForwarder.ChainIdBridgeConfig[]",
        components: [
          {
            name: "destinationBridgeAdapter",
            type: "address",
            internalType: "address"
          },
          {
            name: "currentChainBridgeAdapter",
            type: "address",
            internalType: "address"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getReceiverBridgeAdaptersByChain",
    inputs: [
      {
        name: "chainId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getSupportedChains",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getTransactionState",
    inputs: [
      {
        name: "transaction",
        type: "tuple",
        internalType: "struct Transaction",
        components: [
          {
            name: "nonce",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "encodedEnvelope",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct ICrossChainReceiver.TransactionStateWithoutAdapters",
        components: [
          {
            name: "confirmations",
            type: "uint8",
            internalType: "uint8"
          },
          {
            name: "firstBridgedAt",
            type: "uint120",
            internalType: "uint120"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getTransactionState",
    inputs: [
      {
        name: "transactionId",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct ICrossChainReceiver.TransactionStateWithoutAdapters",
        components: [
          {
            name: "confirmations",
            type: "uint8",
            internalType: "uint8"
          },
          {
            name: "firstBridgedAt",
            type: "uint120",
            internalType: "uint120"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "isEnvelopeRegistered",
    inputs: [
      {
        name: "envelope",
        type: "tuple",
        internalType: "struct Envelope",
        components: [
          {
            name: "nonce",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "origin",
            type: "address",
            internalType: "address"
          },
          {
            name: "destination",
            type: "address",
            internalType: "address"
          },
          {
            name: "originChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "destinationChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "message",
            type: "bytes",
            internalType: "bytes"
          }
        ]
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
    name: "isEnvelopeRegistered",
    inputs: [
      {
        name: "envelopeId",
        type: "bytes32",
        internalType: "bytes32"
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
    name: "isReceiverBridgeAdapterAllowed",
    inputs: [
      {
        name: "bridgeAdapter",
        type: "address",
        internalType: "address"
      },
      {
        name: "chainId",
        type: "uint256",
        internalType: "uint256"
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
    name: "isSenderApproved",
    inputs: [
      {
        name: "sender",
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
    name: "isTransactionForwarded",
    inputs: [
      {
        name: "transactionId",
        type: "bytes32",
        internalType: "bytes32"
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
    name: "isTransactionForwarded",
    inputs: [
      {
        name: "transaction",
        type: "tuple",
        internalType: "struct Transaction",
        components: [
          {
            name: "nonce",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "encodedEnvelope",
            type: "bytes",
            internalType: "bytes"
          }
        ]
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
    name: "isTransactionReceivedByAdapter",
    inputs: [
      {
        name: "transactionId",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "bridgeAdapter",
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
    name: "receiveCrossChainMessage",
    inputs: [
      {
        name: "encodedTransaction",
        type: "bytes",
        internalType: "bytes"
      },
      {
        name: "originChainId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "removeSenders",
    inputs: [
      {
        name: "senders",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "retryEnvelope",
    inputs: [
      {
        name: "envelope",
        type: "tuple",
        internalType: "struct Envelope",
        components: [
          {
            name: "nonce",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "origin",
            type: "address",
            internalType: "address"
          },
          {
            name: "destination",
            type: "address",
            internalType: "address"
          },
          {
            name: "originChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "destinationChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "message",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      },
      {
        name: "gasLimit",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "retryTransaction",
    inputs: [
      {
        name: "encodedTransaction",
        type: "bytes",
        internalType: "bytes"
      },
      {
        name: "gasLimit",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "bridgeAdaptersToRetry",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "updateConfirmations",
    inputs: [
      {
        name: "newConfirmations",
        type: "tuple[]",
        internalType: "struct ICrossChainReceiver.ConfirmationInput[]",
        components: [
          {
            name: "chainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "requiredConfirmations",
            type: "uint8",
            internalType: "uint8"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "updateMessagesValidityTimestamp",
    inputs: [
      {
        name: "newValidityTimestamp",
        type: "tuple[]",
        internalType: "struct ICrossChainReceiver.ValidityTimestampInput[]",
        components: [
          {
            name: "chainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "validityTimestamp",
            type: "uint120",
            internalType: "uint120"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "whoCanRescue",
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
    type: "event",
    name: "BridgeAdapterUpdated",
    inputs: [
      {
        name: "destinationChainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "bridgeAdapter",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "destinationBridgeAdapter",
        type: "address",
        indexed: false,
        internalType: "address"
      },
      {
        name: "allowed",
        type: "bool",
        indexed: true,
        internalType: "bool"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ConfirmationsUpdated",
    inputs: [
      {
        name: "newConfirmations",
        type: "uint8",
        indexed: false,
        internalType: "uint8"
      },
      {
        name: "chainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ERC20Rescued",
    inputs: [
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "token",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "EnvelopeDeliveryAttempted",
    inputs: [
      {
        name: "envelopeId",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32"
      },
      {
        name: "envelope",
        type: "tuple",
        indexed: false,
        internalType: "struct Envelope",
        components: [
          {
            name: "nonce",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "origin",
            type: "address",
            internalType: "address"
          },
          {
            name: "destination",
            type: "address",
            internalType: "address"
          },
          {
            name: "originChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "destinationChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "message",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      },
      {
        name: "isDelivered",
        type: "bool",
        indexed: false,
        internalType: "bool"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "EnvelopeRegistered",
    inputs: [
      {
        name: "envelopeId",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32"
      },
      {
        name: "envelope",
        type: "tuple",
        indexed: false,
        internalType: "struct Envelope",
        components: [
          {
            name: "nonce",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "origin",
            type: "address",
            internalType: "address"
          },
          {
            name: "destination",
            type: "address",
            internalType: "address"
          },
          {
            name: "originChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "destinationChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "message",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "NativeTokensRescued",
    inputs: [
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "NewInvalidation",
    inputs: [
      {
        name: "invalidTimestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "chainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ReceiverBridgeAdaptersUpdated",
    inputs: [
      {
        name: "bridgeAdapter",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "allowed",
        type: "bool",
        indexed: true,
        internalType: "bool"
      },
      {
        name: "chainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "SenderUpdated",
    inputs: [
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "isApproved",
        type: "bool",
        indexed: true,
        internalType: "bool"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "TransactionForwardingAttempted",
    inputs: [
      {
        name: "transactionId",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32"
      },
      {
        name: "envelopeId",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32"
      },
      {
        name: "encodedTransaction",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      },
      {
        name: "destinationChainId",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "bridgeAdapter",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "destinationBridgeAdapter",
        type: "address",
        indexed: false,
        internalType: "address"
      },
      {
        name: "adapterSuccessful",
        type: "bool",
        indexed: true,
        internalType: "bool"
      },
      {
        name: "returnData",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "TransactionReceived",
    inputs: [
      {
        name: "transactionId",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32"
      },
      {
        name: "envelopeId",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32"
      },
      {
        name: "originChainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "transaction",
        type: "tuple",
        indexed: false,
        internalType: "struct Transaction",
        components: [
          {
            name: "nonce",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "encodedEnvelope",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      },
      {
        name: "bridgeAdapter",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "confirmations",
        type: "uint8",
        indexed: false,
        internalType: "uint8"
      }
    ],
    anonymous: false
  }
];
export {
  ICrossChainController_ABI
};
//# sourceMappingURL=ICrossChainController.mjs.map