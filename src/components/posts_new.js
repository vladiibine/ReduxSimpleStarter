import React, {Component} from 'react';

import {Field, reduxForm} from 'redux-form';


class PostsNew extends Component {
    renderField(field){
        debugger
        return (
            <div className="form-group">
                <label>{field.vwhLabel}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        )
    }

    render(){
        return (
            <form onSubmit={}>
                <Field vwhLabel="Title" name="title" component={this.renderField} />

                <Field
                    vwhLabel="Categories"
                    name="categories"
                    component={this.renderField}
                />

                <Field
                    vwhLabel="Post content"
                    name={"content"}
                    component={this.renderField}
                />

                <button type={"submit"} className={"btn btn-primary"}>Submit</button>

            </form>
        )
    }
}


function validate(values){
    debugger;
    console.log("Inside validate post_new.js. Values:" + values);
    const errors = {};

    // validate
    //...
    if(!values.title){
        errors.title = "Please enter a user name";
    }
    if(!values.categories){
        errors.categories = "Please enter a category";
    }
    if(!values.content){
        errors.content = "Content must not be empty";
    }

    return errors;
}


export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);