import axios from 'axios'
import { FETCH_USER, FETCH_SURVEY } from './types';

export const fetchUser= ()=> async dispatch=>{
       const res=await  axios.get('/api/currentuser')
        dispatch({type:FETCH_USER,payload:res.data});
    

}

export const handleToken=(token)=>async dispatch=>{

        const res=await axios.post('/api/stripe',token)
        dispatch({type:FETCH_USER,payload:res.data});
}

export const submitSurvey=(values,history)=>async dispatch=>{

        const res=await axios.post('/api/surveys',values);
        history.push('/surveys')
        dispatch({type:FETCH_USER,payload:res.data});
      //return{ type:'submit_survey'}

}

export const getSurvey=()=>async dispatch=>{

        const res=await axios.get('/api/surveys')
        dispatch({type:FETCH_SURVEY,payload:res.data});
}