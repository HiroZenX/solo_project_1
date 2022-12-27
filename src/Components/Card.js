import {MdLocationOn} from 'react-icons/md'
export default function Card(props) {
  return (
    <div className="card">
        <div className="card-content">
            <img src= {props.src_img} alt="dest_pic"/>

            <div className="content">
                <div className="location">
                    <span><MdLocationOn /></span>
                    <span>{props.country}</span>
                    <a href={props.maps_link} target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <div className="text-data">
                    <h1>{props.dest_name}</h1>
                    <h4>{props.start_time} - {props.end_time}</h4>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
