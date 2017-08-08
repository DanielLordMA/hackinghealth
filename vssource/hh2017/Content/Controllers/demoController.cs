using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Helpers;

namespace hh2017.Controllers
{
    public class demoController : Controller
    {
        // GET: demo
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Member(string memberId)
        {

            ViewBag.MemberId = memberId;

            ViewBag.JsonData = System.Web.Helpers.Json.Decode(GET("http://test.healthintersections.com.au/medicalert/Patient/196209/$everything"));
            ViewBag.Member = ((IEnumerable<dynamic>)ViewBag.JsonData.entry).Where(d => d.resource.resourceType == "Patient").FirstOrDefault().resource;

            return View();
        }


        string GET(string url)
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            request.Method = "GET";
            request.Accept = "application/json+fhir";
            try
            {
                WebResponse response = request.GetResponse();
                using (Stream responseStream = response.GetResponseStream())
                {
                    StreamReader reader = new StreamReader(responseStream, Encoding.UTF8);
                    return reader.ReadToEnd();
                }
            }
            catch (WebException ex)
            {
                WebResponse errorResponse = ex.Response;
                using (Stream responseStream = errorResponse.GetResponseStream())
                {
                    StreamReader reader = new StreamReader(responseStream, Encoding.GetEncoding("utf-8"));
                    String errorText = reader.ReadToEnd();
                    // log errorText
                }
                throw;
            }
        }





    }
}