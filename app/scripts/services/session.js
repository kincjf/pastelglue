'use strict';

angular.module('pastelglueApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
