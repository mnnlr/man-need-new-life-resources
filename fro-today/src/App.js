import { useEffect, useState } from "react";
import axios from "axios";
import { lazy } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute";
import { getAllUsers } from "./components/redux/action/userAction";
import "./App.css";
import Footer from "./components/Footer";

// import { createVisitor } from  "./components/redux/action/visitorAction";
const Portfolio = lazy(() => import("./Pages/Portfolio"));
const PageLayOut = lazy(() => import("./Pages/PageLayOut"));

const Static1 = lazy(() => import("./components/static/Static1"));
const Static2 = lazy(() => import("./components/static/Static2"));
const Static3 = lazy(() => import("./components/static/Static3"));

//Static part

//Responsive part

const Responsive1 = lazy(() => import("./components/responsive/Responsive1"));
const Responsive2 = lazy(() => import("./components/responsive/Responsive2"));
const Responsive3 = lazy(() => import("./components/responsive/Responsive3"));

//Dynamic part

const Dynamic1 = lazy(() => import("./components/dynamic/Dynamic1"));
const Dynamic2 = lazy(() => import("./components/dynamic/Dynamic2"));
const Dynamic3 = lazy(() => import("./components/dynamic/Dynamic3"));

const ContectUs = lazy(() => import("./Pages/ContectUs"));

const Services = lazy(() => import("./Pages/Services"));
const Aboutus = lazy(() => import("./Pages/Aboutus"));
const Notauthorosed = lazy(() => import("./components/Notauthorosed"));

const Home = lazy(() => import("./Pages/Home"));

const EmployeeForm = lazy(() => import("./components/EmployeeForm"));
const HeroSection = lazy(() => import("./components/Hero_Section"));
const KeyTeemMembers = lazy(() => import("./Pages/KeyTeemMembers"));
const SatisfiedClients = lazy(() => import("./components/SatisfiedClients"));
const CompanyMembers = lazy(() => import("./Pages/CompanyMembers"));
const WebsiteDesign = lazy(() => import("./Pages/WebsiteDesign"));
const WebsiteDevelopment = lazy(() => import("./Pages/WebsiteDevelopement"));

const UIUXDesign = lazy(() => import("./Pages/UIUXDesign"));
const EcommerceSolutions = lazy(() => import("./Pages/EcommerceSolutions"));
const Items = lazy(() => import("./components/Items"));
const GeneralSettings = lazy(() => import("./Pages/GeneralSettings"));

const SecutitySettings = lazy(() => import("./Pages/SecuritySettings"));

// import PreferencesSettings from "./Pages/Preferences";
const CarouselContainer = lazy(() => import("./components/CarouselContainer"));
const BestProjects = lazy(() =>
  import("./components/portfolio-projects/BestProjects")
);
const ProjectForm = lazy(() => import("./components/ProjectForm"));
const PortfolioForm = lazy(() => import("./components/PortfolioForm"));
const FullPortfolio = lazy(() =>
  import("./components/portfolio-projects/FullPortfolio")
);
const PortfolioDetails = lazy(() => import("./components/PortfolioDetails"));
const Testimonials = lazy(() =>
  import("./components/testimonial/Testimonials")
);
const Company = lazy(() => import("./components/Company"));
const FormComponent = lazy(() => import("./components/FormComponent"));
const ClientForm = lazy(() => import("./components/ClientForm"));
const Barcharts = lazy(() => import("./Pages/charts/barcharts"));
const Linecharts = lazy(() => import("./Pages/charts/linecharts"));
const PieCharts = lazy(() => import("./Pages/charts/piecharts"));
const Dashboard = lazy(() => import("./Pages/dashboard"));

const EmployeeDetailForm = lazy(() => import("./Pages/EmployeeDetailForm"));
const EmployeeCard = lazy(() => import("./components/EmployeeCard"));
const EmployeeDetails = lazy(() => import("./components/EmployeeDetails"));

const UserLogin = lazy(() => import("./Pages/UserLogin"));
const AllEmployee = lazy(() => import("./components/AllEmployee"));

const WebsitePage = lazy(() => import("./Pages/websitePage"));
const WebsiteDesignContainer = lazy(() =>
  import("./Pages/WebsiteDesignContainer")
);

const Login = lazy(() => import("./Pages/Login"));

const PagePrototype = lazy(() =>
  import("./Pages/dashboard-page/PaagePrototype")
);
// const Project = './components/dashboard-component/Project'))
// const Login = './Pages/dashboard-page/Login'))

const Settings = lazy(() => import("./Pages/dashboard-page/Settings"));
const General = lazy(() => import("./Pages/dashboard-page/General"));
const Security = lazy(() => import("./Pages/dashboard-page/Security"));
const PreferencesContainer = lazy(() =>
  import("./Pages/dashboard-page/PreferencesContainer")
);
const Analytics = lazy(() => import("./Pages/dashboard-page/Analytics"));
const DashboardContainer = lazy(() =>
  import("./Pages/dashboard-page/DashboardContainer")
);
const Report = lazy(() => import("./Pages/dashboard-page/Report "));
const ConversionTrack = lazy(() =>
  import("./Pages/dashboard-page/ConversionTrack")
);
const ConfigutreRole = lazy(() =>
  import("./Pages/dashboard-page/ConfigureRole")
);
const HR = lazy(() => import("./Pages/dashboard-page/HR"));
const AttendanceLog = lazy(() =>
  import("./Pages/dashboard-page/AttendanceLog")
);
const Attendance = lazy(() => import("./Pages/dashboard-page/Attandance"));
const TrackLeave = lazy(() => import("./Pages/dashboard-page/TrackLeave"));
const Holidays = lazy(() => import("./Pages/dashboard-page/Holidays"));
const Noticeboard = lazy(() => import("./Pages/dashboard-page/Noticeboard"));
const ApplyLeave = lazy(() => import("./Pages/dashboard-page/ApplyLeave"));
const ApproveLeave = lazy(() => import("./Pages/dashboard-page/ApproveLeave"));
const Employee = lazy(() => import("./Pages/dashboard-page/Employee"));
const CraeteTeam = lazy(() => import("./Pages/dashboard-page/CreateTeam"));
const Shifts = lazy(() => import("./Pages/dashboard-page/Shifts"));

function App() {
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [services, setServices] = useState(false);
  const [portfolio, setProtfolio] = useState(false);
  const [contact, setContact] = useState(false);
  const [allEmployees, setAllEmployee] = useState(false);

  // const [ipData, setIpData] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   getuip();
  //   dispatch(
  //     createVisitor(ipData.ip, ipData.city, ipData.region, ipData.country_name)
  //   );
  // }, [dispatch, ipData]);

  // const getuip = async () => {
  //   const ip = await axios.get("https://ipapi.co/json");
  //   console.log(ip.data);
  //   setIpData(ip.data);
  // };

  const { allUsers } = useSelector((state) => state.allUsers);
  console.log(allUsers);

  console.log(allUsers);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div>
      {/* <WebsiteDesignContainer /> */}

      <Routes>
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="/login" element={<Login />} />

        <Route
          element={
            <PageLayOut
              home={home}
              about={about}
              services={services}
              portfolio={portfolio}
              contact={contact}
              allEmployees={allEmployees}
            />
          }
        >
          <Route index="/" element={<Home fun={setHome} />} />
          <Route path="static1" element={<Static1 />} />
          <Route path="static2" element={<Static2 />} />
          <Route path="static3" element={<Static3 />} />
          <Route path="responsive1" element={<Responsive1 />} />
          <Route path="responsive2" element={<Responsive2 />} />
          <Route path="responsive3" element={<Responsive3 />} />
          <Route path="dynamic1" element={<Dynamic1 />} />
          <Route path="dynamic2" element={<Dynamic2 />} />
          <Route path="dynamic3" element={<Dynamic3 />} />
          <Route path="about" element={<Aboutus fun={setAbout} />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="settings/general" element={<GeneralSettings />} />
          <Route path="settings/security" element={<SecutitySettings />} />
          {/* <Route path="settings/preferences" element={<PreferencesSettings />} /> */}
          <Route
            path="portfolio/home"
            element={<CarouselContainer fun={setProtfolio} />}
          />
          <Route path="portfolio/best-projects" element={<BestProjects />} />
          <Route path="full-portfolio" element={<FullPortfolio />} />
          <Route path="portfolio-details/:id" element={<PortfolioDetails />} />
          <Route path="project-form-data" element={<ProjectForm />} />
          <Route path="portfolio-form-data" element={<PortfolioForm />} />
          {/* Testimonial section */}
          <Route path="/testimonial/home" element={<Testimonials />} />
          <Route path="company-details/:id" element={<Company />} />
          <Route
            path="testimonial/home/form-data"
            element={<FormComponent />}
          />
          <Route
            path="testimonial/home/form-data/form-data-client"
            element={<ClientForm />}
          />

          {/* //employee form details */}
          <Route path="employee-form" element={<EmployeeDetailForm />} />
          <Route path="employees" element={<EmployeeCard />} />
          <Route path="employee-details/:id" element={<EmployeeDetails />} />

          <Route path="login/employee" element={<UserLogin />} />
          <Route
            path="all-employees"
            element={<AllEmployee fun={setAllEmployee} />}
          />

          {/* //chart data */}
          <Route path="/admin/chart/bar" element={<Barcharts />} />
          <Route path="/admin/chart/pie" element={<PieCharts />} />
          <Route path="/admin/chart/line" element={<Linecharts />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* //-------------------------------------------------------------- */}
          <Route path="services" element={<Services fun={setServices} />} />
          <Route path="website-design" element={<WebsiteDesign />} />
          <Route path="/websitePage/:id" element={<WebsitePage />} />
          <Route path="website-development" element={<WebsiteDevelopment />} />
          <Route
            path="wesite-design-form"
            element={<WebsiteDesignContainer />}
          />
          <Route path="ui-ux-design" element={<UIUXDesign />} />
          <Route path="ecommerce-solutions" element={<EcommerceSolutions />} />
          <Route path="portfolio/home" element={<Items fun={setProtfolio} />} />
          {/* //-------------------------------------------------------------- */}
          {/* //-------------------------------New One-------------------------------- */}
          <Route path="addEmployee" element={<EmployeeForm />} />
          <Route path="employees" element={<KeyTeemMembers />} />
          <Route path="heroSection" element={<HeroSection />} />
          <Route path="addClient" element={<SatisfiedClients />} />
          <Route path="herosection" element={<HeroSection />} />
          <Route path="client" element={<CompanyMembers />} />
          {/* //------------------------------------------------------------------------ */}

          <Route path="notauthorised" element={<Notauthorosed />} />

          {/* <Route element={<ProtectedRoute allowedRole={["admin", "hr"]} />}> */}
          <Route path="contact" element={<ContectUs fun={setContact} />} />
          {/* </Route> */}
        </Route>

        {/* //dashboard section */}
        <Route element={<PagePrototype />}>
          <Route
            element={<ProtectedRoute allowedRole={["admin", "employee"]} />}
          >
            <Route path="dashboard/home" element={<h1>Home</h1>} />
            {/* <Route path="dashbord" element={<h1>Dashbord</h1>} /> */}

            <Route path="help" element={<h1>Help</h1>} />
            <Route path="profile" element={<h1>Profile</h1>} />
            {/* <Route path='projects' element={<Project />} /> */}
            {/* <Route path='calendar' element={<Calendar />} /> */}
            {/* <Route path="tech/:id" element={<TechInfo />} /> */}
          </Route>

          <Route element={<ProtectedRoute allowedRole={["admin", "hr"]} />}>
            <Route path="hr" element={<HR />} />
            <Route path="attandancelog" element={<AttendanceLog />} />
            <Route path="attandance" element={<Attendance />} />
            <Route path="trackleave" element={<TrackLeave />} />
            <Route path="approve-leave">
              <Route path=":id" element={<ApproveLeave />} />
            </Route>
            <Route path="holidays" element={<Holidays />} />

            <Route path="noticeboard" element={<Noticeboard />}>
              <Route index element={<Shifts />} />
              <Route path="shift" element={<Shifts />} />
              <Route path="create-team" element={<CraeteTeam />} />
            </Route>
          </Route>

          <Route
            element={
              <ProtectedRoute allowedRole={["admin", "hr", "employee"]} />
            }
          >
            <Route path="employee" element={<Employee />} />
            <Route path="apply-leave" element={<ApplyLeave />} />
          </Route>

          <Route element={<ProtectedRoute allowedRole={["admin"]} />}>
            <Route path="settings" element={<Settings />}>
              <Route index="/" element={<General />} />
              <Route path="configure-role/:id" element={<ConfigutreRole />} />
              <Route path="security" element={<Security />} />
              {/* </Route> */}
              <Route path="preferences" element={<PreferencesContainer />} />
            </Route>

            <Route path="users" element={<h1>Users Management</h1>} />
            <Route path="content" element={<h1>Content Management</h1>} />
            <Route path="analitics" element={<Analytics />}>
              <Route index="/" element={<DashboardContainer />} />
              <Route path="report" element={<Report />} />
              <Route path="conversion-track" element={<ConversionTrack />} />
            </Route>
          </Route>
        </Route>
      </Routes>

      <Footer />

      <Toaster />
    </div>
  );
}

export default App;
