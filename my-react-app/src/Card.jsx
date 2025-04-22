import profilePic from './assets/SlikaReact.jpg'


function Card()
{


    return(
        <div className="card">
            <img alt="profile picture" src={profilePic} className="card-image"></img>
            <h2 className="card-title">Borjan Gjorgiev</h2>
            <p className="card-text">I am an intern at InTec and play basketball</p>
        </div>
    );

}

export default Card