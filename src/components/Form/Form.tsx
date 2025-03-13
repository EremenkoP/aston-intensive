import React, { ChangeEvent, Component, SyntheticEvent } from "react";

interface IForm {
  inputValue: string;
  submitCount: number;
}

class Form extends Component<{}, IForm> {
  constructor(props: {}) {
    super(props);
    this.state = {
      inputValue: "",
      submitCount: 0,
    };
    console.log("Constructor");
  }

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
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    this.setState((prevState) => ({ submitCount: prevState.submitCount + 1 }));
    this.setState((prevState) => ({ submitCount: prevState.submitCount + 1 }));
    this.setState({ inputValue: "" });
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
          />
          <button type="submit">Отправить</button>
        </form>
        <p>Количество отправок: {this.state.submitCount}</p>
      </div>
    );
  }
}

export default Form;
