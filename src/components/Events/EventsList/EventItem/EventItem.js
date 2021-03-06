import classes from './EventItem.module.css'
import Button from '../../../Ui/Button/Button'
import { Link } from "react-router-dom";

const EventItem = (props) => {
  let btn = <Button onClick={() => props.onJoinClick(props.eventItem.id)}>Join</Button>

  if (props.isMyEvent) btn = <Button onClick={() => props.onLeaveClick(props.eventItem.id)}>Leave</Button>
  
  return (
    <li className={classes.EventItem}>
      <h3>       
        <Link to={'events/' + props.eventItem.id}>{props.eventItem.title}</Link>
      </h3>
      <p>Type: <b>{props.eventItem.type}</b></p>
      <p>Location: <b>{props.eventItem.location}</b></p>
      <p>Date: <b>{props.eventItem.date}</b></p>
      <p>Members: <b>{props.eventItem.members}</b></p>
      <div>       
        {btn}
      </div>    
    </li>
  )
} 

export default EventItem