import React from 'react';

export default function CommentList({comments, commentJSX}) {

    return (
        <div className="column" >
            <h1 className="title" >Liste des commentaires ({comments.length})</h1>
            <ul className="comment-list">
                {commentJSX}
            </ul>
        </div>
    )
}
