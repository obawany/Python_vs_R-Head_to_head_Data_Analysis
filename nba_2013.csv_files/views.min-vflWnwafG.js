define(["require","exports","external/react","external/spectrum/popover","modules/clean/react/file_action_button_type","modules/clean/react/file_viewer/more_dropdown/models","modules/clean/react/title_bar/overflow_menu"],function(e,o,t,n,r,i,c){"use strict";function p(e){return e.length&&e[0].type===n.PopoverContentSeparator?e.slice(1):e}function l(e){return t.createElement(c.PopoverOrMobileItem,{className:e.className,key:"file_action_button_type_"+e.fileActionButtonType,onSelect:e.handler},r.getFileActionButtonText(e.fileActionButtonType))}function a(e){return e instanceof i.MoreOption?[l(e)]:e.options.map(function(e){return l(e)})}function u(e){var o=[],r=i.MoreOption;return e.forEach(function(e){(e instanceof i.MoreOptionGroup||r===i.MoreOptionGroup)&&o.push(t.createElement(n.PopoverContentSeparator,null)),r=e instanceof i.MoreOption?i.MoreOption:i.MoreOptionGroup,o=o.concat(a(e))}),p(o)}Object.defineProperty(o,"__esModule",{value:!0}),o.getPopoverOrMobileItemForMoreOption=l,o.getPopoverOrMobileItemsForMoreOptions=u});
//# sourceMappingURL=views.min.js-vfl3TVqxz.map