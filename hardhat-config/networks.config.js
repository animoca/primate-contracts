const dotenv = require('dotenv');

dotenv.config({path: '.env'});

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL;

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
      gas: 135500000,
      blockGasLimit: 135521976,
    },
    localhost: {
      chainId: 1337,
      gas: 'auto',
      blockGasLimit: 13550000,
      url: 'http://localhost:8545',
    },
    rinkeby: {
      chainId: 4,
      gas: 'auto',
      blockGasLimit: 13550000,
      url: ALCHEMY_API_URL,
      tags: ['staging'],
      live: true,
    },
    ropsten: {
      chainId: 3,
      gas: 'auto',
      blockGasLimit: 13550000,
      url: ALCHEMY_API_URL,
      tags: ['staging'],
      live: true,
    },
    goerli: {
      chainId: 5,
      gas: 'auto',
      blockGasLimit: 13550000,
      url: ALCHEMY_API_URL,
      tags: ['staging'],
      live: true,
    },
    mumbai: {
      url: ALCHEMY_API_URL,
      chainId: 80001,
      gasPrice: 8000000000,
      live: true,
      tags: ['staging'],
    },
    matic: {
      url: ALCHEMY_API_URL,
      chainId: 137,
      gasPrice: 'auto',
      live: true,
      saveDeployments: true,
      tags: ['staging'],
    },
    mainnet: {
      url: ALCHEMY_API_URL,
      chainId: 1,
      gasPrice: 'auto',
      live: true,
      saveDeployments: true,
      tags: ['staging'],
    },
  },
};
