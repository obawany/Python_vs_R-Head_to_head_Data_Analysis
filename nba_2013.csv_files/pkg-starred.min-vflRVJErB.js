define("external/spectrum/icon_star",["require","exports","tslib","external/spectrum/icon_star/index"],function(e,t,r,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.__exportStar(a,t)}),define("external/spectrum/icon_star/icon_star",["require","exports","tslib","external/react","external/classnames","external/spectrum/packages/spectrum-icons/generated/bundles/action"],function(e,t,r,a,o,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ICONS=s.ICONS,t.IconStar=function(e){var t=e.state,i=e.selected,n=e.className,c=r.__rest(e,["state","selected","className"]),d=i?s.ICONS.unstar:s.ICONS.star,l=d.attrs,u=d.innerHtml,p=o("mc-icon-star",{"mc-icon-star-selected":i,"mc-icon-star-hovered":"hovered"===t,"mc-icon-star-active":"active"===t,"mc-icon-star-disabled":"disabled"===t},n);return a.createElement("svg",r.__assign({},l,{className:p,dangerouslySetInnerHTML:{__html:u}},c))},t.IconStar.displayName="IconStar"}),define("external/spectrum/icon_star/index",["require","exports","tslib","external/spectrum/icon_star/icon_star"],function(e,t,r,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.__exportStar(a,t)}),define("modules/clean/react/home/starred/actions",["require","exports","tslib","modules/clean/flux/dispatcher","modules/clean/react/home/starred/constants","modules/clean/react/home/starred/api","modules/clean/react/home/starred/models/starred_item","modules/clean/react/starred/model","modules/core/exception","modules/clean/react/home/post_tti/api"],function(e,t,r,a,o,s,i,n,c,d){"use strict";function l(e,t){return a.Dispatcher.dispatch({type:o.StarredResourceActionTypes.LOAD_FAILURE,error:t,loadingType:e}),t}Object.defineProperty(t,"__esModule",{value:!0});var u=(function(){function e(){}return e.loadAllItems=function(){return r.__awaiter(this,void 0,void 0,function(){var t,i;return r.__generator(this,function(r){switch(r.label){case 0:a.Dispatcher.dispatch({type:o.StarredResourceActionTypes.LOADING_ALL}),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,s.retrieveStarred(o.LOAD_ALL_ITEMS_COUNT)];case 2:return t=r.sent(),[3,4];case 3:throw i=r.sent(),l(o.StarredLoadingTypes.ALL,i);case 4:return e.handleRetrieveStarredPayload(o.StarredLoadingTypes.ALL,t),[2]}})})},e.handleRetrieveStarredPayload=function(t,r){if("success"!==r.status)throw l(t,r.status);if(!r.items||void 0===r.has_more)throw c.reportStack("Home starred items request returned success without items or hasMore",{severity:c.SEVERITY.NONCRITICAL}),l(t,new Error("Invalid server response for Starred getItems"));var s=r.items.map(i.starredItemFromJson),d=n.statusResultsToStarredStatuses(s.map(i.starredItemModelToStarredStatus));a.Dispatcher.dispatch({type:o.StarredResourceActionTypes.LOAD_SUCCESS,hasMore:r.has_more,items:s,starredStatuses:d,loadingType:t}),e.getStarredStatusMetadata(d)},e.getStarredStatusMetadata=function(e){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(t){switch(t.label){case 0:return[4,d.waitForHomeTTI()];case 1:return t.sent().getStarredStatusMetadata(e),[2]}})})},e})();t.StarredActions=u}),define("modules/clean/react/home/starred/api",["require","exports","tslib","modules/clean/react/home/api","modules/clean/react/home/store"],function(e,t,r,a,o){"use strict";function s(e){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(t){switch(t.label){case 0:return[4,a.makeRequest({url:"/home_feed/retrieve_starred",type:"POST",data:{role:o.getRole(),limit:e}})];case 1:return[2,t.sent()]}})})}Object.defineProperty(t,"__esModule",{value:!0}),t.retrieveStarred=s}),define("modules/clean/react/home/starred/conditional_interface",["require","exports","modules/clean/react/home/starred/starred_resource_store","modules/clean/react/starred/star","modules/clean/recent_activity/recent_activity_starred","modules/clean/react/home/starred/starred_view","modules/clean/react/starred/id_type_pair"],function(e,t,r,a,o,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getStarredResourceStore=r.getStarredResourceStore,t.Star=a.Star,t.getIdTypePairFromRecentItem=o.getIdTypePairFromRecentItem,t.StarredView=s.StarredView,t.idTypePairToString=i.idTypePairToString}),define("modules/clean/react/home/starred/constants",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StarredResourceActionTypes={LOADING_INITIAL:"HOME_STARRED_LOADING_INITIAL",LOADING_ALL:"HOME_STARRED_LOADING_ALL",LOAD_SUCCESS:"HOME_STARRED_LOAD_SUCCESS",LOAD_FAILURE:"HOME_STARRED_LOAD_FAILURE",HIDE_EMPTY_SECTION:"HOME_STARRED_HIDE_EMPTY_SECTION"},t.NOT_PAPER_USER_ERROR="not_paper_user",t.StarredLoggingTypes={CLICK_STAR:"click_star",CLICK_UNSTAR:"click_unstar"},t.StarredLoadingTypes={INITIAL:"INITIAL",ALL:"ALL"},t.NUM_INITIAL_ITEMS=16,t.LOAD_ALL_ITEMS_COUNT=1e3}),define("modules/clean/react/home/starred/models/starred_item",["require","exports","modules/clean/react/home/constants"],function(e,t,r){"use strict";function a(e){return{title:e.title,resourceId:e.resource_id,idType:e.id_type,displayType:e.display_type,url:e.url,details:o(e.display_type,e.details)}}function o(e,t){var a=r.DisplayTypeToResourceType[e];if(a===r.FILE_RESOURCE_TYPE){var o=t;return{fqPath:o.fq_path}}if(a===r.FOLDER_RESOURCE_TYPE){var o=t;return{fqPath:o.fq_path,targetNsId:o.target_ns_id,isTeamMemberFolder:o.is_team_member_folder}}if(a===r.EXTERNAL_RESOURCE_TYPE){var o=t;return{favicon:o.favicon}}return{}}function s(e){return{id:e.resourceId,type:e.idType,is_starred:!0}}Object.defineProperty(t,"__esModule",{value:!0}),t.starredItemFromJson=a,t.detailsFromJson=o,t.starredItemModelToStarredStatus=s}),define("modules/clean/react/home/starred/starred_item",["require","exports","tslib","external/classnames","external/spectrum/overflow_button","external/spectrum/popover","external/react","modules/core/i18n","modules/clean/react/home/store","modules/clean/react/home/util/navigation","modules/clean/react/home/util/resource_icon","modules/clean/react/starred/actions","modules/clean/react/starred/star","modules/clean/react/starred/constants","modules/clean/react/starred/id_type_pair","modules/clean/react/home/util/logging/activity_logger","modules/clean/react/home/constants","modules/clean/undo","modules/clean/user_education/user_education_client","modules/clean/sharing/async_share_modal_util","modules/clean/static_urls","modules/clean/react/home/post_tti/api","modules/clean/react/home/util/experiment_hook"],function(e,t,r,a,o,s,i,n,c,d,l,u,p,m,h,S,_,g,y,f,T,E,v){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.experimentOverride=v.experimentOverride;var L=(A={},A[_.FILE_RESOURCE_TYPE]=!0,A[_.FOLDER_RESOURCE_TYPE]=!0,A[_.PAPER_DOCUMENT_RESOURCE_TYPE]=!0,A),I=(function(e){function t(t){var r=e.call(this,t)||this;return r.getLoggingInfo=function(){var e=_.DisplayTypeToResourceType[r.props.item.displayType],t="n/a";if(e===_.FILE_RESOURCE_TYPE){var a=r.props.item.title,o=a.lastIndexOf(".");t=o===-1?"":a.substr(o+1)}return{resourceId:r.props.item.resourceId,resourceType:e,resourceExt:t,position:r.props.position}},r.onClick=function(e){if(!r.state.isRenaming){e.stopPropagation(),e.preventDefault();if(_.DisplayTypeToResourceType[r.props.item.displayType]!==_.FILE_RESOURCE_TYPE||d.isMetaKeyPressed(e)){var t=r.props.item.displayType===_.EXTERNAL_RESOURCE_TYPE?d.NavigationMethod.UNSAFE_NEW_TAB:d.NavigationMethod.NEW_TAB;d.logAndNavigate(r.props.item.url,r.logOpen,t)}else e.preventDefault(),E.waitForHomeTTI().then(function(e){return e.openInFileViewer(h.idTypePairToString({type:r.props.item.idType,id:r.props.item.resourceId}),r.logOpen)})}},r.onStarClick=function(e){if(!e){var t=r.getLoggingInfo(),a=t.resourceId,o=t.resourceType,s=t.resourceExt,i=t.position,d=r.props.item,l=n._("Removed from Starred."),p=function(e){var t=e.itemToStar,n=_.DisplayTypeToResourceType[r.props.item.displayType],d=n===_.EXTERNAL_RESOURCE_TYPE;u.StarredActions.update(c.getHomeStore().getRole(),t.resourceId,t.idType,!0,d?t.title:void 0,d?t.details.favicon:void 0),S.homeActivityLogger.logUndoUnstarItem(a,o,s,i)};g.notifyWithUndo(l,{itemToStar:d},p,10)}},r.logEvent=function(e){var t=r.getLoggingInfo();return e(t.resourceId,t.resourceType,t.resourceExt,t.position)},r.logOpen=function(){return r.logEvent(S.homeActivityLogger.logOpenStarredItem)},r.logClickMenu=function(){return r.logEvent(S.homeActivityLogger.logClickStarOverflowMenu)},r.logClickShare=function(){return r.logEvent(S.homeActivityLogger.logClickStarOverflowShare)},r.handleShare=function(e){if(e.preventDefault(),r.props.item.displayType===_.PAPER_DOCUMENT_RESOURCE_TYPE)return void d.logAndNavigate(r.props.item.url+"?openSharing=1",r.logClickShare);r.logClickShare();var t=_.DisplayTypeToResourceType[r.props.item.displayType]===_.FOLDER_RESOURCE_TYPE,a=t?r.props.item.details.targetNsId:null;f.asyncShowShareModal(r.props.user,{fqPath:r.props.item.details.fqPath,isFolder:t,targetNsId:a})},r.handleRenameInputChange=function(e){r.setState({newName:e.target.value})},r.handleRenameStart=function(e){r.setState({isRenaming:!0,newName:r.props.item.title})},r.handleRenameSubmit=function(e){e.preventDefault();var t=r.props.item,a=t.title,o=r.state.newName;void 0!==o&&null!==o&&(r.setState({isRenaming:!1,newName:""}),u.StarredActions.renameExternalResource(t.resourceId,a,o))},r.handleFaviconError=function(e){e.currentTarget.src=T.static_url("/static/images/home/generic-website-favicon-vfl8fV8SM.png")},r.stopEvent=function(e){e.stopPropagation(),e.preventDefault()},r.handleSelection=function(e,t){e(t)},r.getTitle=function(){var e=r.props.item.title,t=n._("Untitled");return e.trim().length?e:t},r.getIcon=function(){if(_.DisplayTypeToResourceType[r.props.item.displayType]===_.EXTERNAL_RESOURCE_TYPE){var e=r.props.item.details.favicon;return(void 0===e||null===e||e.startsWith("http:"))&&(e=T.static_url("/static/images/home/generic-website-favicon-vfl8fV8SM.png")),i.createElement("img",{src:e,alt:n._("starred webpage favicon"),onError:r.handleFaviconError,className:"starred-item__external-favicon"})}return i.createElement(l.HomeResourceIcon,{className:"starred-item__file-icon",displayType:r.props.item.displayType,fileName:r.props.item.title,variant:"small"})},r.state={isRenaming:!1,newName:r.props.item.title},r}return r.__extends(t,e),t.prototype.renderDropdown=function(){var e=[],t=_.DisplayTypeToResourceType[this.props.item.displayType],c=this.props.item.details.isTeamMemberFolder;t in L&&!c&&e.push(i.createElement(s.PopoverContentItem,{className:"starred-context-menu-item",key:"share",value:this.handleShare},n._("Share"))),t===_.EXTERNAL_RESOURCE_TYPE&&e.push(i.createElement(s.PopoverContentItem,{className:"starred-context-menu-item",key:"rename",value:this.handleRenameStart},n._("Rename")));var d={"aria-label":n._("More actions"),onDoubleClick:function(e){e.stopPropagation()}},l=i.createElement(o.OverflowButton,r.__assign({tagName:"span",className:"starred-item__context-menu-button","aria-label":n._("More Actions")},d));return i.createElement("div",{onClick:this.stopEvent,className:a({"starred-item__context-menu-emtpy":!e.length})},i.createElement(s.Popover,{onSelection:this.handleSelection,onMenuToggle:this.logClickMenu},i.createElement(s.PopoverTrigger,{className:"starred-item__context-menu-trigger"},l),i.createElement(s.PopoverContent,{attachment:"right"},e)))},t.prototype.getStarredItemName=function(){return this.state.isRenaming?i.createElement("form",{className:"starred-item__rename-form",onSubmit:this.handleRenameSubmit},i.createElement("input",{className:"rename-input",type:"text",value:this.state.newName,onChange:this.handleRenameInputChange}),i.createElement("input",{type:"submit",value:"OK"})):i.createElement("a",{onClick:this.onClick,href:this.props.item.url,className:"starred-item__title"},this.getTitle())},t.prototype.render=function(){var e={"starred-item":!0,"starred-item--last-in-row":this.props.lastInRow,"starred-item--in-last-row":this.props.inLastRow};return i.createElement("li",{className:a(e),onClick:this.onClick},this.getIcon(),i.createElement("div",{className:"starred-item__content"},i.createElement(y.UserEducationEffect,{containerName:"StarredItem",name:"starred-item-"+String(this.props.position)}),this.getStarredItemName(),i.createElement("div",{className:"starred-item__star"},i.createElement(p.Star,{user:c.getHomeStore().getUser(),id:this.props.item.resourceId,idType:this.props.item.idType,itemName:this.props.item.title,onStarClick:this.onStarClick,source:m.StarredSource.HOME_STARRED}))),this.renderDropdown())},t.displayName="StarredItem",t})(i.PureComponent);t.StarredItem=I;var A}),define("modules/clean/react/home/starred/starred_resource_store",["require","exports","tslib","modules/clean/flux/dispatcher","modules/clean/react/home/constants","modules/clean/react/home/starred/constants","modules/clean/react/starred/constants","modules/clean/react/home/starred/actions","modules/clean/react/starred/store","modules/clean/react/home/util/logging/availability_logger","modules/clean/flux/flux_store","modules/clean/react/home/starred/api"],function(e,t,r,a,o,s,i,n,c,d,l,u){"use strict";function p(){return null===h&&(h=new m),h}Object.defineProperty(t,"__esModule",{value:!0});var m=(function(e){function t(){var t=e.call(this,a.Dispatcher)||this;return t.orderedIds=[],t.itemsById={},t.loadingState=o.LoadingStates.LOADING,t.hasMore=!0,t.hasLoadedInitial=!1,t.hasLoadedAll=!1,t.isPaperUser=!0,d.getHomeAvailabilityLogger().handlePrefetch(o.HomePrefetchTypes.RETRIEVE_STARRED,function(e){return n.StarredActions.handleRetrieveStarredPayload(s.StarredResourceActionTypes.LOADING_INITIAL,e)},function(){return u.retrieveStarred(s.NUM_INITIAL_ITEMS)}),t}return r.__extends(t,e),t.prototype.getStarredStore=function(){return c.StarredStore},t.prototype.clearPresentableItemsCache=function(){this.presentableItemsCache=null},t.prototype.getItems=function(){var e=this;return this.presentableItemsCache||(this.presentableItemsCache=this.orderedIds.map(function(t){return e.itemsById[t]}).filter(function(t){var r={id:t.resourceId,type:t.idType},a=e.getStarredStore().getLoadingState(r),o=e.getStarredStore().getIsStarred(r);return a===i.StarredLoadingState.LOADING||o})),this.presentableItemsCache},t.prototype.getItem=function(e){return this.itemsById[e]},t.prototype.getLoadingState=function(){return this.loadingState},t.prototype.getHasMore=function(){return this.hasMore},t.prototype.getHasLoadedInitial=function(){return this.hasLoadedInitial},t.prototype.getHasLoadedAll=function(){return this.hasLoadedAll},t.prototype.getIsPaperUser=function(){return this.isPaperUser},t.prototype.onItemsLoading=function(){this.loadingState=o.LoadingStates.LOADING},t.prototype.onItemsLoadSuccess=function(e,t){var r=this;e.forEach(function(e){r.itemsById[e.resourceId]=e}),this.loadingState=o.LoadingStates.SUCCESS,this.orderedIds=e.map(function(e){return e.resourceId}),this.hasMore=t,e.length&&this.clearPresentableItemsCache()},t.prototype.onItemsLoadFailure=function(e){this.loadingState=o.LoadingStates.FAILURE,e&&e===s.NOT_PAPER_USER_ERROR&&(this.isPaperUser=!1)},t.prototype.onItemsLoadComplete=function(e,t){e!==s.StarredLoadingTypes.INITIAL&&t||(this.hasLoadedInitial=!0),e!==s.StarredLoadingTypes.ALL&&t||(this.hasLoadedAll=!0)},t.prototype.onStatusChange=function(){setTimeout(n.StarredActions.loadAllItems,0),this.clearPresentableItemsCache()},t.prototype.onRenameExternalResource=function(e,t){var a=this.getItem(e),o=r.__assign({},a,{title:t});this.itemsById[e]=o},t.prototype.__onDispatch=function(e){var t=e.action;switch(t.type){case s.StarredResourceActionTypes.LOADING_INITIAL:case s.StarredResourceActionTypes.LOADING_ALL:this.onItemsLoading(),this.__emitChange();break;case s.StarredResourceActionTypes.LOAD_SUCCESS:this.onItemsLoadSuccess(t.items,t.hasMore),this.onItemsLoadComplete(t.loadingType,t.hasMore),this.__emitChange();break;case s.StarredResourceActionTypes.LOAD_FAILURE:this.onItemsLoadFailure(t.error),this.onItemsLoadComplete(t.loadingType,!0),this.__emitChange();break;case i.StarredActionTypes.LOADING:this.clearPresentableItemsCache(),this.__emitChange();break;case i.StarredActionTypes.SET_STATUS:this.onStatusChange(),this.__emitChange();break;case i.StarredActionTypes.RENAME_EXTERNAL_RESOURCE:this.onRenameExternalResource(t.id,t.name),this.__emitChange()}},t})(l);t.PrivateStarredResourceStoreClass=m;var h=null;t.getStarredResourceStore=p}),define("modules/clean/react/home/starred/starred_view",["require","exports","tslib","external/react","modules/clean/react/home/store","modules/clean/react/home/util/logging/timing_logger","modules/clean/react/home/util/logging/timing_component","modules/clean/react/home/util/show_hide_link","modules/clean/react/home/constants","modules/clean/react/home/starred/starred_item","modules/clean/react/home/util/logging/activity_logger","modules/clean/react/home/starred/starred_resource_store","modules/clean/react/home/starred/actions","modules/clean/react/home/starred/starred_empty_state","modules/clean/react/home/util/experiment_hook"],function(e,t,r,a,o,s,i,n,c,d,l,u,p,m,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.experimentOverride=h.experimentOverride;var S=(function(e){function t(){var t=e.call(this)||this;return t.onStoreUpdate=function(){return t.setState(t.getStateFromStore())},t.toggleShowAll=function(){var e=!t.state.showAll;l.homeActivityLogger.logClickShowAll("starred",!t.state.showAll),e&&t.state.hasMore&&p.StarredActions.loadAllItems(),t.setState({showAll:e})},t.removeStoreListener=u.getStarredResourceStore().addListener(t.onStoreUpdate),t.state=r.__assign({},t.getStateFromStore(),{showAll:!1,user:o.getUser()}),t}return r.__extends(t,e),t.prototype.componentWillUnmount=function(){this.removeStoreListener&&this.removeStoreListener()},t.prototype.getStateFromStore=function(){var e=u.getStarredResourceStore(),t=e.getLoadingState(),r=e.getItems(),a=e.getHasMore(),o=e.getHasLoadedInitial(),i=e.getHasLoadedAll();if(t===c.LoadingStates.SUCCESS){if(s.homeTimingLogger.logTTData(c.HomeSections.STARRED)){var n=r.length>5;l.homeActivityLogger.logStarredShown(r.length,n,a)}}return{itemModels:r,loadingState:t,hasMore:a,hasLoadedInitial:o,hasLoadedAll:i}},t.prototype.renderItems=function(e){return e.length?e:this.state.hasLoadedInitial?a.createElement(m.StarredEmptyState,null):null},t.prototype.renderLoadingIndicator=function(){return this.state.loadingState!==c.LoadingStates.LOADING||this.state.hasLoadedAll||(this.state.hasLoadedInitial||this.state.itemModels.length)&&!this.state.showAll?null:a.createElement("div",{className:"home-access__loading-indicator home--loading-indicator"},a.createElement("div",{className:"maestro-loading-spinner"}))},t.prototype.getItemListToRender=function(){var e=this,t=this.state.itemModels,r=t.length>5;return r&&!this.state.showAll&&(t=t.slice(0,5)),{items:t.map(function(t,r){return a.createElement(d.StarredItem,{key:t.resourceId,item:t,user:e.state.user,position:r})}),hasHiddenRows:r}},t.prototype.renderShowHideLink=function(e){return e?a.createElement(n.ShowHideLink,{onClick:this.toggleShowAll,isExpanded:this.state.showAll,hiddenItemCount:this.state.itemModels.length-5,canLoadMore:!1}):null},t.prototype.render=function(){var e=this.getItemListToRender(),t=e.items,r=e.hasHiddenRows;return a.createElement("div",{className:"starred"},a.createElement(m.StarredHeader,null),a.createElement("ul",{className:"starred-list"},this.renderItems(t),this.renderLoadingIndicator()),this.renderShowHideLink(r))},t.displayName="StarredView",t})(a.PureComponent);t.StarredView=i.timingComponent(S,c.HomeSections.STARRED)}),define("modules/clean/react/starred/actions",["require","exports","modules/clean/flux/dispatcher","modules/clean/react/starred/constants","modules/clean/react/starred/api","modules/clean/react/starred/model"],function(e,t,r,a,o,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=(function(){function e(){}return e.fetchStatuses=function(t,i,n){return void 0===n&&(n=!1),n||e.markAsLoading(i),o.fetchStatuses(t,i).then(function(e){r.Dispatcher.dispatch({type:a.StarredActionTypes.SET_STATUS,starredStatuses:s.statusResultsToStarredStatuses(e)})}).catch(function(e){return r.Dispatcher.dispatch({type:a.StarredActionTypes.LOAD_FAILURE,idTypePairs:i}),Promise.reject(e)})},e.markAsLoading=function(e){r.Dispatcher.dispatch({type:a.StarredActionTypes.LOADING,idTypePairs:e})},e.renameExternalResource=function(e,t,s){r.Dispatcher.dispatch({type:a.StarredActionTypes.RENAME_EXTERNAL_RESOURCE,id:e,name:s});var i=o.updateExternalResource(e,s,!0);return i.catch(function(o){throw r.Dispatcher.dispatch({type:a.StarredActionTypes.RENAME_EXTERNAL_RESOURCE,id:e,name:t}),o}),i},e.update=function(e,t,s,i,n,c){var d={id:t,type:s};r.Dispatcher.dispatch({type:a.StarredActionTypes.LOADING,idTypePairs:[d]});var l,u;if(s===a.IdTypes.EXTERNAL_RESOURCE_ID){if(null===n||void 0===n)throw new TypeError("Name of external resource cannot be null/undefined");u=o.updateExternalResource(t,n,i,c)}else u=o.update(e,t,s,i);return u.then(function(){return l=i}).catch(function(e){throw l=!i,e}).finally(function(){r.Dispatcher.dispatch({type:a.StarredActionTypes.SET_STATUS,starredStatuses:[{idTypePair:{id:t,type:s},starred:l}]});var e={url:t,name:n,isStarred:i};window.chrome&&window.chrome.runtime.sendMessage(a.StarExtensionId_PROD,e)}),u},e})();t.StarredActions=i}),define("modules/clean/react/starred/api",["require","exports","modules/clean/ajax"],function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){var a=function(a,o){r.WebRequest({url:e,type:"POST",dataType:"json",data:t,success:a,error:function(e,t,r){return o(Error(r))}})};return new Promise(function(e,t){a(e,t)})};t.fetchStatuses=function(e,t){return a("/starred/get_status",{role:e,resources_json:JSON.stringify(t)})},t.update=function(e,t,r,o){return a("/starred/update",{role:e,resource_id:t,id_type:r,is_starred:o})},t.updateExternalResource=function(e,t,r,o){return a("/starred/update_external_resource",{url:e,name:t,is_starred:r,favicon_url:o})}}),define("modules/clean/react/starred/model",["require","exports"],function(e,t){"use strict";function r(e){return e.map(function(e){var t=e.id,r=e.type,a=e.is_starred,o=e.canonical_id,s=e.canonical_id_type,i={idTypePair:{id:t,type:r},starred:a};return o&&s&&(i.canonicalIdTypePair={id:o,type:s}),i})}Object.defineProperty(t,"__esModule",{value:!0}),t.statusResultsToStarredStatuses=r}),define("modules/clean/react/starred/star",["require","exports","tslib","external/classnames","external/react","modules/clean/react/starred/starred_activity_logger","modules/clean/react/css","modules/clean/react/starred/actions","modules/clean/react/starred/store","modules/clean/react/title_bubble","modules/core/i18n","modules/core/notify","external/spectrum/icon_star"],function(e,t,r,a,o,s,i,n,c,d,l,u,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var m=(function(e){function t(t){var r=e.call(this,t)||this;return r.onStoreUpdate=function(){var e=r.getStateFromStore();r.setState(e)},r.onClick=function(e){if(e.stopPropagation(),e.preventDefault(),!r.state.isLoading){var t=!r.state.isStarred;s.starredActivityLogger.logClick(r.props.user,r.props.id,r.props.idType,r.props.source,t),r.props.onStarClick&&r.props.onStarClick(t),n.StarredActions.update(r.props.user.role,r.props.id,r.props.idType,t,r.props.itemName).catch(function(e){var a;a=r.props.itemName?t?l._("There was a problem starring %(item_name)s").format({item_name:r.props.itemName}):l._("There was a problem unstarring %(item_name)s").format({item_name:r.props.itemName}):t?l._("There was a problem starring your selection"):l._("There was a problem unstarring your selection"),u.error(a)})}},r.state=r.getStateFromStore(),r.removeStoreListener=c.StarredStore.addListener(r.onStoreUpdate),r}return r.__extends(t,e),t.prototype.componentWillUnmount=function(){this.removeStoreListener&&this.removeStoreListener()},t.prototype.componentWillReceiveProps=function(e){this.props.id===e.id&&this.props.idType===e.idType||this.setState(this.getStateFromStore(e))},t.prototype.getStateFromStore=function(e){void 0===e&&(e=this.props);var t={id:e.id,type:e.idType};return{isLoading:c.StarredStore.getIsLoading(t),isStarred:c.StarredStore.getIsStarred(t)}},t.prototype.getTooltipContent=function(){return this.state.isStarred?l._("Remove from Starred"):l._("Add to Starred")},t.prototype.render=function(){if(void 0===this.state.isStarred)return null;var e={star__toggle:!0,"star__toggle--starred":this.state.isStarred,"star__toggle--unstarred":!this.state.isStarred,"star__toggle--loading":this.state.isLoading};return o.createElement(d.TitleBubble,{content:this.getTooltipContent(),position:this.props.tooltipPosition},o.createElement("button",{className:a(e),role:"button","aria-pressed":this.state.isStarred,"aria-label":"Star",onClick:this.onClick,onDoubleClick:this.onClick},o.createElement(p.IconStar,{selected:this.state.isStarred||this.state.isLoading})))},t.displayName="Star",t.defaultProps={tooltipPosition:d.TitleBubble.POSITIONS.TOP},t})(o.PureComponent);t.Star=i(m,["/static/css/starred/star-vfl_ZnsUA.css"])}),define("modules/clean/react/starred/starred_activity_logger",["require","exports","modules/clean/react/home/api","modules/clean/react/home/starred/constants","modules/clean/react/starred/constants","modules/clean/web_user_action_logger","modules/clean/web_user_action_events"],function(e,t,r,a,o,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[o.StarredSource.HOME_STARRED,o.StarredSource.HOME_RECENTS],c=(function(){function e(){}return e.prototype.logClick=function(e,t,o,c,d){if("BROWSE"===c)return Promise.resolve();var l=[];if(n.includes(c)){var u=d?a.StarredLoggingTypes.CLICK_STAR:a.StarredLoggingTypes.CLICK_UNSTAR;l.push(r.logHomeActivity({eventName:u,role:e.role,extra:{resource_id:t,id_type:o}}))}var p=d?i.WebUserActionLogEvent.STAR:i.WebUserActionLogEvent.REMOVE_STAR;return l.push(s.WebUserActionLog.log(e.id,p,{resource_id:t,id_type:o,role:e.role,source:c})),Promise.all(l)},e})();t.StarredActivityLogger=c,t.starredActivityLogger=new c}),define("modules/clean/react/starred/store",["require","exports","tslib","external/lodash","modules/clean/flux/dispatcher","modules/clean/flux/flux_store","modules/clean/react/starred/constants","modules/clean/react/home/starred/constants","modules/clean/react/starred/id_type_pair"],function(e,t,r,a,o,s,i,n,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d=(function(e){function t(){var t=e.call(this,o.Dispatcher)||this;return t.idsToLoadingState={},t.idsToStarred={},t}return r.__extends(t,e),t.prototype.getLoadingStates=function(){return this.idsToLoadingState},t.prototype.hasIdTypePair=function(e){return this.idsToLoadingState.hasOwnProperty(c.idTypePairToString(e))},t.prototype.getLoadingState=function(e){return this.idsToLoadingState[c.idTypePairToString(e)]},t.prototype.getIsStarred=function(e){return this.idsToStarred[c.idTypePairToString(e)]},t.prototype.getAllStarredPairStrings=function(){return Object.keys(a.pickBy(this.idsToStarred,function(e){return e}))},t.prototype.getIsLoading=function(e){return this.getLoadingState(e)===i.StarredLoadingState.LOADING},t.prototype.onLoading=function(e){var t={};e.forEach(function(e){return t[c.idTypePairToString(e)]=i.StarredLoadingState.LOADING}),this.idsToLoadingState=r.__assign({},this.idsToLoadingState,t)},t.prototype.onSetStatus=function(e){void 0===e&&(e=[]);var t={},a={};e.forEach(function(e){var r=c.idTypePairToString(e.idTypePair);t[r]=i.StarredLoadingState.LOAD_SUCCESS,a[r]=e.starred}),this.idsToLoadingState=r.__assign({},this.idsToLoadingState,t),this.idsToStarred=r.__assign({},this.idsToStarred,a)},t.prototype.onLoadFailure=function(e){var t=this,a={};e.forEach(function(e){var r=c.idTypePairToString(e),o=t.idsToLoadingState[r];void 0!==o&&o!==i.StarredLoadingState.LOADING||(a[r]=i.StarredLoadingState.LOAD_FAILED)}),this.idsToLoadingState=r.__assign({},this.idsToLoadingState,a)},t.prototype.__onDispatch=function(e){var t=e.action;switch(t.type){case i.StarredActionTypes.LOADING:this.onLoading(t.idTypePairs);break;case i.StarredActionTypes.SET_STATUS:case n.StarredResourceActionTypes.LOAD_SUCCESS:this.onSetStatus(t.starredStatuses);break;case i.StarredActionTypes.LOAD_FAILURE:this.onLoadFailure(t.idTypePairs);break;default:return}this.__emitChange()},t})(s);t._StarredStoreClass=d,t.StarredStore=new d}),define("modules/clean/recent_activity/recent_activity_starred",["require","exports","external/lodash","modules/clean/react/starred/id_type_pair"],function(e,t,r,a){"use strict";function o(e){return e.resource_id&&e.id_type?{id:e.resource_id,type:e.id_type}:null}function s(e){var t={};return e.forEach(function(e){var r=o(e);r&&(t[a.idTypePairToString(r)]=r)}),r.values(t)}function i(e){return e.resourceId&&e.idType?{id:e.resourceId,type:e.idType}:null}Object.defineProperty(t,"__esModule",{value:!0}),t.getIdTypePair=o,t.getIdTypePairsByRecentActivityItems=s,t.getIdTypePairFromRecentItem=i});
//# sourceMappingURL=pkg-starred.min.js-vflFrzPDO.map