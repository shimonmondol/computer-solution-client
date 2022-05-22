import React from 'react';

const Blogs = () => {
    return (
        <div className='hero min-h-screen bg-base-200 text-2xl font-bold' >
            <div>
                <div className='mt-12'>Q.1- How will you improve the performance of a React Application?
                    <h2 className='mt-6 mb-12'>Answer - React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. For many applications, using React will lead to a fast user interface without doing much work to specifically optimize for performance. Nevertheless, there are several ways you can speed up your React application.</h2>
                </div>
                <div className='mt-20'>Q.2- What are the different ways to manage a state in a React application?
                    <h2 className='mt-6'>Answer - There are four main types of state you need to properly manage in your React application.

                        <h1 className='mt-5'>1. Local state</h1>
                        <h1 className='mt-5'>2. Global state</h1>
                        <h1 className='mt-5'>3. Server state</h1>
                        <h1 className='mt-5'>4. URL state</h1>
                    </h2>
                </div>
                <div className='mt-20'>Q.3- How does prototypical inheritance work?
                    <h2 className='mt-6 mb-12'>Answer - The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the of an object, we use Object. getPrototypeOf and Object.</h2>
                </div>
                <div className='mt-20'>Q.5- You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                    <h2 className='mt-6'>Answer - four methods we can search to find products for an item in an array. These methods are:

                        <h1 className='mt-5'>1. Filter</h1>
                        <h1 className='mt-5'>2. Find</h1>
                        <h1 className='mt-5'>3. Includes</h1>
                        <h1 className='mt-5'>4. IndexOf</h1>
                    </h2>
                </div>
                <div className='mt-20'>Q.6- What is a unit test? Why should write unit tests?
                    <h2 className='mt-6 mb-12'>Answer - The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.

                        A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.</h2>
                </div>
            </div>

        </div >
    );
};

export default Blogs;