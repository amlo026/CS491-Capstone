import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { hobbyList } from './hobbydata.jsx';



const Hobbies = () => (
    
    <div>
        <h1>Hobbies Page</h1>
        <div>
            {hobbyList.map(hobby => (
            <Card key={hobby.id} style ={{ width: '18rem' }}>
                <Link to={`/hobbyInfo/${hobby.id}`}>
                    <Card.Img src={hobby.imgUrl} alt={hobby.name} />
                </Link>
                <Card.Body>
                    <Card.Title>{hobby.name}</Card.Title> 
                </Card.Body>
            </Card>
            ))}
        </div>
            
    </div>
);

export default Hobbies;