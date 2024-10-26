import React, { useEffect, useState } from 'react';
import data from '../data';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserTable = () => {
    const [userList, setUserList] = useState(data);

    useEffect(() => {
        setUserList(data);
    }, [data]);

    return (
        <div className="container mt-4">
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Task</th>
                        <th>City</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((item) => (
                        <tr key={item.sno}>
                            <td>{item.sno}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.task}</td>
                            <td>{item.city}</td>
                            <td>{item.isCompleted ? "Yes" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default UserTable;
