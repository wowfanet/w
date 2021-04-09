/*
Locale class
*/

var LOCALE_ENUS = 0;
var LOCALE_FRFR = 2;
var LOCALE_DEDE = 3;
var LOCALE_ZHCN = 4;
var LOCALE_ESES = 6;
var LOCALE_RURU = 8;

var Locale = {

    current: {},

    // All
    locales: {
        0: { // English
            id: LOCALE_ENUS,
            name: 'enus',
            domain: 'www',
            description: 'English'
        },
        4:{ // Chinese
            id: LOCALE_ZHCN,
            name: 'zhcn',
            domain: 'cn',
            description: String.fromCharCode(31616, 20307, 20013, 25991)
        }
    },

    getAll: function() {
        var result = [];

        for (var id in Locale.locales) {
            result.push(Locale.locales[id]);
        }

        return result;
    },

    getAllByName: function() {
        var result = Locale.getAll();

        result.sort(function(a, b) {
            return $WH.strcmp(a.description, b.description);
        });

        return result;
    },

    getId: function() {
        if(typeof(Locale.current.id) == undefined || Locale.current.id == null){
            Locale.current.id = 0;
        }
        return Locale.current.id;
    },

    getName: function() {
        var localeId = Locale.getId();

        return Locale.locales[localeId].name;
    },

    get: function() {
        var localeId = Locale.getId();

        return Locale.locales[localeId];
    },

    set: function(localeId) {
        $.extend(Locale.current, Locale.locales[localeId]);
    }

};
