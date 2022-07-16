import './styles.css';

import icon from '../../assets/img/notification-icon.svg';
import axios from 'axios';
import { BASE_URL } from '../../utils/request';

type Props = {
    saleId: number
}

function handleClick(saleId : number){
    axios.get(`${BASE_URL}/sales/${saleId}/notification`)
        .then(response => {
         alert("Msg enviada")
        })
    }


function NotificationButton({ saleId } : Props){
    return (
        <div className="dsmeta-red-btn" onClick={()=> handleClick(saleId)}>
            <img src={icon} alt="Icon notification" />
        </div>
    )
}

export default NotificationButton;