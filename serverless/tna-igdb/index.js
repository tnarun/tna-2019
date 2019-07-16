var getRawBody = require('raw-body');
var getFormBody = require('body/form');
var body = require('body');

const respJSON = require('./utils/respJSON')

const igdb = require('igdb-api-node').default
const client = igdb('acf0026d4f022063241d630980bf18be')

const util = require('util')

const test = async () => {
  const response = await client
    .fields('*')
    .limit(50)
    .search('mario odyssey')
    .request('/games')

    // .fields(['name', 'movies', 'age']) // fetches only the name, movies, and age fields
    // .fields('name,movies,age') // same as above

    // .limit(50) // limit to 50 results
    // .offset(10) // offset results by 10

    // .sort('name') // default sort direction is 'asc' (ascending)
    // .sort('name', 'desc') // sorts by name, descending
    // .search('mario') // search for a specific name (search implementations can vary)

    // .where(`first_release_date > ${new Date().getTime() / 1000}`) // filter the results

    // .request('/games'); // execute the query and return a response object

  console.log(response.data);

  return response
}

module.exports.handler = (req, resp, context) => {
  let params = {
    path: req.path,
    queries: req.queries,
    headers: req.headers,
    method : req.method,
    requestURI : req.url,
    clientIP : req.clientIP,
  }

  test()
    .then(res => {
      respJSON(resp, { data: res.data })
    })
    .catch(e => {
      respJSON(resp, { error: util.inspect(e).split(`\n`) })
    })
}

// module.exports.handler = function(req, resp, context) {
//     console.log('hello world');

//     var params = {
//         path: req.path,
//         queries: req.queries,
//         headers: req.headers,
//         method : req.method,
//         requestURI : req.url,
//         clientIP : req.clientIP,
//     }
        
//     getRawBody(req, function(err, body) {
//         for (var key in req.queries) {
//           var value = req.queries[key];
//           resp.setHeader(key, value);
//         }
//         params.body = body.toString();
//         resp.send(JSON.stringify(params, null, '    '));
//     }); 
      
//     /*
//     getFormBody(req, function(err, formBody) {
//         for (var key in req.queries) {
//           var value = req.queries[key];
//           resp.setHeader(key, value);
//         }
//         params.body = formBody;
//         console.log(formBody);
//         resp.send(JSON.stringify(params));
//     }); 
//     */
// }