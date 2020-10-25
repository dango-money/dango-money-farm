
const getERC20Balance = (contract, address) => {
  // Call balanceOf function
  contract.balanceOf(address,
    (error, balance) => {
      // Get decimals
      contract.decimals((error, decimals) => {
        // Calculate a balance
        balance = balance.div(10 ** decimals);
      });
    });
};

const approveERC20 = (contract, owner, spender, amount, approveProcessing, callback) => {
  // Get decimals
  contract.methods.approve(spender, amount)
    .send({ from: owner, gasLimit: 100000, gasPrice: 50000000000 })
    .on("transactionHash",
      function (hash) {
        console.log("Approval Tnx", hash);
        if (approveProcessing) {
          approveProcessing(hash);
        }
      }).on("receipt",
      function(receipt) {
        console.log("Receipt", receipt);
        callback();
      })
    .on("error",
      function(error, receipt) {
        // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
        console.log("Receipt", receipt);
        console.log("Error", error);
      });;
};