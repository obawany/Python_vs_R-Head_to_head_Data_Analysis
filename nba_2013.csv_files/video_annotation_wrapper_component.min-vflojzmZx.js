define(["require","exports","tslib","external/react","modules/clean/react/css","modules/clean/video_annotations_prototype/components/video_annotations_pane","modules/clean/video_annotations_prototype/events","modules/clean/video_annotations_prototype/components/video_annotations_fetch_controller"],function(e,n,t,o,a,i,r,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l=(function(n){function a(t){var o=n.call(this,t)||this;return o.state={paneContainerLoaded:e.defined("modules/clean/video_annotations_prototype/video_annotation_pane_container")},o}return t.__extends(a,n),a.prototype.componentWillMount=function(){r.VideoAnnotationsEvents.emit("file_is_video_audio")},a.prototype.componentDidMount=function(){var n=this;this.state.paneContainerLoaded||e(["modules/clean/video_annotations_prototype/video_annotation_pane_container"],function(){n.setState({paneContainerLoaded:!0})})},a.prototype.render=function(){var e=this.state.paneContainerLoaded,n=this.props,t=n.currentFile,a=n.user,r=n.sharedLinkInfo,l=r?r.url:null;return e?o.createElement("div",{className:"react-file-viewer__activity"},o.createElement(i.VideoAnnotationsPane,{user:a,file:t,linkUrl:l}),o.createElement(s.VideoAnnotationsFetchController,{user:a,file:t,linkUrl:l})):o.createElement("div",null)},a})(o.Component),c=["/static/css/video_annotation_prototype-vflN3I_1v.css","/static/css/file_comments_pane-vflMEOpSG.css"],d=a(l,c);n.VideoAnnotationWrapperComponent=d});
//# sourceMappingURL=video_annotation_wrapper_component.min.js-vflwm6bEG.map