// domain/.netlify/functions/1-hello

exports.handler = async (event, context, cb) => {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    statusCode: 200,
    body: "Ours first Netlify function example!",
  };
};
