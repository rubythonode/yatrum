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
import * as import0 from '../../../../../../../src/app/components/trips/trip-detail/place-detail/place-detail.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from './place-detail.component.scss.shim.ngstyle';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '@angular/core/src/security';
import * as import12 from '../../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import15 from '@angular/common/src/directives/ng_for';
export var Wrapper_PlaceDetailComponent = (function () {
    function Wrapper_PlaceDetailComponent() {
        this._changed = false;
        this.context = new import0.PlaceDetailComponent();
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_PlaceDetailComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_PlaceDetailComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_PlaceDetailComponent.prototype.check_place = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.place = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_PlaceDetailComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_PlaceDetailComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_PlaceDetailComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_PlaceDetailComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_PlaceDetailComponent;
}());
var renderType_PlaceDetailComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_PlaceDetailComponent_Host0 = (function (_super) {
    __extends(View_PlaceDetailComponent_Host0, _super);
    function View_PlaceDetailComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_PlaceDetailComponent_Host0, renderType_PlaceDetailComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    View_PlaceDetailComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'tr-place-detail', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_PlaceDetailComponent0(this.viewUtils, this, 0, this._el_0);
        this._PlaceDetailComponent_0_3 = new Wrapper_PlaceDetailComponent();
        this.compView_0.create(this._PlaceDetailComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._PlaceDetailComponent_0_3.context);
    };
    View_PlaceDetailComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.PlaceDetailComponent) && (0 === requestNodeIndex))) {
            return this._PlaceDetailComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_PlaceDetailComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._PlaceDetailComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_PlaceDetailComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_PlaceDetailComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_PlaceDetailComponent_Host0;
}(import2.AppView));
export var PlaceDetailComponentNgFactory = new import8.ComponentFactory('tr-place-detail', View_PlaceDetailComponent_Host0, import0.PlaceDetailComponent);
var styles_PlaceDetailComponent = [import9.styles];
var View_PlaceDetailComponent1 = (function (_super) {
    __extends(View_PlaceDetailComponent1, _super);
    function View_PlaceDetailComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_PlaceDetailComponent1, renderType_PlaceDetailComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_4 = import1.UNINITIALIZED;
    }
    View_PlaceDetailComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'span', new import3.InlineArray2(2, 'class', ''), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n          ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'img', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_0, '\n        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_PlaceDetailComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4 = this.context.$implicit.url;
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_2, 'src', this.viewUtils.sanitizer.sanitize(import11.SecurityContext.URL, currVal_4));
            this._expr_4 = currVal_4;
        }
    };
    View_PlaceDetailComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_PlaceDetailComponent1;
}(import2.AppView));
var renderType_PlaceDetailComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.Emulated, styles_PlaceDetailComponent, {});
export var View_PlaceDetailComponent0 = (function (_super) {
    __extends(View_PlaceDetailComponent0, _super);
    function View_PlaceDetailComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_PlaceDetailComponent0, renderType_PlaceDetailComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_33 = import1.UNINITIALIZED;
        this._expr_34 = import1.UNINITIALIZED;
    }
    View_PlaceDetailComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'ui grid'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'one wide column'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_4 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_5 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'fifteen wide column'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n    ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'ui card activity'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n      ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray2(2, 'class', 'header'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'div', new import3.InlineArray2(2, 'class', 'place-name'), null);
        this._text_13 = this.renderer.createText(this._el_12, '', null);
        this._text_14 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_10, 'div', new import3.InlineArray2(2, 'class', 'place-date'), null);
        this._text_16 = this.renderer.createText(this._el_15, '\n          5 Feb 17\' at 12 pm\n        ', null);
        this._text_17 = this.renderer.createText(this._el_10, '\n      ', null);
        this._text_18 = this.renderer.createText(this._el_8, '\n      ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray2(2, 'class', 'place-review'), null);
        this._text_20 = this.renderer.createText(this._el_19, '\n        ', null);
        this._text_21 = this.renderer.createText(this._el_19, '', null);
        this._text_22 = this.renderer.createText(this._el_8, '\n      ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray2(2, 'class', 'place-images'), null);
        this._text_24 = this.renderer.createText(this._el_23, '\n        ', null);
        this._anchor_25 = this.renderer.createTemplateAnchor(this._el_23, null);
        this._vc_25 = new import10.ViewContainer(25, 23, this, this._anchor_25);
        this._TemplateRef_25_5 = new import13.TemplateRef_(this, 25, this._anchor_25);
        this._NgFor_25_6 = new import12.Wrapper_NgFor(this._vc_25.vcRef, this._TemplateRef_25_5, this.parentView.injectorGet(import14.IterableDiffers, this.parentIndex), this.ref);
        this._text_26 = this.renderer.createText(this._el_23, '\n      ', null);
        this._text_27 = this.renderer.createText(this._el_8, '\n    ', null);
        this._text_28 = this.renderer.createText(this._el_6, '\n  ', null);
        this._text_29 = this.renderer.createText(this._el_0, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._anchor_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._text_29
        ]), null);
        return null;
    };
    View_PlaceDetailComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (25 === requestNodeIndex))) {
            return this._TemplateRef_25_5;
        }
        if (((token === import15.NgFor) && (25 === requestNodeIndex))) {
            return this._NgFor_25_6.context;
        }
        return notFoundResult;
    };
    View_PlaceDetailComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_25_0_0 = this.context.place.pictures;
        this._NgFor_25_6.check_ngForOf(currVal_25_0_0, throwOnChange, false);
        this._NgFor_25_6.ngDoCheck(this, this._anchor_25, throwOnChange);
        this._vc_25.detectChangesInNestedViews(throwOnChange);
        var currVal_33 = import3.inlineInterpolate(1, '\n          ', this.context.place.name, '\n        ');
        if (import3.checkBinding(throwOnChange, this._expr_33, currVal_33)) {
            this.renderer.setText(this._text_13, currVal_33);
            this._expr_33 = currVal_33;
        }
        var currVal_34 = import3.inlineInterpolate(1, '\n        ', this.context.place.review, '\n      ');
        if (import3.checkBinding(throwOnChange, this._expr_34, currVal_34)) {
            this.renderer.setText(this._text_21, currVal_34);
            this._expr_34 = currVal_34;
        }
    };
    View_PlaceDetailComponent0.prototype.destroyInternal = function () {
        this._vc_25.destroyNestedViews();
    };
    View_PlaceDetailComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 25)) {
            return new View_PlaceDetailComponent1(this.viewUtils, this, 25, this._anchor_25, this._vc_25);
        }
        return null;
    };
    return View_PlaceDetailComponent0;
}(import2.AppView));
//# sourceMappingURL=place-detail.component.ngfactory.js.map