import React from 'react';

export default function Comment({name ,message ,Adm ,comment }) {

    // const removeCom = () => {
    //     comment.splice(comment.id, 1);
    //     console.log(comment.id)
    // }

    return (
        <div className="comment">
            <li>
                <div className="titleCom">
                    <strong >{name}</strong>
                    {Adm ? "" : <button 
                    // onClick={removeCom}
                    className="delete"></button>}
                </div>
                <p>{message}</p>
            </li>
        </div>
    )
}
