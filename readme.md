# AngularJS dropdownlist populated with numbers

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
    template: "<select id='{{dropdownId}}' name='{{dropdownName}}' ng-options='y for y in numbers' class='{{dropdownClass}}'><option value=''>{{dropdownPromptMessage}}</option></select>",
    replace: true
  };
});
```

This's the efficient way to create a dropdownlist in AngularJs without using the directive ** ngRepeat since it consumes a lot of memory and it's not recommended by the AngularJS community.

What I created in this piece of code is a directive to create a dropdown list with numbers where the ng-model name can be set dynamically as well as the attributes: id, name, prompt, class, number from and number to.

How to use it:
Include this piece of code in your directive file and copy and paste the second div.

If you find any other way to improve it contact me at: leonardo.venoso@live.com


 [JSFiddle](http://jsfiddle.net/leonardo_venoso/ujur46og/5/) 
