class CoinbeneStorage {

    constructor() {
        this.init();
    }

    init() {
        chrome.storage.sync.get('storage', data => {

            if (!("storage" in data) || !("title" in data["storage"])) {
                this.storage = {};
                this.storage["title"] = "Coinbene";
                this.storage["username"] = "Coinbene";
                this.storage["password"] = "zengjf";
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
