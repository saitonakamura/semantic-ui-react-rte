/* @flow */
import React, {Component} from 'react';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input/Input';
import autobind from 'class-autobind';
// import cx from 'classnames';

type Props = {
  className?: string;
  onCancel: () => any;
  onSubmit: (value: string) => any;
};

type State = {
  value: string;
}

export default class InputPopover extends Component {
  props: Props;
  state: State = {value: ''};
  _inputRef: ?HTMLButtonElement;

  constructor() {
    super(...arguments);
    autobind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this._onDocumentKeydown);
    if (this._inputRef) {
      this._inputRef.focus();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this._onDocumentKeydown);
  }

  render() {
    let {props} = this;
    // let className = cx(props.className, styles.root);
    return (
      <div>
        <Input
          ref={this._setInputRef}
          type="text"
          placeholder="https://example.com/"
          onKeyPress={this._onInputKeyPress}
          onChange={this._onChange}
        />
        <Button.Group basic>
          <Button
            icon="remove"
            type="button"
            onClick={() => props.onCancel()}
          />
          <Button
            icon="checkmark"
            type="button"
            onClick={() => this._onSubmit()}
          />
        </Button.Group>
      </div>
    );
  }

  _setInputRef(inputElement: HTMLButtonElement) {
    this._inputRef = inputElement;
  }

  _onInputKeyPress(event: Object) {
    if (event.which === 13) {
      // Avoid submitting a <form> somewhere up the element tree.
      event.preventDefault();
      this._onSubmit();
    }
  }

  _onSubmit() {
    this.props.onSubmit(this.state.value);
  }

  _onDocumentKeydown(event: Object) {
    if (event.keyCode === 27) {
      this.props.onCancel();
    }
  }

  _onChange(event: Object, data: {value: string}) {
    this.setState({value: data.value});
  }
}
