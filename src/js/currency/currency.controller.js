class CurrencyCtrl {
    constructor(User, Tags, AppConstants, $scope) {
        "ngInject";
        this._$scope = $scope;
        this.fareCollections = [];
        // default countries
        this.countries = ["Argentina", "USA", "Spain", "Germany"];
        // default currencies according to given countries
        this.currencies = {
            Argentina: "$",
            USA: "$",
            Spain: "€",
            Germany: "€",
        };

        this.currentFare = {
            id: null,
            currency: this.currencies[this.countries[0]],
            country: this.countries[0],
            fare: "",
        };
    }

    saveRecord() {
        //existing record
        if (this.currentFare.id) {
            const index = this.fareCollections.findIndex(p => p.id === this.currentFare.id)
            this.fareCollections[index] = this.currentFare;
        } else {
            this.currentFare.id = this.fareCollections.length + 1;
            this.currentFare.fare = this.changeValue();
            this.fareCollections.push(this.currentFare);
        }

        // reset currentFare to default
        this.currentFare = {
            id: null,
            currency: this.currencies[this.countries[0]],
            country: this.countries[0],
            fare: "",
        };
    }

    editRecord(id) {
        let currentFare = this.fareCollections.find(i => i.id === id)
        this.currentFare = currentFare;
    }

    deleteRecord(id) {
        this.fareCollections = this.fareCollections.filter(item => item.id !== id)
            // this.fareCollections.shift(this.currentFare.id);
    }

    changeValue() {
        if (this.currentFare.country == "Argentina" && this.currentFare.currency)
            return "$ " + Math.round(this.currentFare.fare);
        if (this.currentFare.country == "USA" && this.currentFare.currency)
            return "$ " + this.currentFare.fare.toLocaleString("en-US");
        if (this.currentFare.country == "Spain" && this.currentFare.currency)
            return Math.round(this.currentFare.fare).toLocaleString("es-ES") + " €";
        if (this.currentFare.country == "Germany" && this.currentFare.currency)
            return "€ " + Math.round(this.currentFare.fare).toLocaleString("de-De");
    }

    /* get currency value according to country */
    getCurrency(country) {
        this.currentFare.currency = this.currencies[country];
    }
}

export default CurrencyCtrl;