import React, { useEffect, useState } from "react";
import '../css/Feed.css'
import AABox from './AABox'
import Post from './Post'
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"; // Add these imports


function Feed() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
        const q = query(collection(db, "questions"), orderBy("timestamp", "desc")); // Create the query
        const unsubscribe = onSnapshot(q, (snapshot) =>
          setPosts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              questions: doc.data(),
            }))
          )
        );
      
        // Cleanup function to unsubscribe from the snapshot listener
        return () => unsubscribe();
      }, []);
      
  
    return (
      <div className="feed">
        <AABox />
        {posts.map(({ id, questions }) => (
          <Post
            key={id}
            Id={id}
            question={questions.question}
            imageUrl={questions.imageUrl}
            timestamp={questions.timestamp}
            users={questions.user}
          />
        ))}
      </div>
    );
  }
  
  export default Feed;