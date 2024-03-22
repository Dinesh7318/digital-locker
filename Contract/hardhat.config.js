require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/GxA0-iF_T4fQIm1DJX1KVrjBoYcjp_aE",
      accounts: [
        "4c6ae7fe27dc3e1838c4d21a4cd958ff60d4768b8edd2806f26b24468c34c214",
      ],
    },
  },
};
