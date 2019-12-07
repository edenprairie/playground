using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.JSInterop;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Radzen;
using Radzen.Blazor;
using RadzenApp.Models.PizzaShop;

namespace RadzenApp.Pages
{
    public partial class OrdersComponent : ComponentBase
    {
        [Parameter(CaptureUnmatchedValues = true)]
        public IReadOnlyDictionary<string, dynamic> Attributes { get; set; }

        [Inject]
        protected IJSRuntime JSRuntime { get; set; }

        [Inject]
        protected NavigationManager UriHelper { get; set; }

        [Inject]
        protected DialogService DialogService { get; set; }

        [Inject]
        protected NotificationService NotificationService { get; set; }
        [Inject]
        protected PizzaShopService PizzaShop { get; set; }


        protected RadzenGrid<RadzenApp.Models.PizzaShop.Order> grid0;

        dynamic _orders;
        protected dynamic orders
        {
            get
            {
                return _orders;
            }
            set
            {
                if(_orders != value)
                {
                    _orders = value;
                    InvokeAsync(() => { StateHasChanged(); });
                }
            }
        }

        protected override async System.Threading.Tasks.Task OnInitializedAsync()
        {
            Load();
        }

        protected async void Load()
        {
            var pizzaShopGetOrdersResult = await PizzaShop.GetOrders();
            orders = pizzaShopGetOrdersResult;
        }
    }
}
