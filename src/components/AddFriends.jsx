import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddFriends = () => {
    const [data,getData]= useState(
        {
            "name": "",
            "friendName": "",
            "friendNickName":"",
            "DescribeYourFriend":""
            
            }
    )
    const inputHandler=(event)=>{
        getData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("https://friendsapi-re5a.onrender.com/adddata",data).then(
            (response)=>{
                if (response.data.status==="success") {
                    alert("added successfully")
                    
                } else {
                    alert("error")
                    
                }
            }
        ).catch()
    }
  return (
    <div>
        <NavBar/>

    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Friend Name</label>
                    <input type="text" className="form-control" name='friendName' value={data.friendName} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Friend Nick Name</label>
                    <input type="text" className="form-control" name='friendNickName' value={data.friendNickName} onChange={inputHandler}  />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Describe your Friend</label>
                    <textarea name="DescribeYourFriend" id="" className="form-control" value={data.DescribeYourFriend} onChange={inputHandler}></textarea>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={readValue} className="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default AddFriends