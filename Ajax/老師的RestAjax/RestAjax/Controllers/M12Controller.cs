using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace RestAjax.Controllers
{
    public class M12Controller : Controller
    {
        public JsonResult UploadOneFile(IFormFile photo)
        {
            if (photo.Length > 0)
            {
                return Json(new { result = true, msg = "上傳成功" });
            }
            return Json(new { result = false, msg = "上傳失敗" });
        }
        public IActionResult FetchJson()
        {
            return View();
        }
        public IActionResult FetchUpload()
        {
            return View();
        }
    }
}