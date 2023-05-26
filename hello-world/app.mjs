/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
import { getOtherPathInfo } from './handlers/other.js';
import { getHelloPathInfo } from './handlers/hello.js';

export const lambdaHandler = async (event, context) => {
    try {
        const { path } = event;
        
        if (path === '/hello') {
            return await getHelloPathInfo(event, context);
        } else if (path === '/other') {
            return await getOtherPathInfo(event, context);
        } else {
            return {
                'statusCode': 404,
                'headers': {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Methods": "OPTIONS,GET,POST,PATCH,DELETE,PUT"
                },
                'body': JSON.stringify({
                    message: 'Not found',
                })
            };
        }
    } catch (err) {
        console.log(err);
        return err;
    }
};
