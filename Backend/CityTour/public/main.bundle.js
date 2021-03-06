webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account-edit/account-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/account-edit/account-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:20px;\">\r\n\r\n\r\n  <div class=\"row h-100 justify-content-center align-items-center mx-0\">\r\n    <div class=\"shadow-box\" style=\"width:100%; max-width:550px;\">\r\n      <h1 class=\"text-center\">\r\n        <img style=\"max-width:300px; margin-bottom: 10px;\" src=\"./uploads/logo_citytour.png\" alt=\"Logo\" />\r\n      </h1>\r\n      <form style=\"overflow:auto;\" #formCustomer=\"ngForm\" (ngSubmit)=\"submitAccount()\" class=\"form-horizontal\" enctype=\"multipart/form-data\">\r\n        <div class=\" form-group has-feedback\"\r\n             [ngClass]=\"{'has-failure': (firstName.invalid || firstName.pristine)}\">\r\n          <label class=\"control-label\">First Name: </label>\r\n          <input type=\"text\" class=\"form-control\" id=\"first_name\" required\r\n                 [(ngModel)]=\"account.firstName\" name=\"firstName\" #firstName=\"ngModel\">\r\n        </div>\r\n\r\n        <div class=\" form-group has-feedback\"\r\n             [ngClass]=\"{'has-failure': (lastName.valid || lastName.pristine)}\">\r\n          <label class=\"control-label\">Last Name: </label>\r\n          <input type=\"text\" class=\"form-control\" id=\"lastName\" required\r\n                 [(ngModel)]=\"account.lastName\" name=\"lastName\" #lastName=\"ngModel\">\r\n        </div>\r\n        <div class=\" form-group has-feedback\"\r\n             [ngClass]=\"{'has-failure': (email.valid || email.pristine || email.touched )}\">\r\n          <label class=\"control-label\">Email: </label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\">@</div>\r\n            </div>\r\n            <input type=\"email\" class=\"form-control\" id=\"email\" required\r\n                   ng-pattern=\"/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/\"\r\n                   [(ngModel)]=\"account.email\" name=\"email\" #email=\"ngModel\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\" form-group has-feedback\"\r\n             [ngClass]=\"{'has-failure': (dateOfBirth.valid || dateOfBirth.pristine)}\">\r\n          <label class=\"control-label\">Date of Birth: </label>\r\n          <input type=\"date\" class=\"form-control\" id=\"dateOfBirth\"\r\n                 [(ngModel)]=\"account.dateOfBirth\" name=\"dateOfBirth\" #dateOfBirth=\"ngModel\">\r\n        </div>\r\n             \r\n\r\n        <div class=\" form-group \">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 col-sm-6 mb-1\">\r\n                <button type=\"button\" (click)=\"cancelEdit();\" class=\"btn btn-block btn-secondary\">Cancel</button>\r\n              </div>\r\n              <div class=\"col-md-6 col-sm-6 px-0\">\r\n                <button type=\"submit\" class=\"btn btn-block btn-info\">Register</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/account/account-edit/account-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var account_service_1 = __webpack_require__("./src/app/account/account.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var account_1 = __webpack_require__("./src/app/account/account.ts");
var AccountEditComponent = /** @class */ (function () {
    function AccountEditComponent(_accountService, route, _router) {
        var _this = this;
        this._accountService = _accountService;
        this.route = route;
        this._router = _router;
        this.account = new account_1.Account(1, '', '', '', '', '', '', '');
        this.editing = true;
        this.route.params.subscribe(function (params) { return _this.loadAccount(params['id']); });
    }
    AccountEditComponent.prototype.ngOnInit = function () {
    };
    AccountEditComponent.prototype.ngOnChanges = function () {
    };
    AccountEditComponent.prototype.loadAccount = function (id) {
        var _this = this;
        this._accountService.getAccount(id)
            .subscribe(function (account) {
            _this.account = account;
        }, function (err) { return console.log(err); });
    };
    AccountEditComponent.prototype.submitAccount = function () {
        var _this = this;
        this._accountService.updateAccount(this.account).subscribe(function (accounts) {
            // EmitterService.get(this.listId).emit(accounts);
            _this.account = new account_1.Account(1, '', '', '', '', '', '', '');
            //this.cancelForm();
        });
        this._router.navigateByUrl('accounts');
    };
    AccountEditComponent.prototype.cancelEdit = function () {
        this._router.navigateByUrl('accounts');
    };
    AccountEditComponent = __decorate([
        core_1.Component({
            selector: 'app-account-edit',
            template: __webpack_require__("./src/app/account/account-edit/account-edit.component.html"),
            styles: [__webpack_require__("./src/app/account/account-edit/account-edit.component.css")]
        }),
        __metadata("design:paramtypes", [account_service_1.AccountService, router_1.ActivatedRoute, router_1.Router])
    ], AccountEditComponent);
    return AccountEditComponent;
}());
exports.AccountEditComponent = AccountEditComponent;


/***/ }),

/***/ "./src/app/account/account-list/account-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/account-list/account-list.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">#</th>\r\n      <th scope=\"col\">First Name</th>\r\n      <th scope=\"col\">Last Name</th>\r\n      <th scope=\"col\">email</th>\r\n      <th scope=\"col\">Username</th>\r\n      <th scope=\"col\">Status</th>\r\n      <th scope=\"col\">Action</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let account of accounts\">\r\n      <td>{{ account._id }}</td>\r\n      <td>{{ account.firstName }}</td>\r\n      <td>{{ account.lastName }}</td>\r\n      <td>{{ account.email }}</td>\r\n      <td>{{ account.username }}</td>\r\n      <td><span *ngIf=\"account.status == 1\">Blocked</span></td>\r\n      <td>\r\n        <button class=\"btn btn-sm btn-info\" [routerLink]=\"['/account/edit/' + account._id]\">Edit</button>\r\n        <button class=\"btn btn-sm btn-info\" [routerLink]=\"['/account/view/' + account._id]\">View</button>\r\n        <button class=\"btn btn-sm btn-warning\" (click)=\"blockAccount(account._id);\" *ngIf=\"account.status != 1\">Block</button>\r\n        <button class=\"btn btn-sm btn-warning\" (click)=\"unblockAccount(account._id);\" *ngIf=\"account.status == 1\">Unblock</button>\r\n        <button class=\"btn btn-sm btn-danger\" (click)=\"deleteAccount(account._id);\">Delete</button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\n"

/***/ }),

/***/ "./src/app/account/account-list/account-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var account_service_1 = __webpack_require__("./src/app/account/account.service.ts");
var AccountListComponent = /** @class */ (function () {
    function AccountListComponent(_accountService) {
        this._accountService = _accountService;
    }
    AccountListComponent.prototype.ngOnInit = function () {
        this.loadAccounts();
    };
    AccountListComponent.prototype.ngOnChanges = function (changes) {
        /*EmitterService.get(this.listId).subscribe((customers: Customer[]) => {
          this.loadCustomers();
        });*/
    };
    AccountListComponent.prototype.loadAccounts = function () {
        var _this = this;
        console.log('loading customers');
        this._accountService.getAllAccounts()
            .subscribe(function (accounts) { return _this.accounts = accounts; }, function (err) { return console.log(err); });
    };
    AccountListComponent.prototype.deleteAccount = function (id) {
        var _this = this;
        console.log("delete account: ", id);
        this._accountService.deleteAccount(id)
            .subscribe(function () {
            _this.loadAccounts();
        }, function (err) {
            console.log(err);
        });
    };
    AccountListComponent.prototype.blockAccount = function (id) {
        var _this = this;
        console.log(id);
        this._accountService.blockAccount(id).subscribe(function (picture) { return _this.loadAccounts(); }, function (err) { return console.log(err); });
    };
    AccountListComponent.prototype.unblockAccount = function (id) {
        var _this = this;
        this._accountService.unblockAccount(id).subscribe(function (picture) { return _this.loadAccounts(); }, function (err) { return console.log(err); });
    };
    AccountListComponent = __decorate([
        core_1.Component({
            selector: 'app-account-list',
            template: __webpack_require__("./src/app/account/account-list/account-list.component.html"),
            styles: [__webpack_require__("./src/app/account/account-list/account-list.component.css")]
        }),
        __metadata("design:paramtypes", [account_service_1.AccountService])
    ], AccountListComponent);
    return AccountListComponent;
}());
exports.AccountListComponent = AccountListComponent;


/***/ }),

/***/ "./src/app/account/account-view/account-view.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/account-view/account-view.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  account-view works!\n</p>\n"

/***/ }),

/***/ "./src/app/account/account-view/account-view.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AccountViewComponent = /** @class */ (function () {
    function AccountViewComponent() {
    }
    AccountViewComponent.prototype.ngOnInit = function () {
    };
    AccountViewComponent = __decorate([
        core_1.Component({
            selector: 'app-account-view',
            template: __webpack_require__("./src/app/account/account-view/account-view.component.html"),
            styles: [__webpack_require__("./src/app/account/account-view/account-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountViewComponent);
    return AccountViewComponent;
}());
exports.AccountViewComponent = AccountViewComponent;


/***/ }),

/***/ "./src/app/account/account.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var ngx_bootstrap_1 = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
var ngx_bootstrap_2 = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
var signin_component_1 = __webpack_require__("./src/app/account/signin/signin.component.ts");
var signup_component_1 = __webpack_require__("./src/app/account/signup/signup.component.ts");
var profile_component_1 = __webpack_require__("./src/app/account/profile/profile.component.ts");
var account_list_component_1 = __webpack_require__("./src/app/account/account-list/account-list.component.ts");
var account_edit_component_1 = __webpack_require__("./src/app/account/account-edit/account-edit.component.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var account_service_1 = __webpack_require__("./src/app/account/account.service.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var account_view_component_1 = __webpack_require__("./src/app/account/account-view/account-view.component.ts");
var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                ngx_bootstrap_1.TabsModule.forRoot(),
                ngx_bootstrap_2.ModalModule.forRoot(),
            ],
            exports: [
                signin_component_1.SigninComponent,
                signup_component_1.SignupComponent,
                profile_component_1.ProfileComponent,
                account_list_component_1.AccountListComponent
            ],
            declarations: [
                signin_component_1.SigninComponent,
                signup_component_1.SignupComponent,
                profile_component_1.ProfileComponent,
                account_list_component_1.AccountListComponent,
                account_edit_component_1.AccountEditComponent,
                account_view_component_1.AccountViewComponent
            ],
            providers: [
                account_service_1.AccountService
            ]
        })
    ], AccountModule);
    return AccountModule;
}());
exports.AccountModule = AccountModule;


/***/ }),

/***/ "./src/app/account/account.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var content_headers_1 = __webpack_require__("./src/app/core/content_headers.ts");
if (environment_1.environment.production) { }
var AccountService = /** @class */ (function () {
    function AccountService(_http) {
        this._http = _http;
        // The final / is required by django when APPEND_SLASH=True
        this.account_url_api = '/api/V1/accounts/';
    }
    AccountService.prototype.getAllAccounts = function () {
        return this._http.get(this.account_url_api, { headers: content_headers_1.content_headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server Error : getAccounts'); });
    };
    AccountService.prototype.getRelatedAccounts = function (account_id) {
        // console.log(account_id);
        return this._http.get(this.account_url_api + '?accounts=' + account_id, { headers: content_headers_1.content_headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server Error : getRelatedAccounts'); });
    };
    AccountService.prototype.getAccount = function (account_id) {
        return this._http.get(this.account_url_api + account_id, { headers: content_headers_1.content_headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server Error : getAccounts'); });
    };
    AccountService.prototype.addAccount = function (body) {
        return this._http.post(this.account_url_api, body, { headers: content_headers_1.content_headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error : addAccount'); });
    };
    // Change in the future for a generic function instead to have two for update
    // It was done due to difficult to extract the if from the body composed by a formaData
    AccountService.prototype.updateProfilePicture = function (body, id) {
        console.log(body);
        var custom_content_headers = new http_1.Headers();
        // custom_content_headers.append('Content-Type', 'undefined');
        // contentHeaders.append('Authorization', localStorage.getItem('token'));
        custom_content_headers.append('Authorization', sessionStorage.getItem('token'));
        return this._http.put("" + this.account_url_api + id + "/", body, { headers: custom_content_headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error : updateAccount'); });
    };
    AccountService.prototype.updateAccount = function (body) {
        // Wont use a separator slash due to django issues
        console.log(body);
        return this._http.put("" + this.account_url_api + body['id'] + "/", body, { headers: content_headers_1.content_headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error : updateAccount'); });
    };
    AccountService.prototype.deleteAccount = function (id) {
        console.log("deleting ", id);
        var body = { deleted: 1 };
        return this._http.put("" + this.account_url_api + id + "/", body, { headers: content_headers_1.content_headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error : deleteAccount'); });
    };
    AccountService.prototype.blockAccount = function (id) {
        // status = 1 => image blocked
        var body = { status: 1 };
        return this._http.put("" + this.account_url_api + id + "/", body, { headers: content_headers_1.content_headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error blocking the picture with the id ' + id); });
    };
    AccountService.prototype.unblockAccount = function (id) {
        // status = 1 => image blocked
        var body = { status: 0 };
        return this._http.put("" + this.account_url_api + id + "/", body, { headers: content_headers_1.content_headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error unblocking the picture with the id ' + id); });
    };
    AccountService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;


/***/ }),

/***/ "./src/app/account/account.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Account = /** @class */ (function () {
    function Account(mindUREId, firstName, lastName, email, dateOfBirth, username, password, confirmPassword) {
        this.mindUREId = mindUREId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.username = username;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
    return Account;
}());
exports.Account = Account;


/***/ }),

/***/ "./src/app/account/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Select a picture for your profile</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form style=\"overflow:auto;\" #formCustomer=\"ngForm\" (ngSubmit)=\"updateProfilePicture()\" class=\"form-horizontal\" enctype=\"multipart/form-data\">\r\n      <div class=\"form-group\">\r\n        <input type=\"file\" size=\"30\" placeholder=\"Select a picture...\" name=\"image\" multiple=\"multiple\" class=\"form-control\"\r\n               (change)=\"fileChangeEvent($event)\">\r\n      </div>\r\n      <div class=\"form-group \">\r\n        <div class=\"row mx-0\">\r\n          <div class=\"col-md-6 col-sm-6\">\r\n            <button type=\"button\" (click)=\"modalRef.hide()\" class=\"btn btn-primary btn-block\">Cancel</button>\r\n          </div>\r\n          <div class=\"col-md-6 col-sm-6\">\r\n            <button type=\"submit\" class=\"btn btn-success btn-block\" [disabled]=\"false\">Update</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n\r\n<div class=\"row mx-0 my-0\">\r\n  <div class=\"col-md-3\">\r\n    <div class=\"container profile-box\" style=\"padding: 20px 10px; \">\r\n      <div class=\"text-center\">\r\n        <img src=\"uploads/{{ account.profilePicture }}\" class=\"profile-picture\" (click)=\"openModal(template)\" style=\"width: 100%;\" />\r\n        <p>\r\n          {{ account.firstName }} {{ account.lastName }}<br />\r\n        </p>\r\n      </div>\r\n      <div class=\"form-group mx-3 my-0\">\r\n        <div class=\" my-2\">\r\n          <span (click)=\"editProfile()\" class=\"btn btn-sm btn-outline-info btn-block\">Edit Profile</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-9 mx-0 my-0\">\r\n    <div>\r\n      <div class=\"  center\">\r\n        <div class=\"shadow-box mx-auto my-4\" >\r\n          <div style=\"border-bottom: 1px solid #ccc; margin-bottom: 20px; padding-bottom:20px;\">\r\n            <div class=\"\">\r\n              <div id=\"name\">\r\n                <h1>{{ account.firstName }} {{ account.lastName }} </h1>\r\n              </div>\r\n              <div id=\"detail\">\r\n                <div>\r\n                  <label class=\"col-md-4\">Username: </label>\r\n                  <span class=\"col-md-8\">{{ account.username }}</span>\r\n                </div>\r\n                <div>\r\n                  <label class=\"col-md-4\">Email: </label>\r\n                  <span class=\"col-md-8\">{{ account.email }}</span>\r\n                </div>               \r\n                <div>\r\n                  <label class=\"col-md-4\">Birthdate: </label>\r\n                  <span class=\"col-md-8\">{{ account.dateOfBirth | date:'longDate' }}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div class=\"row\" style=\"width:100%;\">\r\n              <div class=\"profile-icon col-md-4 col-sm-4\">\r\n                <i class=\"fa fa-camera\"></i>\r\n                <h1>21</h1>\r\n                <p>Pictures</p>\r\n              </div>\r\n\r\n              <div class=\"profile-icon col-md-4 col-sm-4\">\r\n                <i class=\"fa fa-map\"></i>\r\n                <h1>2</h1>\r\n                <p>Locations</p>\r\n              </div>\r\n\r\n              <div class=\"profile-icon col-md-4 col-sm-4\">\r\n                <i class=\"fa fa-minus\"></i>\r\n                <h1>1</h1>\r\n                <p>Blocked Pictures</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/account/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var account_service_1 = __webpack_require__("./src/app/account/account.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var account_1 = __webpack_require__("./src/app/account/account.ts");
var emitter_service_1 = __webpack_require__("./src/app/core/emitter-service.ts");
var emitter_1 = __webpack_require__("./src/app/core/emitter.ts");
var bs_modal_service_1 = __webpack_require__("./node_modules/ngx-bootstrap/modal/bs-modal.service.js");
var router_2 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_accountService, _route, _router, _modalService) {
        this._accountService = _accountService;
        this._route = _route;
        this._router = _router;
        this._modalService = _modalService;
        this.account = new account_1.Account(1, '', '', '', '', '', '', '');
        this.filesToUpload = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return _this.loadAccount(sessionStorage.getItem('userId')); });
    };
    ProfileComponent.prototype.ngOnChanges = function () {
        var _this = this;
        emitter_service_1.EmitterService.get(emitter_1.EMITTERS.listId).subscribe(function (account) {
            _this._route.params.subscribe(function (params) { return _this.loadAccount(sessionStorage.getItem('userId')); });
        });
    };
    ProfileComponent.prototype.openModal = function (template) {
        this.modalRef = this._modalService.show(template);
    };
    ProfileComponent.prototype.loadAccount = function (id) {
        var _this = this;
        this._accountService.getAccount(id)
            .subscribe(function (account) {
            _this.account = account;
        }, function (err) { return console.log(err); });
    };
    ProfileComponent.prototype.editProfile = function () {
        this._router.navigate(['account-edit', sessionStorage.getItem('userId')]);
    };
    ProfileComponent.prototype.updateProfilePicture = function () {
        var _this = this;
        var formData = new FormData();
        var files = this.filesToUpload;
        //console.log(files);
        for (var i = 0; i < files.length; i++) {
            formData.append("uploads[]", files[i], files[i]['name']);
        }
        this._accountService.updateProfilePicture(formData, sessionStorage.getItem('userId'))
            .subscribe(function (account) {
            emitter_service_1.EmitterService.get(emitter_1.EMITTERS.listId).emit(account);
            _this.modalRef.hide();
        }, function (err) { return console.log(err); });
    };
    ProfileComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        //this.product.photo = fileInput.target.files[0]['name'];
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/account/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/account/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [account_service_1.AccountService,
            router_1.ActivatedRoute,
            router_2.Router,
            bs_modal_service_1.BsModalService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./src/app/account/signin/signin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row h-100 justify-content-center align-items-center \" style=\"margin: 80px 10px;\">\r\n  <div class=\"shadow-box\" style=\"min-width:310px;\">\r\n    <div class=\"login center-block\">\r\n      <h1 class=\"text-center\">\r\n        <img style=\"max-width:300px; margin-bottom: 20px;\" src=\"./uploads/logo_citytour.png\" alt=\"Logo\" />\r\n      </h1>\r\n      <form role=\"form\" (submit)=\"signin($event, username.value, password.value)\">\r\n        <div *ngIf=\"message\" class=\"text-center alert alert-danger\" role=\"alert\">\r\n          {{message}}\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"username\">Username</label>\r\n          <input type=\"text\" #username class=\"form-control\" id=\"username\" placeholder=\"Username\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" #password class=\"form-control\" id=\"password\" placeholder=\"Password\">\r\n        </div>\r\n        <div class=\"text-right\">\r\n          <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/account/signin/signin.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var SigninComponent = /** @class */ (function () {
    function SigninComponent(_router, _http) {
        this._router = _router;
        this._http = _http;
    }
    SigninComponent.prototype.ngOnInit = function () { };
    SigninComponent.prototype.signin = function (event, username, password) {
        var _this = this;
        event.preventDefault();
        // Stringify function works on django/rest but not for Express.
        // let body = JSON.stringify({ username, password });
        // console.log(body);
        this._http.post('/api/v1/authenticate/', { username: username, password: password })
            .subscribe(function (response) {
            sessionStorage.setItem('token', 'Bearer ' + response.json().token);
            sessionStorage.setItem('userId', response.json().userId);
            localStorage.setItem('token', response.json().token);
            // content_headers.set('Authorization', sessionStorage.getItem('token'));
            _this._router.navigate(['home']);
        }, function (error) {
            _this._router.navigate(['signin']);
            _this.message = "User or Password Invalid";
        });
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'app-signin',
            template: __webpack_require__("./src/app/account/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/account/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            http_1.Http])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;


/***/ }),

/***/ "./src/app/account/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:20px;\">\r\n  \r\n\r\n  <div class=\"row h-100 justify-content-center align-items-center mx-0\">\r\n    <div class=\"shadow-box\" style=\"width:100%; max-width:550px;\">\r\n      <h1 class=\"text-center\">\r\n        <img style=\"max-width:300px; margin-bottom: 10px;\" src=\"./uploads/logo_citytour.png\" alt=\"Logo\" />\r\n      </h1>\r\n      <h2 class=\"text-center\" style=\"font-weight:300; margin-bottom: 30px;\">\r\n        Register and Picture Your City.\r\n      </h2>\r\n      <form style=\"overflow:auto;\" #formCustomer=\"ngForm\" (ngSubmit)=\"submitAccount()\" class=\"form-horizontal\" enctype=\"multipart/form-data\">\r\n        <div class=\"Survey form-group has-feedback\"\r\n             [ngClass]=\"{'has-failure': (firstName.invalid || firstName.pristine)}\">\r\n          <label class=\"control-label\">First Name: </label>\r\n          <input type=\"text\" class=\"form-control\" id=\"first_name\" required\r\n                 [(ngModel)]=\"model.firstName\" name=\"firstName\" #firstName=\"ngModel\">\r\n        </div>\r\n        <div class=\"Survey form-group has-feedback\"\r\n             [ngClass]=\"{'has-failure': (lastName.valid || lastName.pristine)}\">\r\n          <label class=\"control-label\">Last Name: </label>\r\n          <input type=\"text\" class=\"form-control\" id=\"lastName\" required\r\n                 [(ngModel)]=\"model.lastName\" name=\"lastName\" #lastName=\"ngModel\">\r\n        </div>\r\n        <div class=\"Survey form-group has-feedback\"\r\n             [ngClass]=\"{'has-failure': (email.valid || email.pristine || email.touched )}\">\r\n          <label class=\"control-label\">Email: </label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\">@</div>\r\n            </div>\r\n            <input type=\"email\" class=\"form-control\" id=\"email\" required\r\n                   ng-pattern=\"/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/\"\r\n                   [(ngModel)]=\"model.email\" name=\"email\" #email=\"ngModel\">\r\n          </div>\r\n        </div>\r\n        <div class=\"Survey form-group has-feedback\"\r\n             [ngClass]=\"{'has-failure': (dateOfBirth.valid || dateOfBirth.pristine)}\">\r\n          <label class=\"control-label\">Date of Birth: </label>\r\n          <input type=\"date\" class=\"form-control\" id=\"dateOfBirth\"\r\n                 [(ngModel)]=\"model.dateOfBirth\" name=\"dateOfBirth\" #dateOfBirth=\"ngModel\">\r\n        </div>\r\n        <div class=\"Survey form-group has-feedback\"\r\n             [ngClass]=\"{'has-failure': (username.valid || username.pristine)}\">\r\n          <label class=\"control-label\">Username: </label>\r\n          <input type=\"text\" class=\"form-control\" id=\"username\" required\r\n                 [(ngModel)]=\"model.username\" name=\"username\" #username=\"ngModel\">\r\n        </div>\r\n        <div class=\"Survey form-group has-feedback\"\r\n             [ngClass]=\"{'has-failure': (password.valid || password.pristine)}\">\r\n          <label class=\"control-label\">Password: </label>\r\n          <input type=\"password\" class=\"form-control\" id=\"password\" required validateEqual=\"confirmPassword\" reverse=\"true\"\r\n                 [(ngModel)]=\"model.password\" name=\"password\" #password=\"ngModel\">\r\n        </div>\r\n        <div class=\"Survey form-group has-feedback\"\r\n             [ngClass]=\"{'has-failure': (confirmPassword.valid || confirmPassword.pristine)}\">\r\n          <label class=\"control-label\">Confirm Password: </label>\r\n          <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" required validateEqual=\"password\"\r\n                 [(ngModel)]=\"model.confirmPassword\" name=\"confirmPassword\" #confirmPassword=\"ngModel\">\r\n        </div>\r\n\r\n        <div class=\" form-group \">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 col-sm-6 mb-1\">\r\n                <!--<button type=\"button\" (click)=\"cancelSignup();\" class=\"btn btn-block btn-secondary\">Cancel</button>-->\r\n              </div>\r\n              <div class=\"col-md-6 col-sm-6 px-0\">\r\n                <button type=\"submit\" class=\"btn btn-block btn-info\">Register</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/account/signup/signup.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var account_service_1 = __webpack_require__("./src/app/account/account.service.ts");
var account_1 = __webpack_require__("./src/app/account/account.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(_accountService, _router) {
        this._accountService = _accountService;
        this._router = _router;
        this.model = new account_1.Account(1, '', '', '', '', '', '', '');
        this.editing = false;
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.ngOnChanges = function () {
    };
    SignupComponent.prototype.submitAccount = function () {
        var _this = this;
        var accountOperation;
        console.log(this.model);
        if (!this.editing) {
            accountOperation = this._accountService.addAccount(this.model);
        }
        else {
            accountOperation = this._accountService.updateAccount(this.model);
        }
        accountOperation.subscribe(function (accounts) {
            // EmitterService.get(this.listId).emit(accounts);
            _this.model = new account_1.Account(1, '', '', '', '', '', '', '');
            _this.editing = false;
            //this.cancelForm();
        }, function (error) {
            _this._router.navigate(['/signup']);
            console.log(error.toString());
        });
        this._router.navigateByUrl('signin');
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/account/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/account/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [account_service_1.AccountService, router_1.Router])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<app-header></app-header>-->\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var routes_1 = __webpack_require__("./src/app/routes.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var core_module_1 = __webpack_require__("./src/app/core/core.module.ts");
var account_module_1 = __webpack_require__("./src/app/account/account.module.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var picture_module_1 = __webpack_require__("./src/app/picture/picture.module.ts");
var map_module_1 = __webpack_require__("./src/app/map/map.module.ts");
var index_component_1 = __webpack_require__("./src/app/index/index.component.ts");
var auth_guard_1 = __webpack_require__("./src/app/core/auth-guard.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                index_component_1.IndexComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                // Router Module
                router_1.RouterModule.forRoot(routes_1.routes, { useHash: true }),
                core_module_1.CoreModule,
                account_module_1.AccountModule,
                picture_module_1.PictureModule,
                map_module_1.MapModule
            ],
            exports: [
                router_1.RouterModule
            ],
            providers: [
                auth_guard_1.AuthGuard,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/core/auth-guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_1 = __webpack_require__("./src/app/core/auth.ts");
var content_headers_1 = __webpack_require__("./src/app/core/content_headers.ts");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
        this.auth = new auth_1.Auth();
    }
    AuthGuard.prototype.canActivate = function () {
        if (content_headers_1.content_headers.get('Authorization') == null) {
            content_headers_1.content_headers.set('Authorization', sessionStorage.getItem('token'));
        }
        if (this.auth.loggedIn()) {
            return true;
        }
        this.router.navigate(['/signin']);
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./src/app/core/auth.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular2_jwt_1 = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.prototype.loggedIn = function () {
        if (angular2_jwt_1.tokenNotExpired()) {
            return true;
        }
        // alert('Session Expired.\n Login again...');
        return false;
    };
    return Auth;
}());
exports.Auth = Auth;


/***/ }),

/***/ "./src/app/core/content_headers.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
exports.content_headers = new http_1.Headers();
exports.content_headers.append('Accept', 'application/json');
exports.content_headers.append('Content-Type', 'application/json');
// contentHeaders.append('Authorization', localStorage.getItem('token'));
exports.content_headers.append('Authorization', sessionStorage.getItem('token'));


/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var header_component_1 = __webpack_require__("./src/app/core/header/header.component.ts");
var footer_component_1 = __webpack_require__("./src/app/core/footer/footer.component.ts");
var navbar_component_1 = __webpack_require__("./src/app/core/navbar/navbar.component.ts");
var home_component_1 = __webpack_require__("./src/app/core/home/home.component.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule
            ],
            declarations: [header_component_1.HeaderComponent, footer_component_1.FooterComponent, navbar_component_1.NavbarComponent, home_component_1.HomeComponent],
            exports: [header_component_1.HeaderComponent, footer_component_1.FooterComponent, navbar_component_1.NavbarComponent, home_component_1.HomeComponent]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;


/***/ }),

/***/ "./src/app/core/emitter-service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var EmitterService = /** @class */ (function () {
    function EmitterService() {
    }
    EmitterService.get = function (ID) {
        if (!this._emitters[ID]) {
            this._emitters[ID] = new core_1.EventEmitter();
        }
        return this._emitters[ID];
    };
    EmitterService._emitters = {};
    EmitterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], EmitterService);
    return EmitterService;
}());
exports.EmitterService = EmitterService;


/***/ }),

/***/ "./src/app/core/emitter.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EMITTERS = {
    listId: 'COMPONENT_LIST',
    editId: 'COMPONENT_EDIT'
};


/***/ }),

/***/ "./src/app/core/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center; padding-top: 20px;\">\n  Copyright: Students 2018\n</div>\n"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/core/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/core/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  header works!\n</p>\n"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("./src/app/core/header/header.component.html"),
            styles: [__webpack_require__("./src/app/core/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/core/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/core/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<nav *ngIf=\"isUserLogged()\" class=\"navbar navbar-expand-lg navbar-light no-print\" style=\"background-color: #d8d4d4;\">\r\n\r\n  <div class=\" \" style=\"display:table; margin:auto; text-align: center;\" id=\"searchbar\">\r\n    <form class=\"form-inline\">\r\n      <input class=\"form-control form-control-sm\" [(ngModel)]=\"vsearch\" #search name=\"mvsearch\" placeholder=\"Search Pictures\" aria-label=\"Search\" (keyup.enter)=\"fsearch();\" />\r\n      <button class=\"btn btn-info btn-sm right\" (click)=\"fsearch();\">Search</button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"wrapper\">\r\n  <div class=\"masonry\">\r\n    <div class=\"item\" *ngFor=\"let picture of pictures\" >\r\n      <img src=\"/uploads/{{ picture.name }}\" [routerLink]=\"['/pictures/view/' + picture._id]\">\r\n      <figcaption><em>{{ picture.location }}</em><br />{{ picture.description }}</figcaption>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var picture_service_1 = __webpack_require__("./src/app/picture/picture.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_pictureService) {
        this._pictureService = _pictureService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadPictures();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
    };
    HomeComponent.prototype.loadPictures = function () {
        var _this = this;
        if (this.vsearch == '')
            this.vsearch = 'undefined';
        this._pictureService.getAllPictures(this.vsearch).subscribe(function (pictures) { return _this.pictures = pictures; }, function (err) { return console.log(err); });
    };
    HomeComponent.prototype.fsearch = function () {
        console.log(this.vsearch);
        this.loadPictures();
        console.log(this.pictures);
    };
    HomeComponent.prototype.isUserLogged = function () {
        if (localStorage.getItem("token")) {
            return true;
        }
        else {
            return false;
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/core/home/home.component.html"),
            styles: [__webpack_require__("./src/app/core/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [picture_service_1.PictureService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/core/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<script>\r\n  $(document).ready(function () {\r\n    $('.dropdown-toggle').dropdown();\r\n  });\r\n</script>\r\n\r\n<nav *ngIf=\"isUserLogged();\" class=\"navbar navbar-expand-lg navbar-light no-print\" style=\"background-color: #d8d4d4;\">\r\n  <a class=\"navbar-brand col-md-4\" [routerLink]=\"['/home']\">\r\n    <img style=\"max-width:150px; margin:0;\" src=\"./uploads/logo_citytour.png\" alt=\"Logo\" />\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  \r\n\r\n  <div class=\"collapse navbar-collapse col-md-6 \" id=\"navbarSupportedContent\" >\r\n    <form class=\"form-inline my-2 my-lg-0 col-md-6\">\r\n      <!--<input class=\"form-control form-control-sm\" #search id=\"search\" type=\"search\" placeholder=\"Search Pictures\" aria-label=\"Search\" keyup.enter=\"search(thise)\">-->\r\n    </form>\r\n\r\n    <ul class=\"navbar-nav mr-auto right col-md-8\">\r\n      <li class=\"nav-item\">\r\n        <a [routerLink]=\"['/pictures/create']\" class=\"btn btn-outilined-info nav-link\">Add a Picture</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a [routerLink]=\"['/map/']\" class=\"nav-link\">Map</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a [routerLink]=\"['/accounts/']\" class=\"nav-link\">Users</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a [routerLink]=\"['/pictures/']\" class=\"nav-link\">Pictures</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a [routerLink]=\"['/profile']\" class=\"nav-link\">Profile</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <span class=\"nav-link\" (click)=\"signout();\">Signout</span>\r\n      </li>\r\n    </ul>\r\n\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/core/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_router) {
        this._router = _router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.search = function (search) {
        search.preventDefault();
        console.log("Searching : ", search.value);
    };
    NavbarComponent.prototype.signout = function () {
        if (confirm('You will be logout. Are you sure?')) {
            localStorage.removeItem('token');
            sessionStorage.clear();
            // this._router.navigate(['/login']);
            this._router.navigateByUrl('/');
        }
    };
    NavbarComponent.prototype.isUserLogged = function () {
        if (localStorage.getItem("token")) {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/core/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/core/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/index/index.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"background:url('/uploads/background.jpg') center no-repeat; background-size: cover;\">\r\n  <div class=\"container text-center\">\r\n    <div class=\"mr-auto\" style=\"max-width: 800px; display:inline-block\">\r\n\r\n      \r\n\r\n      <div class=\"jumbotron\" style=\"background-color:rgba(250,250,250,.90); margin: 60px 10px;\">\r\n        <img src=\"../uploads/logo_citytour.png\" style=\"margin: 30px 10px; max-width: 550px;\">\r\n        <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r\n        <hr class=\"my-4\">\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>\r\n        <p class=\"lead\">\r\n          <a class=\"btn btn-primary btn-lg col-md-5\" [routerLink]=\"['signin']\" role=\"button\" style=\"margin-top:10px;\">Signin</a>\r\n        </p>\r\n        <p class=\"lead\">\r\n          <h5 style=\"font-weight:300;\">Don't have an account yet? Signup here.</h5>\r\n          <a class=\"btn btn-primary btn-lg col-md-5\" [routerLink]=\"['signup']\" role=\"button\" style=\"margin-top:10px;\">Signup Here</a>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        core_1.Component({
            selector: 'app-index',
            template: __webpack_require__("./src/app/index/index.component.html"),
            styles: [__webpack_require__("./src/app/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;


/***/ }),

/***/ "./src/app/map/map-view/map-view.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/map/map-view/map-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding:0; margin:0\">\r\n  <!-- HTML Code to add the google maps API -->\r\n  <script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyBlMibVNpDiCnnmXnn0DubgBCWtE06Qw9A&callback=initMap\"></script>\r\n  <div id=\"map\" style=\"width:100%;height:600px\"></div>\r\n\r\n  <!--<script>\r\n        // Note: This example requires that you consent to location sharing when\r\n        // prompted by your browser. If you see the error \"The Geolocation service\r\n        // failed.\", it means you probably did not give permission for the browser to\r\n        // locate you.\r\n        var map, infoWindow;\r\n        function initMap() {\r\n            map = new google.maps.Map(document.getElementById('map'), {\r\n              center: { lat: 43.78, lng: -79.22 },\r\n                zoom: 6\r\n            });\r\n            infoWindow = new google.maps.InfoWindow;\r\n\r\n            // Try HTML5 geolocation.\r\n            if (navigator.geolocation) {\r\n                navigator.geolocation.getCurrentPosition(function (position) {\r\n                    var pos = {\r\n                        lat: position.coords.latitude,\r\n                        lng: position.coords.longitude\r\n                    };\r\n\r\n                  infoWindow.setPosition(pos);\r\n\r\n                    infoWindow.setContent('You are here.');\r\n                    infoWindow.open(map);\r\n                    map.setCenter(pos);\r\n                }, function () {\r\n                    handleLocationError(true, infoWindow, map.getCenter());\r\n                });\r\n            } else {\r\n                // Browser doesn't support Geolocation\r\n                handleLocationError(false, infoWindow, map.getCenter());\r\n            }\r\n\r\n            var marker = new google.maps.Marker({\r\n                position: { lat: 43.78, lng: -79.22 },\r\n                map: map,\r\n                title: 'Hello World!'\r\n            });\r\n\r\n            var image = \"uploads/1520372311453_banner-bottom-posh.jpg\";\r\n            var contentString = '<div id=\"content\">' +\r\n                '<div id=\"siteNotice\">' +\r\n                '</div>' +\r\n                '<h1 id=\"firstHeading\" class=\"firstHeading\">Uluru</h1>' +\r\n                '<div id=\"bodyContent\">' +\r\n                '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +\r\n                'sandstone rock formation in the southern part of the ' +\r\n                'rock caves and ancient paintings. Uluru is listed as a World ' +\r\n                'Heritage Site.</p>' +\r\n                '<p>Attribution: Uluru, <a href=\"https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194\">' +\r\n                'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +\r\n                '(last visited June 22, 2009).</p>' +\r\n                '</div>' +\r\n                '</div>';\r\n\r\n            var infowindow = new google.maps.InfoWindow({\r\n                content: contentString\r\n            });\r\n            var marker = new google.maps.Marker({\r\n                position: { lat: 42.66, lng: -78.44 },\r\n                map: map,\r\n                title: 'Hello World 2!',\r\n                animation: google.maps.Animation.DROP,\r\n                //icon: image\r\n            });\r\n            marker.addListener('click', function () {\r\n                infowindow.open(map, marker);\r\n            });\r\n        }\r\n\r\n        function handleLocationError(browserHasGeolocation, infoWindow, pos) {\r\n            infoWindow.setPosition(pos);\r\n            infoWindow.setContent(browserHasGeolocation ?\r\n                'Error: The Geolocation service failed.' :\r\n                'Error: Your browser doesn\\'t support geolocation.');\r\n            infoWindow.open(map);\r\n        }\r\n  </script>\r\n\r\n  <script type=\"text/javascript\">\r\n      function myMap() {\r\n          var mapOptions = {\r\n              center: new google.maps.LatLng(51.5, -0.12),\r\n              zoom: 10,\r\n              mapTypeId: google.maps.MapTypeId.HYBRID\r\n          }\r\n          var map = new google.maps.Map(document.getElementById(\"map\"), mapOptions);\r\n      }\r\n  </script>-->\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/map/map-view/map-view.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var picture_service_1 = __webpack_require__("./src/app/picture/picture.service.ts");
var MapViewComponent = /** @class */ (function () {
    function MapViewComponent(_pictureService) {
        this._pictureService = _pictureService;
    }
    MapViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._pictureService.getAllPictures('undefined').subscribe(function (pictures) {
            _this.pictures = pictures;
            _this.initMap();
        }, function (err) { return console.log(err); });
        console.log(this.pictures);
    };
    MapViewComponent.prototype.ngOnChanges = function () {
    };
    MapViewComponent.prototype.getLocation = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            console.log('pos : ', pos);
            _this.infoWindow.setPosition(pos);
            _this.infoWindow.setContent('You are here.');
            _this.infoWindow.open(_this.map);
            _this.map.setCenter(pos);
            return (pos);
        }, function () {
            return (false);
        });
    };
    MapViewComponent.prototype.initMap = function () {
        var _this = this;
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 43.78, lng: -79.22 },
            zoom: 14
        });
        this.infoWindow = new google.maps.InfoWindow;
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                this.infoWindow.setPosition(pos);
                this.infoWindow.setContent('You are here.');
                this.infoWindow.open(this.map);
                this.map.setCenter(pos);
            }, function () {
                this.handleLocationError(true, this.infoWindow, this.map.getCenter());
            });
        }
        else {
            // Browser doesn't support Geolocation
            this.handleLocationError(false, this.infoWindow, this.map.getCenter());
        }
        this.pictures.map(function (picture) {
            var marker = new google.maps.Marker({
                position: { lat: parseFloat(picture.lat), lng: parseFloat(picture.lng) },
                map: _this.map,
                title: picture.location,
                animation: google.maps.Animation.DROP,
            });
            var image = "uploads/" + picture.name;
            var contentString = '<div id="content">' +
                '<div id="siteNotice" >' +
                '<h1 id="firstHeading" class="firstHeading">' + picture.location + '</h1>' +
                '<div id="bodyContent">' + picture.description + '</div>' +
                '<img src=uploads/' + picture.name + ' style="width: 250px; height:auto; padding: 10px;">' +
                '</div>';
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            //var marker = new google.maps.Marker({
            //  position: { lat: 42.66, lng: -78.44 },
            //  map: this.map,
            //  title: 'Hello World 2!',
            //  animation: google.maps.Animation.DROP,
            //  //icon: image
            //});
            marker.addListener('mouseover', function () {
                infowindow.open(this.map, marker);
            });
            marker.addListener('mouseout', function () {
                infowindow.close();
            });
        });
    };
    MapViewComponent.prototype.handleLocationError = function (browserHasGeolocation, infoWindow, pos) {
        this.infoWindow.setPosition(pos);
        this.infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        this.infoWindow.open(this.map);
    };
    MapViewComponent = __decorate([
        core_1.Component({
            selector: 'app-map-view',
            template: __webpack_require__("./src/app/map/map-view/map-view.component.html"),
            styles: [__webpack_require__("./src/app/map/map-view/map-view.component.css")]
        }),
        __metadata("design:paramtypes", [picture_service_1.PictureService])
    ], MapViewComponent);
    return MapViewComponent;
}());
exports.MapViewComponent = MapViewComponent;


/***/ }),

/***/ "./src/app/map/map.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var map_view_component_1 = __webpack_require__("./src/app/map/map-view/map-view.component.ts");
var MapModule = /** @class */ (function () {
    function MapModule() {
    }
    MapModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [map_view_component_1.MapViewComponent]
        })
    ], MapModule);
    return MapModule;
}());
exports.MapModule = MapModule;


/***/ }),

/***/ "./src/app/picture/picture-create/picture-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/picture/picture-create/picture-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:20px;\">\r\n\r\n\r\n  <div class=\"row h-100 justify-content-center align-items-center mx-0\">\r\n    <div class=\"shadow-box\" style=\"width:100%; max-width:550px;\">\r\n      <h1 class=\"text-center\">\r\n        <img style=\"max-width:300px; margin-bottom: 10px;\" src=\"./uploads/logo_citytour.png\" alt=\"Logo\" />\r\n      </h1>\r\n      <form style=\"overflow:auto;\" #formPicture=\"ngForm\" (ngSubmit)=\"submitPicture()\" class=\"form-horizontal\" enctype=\"multipart/form-data\">\r\n\r\n        <div class=\"Survey form-group has-feedback\"\r\n             [ngClass]=\"{'has-failure': (description.valid || description.pristine)}\">\r\n          <label class=\"control-label\">Description: </label>\r\n          <input type=\"text\" class=\"form-control\" id=\"description\" required\r\n                 [(ngModel)]=\"picture.description\" name=\"description\" #description=\"ngModel\">\r\n        </div>\r\n        <div class=\"Survey form-group has-feedback\"\r\n             [ngClass]=\"{'has-failure': (location.valid || location.pristine)}\">\r\n          <label class=\"control-label\">Location: </label>\r\n          <input type=\"text\" class=\"form-control\" id=\"location\" required\r\n                 [(ngModel)]=\"picture.location\" name=\"location\" #location=\"ngModel\">\r\n        </div>\r\n\r\n        <div class=\"Survey form-group\">\r\n          <label class=\"control-label\">Picture: </label>\r\n          <input type=\"file\" size=\"30\" placeholder=\"Select a picture...\" name=\"image\" multiple=\"multiple\" class=\"form-control\"\r\n                 (change)=\"fileChangeEvent($event)\">\r\n        </div>\r\n\r\n        <div class=\" form-group \">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 col-sm-6 mb-1\">\r\n                <button type=\"button\" (click)=\"cancelInsert();\" class=\" btn btn-primary btn-block\">Close</button>\r\n              </div>\r\n              <div class=\"col-md-6 col-sm-6 px-0\">\r\n                <button type=\"submit\" class=\" btn btn-success btn-block\" [disabled]=\"false\">Save Pictures</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/picture/picture-create/picture-create.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var picture_1 = __webpack_require__("./src/app/picture/picture.ts");
var picture_service_1 = __webpack_require__("./src/app/picture/picture.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var PictureCreateComponent = /** @class */ (function () {
    function PictureCreateComponent(_pictureService, _router) {
        this._pictureService = _pictureService;
        this._router = _router;
        this.picture = new picture_1.Picture('', '', '', '', '', '', '', '');
        this.filesToUpload = [];
        this.editing = false;
    }
    PictureCreateComponent.prototype.ngOnInit = function () {
        this.getLocation();
    };
    PictureCreateComponent.prototype.ngOnChanges = function () {
    };
    PictureCreateComponent.prototype.getLocation = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            console.log(_this.pos.lat);
        }, function () {
            // Browser doesn't support Geolocation
            console.log("Unable to use geoLocation");
        });
    };
    PictureCreateComponent.prototype.submitPicture = function () {
        var _this = this;
        var formData = new FormData();
        var files = this.filesToUpload;
        //console.log(files);
        for (var i = 0; i < files.length; i++) {
            formData.append("uploads[]", files[i], files[i]['name']);
        }
        formData.append('location', this.picture.location);
        formData.append('description', this.picture.description);
        formData.append('lat', this.pos.lat);
        formData.append('lng', this.pos.lng);
        this._pictureService.createPicture(formData)
            .subscribe(function (pictures) {
            _this.picture = new picture_1.Picture('', '', '', '', '', '', '', '');
            // EmitterService.get(this.listId).emit(pictures);
        });
        this._router.navigateByUrl('pictures');
    };
    PictureCreateComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        //this.product.photo = fileInput.target.files[0]['name'];
    };
    PictureCreateComponent.prototype.cancelInsert = function () {
        this._router.navigateByUrl('pictures');
    };
    PictureCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-picture-create',
            template: __webpack_require__("./src/app/picture/picture-create/picture-create.component.html"),
            styles: [__webpack_require__("./src/app/picture/picture-create/picture-create.component.css")]
        }),
        __metadata("design:paramtypes", [picture_service_1.PictureService, router_1.Router])
    ], PictureCreateComponent);
    return PictureCreateComponent;
}());
exports.PictureCreateComponent = PictureCreateComponent;


/***/ }),

/***/ "./src/app/picture/picture-edit/picture-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/picture/picture-edit/picture-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:20px;\">\r\n\r\n\r\n  <div class=\"row h-100 justify-content-center align-items-center mx-0\">\r\n    <div class=\"shadow-box\" style=\"width:100%; max-width:550px;\">\r\n      <h1 class=\"text-center\">\r\n        <img style=\"max-width:300px; margin-bottom: 10px;\" src=\"./uploads/logo_citytour.png\" alt=\"Logo\" />\r\n      </h1>\r\n      <form style=\"overflow:auto;\" #formPicture=\"ngForm\" (ngSubmit)=\"submitPicture()\" class=\"form-horizontal\" enctype=\"multipart/form-data\">\r\n        <div class=\" form-group has-feedback\"\r\n             [ngClass]=\"{'has-failure': (name.invalid || name.pristine)}\">\r\n          <label class=\"control-label\">Name: </label>\r\n          <input type=\"text\" class=\"form-control\" id=\"name\" required readonly\r\n                 [(ngModel)]=\"picture.name\" name=\"name\" #name=\"ngModel\">\r\n        </div>\r\n        <div class=\" form-group has-feedback\"\r\n             [ngClass]=\"{'has-failure': (description.valid || description.pristine)}\">\r\n          <label class=\"control-label\">Description: </label>\r\n          <input type=\"text\" class=\"form-control\" id=\"description\" required\r\n                 [(ngModel)]=\"picture.description\" name=\"description\" #description=\"ngModel\">\r\n        </div>\r\n        <div class=\" form-group has-feedback\"\r\n             [ngClass]=\"{'has-failure': (location.valid || location.pristine)}\">\r\n          <label class=\"control-label\">Location: </label>\r\n          <input type=\"text\" class=\"form-control\" id=\"location\" required\r\n                 [(ngModel)]=\"picture.location\" name=\"location\" #location=\"ngModel\">\r\n        </div>\r\n\r\n        <div class=\" form-group \">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 col-sm-6 mb-1\">\r\n                <button type=\"button\" (click)=\"cancelEdit();\" class=\" btn btn-primary btn-block\">Close</button>\r\n              </div>\r\n              <div class=\"col-md-6  col-sm-6 px-0\">\r\n                <button type=\"submit\" class=\" btn btn-success btn-block\" [disabled]=\"false\">Save Pictures</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/picture/picture-edit/picture-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var picture_service_1 = __webpack_require__("./src/app/picture/picture.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var picture_1 = __webpack_require__("./src/app/picture/picture.ts");
var PictureEditComponent = /** @class */ (function () {
    function PictureEditComponent(_pictureService, _route, _router) {
        var _this = this;
        this._pictureService = _pictureService;
        this._route = _route;
        this._router = _router;
        this.picture = new picture_1.Picture('', '', '', '', '', '', '', '');
        this.editing = false;
        this._route.params.subscribe(function (params) { return _this.loadPicture(params['id']); });
    }
    PictureEditComponent.prototype.ngOnInit = function () {
    };
    PictureEditComponent.prototype.loadPicture = function (id) {
        var _this = this;
        this._pictureService.getPicture(id)
            .subscribe(function (picture) { return _this.picture = picture; }, function (err) { return console.log(err); });
    };
    PictureEditComponent.prototype.submitPicture = function () {
        var _this = this;
        console.log(this.picture);
        this._pictureService.updatePicture(this.picture).subscribe(function (pictures) {
            _this.picture = new picture_1.Picture('', '', '', '', '', '', '', '');
            //this.editing = false;
        });
        this._router.navigateByUrl('pictures');
    };
    PictureEditComponent.prototype.cancelEdit = function () {
        this._router.navigateByUrl('pictures');
    };
    PictureEditComponent = __decorate([
        core_1.Component({
            selector: 'app-picture-edit',
            template: __webpack_require__("./src/app/picture/picture-edit/picture-edit.component.html"),
            styles: [__webpack_require__("./src/app/picture/picture-edit/picture-edit.component.css")]
        }),
        __metadata("design:paramtypes", [picture_service_1.PictureService, router_1.ActivatedRoute, router_1.Router])
    ], PictureEditComponent);
    return PictureEditComponent;
}());
exports.PictureEditComponent = PictureEditComponent;


/***/ }),

/***/ "./src/app/picture/picture-list/picture-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/picture/picture-list/picture-list.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\r\n  <thead>\r\n    <tr>\r\n      <!--<th scope=\"col\">ID</th>-->\r\n      <th scope=\"col\">Image</th>\r\n      <th scope=\"col\">Name</th>\r\n      <th scope=\"col\">Location</th>\r\n      <th scope=\"col\">Description</th>\r\n      <th scope=\"col\">Status</th>\r\n      <th scope=\"col\">Action</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let picture of pictures\">\r\n      <!--<td>{{ picture._id }}</td>-->\r\n      <td><img src=\"/uploads/{{ picture.name }}\" class=\"thumb\" /></td>\r\n      <td>{{ picture.name }}</td>\r\n      <td>{{ picture.location }}</td>\r\n      <td>{{ picture.description }}</td>\r\n      <td><span *ngIf=\"picture.status == 1\">Blocked</span></td>\r\n      <td>\r\n        <button class=\"btn btn-sm btn-info\" [routerLink]=\"['/pictures/view/' + picture._id]\">View</button>\r\n        <button class=\"btn btn-sm btn-info\" [routerLink]=\"['/pictures/edit/' + picture._id]\">Edit</button>\r\n        <button class=\"btn btn-sm btn-warning\" (click)=\"blockPicture(picture._id);\" *ngIf=\"picture.status != 1\">Block</button>\r\n        <button class=\"btn btn-sm btn-warning\" (click)=\"unblockPicture(picture._id);\" *ngIf=\"picture.status == 1\">Unblock</button>\r\n        <button class=\"btn btn-sm btn-danger\" (click)=\"deletePicture(picture._id);\">Delete</button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\n\n"

/***/ }),

/***/ "./src/app/picture/picture-list/picture-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var picture_service_1 = __webpack_require__("./src/app/picture/picture.service.ts");
var PictureListComponent = /** @class */ (function () {
    function PictureListComponent(_pictureService) {
        this._pictureService = _pictureService;
    }
    PictureListComponent.prototype.ngOnInit = function () {
        this.loadPictures();
    };
    PictureListComponent.prototype.loadPictures = function () {
        var _this = this;
        this._pictureService.adminGetAllPictures().subscribe(function (pictures) { return _this.pictures = pictures; }, function (err) { return console.log(err); });
    };
    PictureListComponent.prototype.deletePicture = function (id) {
        var _this = this;
        this._pictureService.deletePicture(id).subscribe(function (picture) { return _this.loadPictures(); }, function (err) { return console.log(err); });
    };
    PictureListComponent.prototype.blockPicture = function (id) {
        var _this = this;
        this._pictureService.blockPicture(id).subscribe(function (picture) { return _this.loadPictures(); }, function (err) { return console.log(err); });
    };
    PictureListComponent.prototype.unblockPicture = function (id) {
        var _this = this;
        this._pictureService.unblockPicture(id).subscribe(function (picture) { return _this.loadPictures(); }, function (err) { return console.log(err); });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PictureListComponent.prototype, "pictureId", void 0);
    PictureListComponent = __decorate([
        core_1.Component({
            selector: 'app-picture-list',
            template: __webpack_require__("./src/app/picture/picture-list/picture-list.component.html"),
            styles: [__webpack_require__("./src/app/picture/picture-list/picture-list.component.css")]
        }),
        __metadata("design:paramtypes", [picture_service_1.PictureService])
    ], PictureListComponent);
    return PictureListComponent;
}());
exports.PictureListComponent = PictureListComponent;


/***/ }),

/***/ "./src/app/picture/picture-view/picture-view.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/picture/picture-view/picture-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"viewbox\">\r\n    <p *ngIf=\"picture\">\r\n      <img src=\"/uploads/{{ picture.name }}\" class=\"viewimage\" />\r\n\r\n    </p>\r\n    <figcaption>\r\n      <em>\r\n        {{picture.location}}</em> <br />\r\n        {{picture.description}}\r\n        <a class=\"btn \" [routerLink]=\"['/pictures/edit/' + picture._id]\">Edit</a>\r\n      </figcaption>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/picture/picture-view/picture-view.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var picture_service_1 = __webpack_require__("./src/app/picture/picture.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var PictureViewComponent = /** @class */ (function () {
    function PictureViewComponent(_pictureService, _route) {
        var _this = this;
        this._pictureService = _pictureService;
        this._route = _route;
        this._route.params.subscribe(function (params) {
            _this.loadPicture(params['id']);
            console.log(params['id']);
        });
    }
    PictureViewComponent.prototype.ngOnInit = function () {
    };
    PictureViewComponent.prototype.loadPicture = function (id) {
        var _this = this;
        this._pictureService.getPicture(id)
            .subscribe(function (picture) { return _this.picture = picture; }, function (err) { return console.log(err); });
        console.log(this.picture);
    };
    PictureViewComponent = __decorate([
        core_1.Component({
            selector: 'app-picture-view',
            template: __webpack_require__("./src/app/picture/picture-view/picture-view.component.html"),
            styles: [__webpack_require__("./src/app/picture/picture-view/picture-view.component.css")]
        }),
        __metadata("design:paramtypes", [picture_service_1.PictureService, router_1.ActivatedRoute])
    ], PictureViewComponent);
    return PictureViewComponent;
}());
exports.PictureViewComponent = PictureViewComponent;


/***/ }),

/***/ "./src/app/picture/picture.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var picture_list_component_1 = __webpack_require__("./src/app/picture/picture-list/picture-list.component.ts");
var picture_view_component_1 = __webpack_require__("./src/app/picture/picture-view/picture-view.component.ts");
var picture_edit_component_1 = __webpack_require__("./src/app/picture/picture-edit/picture-edit.component.ts");
var picture_service_1 = __webpack_require__("./src/app/picture/picture.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var picture_create_component_1 = __webpack_require__("./src/app/picture/picture-create/picture-create.component.ts");
var PictureModule = /** @class */ (function () {
    function PictureModule() {
    }
    PictureModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule,
            ],
            declarations: [picture_list_component_1.PictureListComponent, picture_view_component_1.PictureViewComponent, picture_edit_component_1.PictureEditComponent, picture_create_component_1.PictureCreateComponent],
            providers: [
                picture_service_1.PictureService
            ]
        })
    ], PictureModule);
    return PictureModule;
}());
exports.PictureModule = PictureModule;


/***/ }),

/***/ "./src/app/picture/picture.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var content_headers_1 = __webpack_require__("./src/app/core/content_headers.ts");
var PictureService = /** @class */ (function () {
    function PictureService(_http) {
        this._http = _http;
        this.base_url = '/api/v1/pictures/';
    }
    PictureService.prototype.adminGetAllPictures = function () {
        return this._http.get(this.base_url, { headers: content_headers_1.content_headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error retrieving pictures'); });
    };
    PictureService.prototype.getAllPictures = function (searchable) {
        return this._http.get(this.base_url + 'search/' + searchable, { headers: content_headers_1.content_headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error retrieving pictures'); });
    };
    PictureService.prototype.getPicture = function (id) {
        return this._http.get(this.base_url + id, { headers: content_headers_1.content_headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error retrieving the picture with the id ' + id); });
    };
    PictureService.prototype.createPicture = function (body) {
        console.log('Inserting new picture');
        console.log(body);
        var custom_content_headers = new http_1.Headers();
        // custom_content_headers.append('Content-Type', 'undefined');
        // contentHeaders.append('Authorization', localStorage.getItem('token'));
        custom_content_headers.append('Authorization', sessionStorage.getItem('token'));
        return this._http.post(this.base_url, body, { headers: custom_content_headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error inserting a new picture'); });
    };
    PictureService.prototype.updatePicture = function (body) {
        console.log("Updating ", body['_id']);
        return this._http.put(this.base_url + body['_id'], body, { headers: content_headers_1.content_headers })
            .map(function (res) { return res.json; })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error updating the picture with the id ' + body['_id']); });
    };
    PictureService.prototype.deletePicture = function (id) {
        console.log("Deleting ", id);
        var body = { deleted: 1 };
        return this._http.put(this.base_url + 'delete/' + id, body, { headers: content_headers_1.content_headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error deleting the picture wiht the id ' + id); });
    };
    PictureService.prototype.blockPicture = function (id) {
        // status = 1 => image blocked
        var body = { status: 1 };
        return this._http.put(this.base_url + id, body, { headers: content_headers_1.content_headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error blocking the picture with the id ' + id); });
    };
    PictureService.prototype.unblockPicture = function (id) {
        // status = 1 => image blocked
        var body = { status: 0 };
        return this._http.put(this.base_url + id, body, { headers: content_headers_1.content_headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error unblocking the picture with the id ' + id); });
    };
    PictureService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], PictureService);
    return PictureService;
}());
exports.PictureService = PictureService;


/***/ }),

/***/ "./src/app/picture/picture.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Picture = /** @class */ (function () {
    function Picture(name, path, description, location, lat, lng, userOwner, aiDescription) {
        this.name = name;
        this.path = path;
        this.description = description;
        this.location = location;
        this.lat = lat;
        this.lng = lng;
        this.userOwner = userOwner;
        this.aiDescription = aiDescription;
    }
    return Picture;
}());
exports.Picture = Picture;


/***/ }),

/***/ "./src/app/routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = __webpack_require__("./src/app/core/home/home.component.ts");
var signin_component_1 = __webpack_require__("./src/app/account/signin/signin.component.ts");
var signup_component_1 = __webpack_require__("./src/app/account/signup/signup.component.ts");
var account_list_component_1 = __webpack_require__("./src/app/account/account-list/account-list.component.ts");
var picture_list_component_1 = __webpack_require__("./src/app/picture/picture-list/picture-list.component.ts");
var picture_edit_component_1 = __webpack_require__("./src/app/picture/picture-edit/picture-edit.component.ts");
var picture_view_component_1 = __webpack_require__("./src/app/picture/picture-view/picture-view.component.ts");
var picture_create_component_1 = __webpack_require__("./src/app/picture/picture-create/picture-create.component.ts");
var account_edit_component_1 = __webpack_require__("./src/app/account/account-edit/account-edit.component.ts");
var account_view_component_1 = __webpack_require__("./src/app/account/account-view/account-view.component.ts");
var map_view_component_1 = __webpack_require__("./src/app/map/map-view/map-view.component.ts");
var index_component_1 = __webpack_require__("./src/app/index/index.component.ts");
var auth_guard_1 = __webpack_require__("./src/app/core/auth-guard.ts");
var profile_component_1 = __webpack_require__("./src/app/account/profile/profile.component.ts");
exports.routes = [
    { path: '', component: index_component_1.IndexComponent },
    {
        path: 'home', canActivate: [auth_guard_1.AuthGuard], component: home_component_1.HomeComponent
    },
    // Account Routes
    { path: 'signin', component: signin_component_1.SigninComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'accounts', canActivate: [auth_guard_1.AuthGuard], component: account_list_component_1.AccountListComponent },
    { path: 'account-edit/:id', canActivate: [auth_guard_1.AuthGuard], component: account_edit_component_1.AccountEditComponent },
    { path: 'account-view/:id', canActivate: [auth_guard_1.AuthGuard], component: account_view_component_1.AccountViewComponent },
    { path: 'profile', canActivate: [auth_guard_1.AuthGuard], component: profile_component_1.ProfileComponent },
    // Picture Routes
    { path: 'pictures', canActivate: [auth_guard_1.AuthGuard], component: picture_list_component_1.PictureListComponent },
    { path: 'pictures/create', canActivate: [auth_guard_1.AuthGuard], component: picture_create_component_1.PictureCreateComponent },
    { path: 'pictures/edit/:id', canActivate: [auth_guard_1.AuthGuard], component: picture_edit_component_1.PictureEditComponent },
    { path: 'pictures/view/:id', canActivate: [auth_guard_1.AuthGuard], component: picture_view_component_1.PictureViewComponent },
    // Picture Routes
    { path: 'map', canActivate: [auth_guard_1.AuthGuard], component: map_view_component_1.MapViewComponent },
];


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map