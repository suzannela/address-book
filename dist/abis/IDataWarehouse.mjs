// src/ts/abis/IDataWarehouse.ts
var IDataWarehouse_ABI = [
  {
    type: "function",
    name: "getRegisteredSlot",
    inputs: [
      {
        name: "blockHash",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "account",
        type: "address",
        internalType: "address"
      },
      {
        name: "slot",
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
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getStorage",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address"
      },
      {
        name: "blockHash",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "slot",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "storageProof",
        type: "bytes",
        internalType: "bytes"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IDataWarehouse.SlotValue",
        components: [
          {
            name: "exists",
            type: "bool",
            internalType: "bool"
          },
          {
            name: "value",
            type: "uint256",
            internalType: "uint256"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getStorageRoots",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address"
      },
      {
        name: "blockHash",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "processStorageRoot",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address"
      },
      {
        name: "blockHash",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "blockHeaderRLP",
        type: "bytes",
        internalType: "bytes"
      },
      {
        name: "accountStateProofRLP",
        type: "bytes",
        internalType: "bytes"
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
    name: "processStorageSlot",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address"
      },
      {
        name: "blockHash",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "slot",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "storageProof",
        type: "bytes",
        internalType: "bytes"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "StorageRootProcessed",
    inputs: [
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "blockHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "StorageSlotProcessed",
    inputs: [
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "blockHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32"
      },
      {
        name: "slot",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  }
];
export {
  IDataWarehouse_ABI
};
//# sourceMappingURL=IDataWarehouse.mjs.map