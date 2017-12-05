angular.module('AngularJsNews').run(['$templateCache', function($templateCache) {$templateCache.put('create-news/create-news.html','<div class="create-news">\n  <div class="panel panel-default">\n    <div class="panel-heading">{{createNews.idNews ? \'Edi\xE7\xE3o\' : \'Cria\xE7\xE3o\'}} de Noticias</div>\n  </div>\n  <div class="panel-body">\n    <form novalidate>\n        <div class="form-group">\n          <label for="title">T\xEDtulo</label>\n          <input type="text" class="form-control" id="title" placeholder="T\xEDtulo">\n        </div>\n        <div class="form-group">\n          <label for="subtitle">Subtitulo</label>\n          <input type="text" class="form-control" id="subtitle" placeholder="Subtitulo">\n        </div>\n        <div class="form-group">\n          <label for="txt">Texto</label>\n          <textarea type="text" class="form-control" id="txt" placeholder="Texto"></textarea>\n        </div>\n        <div class="form-group">\n          <label for="tags">Tags</label>\n          <input type="text" class="form-control" id="tags" placeholder="Tags">\n        </div>\n        <button type="submit" class="btn btn-success">\n          {{createNews.idNews ? \'Editar\' : \'Cadastrar\'}}\n        </button>\n        <button type="submit" class="btn btn-primary">\n          Cancelar\n        </button>\n    </form>\n  </div>\n</div>\n');
$templateCache.put('login/login.html','<div class="login">\n  <div class="box-login">\n    <div class="logo">\n      <img src="images/logo_ufmg.png" alt="logo ufmg">\n    </div>\n    <div class="row">\n      <div class="col-md-12">\n        <p class="bold">Preencha os dados de login e clique em Entrar para ter acesso as not\xEDcias da UFMG.</p>\n      </div>\n    </div>\n    <form name="formLogin" ng-submit="login.login(formLogin)" novalidate>\n      <div class="row">\n        <div class="col-md-12 form-group" ng-class="{\'has-error\': login.hasError(formLogin, \'username\')}">\n          <label class="control-label" for="username">Usu\xE1rio</label>\n          <input name="username" id="username" ng-model="login.user.username" class="form-control" type="text" required>\n          <p class="text-danger small" ng-show="login.hasError(formLogin, \'username\')">Este campo \xE9 obrigat\xF3rio.</p>\n        </div>\n        <div class="col-md-12 form-group" ng-class="{\'has-error\': login.hasError(formLogin, \'password\')}">\n          <label class="control-label" for="password">Senha</label>\n          <input name="password" id="password" ng-model="login.user.password" class="form-control" type="password" required>\n          <p class="text-danger small errormsg" ng-show="login.hasError(formLogin, \'password\')">Este campo \xE9 obrigat\xF3rio.</p>\n        </div>\n        <div class="col-md-12 errormsg" >\n          <p class="text-danger" ng-show="login.msgErrorServer" ng-bind-html="login.msgErrorServer"></p>\n        </div>\n        <div class="col-md-12">\n          <button class="btn btn-large btn-block btn-success" type="submit">\n            {{ login.loading ? \'Verificando ...\' : \'Entrar\' }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n');
$templateCache.put('list-news/list-news.html','<div class="list-news">\n  <div class="panel panel-default">\n    <div class="panel-heading">Listagem das Noticias</div>\n    <table class="table table-striped">\n      <thead>\n        <th>C\xF3digo</th>\n        <th>Titulo</th>\n        <th>Data de Postagem</th>\n        <th>A\xE7\xF5es</th>\n      </thead>\n      <tr ng-repeat="news in listNews.listNews.items">\n        <td>{{news.id}}</td>\n        <td>{{news.title}}</td>\n        <td>{{news.post_date}}</td>\n        <td><button ui-sref="app.internal.editNews({id: news.id})" class="btn btn-primary">Editar</button></td>\n      </tr>\n     </table>\n     <div class="pages text-center">\n      <p class="interval">De 1 at\xE9 {{listNews.totPage}}</p>\n      <div class="input-group">\n        <span class="input-group-btn">\n          <button ng-click="listNews.prev()" class="btn btn-default" type="button">\n            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\n          </button>\n        </span>\n        <input type="text" ng-change="listNews.changePage()"  ng-model-options="{ debounce: 500 }" ng-model="listNews.listNews.page" class="form-control" aria-label="Amount (to the nearest dollar)">\n        <span class="input-group-btn">\n          <button ng-click="listNews.next()" class="btn btn-default" type="button">\n              <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\n          </button>\n        </span>\n      </div>\n      <small class="instructions">Navegue pelos bot\xF5es ou insira o n\xFAmero de uma pagina</small>\n     </div>\n  </div>\n</div>\n');
$templateCache.put('parts/app.tpl.html','<div class="external" ui-view="app">\n</div>\n');
$templateCache.put('parts/footer.tpl.html','<div class="footer">\n  FrontEnd da UFMG\n</div>\n');
$templateCache.put('parts/header.tpl.html','<div class="header">\n  <div class="row">\n\n    <div class="logo col-md-2 col-xs-1">\n      <img src="images/logo_ufmg.png" alt="">\n    </div>\n    <div class="menu col-md-8 col-xs-9">\n      <ul class="list">\n        <li ui-sref-active="active" class="item-menu">\n          <a ui-sref="app.internal.listNews" class="link">Not\xEDcias</a>\n        </li>\n        <li ui-sref-active="active" class="item-menu">\n          <a ui-sref="app.internal.createNews" class="link">Criar Not\xEDcias</a>\n        </li>\n      </ul>\n    </div>\n    <div class="user-area text-nowrap col-md-2 col-xs-2">\n      <div class="user">\n        <div class="name">{{ app.getUserLogged().name }}</div>\n        <small class="email">{{ app.getUserLogged().email }}</small>\n      </div>\n      <a class="logoff link" ng-click="app.logout()">\n        <span class="glyphicon glyphicon-log-out"></span>\n        Sair\n      </a>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('parts/internal.tpl.html','<ng-include src="\'parts/header.tpl.html\'">\n</ng-include>\n\n<div class="internal" ui-view="app">\n</div>\n<!--\n<ng-include src="\'parts/footer.tpl.html\'">\n</ng-include> -->\n');}]);