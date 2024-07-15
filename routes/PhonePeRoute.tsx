import express, { Router, Request, Response } from 'express';
import crypto from 'crypto';
import axios from 'axios';

const router: Router = express.Router();

function generateTransactionID(): string {
  const timestamp: number = Date.now();
  const randomNum: number = Math.floor(Math.random() * 1000000);
  const merchantPrefix: string = 'T';
  const transactionID: string = `${merchantPrefix}${timestamp}${randomNum}`;
  return transactionID;
}

// Payment route
router.post("/payment", async (req: Request, res: Response) => {
  try {
    const { name, number, email, amount } = req.body;
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
    
    const payload: string = JSON.stringify(data);
    const payloadMain: string = Buffer.from(payload).toString('base64');
    const key: string = '099eb0cd-02cf-4e2a-8aca-3e66aff0399';
    const keyIndex: number = 1;
    const string: string = payloadMain + '/pg/v1/pay' + key;
    const sha256: string = crypto.createHash('sha256').update(string).digest('hex');
    const checksum: string = sha256 + '###' + keyIndex;
    
    const URL: string = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

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

    const response = await axios.request(options);
    return res.status(200).send(response.data.data.instrumentResponse.redirectInfo.url);
  } catch (error: any) {
    res.status(500).send({
      message: error.message,
      success: false
    });
  }
});

// Payment status route
router.post('/status', async(req: Request, res: Response) => {
  try {
    const merchantTransactionId: string = req.body.transactionId;
    const merchantId: string = req.body.merchantId;
    const keyIndex: number = 1;
    const key: string = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';
    const string: string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + key;
    const sha256: string = crypto.createHash('sha256').update(string).digest('hex');
    const checksum: string = sha256 + "###" + keyIndex;

    const URL: string = `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`;
  
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

    const response = await axios.request(options);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
});

export default router;
