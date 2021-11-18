import * as AWS from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

abstract class DynamoDBClient {
  public client: DocumentClient;
  private config = {};

  constructor() {
    if (process.env.IS_OFFLINE) {
      this.config = {
        region: process.env.DYNAMO_DB_REGION,
        accessKeyId: 'xxxx',
        secretAccessKey: 'xxxx',
        endpoint: process.env.DYNAMO_DB_ENDPOINT,
      };
    }

    this.client = new AWS.DynamoDB.DocumentClient(this.config);
  }
}

export default DynamoDBClient;
