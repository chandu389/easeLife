var Quandl = require("quandl");
var quandl = new Quandl();

var options = {
    auth_token: "XsC8zgnsmtBChvzWyWo3"
}
quandl.configure(options);

quandl.dataset({
  source: "NSE",
  table: "SBIN"
}, {
  order: "asc",
  exclude_column_names: true,
  // Notice the YYYY-MM-DD format
  limit:1
}, function(err, response){
    if(err)
        throw err;

    console.log(response);
});
