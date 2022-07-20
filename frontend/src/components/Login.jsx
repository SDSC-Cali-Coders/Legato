import React from 'react';
import logo from '../assets/icon.svg';
import divider from '../assets/divider.svg';
export default function Login() {
    return (
        <>
            {/* Sectioning off page into 3 main sections */}
            <section id='title' className='p-2 bg-neutral-dark text-light'>
                <div className='d-flex align-items-center'>
                    <img src={logo} alt="" width="30" />
                    <img src={divider} alt="" width="2" className='mx-3'/>
                    <p className="Sofia_cursive fs-4 p-0">Legato</p>
                </div>
            </section>

            <section id="blurb" className='p-4 bg-neutral-light'>
            </section>

            {/* ToDo:
        - blurred background until scrolled down
        - filling out carousel with demos of our app
        */}
            <section id="demo">
            </section>
        </>
    )
}
