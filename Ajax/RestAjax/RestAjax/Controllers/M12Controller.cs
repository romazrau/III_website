using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;


namespace RestAjax.Controllers
{
    public class M12Controller : Controller
    {

        private readonly IHostingEnvironment _hostingEnvironment;

        public M12Controller(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }


        public JsonResult UploadOneFile(IFormFile photo)
        {

            if (photo.Length > 0)
            {

                //取得檔名 
                string name = photo.FileName;

                //取亂數 
                string random = Guid.NewGuid().ToString();
                string photoName = random + name;  //

                string webRootPath = _hostingEnvironment.WebRootPath +"\\"+ photoName;


                //儲存檔案到指定位置  
                var stream = new FileStream(webRootPath, FileMode.Create);
                //var stream = new FileStream(photo.FileName, FileMode.Create);
                photo.CopyTo(stream);
                stream.Close();


                return Json(new { result = true, msg = webRootPath });
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