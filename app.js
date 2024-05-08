var app = angular.module('emailApp', []);

app.controller('EmailController', ['$sce', function($sce) {
    var vm = this;

    vm.selectedTemplate = '1';

    vm.templates = {
        '1': '<p>This is template 1. It has a different layout.</p>',
        '2': '<h2>Template 2</h2><p>This is template 2. It has a different heading and paragraph.</p>',
        '3': '<p style="color: red;">This is template 3. It has red text.</p>'
    };

    vm.selectTemplate = function() {
        vm.emailContent = $sce.trustAsHtml(vm.templates[vm.selectedTemplate]);
    };

    // Load initial template
    vm.selectTemplate();
}]);
