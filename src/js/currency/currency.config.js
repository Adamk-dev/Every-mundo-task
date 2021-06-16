function CurrencyConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.currency', {
            url: '',
            controller: 'CurrencyCtrl',
            controllerAs: '$currenyCtrl',
            templateUrl: 'currency/currency.html',
            title: 'Currency'
        });

};

export default CurrencyConfig;