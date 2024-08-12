import { gql } from 'apollo-boost';
import { client } from '../graphql/client';

export const GET_USERS="GET_USERS";
export const CREATE_USER="CREATE_USER"
export const UPDATE_USER="UPDATE_USER"
export const DELETE_USER="DELETE_USER"

export const getUsers=()=>async (dispatch)=>{
const query=gql`
query{
users{
id 
name
email
}
}

`
const response=await client.query({query})
dispatch({type:GET_USERS,payload:response.data.users})
}

export const createUser=(user)=>async(dispatch)=>{
    const mutation=gql`
    mutation(name:$string!,$email:string!){
    createUser(name:$name,email:$email){
    id
    name
    email
    }
}
    `;

const response=await client.mutate({mutation,variable:user})
dispatch({type:createUser,payload:response.data.createUser})

}

const updateUser=(id,user)=>async(dispatch)=>{
const mutation=gql `
mutation($id:ID!, $name:string! ,$email:string!){
updateUser(id:$id,name:$name,email:$email ){
id
name
email
}
}
`
const response=await client.mutate({mutation,variable:{id,...user}})
dispatch({type:UPDATE_USER,payload:response.data.updateUser})
}

export const deleteuser=(id)=>async(dispatch)=>{
const mutation=gql`
mutation($id:ID!){
deleteuser(id:$id){
id
}
}
`
await client.mutate({mutation,variable:{id}})
dispatch({type:DELETE_USER,payload:id})
}