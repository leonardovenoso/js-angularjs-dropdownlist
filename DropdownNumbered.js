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
var relasianshipApp = angular.module('relasianship', []);
relasianshipApp.directive('dropdownNumbered', function () {
  return {
    restrict: 'A',
    scope: {
      ngModel: "="
    },
    link: function(scope, element, attrs) {
      scope.age = [];
      scope.dropdownId    = attrs.dropdownId;
      scope.dropdownName  = attrs.dropdownName;
      scope.dropdownClass = attrs.dropdownClass;
      scope.dropdownPromptMessage = attrs.dropdownPromptMessage;

      var valueFrom = parseInt(attrs.dropdownValueFrom);
      var valueTo   = parseInt(attrs.dropdownValueTo);

      for(var i = valueFrom; i <= valueTo; i++) {
        scope.age.push(i);
      }
    },
    template: "<select id='{{dropdownId}}' name='{{dropdownName}}' ng-options='y for y in age' class='{{dropdownClass}}'><option value=''>{{dropdownPromptMessage}}</option></select>",
    replace: true
  };
});