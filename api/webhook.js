export default async function handler(req, res) {
  // ✅ Nếu có validationToken (lúc tạo subscription)
  if (req.method === 'GET' && req.query.validationToken) {
    const token = req.query.validationToken;
    res.status(200).send(token); // ⬅️ phải trả về đúng token dưới dạng plain text
    return;
  }

  // ✅ Khi có mail mới (notification POST)
  if (req.method === 'POST') {
    console.log("📩 Notification received:", JSON.stringify(req.body, null, 2));
    res.status(202).end(); // Microsoft yêu cầu mã 202 để xác nhận nhận thông báo
    return;
  }

  // ❌ Các method khác (không hỗ trợ)
  res.status(405).send("Method Not Allowed");
}
