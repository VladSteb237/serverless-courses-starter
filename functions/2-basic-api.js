const items = require("../assets/data");

exports.handler = async (event, context, cb) => {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    statusCode: 200,
    //body: "Ours Basic API EXAMPLE Example!",
    body: JSON.stringify(items),
  };
};
