exports.handler = async event => {
  event = event || {};
  const id = event.queryStringParameters.id || "World";
  let rates = getRatesAsync(id)
  return {
    statusCode: 200,
    body: JSON.stringify(rates)
  };
}
async function getRatesAsync(id) 
{
  let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${id}`);
  let data = await response.json()
  return data;
}
