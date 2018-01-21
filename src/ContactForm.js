import React, { Component } from 'react';
import './App.css';

class ContactForm extends Component {
  constructor(props){
      super(props);
      this.state={
          formValues:{
            firstName: '',
            lastName: '',
            birthday: '',
            homePhone: '',
            cellPhone: '',
            email: '',
            address: '',
            notes: ''
          }
          
          
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
     
  }
  handleSubmit(event) {
    console.log({[event.target.name]:event.target.value});
    event.preventDefault();
}

    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
        console.log({[event.target.name]:event.target.value});
    }

    render() {
    return (
    <div className="ContactForm">
    <form className="form" onSubmit={this.handleSubmit}>
        <label>
        First Name
        <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}/>
        </label>
        <label>
        Last Name
        <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
        </label>
        <label>
            Birthday
        <input type="text" name="birthday" placeholder="Birthday" onChange={this.handleChange}/>
        </label>
        <label>
            Home Phone
        <input type="text" name="homePhone" placeholder="Home Phone" onChange={this.handleChange}/>
        </label>
        <label>
            Cell Phone
        <input type="text" name="cellPhone" placeholder="Cell Phone" onChange={this.handleChange}/>
        </label>
        <label>
            Email
        <input type="text" name="email" placeholder="Email" onChange={this.handleChange}/>
        </label>
        <label>
            Address
        <input type="text" name="address" placeholder="Address" onChange={this.handleChange}/>
        </label>
        {/* <label>
            Relation
        <select value={}>
            <option value="familyRelation">Family</option>
            <option value="friendRelation">Friend</option>
            <option value="workRelation">Colleague</option>
            <option value="otherRelation">Other</option>
        </select>
        </label> */}
        <label>
            Notes
        <textarea type="text" name="notes" placeholder="Additional notes" onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
    </form>
    </div>
    );
  }
}

export default ContactForm;
