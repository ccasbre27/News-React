import React from 'react';
import New from './New';
import PropTypes from 'prop-types';

const ListNews = ({news}) => (

    <div className="row">
        {news.map(currentNew => (
            <New 
                key={currentNew.url}
                info={currentNew}/>
        ))}
    </div>
   
);

ListNews.propTypes = {
    news: PropTypes.array.isRequired
}

export default ListNews;