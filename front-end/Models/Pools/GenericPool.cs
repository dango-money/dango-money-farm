﻿using web_mvc.Options;

namespace web_mvc.Models.Pools
{
    public class GenericPool
    {
        public string Name { get; set; }
        public string Icon { get; set; }
        public string ContractAddress { get; set; }
        public string Abi { get; set; }
        public decimal TransactionFee { get; set; }
        public double AvailableAt { get; set; }
        public double PoolDurationHours { get; set; }
        public double PoolReward { get; set; }
        public string Lifetime { get; set; }
        public string DepositFee { get; set; }
        public bool Visible { get; set; }
        public bool ComingSoon { get; set; }
        public int Apy { get; set; }
        public Erc20TokenSettings RewardContract { get; set; }
        public Erc20TokenSettings StakeContract { get; set; }
    }
}