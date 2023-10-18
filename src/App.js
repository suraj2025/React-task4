import React from "react";
import data from './component/dummy'
import Display from "./component/diplay";
function displayData(d){
  return (
    <Display 
      sNo={d.id}
      profile_pic={d.image}
      firstName={d.firstName}
      lastName={d.lastName}
      gender={d.gender}
      email={d.email}
      userName={d.username}
      domain={d.domain}
      ip={d.ip}
      university={d.university}
    />
  );
}
function App() {

  return (

    <center><div className="box">
      <h1>Dummy Data</h1>
      <table border="1">
        <tr>
          <th>Sno</th>
          <th>Profile Pic</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Username</th>
          <th>Domain</th>
          <th>Ip</th>
          <th>university</th>
        </tr>
        
      {data.map(displayData)}
      </table>
      {/* <table>

      </table> */}

    </div>
    </center>

  );
}
export default App;
