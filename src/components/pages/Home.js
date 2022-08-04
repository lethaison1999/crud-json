import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';

//api
const api = 'http://localhost:5000/students';

const Home = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		loadUsers();
	}, []);

	//handle loadUsers
	const loadUsers = async () => {
		const response = await axios.get(api);
		setData(response.data);
	};
	//handle delete
	const deleteStudent = async (id) => {
		await axios.delete(`${api}/${id}`);
		loadUsers();
	};
	return (
		<>
			<div className="container">
				<div className="row">
					<h1> List Students </h1>
				</div>
				<div className="row">
					<div className="col-lg-3">
						<NavLink
							to="/student/add"
							className="btn btn-primary btn-sm mb-3  "
						>
							Add Student
						</NavLink>
					</div>
				</div>
				<table className="table table-striped table-bordered">
					<thead className="table-dark">
						<tr>
							<th> Student First Name</th>
							<th> Student Last Name</th>
							<th> Student Email </th>
							<th> Actions </th>
						</tr>
					</thead>
					{data &&
						data.map((item, index) => {
							return (
								<>
									<tbody key={index}>
										<tr>
											<td>{item.firstname}</td>
											<td>{item.lastname}</td>
											<td>{item.email}</td>
											<td>
												<Link
													to={`/student/update/${item.id}`}
													className="btn btn-primary m-2"
												>
													Update
												</Link>
												<Link
													to="/"
													className="btn btn-danger m-2"
													onClick={() => deleteStudent(item.id)}
												>
													Delete
												</Link>
											</td>
										</tr>
									</tbody>
								</>
							);
						})}
				</table>
			</div>
		</>
	);
};

export default Home;
