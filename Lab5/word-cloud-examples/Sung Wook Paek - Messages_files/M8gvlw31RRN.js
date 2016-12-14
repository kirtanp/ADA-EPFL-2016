if (self.CavalryLogger) { CavalryLogger.start_js(["E31kO"]); }

__d("PaymentInvoiceActionIdentifier",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={MARK_AS_PAID:"MARK_AS_PAID",CANCEL:"CANCEL",MARK_AS_SHIPPED:"MARK_AS_SHIPPED",REQUEST_NEW_RECEIPT:"REQUEST_NEW_RECEIPT",ATTACH_NEW_RECEIPT:"ATTACH_NEW_RECEIPT",VIEW_RECEIPT:"VIEW_RECEIPT"};}),null);
__d("PaymentModulesClient",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={PAGES_COMMERCE:"PAGES_COMMERCE",MOCK:"MOCK"};}),null);
__d('FBPaymentsReceiptConfigurationTypes',['FBPaymentsCheckoutConfigurationTypes','FBPaymentsReceiptConstants','React'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('FBPaymentsCheckoutConfigurationTypes').PricePropTypes,i=c('FBPaymentsCheckoutConfigurationTypes').PriceListPropTypes,j=c('FBPaymentsReceiptConstants').ActionStyles,k=c('FBPaymentsReceiptConstants').Extensions,l=c('React').PropTypes,m={name:l.string.isRequired,imageUrl:l.string,description:l.string},n=l.shape({title:l.string.isRequired,style:l.oneOf([].concat(Object.values(j))),identifier:l.string.isRequired,actionData:l.object}),o=l.shape({title:l.string.isRequired,date:l.string}),p=l.shape({actions:l.arrayOf(n),type:l.oneOf([k.PROGRESS]).isRequired,statusText:l.string,steps:l.arrayOf(o).isRequired,currentStep:l.string.isRequired}),q=l.shape({type:l.oneOf([k.IMAGE_VIEW]).isRequired,actions:l.arrayOf(n),imageUrls:l.arrayOf(l.string).isRequired}),r=l.shape({name:l.string.isRequired,price:h.isRequired,variants:l.arrayOf(l.string).isRequired}),s=l.shape({type:l.oneOf([k.ORDER_SUMMARY]).isRequired,items:l.arrayOf(r).isRequired}),t=l.shape({type:l.oneOf([k.PRICE_DETAIL]).isRequired,priceList:i.isRequired}),u=l.oneOfType([q,s,t,p]),v={title:l.string,subtitle:l.string,receiptExtensionConfiguration:u},w={components:l.arrayOf(l.shape(v)).isRequired,preferredPosition:l.string,additionalInstruction:l.object},x=l.shape({otherParticipant:l.shape(m).isRequired,sections:l.arrayOf(l.shape(w)),additionalInstruction:l.object}),y={ActionPropTypes:n,ItemPropTypes:r,OtherParticipantPropTypes:m,ProductInfoSectionPropTypes:w,ReceiptComponentPropTypes:v,ReceiptConfigurationPropTypes:x,ReceiptExtensionConfigPropTypes:u,StepPropTypes:o};f.exports=y;}),null);
__d('FBPaymentsReceiptContainerBase.react',['FBPaymentsReceiptConfigurationTypes','React','abstractMethod'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('FBPaymentsReceiptConfigurationTypes').ReceiptConfigurationPropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;k.prototype.__getReceiptView=function(){return c('abstractMethod')('FBPaymentsReceiptContainerBase','__getReceiptView');};k.prototype.__getEntityView=function(){return c('abstractMethod')('FBPaymentsReceiptContainerBase','__getEntityView');};k.prototype.render=function(){var l=this.props.configuration,m=this.__getEntityView(),n=l.otherParticipant,o=c('React').createElement(m,{description:n.description,imageUrl:n.imageUrl,name:n.name}),p=this.__getReceiptView();return (c('React').createElement(p,{entityView:o,sections:l.sections}));};function k(){h.apply(this,arguments);}k.propTypes={configuration:j.isRequired};f.exports=k;}),null);
__d('FBPaymentsReceiptEntityViewBase.react',['FBPaymentsReceiptConfigurationTypes','React'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('FBPaymentsReceiptConfigurationTypes').OtherParticipantPropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(){h.apply(this,arguments);}k.propTypes=j;f.exports=k;}),null);
__d('FBPaymentsReceiptEntityView.react',['FBPaymentsItemSummaryView.react','FBPaymentsReceiptEntityViewBase.react','React','XUIGrayText.react'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=36;h=babelHelpers.inherits(k,c('FBPaymentsReceiptEntityViewBase.react'));i=h&&h.prototype;k.prototype.render=function(){return (c('React').createElement(c('FBPaymentsItemSummaryView.react'),{imageSrc:this.props.imageUrl,imageHeight:j},c('React').createElement(c('XUIGrayText.react'),{display:'block',shade:'dark',size:'medium',weight:'bold'},this.props.name),c('React').createElement(c('XUIGrayText.react'),{display:'block',shade:'light'},this.props.description)));};function k(){h.apply(this,arguments);}f.exports=k;}),null);
__d('FBPaymentsReceiptComponentViewBase.react',['FBPaymentsReceiptConfigurationTypes','React','abstractMethod'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('FBPaymentsReceiptConfigurationTypes').ReceiptComponentPropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;k.prototype.renderReceiptExtension=function(){var l=this.props.receiptExtensionConfiguration;if(!l)return null;var m=this.__getReceiptExtensionManager().getReceiptExtensionContainer(l.type);return (c('React').createElement(m,{extensionConfiguration:l}));};k.prototype.__getReceiptExtensionManager=function(){return c('abstractMethod')('FBPaymentsReceiptComponentViewBase','__getReceiptExtensionManager');};function k(){h.apply(this,arguments);}k.propTypes=j;f.exports=k;}),null);
__d('FBPaymentsReceiptExtensionInterface.react',['FBPaymentsReceiptConfigurationTypes','React'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('FBPaymentsReceiptConfigurationTypes').ReceiptExtensionConfigPropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(){h.apply(this,arguments);}k.propTypes={extensionConfiguration:j.isRequired};f.exports=k;}),null);
__d('FBPaymentsImageViewReceiptExtensionContainerBase.react',['invariant','FBPaymentsReceiptExtensionInterface.react','React','abstractMethod'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('FBPaymentsReceiptExtensionInterface.react'));j=i&&i.prototype;k.prototype.__getView=function(){return c('abstractMethod')('FBPaymentsImageViewReceiptExtensionContainerBase','__getView');};k.prototype.render=function(){var l=this.props.extensionConfiguration;!(l.type==='IMAGE_VIEW')?h(0):void 0;var m=this.__getView();return (c('React').createElement(m,l));};function k(){i.apply(this,arguments);}f.exports=k;}),null);
__d('FBPaymentsImageViewReceiptExtensionViewBase.react',['FBPaymentsReceiptConfigurationTypes','React'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('FBPaymentsReceiptConfigurationTypes').ActionPropTypes,k=c('React').PropTypes;h=babelHelpers.inherits(l,c('React').Component);i=h&&h.prototype;function l(){h.apply(this,arguments);}l.propTypes={actions:k.arrayOf(j),imageUrls:k.arrayOf(k.string).isRequired};f.exports=l;}),null);
__d('FBPaymentsReceiptActionHelperBase',['invariant','Map'],(function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();function i(){this.actionHandlerMap=new (c('Map'))();}i.prototype.registerActionClickHandler=function(j,k){this.actionHandlerMap.set(j,k);};i.prototype.handleActionClick=function(j){var k=j.identifier,l=this.actionHandlerMap.get(k);!l?h(0):void 0;l(j);};f.exports=i;}),null);
__d('FBPaymentsReceiptActionHelper',['FBPaymentsReceiptActionHelperBase','FBPaymentsReceiptConstants','React','XUIButton.react'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('FBPaymentsReceiptConstants').ActionStyles;h=babelHelpers.inherits(k,c('FBPaymentsReceiptActionHelperBase'));i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.renderAction=function(q){return (c('React').createElement(c('XUIButton.react'),{key:q.identifier,label:q.title,onClick:function(){return this.handleActionClick(q);}.bind(this),use:this.getButtonStyle(q.style)}));}.bind(this),m;}k.prototype.getButtonStyle=function(l){switch(l){case j.PRIMARY:return 'confirm';default:return 'default';}};f.exports=new k();}),null);
__d('FBPaymentsImageViewReceiptExtensionView.react',['cx','FBPaymentsImageViewReceiptExtensionViewBase.react','FBPaymentsReceiptActionHelper','Image.react','React'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('FBPaymentsImageViewReceiptExtensionViewBase.react'));j=i&&i.prototype;k.prototype.$FBPaymentsImageViewReceiptExtensionView1=function(l,m){return (c('React').createElement(c('Image.react'),{className:"_sn8 _1svn _2pio",key:m,onClick:function n(){return window.open(l,'_blank');},src:l}));};k.prototype.render=function(){var l=this.props,m=l.actions,n=l.imageUrls,o=m?m.map(c('FBPaymentsReceiptActionHelper').renderAction):null;return (c('React').createElement('div',null,n.map(this.$FBPaymentsImageViewReceiptExtensionView1),o));};function k(){i.apply(this,arguments);}f.exports=k;}),null);
__d('FBPaymentsImageViewReceiptExtensionContainer.react',['FBPaymentsImageViewReceiptExtensionContainerBase.react','FBPaymentsImageViewReceiptExtensionView.react'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('FBPaymentsImageViewReceiptExtensionContainerBase.react'));i=h&&h.prototype;j.prototype.__getView=function(){return c('FBPaymentsImageViewReceiptExtensionView.react');};function j(){h.apply(this,arguments);}f.exports=j;}),null);
__d('FBPaymentsOrderSummaryReceiptExtensionContainerBase.react',['invariant','FBPaymentsReceiptExtensionInterface.react','React','abstractMethod'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('FBPaymentsReceiptExtensionInterface.react'));j=i&&i.prototype;k.prototype.__getView=function(){return c('abstractMethod')('FBPaymentsOrderSummaryReceiptExtensionContainerBase','__getView');};k.prototype.render=function(){var l=this.props.extensionConfiguration;!(l.type==='ORDER_SUMMARY')?h(0):void 0;var m=this.__getView();return (c('React').createElement(m,l));};function k(){i.apply(this,arguments);}f.exports=k;}),null);
__d('FBPaymentsOrderSummaryReceiptExtensionViewBase.react',['FBPaymentsReceiptConfigurationTypes','React'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('FBPaymentsReceiptConfigurationTypes').ItemPropTypes,k=c('React').PropTypes;h=babelHelpers.inherits(l,c('React').Component);i=h&&h.prototype;function l(){h.apply(this,arguments);}l.propTypes={items:k.arrayOf(j).isRequired};f.exports=l;}),null);
__d('FBPaymentsOrderSummaryReceiptExtensionView.react',['cx','FBPaymentsOrderSummaryReceiptExtensionViewBase.react','Layout.react','PECurrency','PECurrency.react','React','XUIGrayText.react'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('PECurrency').DEFAULT_AMOUNT_OFFSET,l=c('Layout.react').Column,m=c('Layout.react').FillColumn;i=babelHelpers.inherits(n,c('FBPaymentsOrderSummaryReceiptExtensionViewBase.react'));j=i&&i.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=j.constructor).call.apply(o,[this].concat(r)),this.$FBPaymentsOrderSummaryReceiptExtensionView2=function(t,u){var v=t.name,w=t.price,x=t.variants;return (c('React').createElement(c('Layout.react'),{className:(u===0?"_2pic":'')+(u!==0?' '+"_2pie":''),key:v},c('React').createElement(m,null,c('React').createElement(c('XUIGrayText.react'),{className:"_2pim",display:'block',shade:'dark'},v),x.map(this.$FBPaymentsOrderSummaryReceiptExtensionView1)),c('React').createElement(l,null,c('React').createElement(c('XUIGrayText.react'),{display:'block',shade:'light'},c('React').createElement(c('PECurrency.react'),{code:w.currency,value:k*Number(w.amount)})))));}.bind(this),p;}n.prototype.$FBPaymentsOrderSummaryReceiptExtensionView1=function(o){return c('React').createElement(c('XUIGrayText.react'),{className:"_4cav",display:'block',key:o,shade:'light'},o);};n.prototype.render=function(){return (c('React').createElement('div',null,this.props.items.map(this.$FBPaymentsOrderSummaryReceiptExtensionView2)));};f.exports=n;}),null);
__d('FBPaymentsOrderSummaryReceiptExtensionContainer.react',['FBPaymentsOrderSummaryReceiptExtensionContainerBase.react','FBPaymentsOrderSummaryReceiptExtensionView.react'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('FBPaymentsOrderSummaryReceiptExtensionContainerBase.react'));i=h&&h.prototype;j.prototype.__getView=function(){return c('FBPaymentsOrderSummaryReceiptExtensionView.react');};function j(){h.apply(this,arguments);}f.exports=j;}),null);
__d('FBPaymentsPriceDetailReceiptExtensionContainerBase.react',['invariant','FBPaymentsReceiptExtensionInterface.react','React','abstractMethod'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('FBPaymentsReceiptExtensionInterface.react'));j=i&&i.prototype;k.prototype.__getPriceTableView=function(){return c('abstractMethod')('FBPaymentsPriceDetailReceiptExtensionContainerBase','__getPriceTableView');};k.prototype.render=function(){var l=this.props.extensionConfiguration;!(l.type==='PRICE_DETAIL')?h(0):void 0;var m=l.priceList,n=this.__getPriceTableView();return (c('React').createElement(n,{priceList:m}));};function k(){i.apply(this,arguments);}f.exports=k;}),null);
__d('FBPaymentsPriceDetailReceiptExtensionContainer.react',['FBPaymentsPriceDetailReceiptExtensionContainerBase.react','FBPaymentsPriceTableView.react'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('FBPaymentsPriceDetailReceiptExtensionContainerBase.react'));i=h&&h.prototype;j.prototype.__getPriceTableView=function(){return c('FBPaymentsPriceTableView.react');};function j(){h.apply(this,arguments);}f.exports=j;}),null);
__d('FBPaymentsProgressReceiptExtensionContainerBase.react',['invariant','FBPaymentsReceiptExtensionInterface.react','React','abstractMethod'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('FBPaymentsReceiptExtensionInterface.react'));j=i&&i.prototype;k.prototype.__getView=function(){return c('abstractMethod')('FBPaymentsProgressReceiptExtensionContainerBase','__getView');};k.prototype.render=function(){var l=this.props.extensionConfiguration;!(l.type==='PROGRESS')?h(0):void 0;var m=this.__getView();return (c('React').createElement(m,l));};function k(){i.apply(this,arguments);}f.exports=k;}),null);
__d('FBPaymentsProgressReceiptExtensionViewBase.react',['FBPaymentsReceiptConfigurationTypes','React'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('FBPaymentsReceiptConfigurationTypes').ActionPropTypes,k=c('FBPaymentsReceiptConfigurationTypes').StepPropTypes,l=c('React').PropTypes;h=babelHelpers.inherits(m,c('React').Component);i=h&&h.prototype;function m(){h.apply(this,arguments);}m.propTypes={actions:l.arrayOf(j),currentStep:l.string.isRequired,statusText:l.string,steps:l.arrayOf(k).isRequired};f.exports=m;}),null);
__d('FBPaymentsProgressReceiptExtensionView.react',['cx','FBPaymentsProgressReceiptExtensionViewBase.react','FBPaymentsReceiptActionHelper','React','XUIGrayText.react','XUIStepper.react'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('XUIStepper.react').Step;i=babelHelpers.inherits(l,c('FBPaymentsProgressReceiptExtensionViewBase.react'));j=i&&i.prototype;l.prototype.$FBPaymentsProgressReceiptExtensionView1=function(m){return (c('React').createElement(k,{key:m.title},m.title));};l.prototype.render=function(){var m=this.props,n=m.actions,o=m.currentStep,p=m.statusText,q=m.steps,r=q.findIndex(function(t){return t.title===o;}),s=n?n.map(c('FBPaymentsReceiptActionHelper').renderAction):null;return (c('React').createElement('div',null,c('React').createElement(c('XUIGrayText.react'),{display:'block',shade:'dark'},p),c('React').createElement(c('XUIStepper.react'),{animated:false,className:"_2pi4 _1236",currentStep:r,size:'small'},q.map(this.$FBPaymentsProgressReceiptExtensionView1)),c('React').createElement('div',{className:"_2pie"},s)));};function l(){i.apply(this,arguments);}f.exports=l;}),null);
__d('FBPaymentsProgressReceiptExtensionContainer.react',['FBPaymentsProgressReceiptExtensionContainerBase.react','FBPaymentsProgressReceiptExtensionView.react'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('FBPaymentsProgressReceiptExtensionContainerBase.react'));i=h&&h.prototype;j.prototype.__getView=function(){return c('FBPaymentsProgressReceiptExtensionView.react');};function j(){h.apply(this,arguments);}f.exports=j;}),null);
__d('FBPaymentsReceiptExtensionManagerBase',['invariant','FBPaymentsReceiptConstants','FBPaymentsReceiptExtensionInterface.react','Map','abstractMethod'],(function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('FBPaymentsReceiptConstants').Extensions;function j(){this.receiptExtensionMap=new (c('Map'))();}j.prototype.getReceiptExtensionContainer=function(k){!i[k]?h(0):void 0;var l=this.__getReceiptExtensionMap().get(k);!l?h(0):void 0;return l;};j.prototype.__getReceiptExtensionMap=function(){return c('abstractMethod')('FBPaymentsReceiptExtensionManagerBase','__getReceiptExtensionMap');};f.exports=j;}),null);
__d('FBPaymentsReceiptExtensionManager',['FBPaymentsImageViewReceiptExtensionContainer.react','FBPaymentsOrderSummaryReceiptExtensionContainer.react','FBPaymentsPriceDetailReceiptExtensionContainer.react','FBPaymentsProgressReceiptExtensionContainer.react','FBPaymentsReceiptConstants','FBPaymentsReceiptExtensionInterface.react','FBPaymentsReceiptExtensionManagerBase','Map'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('FBPaymentsReceiptConstants').Extensions;h=babelHelpers.inherits(k,c('FBPaymentsReceiptExtensionManagerBase'));i=h&&h.prototype;function k(){i.constructor.call(this);this.receiptExtensionMap.set(j.IMAGE_VIEW,c('FBPaymentsImageViewReceiptExtensionContainer.react'));this.receiptExtensionMap.set(j.ORDER_SUMMARY,c('FBPaymentsOrderSummaryReceiptExtensionContainer.react'));this.receiptExtensionMap.set(j.PRICE_DETAIL,c('FBPaymentsPriceDetailReceiptExtensionContainer.react'));this.receiptExtensionMap.set(j.PROGRESS,c('FBPaymentsProgressReceiptExtensionContainer.react'));}k.prototype.__getReceiptExtensionMap=function(){return this.receiptExtensionMap;};f.exports=new k();}),null);
__d('FBPaymentsReceiptComponentView.react',['cx','FBPaymentsReceiptComponentViewBase.react','FBPaymentsReceiptExtensionManager','React','XUIGrayText.react'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('FBPaymentsReceiptComponentViewBase.react'));j=i&&i.prototype;k.prototype.__getReceiptExtensionManager=function(){return c('FBPaymentsReceiptExtensionManager');};k.prototype.render=function(){return (c('React').createElement('div',{className:"_2pi4"},c('React').createElement(c('XUIGrayText.react'),{display:'block',shade:'light'},this.props.title),c('React').createElement(c('XUIGrayText.react'),{className:"_2pic",display:'block',shade:'dark'},this.props.subtitle),this.renderReceiptExtension()));};function k(){i.apply(this,arguments);}f.exports=k;}),null);
__d('FBPaymentsReceiptSectionViewBase.react',['FBPaymentsReceiptConfigurationTypes','React'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('FBPaymentsReceiptConfigurationTypes').ProductInfoSectionPropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(){h.apply(this,arguments);}k.propTypes=j;f.exports=k;}),null);
__d('FBPaymentsReceiptSectionView.react',['cx','FBPaymentsReceiptComponentView.react','FBPaymentsReceiptSectionViewBase.react','React'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('FBPaymentsReceiptSectionViewBase.react'));j=i&&i.prototype;k.prototype.render=function(){var l=this.props.components,m=[];for(var n=0;n<l.length;n++){var o=l[n];m.push(c('React').createElement(c('FBPaymentsReceiptComponentView.react'),{key:n,receiptExtensionConfiguration:o.receiptExtensionConfiguration,subtitle:o.subtitle,title:o.title}));}return (c('React').createElement('div',{className:"_2dma"},m));};function k(){i.apply(this,arguments);}f.exports=k;}),null);
__d('FBPaymentsReceiptViewBase.react',['React'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(){h.apply(this,arguments);}k.propTypes={entityView:j.element.isRequired,sections:j.arrayOf(j.object)};f.exports=k;}),null);
__d('FBPaymentsReceiptView.react',['cx','invariant','FBPaymentsReceiptSectionView.react','FBPaymentsReceiptViewBase.react','React','XUICard.react','XUICardSection.react'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k;if(c.__markCompiled)c.__markCompiled();var l='PRIMARY';j=babelHelpers.inherits(m,c('FBPaymentsReceiptViewBase.react'));k=j&&j.prototype;m.prototype.$FBPaymentsReceiptView1=function(n,o){return (c('React').createElement(c('FBPaymentsReceiptSectionView.react'),{additionalInstruction:n.additionalInstruction,components:n.components,key:o,preferredPosition:n.preferredPosition}));};m.prototype.$FBPaymentsReceiptView2=function(n,o){!(n.length!==0)?i(0):void 0;var p=c('React').createElement('div',{className:"_3r_s"},c('React').createElement('div',{className:"_2pi9"},n)),q=o.length===0?null:c('React').createElement('div',{className:"_3r_s _3r_u"},c('React').createElement('div',{className:"_2pi9"},o));return (c('React').createElement('div',{className:"_3r_v"},p,q));};m.prototype.$FBPaymentsReceiptView3=function(){var n=this.props.sections;if(!n||n.length===0)return null;var o=[],p=[];for(var q=0;q<n.length;q++){var r=n[q];if(r.preferredPosition&&r.preferredPosition===l){o.push(this.$FBPaymentsReceiptView1(r,q));}else p.push(this.$FBPaymentsReceiptView1(r,q));}if(o.length===0){o=p;p=[];}return (c('React').createElement(c('XUICardSection.react'),null,this.$FBPaymentsReceiptView2(o,p)));};m.prototype.render=function(){return (c('React').createElement(c('XUICard.react'),null,c('React').createElement(c('XUICardSection.react'),null,this.props.entityView),this.$FBPaymentsReceiptView3()));};function m(){j.apply(this,arguments);}f.exports=m;}),null);
__d('FBPaymentsReceiptContainer.react',['FBPaymentsReceiptContainerBase.react','FBPaymentsReceiptEntityView.react','FBPaymentsReceiptView.react','React'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('FBPaymentsReceiptContainerBase.react'));i=h&&h.prototype;j.prototype.__getReceiptView=function(){return c('FBPaymentsReceiptView.react');};j.prototype.__getEntityView=function(){return c('FBPaymentsReceiptEntityView.react');};j.prototype.render=function(){return i.render.call(this);};function j(){h.apply(this,arguments);}j.propTypes=babelHelpers['extends']({},c('FBPaymentsReceiptContainerBase.react').propTypes);f.exports=j;}),null);
__d('FBPaymentsReceiptDialogBase.react',['fbt','PaymentInvoiceActionIdentifier','PaymentModulesClient','React','abstractMethod'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(m){j.constructor.call(this,m);this.handleFetchReceiptConfigSuccess=function(n){this.setState({loading:false,receiptConfiguration:n});}.bind(this);this.handleFetchReceiptConfigError=function(n){this.setState({errorMessage:n.message,loading:false});}.bind(this);this.handleUpdateInvoiceClick=function(n){this.setState({errorMessage:null,loading:true});var o={action_identifier:n.identifier,product_id:this.props.receiptID,product_type:this.props.receiptClientType};this.__getAPI().updateInvoice(o,this.handleUpdateInvoiceSuccess,this.handleUpdateInvoiceError);}.bind(this);this.handleUpdateInvoiceSuccess=function(){this.fetchReceiptConfig();}.bind(this);this.handleUpdateInvoiceError=function(n){this.setState({errorMessage:n.message,loading:false});}.bind(this);this.state={errorMessage:null,loading:false,receiptConfiguration:null};}l.prototype.componentWillMount=function(){this.fetchReceiptConfig();var m=[c('PaymentInvoiceActionIdentifier').CANCEL,c('PaymentInvoiceActionIdentifier').MARK_AS_PAID,c('PaymentInvoiceActionIdentifier').MARK_AS_SHIPPED,c('PaymentInvoiceActionIdentifier').REQUEST_NEW_RECEIPT];m.forEach(function(n){this.__getReceiptActionHelper().registerActionClickHandler(n,this.handleUpdateInvoiceClick);}.bind(this));};l.prototype.fetchReceiptConfig=function(){this.setState({errorMessage:null,loading:true});var m={id:this.props.receiptID};this.__getAPI().fetchReceiptConfig(m,this.handleFetchReceiptConfigSuccess,this.handleFetchReceiptConfigError);};l.prototype.getDialogTitle=function(){return h._("Order Details");};l.prototype.__getAPI=function(){return c('abstractMethod')('FBPaymentsReceiptDialogBase','__getAPI');};l.prototype.__getReceiptActionHelper=function(){return c('abstractMethod')('FBPaymentsReceiptDialogBase','__getReceiptActionHelper');};l.propTypes={onDialogToggle:k.func.isRequired,receiptClientType:k.oneOf(Object.values(c('PaymentModulesClient'))).isRequired,receiptID:k.string.isRequired};f.exports=l;}),null);
__d('FBPaymentsReceiptDialog.react',['cx','FBPaymentsLoadingView.react','FBPaymentsModulesAPI','FBPaymentsReceiptActionHelper','FBPaymentsReceiptContainer.react','FBPaymentsReceiptDialogBase.react','React','ScrollableArea.react','XUIDialog.react','XUIDialogBody.react','XUIDialogTitle.react','XUINotice.react'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();var k=465,l=750;i=babelHelpers.inherits(m,c('FBPaymentsReceiptDialogBase.react'));j=i&&i.prototype;m.prototype.__getAPI=function(){return c('FBPaymentsModulesAPI');};m.prototype.__getReceiptActionHelper=function(){return c('FBPaymentsReceiptActionHelper');};m.prototype.render=function(){var n=this.state,o=n.errorMessage,p=n.receiptConfiguration,q=p?c('React').createElement(c('FBPaymentsReceiptContainer.react'),{configuration:p}):null,r=o?c('React').createElement('div',{className:"_2pio"},c('React').createElement(c('XUINotice.react'),{use:'warn'},o)):null;return (c('React').createElement('div',null,c('React').createElement(c('XUIDialog.react'),{onToggle:this.props.onDialogToggle,shown:true,width:l},c('React').createElement(c('XUIDialogTitle.react'),null,this.getDialogTitle()),c('React').createElement(c('XUIDialogBody.react'),{className:"_1jnq",fontSize:'inherit'},c('React').createElement(c('ScrollableArea.react'),{height:k},r,q),c('React').createElement(c('FBPaymentsLoadingView.react'),{overlay:true,visible:this.state.loading})))));};function m(){i.apply(this,arguments);}m.propTypes=babelHelpers['extends']({},c('FBPaymentsReceiptDialogBase.react').propTypes);f.exports=m;}),null);
__d('MercuryPaymentPlatformCTA.react',['ix','cx','Image.react','React','XUIText.react','fbglyph'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;m.prototype.render=function(){var n=this.props,o=n.disabled,p=n.label,q=n.showCheckmark,r=q?c('React').createElement(c('Image.react'),{className:"_3nt-",src:h("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/checkmark_16_fig-light-30.png")}):null,s=o?null:this.props.onCTAClick;return (c('React').createElement('div',null,r,c('React').createElement(c('XUIText.react'),{className:(o?"_3nt_":'')+(!o?' '+"_3nu0":'')+(!!s?' '+"_1svn":''),display:'inline',onClick:s,size:'medium'},p)));};function m(){j.apply(this,arguments);}m.propTypes={disabled:l.bool,label:l.string.isRequired,onCTAClick:l.func,showCheckmark:l.bool};f.exports=m;}),null);
__d('FBPaymentsDialogActions',['FBPaymentsDispatcher','keyMirror'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={types:c('keyMirror')({SHOW_DIALOG:null,HIDE_DIALOG:null}),showDialog:function i(j,k){c('FBPaymentsDispatcher').dispatch({type:h.types.SHOW_DIALOG,data:{dialogClass:j,dialogProps:k}});},hideDialog:function i(){c('FBPaymentsDispatcher').dispatch({type:h.types.HIDE_DIALOG,data:{}});}};f.exports=h;}),null);
__d('FBPaymentsDialogStore',['FBPaymentsDialogActions','FBPaymentsDispatcher','FluxStore'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('FluxStore'));i=h&&h.prototype;function j(){i.constructor.call(this,c('FBPaymentsDispatcher'));this.$FBPaymentsDialogStore1={dialogClass:null,dialogProps:null};}j.prototype.__onDispatch=function(k){var l=k.type,m=k.data;switch(l){case c('FBPaymentsDialogActions').types.SHOW_DIALOG:this.$FBPaymentsDialogStore1={dialogClass:m.dialogClass,dialogProps:m.dialogProps};this.__emitChange();break;case c('FBPaymentsDialogActions').types.HIDE_DIALOG:this.$FBPaymentsDialogStore1={dialogClass:null,dialogProps:null};this.__emitChange();break;}};j.prototype.getState=function(){return this.$FBPaymentsDialogStore1;};f.exports=new j();}),null);
__d('FBPaymentsDialogContainer.react',['FBPaymentsDialogStore','FBPaymentsDispatcher','FluxContainer','React'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.calculateState=function(){return c('FBPaymentsDialogStore').getState();};j.getStores=function(){return [c('FBPaymentsDialogStore')];};j.prototype.componentWillMount=function(){c('FBPaymentsDispatcher').explicitlyRegisterStore(c('FBPaymentsDialogStore'));};j.prototype.render=function(){if(!this.state.dialogClass)return null;var k=this.state.dialogClass;return c('React').createElement(k,babelHelpers['extends']({},this.state.dialogProps,{key:'dialog'}));};function j(){h.apply(this,arguments);}f.exports=c('FluxContainer').create(j);}),null);
__d('MercuryPaymentPlatformShareAttachment.react',['cx','invariant','CommerceContactMerchantCheckoutDialogV2.react','FBPaymentsDialogActions','FBPaymentsItemSummaryView.react','FBPaymentsLinkHelper','FBPaymentsReceiptComponentView.react','FBPaymentsReceiptDialog.react','Layout.react','MercuryFallbackShareAttachment.react','MercuryPaymentPlatformCTA.react','MercuryShareAttachmentReactShape','MercuryShareAttachmentRenderLocations','PECurrency','PECurrency.react','React','URI','XUIGrayText.react','idx'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('PECurrency').DEFAULT_AMOUNT_OFFSET,m=c('Layout.react').Column,n=c('Layout.react').FillColumn,o=c('React').PropTypes,p='DISABLED',q={CHECKOUT:'checkout',RECEIPT:'receipt'};j=babelHelpers.inherits(r,c('React').Component);k=j&&j.prototype;function r(){var s,t;for(var u=arguments.length,v=Array(u),w=0;w<u;w++)v[w]=arguments[w];return t=(s=k.constructor).call.apply(s,[this].concat(v)),this.$MercuryPaymentPlatformShareAttachment3=function(){this.$MercuryPaymentPlatformShareAttachment4(false);}.bind(this),this.$MercuryPaymentPlatformShareAttachment8=function(x){var y=x.state,z=x.label,aa=x.checkmark;return (c('React').createElement(c('MercuryPaymentPlatformCTA.react'),{disabled:y===p,key:z.text,label:z.text,onCTAClick:function(){return this.$MercuryPaymentPlatformShareAttachment2(x);}.bind(this),showCheckmark:aa}));}.bind(this),t;}r.prototype.$MercuryPaymentPlatformShareAttachment1=function(s){var t,u=((t=s)!=null?t.action_detail:t)||'{}',v=JSON.parse(u);return v.in_app_url;};r.prototype.$MercuryPaymentPlatformShareAttachment2=function(s){var t=this.$MercuryPaymentPlatformShareAttachment1(s);!t?i(0):void 0;var u=c('FBPaymentsLinkHelper').parseInAppUrl(t),v=u.flowType,w=u.productID,x=u.clientType;switch(v){case q.CHECKOUT:c('FBPaymentsDialogActions').showDialog(c('CommerceContactMerchantCheckoutDialogV2.react'),{invoiceID:w,onDialogClose:this.$MercuryPaymentPlatformShareAttachment3});break;case q.RECEIPT:c('FBPaymentsDialogActions').showDialog(c('FBPaymentsReceiptDialog.react'),{onDialogToggle:this.$MercuryPaymentPlatformShareAttachment4,receiptID:w,receiptClientType:x});break;}};r.prototype.$MercuryPaymentPlatformShareAttachment4=function(s){if(!s)c('FBPaymentsDialogActions').hideDialog();};r.prototype.$MercuryPaymentPlatformShareAttachment5=function(s,t){var u=s.image_urls,v=s.name,w=s.unit_price;return c('React').createElement('div',{className:"_qu2",key:t},c('React').createElement(c('FBPaymentsItemSummaryView.react'),{imagePosition:'right',imageSrc:u[0],imageHeight:50,summaryAlignv:'top'},c('React').createElement(c('XUIGrayText.react'),{display:'block',shade:'dark',weight:'bold'},v),c('React').createElement(c('XUIGrayText.react'),{display:'block',shade:'light'},c('React').createElement(c('PECurrency.react'),{code:w.currency,value:l*Number(w.amount)}))));};r.prototype.$MercuryPaymentPlatformShareAttachment6=function(s){var t=s.subtitle,u=s.title;return c('React').createElement('div',{className:"_qu2 _2pi9",key:u.text},c('React').createElement(c('FBPaymentsReceiptComponentView.react'),{subtitle:t.text,title:u.text}));};r.prototype.$MercuryPaymentPlatformShareAttachment7=function(s){return c('React').createElement(c('XUIGrayText.react'),{display:'block',shade:'dark',weight:'bold'},c('React').createElement(c('PECurrency.react'),{code:s.currency,value:l*Number(s.amount)}));};r.prototype.render=function(){var s,t,u=(s=this.props)!=null?(t=s.attachment)!=null?t.target:t:s;if(!u)return c('React').createElement(c('MercuryFallbackShareAttachment.react'),this.props);var v=u.components,w=u.item_list,x=u.payment_call_to_actions,y=u.payment_total,z=u.click_action,aa=z?function(){return this.$MercuryPaymentPlatformShareAttachment2(z);}.bind(this):null,ba=v?v.map(this.$MercuryPaymentPlatformShareAttachment6):null;return (c('React').createElement('div',{className:!!aa?"_1svn":'',onClick:aa,role:'button',tabIndex:'0'},w.map(this.$MercuryPaymentPlatformShareAttachment5),ba,c('React').createElement('div',{className:"_2ph_"},c('React').createElement(c('Layout.react'),null,c('React').createElement(m,null,this.$MercuryPaymentPlatformShareAttachment7(y)),c('React').createElement(n,{className:"_52jw"},x.map(this.$MercuryPaymentPlatformShareAttachment8))))));};r.propTypes={attachment:c('MercuryShareAttachmentReactShape'),location:o.oneOf(c('MercuryShareAttachmentRenderLocations').getValues()),maxWidth:o.number};f.exports=r;}),null);