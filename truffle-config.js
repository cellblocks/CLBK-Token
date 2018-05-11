var HDWalletProvider = require("truffle-hdwallet-provider")

var mnemonic = ""




module.exports = {
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
     ropsten:  {
     provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"),
     network_id: 3,
     //host: "localhost",
     //port:  8545,
     gas:   2000000
     }
    }
  };
