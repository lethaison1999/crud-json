import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const AddStudent = () => {
	//navigate (điều hướng trang)
	const navigate = useNavigate();
	const initialState = {
		firstname: '',
		lastname: '',
		email: '',
	};
	//apiURL
	const api = 'http://localhost:5000/students';

	const [listStudents, setListStudents] = useState(initialState);
	const { firstname, lastname, email } = listStudents;

	// handleSubmit
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!firstname || !email || !lastname) {
			toast.error('please fill all input field');
		} else {
			await axios.post(api, listStudents);
			toast.success('Add Successfully');
			setTimeout(() => {
				navigate('/');
			}, 800);
		}
	};
	// handleChange
	const handleChange = (e) => {
		setListStudents({ ...listStudents, [e.target.name]: e.target.value });
		//cach1
		// let { name, value } = e.target;
		// setListStudents({ ...listStudents, [name]: value });
	};
	return (
		<>
			<ToastContainer />
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-6 container justify-content-center card">
						<h1 className="text-center"> Create New Student </h1>
						<div className="card-body">
							<form onSubmit={(e) => handleSubmit(e)}>
								<div className="form-group">
									<label> Student First Name </label>
									<input
										type="text"
										name="firstname"
										value={firstname}
										className="form-control"
										placeholder="Enter Student First Name"
										onChange={(e) => handleChange(e)}
									/>
								</div>
								<div className="form-group">
									<label> Student Last Name </label>
									<input
										type="text"
										name="lastname"
										value={lastname}
										className="form-control"
										placeholder="Enter Student Last Name"
										onChange={(e) => handleChange(e)}
									/>
								</div>
								<div className="form-group">
									<label> Student Email </label>
									<input
										type="email"
										name="email"
										value={email}
										className="form-control"
										placeholder="Enter Student Email"
										onChange={(e) => handleChange(e)}
									/>
								</div>
								<div className="box-footer">
									<button
										style={{ width: '100%', marginTop: '10px' }}
										type="submit"
										className="btn btn-primary"
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddStudent;
