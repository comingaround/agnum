import React from 'react';
import CounterComponent from '../components/MobX/counterComponent';
import "../components/MobX/MobX.css";


export default function ApieMus() {
    return(
        <>
            <div className="MobX" >
                <div className="MobX_item">
                    <CounterComponent />
                </div>
            </div>
        </>
    );
}