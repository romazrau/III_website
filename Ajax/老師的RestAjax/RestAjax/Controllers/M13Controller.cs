using Microsoft.AspNetCore.Mvc;

namespace RestAjax.Controllers
{
    public class M13Controller : Controller
    {
        public string NameCity(string name, string city)
        {
            string result = "Dear " + name + "<br>";
            result += "Hope you live well in " + city;
            return result;
        }
        public IActionResult JQueryGet()
        {
            return View();
        }
        public IActionResult JQueryPost()
        {
            return View();
        }        
        public IActionResult JQueryLoad()
        {
            return View();
        }
        public IActionResult JQueryGetJson()
        {
            return View();
        }
    }
}