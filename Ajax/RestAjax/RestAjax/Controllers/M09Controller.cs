using Microsoft.AspNetCore.Mvc;

namespace RestAjax.Controllers
{
    public class M09Controller : Controller
    {
        public IActionResult XhrJson()
        {
            return View();
        }
    }
}