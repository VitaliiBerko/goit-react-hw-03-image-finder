import { Component } from "react"
import PropTypes from 'prop-types';
import s from "../styles.module.css"


export class Searchbar extends Component  {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    state = {
        search: "",
    }
    handlerChange = e => {
        const { value } = e.currentTarget;
        this.setState({search: value})
}

    handlerOnSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        this.resetForm();
    }



    resetForm = () => {
        this.setState({ search: ""})
    }

    render() {
        const { search } = this.state;
        return (
            <header className={s.searchbar}>
                <form onSubmit={this.handlerOnSubmit} className={s.form}>
                    <button type="submit" className={s.button}>
                        <span className={s.button__label}>Search</span>
                    </button>

                    <input
                        onChange={this.handlerChange}
                        value={search}
                        className={s.input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}