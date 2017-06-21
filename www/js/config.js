/******
* !! WARNING: This is a generated file !!
*
* PLEASE DO NOT MODIFY DIRECTLY
*
* => Changes should be done on file 'app/config.json'.
******/

angular.module("cesium.config", [])

.constant("csConfig", {
	"defaultLanguage": "fr-FR",
	"timeout": 6000,
	"cacheTimeMs": 60000,
	"useLocalStorage": true,
	"rememberMe": true,
	"helptip": {
		"enable": false
	},
	"node": {
		"host": "g1.duniter.org",
		"port": "443"
	},
	"login": {
		"templateUrl": "plugins/market/templates/login/modal_simple_login.html",
		"controller": "MarketLoginModalCtrl"
	},
	"plugins": {
		"es": {
			"enable": true,
			"host": "localhost",
			"port": "9200",
			"wsPort": "9400"
		},
		"market": {
			"enable": true,
			"defaultCurrency": "€",
			"homeMessage": "<i class=\"icon ion-location\"></i> Vide-grenier de Villiers-charlemagne",
			"defaultTags": [
				{
					"tag": "vide-grenier",
					"name": "Vide-grenier"
				},
				{
					"tag": "villers-charlemagne-2017",
					"name": "Vide-grenier de Villiers-charlemagne"
				}
			],
			"defaultAdminPubkeys": [
				"CohjkoP5YnqzTV2wwdCFND74BDDmDR7dAQEPGt4tj2Tw" // BLA
			],
			"record": {
				"type": {
					"show": false,
					"default": "offer",
					"canEdit": false
				},
				"category": {
					"show": true,
					"filter": "localSale"
				},
				"description": {
					"show": false
				},
				"location": {
					"show": true,
					"required": true,
					"label": "MARKET.LOCAL_SALE.LOCATION",
					"help": "MARKET.LOCAL_SALE.LOCATION_HELP",
					"prefix": "MARKET.LOCAL_SALE.LOCATION_PREFIX"
				},
				"unit": {
					"canEdit": false
				}
			}
		}
	},
	"version": "0.4.1",
	"build": "2017-06-20T08:45:18.099Z",
	"newIssueUrl": "https://github.com/duniter-gchange/gchange-client/issues/new?labels=bug"
})

;