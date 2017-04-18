/* @flow */

import React, {Component} from 'react';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';
import Popup from 'semantic-ui-react/dist/commonjs/modules/Popup/Popup';
import InputPopover from './InputPopover';
import autobind from 'class-autobind';

type Props = {
  icon: string;
  showPopover: boolean,
  onTogglePopover: Function,
  onSubmit: Function;
};

export default class PopoverIconButton extends Component {
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
  }

  render() {
    let {onTogglePopover, showPopover, ...props} = this.props; // eslint-disable-line no-unused-vars
    return (
      <Popup
        trigger={<Button {...props} onClick={onTogglePopover} />}
        on="click"
        flowing
        content={this._renderPopover()}
        open={this.props.showPopover}
        onClose={this._hidePopover}
        >
      </Popup>
    );
  }

  _renderPopover() {
    return (
      <InputPopover
        onSubmit={this._onSubmit}
        onCancel={this._hidePopover}
      />
    );
  }

  _onSubmit() {
    this.props.onSubmit(...arguments);
  }

  _hidePopover() {
    if (this.props.showPopover) {
      this.props.onTogglePopover(...arguments);
    }
  }
}
