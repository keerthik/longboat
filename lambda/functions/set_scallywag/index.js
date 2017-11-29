const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

/* Sets or creates a new Scallywag */
const UUID = () => {
    return String(Math.floor(Math.random() * 0x100000));
};

// TODO: Add user flow types here
// TODO: get some ES6 in here and spread the Item to allow for arbitrary params
exports.handle = (event, context, callback) => {
    const user = event.user;
    const params = {
        TableName: user.house,
        Item: user
    };

    console.log(`Putting event: ${JSON.stringify(params)}`);

    docClient.put(params, (err, data) => {
        if (err) {
            callback (err, null);
            console.log(err);
        } else {
            callback(null, params.Item);
        }
    });
};
