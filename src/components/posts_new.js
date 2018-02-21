import React, {Component} from 'react';

import {Field, reduxForm} from 'redux-form';
import {Link} from "react-router-dom";
import{connect} from 'react-redux';
import {createPost} from "../actions";


class PostsNew extends Component {
    renderField(field){
        const {input, meta: {touched, error, valid}} = field;

        // this also would have worked
        // <div className={hasDanger} with the hasDanger const being built here
        const hasDanger = `form-group ${touched && !valid ?  "has-danger" : ""}`;


        return (
            <div className={`form-group ${touched && !valid ?  "has-danger" : ""}`}>
                <label>{field.vwhLabel}</label>
                <input
                    className="form-control"
                    type="text"
                    {...input}
                />
                <div className={"text-help"}>
                    {touched ? error : ""}
                </div>
            </div>
        )
    }

    onSubmit(values){
        console.log("Inside onSubmit. The values follow:");
        console.log(values);
        // .push('/', () => {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });

    }

    render(){
        // this handleSubmit is a special prop that we get, for basically having a callback to invoke the validation
        // function. Oh, first thing, it runs the validation, AND ONLY AFTER everything is fine, if invokes our callback
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                {/*<button type={"submit"} className={"btn btn-primary"}>Cancel</button>*/}
                <Link to={"/"} className={"btn btn-danger"} >Cancel </Link>

            </form>
        )
    }
}


function validate(values){
    console.log("Inside validate in post_new.js. Values follow:");
    console.log(values);
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


// reduxForm takes our comtainer, and returns something similar, that validates before rendering
export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(


    // connect takes our component and makes it a redux-container
    connect(null, {createPost})(PostsNew)
);