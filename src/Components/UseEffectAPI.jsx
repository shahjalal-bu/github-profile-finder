import React, { useEffect, useState } from "react";
import RepoItem from "./RepoItem";

const UseEffectAPI = () => {
  const [data, setData] = useState({});
  const [repo, setRepo] = useState([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState("shahjalal-bu");

  const loadData = async () =>{
    const profile = await fetch(`https://api.github.com/users/${user}`)
    const profileJson =await profile.json()
    const repo = await fetch(profileJson.repos_url)
    const repoJson =await repo.json()
    if(profileJson){
        setData(profileJson);
        setRepo(repoJson);
    }
  }

useEffect(() => {
    loadData();
}, [user])

const handleInput = e => {
      e.preventDefault();
      setInput(e.target.value);
    
  };
  const handleBtn =(e) =>{
    setUser(input);
    loadData();
    setInput('');
  }

    
const { name, login, followers, following, avatar_url } = data;
  
 
  return (
    <div>
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='wrap text-center'>
            <div className='search'>
              <input
                type='text'
                className='searchTerm form-control'
                value={input}
                placeholder='Enter Github User Id?'
                onChange={handleInput}
              />
              <button
                type='submit'
                onClick={handleBtn}
                className='searchButton'
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className='row mt-5 justify-content-center'>
          <div className='col-md-3 left-div text-center text-light'>
            <div className='avatar'>
              <img src={avatar_url} alt={login} />
            </div>
            <p className='mt-2'>Login Name</p>
            <h3>{name}</h3>
            <div className='d-flex justify-content-around'>
              <div>Followers</div>
              <div>Follow</div>
            </div>
            <div className='d-flex justify-content-around font-big'>
              <div>{followers}</div>
              <div>{following}</div>
            </div>
          </div>
          <div className='col-md-8 right-div'>
            <div className='row mt-3 mb-3 justify-content-between'>
                <div className="col-md-2"><h2>Repos</h2></div>
                {/* <div className="col-md-6"></div> */}
                <div className="col-md-4"><h2>Total Repo: {Object.keys(repo).length}</h2></div>
            </div>
            <div className='row'>
              {
                 repo.map((item,index) => {
                  if(item){
                    return <RepoItem key={index} item={item}/>
                  }
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseEffectAPI;
