using Microsoft.AspNetCore.Mvc;
using System;
using System.Data;
using System.Data.SqlClient;

namespace RestAjax.Controllers
{
    public class M15Controller : Controller
    {
        public bool CheckAccount(string cname)
        {
            try
            {
                // step 1 . using System.Data.SqlClient;

                // step 2 . 宣告連接字串

                string Constr = @"Persist Security Info=False;Integrated Security=true;
                     Initial Catalog=ajaxdb;Server=.\";

                // step 3 . 建立SqlConnection
                SqlConnection conn = new SqlConnection(Constr);

                // step 4 . 宣告查詢字串
                string Sqlstr = "select cname from customer where cname = '" + cname +"'";

                // step 5. 建立SqlDataAdapter
                SqlDataAdapter da = new SqlDataAdapter(Sqlstr, conn);

                // step 6. 建立DataSet來儲存Table
                DataSet ds = new DataSet();

                // step 7. 將DataAdapter查詢之後的結果，填充至DataSet
                da.Fill(ds);

                // step 8 . 用DataGridView1 顯示出來

                return ds.Tables[0].Rows.Count > 0;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public IActionResult CheckAcc()
        {
            return View();
        }  
    }
}