using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Net;

namespace RestAjax.Controllers
{
    public class M16Controller : Controller
    {
        public readonly string RSS_URL = @"http://rss.cnn.com/rss/edition_world.rss";

        public IActionResult ReadRss()
        {
            try
            {
                var webRequest = WebRequest.Create(RSS_URL);
                var reader = new StreamReader(
                    webRequest.GetResponse().GetResponseStream());
                var strContent = reader.ReadToEnd();

                return Content(strContent, "text/xml");
            }
            catch (Exception ex)
            {
                return Content("", "text/xml");
            }
        }
        public IActionResult Rss()
        {
            return View();
        }  
    }
}