using System;
using System.Collections.Generic;
using System.Web;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

using RadzenApp.Models.PizzaShop;

namespace RadzenApp
{
    public partial class PizzaShopService
    {
        private readonly HttpClient httpClient;
        private readonly Uri baseUri;

        public PizzaShopService()
        {
            this.httpClient = new HttpClient();
            this.baseUri = new Uri("http://localhost:3000/");
        }

        partial void OnGetOrders(HttpRequestMessage requestMessage);

        public async Task<IEnumerable<Order>> GetOrders()
        {
            var uri = new Uri(baseUri, $"orders");

            var message = new HttpRequestMessage(HttpMethod.Get, uri);

            OnGetOrders(message);

            var response = await httpClient.SendAsync(message);

            response.EnsureSuccessStatusCode();

            using (var stream = await response.Content.ReadAsStreamAsync())
            {
                return await JsonSerializer.DeserializeAsync<IEnumerable<Order>>(stream, new JsonSerializerOptions
                {
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                    PropertyNameCaseInsensitive = true,
                });
            }
        }
    }
}
