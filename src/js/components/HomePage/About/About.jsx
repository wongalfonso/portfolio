import React from 'react';
import ReactGA from 'react-ga';
import profileImage from '../../../../../public/images/mainProfileImage.png';

const About = ({title}) => {

  const downloadResume = () => {
    console.log('yes');
    // ReactGA.event({
    //   category: 'Clicked About Page Button',
    //     action: 'downloaded Resume'
    //     })
  }
  return (
    <div className='about-page' id='aboutPage'>
        <div className='container about-container' id='aboutContainer'> 
          <div className="row">
            <div className="about-header">
                {title}              
            </div>
          </div>   
          <div className="row about-row">
            <p className = 'about-text'>
              <div className = 'image-container'>
                <img src = {profileImage} className = 'profile-image'/>
              </div>
            My name is <b>Alfonso Wong</b>. I graduated from Cal State Dominguez Hills with a bachelors in Digital Media with an emphasis in Audio Recording. After working as an Audio Engineer in San Diego, I found that I could use my love for creating and developing media and applying it to Web Design. After receiving my certification from Origin Code Academy, I have focused my time and energy into building Web Applications with the React framework. 
            <br/>  
            <span className = 'lg-paragraph'>
              This site is built with just that. I have added React and Redux to this site because it is much more then just a static web page. This site is also hosted on AWS, which gives me flexibility with my application. I have basic CRUD operations on the back end that allow me to communicate via Mongoose to MongoDB. These CRUD operations allow me to login, post, edit and delete a Blog that I have created for my solutions of Code Wars that I have completed.
            </span>     
            <br/>
            I hope you enjoy my page.
            <br/>
            <div className = 'about-name'>- Alfonso </div>
            </p>
          </div>
          <div className="row">
            <div className="download-btn">
              <button 
                id = 'downloadBtn' 
                onClick = {downloadResume}>
                DOWNLOAD RESUME
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About;
// export default class About extends Component {
//   downloadResume() {
//     ReactGA.event({
//       category: 'Clicked About Page Button',
//       action: 'downloaded Resume'
//     })
//   }  

//   render() {
//     return (
//       <div className='about-page' id='aboutPage'>
//         <div className='container about-container' id='aboutContainer'> 
//           <div className="row">
//             <div className="about-header">

//             </div>
//           </div>   
//           <div className="row">
//             <div className='col-lg-12 col-lg-10 col-xl-7 about-text-row'>
//               <div className="about-text">
//                 <p>My name is <b>Alfonso Wong</b>. I graduated from Cal State Dominguez Hills with a bachelors in Digital Media with an emphasis in Audio Recording. After working as an Audio Engineer in San Diego, I found that I could use my love for creating and developing media and applying it to Web Design. After receiving my certification from Origin Code Academy, I have focused my time and energy into building Web Applications with the React framework.</p>
//                 <p>This site is built with just that. I have added React and Redux to this site because it is much more then just a static web page. This site is also hosted on AWS, which gives me flexability with my application. I have basic CRUD operations on the backend that allow me to communicate via Mongoose to MongoDB. These CRUD operations allow me to login, post, edit and delete a Blog that I have created for my solutions of Code Wars that I have completed. I hope you enjoy my page.</p>
//                 <span>- Alfonso </span>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     )
//   }
// };
