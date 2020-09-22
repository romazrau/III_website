using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace RestAjax.Controllers
{
    public class M18Controller : Controller
    {
        public readonly string[] names = {"Anna","Brittany","Cinderella",
            "Diana","Eva","Fiona", "Gunda","Hege","Inga","Johanna","Kitty",
            "Linda","Nina","Ophelia", "Petunia","Amanda","Raquel","Cindy",
            "Doris","Eve","Evita","Sunniva", "Tove","Unni","Violet",
            "Liza","Elizabeth","Ellen","Wenche","Vicky"};

        public string GetAutoComplete()
        {
            return string.Join(',', names);            
        }
        public IActionResult AutoCompleteUI()
        {
            return View();
        }  
    }
}