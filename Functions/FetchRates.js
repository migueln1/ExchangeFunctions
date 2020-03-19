exports.handler = async event => {
  event = event || {};
  const id = event.queryStringParameters.id || "ARS";
  getRatesAsync(id).then(data => {
      console.log(data)
      return {
        statusCode: 200,
        body: JSON.stringify(data)
      };
    })
    .catch(err=>console.log(err))
 
}
async function getRatesAsync(id) 
{
  let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${id}`);
  let data = await response.json()
  return data;
}
