if (self.CavalryLogger) { CavalryLogger.start_js(["1GWvu"]); }

__d("PUWSteps",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={CLIENT_FLOW_BEGIN:"client_flow_begin",CLIENT_SELECT_BEGIN:"client_select_begin",CLIENT_SELECT_SUCCESS:"client_select_success",CLIENT_SELECT_CANCEL:"client_select_cancel",CLIENT_SELECT_FAIL:"client_select_fail",CLIENT_FLOW_POST:"client_flow_post",CLIENT_TRANSFER_BATCH_BEGIN:"client_transfer_batch_begin",CLIENT_UPLOAD_BEGIN:"client_upload_begin",CLIENT_ATTACH_PHOTO:"client_attach_photo",CLIENT_PROCESS_BEGIN:"client_process_begin",CLIENT_PROCESS_SUCCESS:"client_process_success",CLIENT_PROCESS_CANCEL:"client_process_cancel",CLIENT_PROCESS_SKIP:"client_process_skip",CLIENT_PROCESS_FAIL:"client_process_fail",CLIENT_PROCESS_UNAVAILABLE:"client_process_unavailable",CLIENT_SPHERICAL_CHECK_SUCCESS:"client_spherical_check_success",CLIENT_SPHERICAL_CHECK_FAIL:"client_spherical_check_fail",CLIENT_SPHERICAL_CHECK_SUCCESS_EXP:"client_spherical_check_success_exp",CLIENT_SPHERICAL_CHECK_FAIL_EXP:"client_spherical_check_fail_exp",CLIENT_TRANSFER_ENQUEUE:"client_transfer_enqueue",CLIENT_TRANSFER_BEGIN:"client_transfer_begin",CLIENT_TRANSFER_SUCCESS:"client_transfer_success",CLIENT_TRANSFER_CANCEL:"client_transfer_cancel",CLIENT_TRANSFER_FAIL:"client_transfer_fail",CLIENT_TRANSFER_MANUAL_RETRY:"client_transfer_manual_retry",CLIENT_UPLOAD_SUCCESS:"client_upload_success",CLIENT_UPLOAD_FAIL:"client_upload_fail",CLIENT_UPLOAD_CANCEL:"client_upload_cancel",CLIENT_UPLOAD_REMOVE:"client_upload_remove",CLIENT_FACEREC_BEGIN:"client_facerec_begin",CLIENT_FACEREC_SUCCESS:"client_facerec_success",CLIENT_FACEREC_FAIL:"client_facerec_fail",CLIENT_PHOTO_PREVIEW_OPEN:"client_photo_preview_open",CLIENT_PHOTO_PREVIEW_CLOSE:"client_photo_preview_close",CLIENT_TRANSFER_BATCH_SUCCESS:"client_transfer_batch_success",CLIENT_TRANSFER_BATCH_CANCEL:"client_transfer_batch_cancel",CLIENT_TRANSFER_BATCH_FAIL:"client_transfer_batch_fail",CLIENT_PUBLISH_ENQUEUE:"client_publish_enqueue",CLIENT_PUBLISH_BEGIN:"client_publish_begin",CLIENT_PUBLISH_SUCCESS:"client_publish_success",CLIENT_PUBLISH_FAIL:"client_publish_fail",CLIENT_ATTEMPT_FAIL:"client_attempt_fail",CLIENT_FLOW_SUCCESS:"client_flow_success",CLIENT_FLOW_FATAL:"client_flow_fatal",CLIENT_FLOW_GIVEUP:"client_flow_giveup",CLIENT_FLOW_CANCEL:"client_flow_cancel",CLIENT_FLOW_FAIL:"client_flow_fail",CLIENT_FLOW_INCOMPLETE:"client_flow_incomplete",CLIENT_ATTEMPT_INCOMPLETE:"client_attempt_incomplete",CLIENT_FLOW_RETRY:"client_flow_retry",CLIENT_ATTEMPT_RETRY:"client_attempt_retry",CLIENT_DIAGNOSTIC:"client_diagnostic",CLIENT_QUALITY_SWITCH:"client_quality_switch",CLIENT_CANCEL_SURVEY:"client_cancel_survey",CLIENT_PHOTO_EDIT_BEGIN:"client_photo_edit_begin",CLIENT_PHOTO_EDIT_SUCCESS:"client_photo_edit_success",SERVER_UPLOAD_BEGIN:"server_upload_begin",SERVER_UPLOAD_SUCCESS:"server_upload_success",SERVER_UPLOAD_FAIL:"server_upload_fail",SERVER_PUBLISH_BEGIN:"server_publish_begin",SERVER_PUBLISH_SUCCESS:"server_publish_success",SERVER_PUBLISH_FAIL:"server_publish_fail",SERVER_RECEIVER_BEGIN:"server_receiver_begin",SERVER_RECEIVER_PUBLISH_BEGIN:"server_receiver_publish_begin",SERVER_SENTRY_RESTRICTION:"server_sentry_restriction"};}),null);
__d('FeedImageErrorEventLogger',['csx','Arbiter','BanzaiLogger','Bootloader','DataStore','DOMQuery','Event','Parent','Run','ge','getCrossOriginTransport'],(function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=2,j=false,k=false,l=false,m=0,n=0,o=0,p=0;function q(v){c('BanzaiLogger').log('WebFeedImageErrorEventLoggerConfig',v);}function r(v){return (v&&v.nodeName==='IMG'&&c('Parent').bySelector(v,"._5jmm"));}function s(v){var w;if(r(v.target)){var w=function(){var x,y=v.target,z=y.src;if(l&&!c('DataStore').get(y,'retry')){(function(){o++;c('DataStore').set(y,'retry',true);var aa=c('Event').listen(y,'load',function(){aa.remove();p++;});y.src=z;})();}else{n++;if(m>=i)return {v:void 0};m++;if(k){c('Bootloader').loadModules(["XHRRequest"],function(aa){if(aa)new aa(z).setTransportBuilder(c('getCrossOriginTransport')).setMethod('GET').setResponseHandler(function(){q({error_type:'SUCCESS',src:z});}).setErrorHandler(function(ba){if(ba){var ca=ba.errorMsg;if(ca.indexOf('id="facebook"')>0)ca='FB ERROR PAGE';q({error_code:ba.errorCode,error_type:ba.errorType,error_message:ca,src:z});}}).setTimeoutHandler(function(ba){q({src:ba,error_type:'TIMEOUT'});}).send();},'FeedImageErrorEventLogger');}else q({src:z});}}();if(typeof w==="object")return w.v;}}function t(){if(n>0||o>0){var v=0,w=c('ge')('mainContainer');if(w)v=c('DOMQuery').scry(w,"._5jmm img").length;q({event_name:'IMAGE_LOAD_ERROR_COUNT',error_count:n,retry_attempt_count:o,retry_success_count:p,total_image_count:v});n=0;o=0;p=0;}}var u={init:function v(w){if(j)return;k=w&&w.getDetail;l=w&&w.allowRetries;j=true;window.addEventListener('error',s,true);c('Run').onUnload(function(){return t();});c('Arbiter').subscribe(['pre_page_transition'],function(x,y){return t();});}};f.exports=u;}),null);
__d('ErrorSignal',['AsyncRequest','AsyncSignal','BanzaiODS','ErrorSignalConfig','SessionName','ScriptPath','SiteData','emptyFunction'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=true;function i(m,n){if(m&&m==='beacon_error'){c('BanzaiODS').bumpEntityKey('js_error_reporting','beacon_error_signal.sent');new (c('AsyncSignal'))(c('ErrorSignalConfig').uri,{c:m,m:n}).send();return;}else if(m&&m==='async_error'){var o=JSON.parse(n),p=o.err_code,q=o.path;if(p in {'1004':1,'12029':1,'12031':1,'12152':1}&&q.indexOf('scribe_endpoint.php')==-1){new (c('AsyncRequest'))().setURI(c('ErrorSignalConfig').uri).setData({c:'async_error',m:n}).setMethod('GET').setReadOnly(true).setOption('suppressEvaluation',true).setOption('suppressErrorAlerts',true).setHandler(c('emptyFunction')).setErrorHandler(c('emptyFunction')).send(true);return;}}if(m==='javascript_error')c('BanzaiODS').bumpEntityKey('js_error_reporting','error_signal.sent');new (c('AsyncSignal'))(c('ErrorSignalConfig').uri,{c:m,m:n}).send();}function j(m,n){n=n||{};n.svn_rev=c('SiteData').revision;n.push_phase=c('SiteData').push_phase;n.script_path=c('ScriptPath').getScriptPath();n.extra=n.extra||{};n.extra.hrm=c('SiteData').be_mode;var o=n.extra.type||'error';if(h&&m==='onerror'&&o==='error'){n.extra.extra.push('first_error');h=false;}var p=(c('SessionName').getName()||'-')+'/-';i('javascript_error',JSON.stringify({c:m,a:p,m:n}));}function k(){var m='beacon_error',n=(c('SessionName').getName()||'-')+'/-',o={};o.error=m;o.svn_rev=c('SiteData').revision;o.push_phase=c('SiteData').push_phase;o.script_path=c('ScriptPath').getScriptPath();o.extra={message:m,type:'info'};i(m,JSON.stringify({c:m,a:n,m:o}));}var l={sendBeaconErrorSignal:k,sendErrorSignal:i,logJSError:j};f.exports=l;b.ErrorSignal=l;}),null);
__d('FeedLoadEventWWWLogger',['Arbiter','BanzaiLogger','ErrorSignal','ErrorUtils','LitestandMessages','PageletEventConstsJS','URI'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=['substream_','more_pager_pagelet_','pagelet_composer','pagelet_navigation','pagelet_rhc_footer'],i=[c('PageletEventConstsJS').ARRIVE_END,c('PageletEventConstsJS').DISPLAY_END,c('PageletEventConstsJS').ONLOAD_END],j=['pre_page_transition','page_transition'],k=[c('LitestandMessages').NEWSFEED_LOAD,c('LitestandMessages').STORIES_REQUESTED,c('LitestandMessages').STORIES_INSERTED,c('LitestandMessages').NEWER_STORIES_REQUESTED,c('LitestandMessages').NEWER_STORIES_INSERTED,c('LitestandMessages').STREAM_LOAD_ERROR,c('LitestandMessages').STREAM_LOAD_RETRY,c('LitestandMessages').DUPLICATE_CURSOR_ERROR],l=false;function m(q){return q&&(q.getPath()==='/'||q.getPath()==='/home.php');}function n(q){c('BanzaiLogger').log('WebFeedLoadLoggerConfig',q);}function o(q){if(!q)return null;if(q.indexOf('more_pager_pagelet_')===0)return 'more_pager_pagelet_n';if(q.indexOf('substream_')===0&&q!=='substream_0'&&q!=='substream_1')return 'substream_n';return q;}var p={init:function q(){if(l)return;c('Arbiter').subscribe('BigPipe/init',function(r,s){if(!s||!s.arbiter)return;s.arbiter.subscribe('pagelet_event',function(t,u){if(u&&i.indexOf(u.event)>=0&&h.some(function(v){return u.id.indexOf(v)===0;})&&m(c('URI').getNextURI()))n({event:'pagelet',pagelet_id:o(u.id),pagelet_event_type:u.event,pagelet_phase:u.phase.toString()});});});c('Arbiter').subscribe(j,function(r,s){if(s){var t=s.to||s.uri;if(m(t))n({event:'page_transition',transition_event_type:r});}});c('Arbiter').subscribe(k,function(r,s){var t=null,u=null;if(r===c('LitestandMessages').STREAM_LOAD_ERROR){t=s;}else if(r===c('LitestandMessages').DUPLICATE_CURSOR_ERROR)u=s;n({event:'stream_load',stream_event_type:r,stream_cursor:u,stream_substream_id:o(s&&s.substream_id),error_name:t&&t.name,error_message:t&&t.message,error_stack:t&&t.stack});});c('ErrorUtils').addListener(function(r){if(r&&m(c('URI').getNextURI())){c('ErrorSignal').logJSError('feedloaderror',{error:r.name||r.message,extra:r});n({event:'js_error',error_name:r.name,error_message:r.message,error_stack:r.stack});}});l=true;}};f.exports=p;}),null);
__d("XPhotosWaterfallBatchLoggingController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/photos\/logging\/waterfall\/batch\/",{});}),null);
__d('PhotosUploadWaterfall',['AsyncRequest','AsyncSignal','Banzai','PhotosUploadWaterfallXConfig','XPhotosWaterfallBatchLoggingController','emptyFunction','randomInt','throttle'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=[],i={APP_SIMPLE:'simple',APP_ARCHIVE:'archive',APP_COMPOSER:'composer',APP_MESSENGER:'messenger',APP_HTML5:'html5',APP_CHAT:'chat',INSTALL_CANCEL:1,INSTALL_INSTALL:2,INSTALL_UPDATE:3,INSTALL_REINSTALL:4,INSTALL_PERMA_CANCEL:5,INSTALL_SILENT_SKIP:6,INSTALL_DOWNLOAD:7,CERROR_RESIZING_FAILED:6,CERROR_MARKER_EXTRACTION_FAILED:9,BEGIN:1,UPLOAD_START:4,ALL_UPLOADS_DONE:6,CLIENT_ERROR:7,RECOVERABLE_CLIENT_ERROR:12,IMAGES_SELECTED:9,UPGRADE_REQUIRED:11,VERSION:15,SELECT_START:18,SELECT_CANCELED:19,CANCEL:22,CANCEL_DURING_UPLOAD:83,ONE_RESIZING_START:2,ONE_UPLOAD_START:10,ONE_UPLOAD_DONE:29,ONE_RESIZING_DONE:34,PROGRESS_BAR_STOPPED:44,MISSED_BEAT:45,HEART_ATTACK:46,PUBLISH_SENT:99,PUBLISH_START:100,PUBLISH_SUCCESS:101,PUBLISH_FAILURE:102,CLUSTERING_START:103,CLUSTERING_SUCCESS:104,CLUSTERING_FAILURE:105,POST_BUTTON_CLICKED:110,POST_BUTTON_ERROR:111,PHOTO_DELETED:114,PUBLISH_CLIENT_SUCCESS:115,PHOTO_ROTATED:117,SAVE_DRAFT_BUTTON_CLICKED:123,RECOVERY_START_ON_CLIENT:124,CHANGE_PHOTO_QUALITY_SETTING:126,TAG_ADDED:127,TAG_REMOVED:128,TAB_BUTTON_CLICKED:129,DONE_SPHERICAL_CHECK:131,DONE_SPHERICAL_CHECK_EXPERIMENTAL:132,FAIL_SPHERICAL_CHECK:133,FAIL_SPHERICAL_CHECK_EXPERIMENTAL:134,EDITABLE_PHOTO_FETCH_START:106,EDITABLE_PHOTO_FETCH_SUCCESS:107,EDITABLE_PHOTO_FETCH_FAILURE:108,EDITABLE_PHOTO_FETCH_DELAY:116,CANCEL_INDIVIDUAL_UPLOAD:109,MISSING_OVERLAY_NODE:118,PUBLISH_RETRY_FAILURE:119,MISSING_UPLOAD_STATE:120,SESSION_POSTED:72,POST_PUBLISHED:80,ONE_UPLOAD_CANCELED:81,ONE_UPLOAD_CANCELED_DURING_UPLOAD:82,RESIZER_AVAILABLE:20,OVERLAY_FIRST:61,ASYNC_AVAILABLE:63,FALLBACK_TO_HTML5:130,RETRY_UPLOAD:17,TAGGED_ALL_FACES:14,VAULT_IMAGES_SELECTED:62,VAULT_CREATE_POST_CANCEL:65,VAULT_SEND_IN_MESSAGE_CLICKED:66,VAULT_DELETE_CANCEL:68,VAULT_ADD_TO_ALBUM_CANCEL:74,VAULT_SHARE_IN_AN_ALBUM_CLICKED:76,VAULT_SHARE_OWN_TIMELINE_CLICKED:77,VAULT_SHARE_FRIENDS_TIMELINE_CLICKED:78,VAULT_SHARE_IN_A_GROUP_CLICKED:79,VAULT_SYNCED_PAGED_LINK_CLICKED:84,VAULTBOX:'vaultbox',GRID:'grid',SPOTLIGHT_VAULT_VIEWER:'spotlight_vault_viewer',REF_VAULT_NOTIFICATION:'vault_notification',_checkRequiredFields:function k(l){},sendBanzai:function k(l,m){this._checkRequiredFields(l);var n={};l.scuba_ints=l.scuba_ints||{};l.scuba_ints.client_time=Math.round(Date.now()/1000);if(c('PhotosUploadWaterfallXConfig').retryBanzai){n.retry=true;l.scuba_ints.nonce=c('randomInt')(4294967296);}c('Banzai').post(c('PhotosUploadWaterfallXConfig').deprecatedBanzaiRoute,l,n);if(m)setTimeout(m,0);},sendSignal:function k(l,m){this._checkRequiredFields(l);if(c('PhotosUploadWaterfallXConfig').useBanzai){this.sendBanzai(l,m);}else{var n=new (c('AsyncSignal'))('/ajax/photos/waterfall.php',{data:JSON.stringify(l)}).setHandler(m);if(c('PhotosUploadWaterfallXConfig').timeout)n.setTimeout(10*1000);n.send();}},queueLog:function k(l,m){h.push(l);if(!!m){this.flushQueue(m);}else j();},flushQueue:function k(l){var m=JSON.stringify(h);h=[];var n=c('XPhotosWaterfallBatchLoggingController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(n).setData({logs:m}).setFinallyHandler(l||c('emptyFunction')).setTimeoutHandler(10*1000,l||c('emptyFunction')).send();}},j=c('throttle')(i.flushQueue,c('PhotosUploadWaterfallXConfig').batchInterval*1000);f.exports=i;}),null);
__d('AlbumMediaUploadUtils',['VideoUploadConfig'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={isVideoFile:function i(j){var k=j.name,l=c('VideoUploadConfig').videoExtensions,m=k.indexOf('.')!==-1?k.split('.').pop().toLowerCase():'';return l[m];},hasVideos:function i(j){return this._filterVideos(j).length>0;},_filterVideos:function i(j){return this._filterFileOfSupportedType(j,c('VideoUploadConfig').videoExtensions);},_filterFileOfSupportedType:function i(j,k){return j.filter(function(l){var m=l.indexOf('.')!==-1?l.split('.').pop().toLowerCase():'';return k[m];});}};f.exports=h;}),null);
__d('FilePickerEvent',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={BEGIN:'FilePickerEvent/BEGIN',SELECT_START:'FilePickerEvent/SELECT_START',SELECTED:'FilePickerEvent/SELECTED_FILES',ALBUM_LIMIT_EXCEEDED:'FilePickerEvent/ALBUM_LIMIT_EXCEEDED',SESSION_LIMIT_EXCEEDED:'FilePickerEvent/SESSION_LIMIT_EXCEEDED',SELECT_CANCELED:'FilePickerEvent/SELECT_CANCELED',FALLBACK:'FilePickerEvent/FALLBACK'};}),null);
__d('UploadSession',['invariant','AlbumMediaUploadUtils','AsyncRequest','FilePickerEvent','SubscriptionsHandler','PhotosUploadWaterfall','PUWSteps','URI','arrayContains'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={};function j(m){'use strict';this._sessionID=m;this._asyncBootstrapped=false;this._controller=null;this._overlay=null;this._pickers=[];this._pendingPhotoFileLists=[];this._pendingVideoFileLists=[];this._beginLogged=false;this._albumLimitWasExceeded=false;this._sessionLimitWasExceeded=false;this._subscriptions=new (c('SubscriptionsHandler'))();}j.prototype.addFilePicker=function(m){'use strict';if(!c('arrayContains')(this._pickers,m)){this._pickers.push(m);if(this._controller&&m.getSwfID&&m.getSwfID())this._controller.preregisterSwf&&this._controller.preregisterSwf(m.getSwfID());this._subscriptions.addSubscriptions(m.subscribe(c('FilePickerEvent').BEGIN,function(n,o){if(!this._beginLogged){this._beginLogged=true;m.logWaterfallStep(c('PhotosUploadWaterfall').BEGIN);m.logStep(c('PUWSteps').CLIENT_FLOW_BEGIN);}}.bind(this)),m.subscribe(c('FilePickerEvent').SELECTED,function(n,o){m.logStep(c('PUWSteps').CLIENT_SELECT_SUCCESS,{volume:o.files.length});var p=[],q=[];o.files.forEach(function(t){if(c('AlbumMediaUploadUtils').isVideoFile(t)){p.push(t);}else q.push(t);});if(this._controller){if(q.length>0)this._controller.uploadFiles(q);if(this._videoController&&p.length>0)this._videoController.uploadFiles(p);}else{if(q.length>0)this._pendingPhotoFileLists.push(q);if(p.length>0)this._pendingVideoFileLists.push(p);}if(this._asyncBootstrapped)return;var r=m._button,s=new (c('URI'))(r.getAttribute('ajaxify'));s.addQueryData('num_selected',o.files.length);c('AsyncRequest').bootstrap(s.toString(),r,true);this._asyncBootstrapped=true;}.bind(this)),m.subscribe(c('FilePickerEvent').SELECT_START,function(){m.logStep(c('PUWSteps').CLIENT_SELECT_BEGIN);}.bind(this)),m.subscribe(c('FilePickerEvent').SELECT_CANCELED,function(){m.logStep(c('PUWSteps').CLIENT_SELECT_CANCEL);if(!this._overlay){m.logStep(c('PUWSteps').CLIENT_FLOW_CANCEL);this._beginLogged=false;}}.bind(this)),m.subscribe(c('FilePickerEvent').ALBUM_LIMIT_EXCEEDED,function(){if(this._controller){this._controller.albumLimitExceeded();}else this._albumLimitWasExceeded=true;}.bind(this)),m.subscribe(c('FilePickerEvent').SESSION_LIMIT_EXCEEDED,function(){if(this._controller){this._controller.sessionLimitExceeded();}else this._sessionLimitWasExceeded=true;}.bind(this)));}};j.prototype.addController=function(m,n){'use strict';this._controller=m;this._videoController=n;this._asyncBootstrapped=true;var o=this._controller.getWaterfallID?this._controller.getWaterfallID():this._controller.getWaterfallConfig().waterfallID,p=this._controller.getUploaderApp?this._controller.getUploaderApp():this._controller.getWaterfallConfig().waterfallApp;if(!this._beginLogged){this._beginLogged=true;c('PhotosUploadWaterfall').sendSignal({qn:o,step:c('PhotosUploadWaterfall').BEGIN,uploader:p});}if(this._pendingPhotoFileLists.length>0||this._pendingVideoFileLists.length>0){var q=[],r=[];this._pendingVideoFileLists.forEach(function(s){r=r.concat(s);});this._pendingPhotoFileLists.forEach(function(s){q=q.concat(s);});if(q.length>0)this._controller.uploadFiles(q);if(r.length>0)this._videoController.uploadFiles(r);}else c('PhotosUploadWaterfall').sendSignal({qn:o,step:c('PhotosUploadWaterfall').OVERLAY_FIRST,uploader:p});if(this._albumLimitWasExceeded)this._controller.albumLimitExceeded();if(this._sessionLimitWasExceeded)this._controller.sessionLimitExceeded();};j.prototype.addOverlay=function(m){'use strict';this._overlay=m;};j.prototype.addOverlayAndController=function(m,n){'use strict';this.addOverlay(m);this.addController(n,null);};j.prototype.getFilePickers=function(){'use strict';return this._pickers;};j.prototype.cleanup=function(){'use strict';this._subscriptions&&this._subscriptions.release();};j.addFilePickerToSession=function(m,n){'use strict';k(m).addFilePicker(n);};j.addControllerToSession=function(m,n,o){'use strict';k(m).addController(n,o);};j.addOverlayToSession=function(m,n){'use strict';k(m).addOverlay(n);};j.addOverlayAndControllerToSession=function(m,n,o){'use strict';k(m).addOverlayAndController(n,o);};j.restartSessionPersistingFilePickers=function(m){'use strict';var n=k(m),o=new j(m);n.getFilePickers().forEach(function(p){o.addFilePicker(p);});l(m,o);};function k(m){if(!i[m])i[m]=new j(m);return i[m];}function l(m,n){!i[m]?h(0):void 0;i[m].cleanup();delete i[m];i[m]=n;}f.exports=j;}),null);
__d('ReactFeedComposerXBody',['DOM','Event','SubscriptionsHandler'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i){this.root=i.root;this.$ReactFeedComposerXBody3=c('DOM').find(this.root,'textarea');this.$ReactFeedComposerXBody1=c('DOM').find(this.root,'input[type="hidden"]');this.stickyarea=i.stickyarea&&i.stickyarea;this.$ReactFeedComposerXBody2=new (c('SubscriptionsHandler'))();this.$ReactFeedComposerXBody2.addSubscriptions(c('Event').listen(this.$ReactFeedComposerXBody3,'change',this.$ReactFeedComposerXBody4.bind(this)));}h.prototype.$ReactFeedComposerXBody4=function(i){this.$ReactFeedComposerXBody1.value=i.target.value;};f.exports=h;}),null);
__d('StickyArea',['cx','CSS','DOM','DOMQuery','Event','Run','Style','ViewportBounds','getNormalizedClientRect','getOverlayZIndex','removeFromArray','throttle'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=[],j=null,k=null,l=c('throttle').acrossTransitions(o,1000),m='$$StickyArea_scrollListener',n='$$StickyArea_scrollListenerCount';function o(){i.sort(function(u,v){var w=u.getNode(),x=v.getNode();if(w.compareDocumentPosition){return 3-(w.compareDocumentPosition(x)&6);}else return w.sourceIndex-x.sourceIndex;});}function p(u,v,w){var x=u.getPlaceholder(),y=u.getNode(),z=c('Style').get(y,'float'),aa=u.getData();if(aa.placeholderWidth!==v||aa.placeholderHeight!==w||aa.placeholderFloat!==z){c('Style').apply(x,{'float':z,height:w+'px',width:v+'px'});aa.placeholderHeight=w;aa.placeholderWidth=v;}if(y.nextSibling!==x)c('DOM').insertAfter(y,x);}function q(u,v){var w=u.getData();if(w.fixed!==v){c('Style').apply(u.getNode(),w.styles);c('CSS').conditionShow(u.getPlaceholder(),v);c('CSS').conditionClass(u.getNode(),"_1a1e",v);c('Event').fire(u.getNode(),'change');w.fixed=v;}}function r(u,v){if(!u){return 0;}else if(v.right<=u.rect.left||v.left>=u.rect.right){return r(u.prev,v);}else return u.bottom;}function s(){var u=0,v=i.length,w=100,x=null;function y(z,aa){var ba=w;while(u<v){var ca=i[u],da=ca.getNode(),ea=ca._scrollTarget;if(aa&&!c('DOMQuery').contains(aa,da))break;w=Math.max(ba,ca.getZIndex());var fa=ca.getData(),ga=da.parentNode,ha=fa.styles;for(var ia in ha)ha[ia]='';q(ca,false);var ja=da.offsetHeight,ka=da.offsetWidth,la=ea!==window?ea.getBoundingClientRect().top:0,ma=c('getNormalizedClientRect')(da),na=r(z||(ea===window?x:null),ma)+ca.getOffset(),oa=ma.top-la;if(oa<=na){ha.width=ka+'px';var pa=parseInt(c('Style').get(ga,'padding-bottom'),10),qa=c('getNormalizedClientRect')(ga);if(qa.bottom-pa>na+ja||!ca.getIsBoundToContainer()){var ra=parseInt(c('Style').get(da,'margin-left'),10);ha.position='fixed';ha.bottom='auto';ha.top=na+la+'px';ha.left=ma.left-ra+'px';}else{if(!fa.parent||ga!==fa.parent){if(c('Style').get(ga,'position')==='static')c('Style').set(ga,'position','relative');fa.parent=ga;}ha.position='absolute';ha.top='auto';ha.bottom=pa+'px';var sa=parseInt(c('Style').get(ga,'border-left-width'),10);ha.left=ma.left-qa.left-sa+'px';}p(ca,ka,ja);q(ca,true);}u++;var ta={bottom:na+ja,prev:z,rect:ma},ua=0;if(!ca.getIsBoundToContainer()){x=ta;ua=ca.getNotBoundZIndexBump();}y(ta,ga);c('Style').set(da,'z-index',w+++ua);}}y(null,null);}function t(u,v,w){var x=arguments.length<=3||arguments[3]===undefined?{}:arguments[3];'use strict';this._isDestroyed=false;this._node=u;this._data={fixed:false,placeholderFloat:null,placeholderHeight:null,placeholderWidth:null,styles:{}};this._offset=w;this._boundToContainer=x.boundToContainer!==false;if(x.stickTo===t.stickTo.SCROLL_PARENT){this._scrollTarget=c('Style').getScrollParent(u.parentNode)||window;}else this._scrollTarget=window;this._notBoundZIndexBump=x.notBoundZIndexBump||100;c('CSS').addClass(u,"_k");if(!v)c('Run').onLeave(this.destroy.bind(this));if(!this._scrollTarget[m]){this._scrollTarget[m]=c('Event').listen(this._scrollTarget,'scroll',function(){l();s();});this._scrollTarget[n]=1;}else this._scrollTarget[n]++;if(!i.length){j=c('Event').listen(window,'resize',function(){l();s();});k=c('ViewportBounds').subscribe('change',function(){l();s();});}i.push(this);t.reflow();}t.prototype.destroy=function(){'use strict';if(this._isDestroyed)return;c('removeFromArray')(i,this);this._scrollTarget[n]--;if(this._scrollTarget[n]===0){this._scrollTarget[m].remove();this._scrollTarget[m]=null;}if(!i.length){j.remove();j=null;k.unsubscribe();k=null;}if(this._placeholder)c('DOM').remove(this._placeholder);var u=0;for(var v in this._data.styles){this._data.styles[v]='';u++;}if(u)c('Style').apply(this._node,this._data.styles);this._isDestroyed=true;};t.prototype.getData=function(){'use strict';return this._data;};t.prototype.getNode=function(){'use strict';return this._node;};t.prototype.getOffset=function(){'use strict';return this._offset||0;};t.prototype.getPlaceholder=function(){'use strict';if(!this._placeholder)this._placeholder=c('DOM').create('div');return this._placeholder;};t.prototype.getIsBoundToContainer=function(){'use strict';return this._boundToContainer;};t.prototype.getNotBoundZIndexBump=function(){'use strict';return this._notBoundZIndexBump;};t.prototype.getZIndex=function(){'use strict';if(!this._zIndex)this._zIndex=c('getOverlayZIndex')(this._node);return this._zIndex;};t.prototype.setOffset=function(u){'use strict';this._offset=u;};t.reflow=c('throttle').acrossTransitions(function(){o();s();},100);t.stickTo={SCROLL_PARENT:'SCROLL_PARENT',WINDOW:'WINDOW'};f.exports=t;}),null);