import React from "react";
import Sidebar from "../../components/SideBar/sidebar";
import Navbar from "../../components/Navbar/navbar";
import "./team.css";

const Team = () => {

  const [team, setTeam] = useState([])

    useEffect(() => {
      fetch("https://fakerapi.it/api/v1/persons?_quantity=5")
            .then(response => response.json())
            .then(data => setTeam(data.data))
          }, [])

  return (
    <div className="teamlist">
      <Sidebar />;
      <div className="container">
        <Navbar />
        <div className="table">
    
        <h2 className="tex">Honourable Team members of ours</h2>
        <TableContainer>
          <Table aria-label='simple table'></Table>
          <TableHead>
              <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Full Name</TableCell>
                  <TableCell>email</TableCell>
                  <TableCell>Phone number</TableCell>
                  <TableCell>VAT</TableCell>
                  <TableCell>Image</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>

          {
            team ? team?.map((teams, idx) => (
            <TableRow
               key={idx}
               sx={{'&:last-child td, last-child th':{border:0}}}
              >
              <TableCell>{teams.id}</TableCell>
              <TableCell>{teams.name}</TableCell>
              <TableCell>{teams.email}</TableCell>
              <TableCell>{teams.phone}</TableCell>
              <TableCell>{teams.vat}</TableCell>
              <TableCell><img src= {teams.image} className='imgs'></img></TableCell>
            </TableRow>
            ) ) : null
          }
          
        </TableBody>

        </TableContainer>
      </div>
      </div>
    </div>
  );
};

export default Team;
