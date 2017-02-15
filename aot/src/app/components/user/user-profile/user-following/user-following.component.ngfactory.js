/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../../../../src/app/components/user/user-profile/user-following/user-following.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@ngrx/store/src/store';
import * as import9 from '@angular/router/src/router_state';
import * as import10 from '../../../../../../../src/app/services/user.service';
import * as import11 from './user-following.component.scss.shim.ngstyle';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '@angular/core/src/change_detection/change_detection_util';
import * as import14 from '@angular/core/src/security';
import * as import15 from '../../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import16 from '@angular/common/src/pipes/async_pipe';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import19 from '@angular/common/src/directives/ng_for';
export var Wrapper_UserFollowingComponent = (function () {
    function Wrapper_UserFollowingComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.UserFollowingComponent(p0, p1, p2);
    }
    Wrapper_UserFollowingComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_UserFollowingComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_UserFollowingComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_UserFollowingComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_UserFollowingComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_UserFollowingComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_UserFollowingComponent;
}());
var renderType_UserFollowingComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_UserFollowingComponent_Host0 = (function (_super) {
    __extends(View_UserFollowingComponent_Host0, _super);
    function View_UserFollowingComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_UserFollowingComponent_Host0, renderType_UserFollowingComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_UserFollowingComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'tr-user-following', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_UserFollowingComponent0(this.viewUtils, this, 0, this._el_0);
        this._UserFollowingComponent_0_3 = new Wrapper_UserFollowingComponent(this.injectorGet(import8.Store, this.parentIndex), this.injectorGet(import9.ActivatedRoute, this.parentIndex), this.injectorGet(import10.UserService, this.parentIndex));
        this.compView_0.create(this._UserFollowingComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._UserFollowingComponent_0_3.context);
    };
    View_UserFollowingComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.UserFollowingComponent) && (0 === requestNodeIndex))) {
            return this._UserFollowingComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_UserFollowingComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._UserFollowingComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_UserFollowingComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._UserFollowingComponent_0_3.ngOnDestroy();
    };
    View_UserFollowingComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserFollowingComponent_Host0;
}(import1.AppView));
export var UserFollowingComponentNgFactory = new import7.ComponentFactory('tr-user-following', View_UserFollowingComponent_Host0, import0.UserFollowingComponent);
var styles_UserFollowingComponent = [import11.styles];
var View_UserFollowingComponent1 = (function (_super) {
    __extends(View_UserFollowingComponent1, _super);
    function View_UserFollowingComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_UserFollowingComponent1, renderType_UserFollowingComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_33 = import13.UNINITIALIZED;
        this._expr_34 = import13.UNINITIALIZED;
        this._expr_35 = import13.UNINITIALIZED;
        this._expr_36 = import13.UNINITIALIZED;
        this._expr_37 = import13.UNINITIALIZED;
    }
    View_UserFollowingComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'ui grid following-list'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'two wide column'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'img', new import3.InlineArray2(2, 'class', 'ui avatar image'), null);
        this._text_7 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_8 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'twelve wide column'), null);
        this._text_10 = this.renderer.createText(this._el_9, '\n      ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_9, 'div', new import3.InlineArray2(2, 'class', 'name'), null);
        this._text_12 = this.renderer.createText(this._el_11, '', null);
        this._text_13 = this.renderer.createText(this._el_9, '\n      ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_9, 'div', new import3.InlineArray2(2, 'class', 'content'), null);
        this._text_15 = this.renderer.createText(this._el_14, '\n        ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_14, 'span', new import3.InlineArray2(2, 'class', 'info'), null);
        this._text_17 = this.renderer.createText(this._el_16, '', null);
        this._text_18 = this.renderer.createText(this._el_14, '\n        ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_14, 'span', new import3.InlineArray2(2, 'class', 'info'), null);
        this._text_20 = this.renderer.createText(this._el_19, '', null);
        this._text_21 = this.renderer.createText(this._el_14, '\n        ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_14, 'span', new import3.InlineArray2(2, 'class', 'info'), null);
        this._text_23 = this.renderer.createText(this._el_22, '', null);
        this._text_24 = this.renderer.createText(this._el_14, '\n      ', null);
        this._text_25 = this.renderer.createText(this._el_9, '\n    ', null);
        this._text_26 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'two wide column'), null);
        this._text_28 = this.renderer.createText(this._el_27, '\n      ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_27, 'i', new import3.InlineArray2(2, 'class', 'big teal check square icon'), null);
        this._text_30 = this.renderer.createText(this._el_27, '\n    ', null);
        this._text_31 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_32 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._text_32
        ]), null);
        return null;
    };
    View_UserFollowingComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_33 = ((this.context.$implicit == null) ? null : this.context.$implicit.profile_pic.url);
        if (import3.checkBinding(throwOnChange, this._expr_33, currVal_33)) {
            this.renderer.setElementProperty(this._el_6, 'src', this.viewUtils.sanitizer.sanitize(import14.SecurityContext.URL, currVal_33));
            this._expr_33 = currVal_33;
        }
        var currVal_34 = import3.inlineInterpolate(1, '\n        ', ((this.context.$implicit == null) ? null : this.context.$implicit.name), '\n      ');
        if (import3.checkBinding(throwOnChange, this._expr_34, currVal_34)) {
            this.renderer.setText(this._text_12, currVal_34);
            this._expr_34 = currVal_34;
        }
        var currVal_35 = import3.inlineInterpolate(1, '', ((this.context.$implicit == null) ? null : this.context.$implicit.total_trips), ' Trips');
        if (import3.checkBinding(throwOnChange, this._expr_35, currVal_35)) {
            this.renderer.setText(this._text_17, currVal_35);
            this._expr_35 = currVal_35;
        }
        var currVal_36 = import3.inlineInterpolate(1, '', ((this.context.$implicit == null) ? null : this.context.$implicit.total_followers), ' Followers');
        if (import3.checkBinding(throwOnChange, this._expr_36, currVal_36)) {
            this.renderer.setText(this._text_20, currVal_36);
            this._expr_36 = currVal_36;
        }
        var currVal_37 = import3.inlineInterpolate(1, '', ((this.context.$implicit == null) ? null : this.context.$implicit.total_following), ' Following');
        if (import3.checkBinding(throwOnChange, this._expr_37, currVal_37)) {
            this.renderer.setText(this._text_23, currVal_37);
            this._expr_37 = currVal_37;
        }
    };
    View_UserFollowingComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserFollowingComponent1;
}(import1.AppView));
var renderType_UserFollowingComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_UserFollowingComponent, {});
export var View_UserFollowingComponent0 = (function (_super) {
    __extends(View_UserFollowingComponent0, _super);
    function View_UserFollowingComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_UserFollowingComponent0, renderType_UserFollowingComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_UserFollowingComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_0 = new import12.ViewContainer(0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new import17.TemplateRef_(this, 0, this._anchor_0);
        this._NgFor_0_6 = new import15.Wrapper_NgFor(this._vc_0.vcRef, this._TemplateRef_0_5, this.parentView.injectorGet(import18.IterableDiffers, this.parentIndex), this.ref);
        this._pipe_async_0 = new import16.AsyncPipe(this.ref);
        this.init(null, (this.renderer.directRenderer ? null : [this._anchor_0]), null);
        return null;
    };
    View_UserFollowingComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import19.NgFor) && (0 === requestNodeIndex))) {
            return this._NgFor_0_6.context;
        }
        return notFoundResult;
    };
    View_UserFollowingComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import13.ValueUnwrapper();
        valUnwrapper.reset();
        var currVal_0_0_0 = valUnwrapper.unwrap(this._pipe_async_0.transform(this.context.followingList$));
        this._NgFor_0_6.check_ngForOf(currVal_0_0_0, throwOnChange, valUnwrapper.hasWrappedValue);
        this._NgFor_0_6.ngDoCheck(this, this._anchor_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
    };
    View_UserFollowingComponent0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
        this._pipe_async_0.ngOnDestroy();
    };
    View_UserFollowingComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 0)) {
            return new View_UserFollowingComponent1(this.viewUtils, this, 0, this._anchor_0, this._vc_0);
        }
        return null;
    };
    return View_UserFollowingComponent0;
}(import1.AppView));
//# sourceMappingURL=user-following.component.ngfactory.js.map