import { useNavigate } from 'react-router-dom';

export default function Service(props) {
    const navigate = useNavigate();
    return (
        <div className="services-image-wrapper"
            onClick={() => navigate(`/service/${props.title.replace(/ /g, '-').toLowerCase()}`)}
        >
            <img
                className="services-single-image"
                src={props.img}
                alt="AC Units Work"
            />
            <h3>{props.title}</h3>
        </div>
    )
}