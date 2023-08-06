
const HDWalletProvider = require("@truffle/hdwallet-provider");
var  MNEMONIC  = 'dice jeans coach disorder acid mesh select alter language antique tone team';


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    sepolia : {
      provider : function()  {
        return new HDWalletProvider(MNEMONIC,"https://sepolia.infura.io/v3/a54e751d4d0a4337a5c9fe1cd85fa62e");
      },

      network_id : "11155111",
      gasPrice : 596180145,
      gas : 4465030
    }
  }
};