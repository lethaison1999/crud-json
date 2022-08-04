import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/pages/PageNotFound';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbars from './components/layout/Navbars';
import AddStudent from './components/layout/ListStudent/AddStudent';
import UpdateStudent from './components/layout/ListStudent/UpdateStudent';

const App = () => {
	return (
		<Router>
			<div className="App">
				<Navbars />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/student/add" element={<AddStudent />} />
					<Route path="/student/update/:id" element={<UpdateStudent />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
