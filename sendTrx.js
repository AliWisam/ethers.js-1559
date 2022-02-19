 const feeData = await provider.getFeeData();
 const gas = await (await nftMarket.estimateGas.revokeTokenListRole(addr)).toString();
 const gasPrice = await provider.getGasPrice()
 console.log("gasPrice",gasPrice.toString())
 console.log("feeData",feeData.gasPrice?.toString(), feeData.maxFeePerGas?.toString(), feeData.maxPriorityFeePerGas?.toString(),);
 const format = ethers.utils.formatUnits( ethers.BigNumber.from(feeData?.maxPriorityFeePerGas), "gwei");
 console.log("format maxPriorityFeePerGas",format)
 const gRole = await nftMarket.grantTokenListRole(addr).send({
  "maxPriorityFee":feeData?.maxPriorityFeePerGas,
  "maxFee":feeData?.maxFeePerGas
  });;
        
        
