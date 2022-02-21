 const feeData = await provider.getFeeData();
 const gas = await (await nftMarket.estimateGas.revokeTokenListRole(addr)).toString();
 const gasPrice = await provider.getGasPrice()
 console.log("gasPrice",gasPrice.toString())
 console.log("feeData",feeData.gasPrice?.toString(), feeData.maxFeePerGas?.toString(), feeData.maxPriorityFeePerGas?.toString(),);
 const format = ethers.utils.formatUnits( ethers.BigNumber.from(feeData?.maxPriorityFeePerGas), "gwei");
 console.log("format maxPriorityFeePerGas",format)


 const gRole = await nftMarket.grantTokenListRole(addr 
 ,{
  "maxFeePerGas":feeData?.maxFeePerGas,
  "maxPriorityFeePerGas":feeData?.maxPriorityFeePerGas  
  });

##Using PolyGon Gas Station

 const response = await fetch('https://gasstation-mainnet.matic.network/v2');
 const { fast } = await response.json()
 console.log("Gas station data", fast);
 console.log("Gas station data", fast.maxFee, fast.maxPriorityFee)
 console.log("GASS", ethers.utils.parseUnits(`${fast?.maxFee.toFixed(2)}`, "gwei"))

  let transaction = await contract.createToken(url,
  {
   maxFeePerGas: ethers.utils.parseUnits(`${fast?.maxFee.toFixed(2)}`, "gwei"),
   maxPriorityFeePerGas: ethers.utils.parseUnits(`${fast?.maxPriorityFee.toFixed(2)}`, "gwei")
   });
  let tx = await transaction.wait();
  let event = tx.events[0];

  let value = event.args[2];
  let tokenId = value.toNumber();
  console.log('tokenId', tokenId);
        
        
