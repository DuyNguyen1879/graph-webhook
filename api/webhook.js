export default function handler(req, res) {
  // Trả về validationToken nếu có
  if (req.method === "GET" && req.query.validationToken) {
    return res.status(200).send(req.query.validationToken);
  }

  // Nhận notification từ Microsoft Graph
  if (req.method === "POST") {
    console.log("🔔 Notification received:", JSON.stringify(req.body, null, 2));
    return res.status(202).end(); // 202 Accepted
  }

  return res.status(405).send("Method Not Allowed");
}
