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
import * as import0 from '../../../../../../src/app/components/shared/instagram-authentication-callback/instagram-authentication-callback.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/router/src/router';
import * as import9 from '../../../../../../src/app/services/instagram-integration.service';
import * as import10 from './instagram-authentication-callback.component.css.shim.ngstyle';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/common/src/directives/ng_if';
import * as import15 from '@angular/core/src/change_detection/change_detection_util';
export var Wrapper_InstagramAuthenticationCallbackComponent = (function () {
    function Wrapper_InstagramAuthenticationCallbackComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.InstagramAuthenticationCallbackComponent(p0, p1);
    }
    Wrapper_InstagramAuthenticationCallbackComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_InstagramAuthenticationCallbackComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_InstagramAuthenticationCallbackComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_InstagramAuthenticationCallbackComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_InstagramAuthenticationCallbackComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_InstagramAuthenticationCallbackComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_InstagramAuthenticationCallbackComponent;
}());
var renderType_InstagramAuthenticationCallbackComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_InstagramAuthenticationCallbackComponent_Host0 = (function (_super) {
    __extends(View_InstagramAuthenticationCallbackComponent_Host0, _super);
    function View_InstagramAuthenticationCallbackComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_InstagramAuthenticationCallbackComponent_Host0, renderType_InstagramAuthenticationCallbackComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_InstagramAuthenticationCallbackComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'tr-instagram-authentication-callback', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_InstagramAuthenticationCallbackComponent0(this.viewUtils, this, 0, this._el_0);
        this._InstagramAuthenticationCallbackComponent_0_3 = new Wrapper_InstagramAuthenticationCallbackComponent(this.injectorGet(import8.Router, this.parentIndex), this.injectorGet(import9.InstagramIntegrationService, this.parentIndex));
        this.compView_0.create(this._InstagramAuthenticationCallbackComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._InstagramAuthenticationCallbackComponent_0_3.context);
    };
    View_InstagramAuthenticationCallbackComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.InstagramAuthenticationCallbackComponent) && (0 === requestNodeIndex))) {
            return this._InstagramAuthenticationCallbackComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_InstagramAuthenticationCallbackComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._InstagramAuthenticationCallbackComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_InstagramAuthenticationCallbackComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_InstagramAuthenticationCallbackComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_InstagramAuthenticationCallbackComponent_Host0;
}(import1.AppView));
export var InstagramAuthenticationCallbackComponentNgFactory = new import7.ComponentFactory('tr-instagram-authentication-callback', View_InstagramAuthenticationCallbackComponent_Host0, import0.InstagramAuthenticationCallbackComponent);
var styles_InstagramAuthenticationCallbackComponent = [import10.styles];
var View_InstagramAuthenticationCallbackComponent2 = (function (_super) {
    __extends(View_InstagramAuthenticationCallbackComponent2, _super);
    function View_InstagramAuthenticationCallbackComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_InstagramAuthenticationCallbackComponent2, renderType_InstagramAuthenticationCallbackComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_InstagramAuthenticationCallbackComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        Authentication with Instgram, Please Wait ....\n      ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_InstagramAuthenticationCallbackComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_InstagramAuthenticationCallbackComponent2;
}(import1.AppView));
var View_InstagramAuthenticationCallbackComponent3 = (function (_super) {
    __extends(View_InstagramAuthenticationCallbackComponent3, _super);
    function View_InstagramAuthenticationCallbackComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_InstagramAuthenticationCallbackComponent3, renderType_InstagramAuthenticationCallbackComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_InstagramAuthenticationCallbackComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'You are Authenticated With Instgram', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, 'You will be redirected to dashboard in 5 seconds.....', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n      ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ]), null);
        return null;
    };
    View_InstagramAuthenticationCallbackComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_InstagramAuthenticationCallbackComponent3;
}(import1.AppView));
var View_InstagramAuthenticationCallbackComponent4 = (function (_super) {
    __extends(View_InstagramAuthenticationCallbackComponent4, _super);
    function View_InstagramAuthenticationCallbackComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_InstagramAuthenticationCallbackComponent4, renderType_InstagramAuthenticationCallbackComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_InstagramAuthenticationCallbackComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Something went wrong, ', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, 'Log out from the Instgram if you are already logged in some other window and try again', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_0, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_9 = this.renderer.createText(this._el_8, 'You will be redirected to dashboard in 5 seconds.....', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n      ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10
        ]), null);
        return null;
    };
    View_InstagramAuthenticationCallbackComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_InstagramAuthenticationCallbackComponent4;
}(import1.AppView));
var View_InstagramAuthenticationCallbackComponent1 = (function (_super) {
    __extends(View_InstagramAuthenticationCallbackComponent1, _super);
    function View_InstagramAuthenticationCallbackComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_InstagramAuthenticationCallbackComponent1, renderType_InstagramAuthenticationCallbackComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_InstagramAuthenticationCallbackComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import11.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import13.TemplateRef_(this, 2, this._anchor_2);
        this._NgIf_2_6 = new import12.Wrapper_NgIf(this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n      ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_4 = new import11.ViewContainer(4, 0, this, this._anchor_4);
        this._TemplateRef_4_5 = new import13.TemplateRef_(this, 4, this._anchor_4);
        this._NgIf_4_6 = new import12.Wrapper_NgIf(this._vc_4.vcRef, this._TemplateRef_4_5);
        this._text_5 = this.renderer.createText(this._el_0, '\n      ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_6 = new import11.ViewContainer(6, 0, this, this._anchor_6);
        this._TemplateRef_6_5 = new import13.TemplateRef_(this, 6, this._anchor_6);
        this._NgIf_6_6 = new import12.Wrapper_NgIf(this._vc_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._anchor_6,
            this._text_7
        ]), null);
        return null;
    };
    View_InstagramAuthenticationCallbackComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import14.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        if (((token === import13.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import14.NgIf) && (4 === requestNodeIndex))) {
            return this._NgIf_4_6.context;
        }
        if (((token === import13.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import14.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        return notFoundResult;
    };
    View_InstagramAuthenticationCallbackComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = !this.parentView.context.exchangeTokenStatus;
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        var currVal_4_0_0 = (this.parentView.context.exchangeTokenStatus == 'success');
        this._NgIf_4_6.check_ngIf(currVal_4_0_0, throwOnChange, false);
        this._NgIf_4_6.ngDoCheck(this, this._anchor_4, throwOnChange);
        var currVal_6_0_0 = (this.parentView.context.exchangeTokenStatus == 'failure');
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
    };
    View_InstagramAuthenticationCallbackComponent1.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
        this._vc_4.destroyNestedViews();
        this._vc_6.destroyNestedViews();
    };
    View_InstagramAuthenticationCallbackComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_InstagramAuthenticationCallbackComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_InstagramAuthenticationCallbackComponent2(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        if ((nodeIndex == 4)) {
            return new View_InstagramAuthenticationCallbackComponent3(this.viewUtils, this, 4, this._anchor_4, this._vc_4);
        }
        if ((nodeIndex == 6)) {
            return new View_InstagramAuthenticationCallbackComponent4(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        return null;
    };
    return View_InstagramAuthenticationCallbackComponent1;
}(import1.AppView));
var View_InstagramAuthenticationCallbackComponent5 = (function (_super) {
    __extends(View_InstagramAuthenticationCallbackComponent5, _super);
    function View_InstagramAuthenticationCallbackComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_InstagramAuthenticationCallbackComponent5, renderType_InstagramAuthenticationCallbackComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_8 = import15.UNINITIALIZED;
    }
    View_InstagramAuthenticationCallbackComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, 'You will be redirected to dashboard in 5 seconds', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ]), null);
        return null;
    };
    View_InstagramAuthenticationCallbackComponent5.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_8 = import3.inlineInterpolate(1, '', this.parentView.context.error_description, '');
        if (import3.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setText(this._text_3, currVal_8);
            this._expr_8 = currVal_8;
        }
    };
    View_InstagramAuthenticationCallbackComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_InstagramAuthenticationCallbackComponent5;
}(import1.AppView));
var renderType_InstagramAuthenticationCallbackComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_InstagramAuthenticationCallbackComponent, {});
export var View_InstagramAuthenticationCallbackComponent0 = (function (_super) {
    __extends(View_InstagramAuthenticationCallbackComponent0, _super);
    function View_InstagramAuthenticationCallbackComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_InstagramAuthenticationCallbackComponent0, renderType_InstagramAuthenticationCallbackComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_InstagramAuthenticationCallbackComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'panel panel-primary col-md-4 col-md-offset-4'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._vc_4 = new import11.ViewContainer(4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new import13.TemplateRef_(this, 4, this._anchor_4);
        this._NgIf_4_6 = new import12.Wrapper_NgIf(this._vc_4.vcRef, this._TemplateRef_4_5);
        this._text_5 = this.renderer.createText(this._el_2, '\n    ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._vc_6 = new import11.ViewContainer(6, 2, this, this._anchor_6);
        this._TemplateRef_6_5 = new import13.TemplateRef_(this, 6, this._anchor_6);
        this._NgIf_6_6 = new import12.Wrapper_NgIf(this._vc_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_8 = this.renderer.createText(this._el_0, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._text_8
        ]), null);
        return null;
    };
    View_InstagramAuthenticationCallbackComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import14.NgIf) && (4 === requestNodeIndex))) {
            return this._NgIf_4_6.context;
        }
        if (((token === import13.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import14.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        return notFoundResult;
    };
    View_InstagramAuthenticationCallbackComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4_0_0 = this.context.codeStatus;
        this._NgIf_4_6.check_ngIf(currVal_4_0_0, throwOnChange, false);
        this._NgIf_4_6.ngDoCheck(this, this._anchor_4, throwOnChange);
        var currVal_6_0_0 = !this.context.codeStatus;
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
    };
    View_InstagramAuthenticationCallbackComponent0.prototype.destroyInternal = function () {
        this._vc_4.destroyNestedViews();
        this._vc_6.destroyNestedViews();
    };
    View_InstagramAuthenticationCallbackComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 4)) {
            return new View_InstagramAuthenticationCallbackComponent1(this.viewUtils, this, 4, this._anchor_4, this._vc_4);
        }
        if ((nodeIndex == 6)) {
            return new View_InstagramAuthenticationCallbackComponent5(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        return null;
    };
    return View_InstagramAuthenticationCallbackComponent0;
}(import1.AppView));
//# sourceMappingURL=instagram-authentication-callback.component.ngfactory.js.map