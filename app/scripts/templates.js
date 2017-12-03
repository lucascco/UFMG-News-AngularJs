angular.module('AngularJsNews').run(['$templateCache', function($templateCache) {$templateCache.put('dash/dash.html','<section class="dash">\n  Dash works!\n</section>\n');
$templateCache.put('login/login.html','<section class="login">\n  Teste Login\n</section>\n');
$templateCache.put('parts/app.tpl.html','<ng-include src="\'parts/header.tpl.html\'">\n</ng-include>\n\n<div ui-view="app">\n\n</div>\n\n<ng-include src="\'parts/footer.tpl.html\'">\n</ng-include>\n');
$templateCache.put('parts/footer.tpl.html','<section class="footer">\n  footer works\n\n</section>\n');
$templateCache.put('parts/header.tpl.html','<section class="header">\n  header works!\n</section>\n');
$templateCache.put('parts/internal.tpl.html','<ng-include src="\'parts/header.tpl.html\'">\n</ng-include>\n\n<ng-include src="\'parts/menu.tpl.html\'">\n</ng-include>\n\n<div ui-view="app">\n</div>\n\n<ng-include src="\'parts/footer.tpl.html\'">\n</ng-include>\n');
$templateCache.put('parts/menu.tpl.html','');}]);