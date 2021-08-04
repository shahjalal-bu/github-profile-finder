import React from 'react';

const RepoItem = (props) => {
    const {html_url,name,forks,size,language}  = props.item;

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    let val = "https://github.com/shahjalal-bu/Accordion-react";
    console.log(val.replace(".com","blitz.com"));
    return (
             <div className='col-md-6'>
             
               <div className='repo-container'>
                 <div className="name">{capitalizeFirstLetter(name)}</div>
                 <div className="d-flex justify-content-between">
                     <div><span>Forks:</span> {forks}</div>
                     <div><span>Language:</span> {language}</div>
                     <div><span>Size:</span> {size} kb </div>
                 </div>
                 <div className="flex">
                 <a href={html_url} target="_blank" rel='noreferrer' className="repoBtn">
                     Open In Github
                </a>
                 <a href={html_url.replace(".com","blitz.com")} target="_blank" rel='noreferrer' className="repoBtn">
                     Open In Ide
                </a>
                 </div>
                </div>
              </div>
    );
};

export default RepoItem;