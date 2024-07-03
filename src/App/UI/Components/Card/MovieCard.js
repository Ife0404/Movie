import React from 'react';
import './MovieCard.css';
import { HiStar } from "react-icons/hi2";

function MovieCard({ title, posterUrl, releaseDate, genre, desc, ratings }) {
    return (
        <div className="movie-card">
            <img src={posterUrl} alt={title} className="movie-poster" />
            <div className="movie-details">
                <h2 className="movie-title">{title}</h2>
                <p className='movie-desc'>{desc}</p>
                <p className="movie-rating">
                    <span className='movie-label'>Rating:</span>
                    <span className="rating-value" style={{ color: 'white' }}>
                        {ratings} <HiStar className="hi-star" />
                    </span>
                </p>
                <p><span className='movie-label'>Release Date:</span> {releaseDate}</p>
                <p><span className='movie-label'>Genre:</span> {genre}</p>

            </div>
        </div>
    );
}

export default MovieCard;






































// import {useEffect,React} from 'react'
// import "./OpportunityCard.css"
// import noCompanyLogo from '../../../../Image/svg/noCompanyLogo.svg'

// //Importing Animate on Scroll library

// import AOS from 'aos';
// import 'aos/dist/aos.css';

// function OpportunityCard({companyLogo,jobTitle,companyName,NatureOfJob,TimePosted,onClick}) {
//   useEffect(() => {
//     AOS.init();
//   }, [])

//   return (
//     <div
//     data-aos="fade-up"
//     className='OpportunityCard'
//     onClick={() =>{onClick(jobTitle,companyName,NatureOfJob,TimePosted,companyLogo)}}
//     >
//       <div className='sponsor-logo'>
//         {
//         companyLogo===""? <img src={noCompanyLogo} alt="" />  : <img src={companyLogo} alt=""/>
//         }
//       </div>
//       <div className='Opportunity-description'>
//         <h2>{jobTitle}</h2>
//         <h3>{companyName}</h3>
//         <div>{NatureOfJob}</div>
//         <p>{TimePosted}</p>
//       </div>
//     </div>
//   )
// }

// export default OpportunityCard
