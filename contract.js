//dev.to/hideckies/ethers-js-cheat-sheet-1h5j

https: import Artifact from './Contract.json'

// Connect web3
//connect metamask
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()

const contractAddress = '0x9fE4...'

const contract = new ethers.Contract(contractAddress, Artifact.abi, signer)

// Call a state-change method
const userAddress = '0x28d3...'
const dai = ethers.utils.parseUnits('1.0', 18)
await contract.transfer(userAddress, dai)

// Contract Event Listener

//contract.on(`event`, `listener`);

contract.on('TransferedFrom', (from, to) => {
  console.log(`Token transfered from ${from} to ${to}`)
})

contract.on('Minted', (tokenId) => {
  console.log(`Token #${tokenId} minted`)
})
