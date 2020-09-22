var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var xmlDoc = xhttp.responseXML;
        var txt = "<tr><th>書籍名稱</th><th>作者名</th><th>價錢</th></tr>";
        var books = xmlDoc.getElementsByTagName("book");

        [...books].map((e, index) => {
            txt += "<tr>";
            titles = e.getElementsByTagName("title");
            txt += "<td>" + titles[0].firstChild.nodeValue + "</td>";
            authors = e.getElementsByTagName("author");
            txt += "<td>" + authors[0].firstChild.nodeValue + "</td>";
            txt += "</tr>";
        })

        document.getElementById("demo").innerHTML = txt;
    }
}
xhttp.open("GET", "/res/book.xml", true);
xhttp.send();

\

// step 1 . using System.Data.SqlClient;

// step 2 . 宣告連接字串
string Constr = @"Persist Security Info=False;Integrated Security=true;
Initial Catalog = dbLinqDemo; Server =.\";
// step 3 . 建立SqlConnection
SqlConnection conn = new SqlConnection(Constr);
// step 4 . 宣告查詢字串
string Sqlstr = $"select fId from tCustomer where fId = {cname}";
// step 5. 建立SqlDataAdapter
SqlDataAdapter da = new SqlDataAdapter(Sqlstr, conn);
// step 6. 建立DataSet來儲存Table
DataSet ds = new DataSet();
// step 7. 將DataAdapter查詢之後的結果，填充至DataSet
da.Fill(ds);
// step 8 . 用DataGridView1 顯示出來
return ds.Tables[0].Rows.Count > 0;


SeaTurtleOnTheWayEntities db = new SeaTurtleOnTheWayEntities();
var t = from ele in db.tMember
select ele;

try {
    string jsonData = JsonConvert.SerializeObject(t, Formatting.Indented,
        new JsonSerializerSettings
                   {
            PreserveReferencesHandling = PreserveReferencesHandling.Objects
        });

    return jsonData;
}

string con = "Server=.;Database=SeaTurtleOnTheWay;Trusted_Connection=SSPI";
string sql = "select * from [SeaTurtleOnTheWay].[Member].[tMember]";
SqlConnection mycon = new SqlConnection(con);

try {
    mycon.Open();

    SqlDataAdapter myda = new SqlDataAdapter(sql, con);
    DataSet myds = new DataSet();
    myda.Fill(myds, "Member");


    //轉json
    string json = JsonConvert.SerializeObject(myds.Tables["Member"]);
    return json;

}
catch (Exception e)
{
    return $"['錯誤訊息': '{e.Message}']";
}
finally {
    mycon.Close();
}


Session["yoyo"] = "Hiyoyo";//賦值Session["yoyo"]
Session.Timeout = 30;//更改Session過期時間
Session.Remove("yoyo");//移除 Session["yoyo"]的值
Session.RemoveAll();//移除所有Session變數
Session.Clear(); //移除所有Session變數
Session.Abandon();//移除 session 的所有變數，且會觸發 Session_End 事件，把 Session["yoyo"]整個砍了




function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    })
        .then(response => response.json()) // 輸出成 json
}









