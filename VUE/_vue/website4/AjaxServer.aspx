<%@ Page Language="C#" ContentType="text/html" %>
<%
    if (Request["username"] == "nancy" && Request["password"] == "davolio" )
        Response.Write("{\"status\":\"pass\", \"username\":\"" + Request["username"] +"\"}");
                //例如: {"status":"pass", "username":"nancy"}
    else
        Response.Write("{\"status\":\"fail\"}");
                //例如: {"status":"fail"}
%>

