/*exports.handler = function(event, context, callback) {
  
   test = "this is a test"
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(test)
  });
};*/
 //parameter
  exports.handler = async event => {
    const user = netlifyIdentity.currentUser();
     // const querystring = event.queryStringParameters;
   //  const boopee = querystring.boopee || 'a friend';
     const boopee = user.user_metadata.fullname;
         return {
      statusCode: 200,
      body: `You booped ${boopee} on the nose. Boop!`,
    };
  };
