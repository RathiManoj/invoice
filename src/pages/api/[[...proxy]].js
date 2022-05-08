
export default async function ProxyAPI(req, res) {

  let url = createProxyUrlFromQuery(req.query);
  const noBody = ["GET", "HEAD"]

  const response = await fetch(`${process.env.API_URL}/${url}`, {
    method: req.method,
    headers: {
      'Content-Type': req.headers["content-type"],
    },
    body: noBody.includes(req.method)
      ? null
      : (typeof req.body) === "string"
        ? req.body
        : JSON.stringify(req.body)
  });

  const data = await response.json()
  res.status(response.status).json(data);
}

function createProxyUrlFromQuery(query) {
  const { proxy } = query;
  const url = proxy ?
    proxy.reduce((acc, curr) => {
      return acc + curr + "/";
    }, "")
    : "";
  // console.log(`url: ${url}`);
  return url;
}