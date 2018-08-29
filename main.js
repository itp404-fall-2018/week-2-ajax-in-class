$('#members-link').on('click', function(event) {
  event.preventDefault();
  $('#results').html('Loading...');

  let url = 'https://api.github.com/orgs/emberjs/members';

  let promise = $.ajax({
    type: 'GET',
    url: url
  });

  promise.then(function(members) {
    let html = '';

    members.forEach(function(member) {
      html += `
        <img
          src="${member.avatar_url}"
          width="150"
          title="${member.login}">
      `;
    });

    $('#results').html(html);
  }, function(error) {
    console.log('error', error);
  });
});

$('#repos-link').on('click', function(event) {
  event.preventDefault();
  $('#results').html('Loading...');

  let url = 'https://api.github.com/orgs/emberjs/repos';

  // let promise = $.ajax({
  //   type: 'GET',
  //   url: url
  // });

  fetch(url)
    .then(function(response) {
      let promise = response.json();
      return promise;
    })
    .then(function(repos) {
      let html = '';

      repos.forEach(function(repo) {
        html += `
          <div>
            <h3>${repo.name}</h3>
            <p>${repo.description}</p>
          </div>
        `;
    });

    $('#results').html(html);
  }, function(error) {
    console.log('error', error);
  });
});
