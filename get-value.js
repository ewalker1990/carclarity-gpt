export default async function handler(req, res) {
  const { year, make, model } = req.query;

  try {
    const response = await fetch(`https://www.carsxe.com/api/v1/vehicle-market-value?key=sj43l9azz_ad448mmj3_wql0gbhxm&year=${year}&make=${make}&model=${model}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch from CarsXE API.' });
  }
}
