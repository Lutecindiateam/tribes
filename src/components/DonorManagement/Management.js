import React, { useState, useEffect } from 'react';
import Table from '@mui/joy/Table';
import Button from '@mui/material/Button';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

export default function BeManagement() {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/donors', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFormData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const mapStatus = (status) => {
    return status === "0" ? "failed" : "success";
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(formData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([excelBuffer], { type: 'application/octet-stream' }), 'formData.xlsx');
  };

  return (
    <div>
      <div className="text-center" style={{ fontFamily: "Times New Roman" }}>
              <p style={{ fontSize: "30px", fontFamily: "serif", color: "orange",paddingTop:"20px" }}>
                <b>User Management</b>{" "}
              </p>
            
            </div>
            <hr className='mt-4 color-black' style={{ backgroundColor: "black" }} />
      <Button onClick={exportToExcel} variant="contained" color="primary">
        Export to Excel
      </Button>
      <Table aria-label="basic table" style={{padding:"60px"}}>
        <thead>
          <tr>
          <th>S.N.</th>
            <th >Name</th>
            <th>EmailID</th>
            <th>Address</th>
            <th style={{ width: '20%' }}>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Transaction Id</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.firstname + " "  + row.lastname}</td>
              <td>{row.email}</td>
              <td>{row.address}</td>
              <td>{new Date(row.time).toLocaleString()}</td>
              <td>{row.amount}</td>
              <td>{mapStatus(row.status)}</td>
              <td>{row.payment_id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
