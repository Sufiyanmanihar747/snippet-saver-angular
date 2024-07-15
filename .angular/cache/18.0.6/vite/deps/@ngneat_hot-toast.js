import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  isPlatformServer
} from "./chunk-3RS7BM2W.js";
import {
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  Directive,
  EventEmitter,
  Inject,
  Injectable,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  Subject,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  defer,
  filter,
  map,
  race,
  setClassMetadata,
  tap,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-DWUGFNGD.js";
import "./chunk-WYUCVM5J.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-LJ4VCL4A.js";

// node_modules/@ngneat/overview/fesm2020/ngneat-overview.mjs
var TeleportService = class {
  constructor() {
    this.outlets = new BehaviorSubject("");
    this.asObservable = this.outlets.asObservable();
    this.ports = /* @__PURE__ */ new Map();
  }
  outlet$(name) {
    return this.asObservable.pipe(filter((current) => current === name), map((name2) => this.ports.get(name2)));
  }
  newOutlet(name) {
    this.outlets.next(name);
  }
};
TeleportService.ɵfac = function TeleportService_Factory(t) {
  return new (t || TeleportService)();
};
TeleportService.ɵprov = ɵɵdefineInjectable({
  token: TeleportService,
  factory: TeleportService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeleportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TeleportOutletDirective = class {
  constructor(vcr, service) {
    this.vcr = vcr;
    this.service = service;
  }
  ngOnChanges(changes) {
    if (changes.teleportOutlet && typeof this.teleportOutlet === "string") {
      this.service.ports.set(this.teleportOutlet, this.vcr);
      this.service.newOutlet(this.teleportOutlet);
    }
  }
  ngOnDestroy() {
    this.service.ports.delete(this.teleportOutlet);
  }
};
TeleportOutletDirective.ɵfac = function TeleportOutletDirective_Factory(t) {
  return new (t || TeleportOutletDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TeleportService));
};
TeleportOutletDirective.ɵdir = ɵɵdefineDirective({
  type: TeleportOutletDirective,
  selectors: [["", "teleportOutlet", ""]],
  inputs: {
    teleportOutlet: "teleportOutlet"
  },
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeleportOutletDirective, [{
    type: Directive,
    args: [{
      selector: "[teleportOutlet]"
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }, {
      type: TeleportService
    }];
  }, {
    teleportOutlet: [{
      type: Input
    }]
  });
})();
var TeleportDirective = class {
  constructor(tpl, service) {
    this.tpl = tpl;
    this.service = service;
    this.subscription = null;
  }
  ngOnChanges(changes) {
    if (changes.teleportTo && typeof this.teleportTo === "string") {
      this.dispose();
      this.subscription = this.service.outlet$(this.teleportTo).subscribe((outlet) => {
        if (outlet) {
          this.viewRef = outlet.createEmbeddedView(this.tpl);
        }
      });
    }
  }
  ngOnDestroy() {
    this.dispose();
  }
  dispose() {
    this.subscription?.unsubscribe();
    this.subscription = null;
    this.viewRef?.destroy();
  }
};
TeleportDirective.ɵfac = function TeleportDirective_Factory(t) {
  return new (t || TeleportDirective)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(TeleportService));
};
TeleportDirective.ɵdir = ɵɵdefineDirective({
  type: TeleportDirective,
  selectors: [["", "teleportTo", ""]],
  inputs: {
    teleportTo: "teleportTo"
  },
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeleportDirective, [{
    type: Directive,
    args: [{
      selector: "[teleportTo]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }, {
      type: TeleportService
    }];
  }, {
    teleportTo: [{
      type: Input
    }]
  });
})();
var TeleportModule = class {
};
TeleportModule.ɵfac = function TeleportModule_Factory(t) {
  return new (t || TeleportModule)();
};
TeleportModule.ɵmod = ɵɵdefineNgModule({
  type: TeleportModule,
  declarations: [TeleportDirective, TeleportOutletDirective],
  exports: [TeleportDirective, TeleportOutletDirective]
});
TeleportModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeleportModule, [{
    type: NgModule,
    args: [{
      declarations: [TeleportDirective, TeleportOutletDirective],
      exports: [TeleportDirective, TeleportOutletDirective]
    }]
  }], null, null);
})();
function isTemplateRef(value) {
  return value instanceof TemplateRef;
}
function isComponent(value) {
  return typeof value === "function";
}
function isString(value) {
  return typeof value === "string";
}
var DynamicViewComponent = class {
};
DynamicViewComponent.ɵfac = function DynamicViewComponent_Factory(t) {
  return new (t || DynamicViewComponent)();
};
DynamicViewComponent.ɵcmp = ɵɵdefineComponent({
  type: DynamicViewComponent,
  selectors: [["dynamic-view"]],
  inputs: {
    content: "content"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "innerHTML"]],
  template: function DynamicViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("innerHTML", ctx.content, ɵɵsanitizeHtml);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicViewComponent, [{
    type: Component,
    args: [{
      selector: "dynamic-view",
      template: ` <div [innerHTML]="content"></div> `
    }]
  }], null, {
    content: [{
      type: Input
    }]
  });
})();
var TplRef = class {
  constructor(args) {
    this.args = args;
    this.wrapper = null;
    if (this.args.vcr) {
      this.viewRef = this.args.vcr.createEmbeddedView(this.args.tpl, this.args.context || {});
      this.viewRef.detectChanges();
    } else {
      this.viewRef = this.args.tpl.createEmbeddedView(this.args.context || {});
      this.viewRef.detectChanges();
      this.args.appRef.attachView(this.viewRef);
    }
  }
  detectChanges() {
    this.viewRef.detectChanges();
  }
  getElement() {
    const rootNodes = this.viewRef.rootNodes;
    if (rootNodes.length === 1 && rootNodes[0] === Node.ELEMENT_NODE) {
      this.element = rootNodes[0];
    } else {
      this.element = document.createElement("div");
      this.element.append(...rootNodes);
    }
    return this.element;
  }
  destroy() {
    if (this.viewRef.rootNodes[0] !== 1) {
      this.element?.parentNode.removeChild(this.element);
      this.element = null;
    }
    if (!this.args.vcr) {
      this.args.appRef.detachView(this.viewRef);
    }
    this.viewRef.destroy();
    this.viewRef = null;
  }
};
var StringRef = class {
  constructor(value) {
    this.value = value;
  }
  getElement() {
    return this.value;
  }
  detectChanges() {
  }
  destroy() {
  }
};
var CompRef = class {
  constructor(options) {
    this.options = options;
    if (options.vcr) {
      this.compRef = options.vcr.createComponent(options.component, {
        index: options.vcr.length,
        injector: options.injector || options.vcr.injector
      });
    } else {
      const factory = options.resolver.resolveComponentFactory(options.component);
      this.compRef = factory.create(options.injector);
      options.appRef.attachView(this.compRef.hostView);
    }
  }
  get ref() {
    return this.compRef;
  }
  setInput(input, value) {
    this.compRef.instance[input] = value;
    return this;
  }
  setInputs(inputs) {
    Object.keys(inputs).forEach((input) => {
      this.compRef.instance[input] = inputs[input];
    });
    return this;
  }
  detectChanges() {
    this.compRef.hostView.detectChanges();
    return this;
  }
  appendTo(container) {
    container.appendChild(this.getElement());
    return this;
  }
  removeFrom(container) {
    container.removeChild(this.getElement());
    return this;
  }
  getRawContent() {
    return this.getElement().outerHTML;
  }
  getElement() {
    return this.compRef.location.nativeElement;
  }
  destroy() {
    this.compRef.destroy();
    !this.options.vcr && this.options.appRef.detachView(this.compRef.hostView);
    this.compRef = null;
  }
};
var ViewService = class {
  constructor(resolver, injector, appRef) {
    this.resolver = resolver;
    this.injector = injector;
    this.appRef = appRef;
  }
  createComponent(component, options = {}) {
    return new CompRef({
      component,
      vcr: options.vcr,
      injector: options.injector || this.injector,
      appRef: this.appRef,
      resolver: this.resolver
    });
  }
  createTemplate(tpl, options = {}) {
    return new TplRef({
      vcr: options.vcr,
      appRef: this.appRef,
      tpl,
      context: options.context
    });
  }
  createView(content, viewOptions = {}) {
    if (isTemplateRef(content)) {
      return this.createTemplate(content, viewOptions);
    } else if (isComponent(content)) {
      return this.createComponent(content, viewOptions);
    } else if (isString(content)) {
      return new StringRef(content);
    } else {
      throw "Type of content is not supported";
    }
  }
};
ViewService.ɵfac = function ViewService_Factory(t) {
  return new (t || ViewService)(ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(Injector), ɵɵinject(ApplicationRef));
};
ViewService.ɵprov = ɵɵdefineInjectable({
  token: ViewService,
  factory: ViewService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: ComponentFactoryResolver$1
    }, {
      type: Injector
    }, {
      type: ApplicationRef
    }];
  }, null);
})();
var DynamicViewDirective = class {
  constructor(defaultTpl, vcr, viewService) {
    this.defaultTpl = defaultTpl;
    this.vcr = vcr;
    this.viewService = viewService;
  }
  ngOnInit() {
    this.resolveContentType();
  }
  ngOnChanges(changes) {
    if (changes.view && !changes.view.isFirstChange()) {
      this.resolveContentType();
    }
  }
  resolveContentType() {
    this.viewRef?.destroy();
    if (isString(this.view)) {
      this.viewRef = this.viewService.createComponent(DynamicViewComponent, {
        vcr: this.vcr,
        injector: this.injector
      });
      this.viewRef.setInput("content", this.view).detectChanges();
    } else {
      this.viewRef = this.viewService.createView(this.view || this.defaultTpl, {
        vcr: this.vcr,
        injector: this.injector ?? this.vcr.injector,
        context: this.context
      });
    }
  }
  ngOnDestroy() {
    this.viewRef?.destroy();
  }
};
DynamicViewDirective.ɵfac = function DynamicViewDirective_Factory(t) {
  return new (t || DynamicViewDirective)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ViewService));
};
DynamicViewDirective.ɵdir = ɵɵdefineDirective({
  type: DynamicViewDirective,
  selectors: [["", "dynamicView", ""]],
  inputs: {
    view: [0, "dynamicView", "view"],
    injector: [0, "dynamicViewInjector", "injector"],
    context: [0, "dynamicViewContext", "context"]
  },
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicViewDirective, [{
    type: Directive,
    args: [{
      selector: "[dynamicView]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }, {
      type: ViewContainerRef
    }, {
      type: ViewService
    }];
  }, {
    view: [{
      type: Input,
      args: ["dynamicView"]
    }],
    injector: [{
      type: Input,
      args: ["dynamicViewInjector"]
    }],
    context: [{
      type: Input,
      args: ["dynamicViewContext"]
    }]
  });
})();
var DynamicViewModule = class {
};
DynamicViewModule.ɵfac = function DynamicViewModule_Factory(t) {
  return new (t || DynamicViewModule)();
};
DynamicViewModule.ɵmod = ɵɵdefineNgModule({
  type: DynamicViewModule,
  declarations: [DynamicViewDirective, DynamicViewComponent],
  exports: [DynamicViewDirective]
});
DynamicViewModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicViewModule, [{
    type: NgModule,
    args: [{
      declarations: [DynamicViewDirective, DynamicViewComponent],
      exports: [DynamicViewDirective]
    }]
  }], null, null);
})();

// node_modules/@ngneat/hot-toast/fesm2020/ngneat-hot-toast.mjs
var _c0 = ["*"];
var _c1 = (a0, a1) => ({
  "border-color": a0,
  "border-right-color": a1
});
function IndicatorComponent_div_0_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1, "\n        ");
    ɵɵelement(2, "hot-toast-error", 2);
    ɵɵtext(3, "\n      ");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("theme", ctx_r0.theme);
  }
}
function IndicatorComponent_div_0_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1, "\n        ");
    ɵɵelement(2, "hot-toast-checkmark", 2);
    ɵɵtext(3, "\n      ");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("theme", ctx_r0.theme);
  }
}
function IndicatorComponent_div_0_div_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1, "\n        ");
    ɵɵelement(2, "hot-toast-warning", 2);
    ɵɵtext(3, "\n      ");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("theme", ctx_r0.theme);
  }
}
function IndicatorComponent_div_0_div_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1, "\n        ");
    ɵɵelement(2, "hot-toast-info", 2);
    ɵɵtext(3, "\n      ");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("theme", ctx_r0.theme);
  }
}
function IndicatorComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtext(1, "\n    ");
    ɵɵelementStart(2, "div", 5);
    ɵɵtext(3, "\n      ");
    ɵɵtemplate(4, IndicatorComponent_div_0_div_4_div_4_Template, 4, 1, "div", 6);
    ɵɵtext(5, "\n      ");
    ɵɵtemplate(6, IndicatorComponent_div_0_div_4_div_6_Template, 4, 1, "div", 6);
    ɵɵtext(7, "\n      ");
    ɵɵtemplate(8, IndicatorComponent_div_0_div_4_div_8_Template, 4, 1, "div", 6);
    ɵɵtext(9, "\n      ");
    ɵɵtemplate(10, IndicatorComponent_div_0_div_4_div_10_Template, 4, 1, "div", 6);
    ɵɵtext(11, "\n    ");
    ɵɵelementEnd();
    ɵɵtext(12, "\n  ");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngSwitch", ctx_r0.type);
    ɵɵadvance(2);
    ɵɵproperty("ngSwitchCase", "error");
    ɵɵadvance(2);
    ɵɵproperty("ngSwitchCase", "success");
    ɵɵadvance(2);
    ɵɵproperty("ngSwitchCase", "warning");
    ɵɵadvance(2);
    ɵɵproperty("ngSwitchCase", "info");
  }
}
function IndicatorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtext(1, "\n  ");
    ɵɵelement(2, "hot-toast-loader", 2);
    ɵɵtext(3, "\n  ");
    ɵɵtemplate(4, IndicatorComponent_div_0_div_4_Template, 13, 5, "div", 3);
    ɵɵtext(5, "\n");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("theme", ctx_r0.theme);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.type !== "loading");
  }
}
var _c2 = ["hotToastBarBase"];
function HotToastComponent_ng_container_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "\n          ");
    ɵɵelementStart(2, "hot-toast-animated-icon", 10);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtext(4, "\n        ");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("iconTheme", ctx_r0.toast.iconTheme);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.toast.icon);
  }
}
function HotToastComponent_ng_container_7_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0, "\n          ");
    ɵɵelementStart(1, "div");
    ɵɵtext(2, "\n            ");
    ɵɵelementContainer(3, 11);
    ɵɵtext(4, "\n          ");
    ɵɵelementEnd();
    ɵɵtext(5, "\n        ");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵproperty("dynamicView", ctx_r0.toast.icon);
  }
}
function HotToastComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "\n        ");
    ɵɵtemplate(2, HotToastComponent_ng_container_7_ng_container_2_Template, 5, 2, "ng-container", 6);
    ɵɵtext(3, "\n        ");
    ɵɵtemplate(4, HotToastComponent_ng_container_7_ng_template_4_Template, 6, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵtext(6, "\n      ");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const iconTemplateOrComponent_r2 = ɵɵreference(5);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.isIconString)("ngIfElse", iconTemplateOrComponent_r2);
  }
}
function HotToastComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0, "\n        ");
    ɵɵelement(1, "hot-toast-indicator", 12);
    ɵɵtext(2, "\n      ");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("theme", ctx_r0.toast.iconTheme)("type", ctx_r0.toast.type);
  }
}
function HotToastComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function HotToastComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 13);
    ɵɵlistener("click", function HotToastComponent_button_21_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.close());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r0.toast.closeStyle);
  }
}
function HotToastContainerComponent_hot_toast_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "hot-toast", 3);
    ɵɵlistener("height", function HotToastContainerComponent_hot_toast_4_Template_hot_toast_height_0_listener($event) {
      const toast_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.updateHeight($event, toast_r2));
    })("beforeClosed", function HotToastContainerComponent_hot_toast_4_Template_hot_toast_beforeClosed_0_listener() {
      const toast_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.beforeClosed(toast_r2));
    })("afterClosed", function HotToastContainerComponent_hot_toast_4_Template_hot_toast_afterClosed_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.afterClosed($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("toast", toast_r2)("offset", ctx_r2.calculateOffset(toast_r2.id, toast_r2.position))("toastRef", ctx_r2.toastRefs[i_r4]);
  }
}
var HOT_TOAST_DEFAULT_TIMEOUTS = {
  blank: 4e3,
  error: 4e3,
  success: 4e3,
  loading: 3e4,
  warning: 4e3,
  info: 4e3
};
var EXIT_ANIMATION_DURATION = 800;
var ENTER_ANIMATION_DURATION = 350;
var HOT_TOAST_MARGIN = 8;
var HotToastRef = class {
  constructor(toast) {
    this.toast = toast;
    this._onClosed = new Subject();
  }
  get data() {
    return this.toast.data;
  }
  set dispose(value) {
    this._dispose = value;
  }
  getToast() {
    return this.toast;
  }
  /**Used for internal purpose
   * Attach ToastRef to container
   */
  appendTo(container) {
    const {
      dispose,
      updateMessage,
      updateToast,
      afterClosed
    } = container.addToast(this);
    this.dispose = dispose;
    this.updateMessage = updateMessage;
    this.updateToast = updateToast;
    this.afterClosed = race(this._onClosed.asObservable(), afterClosed);
    return this;
  }
  /**
   * Closes the toast
   *
   * @param [closeData={ dismissedByAction: false }] -
   * Make sure to pass { dismissedByAction: true } when closing from template
   * @memberof HotToastRef
   */
  close(closeData = {
    dismissedByAction: false
  }) {
    this._dispose();
    this._onClosed.next({
      dismissedByAction: closeData.dismissedByAction,
      id: this.toast.id
    });
    this._onClosed.complete();
  }
};
var animate = (element, value) => {
  element.style.animation = value;
};
var AnimatedIconComponent = class {
};
AnimatedIconComponent.ɵfac = function AnimatedIconComponent_Factory(t) {
  return new (t || AnimatedIconComponent)();
};
AnimatedIconComponent.ɵcmp = ɵɵdefineComponent({
  type: AnimatedIconComponent,
  selectors: [["hot-toast-animated-icon"]],
  inputs: {
    iconTheme: "iconTheme"
  },
  ngContentSelectors: _c0,
  decls: 5,
  vars: 2,
  consts: [[1, "hot-toast-animated-icon"]],
  template: function AnimatedIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵtext(1, "\n  ");
      ɵɵprojection(2);
      ɵɵtext(3, "\n");
      ɵɵelementEnd();
      ɵɵtext(4, "\n");
    }
    if (rf & 2) {
      ɵɵstyleProp("color", ctx.iconTheme == null ? null : ctx.iconTheme.primary);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimatedIconComponent, [{
    type: Component,
    args: [{
      selector: "hot-toast-animated-icon",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div class="hot-toast-animated-icon" [style.color]="iconTheme?.primary">\n  <ng-content></ng-content>\n</div>\n'
    }]
  }], null, {
    iconTheme: [{
      type: Input
    }]
  });
})();
var CheckMarkComponent = class {
};
CheckMarkComponent.ɵfac = function CheckMarkComponent_Factory(t) {
  return new (t || CheckMarkComponent)();
};
CheckMarkComponent.ɵcmp = ɵɵdefineComponent({
  type: CheckMarkComponent,
  selectors: [["hot-toast-checkmark"]],
  inputs: {
    theme: "theme"
  },
  decls: 2,
  vars: 4,
  consts: [[1, "hot-toast-checkmark-icon"]],
  template: function CheckMarkComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0);
      ɵɵtext(1, "\n");
    }
    if (rf & 2) {
      ɵɵstyleProp("--check-primary", ctx.theme == null ? null : ctx.theme.primary)("--check-secondary", ctx.theme == null ? null : ctx.theme.secondary);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckMarkComponent, [{
    type: Component,
    args: [{
      selector: "hot-toast-checkmark",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div\n  class="hot-toast-checkmark-icon"\n  [style.--check-primary]="theme?.primary"\n  [style.--check-secondary]="theme?.secondary"\n></div>\n'
    }]
  }], null, {
    theme: [{
      type: Input
    }]
  });
})();
var ErrorComponent = class {
};
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
  return new (t || ErrorComponent)();
};
ErrorComponent.ɵcmp = ɵɵdefineComponent({
  type: ErrorComponent,
  selectors: [["hot-toast-error"]],
  inputs: {
    theme: "theme"
  },
  decls: 2,
  vars: 4,
  consts: [[1, "hot-toast-error-icon"]],
  template: function ErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0);
      ɵɵtext(1, "\n");
    }
    if (rf & 2) {
      ɵɵstyleProp("--error-primary", ctx.theme == null ? null : ctx.theme.primary)("--error-secondary", ctx.theme == null ? null : ctx.theme.secondary);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorComponent, [{
    type: Component,
    args: [{
      selector: "hot-toast-error",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div\n  class="hot-toast-error-icon"\n  [style.--error-primary]="theme?.primary"\n  [style.--error-secondary]="theme?.secondary"\n></div>\n'
    }]
  }], null, {
    theme: [{
      type: Input
    }]
  });
})();
var LoaderComponent = class {
};
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
  return new (t || LoaderComponent)();
};
LoaderComponent.ɵcmp = ɵɵdefineComponent({
  type: LoaderComponent,
  selectors: [["hot-toast-loader"]],
  inputs: {
    theme: "theme"
  },
  decls: 2,
  vars: 4,
  consts: [[1, "hot-toast-loader-icon", 3, "ngStyle"]],
  template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0);
      ɵɵtext(1, "\n");
    }
    if (rf & 2) {
      ɵɵproperty("ngStyle", ɵɵpureFunction2(1, _c1, ctx.theme == null ? null : ctx.theme.primary, ctx.theme == null ? null : ctx.theme.secondary));
    }
  },
  dependencies: [NgStyle],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderComponent, [{
    type: Component,
    args: [{
      selector: "hot-toast-loader",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
  class="hot-toast-loader-icon"
  [ngStyle]="{ 'border-color': theme?.primary, 'border-right-color': theme?.secondary }"
></div>
`
    }]
  }], null, {
    theme: [{
      type: Input
    }]
  });
})();
var WarningComponent = class {
};
WarningComponent.ɵfac = function WarningComponent_Factory(t) {
  return new (t || WarningComponent)();
};
WarningComponent.ɵcmp = ɵɵdefineComponent({
  type: WarningComponent,
  selectors: [["hot-toast-warning"]],
  inputs: {
    theme: "theme"
  },
  decls: 2,
  vars: 4,
  consts: [[1, "hot-toast-warning-icon"]],
  template: function WarningComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0);
      ɵɵtext(1, "\n");
    }
    if (rf & 2) {
      ɵɵstyleProp("--warn-primary", ctx.theme == null ? null : ctx.theme.primary)("--warn-secondary", ctx.theme == null ? null : ctx.theme.secondary);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WarningComponent, [{
    type: Component,
    args: [{
      selector: "hot-toast-warning",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div\n  class="hot-toast-warning-icon"\n  [style.--warn-primary]="theme?.primary"\n  [style.--warn-secondary]="theme?.secondary"\n></div>\n'
    }]
  }], null, {
    theme: [{
      type: Input
    }]
  });
})();
var InfoComponent = class {
};
InfoComponent.ɵfac = function InfoComponent_Factory(t) {
  return new (t || InfoComponent)();
};
InfoComponent.ɵcmp = ɵɵdefineComponent({
  type: InfoComponent,
  selectors: [["hot-toast-info"]],
  inputs: {
    theme: "theme"
  },
  decls: 2,
  vars: 4,
  consts: [[1, "hot-toast-info-icon"]],
  template: function InfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0);
      ɵɵtext(1, "\n");
    }
    if (rf & 2) {
      ɵɵstyleProp("--warn-primary", ctx.theme == null ? null : ctx.theme.primary)("--warn-secondary", ctx.theme == null ? null : ctx.theme.secondary);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoComponent, [{
    type: Component,
    args: [{
      selector: "hot-toast-info",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div\n  class="hot-toast-info-icon"\n  [style.--warn-primary]="theme?.primary"\n  [style.--warn-secondary]="theme?.secondary"\n></div>\n'
    }]
  }], null, {
    theme: [{
      type: Input
    }]
  });
})();
var IndicatorComponent = class {
};
IndicatorComponent.ɵfac = function IndicatorComponent_Factory(t) {
  return new (t || IndicatorComponent)();
};
IndicatorComponent.ɵcmp = ɵɵdefineComponent({
  type: IndicatorComponent,
  selectors: [["hot-toast-indicator"]],
  inputs: {
    theme: "theme",
    type: "type"
  },
  decls: 2,
  vars: 1,
  consts: [["class", "hot-toast-indicator-wrapper", 4, "ngIf"], [1, "hot-toast-indicator-wrapper"], [3, "theme"], ["class", "hot-toast-status-wrapper", 4, "ngIf"], [1, "hot-toast-status-wrapper"], [3, "ngSwitch"], [4, "ngSwitchCase"]],
  template: function IndicatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, IndicatorComponent_div_0_Template, 6, 2, "div", 0);
      ɵɵtext(1, "\n");
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.type !== "blank");
    }
  },
  dependencies: [NgIf, NgSwitch, NgSwitchCase, CheckMarkComponent, ErrorComponent, LoaderComponent, WarningComponent, InfoComponent],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IndicatorComponent, [{
    type: Component,
    args: [{
      selector: "hot-toast-indicator",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div *ngIf="type !== 'blank'" class="hot-toast-indicator-wrapper">
  <hot-toast-loader [theme]="theme"></hot-toast-loader>
  <div *ngIf="type !== 'loading'" class="hot-toast-status-wrapper">
    <div [ngSwitch]="type">
      <div *ngSwitchCase="'error'">
        <hot-toast-error [theme]="theme"></hot-toast-error>
      </div>
      <div *ngSwitchCase="'success'">
        <hot-toast-checkmark [theme]="theme"></hot-toast-checkmark>
      </div>
      <div *ngSwitchCase="'warning'">
        <hot-toast-warning [theme]="theme"></hot-toast-warning>
      </div>
      <div *ngSwitchCase="'info'">
        <hot-toast-info [theme]="theme"></hot-toast-info>
      </div>
    </div>
  </div>
</div>
`
    }]
  }], null, {
    theme: [{
      type: Input
    }],
    type: [{
      type: Input
    }]
  });
})();
var HotToastComponent = class {
  constructor(injector, renderer, ngZone) {
    this.injector = injector;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.offset = 0;
    this.height = new EventEmitter();
    this.beforeClosed = new EventEmitter();
    this.afterClosed = new EventEmitter();
    this.isManualClose = false;
    this.unlisteners = [];
  }
  get toastBarBaseHeight() {
    return this.toastBarBase.nativeElement.offsetHeight;
  }
  get containerPositionStyle() {
    const top = this.toast.position.includes("top");
    const verticalStyle = top ? {
      top: 0
    } : {
      bottom: 0
    };
    const horizontalStyle = this.toast.position.includes("left") ? {
      left: 0
    } : this.toast.position.includes("right") ? {
      right: 0
    } : {
      left: 0,
      right: 0,
      justifyContent: "center"
    };
    return __spreadValues(__spreadValues({
      transform: `translateY(${this.offset * (top ? 1 : -1)}px)`
    }, verticalStyle), horizontalStyle);
  }
  get toastBarBaseStyles() {
    const top = this.toast.position.includes("top");
    const enterAnimation = `hotToastEnterAnimation${top ? "Negative" : "Positive"} ${ENTER_ANIMATION_DURATION}ms cubic-bezier(0.21, 1.02, 0.73, 1) forwards`;
    const exitAnimation = `hotToastExitAnimation${top ? "Negative" : "Positive"} ${EXIT_ANIMATION_DURATION}ms forwards cubic-bezier(0.06, 0.71, 0.55, 1) ${this.toast.duration}ms`;
    const animation = this.toast.autoClose ? `${enterAnimation}, ${exitAnimation}` : enterAnimation;
    return __spreadProps(__spreadValues({}, this.toast.style), {
      animation
    });
  }
  get isIconString() {
    return typeof this.toast.icon === "string";
  }
  ngOnChanges(changes) {
    if (changes.toast && !changes.toast.firstChange && changes.toast.currentValue?.message) {
      requestAnimationFrame(() => {
        this.height.emit(this.toastBarBase.nativeElement.offsetHeight);
      });
    }
  }
  ngOnInit() {
    if (isTemplateRef(this.toast.message)) {
      this.context = {
        $implicit: this.toastRef
      };
    }
    if (isComponent(this.toast.message)) {
      this.toastComponentInjector = Injector.create({
        providers: [{
          provide: HotToastRef,
          useValue: this.toastRef
        }],
        parent: this.toast.injector || this.injector
      });
    }
  }
  ngAfterViewInit() {
    const nativeElement = this.toastBarBase.nativeElement;
    requestAnimationFrame(() => {
      this.height.emit(nativeElement.offsetHeight);
    });
    this.ngZone.runOutsideAngular(() => {
      this.unlisteners.push(
        // Caretaker note: we have to remove these event listeners at the end (even if the element is removed from DOM).
        // zone.js stores its `ZoneTask`s within the `nativeElement[Zone.__symbol__('animationstart') + 'false']` property
        // with callback that capture `this`.
        this.renderer.listen(nativeElement, "animationstart", (event) => {
          if (this.isExitAnimation(event)) {
            this.ngZone.run(() => this.beforeClosed.emit());
          }
        }),
        this.renderer.listen(nativeElement, "animationend", (event) => {
          if (this.isExitAnimation(event)) {
            this.ngZone.run(() => this.afterClosed.emit({
              dismissedByAction: this.isManualClose,
              id: this.toast.id
            }));
          }
        })
      );
    });
    this.setToastAttributes();
  }
  close() {
    this.isManualClose = true;
    const top = this.toast.position.includes("top");
    const exitAnimation = `hotToastExitAnimation${top ? "Negative" : "Positive"} ${EXIT_ANIMATION_DURATION}ms forwards cubic-bezier(0.06, 0.71, 0.55, 1)`;
    const nativeElement = this.toastBarBase.nativeElement;
    animate(nativeElement, exitAnimation);
  }
  ngOnDestroy() {
    this.close();
    while (this.unlisteners.length) {
      this.unlisteners.pop()();
    }
  }
  isExitAnimation(ev) {
    return ev.animationName.includes("hotToastExitAnimation");
  }
  setToastAttributes() {
    const toastAttributes = this.toast.attributes;
    for (const [key, value] of Object.entries(toastAttributes)) {
      this.renderer.setAttribute(this.toastBarBase.nativeElement, key, value);
    }
  }
};
HotToastComponent.ɵfac = function HotToastComponent_Factory(t) {
  return new (t || HotToastComponent)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone));
};
HotToastComponent.ɵcmp = ɵɵdefineComponent({
  type: HotToastComponent,
  selectors: [["hot-toast"]],
  viewQuery: function HotToastComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c2, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toastBarBase = _t.first);
    }
  },
  inputs: {
    toast: "toast",
    offset: "offset",
    defaultConfig: "defaultConfig",
    toastRef: "toastRef"
  },
  outputs: {
    height: "height",
    beforeClosed: "beforeClosed",
    afterClosed: "afterClosed"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 25,
  vars: 14,
  consts: [["hotToastBarBase", ""], ["indicator", ""], ["iconTemplateOrComponent", ""], [1, "hot-toast-bar-base-container", 3, "ngStyle", "ngClass"], [1, "hot-toast-bar-base", 3, "ngStyle", "ngClass"], ["aria-hidden", "true", 1, "hot-toast-icon"], [4, "ngIf", "ngIfElse"], [1, "hot-toast-message"], [4, "dynamicView", "dynamicViewContext", "dynamicViewInjector"], ["type", "button", "class", "hot-toast-close-btn", "aria-label", "Close", 3, "ngStyle", "click", 4, "ngIf"], [3, "iconTheme"], [3, "dynamicView"], [3, "theme", "type"], ["type", "button", "aria-label", "Close", 1, "hot-toast-close-btn", 3, "click", "ngStyle"]],
  template: function HotToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 3);
      ɵɵtext(1, "\n  ");
      ɵɵelementStart(2, "div", 4, 0);
      ɵɵtext(4, "\n    ");
      ɵɵelementStart(5, "div", 5);
      ɵɵtext(6, "\n      ");
      ɵɵtemplate(7, HotToastComponent_ng_container_7_Template, 7, 2, "ng-container", 6);
      ɵɵtext(8, "\n\n      ");
      ɵɵtemplate(9, HotToastComponent_ng_template_9_Template, 3, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      ɵɵtext(11, "\n    ");
      ɵɵelementEnd();
      ɵɵtext(12, "\n\n    ");
      ɵɵelementStart(13, "div", 7);
      ɵɵtext(14, "\n      ");
      ɵɵelementStart(15, "div");
      ɵɵtext(16, "\n        ");
      ɵɵtemplate(17, HotToastComponent_ng_container_17_Template, 1, 0, "ng-container", 8);
      ɵɵtext(18, "\n      ");
      ɵɵelementEnd();
      ɵɵtext(19, "\n    ");
      ɵɵelementEnd();
      ɵɵtext(20, "\n\n    ");
      ɵɵtemplate(21, HotToastComponent_button_21_Template, 1, 1, "button", 9);
      ɵɵtext(22, "\n  ");
      ɵɵelementEnd();
      ɵɵtext(23, "\n");
      ɵɵelementEnd();
      ɵɵtext(24, "\n");
    }
    if (rf & 2) {
      const indicator_r4 = ɵɵreference(10);
      ɵɵproperty("ngStyle", ctx.containerPositionStyle)("ngClass", "hot-toast-theme-" + ctx.toast.theme);
      ɵɵadvance(2);
      ɵɵstyleProp("--hot-toast-animation-state", ctx.isManualClose ? "running" : "paused");
      ɵɵproperty("ngStyle", ctx.toastBarBaseStyles)("ngClass", ctx.toast.className);
      ɵɵattribute("aria-live", ctx.toast.ariaLive)("role", ctx.toast.role);
      ɵɵadvance(5);
      ɵɵproperty("ngIf", ctx.toast.icon !== void 0)("ngIfElse", indicator_r4);
      ɵɵadvance(10);
      ɵɵproperty("dynamicView", ctx.toast.message)("dynamicViewContext", ctx.context)("dynamicViewInjector", ctx.toastComponentInjector);
      ɵɵadvance(4);
      ɵɵproperty("ngIf", ctx.toast.dismissible);
    }
  },
  dependencies: [NgClass, NgIf, NgStyle, DynamicViewDirective, AnimatedIconComponent, IndicatorComponent],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HotToastComponent, [{
    type: Component,
    args: [{
      selector: "hot-toast",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
  class="hot-toast-bar-base-container"
  [ngStyle]="containerPositionStyle"
  [ngClass]="'hot-toast-theme-' + toast.theme"
>
  <div
    class="hot-toast-bar-base"
    #hotToastBarBase
    [ngStyle]="toastBarBaseStyles"
    [ngClass]="toast.className"
    [style.--hot-toast-animation-state]="isManualClose ? 'running' : 'paused'"
    [attr.aria-live]="toast.ariaLive"
    [attr.role]="toast.role"
  >
    <div class="hot-toast-icon" aria-hidden="true">
      <ng-container *ngIf="toast.icon !== undefined; else indicator">
        <ng-container *ngIf="isIconString; else iconTemplateOrComponent">
          <hot-toast-animated-icon [iconTheme]="toast.iconTheme">{{ toast.icon }}</hot-toast-animated-icon>
        </ng-container>
        <ng-template #iconTemplateOrComponent>
          <div>
            <ng-container [dynamicView]="toast.icon"></ng-container>
          </div>
        </ng-template>
      </ng-container>

      <ng-template #indicator>
        <hot-toast-indicator [theme]="toast.iconTheme" [type]="toast.type"></hot-toast-indicator>
      </ng-template>
    </div>

    <div class="hot-toast-message">
      <div>
        <ng-container *dynamicView="toast.message; context: context; injector: toastComponentInjector"></ng-container>
      </div>
    </div>

    <button
      *ngIf="toast.dismissible"
      (click)="close()"
      type="button"
      class="hot-toast-close-btn"
      aria-label="Close"
      [ngStyle]="toast.closeStyle"
    ></button>
  </div>
</div>
`
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }];
  }, {
    toast: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    defaultConfig: [{
      type: Input
    }],
    toastRef: [{
      type: Input
    }],
    height: [{
      type: Output
    }],
    beforeClosed: [{
      type: Output
    }],
    afterClosed: [{
      type: Output
    }],
    toastBarBase: [{
      type: ViewChild,
      args: ["hotToastBarBase"]
    }]
  });
})();
var HotToastContainerComponent = class {
  constructor(cdr) {
    this.cdr = cdr;
    this.toasts = [];
    this.toastRefs = [];
    this._onClosed = new Subject();
    this.onClosed$ = this._onClosed.asObservable();
  }
  trackById(index, toast) {
    return toast.id;
  }
  calculateOffset(toastId, position) {
    const visibleToasts = this.toasts.filter((t) => t.visible && t.position === position);
    const index = visibleToasts.findIndex((toast) => toast.id === toastId);
    const offset = index !== -1 ? visibleToasts.slice(...this.defaultConfig.reverseOrder ? [index + 1] : [0, index]).reduce((acc, t) => acc + (t.height || 0) + HOT_TOAST_MARGIN, 0) : 0;
    return offset;
  }
  updateHeight(height, toast) {
    toast.height = height;
    this.cdr.detectChanges();
  }
  addToast(ref) {
    this.toastRefs.push(ref);
    const toast = ref.getToast();
    this.toasts.push(ref.getToast());
    this.cdr.detectChanges();
    return {
      dispose: () => {
        this.closeToast(toast.id);
      },
      updateMessage: (message) => {
        toast.message = message;
        this.updateToasts(toast);
        this.cdr.detectChanges();
      },
      updateToast: (options) => {
        this.updateToasts(toast, options);
        this.cdr.detectChanges();
      },
      afterClosed: this.getAfterClosed(toast)
    };
  }
  closeToast(id) {
    if (id) {
      const comp = this.hotToastComponentList.find((item) => item.toast.id === id);
      if (comp) {
        comp.close();
      }
    } else {
      this.hotToastComponentList.forEach((comp) => comp.close());
    }
  }
  beforeClosed(toast) {
    toast.visible = false;
  }
  afterClosed(closeToast) {
    const toastIndex = this.toasts.findIndex((t) => t.id === closeToast.id);
    if (toastIndex > -1) {
      this._onClosed.next(closeToast);
      this.toasts = this.toasts.filter((t) => t.id !== closeToast.id);
      this.toastRefs = this.toastRefs.filter((t) => t.getToast().id !== closeToast.id);
      this.cdr.detectChanges();
    }
  }
  hasToast(id) {
    return this.toasts.findIndex((t) => t.id === id) > -1;
  }
  getAfterClosed(toast) {
    return this.onClosed$.pipe(filter((v) => v.id === toast.id));
  }
  updateToasts(toast, options) {
    this.toasts = this.toasts.map((t) => __spreadValues(__spreadValues({}, t), t.id === toast.id && __spreadValues(__spreadValues({}, toast), options)));
  }
};
HotToastContainerComponent.ɵfac = function HotToastContainerComponent_Factory(t) {
  return new (t || HotToastContainerComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
HotToastContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: HotToastContainerComponent,
  selectors: [["hot-toast-container"]],
  viewQuery: function HotToastContainerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(HotToastComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.hotToastComponentList = _t);
    }
  },
  inputs: {
    defaultConfig: "defaultConfig"
  },
  decls: 8,
  vars: 2,
  consts: [[2, "position", "fixed", "z-index", "9999", "top", "0", "right", "0", "bottom", "0", "left", "0", "pointer-events", "none"], [2, "position", "relative", "height", "100%"], [3, "toast", "offset", "toastRef", "height", "beforeClosed", "afterClosed", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "height", "beforeClosed", "afterClosed", "toast", "offset", "toastRef"]],
  template: function HotToastContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtext(1, "\n  ");
      ɵɵelementStart(2, "div", 1);
      ɵɵtext(3, "\n    ");
      ɵɵtemplate(4, HotToastContainerComponent_hot_toast_4_Template, 1, 3, "hot-toast", 2);
      ɵɵtext(5, "\n  ");
      ɵɵelementEnd();
      ɵɵtext(6, "\n");
      ɵɵelementEnd();
      ɵɵtext(7, "\n");
    }
    if (rf & 2) {
      ɵɵadvance(4);
      ɵɵproperty("ngForOf", ctx.toasts)("ngForTrackBy", ctx.trackById);
    }
  },
  dependencies: [NgForOf, HotToastComponent],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HotToastContainerComponent, [{
    type: Component,
    args: [{
      selector: "hot-toast-container",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div style="position: fixed; z-index: 9999; top: 0; right: 0; bottom: 0; left: 0; pointer-events: none">\n  <div style="position: relative; height: 100%">\n    <hot-toast\n      *ngFor="let toast of toasts; trackBy: trackById; let i = index"\n      [toast]="toast"\n      [offset]="calculateOffset(toast.id, toast.position)"\n      [toastRef]="toastRefs[i]"\n      (height)="updateHeight($event, toast)"\n      (beforeClosed)="beforeClosed(toast)"\n      (afterClosed)="afterClosed($event)"\n    ></hot-toast>\n  </div>\n</div>\n'
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }];
  }, {
    defaultConfig: [{
      type: Input
    }],
    hotToastComponentList: [{
      type: ViewChildren,
      args: [HotToastComponent]
    }]
  });
})();
var ToastConfig = class {
  constructor() {
    this.reverseOrder = false;
    this.ariaLive = "polite";
    this.role = "status";
    this.position = "top-center";
    this.autoClose = true;
    this.theme = "toast";
    this.attributes = {};
    this.info = {
      content: ""
    };
    this.success = {
      content: ""
    };
    this.error = {
      content: ""
    };
    this.loading = {
      content: ""
    };
    this.blank = {
      content: ""
    };
    this.warning = {
      content: ""
    };
  }
};
var isFunction = (valOrFunction) => typeof valOrFunction === "function";
var resolveValueOrFunction = (valOrFunction, arg) => isFunction(valOrFunction) ? valOrFunction(arg) : valOrFunction;
var ToastPersistConfig = class {
  constructor() {
    this.storage = "local";
    this.key = "ngneat/hototast-${id}";
    this.count = 1;
    this.enabled = false;
  }
};
var HotToastService = class {
  constructor(_viewService, platformId, config) {
    this._viewService = _viewService;
    this.platformId = platformId;
    this._isInitialized = false;
    this._defaultConfig = new ToastConfig();
    this._defaultPersistConfig = new ToastPersistConfig();
    if (config) {
      this._defaultConfig = __spreadValues(__spreadValues({}, this._defaultConfig), config);
    }
  }
  get defaultConfig() {
    return this._defaultConfig;
  }
  set defaultConfig(config) {
    this._defaultConfig = __spreadValues(__spreadValues({}, this._defaultConfig), config);
    if (this._componentRef) {
      this._componentRef.setInput("defaultConfig", this._defaultConfig);
    }
  }
  /**
   * Opens up an hot-toast without any pre-configurations
   *
   * @param message The message to show in the hot-toast.
   * @param [options] Additional configuration options for the hot-toast.
   * @returns
   * @memberof HotToastService
   */
  show(message, options) {
    const toast = this.createToast(message || this._defaultConfig.blank.content, "blank", __spreadValues(__spreadValues({}, this._defaultConfig), options));
    return toast;
  }
  /**
   * Opens up an hot-toast with pre-configurations for error state
   *
   * @param message The message to show in the hot-toast.
   * @param [options] Additional configuration options for the hot-toast.
   * @returns
   * @memberof HotToastService
   */
  error(message, options) {
    const toast = this.createToast(message || this._defaultConfig.error.content, "error", __spreadValues(__spreadValues(__spreadValues({}, this._defaultConfig), this._defaultConfig?.error), options));
    return toast;
  }
  /**
   * Opens up an hot-toast with pre-configurations for success state
   *
   * @param message The message to show in the hot-toast.
   * @param [options] Additional configuration options for the hot-toast.
   * @returns
   * @memberof HotToastService
   */
  success(message, options) {
    const toast = this.createToast(message || this._defaultConfig.success.content, "success", __spreadValues(__spreadValues(__spreadValues({}, this._defaultConfig), this._defaultConfig?.success), options));
    return toast;
  }
  /**
   * Opens up an hot-toast with pre-configurations for loading state
   *
   * @param message The message to show in the hot-toast.
   * @param [options] Additional configuration options for the hot-toast.
   * @returns
   * @memberof HotToastService
   */
  loading(message, options) {
    const toast = this.createToast(message || this._defaultConfig.loading.content, "loading", __spreadValues(__spreadValues(__spreadValues({}, this._defaultConfig), this._defaultConfig?.loading), options));
    return toast;
  }
  /**
   * Opens up an hot-toast with pre-configurations for warning state
   *
   * @param message The message to show in the hot-toast.
   * @param [options] Additional configuration options for the hot-toast.
   * @returns
   * @memberof HotToastService
   */
  warning(message, options) {
    const toast = this.createToast(message || this._defaultConfig.warning.content, "warning", __spreadValues(__spreadValues(__spreadValues({}, this._defaultConfig), this._defaultConfig?.warning), options));
    return toast;
  }
  /**
   * Opens up an hot-toast with pre-configurations for info state
   *
   * @param message The message to show in the hot-toast.
   * @param [options] Additional configuration options for the hot-toast.
   * @returns
   * @memberof HotToastService
   * @since 3.3.0
   */
  info(message, options) {
    const toast = this.createToast(message || this._defaultConfig.info.content, "info", __spreadValues(__spreadValues(__spreadValues({}, this._defaultConfig), this._defaultConfig?.info), options));
    return toast;
  }
  /**
   *
   *  Opens up an hot-toast with pre-configurations for loading initially and then changes state based on messages
   *
   * @template T Type of observable
   * @param messages Messages for each state i.e. loading, success and error
   * @returns
   * @memberof HotToastService
   */
  observe(messages) {
    return (source) => {
      let toastRef;
      let start = 0;
      const loadingContent = messages.loading ?? this._defaultConfig.loading?.content;
      const successContent = messages.success ?? this._defaultConfig.success?.content;
      const errorContent = messages.error ?? this._defaultConfig.error?.content;
      return defer(() => {
        if (loadingContent) {
          toastRef = this.createLoadingToast(loadingContent);
          start = Date.now();
        }
        return source.pipe(tap(__spreadValues(__spreadValues({}, successContent && {
          next: (val) => {
            toastRef = this.createOrUpdateToast(messages, val, toastRef, "success", start === 0 ? start : Date.now() - start);
          }
        }), errorContent && {
          error: (e) => {
            toastRef = this.createOrUpdateToast(messages, e, toastRef, "error", start === 0 ? start : Date.now() - start);
          }
        })));
      });
    };
  }
  /**
   * Closes the hot-toast
   *
   * @param [id] - ID of the toast
   * @since 3.0.1 - If ID is not provided, all toasts will be closed
   */
  close(id) {
    if (this._componentRef) {
      this._componentRef.ref.instance.closeToast(id);
    }
  }
  /**
   * Used for internal purpose only.
   * Creates a container component and attaches it to document.body.
   */
  init() {
    if (isPlatformServer(this.platformId)) {
      return;
    }
    this._componentRef = this._viewService.createComponent(HotToastContainerComponent).setInput("defaultConfig", this._defaultConfig).appendTo(document.body);
  }
  createOrUpdateToast(messages, val, toastRef, type, diff) {
    let content = null;
    let options = {};
    ({
      content,
      options
    } = this.getContentAndOptions(type, messages[type] || (this._defaultConfig[type] ? this._defaultConfig[type].content : "")));
    content = resolveValueOrFunction(content, val);
    if (toastRef) {
      toastRef.updateMessage(content);
      const updatedOptions = __spreadValues(__spreadValues({
        type,
        duration: diff + HOT_TOAST_DEFAULT_TIMEOUTS[type]
      }, options), options.duration && {
        duration: diff + options.duration
      });
      toastRef.updateToast(updatedOptions);
    } else {
      this.createToast(content, type, options);
    }
    return toastRef;
  }
  createToast(message, type, options, observableMessages) {
    if (!this._isInitialized) {
      this._isInitialized = true;
      this.init();
    }
    const now = Date.now();
    const id = options?.id ?? now.toString();
    if (!this.isDuplicate(id) && (!options.persist?.enabled || options.persist?.enabled && this.handleStorageValue(id, options))) {
      const toast = __spreadValues({
        ariaLive: options?.ariaLive ?? "polite",
        createdAt: now,
        duration: options?.duration ?? HOT_TOAST_DEFAULT_TIMEOUTS[type],
        id,
        message,
        role: options?.role ?? "status",
        type,
        visible: true,
        observableMessages: observableMessages ?? void 0
      }, options);
      return new HotToastRef(toast).appendTo(this._componentRef.ref.instance);
    }
  }
  /**
   * Checks whether any toast with same id is present.
   *
   * @private
   * @param id - Toast ID
   */
  isDuplicate(id) {
    return this._componentRef.ref.instance.hasToast(id);
  }
  /**
   * Creates an entry in local or session storage with count ${defaultConfig.persist.count}, if not present.
   * If present in storage, reduces the count
   * and returns the count.
   * Count can not be less than 0.
   */
  handleStorageValue(id, options) {
    let count = 1;
    const persist = __spreadValues(__spreadValues({}, this._defaultPersistConfig), options.persist);
    const storage = persist.storage === "local" ? localStorage : sessionStorage;
    const key = persist.key.replace(/\${id}/g, id);
    let item = storage.getItem(key);
    if (item) {
      item = parseInt(item, 10);
      if (item > 0) {
        count = item - 1;
      } else {
        count = item;
      }
    } else {
      count = persist.count;
    }
    storage.setItem(key, count.toString());
    return count;
  }
  getContentAndOptions(toastType, message) {
    var _a;
    let content;
    let options = __spreadValues(__spreadValues({}, this._defaultConfig), this._defaultConfig[toastType]);
    if (typeof message === "string" || isTemplateRef(message) || isComponent(message)) {
      content = message;
    } else {
      let restOptions;
      _a = message, {
        content
      } = _a, restOptions = __objRest(_a, [
        "content"
      ]);
      options = __spreadValues(__spreadValues({}, options), restOptions);
    }
    return {
      content,
      options
    };
  }
  createLoadingToast(messages) {
    let content = null;
    let options = {};
    ({
      content,
      options
    } = this.getContentAndOptions("loading", messages));
    return this.loading(content, options);
  }
};
HotToastService.ɵfac = function HotToastService_Factory(t) {
  return new (t || HotToastService)(ɵɵinject(ViewService), ɵɵinject(PLATFORM_ID), ɵɵinject(ToastConfig, 8));
};
HotToastService.ɵprov = ɵɵdefineInjectable({
  token: HotToastService,
  factory: HotToastService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HotToastService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: ViewService
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: ToastConfig,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var HotToastModule = class _HotToastModule {
  static forRoot(config) {
    return {
      ngModule: _HotToastModule,
      providers: [{
        provide: ToastConfig,
        useValue: config
      }]
    };
  }
};
HotToastModule.ɵfac = function HotToastModule_Factory(t) {
  return new (t || HotToastModule)();
};
HotToastModule.ɵmod = ɵɵdefineNgModule({
  type: HotToastModule,
  declarations: [HotToastContainerComponent, HotToastComponent, AnimatedIconComponent, IndicatorComponent, CheckMarkComponent, ErrorComponent, LoaderComponent, WarningComponent, InfoComponent],
  imports: [CommonModule, DynamicViewModule]
});
HotToastModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, DynamicViewModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HotToastModule, [{
    type: NgModule,
    args: [{
      declarations: [HotToastContainerComponent, HotToastComponent, AnimatedIconComponent, IndicatorComponent, CheckMarkComponent, ErrorComponent, LoaderComponent, WarningComponent, InfoComponent],
      imports: [CommonModule, DynamicViewModule]
    }]
  }], null, null);
})();
export {
  HotToastModule,
  HotToastRef,
  HotToastService,
  ToastConfig,
  ToastPersistConfig,
  resolveValueOrFunction
};
//# sourceMappingURL=@ngneat_hot-toast.js.map
