var fs = require('fs');
/**
This module's main purpose is to keep instances
of the data from the *.json files in memory and return
a list of list names that contain a given domain.
*/

var _byDomain = {};
init();

function init() {
    'use strict';
    // Go through files
    var countryfilesPath = "./bycountry";
    var files = fs.readdirSync(countryfilesPath);
    var i, listname;
    var j, list, domain;
    for (i in files) {
        if(!/\.json$/.test(files[i])) {
            continue;
        }
        listname = files[i].replace(/\.json$/, '');
        list = JSON.parse(fs.readFileSync(countryfilesPath + '/' + files[i], 'utf8')).data;
        for(j in list) {
            domain = list[j];
            if(domain in _byDomain) {
                _byDomain[domain].push(listname);
            } else {
                _byDomain[domain] = [listname];
            }
        }
    }

};

countryLists = function(domain) {
    return _byDomain[domain] || [];
};


exports.countryLists = countryLists;
