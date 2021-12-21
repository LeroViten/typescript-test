import React, { Component } from 'react';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import './TodoEditor.css';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  onSubmit: (message: string) => void;
}

interface State {
  message: string;
}

class TodoEditor extends Component<Props, State> {
  state = {
    message: '',
  };

  handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (this.state.message.trim() === '') {
      toast.error('This field cannot be empty 🤷‍♂️', {
        draggable: true,
        position: 'top-right',
      });
      return;
    }

    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <h2>Todo List App:</h2>
          <form className="TodoEditor" onSubmit={this.handleSubmit}>
            <textarea
              className="TodoEditor__textarea"
              value={this.state.message}
              onChange={this.handleChange}
            ></textarea>
            <button type="submit" className="TodoEditor__button">
              Save
            </button>
          </form>
        </div>
        <ToastContainer
          transition={Bounce}
          autoClose={4000}
          toastStyle={{ backgroundColor: '#c0c0c0' }}
        />
      </>
    );
  }
}

export default TodoEditor;
