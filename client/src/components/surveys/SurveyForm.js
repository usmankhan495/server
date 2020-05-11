import React, { Component } from 'react';
import {reduxForm,Field} from 'redux-form'
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom'
import validateEmail from '../../utils/validateEmail';
import formFields from './formFields';



class SurveyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderFields(){
    return formFields.map(({lable,name})=>{
      return (
       <Field key={name} lable={lable} type='text' name ={name} component={SurveyField} />
       )
      }
        
      
    )
  }

  render() {
    return (
      <div >
        
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}> 
          {this.renderFields()}
          <Link to='/surveys' className='red  btn-flat white-text'>
          Cancel
          </Link>
          <button type='submit' className='teal btn-flat right bottom white-text'>
            Next
            <i className="material-icons right">
            done
            </i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values){
  const error={}
  error.recipients=validateEmail(values.recipients||'');
  formFields.forEach(({name})=>{
    console.log('name :'+name);
    if(!values[name]){
      error[name]='You must provide value';
    }
  })

  
  
  return error;

}

export default reduxForm({
    validate,
    form:'surveyForm',
    destroyOnUnmount:false
})(SurveyForm);
