const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    debugger;
    try {
        let data = await s3.listObjects({
            Bucket: "qraldemo",
            MaxKeys: 10
        }).promise();
        console.log(data);

    } catch (err) {
        console.log(err);
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};