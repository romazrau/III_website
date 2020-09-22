using Microsoft.AspNetCore.Mvc;

namespace RestAjax.Controllers
{
    public class M05Controller : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public string SayHello(string id)
        {
            string result = "Hello, " + id;
            return result;
        }
    }
}