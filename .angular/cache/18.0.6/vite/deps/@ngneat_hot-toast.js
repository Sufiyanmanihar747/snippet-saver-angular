import {
  CommonModule,
  NgClass,
  NgStyle,
  isPlatformServer
} from "./chunk-3RS7BM2W.js";
import {
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  EnvironmentInjector,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
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
  createComponent,
  defer,
  filter,
  inject,
  makeEnvironmentProviders,
  map,
  race,
  setClassMetadata,
  signal,
  tap,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
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

// node_modules/@ngneat/overview/fesm2022/ngneat-overview.mjs
var _TeleportService = class _TeleportService {
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
_TeleportService.ɵfac = function TeleportService_Factory(t) {
  return new (t || _TeleportService)();
};
_TeleportService.ɵprov = ɵɵdefineInjectable({
  token: _TeleportService,
  factory: _TeleportService.ɵfac,
  providedIn: "root"
});
var TeleportService = _TeleportService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeleportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _TeleportDirective = class _TeleportDirective {
  constructor() {
    this.subscription = null;
    this.tpl = inject(TemplateRef);
    this.service = inject(TeleportService);
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
_TeleportDirective.ɵfac = function TeleportDirective_Factory(t) {
  return new (t || _TeleportDirective)();
};
_TeleportDirective.ɵdir = ɵɵdefineDirective({
  type: _TeleportDirective,
  selectors: [["", "teleportTo", ""]],
  inputs: {
    teleportTo: "teleportTo"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var TeleportDirective = _TeleportDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeleportDirective, [{
    type: Directive,
    args: [{
      selector: "[teleportTo]",
      standalone: true
    }]
  }], null, {
    teleportTo: [{
      type: Input
    }]
  });
})();
var _TeleportOutletDirective = class _TeleportOutletDirective {
  constructor() {
    this.vcr = inject(ViewContainerRef);
    this.service = inject(TeleportService);
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
_TeleportOutletDirective.ɵfac = function TeleportOutletDirective_Factory(t) {
  return new (t || _TeleportOutletDirective)();
};
_TeleportOutletDirective.ɵdir = ɵɵdefineDirective({
  type: _TeleportOutletDirective,
  selectors: [["", "teleportOutlet", ""]],
  inputs: {
    teleportOutlet: "teleportOutlet"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var TeleportOutletDirective = _TeleportOutletDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeleportOutletDirective, [{
    type: Directive,
    args: [{
      selector: "[teleportOutlet]",
      standalone: true
    }]
  }], null, {
    teleportOutlet: [{
      type: Input
    }]
  });
})();
var CompRef = class {
  constructor(options) {
    this.options = options;
    if (options.vcr) {
      this.ref = options.vcr.createComponent(options.component, {
        index: options.vcr.length,
        injector: options.injector || options.vcr.injector
      });
    } else {
      this.ref = createComponent(options.component, {
        elementInjector: options.injector,
        environmentInjector: options.environmentInjector
      });
      options.appRef.attachView(this.ref.hostView);
    }
  }
  setInput(input, value) {
    this.ref.setInput(input, value);
    return this;
  }
  setInputs(inputs) {
    Object.keys(inputs).forEach((input) => {
      this.ref.setInput(input, inputs[input]);
    });
    return this;
  }
  detectChanges() {
    this.ref.hostView.detectChanges();
    return this;
  }
  updateContext(context) {
    this.options.contextSignal?.set(context);
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
    return this.ref.location.nativeElement;
  }
  destroy() {
    this.ref.destroy();
    !this.options.vcr && this.options.appRef.detachView(this.ref.hostView);
    this.ref = null;
  }
};
function isTemplateRef(value) {
  return value instanceof TemplateRef;
}
function isComponent(value) {
  return typeof value === "function";
}
function isString(value) {
  return typeof value === "string";
}
var TplRef = class {
  constructor(args) {
    this.args = args;
    if (this.args.vcr) {
      this.ref = this.args.vcr.createEmbeddedView(this.args.tpl, this.args.context || {}, {
        injector: args.injector
      });
      this.ref.detectChanges();
    } else {
      this.ref = this.args.tpl.createEmbeddedView(this.args.context || {}, args.injector);
      this.ref.detectChanges();
      this.args.appRef.attachView(this.ref);
    }
  }
  detectChanges() {
    this.ref.detectChanges();
    return this;
  }
  getElement() {
    const rootNodes = this.ref.rootNodes;
    if (rootNodes.length === 1 && rootNodes[0] === Node.ELEMENT_NODE) {
      this.element = rootNodes[0];
    } else {
      this.element = document.createElement("div");
      this.element.append(...rootNodes);
    }
    return this.element;
  }
  destroy() {
    if (this.ref.rootNodes[0] !== 1) {
      this.element?.parentNode.removeChild(this.element);
      this.element = null;
    }
    if (!this.args.vcr) {
      this.args.appRef.detachView(this.ref);
    }
    this.ref.destroy();
    this.ref = null;
  }
  updateContext(context) {
    Object.assign(this.ref.context, context);
    return this;
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
    return this;
  }
  updateContext() {
    return this;
  }
  destroy() {
  }
};
var VIEW_CONTEXT = new InjectionToken("Component context");
var _ViewService = class _ViewService {
  constructor() {
    this.injector = inject(Injector);
    this.appRef = inject(ApplicationRef);
    this.environmentInjector = inject(EnvironmentInjector);
  }
  createComponent(component, options = {}) {
    let injector = options.injector ?? this.injector;
    let contextSignal;
    if (options.context) {
      contextSignal = signal(options.context);
      injector = Injector.create({
        providers: [{
          provide: VIEW_CONTEXT,
          useValue: contextSignal.asReadonly()
        }],
        parent: injector
      });
    }
    return new CompRef({
      component,
      vcr: options.vcr,
      injector,
      appRef: this.appRef,
      environmentInjector: options.environmentInjector || this.environmentInjector,
      contextSignal
    });
  }
  createTemplate(tpl, options = {}) {
    return new TplRef({
      vcr: options.vcr,
      appRef: this.appRef,
      tpl,
      context: options.context,
      injector: options.injector
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
_ViewService.ɵfac = function ViewService_Factory(t) {
  return new (t || _ViewService)();
};
_ViewService.ɵprov = ɵɵdefineInjectable({
  token: _ViewService,
  factory: _ViewService.ɵfac,
  providedIn: "root"
});
var ViewService = _ViewService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _DynamicViewComponent = class _DynamicViewComponent {
};
_DynamicViewComponent.ɵfac = function DynamicViewComponent_Factory(t) {
  return new (t || _DynamicViewComponent)();
};
_DynamicViewComponent.ɵcmp = ɵɵdefineComponent({
  type: _DynamicViewComponent,
  selectors: [["dynamic-view"]],
  inputs: {
    content: "content"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
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
var DynamicViewComponent = _DynamicViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicViewComponent, [{
    type: Component,
    args: [{
      selector: "dynamic-view",
      standalone: true,
      template: ` <div [innerHTML]="content"></div> `
    }]
  }], null, {
    content: [{
      type: Input
    }]
  });
})();
var _DynamicViewDirective = class _DynamicViewDirective {
  constructor() {
    this.defaultTpl = inject(TemplateRef);
    this.vcr = inject(ViewContainerRef);
    this.viewService = inject(ViewService);
  }
  ngOnInit() {
    this.resolveContentType();
  }
  ngOnChanges(changes) {
    const viewChanged = changes.view && !changes.view.isFirstChange();
    const contextChanged = changes.context && !changes.context.isFirstChange();
    const inputsChanged = changes.inputs && !changes.inputs.isFirstChange();
    if (viewChanged) {
      this.resolveContentType();
    } else if (contextChanged) {
      this.viewRef.updateContext(this.context);
    } else if (isComponent(this.view) && inputsChanged) {
      this.viewRef.setInputs(this.inputs || {});
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
    } else if (isComponent(this.view)) {
      this.viewRef = this.viewService.createComponent(this.view, {
        vcr: this.vcr,
        injector: this.injector ?? this.vcr.injector,
        context: this.context
      });
      if (this.inputs) {
        this.viewRef.setInputs(this.inputs);
      }
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
_DynamicViewDirective.ɵfac = function DynamicViewDirective_Factory(t) {
  return new (t || _DynamicViewDirective)();
};
_DynamicViewDirective.ɵdir = ɵɵdefineDirective({
  type: _DynamicViewDirective,
  selectors: [["", "dynamicView", ""]],
  inputs: {
    view: [0, "dynamicView", "view"],
    injector: [0, "dynamicViewInjector", "injector"],
    context: [0, "dynamicViewContext", "context"],
    inputs: [0, "dynamicViewInputs", "inputs"]
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var DynamicViewDirective = _DynamicViewDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicViewDirective, [{
    type: Directive,
    args: [{
      selector: "[dynamicView]",
      standalone: true
    }]
  }], null, {
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
    }],
    inputs: [{
      type: Input,
      args: ["dynamicViewInputs"]
    }]
  });
})();

// node_modules/@ngneat/hot-toast/fesm2022/ngneat-hot-toast.mjs
var _c0 = (a0, a1) => ({
  "border-color": a0,
  "border-right-color": a1
});
function IndicatorComponent_Conditional_0_Conditional_5_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0, "\n      ");
    ɵɵelementStart(1, "div");
    ɵɵtext(2, "\n        ");
    ɵɵelement(3, "hot-toast-error", 1);
    ɵɵtext(4, "\n      ");
    ɵɵelementEnd();
    ɵɵtext(5, "\n      ");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance(3);
    ɵɵproperty("theme", ctx_r0.theme);
  }
}
function IndicatorComponent_Conditional_0_Conditional_5_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0, "\n      ");
    ɵɵelementStart(1, "div");
    ɵɵtext(2, "\n        ");
    ɵɵelement(3, "hot-toast-checkmark", 1);
    ɵɵtext(4, "\n      ");
    ɵɵelementEnd();
    ɵɵtext(5, "\n      ");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance(3);
    ɵɵproperty("theme", ctx_r0.theme);
  }
}
function IndicatorComponent_Conditional_0_Conditional_5_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0, "\n      ");
    ɵɵelementStart(1, "div");
    ɵɵtext(2, "\n        ");
    ɵɵelement(3, "hot-toast-warning", 1);
    ɵɵtext(4, "\n      ");
    ɵɵelementEnd();
    ɵɵtext(5, "\n      ");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance(3);
    ɵɵproperty("theme", ctx_r0.theme);
  }
}
function IndicatorComponent_Conditional_0_Conditional_5_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0, "\n      ");
    ɵɵelementStart(1, "div");
    ɵɵtext(2, "\n        ");
    ɵɵelement(3, "hot-toast-info", 1);
    ɵɵtext(4, "\n      ");
    ɵɵelementEnd();
    ɵɵtext(5, "\n      ");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance(3);
    ɵɵproperty("theme", ctx_r0.theme);
  }
}
function IndicatorComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0, "\n  ");
    ɵɵelementStart(1, "div", 2);
    ɵɵtext(2, "\n    ");
    ɵɵelementStart(3, "div");
    ɵɵtext(4, "\n      ");
    ɵɵtemplate(5, IndicatorComponent_Conditional_0_Conditional_5_Case_5_Template, 6, 1)(6, IndicatorComponent_Conditional_0_Conditional_5_Case_6_Template, 6, 1)(7, IndicatorComponent_Conditional_0_Conditional_5_Case_7_Template, 6, 1)(8, IndicatorComponent_Conditional_0_Conditional_5_Case_8_Template, 6, 1);
    ɵɵtext(9, "\n    ");
    ɵɵelementEnd();
    ɵɵtext(10, "\n  ");
    ɵɵelementEnd();
    ɵɵtext(11, "\n  ");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(5);
    ɵɵconditional((tmp_2_0 = ctx_r0.type) === "error" ? 5 : tmp_2_0 === "success" ? 6 : tmp_2_0 === "warning" ? 7 : tmp_2_0 === "info" ? 8 : -1);
  }
}
function IndicatorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0, "\n");
    ɵɵelementStart(1, "div", 0);
    ɵɵtext(2, "\n  ");
    ɵɵelement(3, "hot-toast-loader", 1);
    ɵɵtext(4, "\n  ");
    ɵɵtemplate(5, IndicatorComponent_Conditional_0_Conditional_5_Template, 12, 1);
    ɵɵelementEnd();
    ɵɵtext(6, "\n");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("theme", ctx_r0.theme);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r0.type !== "loading" ? 5 : -1);
  }
}
var _c1 = ["*"];
var _c2 = ["hotToastBarBase"];
function HotToastComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0, "\n        ");
    ɵɵelementStart(1, "hot-toast-animated-icon", 7);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtext(3, "\n        ");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("iconTheme", ctx_r1.toast.iconTheme);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.toast.icon);
  }
}
function HotToastComponent_Conditional_9_Conditional_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function HotToastComponent_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0, "\n        ");
    ɵɵelementStart(1, "div");
    ɵɵtext(2, "\n          ");
    ɵɵtemplate(3, HotToastComponent_Conditional_9_Conditional_2_ng_container_3_Template, 1, 0, "ng-container", 8);
    ɵɵtext(4, "\n        ");
    ɵɵelementEnd();
    ɵɵtext(5, "\n        ");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵproperty("dynamicView", ctx_r1.toast.icon);
  }
}
function HotToastComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0, " ");
    ɵɵtemplate(1, HotToastComponent_Conditional_9_Conditional_1_Template, 4, 2)(2, HotToastComponent_Conditional_9_Conditional_2_Template, 6, 1);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r1.isIconString ? 1 : 2);
  }
}
function HotToastComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0, "\n        ");
    ɵɵelement(1, "hot-toast-indicator", 9);
    ɵɵtext(2, "\n        ");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("theme", ctx_r1.toast.iconTheme)("type", ctx_r1.toast.type);
  }
}
function HotToastComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function HotToastComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵtext(0, "\n      ");
    ɵɵelementStart(1, "button", 10);
    ɵɵlistener("click", function HotToastComponent_Conditional_20_Template_button_click_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.close());
    });
    ɵɵelementEnd();
    ɵɵtext(2, "\n      ");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r1.toast.closeStyle);
  }
}
function HotToastContainerComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵtext(0, "\n      ");
    ɵɵelementStart(1, "hot-toast", 2);
    ɵɵlistener("showAllToasts", function HotToastContainerComponent_For_7_Template_hot_toast_showAllToasts_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.showAllToasts($event));
    })("height", function HotToastContainerComponent_For_7_Template_hot_toast_height_1_listener($event) {
      const toast_r3 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateHeight($event, toast_r3));
    })("beforeClosed", function HotToastContainerComponent_For_7_Template_hot_toast_beforeClosed_1_listener() {
      const toast_r3 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.beforeClosed(toast_r3));
    })("afterClosed", function HotToastContainerComponent_For_7_Template_hot_toast_afterClosed_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.afterClosed($event));
    });
    ɵɵelementEnd();
    ɵɵtext(2, "\n      ");
  }
  if (rf & 2) {
    const toast_r3 = ctx.$implicit;
    const ɵ$index_10_r4 = ctx.$index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("toast", toast_r3)("offset", ctx_r1.calculateOffset(toast_r3.id, toast_r3.position))("toastRef", ctx_r1.toastRefs[ɵ$index_10_r4])("toastsAfter", (toast_r3.autoClose ? ctx_r1.toasts.length : ctx_r1.getVisibleToasts(toast_r3.position).length) - 1 - ɵ$index_10_r4)("defaultConfig", ctx_r1.defaultConfig)("isShowingAllToasts", ctx_r1.isShowingAllToasts);
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
var HOT_TOAST_DEPTH_SCALE = 0.05;
var HOT_TOAST_DEPTH_SCALE_ADD = 1;
var HotToastRef = class {
  constructor(toast) {
    this.toast = toast;
    this._onClosed = new Subject();
  }
  set data(data) {
    this.toast.data = data;
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
var _LoaderComponent = class _LoaderComponent {
};
_LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
  return new (t || _LoaderComponent)();
};
_LoaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _LoaderComponent,
  selectors: [["hot-toast-loader"]],
  inputs: {
    theme: "theme"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 4,
  consts: [[1, "hot-toast-loader-icon", 3, "ngStyle"]],
  template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0);
      ɵɵtext(1, "\n");
    }
    if (rf & 2) {
      ɵɵproperty("ngStyle", ɵɵpureFunction2(1, _c0, ctx.theme == null ? null : ctx.theme.primary, ctx.theme == null ? null : ctx.theme.secondary));
    }
  },
  dependencies: [CommonModule, NgStyle],
  encapsulation: 2,
  changeDetection: 0
});
var LoaderComponent = _LoaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderComponent, [{
    type: Component,
    args: [{
      selector: "hot-toast-loader",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [CommonModule],
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
var _ErrorComponent = class _ErrorComponent {
};
_ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
  return new (t || _ErrorComponent)();
};
_ErrorComponent.ɵcmp = ɵɵdefineComponent({
  type: _ErrorComponent,
  selectors: [["hot-toast-error"]],
  inputs: {
    theme: "theme"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
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
var ErrorComponent = _ErrorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorComponent, [{
    type: Component,
    args: [{
      selector: "hot-toast-error",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      template: '<div\n  class="hot-toast-error-icon"\n  [style.--error-primary]="theme?.primary"\n  [style.--error-secondary]="theme?.secondary"\n></div>\n'
    }]
  }], null, {
    theme: [{
      type: Input
    }]
  });
})();
var _CheckMarkComponent = class _CheckMarkComponent {
};
_CheckMarkComponent.ɵfac = function CheckMarkComponent_Factory(t) {
  return new (t || _CheckMarkComponent)();
};
_CheckMarkComponent.ɵcmp = ɵɵdefineComponent({
  type: _CheckMarkComponent,
  selectors: [["hot-toast-checkmark"]],
  inputs: {
    theme: "theme"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
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
var CheckMarkComponent = _CheckMarkComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckMarkComponent, [{
    type: Component,
    args: [{
      selector: "hot-toast-checkmark",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      template: '<div\n  class="hot-toast-checkmark-icon"\n  [style.--check-primary]="theme?.primary"\n  [style.--check-secondary]="theme?.secondary"\n></div>\n'
    }]
  }], null, {
    theme: [{
      type: Input
    }]
  });
})();
var _WarningComponent = class _WarningComponent {
};
_WarningComponent.ɵfac = function WarningComponent_Factory(t) {
  return new (t || _WarningComponent)();
};
_WarningComponent.ɵcmp = ɵɵdefineComponent({
  type: _WarningComponent,
  selectors: [["hot-toast-warning"]],
  inputs: {
    theme: "theme"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
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
var WarningComponent = _WarningComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WarningComponent, [{
    type: Component,
    args: [{
      selector: "hot-toast-warning",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      template: '<div\n  class="hot-toast-warning-icon"\n  [style.--warn-primary]="theme?.primary"\n  [style.--warn-secondary]="theme?.secondary"\n></div>\n'
    }]
  }], null, {
    theme: [{
      type: Input
    }]
  });
})();
var _InfoComponent = class _InfoComponent {
};
_InfoComponent.ɵfac = function InfoComponent_Factory(t) {
  return new (t || _InfoComponent)();
};
_InfoComponent.ɵcmp = ɵɵdefineComponent({
  type: _InfoComponent,
  selectors: [["hot-toast-info"]],
  inputs: {
    theme: "theme"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
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
var InfoComponent = _InfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoComponent, [{
    type: Component,
    args: [{
      selector: "hot-toast-info",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      template: '<div\n  class="hot-toast-info-icon"\n  [style.--warn-primary]="theme?.primary"\n  [style.--warn-secondary]="theme?.secondary"\n></div>\n'
    }]
  }], null, {
    theme: [{
      type: Input
    }]
  });
})();
var _IndicatorComponent = class _IndicatorComponent {
};
_IndicatorComponent.ɵfac = function IndicatorComponent_Factory(t) {
  return new (t || _IndicatorComponent)();
};
_IndicatorComponent.ɵcmp = ɵɵdefineComponent({
  type: _IndicatorComponent,
  selectors: [["hot-toast-indicator"]],
  inputs: {
    theme: "theme",
    type: "type"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 1,
  vars: 1,
  consts: [[1, "hot-toast-indicator-wrapper"], [3, "theme"], [1, "hot-toast-status-wrapper"]],
  template: function IndicatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, IndicatorComponent_Conditional_0_Template, 7, 2);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.type !== "blank" ? 0 : -1);
    }
  },
  dependencies: [LoaderComponent, ErrorComponent, CheckMarkComponent, WarningComponent, InfoComponent],
  encapsulation: 2,
  changeDetection: 0
});
var IndicatorComponent = _IndicatorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IndicatorComponent, [{
    type: Component,
    args: [{
      selector: "hot-toast-indicator",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [LoaderComponent, ErrorComponent, CheckMarkComponent, WarningComponent, InfoComponent],
      template: `@if (type !== 'blank') {
<div class="hot-toast-indicator-wrapper">
  <hot-toast-loader [theme]="theme"></hot-toast-loader>
  @if (type !== 'loading') {
  <div class="hot-toast-status-wrapper">
    <div>
      @switch (type) { @case ('error') {
      <div>
        <hot-toast-error [theme]="theme"></hot-toast-error>
      </div>
      } @case ('success') {
      <div>
        <hot-toast-checkmark [theme]="theme"></hot-toast-checkmark>
      </div>
      } @case ('warning') {
      <div>
        <hot-toast-warning [theme]="theme"></hot-toast-warning>
      </div>
      } @case ('info') {
      <div>
        <hot-toast-info [theme]="theme"></hot-toast-info>
      </div>
      } }
    </div>
  </div>
  }
</div>
}
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
var _AnimatedIconComponent = class _AnimatedIconComponent {
};
_AnimatedIconComponent.ɵfac = function AnimatedIconComponent_Factory(t) {
  return new (t || _AnimatedIconComponent)();
};
_AnimatedIconComponent.ɵcmp = ɵɵdefineComponent({
  type: _AnimatedIconComponent,
  selectors: [["hot-toast-animated-icon"]],
  inputs: {
    iconTheme: "iconTheme"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
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
var AnimatedIconComponent = _AnimatedIconComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimatedIconComponent, [{
    type: Component,
    args: [{
      selector: "hot-toast-animated-icon",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      template: '<div class="hot-toast-animated-icon" [style.color]="iconTheme?.primary">\n  <ng-content></ng-content>\n</div>\n'
    }]
  }], null, {
    iconTheme: [{
      type: Input
    }]
  });
})();
var _HotToastComponent = class _HotToastComponent {
  get toastsAfter() {
    return this._toastsAfter;
  }
  set toastsAfter(value) {
    this._toastsAfter = value;
    if (this.defaultConfig?.visibleToasts > 0) {
      if (this.toast.autoClose) {
      } else {
        if (value >= this.defaultConfig?.visibleToasts) {
          this.softClose();
        } else if (this.softClosed) {
          this.softOpen();
        }
      }
    }
  }
  constructor(injector, renderer, ngZone) {
    this.injector = injector;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.offset = 0;
    this._toastsAfter = 0;
    this.isShowingAllToasts = false;
    this.height = new EventEmitter();
    this.beforeClosed = new EventEmitter();
    this.afterClosed = new EventEmitter();
    this.showAllToasts = new EventEmitter();
    this.isManualClose = false;
    this.unlisteners = [];
    this.softClosed = false;
  }
  get toastBarBaseHeight() {
    return this.toastBarBase.nativeElement.offsetHeight;
  }
  get scale() {
    return this.defaultConfig.stacking !== "vertical" && !this.isShowingAllToasts ? this.toastsAfter * -HOT_TOAST_DEPTH_SCALE + 1 : 1;
  }
  get translateY() {
    return this.offset * (this.top ? 1 : -1) + "px";
  }
  get exitAnimationDelay() {
    return this.toast.duration + "ms";
  }
  get top() {
    return this.toast.position.includes("top");
  }
  get containerPositionStyle() {
    const verticalStyle = this.top ? {
      top: 0
    } : {
      bottom: 0
    };
    const transform = `translateY(var(--hot-toast-translate-y)) scale(var(--hot-toast-scale))`;
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
      transform
    }, verticalStyle), horizontalStyle);
  }
  get toastBarBaseStyles() {
    const enterAnimation = `hotToastEnterAnimation${this.top ? "Negative" : "Positive"} ${ENTER_ANIMATION_DURATION}ms cubic-bezier(0.21, 1.02, 0.73, 1) forwards`;
    const exitAnimation = `hotToastExitAnimation${this.top ? "Negative" : "Positive"} ${EXIT_ANIMATION_DURATION}ms forwards cubic-bezier(0.06, 0.71, 0.55, 1) var(--hot-toast-exit-animation-delay) var(--hot-toast-exit-animation-state)`;
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
  softClose() {
    const exitAnimation = `hotToastExitSoftAnimation${this.top ? "Negative" : "Positive"} ${EXIT_ANIMATION_DURATION}ms forwards cubic-bezier(0.06, 0.71, 0.55, 1)`;
    const nativeElement = this.toastBarBase.nativeElement;
    animate(nativeElement, exitAnimation);
    this.softClosed = true;
  }
  softOpen() {
    const softEnterAnimation = `hotToastEnterSoftAnimation${top ? "Negative" : "Positive"} ${ENTER_ANIMATION_DURATION}ms cubic-bezier(0.21, 1.02, 0.73, 1) forwards`;
    const nativeElement = this.toastBarBase.nativeElement;
    animate(nativeElement, softEnterAnimation);
    this.softClosed = false;
  }
  close() {
    this.isManualClose = true;
    const exitAnimation = `hotToastExitAnimation${this.top ? "Negative" : "Positive"} ${EXIT_ANIMATION_DURATION}ms forwards cubic-bezier(0.06, 0.71, 0.55, 1)`;
    const nativeElement = this.toastBarBase.nativeElement;
    animate(nativeElement, exitAnimation);
  }
  handleMouseEnter() {
    this.showAllToasts.emit(true);
  }
  handleMouseLeave() {
    this.showAllToasts.emit(false);
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
_HotToastComponent.ɵfac = function HotToastComponent_Factory(t) {
  return new (t || _HotToastComponent)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone));
};
_HotToastComponent.ɵcmp = ɵɵdefineComponent({
  type: _HotToastComponent,
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
    toastRef: "toastRef",
    toastsAfter: "toastsAfter",
    isShowingAllToasts: "isShowingAllToasts"
  },
  outputs: {
    height: "height",
    beforeClosed: "beforeClosed",
    afterClosed: "afterClosed",
    showAllToasts: "showAllToasts"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 24,
  vars: 21,
  consts: [["hotToastBarBase", ""], [1, "hot-toast-bar-base-container", 3, "ngStyle", "ngClass"], [1, "hot-toast-bar-base-wrapper", 3, "mouseenter", "mouseleave"], [1, "hot-toast-bar-base", 3, "ngStyle", "ngClass"], ["aria-hidden", "true", 1, "hot-toast-icon"], [1, "hot-toast-message"], [4, "dynamicView", "dynamicViewContext", "dynamicViewInjector"], [3, "iconTheme"], [4, "dynamicView"], [3, "theme", "type"], ["type", "button", "aria-label", "Close", 1, "hot-toast-close-btn", 3, "click", "ngStyle"]],
  template: function HotToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 1);
      ɵɵtext(1, "\n  ");
      ɵɵelementStart(2, "div", 2);
      ɵɵlistener("mouseenter", function HotToastComponent_Template_div_mouseenter_2_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleMouseEnter());
      })("mouseleave", function HotToastComponent_Template_div_mouseleave_2_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleMouseLeave());
      });
      ɵɵtext(3, "\n    ");
      ɵɵelementStart(4, "div", 3, 0);
      ɵɵtext(6, "\n      ");
      ɵɵelementStart(7, "div", 4);
      ɵɵtext(8, "\n        ");
      ɵɵtemplate(9, HotToastComponent_Conditional_9_Template, 3, 1)(10, HotToastComponent_Conditional_10_Template, 3, 2);
      ɵɵelementEnd();
      ɵɵtext(11, "\n\n      ");
      ɵɵelementStart(12, "div", 5);
      ɵɵtext(13, "\n        ");
      ɵɵelementStart(14, "div");
      ɵɵtext(15, "\n          ");
      ɵɵtemplate(16, HotToastComponent_ng_container_16_Template, 1, 0, "ng-container", 6);
      ɵɵtext(17, "\n        ");
      ɵɵelementEnd();
      ɵɵtext(18, "\n      ");
      ɵɵelementEnd();
      ɵɵtext(19, "\n\n      ");
      ɵɵtemplate(20, HotToastComponent_Conditional_20_Template, 3, 1);
      ɵɵelementEnd();
      ɵɵtext(21, "\n  ");
      ɵɵelementEnd();
      ɵɵtext(22, "\n");
      ɵɵelementEnd();
      ɵɵtext(23, "\n");
    }
    if (rf & 2) {
      ɵɵstyleProp("--hot-toast-scale", ctx.scale)("--hot-toast-translate-y", ctx.translateY);
      ɵɵproperty("ngStyle", ctx.containerPositionStyle)("ngClass", "hot-toast-theme-" + ctx.toast.theme);
      ɵɵadvance(4);
      ɵɵstyleProp("--hot-toast-animation-state", ctx.isManualClose ? "running" : "paused")("--hot-toast-exit-animation-state", ctx.isShowingAllToasts ? "paused" : "running")("--hot-toast-exit-animation-delay", ctx.exitAnimationDelay);
      ɵɵproperty("ngStyle", ctx.toastBarBaseStyles)("ngClass", ctx.toast.className);
      ɵɵattribute("aria-live", ctx.toast.ariaLive)("role", ctx.toast.role);
      ɵɵadvance(5);
      ɵɵconditional(ctx.toast.icon !== void 0 ? 9 : 10);
      ɵɵadvance(7);
      ɵɵproperty("dynamicView", ctx.toast.message)("dynamicViewContext", ctx.context)("dynamicViewInjector", ctx.toastComponentInjector);
      ɵɵadvance(4);
      ɵɵconditional(ctx.toast.dismissible ? 20 : -1);
    }
  },
  dependencies: [CommonModule, NgClass, NgStyle, DynamicViewDirective, IndicatorComponent, AnimatedIconComponent],
  encapsulation: 2,
  changeDetection: 0
});
var HotToastComponent = _HotToastComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HotToastComponent, [{
    type: Component,
    args: [{
      selector: "hot-toast",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [CommonModule, DynamicViewDirective, IndicatorComponent, AnimatedIconComponent],
      template: `<div
  class="hot-toast-bar-base-container"
  [ngStyle]="containerPositionStyle"
  [ngClass]="'hot-toast-theme-' + toast.theme"
  [style.--hot-toast-scale]="scale"
  [style.--hot-toast-translate-y]="translateY"
>
  <div class="hot-toast-bar-base-wrapper" (mouseenter)="handleMouseEnter()" (mouseleave)="handleMouseLeave()">
    <div
      class="hot-toast-bar-base"
      #hotToastBarBase
      [ngStyle]="toastBarBaseStyles"
      [ngClass]="toast.className"
      [style.--hot-toast-animation-state]="isManualClose ? 'running' : 'paused'"
      [style.--hot-toast-exit-animation-state]="isShowingAllToasts ? 'paused' : 'running'"
      [style.--hot-toast-exit-animation-delay]="exitAnimationDelay"
      [attr.aria-live]="toast.ariaLive"
      [attr.role]="toast.role"
    >
      <div class="hot-toast-icon" aria-hidden="true">
        @if (toast.icon !== undefined) { @if (isIconString) {
        <hot-toast-animated-icon [iconTheme]="toast.iconTheme">{{ toast.icon }}</hot-toast-animated-icon>
        } @else {
        <div>
          <ng-container *dynamicView="toast.icon"></ng-container>
        </div>
        } } @else {
        <hot-toast-indicator [theme]="toast.iconTheme" [type]="toast.type"></hot-toast-indicator>
        }
      </div>

      <div class="hot-toast-message">
        <div>
          <ng-container *dynamicView="toast.message; context: context; injector: toastComponentInjector"></ng-container>
        </div>
      </div>

      @if (toast.dismissible) {
      <button
        (click)="close()"
        type="button"
        class="hot-toast-close-btn"
        aria-label="Close"
        [ngStyle]="toast.closeStyle"
      ></button>
      }
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: Injector
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }], {
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
    toastsAfter: [{
      type: Input
    }],
    isShowingAllToasts: [{
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
    showAllToasts: [{
      type: Output
    }],
    toastBarBase: [{
      type: ViewChild,
      args: ["hotToastBarBase"]
    }]
  });
})();
var _HotToastContainerComponent = class _HotToastContainerComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.toasts = [];
    this.toastRefs = [];
    this.isShowingAllToasts = false;
    this._onClosed = new Subject();
    this.onClosed$ = this._onClosed.asObservable();
  }
  trackById(index, toast) {
    return toast.id;
  }
  getVisibleToasts(position) {
    return this.toasts.filter((t) => t.visible && t.position === position);
  }
  calculateOffset(toastId, position) {
    const visibleToasts = this.getVisibleToasts(position);
    const index = visibleToasts.findIndex((toast) => toast.id === toastId);
    const offset = index !== -1 ? visibleToasts.slice(...this.defaultConfig.reverseOrder ? [index + 1] : [0, index]).reduce((acc, t, i) => {
      const toastsAfter = visibleToasts.length - 1 - i;
      return this.defaultConfig.visibleToasts !== 0 && i < visibleToasts.length - this.defaultConfig.visibleToasts ? 0 : acc + (this.defaultConfig.stacking === "vertical" || this.isShowingAllToasts ? t.height || 0 : toastsAfter * HOT_TOAST_DEPTH_SCALE + HOT_TOAST_DEPTH_SCALE_ADD) + HOT_TOAST_MARGIN;
    }, 0) : 0;
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
    if (this.defaultConfig.visibleToasts !== 0 && this.toasts.length > this.defaultConfig.visibleToasts) {
      const closeToasts = this.toasts.slice(0, this.toasts.length - this.defaultConfig.visibleToasts);
      closeToasts.forEach((t) => {
        if (t.autoClose) {
          this.closeToast(t.id);
        }
      });
    }
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
  showAllToasts(show) {
    this.isShowingAllToasts = show;
  }
  getAfterClosed(toast) {
    return this.onClosed$.pipe(filter((v) => v.id === toast.id));
  }
  updateToasts(toast, options) {
    this.toasts = this.toasts.map((t) => __spreadValues(__spreadValues({}, t), t.id === toast.id && __spreadValues(__spreadValues({}, toast), options)));
  }
};
_HotToastContainerComponent.ɵfac = function HotToastContainerComponent_Factory(t) {
  return new (t || _HotToastContainerComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
_HotToastContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: _HotToastContainerComponent,
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
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 11,
  vars: 0,
  consts: [[2, "position", "fixed", "z-index", "9999", "top", "0", "right", "0", "bottom", "0", "left", "0", "pointer-events", "none"], [2, "position", "relative", "height", "100%"], [3, "showAllToasts", "height", "beforeClosed", "afterClosed", "toast", "offset", "toastRef", "toastsAfter", "defaultConfig", "isShowingAllToasts"]],
  template: function HotToastContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtext(1, "\n  ");
      ɵɵelementStart(2, "div", 1);
      ɵɵtext(3, "\n    ");
      ɵɵelementStart(4, "div");
      ɵɵtext(5, "\n      ");
      ɵɵrepeaterCreate(6, HotToastContainerComponent_For_7_Template, 3, 6, null, null, ctx.trackById, true);
      ɵɵelementEnd();
      ɵɵtext(8, "\n  ");
      ɵɵelementEnd();
      ɵɵtext(9, "\n");
      ɵɵelementEnd();
      ɵɵtext(10, "\n");
    }
    if (rf & 2) {
      ɵɵadvance(6);
      ɵɵrepeater(ctx.toasts);
    }
  },
  dependencies: [HotToastComponent],
  encapsulation: 2,
  changeDetection: 0
});
var HotToastContainerComponent = _HotToastContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HotToastContainerComponent, [{
    type: Component,
    args: [{
      selector: "hot-toast-container",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [HotToastComponent],
      template: '<div style="position: fixed; z-index: 9999; top: 0; right: 0; bottom: 0; left: 0; pointer-events: none">\n  <div style="position: relative; height: 100%">\n    <div>\n      @for (toast of toasts; track trackById(i, toast); let i = $index) {\n      <hot-toast\n        [toast]="toast"\n        [offset]="calculateOffset(toast.id, toast.position)"\n        [toastRef]="toastRefs[i]"\n        [toastsAfter]="(toast.autoClose ? toasts.length : getVisibleToasts(toast.position).length) - 1 - i"\n        [defaultConfig]="defaultConfig"\n        [isShowingAllToasts]="isShowingAllToasts"\n        (showAllToasts)="showAllToasts($event)"\n        (height)="updateHeight($event, toast)"\n        (beforeClosed)="beforeClosed(toast)"\n        (afterClosed)="afterClosed($event)"\n      ></hot-toast>\n      }\n    </div>\n  </div>\n</div>\n'
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
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
    this.visibleToasts = 5;
    this.stacking = "vertical";
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
var isAngularComponent = (arg) => {
  return typeof arg === "function" && arg.decorators && arg.decorators.some((decorator) => decorator.type === Component);
};
var resolveValueOrFunction = (valOrFunction, arg) => isAngularComponent(valOrFunction) ? valOrFunction : isFunction(valOrFunction) ? valOrFunction(arg) : valOrFunction;
var ToastPersistConfig = class {
  constructor() {
    this.storage = "local";
    this.key = "ngneat/hototast-${id}";
    this.count = 1;
    this.enabled = false;
  }
};
var _HotToastService = class _HotToastService {
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
    try {
      let content = null;
      let options = {};
      ({
        content,
        options
      } = this.getContentAndOptions(type, messages[type] || (this._defaultConfig[type] ? this._defaultConfig[type].content : "")));
      content = resolveValueOrFunction(content, val);
      if (toastRef) {
        if (options.data) {
          toastRef.data = options.data;
        }
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
    } catch (error) {
      console.error(error);
    }
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
_HotToastService.ɵfac = function HotToastService_Factory(t) {
  return new (t || _HotToastService)(ɵɵinject(ViewService), ɵɵinject(PLATFORM_ID), ɵɵinject(ToastConfig, 8));
};
_HotToastService.ɵprov = ɵɵdefineInjectable({
  token: _HotToastService,
  factory: _HotToastService.ɵfac,
  providedIn: "root"
});
var HotToastService = _HotToastService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HotToastService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
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
  }], null);
})();
function provideHotToastConfig(config) {
  return makeEnvironmentProviders([{
    provide: ToastConfig,
    useValue: config
  }]);
}
export {
  HotToastRef,
  HotToastService,
  ToastConfig,
  ToastPersistConfig,
  provideHotToastConfig,
  resolveValueOrFunction
};
//# sourceMappingURL=@ngneat_hot-toast.js.map
