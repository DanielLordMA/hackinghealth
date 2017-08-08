using System.Web;
using System.Web.Optimization;

namespace hh2017
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/glo").Include(
                        "~/Scripts/vendor/modernizr-custom-3.3.1-min.js",
                        "~/Scripts/global-min.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/style.css"));
        }
    }
}
