exports.handler = function(event, context, callback) {
   test = "this is a test"
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(test)
  });
};
