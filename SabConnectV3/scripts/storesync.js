class StoreSync {
    constructor(namespace, defaultSettings, callback) {
        this.namespace = namespace;
        this.defaultSettings = defaultSettings;
        this.callback = callback;
        this.store = {};

        // Load existing settings or initialize
        chrome.storage.local.get([namespace], (result) => {
            if (result[namespace]) {
                this.store = result[namespace];
            } else {
                this.store = defaultSettings;
            }
            if (callback) callback(this.store);
        });
    }

    set(key, value) {
        this.store[key] = value;
        let saveObj = {};
        saveObj[this.namespace] = this.store;
        chrome.storage.local.set(saveObj);
    }

    get(key) {
        return this.store[key];
    }

    getAll() {
        return this.store;
    }
}
