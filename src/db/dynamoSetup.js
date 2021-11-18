// eslint-disable-next-line @typescript-eslint/no-var-requires
const AWS = require('aws-sdk');

AWS.config.update({
  region: 'localhost',
  endpoint: 'http://localhost:5003',
  accessKeyId: 'xxxx',
  secretAccessKey: 'xxxx',
});

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: 'Locations',
  KeySchema: [{ AttributeName: 'locationId', KeyType: 'HASH' }],
  AttributeDefinitions: [{ AttributeName: 'locationId', AttributeType: 'S' }],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10,
  },
};

dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.error('Unable to create table. Error JSON:', JSON.stringify(err, null, 2));
  } else {
    console.log('Created table. Table description JSON:', JSON.stringify(data, null, 2));
  }
});
