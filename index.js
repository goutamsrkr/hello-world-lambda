exports.handler = async function(event, context) {
    const response = {
        statusCode: 200,
        body: JSON.stringify('***  Hello World from Lambda!')
    };
    return response;
};
