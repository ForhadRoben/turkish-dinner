import React from 'react';
import ReactToPdf from 'react-to-pdf';


const ref = React.createRef();

const Blogs = () => {

    return (
        <div>

            <ReactToPdf targetRef={ref} filename="download.pdf">
                {({ toPdf }) => (
                    <button onClick={toPdf}>Generate pdf</button>
                )}
            </ReactToPdf>
            <div style={{ width: '100%', height: '100%' }} ref={ref} >
                <section className='container-fluid'>
                    <div className='container-fluid'>
                        <h4 className='fw-semibold p-3'>What are the differences between Controlled and Uncontrolled Components in React JS?</h4>
                        <p className='fw-semibold'>
                            In a controlled component, form data is handled by a React component. Whereas in uncontrolled components, form data is handled by the DOM itself.
                            Usage of Component State is a must for controlled components. Use of state is completely optional for uncontrolled components, but one must use Refs in it.
                            With controlled components, we can validate as the input is being changed but the same is not possible with uncontrolled components.
                        </p>
                    </div>
                    <div>
                        <h4 className='fw-semibold p-3'>How to validate React props using PropTypes ?</h4>
                        <p className='fw-semibold'>
                            PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype. This makes sure that we don’t receive an error at the very end of our app by the console which might not be easy to deal with.In latest react installation,we have to write this command in the cmd: npm install prop-types --save
                            Now if we want to use propTypes in our app, we have to import with this code: import PropTypes from 'prop-types';
                            React Props Validators: The most basic way we can check a prop's type is by checking if it falls under the category of primitive types in JavaScript, such as a boolean, string, object, and so on.


                            String :PropType.string,

                            Object :PropType.object,

                            Array :PropTypes.array,

                            Number :PropType.number,

                            Boolean :PropType.bool,

                            Function: PropType.func,

                            Symbol :PropType.symbol.
                        </p>
                    </div>
                    <div>
                        <h4 className='fw-semibold p-3'>What are the differences between Node.js and Express.js ?</h4>
                        <p className='fw-semibold'>
                            Node.js: It is used to build server-side, input-output, event-driven apps.It is built on Google’s V8 engine.Run-time platform or environment designed for server-side execution of JavaScript.It requires more coding time.
                            Express.js:It is used to build web-apps using approaches and principles of Node.js.It is built on Node.js.Framework based on Node.js and requires less coding time.
                        </p>
                    </div>
                    <div>
                        <h4 className='fw-semibold p-3'>What is a custom hook, and why will you create a custom hook?</h4>
                        <p className='fw-semibold'>
                            Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows us to reuse some piece of code in several parts of our app.

                            Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.When we have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.Custom Hooks start with "use". Example: useFetch.

                        </p>
                    </div>
                </section>
            </div>

        </div >
    );
};

export default Blogs;