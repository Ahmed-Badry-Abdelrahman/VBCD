
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import AboutPage from './pages/about/AboutPage';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import FindADoctor from './pages/find-a-doctor/FindADoctor';
import ErrorPage from './pages/errorPage/Error';
import DoctorInformation from './pages/Doctor-info/DoctorInformation';
import AskDoctor from './pages/questions/AskDoctor';
import PatientVisitorDS from './pages/Patient-Visitor-DS/PatientVisitorDS';
import Store from './pages/Store/Store';
import Stories from './pages/StoryList/Stories';
import Details from './pages/story-details/Details';
import ProfilePage from './pages/profile/Profile_page';
import AiModel from './pages/Up-rumor/up-rumor';
import LoginPage from './pages/login/Login_Page';
const App = () => {
    return (
        <Router>
            <main>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />


                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/find-a-doctor" element={<FindADoctor />} />
                    <Route path="/doctor-information/:id" element={<DoctorInformation />} />
                    <Route path="/ask-doctor" element={<AskDoctor />} />
                    <Route path="/patient-visitor-ds" element={<PatientVisitorDS />} />
                    <Route path="/xray-results" element={<Store />} />
                    <Route path="/stories" element={<Stories />} />
                    <Route path="/story/:id" element={<Details />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path='/up-rumor' element={<AiModel />}/>   
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
