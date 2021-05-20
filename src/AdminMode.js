import React from 'react';
import './AdminMode.css';

export default function AdminMode({Adm, changeMod}) {

    return (
        <div>
            <article className={Adm ? "message is-info adminMode" : "message is-danger adminMode "}>
                <div className="message-body">
                    <button className={Adm ? "button is-info" : "button is-danger"} onClick={changeMod}>{Adm ? "Activez le mode admin" : "Désactivez le mode admin"}</button>
                </div>
            </article>
        </div>
    )
}
