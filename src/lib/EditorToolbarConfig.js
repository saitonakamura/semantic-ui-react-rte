/* @flow */

export type StyleConfig = {
  label: string;
  style: string;
  className?: string;
  icon?: string;
};

export type StyleConfigList = Array<StyleConfig>;

export type GroupName = 'INLINE_STYLE_BUTTONS' | 'BLOCK_TYPE_BUTTONS' | 'LINK_BUTTONS' | 'BLOCK_TYPE_DROPDOWN' | 'HISTORY_BUTTONS';

export type ToolbarConfig = {
  display: Array<GroupName>;
  INLINE_STYLE_BUTTONS: StyleConfigList;
  BLOCK_TYPE_DROPDOWN: StyleConfigList;
  BLOCK_TYPE_BUTTONS: StyleConfigList;
};

export const INLINE_STYLE_BUTTONS: StyleConfigList = [
  {label: 'Bold', style: 'BOLD', icon: 'bold'},
  {label: 'Italic', style: 'ITALIC', icon: 'italic'},
  {label: 'Strikethrough', style: 'STRIKETHROUGH', icon: 'strikethrough'},
  {label: 'Monospace', style: 'CODE', icon: 'code'},
  {label: 'Underline', style: 'UNDERLINE', icon: 'underline'},
];

export const BLOCK_TYPE_DROPDOWN: StyleConfigList = [
  {label: 'Normal', style: 'unstyled'},
  {label: 'Heading Large', style: 'header-one'},
  {label: 'Heading Medium', style: 'header-two'},
  {label: 'Heading Small', style: 'header-three'},
  {label: 'Code Block', style: 'code-block'},
];
export const BLOCK_TYPE_BUTTONS: StyleConfigList = [
  {label: 'UL', style: 'unordered-list-item', icon: 'unordered list'},
  {label: 'OL', style: 'ordered-list-item', icon: 'ordered list'},
  {label: 'Blockquote', style: 'blockquote', icon: 'quote right'},
];

let EditorToolbarConfig: ToolbarConfig = {
  display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
  INLINE_STYLE_BUTTONS,
  BLOCK_TYPE_DROPDOWN,
  BLOCK_TYPE_BUTTONS,
};

export default EditorToolbarConfig;
