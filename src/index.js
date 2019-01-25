import * as React from "react";

type Props = {
  onChange?: () => mixed,
  keys?: [],
  children: ([]) => mixed,
  value: []
};

class MergeValues extends React.Component<Props> {
  state = {
    value: {}
  };

  static defaultProps = {
    keys: [],
    onChange: undefined
  };

  isControlled() {
    const { value } = this.props;
    return !!value;
  }

  handleChange(key, e) {
    const val = e.target.value;
    const { onChange } = this.props;
    if (this.isControlled()) {
      const { value } = this.props;
      onChange({
        ...value,
        [key]: val
      });
    } else {
      this.setState(prevState => {
        const newValue = {
          ...prevState.value,
          [key]: val
        };
        onChange(newValue);
        return {
          value: newValue
        };
      });
    }
  }

  render() {
    const { value } = this.isControlled() ? this.props : this.state;

    const { keys, children } = this.props;

    const inputs = keys.reduce(
      (acc, key) => ({
        [key]: {
          onChange: e => this.handleChange(key, e),
          value: value[key] || "" // force child inputs to be controlled
        },
        ...acc
      }),
      {}
    );
    return children(inputs);
  }
}

export default MergeValues;
