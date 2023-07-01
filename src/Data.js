import React, { useState } from 'react';
import './Style.css'
import './Data.css'


const Data = () => {
  const [course, setCourse] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [data, setData] = useState([]);

  const addData = () => {
    if (course !== '' && duration !== '' && price !== '') {
      const newData = [...data, { name: course, year: duration, price }];
      setData(newData);

      // Clear the input fields
      setCourse('');
      setDuration('');
      setPrice('');
    }
  };

  return (
    <data>
      <div className="container data-container">
        <h2>List of courses</h2>
        <input className="form-control" type="text" value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Enter the course name" /><br />
        <input className="form-control" type="text" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Enter the duration" /><br />
        <input className="form-control" type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter the price" /><br />
        <button className="btn" style={{ backgroundColor: 'rgb(87, 80, 160)', height: 'fit-content', marginLeft: '0px' }} onClick={addData}>Add Course</button>
        <br /><br />

        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th width="200">No</th>
              <th width="200">Course name</th>
              <th width="200">Duration</th>
              <th width="200">Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.year}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </data>
  );
};

export default Data;
