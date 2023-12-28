module.exports = async function (context, req) {
    const header = req.headers.get('x-ms-client-principal');
    const encoded = Buffer.from(header, 'base64');
    const decoded = encoded.toString('ascii');
  
    context.res = {
      body: {
        clientPrincipal: JSON.parse(decoded),
      },
    };
  };

  async function getUser() {
    const response = await fetch('/api/user');
    const payload = await response.json();
    const { clientPrincipal } = payload;
    return clientPrincipal;
  }
  
  console.log(await getUser());