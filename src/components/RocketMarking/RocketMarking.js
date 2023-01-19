import './RocketMarking.css';

const RocketMarking = ({rocket}) => {
    const {mission_name, launch_year, links: {mission_patch_small}} = rocket;

    if (launch_year !== '2020') {
        return (
            <div className='block_rocket'>
                <p>Mission name: {mission_name}</p>
                <p>Launch year: {launch_year}</p>
                <img src={mission_patch_small} alt={mission_name}/>
            </div>
        );
    }
};

export {RocketMarking};