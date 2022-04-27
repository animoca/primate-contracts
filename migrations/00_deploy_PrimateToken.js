const {
  skipIfChainIdIs,
  skipIfContractExists,
  multiSkip,
} = require('@animoca/ethereum-migrations-core/hardhat-plugins/hardhat-deploy-migrations/migrations');

module.exports = async (hre) => {
  const {deploy, log} = hre.deployments;
  const {PrimateToken_wallet} = await hre.getNamedAccounts();
  log(`======================`, 'Primate Token Deployment started.');

  console.log('PrimateToken_wallet: ' + PrimateToken_wallet);

  const defaultInitialSupply = '2060000000000000000000000000';

  const playToEarnWallet = {
    address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    supply: '235000000000000000000000000',
  };
  const liquidityWallet = {
    address: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
    supply: '25000000000000000000000000',
  };
  const treasuryWallet = {
    address: '0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc',
    supply: '1600000000000000000000000000',
  };
  const marketingWallet = {
    address: '0x90f79bf6eb2c4f870365e785982e1f101e93b906',
    supply: '200000000000000000000000000',
  };

  const primateConfig = {
    recipients: [playToEarnWallet.address, liquidityWallet.address, treasuryWallet.address, marketingWallet.address],
    amounts: [playToEarnWallet.supply, liquidityWallet.supply, treasuryWallet.supply, marketingWallet.supply],
    forwarderRegistry: '0x71bee13e92e64701b78f059801a70857e4683acd',
    universalForwarder: '0x56133a31f4cd01ede8c6ee780071c021bd324ad2',
  };

  log(`PrimateCoin Deployment: deploying PrimateCoin with initial supply ${defaultInitialSupply} ...`);
  const PrimateCoinDeployment = await deploy('PrimateCoin', {
    contract: 'PrimateCoin',
    args: [primateConfig.recipients, primateConfig.amounts, primateConfig.forwarderRegistry, primateConfig.universalForwarder],
    from: PrimateToken_wallet,
    log: true,
  });
};
module.exports.skip = multiSkip([
  skipIfChainIdIs(['1']), // migration for Mainnet
  // skipIfChainIdIs(['4']), // migration for Rinkeby
  // skipIfChainIdIs(['1337']), // migration for localhost

  skipIfContractExists('PrimateCoin'), // contract guard
]);
module.exports.tags = ['PrimateCoin'];
