using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using web_mvc.Helpers;
using web_mvc.Models.Pools;

namespace web_mvc.Controllers
{
    public class PoolController : Controller
    {
        private readonly StakeFarm _stakeFarm;

        public PoolController
        (
            IOptions<StakeFarm> stakeFarmOptions
        )
        {
            _stakeFarm = stakeFarmOptions.Value;
        }

        public IActionResult Index(string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                return RedirectToAction("Index", "Home");
            }

            var selectedPool =
                _stakeFarm.GenericPools.FirstOrDefault(x =>
                    x.ContractAddress.Equals(id, StringComparison.OrdinalIgnoreCase));

            if (selectedPool == null)
            {
                return RedirectToAction("Index", "Home");
            }

            if (DateTime.UtcNow < DateTimeHelper.UnixTimeStampToDateTime(selectedPool.AvailableAt))
            {
                return RedirectToAction("Index", "Home");
            }

            return View(selectedPool);
        }

        public IActionResult StakeForm()
        {
            //if (DateTime.UtcNow < DateTimeHelper.UnixTimeStampToDateTime(_pool1Settings.AvailableAt))
            //{
            //    return RedirectToAction("Index", "Home");
            //}

            return PartialView("_StakeForm");
        }
    }
}