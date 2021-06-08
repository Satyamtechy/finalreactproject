import React from 'react' 
import './App.css';
import Index from './components/Index'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import CourseCard from './components/CourseCard';
import IndexNavbar from './components/IndexNavbar';
import IndexFooter from './components/IndexFooter';
import CourseIntro from './components/CourseIntro';
import CourseIntro1 from './components/CourseIntro1';
import CourseIntro2 from './components/CourseIntro2';
import CourseIntro3 from './components/CourseIntro3';
import CourseIntro4 from './components/CourseIntro4';
import CourseList from './components/CourseList';
import CoursePath from './components/CoursePath';
import CoursePathLevel from './components/CoursePathLevel';
import CoursePathLevel1 from './components/CoursePathLevel1';
import CoursePathLevel2 from './components/CoursePathLevel2';
import CoursePathLevel3 from './components/CoursePathLevel3';
import Courses from './components/Courses';
import Blog1 from './components/Blog1';
import Blog2 from './components/Blog2';
import Blogcard from './components/Blogcard';
import Blogsingle from './components/Blogsingle';
import Book from './components/Book';
import BookDescription from './components/BookDescription';
import Campus from './components/Campus';
import CampusSuccess from './components/CampusSuccess';
import Colors from './components/Colors';
import Community from './components/Community';
import ConfirmationPage from './components/ConfirmationPage';
import CourseResume from './components/CourseResume';
import Cover from './components/Cover';
import FormLogin from './components/FormLogin';
import Home from './components/Home';
import Grid from './components/Grid';
import FormModernLogin from './components/FormModernLogin';
import Indexs from './components/Indexs';
import Intern from './components/Intern';
import Inverse from './components/Inverse';
import Job from './components/Job';
import PageComponents from './components/PageComponents';
import PageContact from './components/PageContact';
import PageElements from './components/PageElements';
import PageIcons from './components/PageIcons';
import PageLogin from './components/PageLogin';
import PagePrivecy from './components/PagePrivecy';
import Pageprivacy from './components/Pageprivacy';
import Pagepricing from './components/Pagepricing';
import Pageregister from './components/Pageregister';
import PageSimpleLogin from './components/PageSimpleLogin';
import Pagesimpleregister from './components/Pagesimpleregister';
import PagesTerms from './components/PagesTerms';
import Pageterm from './components/Pageterm';
import Profile1 from './components/Profile1';
import ProfileEdit from './components/ProfileEdit';
import Dashboard from './components/Dashboard';
import Demoregistration from './components/Demoregistration';
import Developmentelements from './components/Developmentelements';
import Developmenticons from './components/Developmenticons';
import Dropdown from './components/Dropdown';
import Tabs from './components/Tabs';
import Takecourse from './components/Takecourse';
import Transition from './components/Transition';
import Userprofile from './components/Userprofile';
import Userprofile1 from './components/Userprofile1';
import Userprofileedit from './components/Userprofileedit';
import Utility from './components/Utility';
import Wishlist from './components/Wishlist';
import Slider from './components/Slider';
import Slideshow from './components/Slideshow';
import Specialitycommingsoon from './components/Specialitycommingsoon';

function App() {

  return (
    <div>
     <Router>
     <IndexNavbar />
        <Switch>
        <Route path="/slider">
          <Slider />
        </Route>
        <Route path="/slideshow">
          <Slideshow />
        </Route>
        <Route path="/speciality-comming-soon">
          <Specialitycommingsoon />
        </Route>
        <Route path="/blog1">
            <Blog1 />
          </Route>
        <Route path="/blog2">
            <Blog2 />
          </Route>
        <Route path="/blog-card">
            <Blogcard />
          </Route>
        <Route path="/blog-single">
            <Blogsingle />
          </Route>
          <Route path="/book">
            <Book />
          </Route>
          <Route path="/book-description">
            <BookDescription />
          </Route>
          <Route path="/campus">
            <Campus />  
          </Route>
          <Route path="/campus_success">
            <CampusSuccess />
          </Route>
          <Route path="/colors">
            <Colors />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/confirmation-page">
            <ConfirmationPage />
          </Route>
          <Route path="/course-resume">
            <CourseResume />
          </Route>
          <Route path="/cover">
            <Cover />
          </Route>
          <Route path="/form-login">
            <FormLogin />
          </Route>
          <Route path="/form-modern-login">
            <FormModernLogin />
          </Route>
          <Route path="/grid">
            <Grid />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/indexs">
            <Indexs />
          </Route>
          <Route path="/intern">
            <Intern />
          </Route>
          <Route path="/inverse">
            <Inverse />
          </Route>
          <Route path="/job">
            <Job />
          </Route>
          <Route path="/Page-components">
            <PageComponents />
          </Route>
          <Route path="/page-contact">
            <PageContact />
          </Route>
          <Route path="/page-elements">
            <PageElements />
          </Route>
          <Route path="/page-icons">
            <PageIcons />
          </Route>
          <Route path="/page-login">
            <PageLogin />
          </Route>
          <Route path="/page-pricing">
            <Pagepricing />
          </Route>
          <Route path="/page-Privacy">
            <Pageprivacy />
          </Route>
          <Route path="/page-previcy">
            <PagePrivecy />
          </Route>
          <Route path="/page-register">
            <Pageregister />
          </Route>
          <Route path="/page-simple-login">
            <PageSimpleLogin />
          </Route>
          <Route path="/page-simple-register">
            <Pagesimpleregister />
          </Route>
          <Route path="/page-term">
            <Pageterm />
          </Route>
          <Route path="/pages-terms">
            <PagesTerms />
          </Route>
          <Route path="/profile-1">
            <Profile1 />
          </Route>
          <Route path="/profile-edit">
            <ProfileEdit />
          </Route>
          <Route path="/courses">
              <Courses />
            </Route>
          <Route path="/course-path-level">
              <CoursePathLevel />
          </Route>
          <Route path="/course-path-level1">
              <CoursePathLevel1 />
          </Route>
          <Route path="/course-path-level2">
              <CoursePathLevel2 />
          </Route>
          <Route path="/course-path-level3">
              <CoursePathLevel3 />
          </Route>
          <Route path="/course-path">
              <CoursePath />
            </Route>
          <Route path="/course-list">
              <CourseList />
            </Route>
          <Route path="/course-intro">
              <CourseIntro />
            </Route>
            <Route path="/course-intro1">
              <CourseIntro1 />
            </Route>
            <Route path="/course-intro2">
              <CourseIntro2 />
            </Route>
            <Route path="/course-intro3">
              <CourseIntro3 />
            </Route>
            <Route path="/course-intro4">
              <CourseIntro4 />
            </Route>
            <Route path="/course-card">
              <CourseCard />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/demo-registeration">
              <Demoregistration />
            </Route>
            <Route path="/development-elements">
              <Developmentelements />
            </Route>
            <Route path="/development-icons">
              <Developmenticons />
            </Route>
            <Route path="/dropdown">
              <Dropdown />
            </Route>
            <Route path="/tabs">
              <Tabs />
            </Route>
            <Route path="/takecourse">
              <Takecourse />
            </Route>
            <Route path="/transition">
              <Transition />
            </Route>
            <Route path="/userprofile">
              <Userprofile />
            </Route>
            <Route path="/userprofile1">
              <Userprofile1 />
            </Route>
            <Route path="/userprofile-edit">
              <Userprofileedit />
            </Route>
            <Route path="/utility">
              <Utility />
            </Route>
            <Route path="/wishlist">
              <Wishlist />
            </Route>
            <Route path="/">
              <Index />
            </Route>
        </Switch>
        <IndexFooter />
      </Router>
    </div>
  );
}

export default App;
