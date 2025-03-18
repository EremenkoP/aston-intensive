import React, {
  ChangeEvent,
  Component,
  createRef,
  SyntheticEvent,
} from "react";

interface IForm {
  inputValue: string;
  submitCount: number;
  isDisabled: boolean;
}

class Form extends Component<{}, IForm, { inputRef: any }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      inputValue: "",
      submitCount: 0,
      isDisabled: false,
    };
    console.log("Constructor");
  }

  checkingValue = "React";
  private inputRef = createRef<HTMLInputElement>()

  componentDidMount() {
    console.log("componentDidMount - компонент примонтирован");
  }

  componentDidUpdate(prevProps: {}, prevState: IForm) {
    console.log("componentDidUpdate - компонент обновился");
    console.log("Предыдущее состояние:", prevState);
    console.log("Текущее состояние:", this.state);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount - компонент будет размонтирован");
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({
      inputValue: value,
      isDisabled: value === this.checkingValue,
    });
  };

  handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    this.setState((prevState) => ({ submitCount: prevState.submitCount + 1 }));
    this.setState({ inputValue: "" });
  };

  focusEvent = (event: SyntheticEvent) => {
      this.inputRef.current?.focus()
  };

  render() {
    console.log("Render - рендер компонента");
    return (
      <div>
        <h1>Форма с инпутом</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            ref={this.inputRef}
          />
          <button type="submit" disabled={this.state.isDisabled}>
            Отправить
          </button>
          <button type="button" onClick={this.focusEvent}>
            Фокус на инпут
          </button>
          {this.state.inputValue !== this.checkingValue && (
            <label>Можно отправлять</label>
          )}
        </form>
        <p>Количество отправок: {this.state.submitCount}</p>
      </div>
    );
  }
}

export default Form;
