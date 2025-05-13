export default function handler(req, res) {
  if (req.method === 'GET' && req.query.validationToken) {
    return res.status(200).send(req.query.validationToken);
  }

  if (req.method === 'POST') {
    console.log("📨 New notification:", JSON.stringify(req.body, null, 2));
    return res.status(202).end(); // Graph API yêu cầu 202 để chấp nhận
  }

  return res.status(405).end();
}
