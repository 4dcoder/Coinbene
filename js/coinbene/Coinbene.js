var CoinbeneResult = null;
class Coinbene {

    constructor(apiid, secret) {

        this.config = {
            url:"http://api.coinbene.com", 
            apiid:apiid, 
            secret:secret
        };

        this.coinbeneSpotAPI = new CoinbeneSpotAPI(this.config.url, this.config.apiid, this.config.secret);
    }

    ticker(symbol) {
        CoinbeneResult = null;
        this.coinbeneSpotAPI.ticker(symbol, this.success, this.error);
        return CoinbeneResult;
    }

    orderbook(symbol, depth = 5) {
        CoinbeneResult = null;
        this.coinbeneSpotAPI.orderbook(symbol, this.success, this.error, depth);
        return CoinbeneResult;
    }

    trades(symbol) {
        CoinbeneResult = null;
        this.coinbeneSpotAPI.trades(symbol, this.success, this.error);
        return CoinbeneResult;
    }

    balance() {
        CoinbeneResult = null;
        this.coinbeneSpotAPI.balance(this.success, this.error);
        return CoinbeneResult;
    }

    place(symbol, tradeType, price="", quantity="") {
        CoinbeneResult = null;
        this.coinbeneSpotAPI.place(symbol, tradeType, price, quantity, this.success, this.error);
        return CoinbeneResult;
    }

    ordersinfo(symbol) {
        CoinbeneResult = null;
        this.coinbeneSpotAPI.ordersinfo(symbol, this.success, this.error);
        return CoinbeneResult;
    }

    info(orderId) {
        CoinbeneResult = null;
        this.coinbeneSpotAPI.info(orderId, this.success, this.error);
        return CoinbeneResult;
    }

    cancel(orderId) {
        CoinbeneResult = null;
        this.coinbeneSpotAPI.cancel(orderId, this.success, this.error);
        return CoinbeneResult;
    }

    success(data) {
        Coinbene.setResult(data);
    }

    static setResult(data) {
        CoinbeneResult = JSON.parse(data);
    }

    static setDivMessage(divId, data) {
        if (data != null) {
            $("#" + divId).append("<div>" + JSON.stringify(data) + "</div>");
        } else {
            $("#" + divId).append("<div>error access.</div>");
        }
    }

    error(xhr, status, err) {
        CoinbeneResult = null;

        console.log(xhr);
        console.log(status);
        console.log(err);
    }
}
