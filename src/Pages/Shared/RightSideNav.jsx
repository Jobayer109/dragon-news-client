import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { ButtonGroup } from "react-bootstrap";
import {
    FaFacebook,
    FaGithub,
    FaGoogle,
    FaStumbleuponCircle,
    FaTheaterMasks,
    FaTwitter,
    FaWhatsapp,
    FaYoutube
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import BrandCarousel from "./BrandCarousel";



const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const RightSideNav = () => {

    const { googleSignIn, githubSignIn } = useContext(AuthContext);
    
    const navigate = useNavigate()
    const handleGoogleSignIn = () => {
    
        googleSignIn(googleProvider)
            .then(result => {
                navigate('/')
                console.error(result.user)
                
            })
            .catch(error => {
           console.log(error.message);
        })

    }
    
    const handleGithubSignIn = () => {
        githubSignIn(githubProvider)
            .then(result => {
                navigate('/')
            console.error(result.user)
            
        })
        .catch(error => {
       console.log(error.message);
    })
    }



  return (
    <div>
      <div className="">
        <ButtonGroup vertical className="w-100 fw-bold">
          <button onClick={handleGoogleSignIn} type="button" className="btn btn-outline-primary mb-1 fw-bold ">
            {" "}
            <FaGoogle /> Login via Google
          </button>
        </ButtonGroup>
        <ButtonGroup vertical className="w-100">
          <button onClick={handleGithubSignIn} type="button" className="btn btn-outline-dark fw-bold shadow">
            {" "}
            <FaGithub /> Login via Github
          </button>
        </ButtonGroup>
      </div>

      <div className="mt-3 shadow rounded">
        <h4 className="fw-bold ms-2">Find us on</h4>
        <ButtonGroup vertical className="w-100 fw-bold border rounded text-start">
          <button type="button" className="btn btn-light mb-2 text-start">
            {" "}
            <FaFacebook className="text-primary" /> Facebook
          </button>
          <button type="button" className="btn btn-light mb-2 text-start">
            {" "}
            <FaYoutube className="text-danger" /> Youtube
          </button>
          <button type="button" className="btn btn-light mb-2 text-start">
            {" "}
            <FaTwitter className="text-info" /> Twitter
          </button>
          <button type="button" className="btn btn-light mb-2 text-start">
            {" "}
            <FaWhatsapp className="text-success" /> Whatsapp
          </button>
          <button type="button" className="btn btn-light mb-2 text-start">
            {" "}
            <FaGoogle className="text-secondary" /> Google
          </button>
          <button type="button" className="btn btn-light mb-2 text-start">
            {" "}
            <FaTheaterMasks className="text-danger" /> Terms and Conditions
          </button>
          <button type="button" className="btn btn-light mb-2 text-start">
            {" "}
            <FaStumbleuponCircle className="text-warning" /> Privacy and Policy
          </button>
        </ButtonGroup>
      </div>
      <div className="shadow">
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
