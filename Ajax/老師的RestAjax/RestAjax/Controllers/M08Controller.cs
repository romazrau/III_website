using Microsoft.AspNetCore.Mvc;

namespace RestAjax.Controllers
{
    public class M08Controller : Controller
    {
        public IActionResult XhrXml()
        {
            return View();
        }
    }
}