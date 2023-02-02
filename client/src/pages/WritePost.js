// import React, { useState } from "react";
// import { Link } from 'react-router-dom';
// import { useMutation, useQuery } from '@apollo/client';
// import { ADD_POST } from '../utils/mutations';
// import Auth from '../utils/auth';

// const WritePost = () => {
//     const [formState, setFormState] = useState({
//         title: '',
//         message: '',
//     });
//     const [addPost, { error, data }] = useMutation(ADD_POST);

//     // update state based on form input changes
//     const handleChange = (event) => {
//         const { name, value } = event.target;

//         setFormState({
//             ...formState,
//             [name]: value,
//         });
//     };

//     // submit form
//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
//         console.log(formState);

//         try {
//             const { data } = await addPost({
//                 variables: { ...formState },
//             });
//         } catch (e) {
//             console.error(e);
//         }
//     };

//     return (
//         <div className="container justify-content-center mt-5">
//             <div className="container col-8 flex-column m-5">

//                 <div className="row card container flex-column mt-3 p-3">
//                     <div className="row flex-row justify-content-space-between">
//                         <h3 className="column">create post</h3>
//                         <div className="column"><Link to='/blog'>return to post feed</Link></div></div>
//                     <form className="container flex-column" onSubmit={handleFormSubmit}>
//                         <div><input
//                             className="form-input"
//                             placeholder="post title"
//                             name="title"
//                             type="text"
//                             value={formState.title}
//                             onChange={handleChange}
//                         /></div>
//                         <textarea
//                             className="form-input mt-2"
//                             placeholder="tell us you what you're thinking"
//                             name="message"
//                             cols="60"
//                             rows="10"
//                             value={formState.message}
//                             onChange={handleChange}>
//                         </textarea>
//                         <div className="row justify-content-end"><button
//                             className="btn btn-primary mt-2"
//                             style={{ cursor: 'pointer' }}
//                             type="submit"
//                         >
//                             Submit
//                         </button>
//                         </div>

//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WritePost;
