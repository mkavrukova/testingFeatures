self.postMessage('I am working before');
self.onmessage = function (event) {
	"use strict";
	self.postMessage('Hi ' + event.data);
};
