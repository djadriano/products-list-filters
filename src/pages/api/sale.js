import ApiData from '@/data/sale.json';

export default (req, res) => {
  res.statusCode = 200
  res.json(ApiData)
}
