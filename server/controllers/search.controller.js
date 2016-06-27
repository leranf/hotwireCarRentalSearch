import rp from 'request-promise';
import parser from 'xml2json';

export function carSearch(req, res) {
  const options = {
    uri: 'http://api.hotwire.com/v1/search/car',
    qs: {
      apikey: 'pt9hmnp4ngx64vaqtck2hxn3', // -> uri + '?apikey=xxxxx'
      dest: req.body.location,
      startdate: req.body.startDate,
      enddate: req.body.endDate,
      pickuptime: req.body.pickUpTime,
      dropofftime: req.body.dropOffTime,
    },
  };
  return rp(options)
    .then(results => {
      const jsonStringResults = parser.toJson(results);
      const jsonResults = JSON.parse(jsonStringResults);
      const carTypes = jsonResults.Hotwire.MetaData.CarMetaData.CarTypes.CarType;
      const carResults = jsonResults.Hotwire.Result.CarResult;
      res.json({ carTypes, carResults });
    })
    .catch(() => {
      res.status(400).send('Something broke!');
    });
}
