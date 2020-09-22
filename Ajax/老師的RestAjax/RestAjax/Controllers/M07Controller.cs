using Microsoft.AspNetCore.Mvc;

namespace RestAjax.Controllers
{
    public class M07Controller : Controller
    {
        public string NameCity(string name, string city)
        {
            string result = "Dear " + name + "<br>";
            result += "Hope you live well in " + city;
            return result;
        }
        public IActionResult XhrGetSync()
        {
            return View();
        }
        public IActionResult XhrGetAsync1()
        {
            return View();
        }
        public IActionResult XhrPost()
        {
            return View();
        }
    }
}