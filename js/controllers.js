'use strict';

/* Controllers */

var webProgrammingApp = angular.module('webProgrammingApp', []);

webProgrammingApp.controller('LanguageListCtrl', function($scope) {
  $scope.technology = [
    {'name': 'PHP',
     'description': 'PHP is a server scripting language.'
    },
    {'name': 'HTML',
     'description': 'HTML is a markup language for describing web documents.'
 	},
    {'name': 'Java Script',
     'description': 'JavaScript is the programming language of HTML and the Web.'
 	},
 	{'name': 'SQL',
     'description': 'SQL is a standard language for accessing databases.'
 	},
 	{'name': 'CSS',
     'description': 'CSS is a language that describes the style of an HTML document.'
 	},
  ];
});
