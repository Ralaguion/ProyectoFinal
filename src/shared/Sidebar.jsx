import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { FaList, FaCog, FaUser } from 'react-icons/fa';
import './Sidebar.css'; // Asegúrate de crear este archivo CSS

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column flex-shrink-0 p-3 bg-dark text-white">
            <Nav className="flex-column" variant="pills">
                <Nav.Item className="mb-3">
                    <Nav.Link href="#" className="text-white d-flex justify-content-center align-items-center">
                        <FaList size={10} />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3">
                    <Nav.Link href="#" className="text-white d-flex justify-content-center align-items-center">
                        <FaCog size={10} />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3">
                    <Nav.Link href="#" className="text-white d-flex justify-content-center align-items-center">
                        <FaUser size={10} />
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Sidebar;