import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

//api
const api = 'http://localhost:5000/students';

const UpdateStudent = () => {
	//navigate
	const navigate = useNavigate();
	//use params lấy id
	const { id } = useParams();

	// console.log(id);
	const initialState = {
		firstname: '',
		lastname: '',
		email: '',
	};
	const [listStudents, setListStudents] = useState(initialState);
	const { firstname, lastname, email } = listStudents;

	//handle onChange
	const handleChange = (e) => {
		setListStudents({ ...listStudents, [e.target.name]: e.target.value });
		// let { name, value } = e.target;
		// setListStudents({ ...listStudents, [name]: value });
	};
	//handle useEffect
	useEffect(() => {
		loadStudent();
	}, []);

	//handle onSubmit
	const handleSubmit = async (e) => {
		e.preventDefault();
		await axios.put(`${api}/${id}`, listStudents);
		toast.success('Update Successfully');
		setTimeout(() => {
			navigate('/');
		}, 1000);
	};
	// handleloadStudent()
	const loadStudent = async () => {
		const response = await axios.get(`${api}/${id}`);
		setListStudents(response.data);
	};

	return (
		<>
			<ToastContainer />
			<div className="container mt-2">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-6 container justify-content-center card">
						<h1 className="text-center"> Update Student </h1>
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
										type="text"
										name="email"
										value={email}
										className="form-control"
										placeholder="Enter Student Email"
										onChange={(e) => handleChange(e)}
									/>
								</div>
								<div className="box-footer">
									<button
										type="submit"
										className="btn btn-primary"
										style={{ width: '100%', marginTop: '10px' }}
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

export default UpdateStudent;
