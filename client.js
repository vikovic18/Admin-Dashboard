import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, } from '@mui/material'
import Sidebar from "../../components/SideBar/sidebar";
import "./client.css";
import Navbar from "../../components/Navbar/navbar";

const Client = () => {

  const [client, setclient] = useState([])

    useEffect(() => {
      fetch("https://fakerapi.it/api/v1/companies?_quantity=5")
            .then(response => response.json())
            .then(data => setclient(data.data))
          }, [])

  return (
    
    
     
    <div className="clientlist">
          <Sidebar />;
    
  
      <div className="container">
            <Navbar />  
          <div className="table">
    
            <h2 className="tex">Here are some of our esteemed clients</h2>
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
                client ? client?.map((clients, idx) => (
                <TableRow
                key={idx}
                sx={{'&:last-child td, last-child th':{border:0}}}
                >
                  <TableCell>{clients.id}</TableCell>
                  <TableCell>{clients.name}</TableCell>
                  <TableCell>{clients.email}</TableCell>
                  <TableCell>{clients.phone}</TableCell>
                  <TableCell>{clients.vat}</TableCell>
                  <TableCell><img src= {clients.image} className='imgs'></img></TableCell>
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

export default Client;
