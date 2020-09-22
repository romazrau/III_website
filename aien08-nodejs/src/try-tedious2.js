// 參考資源
// https://docs.microsoft.com/zh-tw/sql/linux/quickstart-install-connect-docker?view=sql-server-ver15&pivots=cs1-bash
// https://docs.microsoft.com/zh-tw/sql/connect/node-js/step-3-proof-of-concept-connecting-to-sql-using-node-js?view=sql-server-ver15

var Connection = require("tedious").Connection;
var Request = require("tedious").Request;
var config = {
    server: "localhost",
    authentication: {
        type: "default",
        options: {
            userName: "sa",
            password: "Passw0rd",
        },
    },
    options: {
        encrypt: false, // If you are on Microsoft Azure, you need encryption:
        database: "TestDB",
    },
};
var connection = new Connection(config);
connection.on("connect", function (err) {
    if (!err) {
        console.log("Connected");
        execSelect("SELECT * FROM Inventory")
            .then(results=>{
                console.log(results);
            });
    } else {
        console.log(err);
    }
});

function execSelect(sql) {
    return new Promise((resolve, reject)=>{
        const results = {
            rows: []
        };
        const request = new Request(sql, function (err, rowCount) {
            if (err) {
                console.log(err);
                results.error = err;
            } else {
                results.rowCount = rowCount;
            }
            resolve(results);
        });
        request.on('row', function (columns) {
            const row = {};
            columns.forEach(function (column) {
                row[column.metadata.colName] = column.value;
            });
            results.rows.push(row);
        });

        connection.execSql(request);
    });
}




