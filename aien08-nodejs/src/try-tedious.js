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
        executeStatement();
    } else {
        console.log(err);
    }
});

function executeStatement() {
    const request = new Request("SELECT * FROM Inventory", function (err, rowCount) {
        if (err) {
            console.log(err);
        } else {
            console.log(rowCount + " rows");
        }
    });

    request.on("row", function (columns) {
        columns.forEach(function (column) {
            console.log(column.metadata.colName, column.value);
        });
    });

    connection.execSql(request);
}



