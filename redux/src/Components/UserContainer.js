/*import axios from 'axios'
import {useEffect} from 'react'
import { fetchUsers, fetchUsersSuccess } from "../actions";
import {useDispatch, useSelector} from 'react-redux';
import { UserAddress } from './UserAddress';
export const UserContainer = () =>{
    const dispatch = useDispatch();
    const usersData =useSelector((state)=>state.users);
   useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
        console.log(response);
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      });
   },[]);
   return (
       <div>
       {usersData.map((user)=>{
           console.log(user.name);
           return (
           <div>
              <p><b>Name:</b>{user.name}</p>
              <UserAddress  user = {user} />
           </div>
           );
       })}
       </div>
   );
};*/
import { useEffect } from 'react';
import { fetchUsers, fetchUsersSuccess } from '../actions';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { UserInfo } from './UserInfo';

export const UserContainer = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.users);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      console.log(response);
      const users = response.data;
      dispatch(fetchUsersSuccess(users));
    });
  }, []);

  return (
    <div>
      {usersData.map((user) => {
        console.log(user.name);
        return (
          <div>
            <h5>{user.name}</h5>
            <UserInfo user={user} />
          </div>
        );
      })}
    </div>
  );
};