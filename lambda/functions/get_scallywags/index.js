const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

// TODO: Get some `async` sexy in dis 
exports.handle = (event, context, callback) => {
    const params = {
        TableName: 'longboat'
    };

    docClient.scan(params, (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
};