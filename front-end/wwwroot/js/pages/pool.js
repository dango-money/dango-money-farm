const displayPoolInformation = (result) => {
  const selectedAccount = window.web3.currentProvider.selectedAddress
    ? window.web3.currentProvider.selectedAddress
    : window.web3.currentProvider.accounts[0];

  const poolTotalStakeValue = window.BigNumber(result.poolTotalStake_).div(window.BigNumber(10).pow(window.pool.stakeToken.decimals));
  const poolTotalStake =
    `${poolTotalStakeValue.toFixed(window.pool.stakeToken.fixed)} ${window
      .pool
      .stakeToken
      .symbol}`;

  $(".poolTotalStake_").html(poolTotalStake);

  const poolTotalReward =
    `${window.numeral(result.poolTotalReward_ / (10 ** window.pool.rewardToken.decimals)).format("0,0")} ${window
      .pool
      .rewardToken
      .symbol}`;

  $(".poolTotalReward_").html(poolTotalReward);

  const poolRewardPerSecond =
    `${window.numeral(result.poolRewardPerSecond_ / (10 ** window.pool.rewardToken.decimals))
      .format("0,0.000000")} ${window
      .pool
      .rewardToken
      .symbol}`;
  $(".poolRewardPerSecond_").html(poolRewardPerSecond);

  const poolClaimedReward =
    `${window.numeral(result.poolClaimedReward_ / (10 ** window.pool.rewardToken.decimals)).format("0,0.000000")} ${window
      .pool
      .rewardToken
      .symbol}`;

  $(".poolClaimedReward_").html(poolClaimedReward);

  const poolEndedAt = window.moment.unix(result.poolEndedAt_).format("YYYY/MM/DD HH:mm");
  $(".poolEndedAt_").html(`${poolEndedAt}`);

  if (window.moment().isAfter(window.moment.unix(result.poolStartedAt_)) &&
    window.moment().isBefore(window.moment.unix(result.poolEndedAt_))) {
    $(".stake").removeAttr("disabled");
  }

  $(".connectedWallet").html(`Wallet [${selectedAccount}]`);
};

const displayMyPoolInformation = (result) => {
  // My stake
  if (result.address_ === "0x0000000000000000000000000000000000000000") {
    $(".stakeAmount_").html("_");
    $(".createdAt_").html("_");
    $(".canUnlockWithdrawAt").html("_");
    $(".reward_").html("_");
    $(".claimedReward_").html("_");
  } else {
    const stakeAmountValue = window.BigNumber(result.stakeAmount_).div(window.BigNumber(10).pow(window.pool.stakeToken.decimals));
    const stakeAmountContent =
      `${stakeAmountValue.toFixed(window.pool.stakeToken.fixed)} ${window
        .pool
        .stakeToken
        .symbol}`;

    $(".stakeAmount_").html(stakeAmountContent);
    $(".createdAt_").html(window.moment.unix(result.createdAt_).format("YYYY/MM/DD HH:mm"));
    $(".canUnlockWithdrawAt").html(window.moment.unix(result.canUnlockWithdrawAt).format("YYYY/MM/DD HH:mm"));

    const rewardContent =
      `${window.numeral(result.reward_ / (10 ** window.pool.rewardToken.decimals)).format("0,0.000000")} ${window
        .pool
        .rewardToken
        .symbol}`;
    $(".reward_").html(rewardContent);

    const claimedRewardContent =
      `${window.numeral(result.claimedReward_ / (10 ** window.pool.rewardToken.decimals)).format("0,0.000000")} ${window
        .pool
        .rewardToken
        .symbol}`;
    $(".claimedReward_").html(claimedRewardContent);

    // Actions control
    if (result.reward_ > 0) {
      $(".claim").removeAttr("disabled");
    }

    if (result.expiredAt_ === "0" && result.address_ !== "0x0000000000000000000000000000000000000000") {
      $(".unstake").removeAttr("disabled");

      if (result.reward_ > 0) {
        $(".unstakeAndClaim").removeAttr("disabled");
      }
    }

    if (window.moment().isAfter(window.moment.unix(result.canUnlockWithdrawAt)) && result.stakeAmount_ > 0) {
      $(".withdraw").removeAttr("disabled");
    }
  }
};

const fetchBalance = async (address) => {
  const stakeContract = await getERC20Contract(window.pool.stakeToken.contractAddress);
  stakeContract.methods.balanceOf(address)
    .call()
    .then(function (result) {
      const decimalsBN = window.BigNumber(window.pool.stakeToken.decimals);
      const balance = window.BigNumber(result);
      const value = balance.div(window.BigNumber(10).pow(decimalsBN));
      $(".balance")
        .html(`Your available balance ${value.toString()} ${window.pool.stakeToken.symbol}`);
      $("#balance").val(value.toFixed(window.pool.stakeToken.decimals));
    })
    .catch(function(err) {
      console.log(err);
    });
};

const setQuickAmount = (percent) => {
  const availableBalance = window.BigNumber($("#balance").val());
  $("#amount").val((availableBalance.times(percent).div(100)));
};

const showContentModal = (id) => {
  $(`#${id}`).modal({
    backdrop: "static",
    keyboard: false
  });
};