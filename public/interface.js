function addProfileFromUsername(username) {
  $.get('https://api.github.com/users/' + username, function(user) {
    var newProfile = Mustache.render($('.profile-container').html(), user);
    $('.github-container').prepend(newProfile);
  });
}

$(document).ready(function() {
  $('#add-profile').on('submit', function(event) {
    event.preventDefault();
    addProfileFromUsername($('.search-box').val());
  });
});
