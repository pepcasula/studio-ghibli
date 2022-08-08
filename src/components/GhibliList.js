import React from 'react';
import ListItem from './ListItem';

const GhibliList = ({ghiblis}) => {

    const ghibliFilms = ghiblis.map((ghibli, index) => {
        return <ListItem ghibli={ghibli.title} key={index} />
    });

    return (

        <div>
            <ul>
                {ghibliFilms}
            </ul>
        </div>

    );
};

export default GhibliList;