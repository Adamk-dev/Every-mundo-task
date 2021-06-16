import angular from 'angular';

// Create the module where our functionality can attach to
let currencyModule = angular.module('app.currency', []);

// Include our UI-Router config settings
import CurrencyConfig from './currency.config';
currencyModule.config(CurrencyConfig);


// Controllers
import CurrencyCtrl from './currency.controller';
currencyModule.controller('CurrencyCtrl', CurrencyCtrl);


export default currencyModule;

