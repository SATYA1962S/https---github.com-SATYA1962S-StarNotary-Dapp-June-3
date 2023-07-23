var HDWalletProvider = require(" @truffle/hdwallet-provider");
const  MNEMONIC  =  'dice jeans coach disorder acid mesh select alter language antique tone team';


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    sepolia : {
      provider : function()  {
        return new HDWalletProvider(MNEMONIC, "https ://sepolia.infura.io/ v3/817840b672544d658b7d2e4294a0ca58  ");
      },

      network_id : "*",
      gas : 4000000
    }
  }
};