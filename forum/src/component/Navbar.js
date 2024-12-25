import React, { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchIcon from '@mui/icons-material/Search'
import { Avatar, Button } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language'
import "../css/Navbar.css";
import { useSelector } from 'react-redux';
import Input from '@mui/material/Input';
import { selectUser } from '../features/userSlice';
import Modal from 'react-modal'
import { ExpandMore } from "@mui/icons-material";
import LinkIcon from "@mui/icons-material/Link";
import { db, auth } from '../firebase'; // Import the correct exports
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Import Firestore methods




function Navbar() {
    const user = useSelector (selectUser)
    const [openModal, setOpenModal] = useState(false)
    const [input, setInput] = useState("");
    const [inputUrl, setInputUrl] = useState("");
    const questionName = input;
    const handleQuestion = async (e) => {
        e.preventDefault();
        setOpenModal(false);
    
        if (questionName) {
            try {
                const questionsRef = collection(db, "questions");
                console.log("Adding question to Firestore...");
                await addDoc(questionsRef, {
                    user: user,
                    question: input,
                    imageUrl: inputUrl,
                    timestamp: serverTimestamp(),
                });
                console.log("Question added to Firestore.");
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        }
    
        setInput("");
        setInputUrl("");
    };
    
    
     
  return (
    <div className='navbar'>
      <div className='aaHeader__logo'>
        <img 
          src='/img/logo.png'
          alt=''
        />
      </div>
      
      <div className='aaHeader__icons'>
        <div className='aaHeader__icon'>
          <HomeIcon />
        </div>
        <div className='aaHeader__icon'>
          <FeaturedPlayListOutlinedIcon />
        </div>
        <div className='aaHeader__icon'>
            <AssignmentTurnedInOutlinedIcon />
        </div>
        <div className='aaHeader__icon'>
            <PeopleAltOutlinedIcon />
        </div>
        <div className='aaHeader__icon'>
            <NotificationsOutlinedIcon />
        </div>
      </div>
      <div className='aaHeader__input'>
        <SearchIcon />
        <input type='text' placeholder='Search AquaAlert' />
      </div>
      <div className='aaHeader__rem'>
        <div className='aaHeader__avatar'>
            <Avatar onClick = {()=> auth.signOut()} src={user.photo} />
        </div>
        <LanguageIcon />
        <Button onClick={() =>setOpenModal(true)}>Create Post</Button>
        <Modal 
            isOpen={openModal}
            onRequestClose={()=>setOpenModal(false)}
            shouldCloseOnOverlayClick={false}
            style={{overlay: {width: 700, height:600, backgroundColor: "rgba(0,0,0,0.8)", zIndex: "1000", top:"50%", left:"50%",
                marginTop:"-300px", marginLeft: "-350px",
            }}}
            >
            <div className='modal__title'>
                <h5>Create Post</h5> 
                <h5>Share location link</h5>
                </div>
                <div className='modal__info'>
                    <Avatar className="avatar" src={user.photo}></Avatar>
                <p>{user.displayName?user.displayName : user.email} posted</p>
                <div className="modal__scope">
                    <PeopleAltOutlinedIcon />
                    <p>Public</p>
                    <ExpandMore />
                </div>
                </div>
                <div className="modal__field">
                    <Input required value={input}
              onChange={(e) => setInput(e.target.value)} type="text" placeholder="Share your ideas, requests, or updates on flood relief efforts."/>
                
                <div className="modal__fieldLink">
                <LinkIcon />
                    <Input value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)} type="text" placeholder="Optional: include a link to your address"/>
                </div>
                </div>
                <div className="modal__btn">
                <button className="cancle" onClick={() =>setOpenModal(false)}>Close</button> 
                <button type="submit" onClick={handleQuestion} className="add">Create post</button>
                </div>
               
                
        </Modal>
      </div>
    </div>
  );
}

export default Navbar;
