using Microsoft.AspNetCore.Mvc;

namespace RestAjax.Controllers
{
    public class M11Controller : Controller
    {
        public IActionResult PromiseResolve()
        {
            return View();
        }
        public IActionResult PromiseReject()
        {
            return View();
        }
    }
}