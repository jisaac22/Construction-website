import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import { useMutation } from '@apollo/client';
// import { ADD_WORKER } from '../utils/mutations';
// import Auth from '../utils/auth'

const Signup = () => {
  // const [formState, setFormState] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   skills: [],
  //   phoneNumber: '',
  //   hourlyRate: '',
  // });
  // const [addWorker, { error, data }] = useMutation(ADD_WORKER);

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(formState);

  //   try {
  //     const { data } = await addWorker({
  //       variables: { ...formState },
  //     });

  //     Auth.login(data.addWorker.token);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <main className="">
      <div className="signupForm">
        <div className="">
          <h2 className="">Sign Up</h2>
          <div className="">
            {/* {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}> */}
              <form>
                <div>
                <p>Please enter full name</p>
                <input
                  className="form-input"
                  placeholder="Your full name"
                  name="fullname"
                  type="text"
                  // value={formState.name}
                  // onChange={handleChange}
                />
                </div>
                <div>
                  <p>Email:</p>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  // value={formState.email}
                  // onChange={handleChange}
                />
                </div>
                <div>
                  <p>Password</p>
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  // value={formState.password}
                  // onChange={handleChange}
                />
                </div>
                <div>
                  <p>What Skills do you have?</p>
                <input
                  className="form-input"
                  placeholder="Your Skills"
                  name="skills"
                  type="text"
                  // value={formState.skills}
                  // onChange={handleChange}
                />
                </div>
                <div>
                  <p>Enter a good contact number</p>
                <input
                  className="form-input"
                  placeholder="Your Phone Number"
                  name="phoneNumber"
                  type="text"
                  // value={formState.phoneNumber}
                  // onChange={handleChange}
                />
                </div>
                <div>
                  <p>What is your labor hourly rate?</p>
                <input
                  className="form-input"
                  placeholder="Your Hourly Rate $"
                  name="hourlyRate"
                  type="text"
                  // value={formState.hourlyRate}
                  // onChange={handleChange}
                />
                </div>
                <button
                  className="submit"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            {/* )} */}

            {/* {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message} */}
              {/* </div>
            )} */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;