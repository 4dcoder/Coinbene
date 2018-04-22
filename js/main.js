$(function(){

    var coinbeneStorage = new CoinbeneStorage((storage) => {

        if ((storage["username"] == undefined || storage["username_key"] != md5(storage["username"])) 
            || (storage["password"] == undefined || storage["username_key"] != md5(storage["username"]))) {
            window.location.href = "login.html";
        }

    });

    // Icons Init
    feather.replace();

    coinbene = new Coinbene("put your apiid key", "put your secret key");
    Coinbene.setDivMessage("main_div", coinbene.ticker("ziberusdt"));
    Coinbene.setDivMessage("main_div", coinbene.orderbook("ziberusdt"));
    Coinbene.setDivMessage("main_div", coinbene.trades("ziberusdt"));
    Coinbene.setDivMessage("main_div", coinbene.balance());
    Coinbene.setDivMessage("main_div", coinbene.place("ziberusdt", "sell-limit", 10000.00, 1.000));
    Coinbene.setDivMessage("main_div", coinbene.ordersinfo("ziberusdt"));
    Coinbene.setDivMessage("main_div", coinbene.info("S180418185128711694601"));
    Coinbene.setDivMessage("main_div", coinbene.cancel("S180418185128711694601"));
});
