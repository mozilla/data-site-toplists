var assert = require('assert'),
 topsites = require('../topSiteListings');

describe('countryLists', function() {
  describe('google.com', function () {
    it('one or more lists should contain google.com', function () {
      var lists = topsites.countryLists('google.com');
      assert.equal(lists.length >= 1, true);
    });
    it('amazon.com expected to be in 1000 and us50', function () {
      var lists = topsites.countryLists('amazon.com');
      assert.equal(lists.length >= 1, true);
      assert.equal(lists.indexOf('us50') >= 0, true);
      assert.equal(lists.indexOf('1000') >= 0, true);
    });
  });
});
