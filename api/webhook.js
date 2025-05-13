export default function handler(req, res) {
  // B1: Xác minh webhook từ Microsoft Graph
  if (req.method === "GET" && req.query.validationToken) {
    return res.status(200).send(req.query.validationToken);
  }

  // B2: Xử lý thông báo từ Microsoft Graph (sau khi đã đăng ký)
  if (req.method === "POST") {
    console.log("📩 Notification received:", req.body);
    return res.status(202).end(); // 202 Accepted
  }

  // B3: Nếu không đúng phương thức GET/POST
  return res.status(404).send("Not found");
}
