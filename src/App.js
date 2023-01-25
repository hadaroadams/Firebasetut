import { async } from '@firebase/util'
import React, { useEffect, useState } from 'react'
import { db } from './firebase-config'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'

function App() {
  const [users,setUsers] = useState([])
  const [name,setName] = useState('')
  const [age,setAge] = useState('')
  const usersCollectionReferenceRef = collection(db,'user') 

  const createUser = async () => {
    await addDoc(usersCollectionReferenceRef,{name:name, age:Number(age)})
  }
  const updateUser=async(id,age)=>{
    const userDoc = doc(db, 'user',id)
    const newField={age:age+1}
    await updateDoc(userDoc,newField)
  }
  const deleteUser=async(id) =>{
     const userDoc = doc(db, 'user',id)
     await deleteDoc(userDoc)
  }
  useEffect(()=>{
    const getUsers =async()=>{
    const data = await getDocs(usersCollectionReferenceRef)
    setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
   
    getUsers()
  },[])

  return (
    <div>
      <input placeholder='Name...' type='text' onChange={e=>setName(e.target.value)}/>
      <input placeholder='Age' type='number' onChange={e=>setAge(e.target.value)}/>
      <button onClick={createUser}>create user</button>
      {users.map((users)=>{
        return(
        <div>
          <h1>Name:{users.name}</h1>
           <h1>age:{users.age}</h1>
           <button onClick={()=>{updateUser(users.id,users.age)}}>increase age</button>
           <button onClick={()=>deleteUser(users.id)}>delete user</button>
        </div>
        )
      })}
    </div>
  )
}

export default App
