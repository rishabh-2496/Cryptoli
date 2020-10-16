const KeyManager = require('../lib/keyManager');
const CryptoApi = require("../lib/cryptoliApi");

const check = {
    async price(cmd){
        try{

          const keyManager = new KeyManager();
          const key = keyManager.getKey();

          const api = new CryptoApi(key);

          const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);

          console.log(priceOutputData);
        }catch(err){
            handleAPIError(err)
        }
        
    }
}

module.exports = check;