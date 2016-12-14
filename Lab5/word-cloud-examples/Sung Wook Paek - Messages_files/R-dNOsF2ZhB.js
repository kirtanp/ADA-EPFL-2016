if (self.CavalryLogger) { CavalryLogger.start_js(["cSa8c"]); }

__d("PUWApplications",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={WEB_SIMPLE:"web_simple",WEB_FLASH:"web_flash",WEB_HTML5:"web_html5",WEB_COMPOSER:"web_composer",WEB_ARCHIVE:"web_archive",WEB_MESSENGER:"web_messenger",WEB_OMNIPICKER:"web_omnipicker",WEB_MUSE_OMNIPICKER:"web_muse_omnipicker",WEB_SAY_THANKS:"web_say_thanks",WEB_GOODWILL_CAMPAIGN_OMNIPICKER:"web_goodwill_campaign_omnipicker",WEB_PRODUCT_PHOTO_OMNIPICKER:"web_product_photo_omnipicker",WEB_PAGES_MESSENGER:"web_pages_messenger",WEB_M_ZERO:"web_m_zero",WEB_M_BASIC:"web_m_basic",WEB_M_TOUCH:"web_m_touch",WEB_REACT_COMPOSER:"web_react_composer",MOBILE_FB4IOS:"mobile_fb4ios",MOBILE_FB4IOS_SNAP:"mobile_fb4ios_snap",MOBILE_FB4A:"mobile_fb4a",MOBILE_PMA_ANDROID:"mobile_pma_android",MOBILE_PMA_IOS:"mobile_pma_ios",THIRD_PARTY:"third_party"};}),null);
__d('AdsPagerConstants',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('keyMirrorRecursive')({ADD_PAGE:'',PAGE_TRANSITION:'',REQUEST_PAGE:''}),i=c('keyMirrorRecursive')({VIEW_ACTION:'',SERVER_ACTION:''});f.exports={ActionTypes:h,PayloadSources:i};}),null);
__d('AdsPagerDispatcher',['AdsPagerConstants','Dispatcher_DEPRECATED'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('AdsPagerConstants').PayloadSources;function i(k){return function(l){this.dispatch({payloadSource:k,action:l});};}var j=Object.assign(new (c('Dispatcher_DEPRECATED'))(),{handleUpdateFromViewAction:i(h.VIEW_ACTION),handleUpdateFromServerAction:i(h.SERVER_ACTION)});f.exports=j;}),null);
__d('AdsRefreshHandler',['csx','AdsMouseStateStore','AdsPagerConstants','AdsPagerDispatcher','Animation','Arbiter','DataAttributeUtils','DOM','Event','SubscriptionsHandler','Toggler','UIPagelet','cxodecode','debounceAcrossTransitions','getOrCreateDOMID'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('AdsMouseStateStore').STATES,j=600,k=c('AdsMouseStateStore').get(),l=void 0;function m(n,o,p){'use strict';if(!p.data||!p.pid)return;if(o.nonce)l=c('cxodecode')(o.nonce);this.$AdsRefreshHandler1=n;this.$AdsRefreshHandler2=Date.now();this.$AdsRefreshHandler3=o;this.$AdsRefreshHandler4=p;this.$AdsRefreshHandler5=0;this.$AdsRefreshHandler6=false;this.$AdsRefreshHandler7=true;this.$AdsRefreshHandler8=null;this.$AdsRefreshHandler9=c('debounceAcrossTransitions')(this.reloadAdsIfNeeded.bind(this),this.$AdsRefreshHandler3.delay);this.$AdsRefreshHandler10=new (c('SubscriptionsHandler'))();this.$AdsRefreshHandler10.addSubscriptions(c('Event').listen(this.$AdsRefreshHandler1,'mouseenter',this.setMouseOver.bind(this,true)),c('Event').listen(this.$AdsRefreshHandler1,'mouseleave',this.setMouseOver.bind(this,false)),k.addListener('change',this.onMouseStateStoreChange.bind(this)),c('Arbiter').subscribe('AdsPreferencesDialog/opened',this.stopRefreshingRHC.bind(this)),c('Arbiter').subscribe('AdsPreferencesDialog/closed',this.startRefreshingRHC.bind(this)),c('Arbiter').subscribe('VideoChannelView/opened',this.stopRefreshingRHC.bind(this)),c('Arbiter').subscribe('VideoChannelView/closed',this.startRefreshingRHC.bind(this)));this.$AdsRefreshHandler11();c('AdsPagerDispatcher').register(this.handlePageDispatch.bind(this));}m.prototype.$AdsRefreshHandler11=function(){'use strict';if(this.$AdsRefreshHandler12)this.$AdsRefreshHandler12.release();this.$AdsRefreshHandler12=new (c('SubscriptionsHandler'))();var n=c('DOM').scry(this.$AdsRefreshHandler1,'.uiToggle');for(var o=0;o<n.length;o++)this.$AdsRefreshHandler12.addSubscriptions(c('Toggler').listen('show',n[o],this.stopRefreshingRHC.bind(this)),c('Toggler').listen('hide',n[o],this.startRefreshingRHC.bind(this)));};m.prototype.handlePageDispatch=function(n){'use strict';var o=n.action||{};if(o.actionType===c('AdsPagerConstants').ActionTypes.REQUEST_PAGE)this.reloadAds();};m.prototype.setMouseOver=function(n){'use strict';this.$AdsRefreshHandler13=n;if(n&&this.$AdsRefreshHandler8!=null){this.$AdsRefreshHandler8.cancel();this.$AdsRefreshHandler8=null;}};m.prototype.subscribeDefaultEventsForRefresh=function(){'use strict';this.$AdsRefreshHandler10.addSubscriptions(c('Event').listen(window,'scroll',this.$AdsRefreshHandler9),c('Event').listen(window,'resize',this.$AdsRefreshHandler9));return this;};m.prototype.reloadWithDebounce=function(){'use strict';this.$AdsRefreshHandler9();};m.prototype.reloadWithoutDebounce=function(){'use strict';this.reloadAdsIfNeeded();};m.prototype.stopRefreshingRHC=function(n,o){'use strict';this.$AdsRefreshHandler7=false;};m.prototype.startRefreshingRHC=function(n,o){'use strict';this.$AdsRefreshHandler2=Date.now();this.$AdsRefreshHandler7=true;};m.prototype.forceLoadIfEnoughTimePassed=function(n){'use strict';if(Date.now()-this.$AdsRefreshHandler2>n)this.reloadAds();};m.prototype.containsPremium=function(){'use strict';var n=c('DOM').scry(this.$AdsRefreshHandler1,l||"div._4u8");return !!n.filter(function(o){return JSON.parse(c('DataAttributeUtils').getDataAttribute(o,'data-ad')).segment==='premium';}).length;};m.prototype.reloadAdsIfNeeded=function(){'use strict';if(!this.$AdsRefreshHandler1)return;c('Arbiter').inform('AdsRefreshHandler/CheckingReload');if(this.$AdsRefreshHandler3.stateRefresh){this.reloadAdsIfNeededStateBased();return;}if(this.containsPremium()||this.$AdsRefreshHandler13||!this.$AdsRefreshHandler3.interval)return;if(Date.now()-this.$AdsRefreshHandler2>=this.$AdsRefreshHandler3.interval)this.reloadAds();};m.prototype.reloadAdsIfNeededStateBased=function(){'use strict';if(Date.now()-this.$AdsRefreshHandler2<this.$AdsRefreshHandler3.interval)return;if(this.containsPremium())return;if(!this.$AdsRefreshHandler3.interval)return;this.$AdsRefreshHandler6=true;c('Arbiter').inform('AdsRefreshHandler/RefreshScheduled');this.checkScheduledRefresh();};m.prototype.getRefreshScheduled=function(){'use strict';return this.$AdsRefreshHandler6;};m.prototype.onMouseStateStoreChange=function(){'use strict';this.checkScheduledRefresh();};m.prototype.checkScheduledRefresh=function(){'use strict';if(!this.$AdsRefreshHandler6)return;if(this.$AdsRefreshHandler13)return;var n=k.getState(),o=false;switch(n){case i.HOVER:case i.NO_INTENT:o=true;break;default:break;}if(!o)return;this.$AdsRefreshHandler6=false;this.reloadAds();};m.prototype.reloadAds=function(){'use strict';if(!this.$AdsRefreshHandler1)return;this.$AdsRefreshHandler2=Date.now();if(!this.$AdsRefreshHandler7)return;var n=this.$AdsRefreshHandler4&&this.$AdsRefreshHandler4.data,o=babelHelpers['extends']({},n,{refresh_num:++this.$AdsRefreshHandler5});this.$AdsRefreshHandler8=c('UIPagelet').loadFromEndpoint('WebEgoPane',this.$AdsRefreshHandler1,{dom_id:c('getOrCreateDOMID')(this.$AdsRefreshHandler1),pid:this.$AdsRefreshHandler4.pid,data:o},{bundle:false,handler:this.onLoadHandler.bind(this)});c('Arbiter').inform('AdsRefreshHandler/AdsLoading');};m.prototype.onLoadHandler=function(){'use strict';c('Arbiter').inform('AdsRefreshHandler/AdsLoaded');this.$AdsRefreshHandler8=null;this.$AdsRefreshHandler11();if(!this.$AdsRefreshHandler3.fade)return;new (c('Animation'))(this.$AdsRefreshHandler1).from('opacity',0).to('opacity',1).duration(j).go();};m.prototype.cleanup=function(){'use strict';this.$AdsRefreshHandler1=null;this.$AdsRefreshHandler10.release();this.$AdsRefreshHandler9.reset();};f.exports=m;}),null);
__d('DOMClone',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={shallowClone:function j(k){return i(k,false);},deepClone:function j(k){return i(k,true);}};function i(j,k){var l=j.cloneNode(k);if(typeof l.__FB_TOKEN!=='undefined')delete l.__FB_TOKEN;return l;}f.exports=h;}),null);
__d('FileInput',['cx','ArbiterMixin','DOM','DOMClone','Event','Focus','Keys','UserAgent_DEPRECATED','mixin'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('UserAgent_DEPRECATED').ie();i=babelHelpers.inherits(l,c('mixin')(c('ArbiterMixin')));j=i&&i.prototype;function l(m,n,o){'use strict';j.constructor.call(this);this.container=m;this.control=n;var p=c('DOM').scry(this.container,'a')[0];p&&p.removeAttribute('href');var q=c('DOM').create('div',{className:"_3jk"},o);c('DOM').appendContent(this.control,q);this._boundHandleChange=this._handleChange.bind(this);if(k)this._boundHandleIEKeyDown=this._handleIEKeyDown.bind(this);this._setInputElement(o);}l.prototype.getValue=function(){'use strict';return this.input.value;};l.prototype.getInput=function(){'use strict';return this.input;};l.prototype.getContainer=function(){'use strict';return this.container;};l.prototype.getControl=function(){'use strict';return this.control;};l.prototype.clear=function(){'use strict';this.input.value='';if(this.input.value!==''){var m=c('DOMClone').deepClone(this.input);c('DOM').replace(this.input,m);this._setInputElement(m);}};l.prototype.destroy=function(){'use strict';this._focus.remove();this._focus=null;this._listener.remove();this._listener=null;if(k){this._IEKeyDownListener.remove();this._IEKeyDownListener=null;}this.container=null;this.control=null;this.input=null;};l.prototype._setInputElement=function(m){'use strict';this.input=m;this._focus&&this._focus.remove();this._focus=c('Focus').relocate(m,this.control);this._listener&&this._listener.remove();this._listener=c('Event').listen(m,'change',this._boundHandleChange);if(k){this._IEKeyDownListener&&this._IEKeyDownListener.remove();this._IEKeyDownListener=c('Event').listen(m,'keydown',this._boundHandleIEKeyDown);}};l.prototype._handleChange=function(event){'use strict';this.inform('change',event);if(this.input){var m=this.input.form;if(m&&k<9)c('Event').fire(m,'change',event);}};l.prototype._handleIEKeyDown=function(event){'use strict';if(event.keyCode===c('Keys').RETURN){event.preventDefault();var m=document.createEvent('MouseEvents');m.initEvent('click',true,true);this.input.dispatchEvent(m);}};f.exports=l;}),null);
__d('PhotosUploadWaterfallMixin',['PhotosUploadWaterfall','emptyFunction'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('emptyFunction'),i={getUploaderApp:h,getWaterfallID:h,getAdditionalData:function j(){return {};},logWaterfallStep:function j(k,l,m){c('PhotosUploadWaterfall').sendSignal(babelHelpers['extends']({qn:this.getWaterfallID(),uploader:this.getUploaderApp(),step:k,ref:this.getWaterfallSource&&this.getWaterfallSource()},this.getAdditionalData(),l),m);},logWaterfallStepUsingBanzai:function j(k,l,m){c('PhotosUploadWaterfall').sendBanzai(babelHelpers['extends']({qn:this.getWaterfallID(),uploader:this.getUploaderApp(),step:k,ref:this.getWaterfallSource&&this.getWaterfallSource()},this.getAdditionalData(),l),m);}};f.exports=i;}),null);
__d('PhotoSourceTypes',['keyMirror'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports=c('keyMirror')({COMPUTER:null,POSTED_PHOTOS:null,SYNCED_PHOTOS:null,SUGGESTIONS:null,PAGES_POSTED_PHOTOS:null});}),null);
__d('BaseSelectionContainer',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=0;function i(){'use strict';this.$BaseSelectionContainer1=(h++).toString();}i.prototype.getSelectionContainerID=function(){'use strict';return this.$BaseSelectionContainer1;};i.prototype.getSource=function(){'use strict';throw new Error('This must be implemented by the child class');};i.prototype.getName=function(){'use strict';return null;};i.prototype.getSize=function(){'use strict';return null;};i.prototype.hasPlaceholderUI=function(){'use strict';throw new Error('This must be implemented by the child class');};f.exports=i;}),null);
__d('SelectionSource',['PhotoSourceTypes'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={FILE:'file',FLASH:'flash',VAULT:'vault',SUGGESTIONS:'suggestions',POSTED_PHOTOS:'posted_photos',PAGES_POSTED_PHOTOS:'pages_posted_photos',toPhotoSourceType:function i(j){switch(j){case h.FILE:case h.FLASH:return c('PhotoSourceTypes').COMPUTER;case h.VAULT:return c('PhotoSourceTypes').SYNCED_PHOTOS;case h.SUGGESTIONS:return c('PhotoSourceTypes').SUGGESTIONS;case h.POSTED_PHOTOS:return c('PhotoSourceTypes').POSTED_PHOTOS;case h.PAGES_POSTED_PHOTOS:return c('PhotoSourceTypes').PAGES_POSTED_PHOTOS;default:throw new Error('No mapping for SelectionSource: '+j);}}};f.exports=h;}),null);
__d('FileSelectionContainer',['BaseSelectionContainer','SelectionSource'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('BaseSelectionContainer'));i=h&&h.prototype;function j(k){'use strict';i.constructor.call(this);this.$FileSelectionContainer1=k;}j.prototype.getFile=function(){'use strict';return this.$FileSelectionContainer1;};j.prototype.getSource=function(){'use strict';return c('SelectionSource').FILE;};j.prototype.getName=function(){'use strict';return this.$FileSelectionContainer1.fileName||this.$FileSelectionContainer1.name;};j.prototype.getSize=function(){'use strict';return this.$FileSelectionContainer1.fileSize||this.$FileSelectionContainer1.size;};j.prototype.hasPlaceholderUI=function(){'use strict';return false;};f.exports=j;}),null);
__d('PhotosUploadWaterfallXMixin',['invariant','AsyncSignal','Banzai','Map','PhotosUploadWaterfallXConfig','Set','randomInt'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=new (c('Map'))();function j(l,m){var n={};l.client_time=Math.round(Date.now()/1000);if(c('PhotosUploadWaterfallXConfig').retryBanzai){n.retry=true;l.nonce=c('randomInt')(4294967296);}c('Banzai').post(c('PhotosUploadWaterfallXConfig').banzaiRoute,l,n);if(m)setTimeout(m,0);}function k(l,m){if(c('PhotosUploadWaterfallXConfig').useBanzai){j(l,m);}else{var n=new (c('AsyncSignal'))(c('PhotosUploadWaterfallXConfig').loggingEndpoint,{data:JSON.stringify(l)}).setHandler(m);if(c('PhotosUploadWaterfallXConfig').timeout)n.setTimeout(10*1000);n.send();}}f.exports={logStep:function l(m,n,o){var p=this.getWaterfallID&&this.getWaterfallID(),q=this.getWaterfallAppName&&this.getWaterfallAppName();if(!p||!q)return;k(babelHelpers['extends']({step:m,qn:p,uploader:q,ref:this.getWaterfallSource&&this.getWaterfallSource()},n),o);},logPUWStep:function l(m,n,o,p,q,r,s){if(r&&r.logOncePerSession){if(!i.has(n))i.set(n,new (c('Set'))());if(i.get(n).has(m))return;i.get(n).add(m);}k(Object.assign({step:m,qn:n,uploader:o,ref:p},q),s);}};}),null);
__d('HTML5FilePicker',['cx','ArbiterMixin','BrowserSupport','CSS','DOM','FilePickerEvent','FileSelectionContainer','Parent','PhotosUploadID','PhotosUploadWaterfall','PhotosUploadWaterfallMixin','PhotosUploadWaterfallXMixin','PUWApplications','PUWSteps','URI','getOrCreateDOMID'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j,k){this._config=babelHelpers['extends']({accept:undefined,multiple:undefined},k);this._button=j;this._beginInformed=false;if(!c('BrowserSupport').hasFileAPI()){this.logStep(c('PUWSteps').CLIENT_PROCESS_UNAVAILABLE,{error:'no_file_api'});if(this._config.hasOwnProperty('fallbackFunction')){this._config.fallbackFunction.call(this);return;}return;}this._subscriptions=[];var l=this._config.input||c('DOM').create('input',{type:'file',className:"_n"});if(this._config.hasOwnProperty('accept'))l.accept=this._config.accept;if(this._config.hasOwnProperty('multiple'))l.multiple=this._config.multiple;if(this._config.hasOwnProperty('title'))l.title=this._config.title;var m=c('DOM').create('label',{className:'accessible_elem','for':c('getOrCreateDOMID')(l)},l.title),n=c('DOM').create('div',{className:"_3jk"},[m,l]);c('CSS').addClass(this._button,"_m");c('DOM').appendContent(this._button,n);this._button.setAttribute('rel','ignore');this._bindInput(l);var o=c('Parent').byClass(this._button,'addPhotosDisabled');if(o){c('CSS').removeClass(o,'addPhotosDisabled');c('CSS').addClass(o,'addPhotosEnabled');}}Object.assign(i.prototype,c('ArbiterMixin'),c('PhotosUploadWaterfallMixin'),c('PhotosUploadWaterfallXMixin'),{getUploaderApp:function j(){return c('PhotosUploadWaterfall').APP_HTML5;},getWaterfallID:function j(){return this._config.qn;},getWaterfallAppName:function j(){return c('PUWApplications').WEB_HTML5;},getWaterfallSource:function j(){return this._config.ref;},getSwfID:function j(){return null;},_constructFileList:function j(){var k=Array.from(this._input.files);k.forEach(function(l){l.uploadID=c('PhotosUploadID').getNewID();});return k;},_constructFileSelectionContainerList:function j(){var k=Array.from(this._input.files);return k.map(function(l){return new (c('FileSelectionContainer'))(l);});},cleanup:function j(){if(this._input){this._input.onclick=null;this._input.onchange=null;}},_bindInput:function j(k){this.cleanup();k.onclick=function(){this.logWaterfallStep(c('PhotosUploadWaterfall').SELECT_START);if(!this._beginInformed){this._beginInformed=true;this.inform(c('FilePickerEvent').BEGIN||'FilePickerEvent/BEGIN');}this.inform(c('FilePickerEvent').SELECT_START);}.bind(this);k.onchange=function(){this.inform(c('FilePickerEvent').SELECTED,{sender:this,files:this._constructFileList(),selections:this._constructFileSelectionContainerList()});this._bindInput(this._input.cloneNode(false));}.bind(this);if(this._input)c('DOM').replace(this._input,k);this._input=k;}});f.exports=i;}),null);