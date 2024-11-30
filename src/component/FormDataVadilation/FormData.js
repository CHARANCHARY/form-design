// import React, { useState } from 'react'

// const FormData = () => {
 
//   const [ formData , setFormData] = useState({
//     name : "",
//     password : ""
//   });
  
//   const hadleSubmit = async (e)   =>{
//     e.preventDefault();
//     const response = await axios("hhp//url//.com" , formData);
//     try{
//         const response = await axios.post("hhp//url//.com" , formData);
//         console.log(response);
//     } catch (error)
//     {
//             console.log(error.message)
//     }
    
//   }

  

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };


//   return (
//     <form onSubmit={hadleSubmit}>
//             <input
//             type='text'
//             placeholder='Name'
//             name= "name"
//             value={formData.name}
//             onChange={onChangeHandler}
//              />
//         <input
//             type='password'
//             placeholder='password'
//             name= "password"
//             value={formData.password}
//             onChange={onChangeHandler}
//              />
//         <button type='submit'>
//                 Submit
//         </button>
//     </form>
//   )
// }

// export default FormData