/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/app/app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/router/src/router';
import * as import9 from './app.component.scss.shim.ngstyle';
import * as import10 from 'ng2-toasty/src/toasty.component';
import * as import11 from '../../node_modules/ng2-toasty/src/toasty.component.ngfactory';
import * as import12 from 'ng2-slim-loading-bar/src/slim-loading-bar.component';
import * as import13 from '../../node_modules/ng2-slim-loading-bar/src/slim-loading-bar.component.ngfactory';
import * as import14 from '../../../src/app/components/shared/header/header.component';
import * as import15 from './components/shared/header/header.component.ngfactory';
import * as import16 from '@angular/core/src/linker/view_container';
import * as import17 from '../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import18 from 'ng2-toasty/src/toasty.service';
import * as import19 from 'ng2-slim-loading-bar/src/slim-loading-bar.service';
import * as import20 from 'angularfire2/angularfire2';
import * as import21 from '@ngrx/store/src/store';
import * as import22 from '../../../src/app/services/server-auth.service';
import * as import23 from '@angular/router/src/router_outlet_map';
import * as import24 from '@angular/core/src/linker/component_factory_resolver';
import * as import25 from '@angular/router/src/directives/router_outlet';
export class Wrapper_AppComponent {
  /*private*/ _eventHandler:Function;
  context:import0.AppComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.AppComponent(p0);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_AppComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_AppComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.AppComponent>;
  _AppComponent_0_3:Wrapper_AppComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppComponent_Host0,renderType_AppComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'app-root',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_AppComponent0(this.viewUtils,this,0,this._el_0);
    this._AppComponent_0_3 = new Wrapper_AppComponent(this.injectorGet(import8.Router,this.parentIndex));
    this.compView_0.create(this._AppComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._AppComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AppComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AppComponentNgFactory:import7.ComponentFactory<import0.AppComponent> = new import7.ComponentFactory<import0.AppComponent>('app-root',View_AppComponent_Host0,import0.AppComponent);
const styles_AppComponent:any[] = [import9.styles];
var renderType_AppComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_AppComponent,{});
export class View_AppComponent0 extends import1.AppView<import0.AppComponent> {
  _text_0:any;
  _el_1:any;
  compView_1:import1.AppView<import10.ToastyComponent>;
  _ToastyComponent_1_3:import11.Wrapper_ToastyComponent;
  _text_2:any;
  _el_3:any;
  compView_3:import1.AppView<import12.SlimLoadingBarComponent>;
  _SlimLoadingBarComponent_3_3:import13.Wrapper_SlimLoadingBarComponent;
  _text_4:any;
  _el_5:any;
  compView_5:import1.AppView<import14.HeaderComponent>;
  _HeaderComponent_5_3:import15.Wrapper_HeaderComponent;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _vc_9:import16.ViewContainer;
  _RouterOutlet_9_5:import17.Wrapper_RouterOutlet;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _text_30:any;
  _text_31:any;
  _text_32:any;
  _el_33:any;
  _text_34:any;
  _el_35:any;
  _text_36:any;
  _el_37:any;
  _el_38:any;
  _el_39:any;
  _text_40:any;
  _text_41:any;
  _el_42:any;
  _el_43:any;
  _el_44:any;
  _text_45:any;
  _text_46:any;
  _el_47:any;
  _el_48:any;
  _el_49:any;
  _text_50:any;
  _text_51:any;
  _el_52:any;
  _el_53:any;
  _el_54:any;
  _text_55:any;
  _text_56:any;
  _text_57:any;
  _text_58:any;
  _text_59:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppComponent0,renderType_AppComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'ng2-toasty',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_1 = new import11.View_ToastyComponent0(this.viewUtils,this,1,this._el_1);
    this._ToastyComponent_1_3 = new import11.Wrapper_ToastyComponent(this.parentView.injectorGet(import18.ToastyConfig,this.parentIndex),this.parentView.injectorGet(import18.ToastyService,this.parentIndex));
    this.compView_1.create(this._ToastyComponent_1_3.context);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,parentRenderNode,'ng2-slim-loading-bar',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_3 = new import13.View_SlimLoadingBarComponent0(this.viewUtils,this,3,this._el_3);
    this._SlimLoadingBarComponent_3_3 = new import13.Wrapper_SlimLoadingBarComponent(this.parentView.injectorGet(import19.SlimLoadingBarService,this.parentIndex));
    this.compView_3.create(this._SlimLoadingBarComponent_3_3.context);
    this._text_4 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,parentRenderNode,'tr-header',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_5 = new import15.View_HeaderComponent0(this.viewUtils,this,5,this._el_5);
    this._HeaderComponent_5_3 = new import15.Wrapper_HeaderComponent(this.parentView.injectorGet(import20.AngularFire,this.parentIndex),this.parentView.injectorGet(import21.Store,this.parentIndex),this.parentView.injectorGet(import22.ServerAuthService,this.parentIndex),this.parentView.injectorGet(import8.Router,this.parentIndex));
    this.compView_5.create(this._HeaderComponent_5_3.context);
    this._text_6 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','body'),(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'\n	',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_7,'router-outlet',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_9 = new import16.ViewContainer(9,7,this,this._el_9);
    this._RouterOutlet_9_5 = new import17.Wrapper_RouterOutlet(this.parentView.injectorGet(import23.RouterOutletMap,this.parentIndex),this._vc_9.vcRef,this.parentView.injectorGet(import24.ComponentFactoryResolver,this.parentIndex),(null as any));
    this._text_10 = this.renderer.createText(this._el_7,'\n',(null as any));
    this._text_11 = this.renderer.createText(parentRenderNode,'    \n',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'id','footer'),(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'\n	',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_12,'div',new import3.InlineArray2(2,'class','ui grid centered profile-nav'),(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'\n		',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,this._el_14,'span',new import3.InlineArray2(2,'class','footer-links'),(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'ABOUT US',(null as any));
    this._text_18 = this.renderer.createText(this._el_14,'\n		',(null as any));
    this._el_19 = import3.createRenderElement(this.renderer,this._el_14,'span',new import3.InlineArray2(2,'class','footer-links'),(null as any));
    this._text_20 = this.renderer.createText(this._el_19,'SUPPORT',(null as any));
    this._text_21 = this.renderer.createText(this._el_14,'\n		',(null as any));
    this._el_22 = import3.createRenderElement(this.renderer,this._el_14,'span',new import3.InlineArray2(2,'class','footer-links'),(null as any));
    this._text_23 = this.renderer.createText(this._el_22,'PRIVACY',(null as any));
    this._text_24 = this.renderer.createText(this._el_14,'\n		',(null as any));
    this._el_25 = import3.createRenderElement(this.renderer,this._el_14,'span',new import3.InlineArray2(2,'class','footer-links'),(null as any));
    this._text_26 = this.renderer.createText(this._el_25,'TERMS',(null as any));
    this._text_27 = this.renderer.createText(this._el_14,'\n		',(null as any));
    this._el_28 = import3.createRenderElement(this.renderer,this._el_14,'span',new import3.InlineArray2(2,'class','footer-links'),(null as any));
    this._text_29 = this.renderer.createText(this._el_28,'© 2017 Yatrum',(null as any));
    this._text_30 = this.renderer.createText(this._el_14,'\n	',(null as any));
    this._text_31 = this.renderer.createText(this._el_12,'\n',(null as any));
    this._text_32 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_33 = import3.createRenderElement(this.renderer,parentRenderNode,'aside',new import3.InlineArray2(2,'id','sticky-social'),(null as any));
    this._text_34 = this.renderer.createText(this._el_33,'\n    ',(null as any));
    this._el_35 = import3.createRenderElement(this.renderer,this._el_33,'ul',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_36 = this.renderer.createText(this._el_35,'\n        ',(null as any));
    this._el_37 = import3.createRenderElement(this.renderer,this._el_35,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_38 = import3.createRenderElement(this.renderer,this._el_37,'a',new import3.InlineArray8(6,'class','entypo-facebook','href','https://www.facebook.com/yatrum','target','_blank'),(null as any));
    this._el_39 = import3.createRenderElement(this.renderer,this._el_38,'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_40 = this.renderer.createText(this._el_39,'Facebook',(null as any));
    this._text_41 = this.renderer.createText(this._el_35,'\n        ',(null as any));
    this._el_42 = import3.createRenderElement(this.renderer,this._el_35,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_43 = import3.createRenderElement(this.renderer,this._el_42,'a',new import3.InlineArray8(6,'class','entypo-twitter','href','https://twitter.com/yatrum_','target','_blank'),(null as any));
    this._el_44 = import3.createRenderElement(this.renderer,this._el_43,'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_45 = this.renderer.createText(this._el_44,'Twitter',(null as any));
    this._text_46 = this.renderer.createText(this._el_35,'\n        ',(null as any));
    this._el_47 = import3.createRenderElement(this.renderer,this._el_35,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_48 = import3.createRenderElement(this.renderer,this._el_47,'a',new import3.InlineArray8(6,'class','entypo-book-open','href','https://medium.com/yatrum','target','_blank'),(null as any));
    this._el_49 = import3.createRenderElement(this.renderer,this._el_48,'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_50 = this.renderer.createText(this._el_49,'Blog',(null as any));
    this._text_51 = this.renderer.createText(this._el_35,'\n        ',(null as any));
    this._el_52 = import3.createRenderElement(this.renderer,this._el_35,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_53 = import3.createRenderElement(this.renderer,this._el_52,'a',new import3.InlineArray8(6,'class','entypo-github','href','https://github.com/aviabird/yatrum','target','_blank'),(null as any));
    this._el_54 = import3.createRenderElement(this.renderer,this._el_53,'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_55 = this.renderer.createText(this._el_54,'Github',(null as any));
    this._text_56 = this.renderer.createText(this._el_35,'\n        ',(null as any));
    this._text_57 = this.renderer.createText(this._el_35,'\n    ',(null as any));
    this._text_58 = this.renderer.createText(this._el_33,'\n',(null as any));
    this._text_59 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._el_12,
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
      this._el_25,
      this._text_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._text_30,
      this._text_31,
      this._text_32,
      this._el_33,
      this._text_34,
      this._el_35,
      this._text_36,
      this._el_37,
      this._el_38,
      this._el_39,
      this._text_40,
      this._text_41,
      this._el_42,
      this._el_43,
      this._el_44,
      this._text_45,
      this._text_46,
      this._el_47,
      this._el_48,
      this._el_49,
      this._text_50,
      this._text_51,
      this._el_52,
      this._el_53,
      this._el_54,
      this._text_55,
      this._text_56,
      this._text_57,
      this._text_58,
      this._text_59
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.ToastyComponent) && (1 === requestNodeIndex))) { return this._ToastyComponent_1_3.context; }
    if (((token === import12.SlimLoadingBarComponent) && (3 === requestNodeIndex))) { return this._SlimLoadingBarComponent_3_3.context; }
    if (((token === import14.HeaderComponent) && (5 === requestNodeIndex))) { return this._HeaderComponent_5_3.context; }
    if (((token === import25.RouterOutlet) && (9 === requestNodeIndex))) { return this._RouterOutlet_9_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = 'top-center';
    this._ToastyComponent_1_3.check_position(currVal_1_0_0,throwOnChange,false);
    this._ToastyComponent_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    const currVal_3_0_0:any = '#11e18b';
    this._SlimLoadingBarComponent_3_3.check_color(currVal_3_0_0,throwOnChange,false);
    const currVal_3_0_1:any = '4px';
    this._SlimLoadingBarComponent_3_3.check_height(currVal_3_0_1,throwOnChange,false);
    this._SlimLoadingBarComponent_3_3.ngDoCheck(this,this._el_3,throwOnChange);
    this._HeaderComponent_5_3.ngDoCheck(this,this._el_5,throwOnChange);
    this._RouterOutlet_9_5.ngDoCheck(this,this._el_9,throwOnChange);
    this._vc_9.detectChangesInNestedViews(throwOnChange);
    this.compView_1.internalDetectChanges(throwOnChange);
    this.compView_3.internalDetectChanges(throwOnChange);
    this.compView_5.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_9.destroyNestedViews();
    this.compView_1.destroy();
    this.compView_3.destroy();
    this.compView_5.destroy();
    this._RouterOutlet_9_5.ngOnDestroy();
  }
}