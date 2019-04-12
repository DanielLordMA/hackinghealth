﻿using System;
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
        public ActionResult Index(string error = "")
        {
            ViewBag.error = error;
            return View();
        }

        public ActionResult Tag(string tag = "")
        {
            if( tag != "3A3F62CA-F43A-46BB-B9EF-1F3F0C7B45F2")
            {
                ViewBag.error = "Invalid Tag";
                return View("Index");

            }
            ViewBag.Key = "3A3F62CA-F43A-46BB-B9EF-1F3F0C7B45F2";
            return View("ValidateMember");

        }

        [HttpPost]
        public ActionResult Member(string memberId, string Key)
        {



            //ViewBag.MemberId = memberId;
            ////196209

            //ViewBag.Result = GET("http://test.healthintersections.com.au/medicalert/Patient/" + memberId + "/$everything");
            //if (((string)ViewBag.Result).StartsWith("Error")){
            //    return RedirectToAction("Index",new{ error = (string)ViewBag.Result});
            //}

            //ViewBag.JsonData = System.Web.Helpers.Json.Decode(ViewBag.Result);

            //ViewBag.Member = ((IEnumerable<dynamic>)ViewBag.JsonData.entry).Where(d => d.resource.resourceType == "Patient").DefaultIfEmpty(new { resource = new { } }).Select(d => d.resource).First();
            //ViewBag.Conditions = ((IEnumerable<dynamic>)ViewBag.JsonData.entry).Where(d => d.resource.resourceType == "Condition").Select(d => d.resource);
            //ViewBag.AllergyIntolerance = ((IEnumerable<dynamic>)ViewBag.JsonData.entry).Where(d => d.resource.resourceType == "AllergyIntolerance").Select(d => d.resource);
            //ViewBag.MedicationStatement = ((IEnumerable<dynamic>)ViewBag.JsonData.entry).Where(d => d.resource.resourceType == "MedicationStatement").Select(d => d.resource);
            //ViewBag.BloodGroup = ((IEnumerable<dynamic>)ViewBag.JsonData.entry).Where(d => d.resource.resourceType == "Observation").DefaultIfEmpty(new { resource = new { valueString = "unknown"} }).Select(d => d.resource).FirstOrDefault().valueString ;
            ////if(ViewBag.Memberid = "28765")
            ////{
            ////    //ViewBag.BloodGroup = 
            ////}
            ////ViewBag.critical = ((IEnumerable<dynamic>)ViewBag.JsonData.entry).Where(d => d.resource.category.coding.system == "http://hl7.org/fhir/ValueSet/allergy-intolerance-criticality" && d.resource.category.coding.).DefaultIfEmpty(new { resource = new { valueString = "unknown" } }).Select(d => d.resource).FirstOrDefault().valueString;


            //ViewBag.MemberId = Identifier(ViewBag.Member.Identifier, "http://medicalert.nz/member-id");
            //ViewBag.MemberNHI = Identifier(ViewBag.Member.Identifier, "http://health.govt.nz/nhi");
            //ViewBag.MemberIHI = Identifier(ViewBag.Member.Identifier, "http://health.govt.au/IHI");

            if(memberId == "28765" && Key == "3A3F62CA-F43A-46BB-B9EF-1F3F0C7B45F2")
            {
                ViewBag.error = "";
                return View();
            }
            else
            {
                ViewBag.error = "Invalid Member Id for that tag";
                return View("Index");
            }

        }


        string GET(string url)
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            request.Method = "GET";
            request.Accept = "application/json+fhir";
            request.Headers.Add("Cache-Control: no-cache");
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
                return "Error - no member found with That ID";
            }
        }

        dynamic Entry(dynamic data, string entryName)
        {
            return ((IEnumerable<dynamic>)data.entry).Where(d => d.resource.resourceType == entryName).DefaultIfEmpty(new { resource = new { } }).Select(d => d.resource);
        }

        string Identifier(dynamic data, string system)
        {
            return ((IEnumerable<dynamic>)data).Where(d => d.system == system).DefaultIfEmpty(new { value = "" }).FirstOrDefault().value ?? "";
        }


    }
}