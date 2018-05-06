SystemConfig = {
    "title": "Coinbene"
}

class Context {

    constructor() {
        this.config = SystemConfig;

        this.storage = new CoinbeneStorage((storage) => {

            if ((storage["username"] == undefined || storage["username_key"] != md5(storage["username"])) 
                || (storage["password"] == undefined || storage["username_key"] != md5(storage["username"]))) {
                window.location.href = "login.html";
            }

        });
        console.log(this.storage);
    }

}

