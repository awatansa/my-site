export default function handler(req, res) {
  const data = { author: "Awatansa Vishwakarma", msg: "It is a great Day" };
  res.status(200).json(data);
}