$(function(){

    context = new Context();

    // Icons Init
    feather.replace();

    var vm = new Vue({
        el: '#SettingsDiv',
        data: {
            config:context.config,
            apiid: "",
            secret: ""
        },
        methods: {
            saveSettings: function(event) {
                context.storage.add("apiid", this.apiid);
                context.storage.add("secret", this.secret);
                context.storage.sync(function () {
                    console.log("print current storage info:");
                    console.log(context.storage.storage);
                });
            }
        }
    })

    /*
    coinbene = new Coinbene("put your apiid key", "put your secret key");
    Coinbene.setDivMessage("main_div", coinbene.ticker("ziberusdt"));
    Coinbene.setDivMessage("main_div", coinbene.orderbook("ziberusdt"));
    Coinbene.setDivMessage("main_div", coinbene.trades("ziberusdt"));
    Coinbene.setDivMessage("main_div", coinbene.balance());
    Coinbene.setDivMessage("main_div", coinbene.place("ziberusdt", "sell-limit", 10000.00, 1.000));
    Coinbene.setDivMessage("main_div", coinbene.ordersinfo("ziberusdt"));
    Coinbene.setDivMessage("main_div", coinbene.info("S180418185128711694601"));
    Coinbene.setDivMessage("main_div", coinbene.cancel("S180418185128711694601"));
    */
});
