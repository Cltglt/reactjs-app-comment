import React,{useState, useEffect} from 'react';
import AdminMode from './AdminMode';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import axios from 'axios';
import Comment from './Comment';

export default function Comments() {

    // -------- FONCTION ADMIN
    const [Adm, setAdm] = useState(true);
    const changeMod = () => {
        if (Adm) {
            setAdm(false)
        } else if (!Adm) {
            setAdm(true)
        }
    }

    // -------- FONCTION COMMENTS
    const [comments, setComments] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res => {
            console.log(res.data);
            setComments(res.data);
        })
      }, []);

      const commentJSX = comments.map(comment => {
        return <Comment key={comment.id} name={comment.name} message={comment.body} Adm={Adm} comment={comment}/>
    });

    return (
        <div>
            <AdminMode Adm={Adm} changeMod={changeMod}/>
            <div className="columns commentDisplay">
                <CommentForm comments={comments} setComments={setComments}/>
                <CommentList Adm={Adm} comments={comments} commentJSX={commentJSX}/>
            </div>
        </div>
    )
}
