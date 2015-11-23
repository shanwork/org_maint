using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(org_maint_ui_mvc.Startup))]
namespace org_maint_ui_mvc
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
