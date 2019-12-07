using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace RadzenApp.Models.PizzaShop
{
    public partial class Order
    {
        [JsonPropertyName("createdAt")]
        public Int64? CreatedAt
        {
            get;
            set;
        }

        [JsonPropertyName("name")]
        public string Name
        {
            get;
            set;
        }

        [JsonPropertyName("pizzaFlavor")]
        public string PizzaFlavor
        {
            get;
            set;
        }

        [JsonPropertyName("price")]
        public float? Price
        {
            get;
            set;
        }

        [JsonPropertyName("trackingNumber")]
        public string TrackingNumber
        {
            get;
            set;
        }
    }
}
