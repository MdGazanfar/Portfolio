// import React, { useState } from 'react';

// export const Contact = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [subject, setSubject] = useState("");
//     const [message, setMessage] = useState("");

//     const formSubmit = (e) => {
//         e.preventDefault();
//         console.log({name});
//         console.log({email});
//         console.log({subject});
//         console.log({message});
//     }

//     return (
//         <div className='main'>
//             <div className="coontact">Contact<span>Me</span></div>
//             <div className='c-contact'>
//                 <div>Get in Touch, Don't like the form? Send me an <span>email</span></div>
//             </div>
//             <div className="contact-content">
//                 <form>
//                     <div className="fields">
//                         <div className="field name">
//                             <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
//                         </div>
//                         <div className="field email">
//                             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//                         </div>
//                     </div>
//                     <div className="field">
//                         <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" required />
//                     </div>
//                     <div className="field textarea">
//                         <textarea cols="30" value={message} onChange={(e) => setMessage(e.target.value)} rows="10" placeholder="Message.." required></textarea>
//                     </div>
//                     <div className="button-area">
//                         <button type="submit" onClick={formSubmit}>Send message</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }
import React, { Component } from 'react'

export class Contact extends Component {
    constructor() {
        super()
        this.state = {

            Name: '',
            Email: '',
            Subject: '',
            Message: ''

        }
    }

    onChanges = (e) => {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className='main'>
                <div className="coontact">Contact<span>Me</span></div>
                <div className='c-contact'>
                    <div>Get in Touch, Don't like the form? Send me an <span>email</span></div>
                </div>
                <div className="contact-content">
                    <form>
                        <div className="fields">
                            <div className="field name">
                                <input type="text" name='Name' value={this.state.Name} onChange={this.onChanges} placeholder="Name" required />
                            </div>
                            <div className="field email">
                                <input type="email" name='Email' value={this.state.Email} onChange={this.onChanges} placeholder="Email" required />
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" name='Subject' value={this.state.Subject} onChange={this.onChanges} placeholder="Subject" required />
                        </div>
                        <div className="field textarea">
                            <textarea cols="30" name='Message' value={this.state.Message} onChange={this.onChanges} rows="10" placeholder="Message.." required></textarea>
                        </div>
                        <div className="button-area">
                            <button type="submit" onClick={this.submitForm}>Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
