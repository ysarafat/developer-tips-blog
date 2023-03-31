import React from 'react';

const hello = () => {
    return (
        <div className='container mx-auto p-5'>
             <h1 className='text-3xl text-center py-8 font font-semibold '>Question with answer</h1>
            <hr />
            <div className='bg-[#1111110d] p-7 rounded-lg  my-5'>
                <div className=' bg-white rounded-lg p-5 my-3 text-lg font-medium'>
                <h1 className='text-2xl'>Q1 : What is the difference between props and State?</h1>
                <p className='mt-3'><b>Ans:</b> props and state are used to manage data in a component, but they serve different purposes. props are used for passing data from parent to child, while state is used for managing data within a component.
                </p>
                </div>
                
                <div className=' bg-white rounded-lg p-5 my-3 text-lg font-medium'>
                <h1 className='text-xl'>Q2 : How to work the useState() hook?</h1>
                <p className='mt-3'><b>Ans:</b> useState() hook is a built-in React hook that allows you to add state to functional components. useState() hook returns a array with two elements. first element is the current state value, and the second element is a function that can be used to update the state value.</p>
                </div>
                
                <div className=' bg-white rounded-lg p-5 my-3 text-lg font-medium'>
                <h1 className='text-2xl'>Q3 : how useEffect() is used other than loading data?</h1>
                <div className='mt-3'><b>Ans:</b> useEffect() hook in React is a multipurpose tool that can be used for a multipurpose beyond just loading data.Here are some examples:
                <ol className='list-disc px-5 pt-2'>
                    <li>Updating the document title</li>
                    <li>Handling browser events</li>
                    <li>Validating input field.</li>
                    <li>Live filtering</li>
                    <li>Trigger animation on new array value</li>
                </ol>
                </div>
                </div>
                
                <div className=' bg-white rounded-lg p-5 my-3 text-lg font-medium'>
                <h1 className='text-2xl'>Q4 : How dose react work ?</h1>
                <p className='mt-3'><b>Ans:</b> React is a most popular JavaScript library for building UI. the core of React is the concept of components. A component is a reusable piece of UI that can be composed together to create more complex UIs easily.  Components can have properties, called props, which are used to pass data from a parent component to a child component. Components can also have state, which is used to manage data that can change over time. When a react element is rendered, it returns a tree of react elements, which are basically objects that describe what should be rendered on the screen. React then takes this tree of elements and compares it to the previous tree of elements to determine what needs to be changed in the DOM. React uses a technique called virtual DOM to optimize this process. When an element's state changes, React builds a new element tree and compares it to the previous tree of elements in the virtual DOM. It then updates the ui by calculating the minimum number of changes to the actual DOM to update it to the new state.</p>
                </div>
            </div>
           
        </div>
    );
};

export default hello;