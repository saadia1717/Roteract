using Microsoft.AspNetCore.Mvc;

namespace Roteract.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventsController : ControllerBase
    {
        [HttpGet(Name = "GetEvent")]
        public int Get()
        {
            return 1;
        }
    }
}
