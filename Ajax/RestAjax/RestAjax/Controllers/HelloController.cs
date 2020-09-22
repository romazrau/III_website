using Microsoft.AspNetCore.Mvc;

namespace RestAjax.Controllers
{
    public class HelloController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public string SayHello(string id)
        {
            string result = "Hello," + id;

            return result;
        }

        public JsonResult SayHello1(string id)
        {
            string result = "Hello," + id;

            return Json(new { result });
        }
    }
}