using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Threading;

public partial class MSITJSLab_Lab07_get : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Thread.Sleep(5000);
        //string str = Request.QueryString["name"];
        //string str = Request.Form["name"];        
        string name = Request.Params["name"];
        string age = Request.Params["age"];
        Response.Write("Hello "+name+",You are "+age+" years old.");
    }
}