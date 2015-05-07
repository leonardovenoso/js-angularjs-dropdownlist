/* HOW TO USE THE DROPDOWN NUMBERED DIRECTIVE */

/*
<div ng-app='relasianshipApp'>
  <div dropdown-numbered='' 
       ng-model='age' 
       dropdown-name='user[age]' 
       dropdown-id='user_age' 
       dropdown-value-from='18' 
       dropdown-value-to='100' 
       dropdown-prompt-message='Select your age' 
       dropdown-class='form-control' 
       required=''>
  </div>
</div>        
*/

var relasianshipApp = angular.module('relasianshipApp', []);
relasianshipApp.directive('dropdownNumbered', function () {
  return {
    restrict: 'A',
    scope: {
        ngModel: "="
    },
    link: function (scope, element, attrs) {
        scope.numbers = [];
        scope.dropdownId = attrs.dropdownId;
        scope.dropdownName = attrs.dropdownName;
        scope.dropdownClass = attrs.dropdownClass;
        scope.dropdownPromptMessage = attrs.dropdownPromptMessage;

        var valueFrom = parseInt(attrs.dropdownValueFrom);
        var valueTo   = parseInt(attrs.dropdownValueTo);

        for (var i = valueFrom; i <= valueTo; i++) {
            scope.numbers.push(i);
        }
    },
    template: "<select id='{{dropdownId}}' name='{{dropdownName}}' ng-options='y for y in numbers track by y' class='{{dropdownClass}}'><option value=''>{{dropdownPromptMessage}}</option></select>",
    replace: true
  };
});