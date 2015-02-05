$(document).ready(function() {
  $.get('https://api.github.com/users/bebbs', function(user) {
    var newProfile = Mustache.render($('.profile-container').html(), user);
    $('.github-container').append(newProfile);
  });
});
