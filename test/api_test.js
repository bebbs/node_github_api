describe('the API', function() {

  var host = 'http://localhost:9999';

  before(function() {
    casper.start(host);
  });

  it('should display the ID of a user', function() {
    casper.thenOpen(host + '/users/matteomanzo', function() {
      expect('body').to.include.text('"id":8677696');
    });
  });

  it('can display all of a users information', function() {
    casper.thenOpen(host + '/users/matteomanzo', function() {
      expect('body').to.include.text('"login":"matteomanzo"');
      expect('body').to.include.text('"public_repos":39');
      expect('body').to.include.text('"location":"London, UK"');
    })
  });

  it('can display other users information', function() {
    casper.thenOpen(host + '/users/bebbs', function() {
      expect('body').to.include.text('"login":"bebbs"');
      expect('body').to.include.text('"public_repos":36');
      expect('body').to.include.text('"location":"London, UK"');
    })

  });

  it('can display information for any user', function() {
    casper.thenOpen(host + '/user/tansaku', function() {
      expect('body').to.include.text('"login":"tansaku"');
      expect('body').to.include.text('"public_repos":215');
      expect('body').to.include.text('"location":"London UK"');
    })
  });

});
