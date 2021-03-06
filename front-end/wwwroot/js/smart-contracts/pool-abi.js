﻿const poolABI = [
  {
    "inputs": [
      { "internalType": "address", "name": "rewardTokenAddress", "type": "address" },
      { "internalType": "address", "name": "stakeTokenAddress", "type": "address" },
      { "internalType": "uint256", "name": "poolStartedAt", "type": "uint256" },
      { "internalType": "uint256", "name": "poolRunDurationInHours", "type": "uint256" },
      { "internalType": "uint256", "name": "initRewardAmount", "type": "uint256" }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "_stakeholder", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "_amount", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "_timestamp", "type": "uint256" }
    ],
    "name": "RewardClaimSuccessful",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "_stakeholder", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "_amount", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "_timestamp", "type": "uint256" }
    ],
    "name": "StakeSuccessful",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "_from", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "_to", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "_amount", "type": "uint256" }
    ],
    "name": "TransferSuccessful",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "_poolDepositFeeAmount",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_poolEndedAt",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_poolRewardDistributionStartedAt",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_poolRewardPerSecondRate",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_poolRunDuration",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_poolStartedAt",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_rewardClaimFee",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_rewardTokenAddress",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_stakeDepositFee",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "name": "_stakePeriods",
    "outputs": [
      { "internalType": "uint256", "name": "timestamp", "type": "uint256" },
      { "internalType": "uint256", "name": "stakeTotalAmount", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_stakeTokenAddress",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "name": "_stakeholders",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_transactionFeeInWei",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }],
    "name": "addPoolDeveloper",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "_pool", "type": "address" }],
    "name": "addSystemPool",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "claimReward",
    "outputs": [
      { "internalType": "bool", "name": "success_", "type": "bool" },
      { "internalType": "uint256", "name": "amount_", "type": "uint256" }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }],
    "name": "developerWithdraw",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "timestamp", "type": "uint256" }],
    "name": "getPoolDistributedReward",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getPoolInformation",
    "outputs": [
      { "internalType": "uint256", "name": "poolTotalReward_", "type": "uint256" },
      { "internalType": "uint256", "name": "poolRemainingReward_", "type": "uint256" },
      { "internalType": "uint256", "name": "poolRunDuration_", "type": "uint256" },
      { "internalType": "uint256", "name": "poolStartedAt_", "type": "uint256" },
      { "internalType": "bool", "name": "poolEnded_", "type": "bool" },
      { "internalType": "uint256", "name": "poolDistributedReward_", "type": "uint256" },
      { "internalType": "uint256", "name": "poolClaimedReward_", "type": "uint256" },
      { "internalType": "uint256", "name": "poolNumberOfStakeholders_", "type": "uint256" },
      { "internalType": "uint256", "name": "poolTotalStake_", "type": "uint256" },
      { "internalType": "uint256", "name": "poolRewardPerSecond_", "type": "uint256" },
      { "internalType": "uint256", "name": "poolEndedAt_", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }],
    "name": "isStakeholder",
    "outputs": [
      { "internalType": "bool", "name": "exists_", "type": "bool" },
      { "internalType": "uint256", "name": "index_", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "myPoolInformation",
    "outputs": [
      { "internalType": "address", "name": "address_", "type": "address" },
      { "internalType": "uint256", "name": "stakeAmount_", "type": "uint256" },
      { "internalType": "uint256", "name": "createdAt_", "type": "uint256" },
      { "internalType": "uint256", "name": "lastClaimAt_", "type": "uint256" },
      { "internalType": "uint256", "name": "reward_", "type": "uint256" },
      { "internalType": "uint256", "name": "claimedReward_", "type": "uint256" },
      { "internalType": "uint256", "name": "canUnlockWithdrawAt", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pool",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "poolDeployedAt",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }],
    "name": "removePoolDeveloper",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "_pool", "type": "address" }],
    "name": "removeSystemPool",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  {
    "inputs": [{ "internalType": "address", "name": "_stakeholder", "type": "address" }],
    "name": "rewardOf",
    "outputs": [
      { "internalType": "uint256", "name": "reward_", "type": "uint256" },
      { "internalType": "uint256", "name": "stakeAmount_", "type": "uint256" },
      { "internalType": "uint256", "name": "userStakePoolSeconds_", "type": "uint256" },
      { "internalType": "uint256", "name": "claimedReward_", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_fee", "type": "uint256" }],
    "name": "setRewardClaimFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_fee", "type": "uint256" }],
    "name": "setTransactionFeeInWei",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }],
    "name": "stake",
    "outputs": [
      { "internalType": "bool", "name": "success_", "type": "bool" },
      { "internalType": "uint256", "name": "stakeAmount_", "type": "uint256" }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_toPool", "type": "address" },
      { "internalType": "uint256", "name": "_amount", "type": "uint256" }
    ],
    "name": "transferUnpaidRewardsToPool",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawAndClaimReward",
    "outputs": [
      { "internalType": "bool", "name": "success_", "type": "bool" },
      { "internalType": "uint256", "name": "withdrawAmount_", "type": "uint256" }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "toAddress", "type": "address" }],
    "name": "withdrawDepositFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]