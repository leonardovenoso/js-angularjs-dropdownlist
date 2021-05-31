# AngularJS dropdownlist populated with numbers

### What is dropdownNumbered directive?
This is the efficient way to create a dropdownlist in AngularJs without the **ngRepeat** directive. The mentioned directive consumes a lot of memory and it is not recommended by the AngularJS community.

This piece of code contains a directive to create a dropdown list with numbers in which the ng-model name can be set dynamically.
The following attributes can also be set dinamically: id, name, prompt, class, number from and number to.

### Why a directive?
To keep DRY your code

### Context to use
It can be used to populate a dropdown list with a range of years. For example years from 1900 to 2021.

### How to use it
Include this piece of code in your directive file and copy and paste the second div:
<div dropdown-numbered=''> .... </div>.

### LICENSE
License: 2015 - released to the Public Domain.


[JSFiddle](http://jsfiddle.net/leonardo_venoso/ujur46og/5/) 



```javascript
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
```


