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

// src/ts/abis/IUiPoolDataProvider.ts
var IUiPoolDataProvider_exports = {};
__export(IUiPoolDataProvider_exports, {
  IUiPoolDataProvider_ABI: () => IUiPoolDataProvider_ABI
});
module.exports = __toCommonJS(IUiPoolDataProvider_exports);
var IUiPoolDataProvider_ABI = [
  {
    inputs: [
      {
        internalType: "contract IEACAggregatorProxy",
        name: "_networkBaseTokenPriceInUsdProxyAggregator",
        type: "address",
        components: []
      },
      {
        internalType: "contract IEACAggregatorProxy",
        name: "_marketReferenceCurrencyPriceInUsdProxyAggregator",
        type: "address",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor",
    outputs: []
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "ETH_CURRENCY_UNIT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "MKR_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_bytes32",
        type: "bytes32",
        components: []
      }
    ],
    stateMutability: "pure",
    type: "function",
    name: "bytes32ToString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "provider",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getReservesData",
    outputs: [
      {
        internalType: "struct IUiPoolDataProviderV3.AggregatedReserveData[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
            components: []
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
            components: []
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
            components: []
          },
          {
            internalType: "uint256",
            name: "decimals",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "baseLTVasCollateral",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "reserveLiquidationThreshold",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "reserveLiquidationBonus",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "reserveFactor",
            type: "uint256",
            components: []
          },
          {
            internalType: "bool",
            name: "usageAsCollateralEnabled",
            type: "bool",
            components: []
          },
          {
            internalType: "bool",
            name: "borrowingEnabled",
            type: "bool",
            components: []
          },
          {
            internalType: "bool",
            name: "stableBorrowRateEnabled",
            type: "bool",
            components: []
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
            components: []
          },
          {
            internalType: "bool",
            name: "isFrozen",
            type: "bool",
            components: []
          },
          {
            internalType: "uint128",
            name: "liquidityIndex",
            type: "uint128",
            components: []
          },
          {
            internalType: "uint128",
            name: "variableBorrowIndex",
            type: "uint128",
            components: []
          },
          {
            internalType: "uint128",
            name: "liquidityRate",
            type: "uint128",
            components: []
          },
          {
            internalType: "uint128",
            name: "variableBorrowRate",
            type: "uint128",
            components: []
          },
          {
            internalType: "uint128",
            name: "stableBorrowRate",
            type: "uint128",
            components: []
          },
          {
            internalType: "uint40",
            name: "lastUpdateTimestamp",
            type: "uint40",
            components: []
          },
          {
            internalType: "address",
            name: "aTokenAddress",
            type: "address",
            components: []
          },
          {
            internalType: "address",
            name: "stableDebtTokenAddress",
            type: "address",
            components: []
          },
          {
            internalType: "address",
            name: "variableDebtTokenAddress",
            type: "address",
            components: []
          },
          {
            internalType: "address",
            name: "interestRateStrategyAddress",
            type: "address",
            components: []
          },
          {
            internalType: "uint256",
            name: "availableLiquidity",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "totalPrincipalStableDebt",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "averageStableRate",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "stableDebtLastUpdateTimestamp",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "totalScaledVariableDebt",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "priceInMarketReferenceCurrency",
            type: "uint256",
            components: []
          },
          {
            internalType: "address",
            name: "priceOracle",
            type: "address",
            components: []
          },
          {
            internalType: "uint256",
            name: "variableRateSlope1",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "variableRateSlope2",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "stableRateSlope1",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "stableRateSlope2",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "baseStableBorrowRate",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "baseVariableBorrowRate",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "optimalUsageRatio",
            type: "uint256",
            components: []
          },
          {
            internalType: "bool",
            name: "isPaused",
            type: "bool",
            components: []
          },
          {
            internalType: "bool",
            name: "isSiloedBorrowing",
            type: "bool",
            components: []
          },
          {
            internalType: "uint128",
            name: "accruedToTreasury",
            type: "uint128",
            components: []
          },
          {
            internalType: "uint128",
            name: "unbacked",
            type: "uint128",
            components: []
          },
          {
            internalType: "uint128",
            name: "isolationModeTotalDebt",
            type: "uint128",
            components: []
          },
          {
            internalType: "bool",
            name: "flashLoanEnabled",
            type: "bool",
            components: []
          },
          {
            internalType: "uint256",
            name: "debtCeiling",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "debtCeilingDecimals",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint8",
            name: "eModeCategoryId",
            type: "uint8",
            components: []
          },
          {
            internalType: "uint256",
            name: "borrowCap",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "supplyCap",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint16",
            name: "eModeLtv",
            type: "uint16",
            components: []
          },
          {
            internalType: "uint16",
            name: "eModeLiquidationThreshold",
            type: "uint16",
            components: []
          },
          {
            internalType: "uint16",
            name: "eModeLiquidationBonus",
            type: "uint16",
            components: []
          },
          {
            internalType: "address",
            name: "eModePriceSource",
            type: "address",
            components: []
          },
          {
            internalType: "string",
            name: "eModeLabel",
            type: "string",
            components: []
          },
          {
            internalType: "bool",
            name: "borrowableInIsolation",
            type: "bool",
            components: []
          }
        ]
      },
      {
        internalType: "struct IUiPoolDataProviderV3.BaseCurrencyInfo",
        name: "",
        type: "tuple",
        components: [
          {
            internalType: "uint256",
            name: "marketReferenceCurrencyUnit",
            type: "uint256",
            components: []
          },
          {
            internalType: "int256",
            name: "marketReferenceCurrencyPriceInUsd",
            type: "int256",
            components: []
          },
          {
            internalType: "int256",
            name: "networkBaseTokenPriceInUsd",
            type: "int256",
            components: []
          },
          {
            internalType: "uint8",
            name: "networkBaseTokenPriceDecimals",
            type: "uint8",
            components: []
          }
        ]
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "provider",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getReservesList",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "provider",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getUserReservesData",
    outputs: [
      {
        internalType: "struct IUiPoolDataProviderV3.UserReserveData[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
            components: []
          },
          {
            internalType: "uint256",
            name: "scaledATokenBalance",
            type: "uint256",
            components: []
          },
          {
            internalType: "bool",
            name: "usageAsCollateralEnabledOnUser",
            type: "bool",
            components: []
          },
          {
            internalType: "uint256",
            name: "stableBorrowRate",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "scaledVariableDebt",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "principalStableDebt",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "stableBorrowLastUpdateTimestamp",
            type: "uint256",
            components: []
          }
        ]
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "marketReferenceCurrencyPriceInUsdProxyAggregator",
    outputs: [
      {
        internalType: "contract IEACAggregatorProxy",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "networkBaseTokenPriceInUsdProxyAggregator",
    outputs: [
      {
        internalType: "contract IEACAggregatorProxy",
        name: "",
        type: "address",
        components: []
      }
    ]
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IUiPoolDataProvider_ABI
});
//# sourceMappingURL=IUiPoolDataProvider.js.map