describe('the API', function() {

  var host = 'http://localhost:9999';

  before(function() {
    casper.start(host);
  });

  it('should display the ID of a user', function() {
    casper.thenOpen(host + '/users/matteomanzo', function() {
      expect('body').to.have.text('"id":8677696');
    });
  });

  it('can display all of a users information', function() {
    casper.thenOpen(host + '/users/matteomanzo', function() {
      expect('body').to.have.text('"login":"matteomanzo"');
      expect('body').to.have.text('"public_repos":39');
      expect('body').to.have.text('"location":"London, UK"');
    })
  });

});
