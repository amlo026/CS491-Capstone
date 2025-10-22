import React from 'react';
import { useParams } from 'react-router-dom';
import { hobbyList } from './hobbydata.jsx';


const HobbyInfo = () => {

    const { hobbyId } = useParams();

    const hobby = hobbyList.find(h => h.id === parseInt(hobbyId));

    if (hobby) {
        return (
            <div>
                <h1>About {hobby.name}</h1>
                <img src={hobby.imgUrl} alt={hobby.name} />
                <p>{hobby.info}</p>
            </div>
        );
    }
    else {
        return <h1>Hobby not found</h1>;
    }
}

export default HobbyInfo;