define(["require","exports","external/react","modules/clean/viewer","modules/clean/react/file_viewer/actions","modules/clean/react/file_viewer/utils","modules/clean/react/share_download/models","modules/clean/react/file_viewer/constants","modules/clean/react/title_bar/overflow_menu"],function(e,o,n,t,i,r,l,a,c){"use strict";function u(e,o,n,i){var r=e.canDownloadRoles,a=e.canCopyToDropboxRoles,c=l.ShareDownloadActionOption.buildDirectOption,u=l.ShareDownloadActionOption.buildToDropboxOption,s=[];if(i&&null===i.ns_id)return s;if(r.length>0&&s.push(c(o)),a.length>0){var d=t.Viewer.get_viewer(),p=d.get_users(!0),f=function(e,o){var t=a.indexOf(o)===-1;s.push(u(n,i,d,e,o,t))};p.forEach(function(e){f(e,e.role)}),a.indexOf("anonymous")>-1&&f(void 0,"anonymous")}return s}function s(e,o,n,t){return function(l){n&&n(),e.handler&&e.handler(),i.logUserAction(e.userAction,r.getSplitButtonUserActionContext(o,t))}}function d(e,o,t,i){return u(e,o,t,i).map(function(e){return n.createElement(c.PopoverOrMobileItem,{disabled:e.isDisabled,onSelect:s(e,a.SplitButtonActionLocation.Split)},e.text)})}Object.defineProperty(o,"__esModule",{value:!0}),o.getDownloadOptions=u,o.callOptionHandler=s,o.getDownloadOptionsAsPopoverOrMobileItems=d});
//# sourceMappingURL=util.min.js-vflw2tOxU.map