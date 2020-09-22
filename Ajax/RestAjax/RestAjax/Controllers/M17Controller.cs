using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace RestAjax.Controllers
{
    public class M17Controller : Controller
    {
        public readonly string[] names = {"Anna","Brittany","Cinderella",
            "Diana","Eva","Fiona","Gunda","Hege","Inga","Johanna","Kitty",
            "Linda","Nina","Ophelia","Petunia","Amanda","Raquel","Cindy",
            "Doris","Eve","Evita","Sunniva","Tove","Unni","Violet","Liza",
            "Elizabeth","Ellen","Wenche","Vicky"};

        public string GetAutoComplete(string qstr)
        {
            if (string.IsNullOrEmpty(qstr)) return "no suggestion";
            
            qstr = qstr.ToLower();
            List<string> result = new List<string>();
            foreach (string name in names)
            {
                if (name.ToLower().Contains(qstr)) result.Add(name);
            }
            return result.Count == 0 ? "no suggestion" : string.Join(',', result);
            /*
            string result = string.Join(',', names.Where(
                name => name.ToLower().Contains(qstr.ToLower())).ToList());
            return result == "" ? "no suggestion" : result;
            */
        }
        public IActionResult AutoComplete()
        {
            return View();
        }  
    }
}