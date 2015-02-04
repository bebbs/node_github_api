describe('the API', function() {

  before(function() {
    casper.start('http://localhost:9999');
  });

  it('should display the username', function() {
    casper.thenOpen('http://localhost:9999/users/matteomanzo', function() {
      expect('body').to.have.text('{"id": "8677696"}');
    });
  });

});
