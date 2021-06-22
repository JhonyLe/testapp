import React from 'react';
import { Link } from 'react-router-dom';
import { sendMetrik } from '../../utils/metriks';

class Main extends React.Component {
    render() {
        return(
            <div>
                <h1>Главная</h1>
                <div>
                    <Link to='/about'>О нас</Link>
                    <br /><br />
                </div>
                <div>
                    <button 
                        onClick={() => {sendMetrik('reachGoal', 'MainButtonClick')}}
                        type="button">Кликни!</button>
                </div>
            </div>
        )
    }
}

export default Main;



















// onClick={() => {window.ym(81519523,'reachGoal','TargetClick')}}