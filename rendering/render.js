'use strict';

var refreshButton = document.querySelector('.refresh');

var requestStream = Rx.Observable.just('https://api.github.com/users');

var responseStream = requestStream
  .flatMap(requestUrl =>
    Rx.Observable.fromPromise(jQuery.getJSON(requestUrl))
  );

// Return a random user
function createSuggestionStream(responseStream) {
  return responseStream.map(listUser =>
    listUser[Math.floor(Math.random()*listUser.length)]
  );
}

// grab 3 users
var suggestion1Stream = createSuggestionStream(responseStream);
var suggestion2Stream = createSuggestionStream(responseStream);
var suggestion3Stream = createSuggestionStream(responseStream);

// Render output to the DOM
function renderSuggestion(userData, selector) {
  var element = document.querySelector(selector);
  var usernameEl = element.querySelector('.username');
  usernameEl.href = userData.html_url;
  usernameEl.textContent = userData.login;
  var imgEl = element.querySelector('img');
  imgEl.src = userData.avatar_url;
}

// Need to subscribe to event stream
// and render out to the DOM
suggestion1Stream.subscribe(user => {
  renderSuggestion(user, '.suggestion1');
});

suggestion2Stream.subscribe(user => {
  renderSuggestion(user, '.suggestion2');
});

suggestion3Stream.subscribe(user => {
  renderSuggestion(user, '.suggestion3');
});