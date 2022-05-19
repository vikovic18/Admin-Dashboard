import { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import "./team.css";

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/persons?_quantity=7")
      .then((response) => response.json())
      .then((data) => setTeam(data.data));
  }, []);

  return (
    <div className="Table">
      <TableContainer>
        <Table aria-label="simple table"></Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">id</TableCell>
            <TableCell align="left">Full Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Phone number</TableCell>
            <TableCell align="left">VAT</TableCell>
            <TableCell align="left">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {team
            ? team?.map((teams, idx) => (
                <TableRow
                  key={idx}
                  sx={{ "&:last-child td, last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{teams.id}</TableCell>
                  <TableCell align="left">{teams.firstname}</TableCell>
                  <TableCell align="left">{teams.email}</TableCell>
                  <TableCell align="left">{teams.phone}</TableCell>
                  <TableCell align="left">{teams.vat}</TableCell>
                  <TableCell align="left">
                    <img src={teams.image} className="imgs"></img>
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </TableContainer>
    </div>
  );
};

export default Team;
