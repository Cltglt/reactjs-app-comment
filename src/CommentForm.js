import React,{useState} from 'react';
import './CommentForm.css';

export default function CommentForm({comments, setComments}) {

    const [name, setName] = useState("");
    const [body, setBody] = useState("");

    const changeData = (event) => {
        event.preventDefault();
        console.log("coucou")
        let currData = {
            pseudo: name,
            body: body
        }
        console.log(currData);
        let newCurrData = [...comments, currData];
        console.log(newCurrData);
        setComments(newCurrData);
    }



    return (
        <div className="column">
            <h1 className="title">Ajouter un commentaire</h1>
            <form className="commentform" onSubmit={changeData}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                        <textarea className="textarea" type="text" placeholder="Your comment" value={body} onChange={e => setBody(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button className="button is-primary btnSend" type="submit" >Send</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
