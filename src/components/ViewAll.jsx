import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const ViewAll = () => {
    const [friends,getFriends]= useState([])
    const fetchData=()=>{
        axios.get("https://friendsapi-re5a.onrender.com/view").then(
            (response)=>{
                getFriends(response.data)
                console.log(response.data)
            }
        ).catch(
           (error)=>{
            alert(error.message)
           }
        ).finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <NavBar/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Friend Name</th>
                  <th scope="col">Friend Nick Name</th>
                  <th scope="col">Describe Your Friend</th>
                </tr>
              </thead>
              <tbody>
                {
                    friends.map(
                        (value,index)=>{
                            return <tr>
                            <th scope="row">{index}</th>
                            <th scope="row">{value.name}</th>
                            <th scope="row">{value.friendName}</th>
                            <th scope="row">{value.friendNickName}</th>
                            <th scope="row">{value.DescribeYourFriend}</th>
                            
                          </tr>
                        }
                    )
                }
                
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
