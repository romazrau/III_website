<%@ Page Language="C#" ContentType="text/html" %>
<%
    if (Request["username"].Equals("hello") && Request["password"].Equals("kitty"))
        Response.Write("{\"status\": \"ok\", \"message\":\"歡迎"+ Request["username"] + "光臨!\"}");
                        //{"status": "ok", "message":"歡迎hello光臨!"}
    else
        Response.Write("{\"status\": \"fail\", \"message\":\"您的登入資訊不正確!\"}");
                        //{"status": "fail", "message":"您的登入資訊不正確!"}
%>

