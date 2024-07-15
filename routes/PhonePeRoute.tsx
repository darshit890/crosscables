import express from 'express'
const router = express.Router();
const crypto = require('crypto');
const axios = require('axios');

function generateTransactionID() {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 1000000);
    const merchantPrefix = 'T';
    const transactionID = `${merchantPrefix}${timestamp}${randomNum}`;
    return transactionID;
  }
  
  // payment route
  router.post("/payment", async (req, res) => {
    try {
      const { name, number, email,  amount } = req.body;
      const data = {
        merchantId: 'PGTESTPAYUAT',
        merchantTransactionId: generateTransactionID(),
        merchantUserId: 'MUID9EFW8E9F89EWF8C',
        name: name,
        email: email,
        amount: 100 * 100,
        redirectUrl: 'http://localhost:5000/api/phonepe/status',
        redirectMode: 'POST',
        mobileNumber: number,
        paymentInstrument: {
          type: 'PAY_PAGE'
        }
      };
      const payload = JSON.stringify(data);
      const payloadMain = Buffer.from(payload).toString('base64');
      const key = '099eb0cd-02cf-4e2a-8aca-3e66aff0399';
      const keyIndex = 1;
      const string = payloadMain + '/pg/v1/pay' + key;
      const sha256 = crypto.createHash('sha256').update(string).digest('hex');
      const checksum = sha256 + '###' + keyIndex;
      
      const URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";
      // const URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay"
      
      const options = {
        method: 'POST',
        url: URL,
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          'X-VERIFY': checksum
        },
        data: {
          request: payloadMain
        }
      };
    
        axios
        .request(options)
        .then(function (response: { data: { data: { instrumentResponse: { redirectInfo: { url: any; }; }; }; }; }) {
            return res.status(200).send(response.data.data.instrumentResponse.redirectInfo.url);
        })
        .catch(function (error: any) {
            console.error(error);
        });

    } catch (error: any) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }

});

// payment status
router.post('/status', async(req, res) => {
    return console.log(res.req.body)
    const merchantTransactionId = res.req.body.transactionId
    const merchantId = res.req.body.merchantId
    const keyIndex = 1;
    const key = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';
    const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + key;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = sha256 + "###" + keyIndex;
  
    const URL = `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`
    // const URL = `https://api.phonepe.com/apis/hermes/pg/v1/status/MIWWAHTN866I/${merchantTransactionId}`
    const options = {
      method: 'GET',
      url: URL,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-VERIFY': checksum,
        'X-MERCHANT-ID': merchantId
      }
    };

    // CHECK PAYMENT TATUS
    axios
    .request(options)
    .then(async(response: any) => {
        console.log(response)
    })
    .catch((error: any) => {
        console.error(error);
    });
});
  
module.exports = router;
