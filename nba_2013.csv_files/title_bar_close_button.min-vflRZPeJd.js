define(["require","exports","tslib","external/react","external/spectrum/icon_content","modules/clean/filepath","modules/clean/static_urls","modules/clean/react/size_class/constants","modules/clean/react/file_viewer/utils","modules/clean/react/image","modules/clean/react/maestro_nav/shared_code/dropbox_logo","modules/clean/react/title_bubble","modules/core/i18n","modules/core/browser"],function(e,t,l,o,r,a,s,n,i,c,u,m,_,p){"use strict";function d(e){var t=e.customLogoUrl,l=e.file,s=!0;return l&&i.isBrowseFile(l)&&l.fq_path&&(s="/"===a.parent_dir(l.fq_path)),s?o.createElement(u.DropboxLogo,{className:"react-title-bar__close--logo"}):t?o.createElement("img",{alt:_._("Logo"),src:t}):o.createElement(r.IconContent,{name:"folder-small",alt:"Dropbox"})}Object.defineProperty(t,"__esModule",{value:!0}),t.CloseButtonLogo=d;var b=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClose=function(e){e.stopPropagation(),null!=t.props.onClose&&t.props.onClose()},t}return l.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.closeTitle,l=e.customLogoUrl,r=e.file,a=e.onClose,i=e.sizeClass,u=i===n.SizeClass.Large,b=o.createElement("button",{"aria-label":t,className:"react-title-bar__close",onClick:a},o.createElement(c.Image,{alt:_._("Back"),src:s.static_url("/static/images/file_viewer/arrow_left-vflSMJAmE.png"),srcHiRes:s.static_url("/static/images/file_viewer/arrow_left@2x-vflTImUmm.png"),width:32}),u?null:o.createElement(d,{customLogoUrl:l,file:r}));return p.is_mobile_or_tablet()?b:o.createElement(m.TitleBubble,{className:"title-bar-back-tooltip",content:t,isTargetPositionFixed:!0,position:m.TitleBubble.POSITIONS.RIGHT},b)},t})(o.Component);t.CloseButton=b});
//# sourceMappingURL=title_bar_close_button.min.js-vflwic7B2.map