define(["require","exports","tslib","external/classnames","external/react","jquery","modules/clean/video_annotations_prototype/components/video_comment","modules/clean/video_annotations_prototype/store/selectors","modules/clean/video_annotations_prototype/components/video_comment_input_box","external/react-redux","modules/clean/video_annotations_prototype/store/actions","modules/clean/video_annotations_prototype/video_annotation_prototype_helper","modules/clean/video_annotations_prototype/video_preview_event_emitter","modules/clean/video_annotations_prototype/constants","modules/clean/react/css"],function(e,t,n,o,i,r,d,m,a,s,c,l,p,u,v){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var _=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={},t.beginReply=function(e){t.setState({replyToGid:e})},t.cancelReply=function(){t.setState({replyToGid:void 0})},t.handleVideoToggled=function(e,n,o){t.setState({videoLength:n})},t}return n.__extends(t,e),t.prototype.refreshWidth=function(){if(r(".video-js").length)return r(".video-js").css("width","100%")},t.prototype.componentDidMount=function(){this.refreshWidth(),p.videoPreviewEventEmitter.addListener(u.EventTypes.VIDEO_TOGGLED,this.handleVideoToggled)},t.prototype.componentWillUnmount=function(){p.videoPreviewEventEmitter.removeListener(u.EventTypes.VIDEO_TOGGLED,this.handleVideoToggled)},t.prototype.render=function(){var e=this,t={},n=o({"file-feedback":!0,"file-feedback--border":!0,"file-feedback--minimized":!1,"preview-ready":!0,hidden:!1}),r=this.props,m=r.comments,s=r.file,c=r.linkUrl,p=r.user,u=r.addComment,v=r.deleteComment,_=r.resolveComment,f=p&&p.id,y=this.state,h=y.replyToGid,C=y.videoLength;if(!s)return null;var g=l.VideoAnnotationPrototypeHelper.shouldShowSimplifiedVideoPrototype(s),E=!g&&f?function(e){return v(f,s,c,e)}:void 0,T=!g&&f?function(e){return _(f,s,c,e)}:void 0,b=void 0,V=function(e){};f&&s&&(b=function(e){return u(f,s,c,e)},V=function(e){return function(t){return u(f,s,c,t,e)}});var x=i.createElement("div",{className:"comment-card"},i.createElement("div",{className:"comment-field "},i.createElement(a.VideoCommentInputBox,{isReply:!1,addComment:b,cancelReply:this.cancelReply,user:p}))),w=this.copyAndSortCommentThreads(m);return i.createElement("div",{ref:"fileCommentsPane",className:n,tabIndex:-1,style:t},x,w.map(function(t){return[i.createElement(d.VideoCommentSubthread,{key:t.comment_gid,comment:t,deleteComment:E,resolveComment:T,replyToComment:V(t.comment_gid),beginReply:g?void 0:e.beginReply,user:p,videoLength:C}),h===t.comment_gid&&x]}))},t.prototype.copyAndSortCommentThreads=function(e){var t=e.slice();return t.sort(function(e,t){var n=e.comment_metadata.frame_time,o=t.comment_metadata.frame_time;return n<o?-1:n>o?1:t.when_created-e.when_created}),t},t})(i.Component),f=function(e){return{comments:m.getComments(e)}},y=v(_,["/static/css/video_annotation_prototype-vflN3I_1v.css"]),h=s.connect(f,{addComment:c.addComment,deleteComment:c.deleteComment,resolveComment:c.resolveComment})(y);t.VideoAnnotationsPane=h});
//# sourceMappingURL=video_annotations_pane.min.js-vflKiFO_E.map