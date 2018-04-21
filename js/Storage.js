class CoinbeneStorage {

    constructor() {
        this.init();
    }

    init() {
        chrome.storage.sync.get('storage', data => {

            if (!("storage" in data) || !("title" in data["storage"])) {
                this.storage = {};
                this.storage["title"] = "Coinbene";
                this.storage["username"] = "af5e50fa78a33582b40d245b349b21cc";
                this.storage["password"] = "b17ddcc9e71730867a2c36057f7e9102";
                this.sync();
            } else {
                this.storage = data["storage"];
            }
        });
    }

    getValue(key) {
        if (this.storage != undefined)
            return this.storage[key];
    }

    add(key, value) {
        if (this.storage != undefined)
            this.storage[key] = value;
    }

    remove(key){
        if (this.storage != undefined)
            delete this.storage[key];
    }

    sync() {
        console.log("Storage sync: ");
        console.log(this.storage);
        chrome.storage.sync.set({storage: this.storage}, function() {
            console.log('Data is stored in Chrome storage');
        });
    }
}
