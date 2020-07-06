import ApiData from '@/data/products.json';

export default (req, res) => {
  res.statusCode = 200
  res.json(ApiData)
}
