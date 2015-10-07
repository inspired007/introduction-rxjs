'use strict';

var button = document.querySelector('.button');
var label = document.querySelector('h4');

// Captures click events from the button
var clickStream = Rx.Observable.fromEvent(button, 'click');

// Buffers 250ms of time
// maps length of the click events
// returns only the double clicks
var doubleClickStream = clickStream
  .buffer(() => clickStream.throttle(250))
  .map(arr => arr.length)
  .filter(len => len === 2);

// Outputs label when a double click is found
doubleClickStream.subscribe(event => {
  label.textContent = 'double click';
});

// Clears the label after 1 second and
// outputs a '-'
doubleClickStream
  .throttle(1000)
  .subscribe(suggestion => {
  label.textContent = '-';
});
