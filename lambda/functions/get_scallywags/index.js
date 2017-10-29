const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

// TODO: Get some `async` sexy in dis 
exports.handle = (event, context, callback) => {
    if (event.user.UUID) {
        // Get individual scallywag
        docClient.get({
            TableName: event.user.house,
            Key: {
                UUID: event.user.UUID
            }
        }, (err, data) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, data);
            }
        }); 
    } else {
        // Get all scallywags
        docClient.scan({TableName: event.user.house}, (err, data) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, data);
            }
        });
    }
};