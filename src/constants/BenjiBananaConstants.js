const SkuSaleDetails = [
  {
    skuName: 'BENJI-APE',
    maxQtyPerPurchase: 5,
    totalSupplyForSku: 5000,
    tokenId: ['1'], // 161759680002904413453829915230439668421958047901187291913792480417612
    tokenPricePerChest: ['25000000000000000000'],
    startTimestamp: 1647565200, // mar 18 => 9 am hkt = 1.00 am GMT, = 1647565200
    endTimestamp: 1652835600,
  },
];

const skuCapacity = 100; // Max number of SKUs that can be stored in sales contract
const tokensPerSkuCapacity = 1; // Max number of tokens to accept payment for each SKU
const metadataUri = 'https://ipfs.io/ipfs/QmXSLxhNvAyT4FsuhwGrzinBcZqwBbXWzaUcR4boKPpnyY/';

const excludeApeCoinDeployment = true;
const ApeCoinTokenDeployed = {
  1: '0x4d224452801ACEd8B2F0aebE155379bb5D594381',
};

module.exports = {
  SkuSaleDetails,
  skuCapacity,
  tokensPerSkuCapacity,
  metadataUri,
  excludeApeCoinDeployment,
  ApeCoinTokenDeployed,
};
