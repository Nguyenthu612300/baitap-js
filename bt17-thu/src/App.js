import "bulma/css/bulma.min.css";
import ProfileCard from "./ProfileCard";
import logohueic from './images/logohueic.png';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
const App = () =>{ 
   const myName = "Nguyen Thi Thu";
   return(
      <div>
         <section className="hero is-primary mb-5">
            <div className="hero-body">
               <p className="title">Personal Digital Assistants of {myName} </p>
            </div>
         </section>
         <div className="container">
            <div className="columns">
               <div className="column is-4">
                  <ProfileCard 
                     image={logohueic}
                     title="logo hueic"
                     des="Trường cao đẳng cao nghiệp hueic"
                  />
               </div>
               <div className="column is-4">
                  <ProfileCard 
                  image={logo2}
                  title="logo đại học khoa học"
                  des="Trường đại học khoa học"
                  />
               </div>
               <div className="column is-4">
                  <ProfileCard 
                     image={logo3}
                     title="logo đại học y"
                     des="Trường đại học y"
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
export default  App;