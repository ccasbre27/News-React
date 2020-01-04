import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    state = {
        category: 'general'
    }

    handleChangeCategory = (e) => {
        this.setState({
            // se actualiza la categoria con el valor seleccionado del select option
            category: e.target.value
        }, () => {
            // se hace con un callback porque hay un issue 
            // pasarlo a la página principal para que actualice las noticias
            this.props.getNews(this.state.category);
        })

    }

    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Find news by category</h2>
                        <div className="input-field col s12">
                            <select
                                onChange={this.handleChangeCategory}>
                                <option value="general">General</option>
                                <option value="science">Science</option>
                                <option value="technology">Technology</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Form.propTypes = {
    getNews: PropTypes.func.isRequired
}

export default Form;