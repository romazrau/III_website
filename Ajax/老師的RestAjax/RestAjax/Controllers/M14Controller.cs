using Microsoft.AspNetCore.Mvc;

namespace RestAjax.Controllers
{
    public class M14Controller : Controller
    {
        public string NameCity(string name, string city)
        {
            string result = "Dear " + name + "<br>";
            result += "Hope you live well in " + city;
            return result;
        }
        public IActionResult JQuerySerialize()
        {
            return View();
        }
        public IActionResult LoadingImage()
        {
            return View();
        }        
    }
}