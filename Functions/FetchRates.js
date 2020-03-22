const fetch = require('node-fetch');
exports.handler = async event => {
  event = event || {};
  const id = event.queryStringParameters.id || "ARS";
  let result = await getRatesAsync(id)
  
   return {
        statusCode: 200,
        body: JSON.stringify(result),
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Content-Type': 'application/json'
        }
      };
 
}
async function getRatesAsync(id) 
{
  let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${id}`);
  let data = await response.json()
  return data;
}
