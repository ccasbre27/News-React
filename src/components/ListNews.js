import React from 'react';
import New from './New';

const ListNews = ({news}) => (

    <div className="row">
        {news.map(currentNew => (
            <New 
                key={currentNew.url}
                info={currentNew}/>
        ))}
    </div>
   
);

export default ListNews;