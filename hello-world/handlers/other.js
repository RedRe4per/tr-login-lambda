async function getOtherPathInfo (event, context) {
    console.log("getOtherPathInfo is called");
    try {
        return {
            'statusCode': 200,
            'headers': {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,GET,POST,PATCH,DELETE,PUT"
            },
            'body': JSON.stringify({
                message: 'Other path response',
            })
        };
    } catch (err) {
        console.log(err);
        return err;
    }
};

module.exports = {
    getOtherPathInfo
}
