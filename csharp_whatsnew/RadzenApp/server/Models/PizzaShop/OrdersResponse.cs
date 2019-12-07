using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace RadzenApp.Models.PizzaShop
{
    public partial class OrdersResponse
    {
        [JsonPropertyName("orders")]
        public Order Orders
        {
            get;
            set;
        }
    }
}
