import React from 'react';
import './Footer.css';

function Footer(props) {
  return (

    <div>
       
<div className="accordian-Div">
  <h1 className="text-center">Freequently Asked Questions</h1>
  
  <div className="accordion accordion-flush" id="accordion">
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingOne">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          What is Netflix?
        </button>
      </h2>
      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body"><h4>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.</h4><h4>You can watch as much as you want, whenever you want, without a single ad all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</h4></div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          How much does Netflix cost?
        </button>
      </h2>
      <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body"><h4>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</h4></div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          Where can I watch?
        </button>
      </h2>
      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body"><h4>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</h4><h4>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</h4></div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingOne">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          How do I cancel?
        </button>
      </h2>
      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body"><h4>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</h4></div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingOne">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          What can i watch on Netflix?
        </button>
      </h2>
      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body"><h4>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</h4></div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingOne">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          Is Netflix good for kids?
        </button>
      </h2>
      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body"><h4>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</h4><h4>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</h4></div>
      </div>
    </div>
  </div>


</div>


<footer >
  <h6>Questions? Call 000-800-040-1843</h6>
  <div className="container container-footer">
  <div className="footercontent ">
  
    <a href="#"><p>FAQ</p></a>
    <a href="#"><p>Investor Relations</p></a>
    <a href="#"><p>Privacy</p></a>
    <a href="#"><p>Speed Test</p></a>
   
  </div>
  <div className="footercontent"> 
 
  <a href="#"><p>Help Centre</p></a>
  <a href="#"><p>Jobs</p></a>
  <a href="#"><p>Cookie Preferences</p></a>
  <a href="#"><p>Legal Notices</p></a>
  </div>
  <div className="footercontent">
   
    <a href="#"><p>Account</p></a>
    <a href="#"><p>Ways to Watch</p></a>
    <a href="#"><p>Corporate Information</p></a>
    <a href="#"><p>Only on Netfli</p></a>
  </div>
  <div className="footercontent">
    
    <a href="#"><p>Media Centre</p></a>
    <a href="#"><p>Terms of Use</p></a>
    <a href="#"><p>Contact Us</p></a>
    
  </div>
 
  </div>
</footer>      

    </div>
  )
}

export default Footer