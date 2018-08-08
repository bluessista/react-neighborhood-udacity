import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="page">
          <h1>Contact</h1>
          <form action="mailto:inga@bluessita.com">
            <ul className="flex-form">
              <li>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" placeholder="Name" id="name"/>
              </li>
              <li>
                <label htmlFor="email">Mail: </label>
                <input type="email" name="email" placeholder="E-Mail" id="email"/>
              </li>
              <li>
                <label htmlFor="message">Message:</label>
                <textarea rows="6" id="message" placeholder="Enter your message here"></textarea>
              </li>
              <li>
                <button type="submit">Submit</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;
