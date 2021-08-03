import React from 'react';

const RepoItem = (props) => {
    const {html_url,name,forks,size,language}  = props.item;

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
             <div className='col-md-6'>
               <a href={html_url}>
               <div className='repo-container'>
                 <div className="name">{capitalizeFirstLetter(name)}</div>
                 <div className="d-flex justify-content-between">
                     <div><span>Forks:</span> {forks}</div>
                     <div><span>Language:</span> {language}</div>
                     <div><span>Size:</span> {size} kb </div>
                 </div>
                </div>
               </a>
              </div>
    );
};

export default RepoItem;