import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container App">
  {/* Start your React code here */}
  <div className="profile-image-container">
    <img className="profile" src ={employee.prodileImg} width ="100" height="100" alt ="Profile image"/>
  </div>
  <div className="title">
    <h1>{employee.name}</h1>
  </div>
  <div className="profile_info">
    <label>Location</label>
    <strong>{employee.location}</strong>
  </div>
  <div className="profile_info">
  <label>Blood group</label>
  <strong>{employee.bloodGroup}</strong>
  </div>\<div className="profile_info">
  <label>Age</label>
  <strong>{employee.age}</strong>
    </div>
</div>
)
}



export default App;
