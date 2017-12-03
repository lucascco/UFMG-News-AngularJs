angular.module('AngularJsNews').run(['$templateCache', function($templateCache) {$templateCache.put('dash/dash.html','<section class="dash">\n  Dash works!\n</section>\n');
$templateCache.put('login/login.html','<div class="login">\n  <div class="box-login">\n    <form name="formLogin" ng-submit="login.login(formLogin)" novalidate>\n      <div class="row">\n        <div class="col-md-12 form-group" ng-class="{\'has-error\': login.hasError(formLogin, \'username\')}">\n          <label class="control-label" for="username">Usu\xE1rio</label>\n          <input name="username" id="username" ng-model="login.user.username" class="form-control" type="text" required>\n          <span class="text-danger small" ng-show="login.hasError(formLogin, \'username\')">Este campo \xE9 obrigat\xF3rio.</span>\n        </div>\n        <div class="col-md-12 form-group" ng-class="{\'has-error\': login.hasError(formLogin, \'password\')}">\n          <label class="control-label" for="password">Senha</label>\n          <input name="password" id="password" ng-model="login.user.password" class="form-control" type="password" required>\n          <span class="text-danger small" ng-show="login.hasError(formLogin, \'password\')">Este campo \xE9 obrigat\xF3rio.</span>\n        </div>\n        <div class="col-md-12" ng-show="login.msgErrorServer">\n          <span class="text-danger" ng-bind-html="login.msgErrorServer"></span>\n        </div>\n        <div class="col-md-12">\n          <button class="btn btn-large btn-block btn-success" type="submit">Entrar</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n');
$templateCache.put('parts/app.tpl.html','<ng-include src="\'parts/header.tpl.html\'">\n</ng-include>\n\n<div ui-view="app">\n\n</div>\n\n<ng-include src="\'parts/footer.tpl.html\'">\n</ng-include>\n');
$templateCache.put('parts/footer.tpl.html','<div class="footer">\n  footer works\n\n</div>\n');
$templateCache.put('parts/header.tpl.html','<div class="header">\n  header works!\n</div>\n');
$templateCache.put('parts/internal.tpl.html','<ng-include src="\'parts/header.tpl.html\'">\n</ng-include>\n\n<ng-include src="\'parts/menu.tpl.html\'">\n</ng-include>\n\n<div ui-view="app">\n</div>\n\n<ng-include src="\'parts/footer.tpl.html\'">\n</ng-include>\n');
$templateCache.put('parts/menu.tpl.html','');}]);