// src/pages/TeamPage.jsx
import React, { useState } from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { FiPhone, FiMail, FiX } from "react-icons/fi";


//tech//
import Prashant1 from "../assets/team/technical/prashant1.jpeg";
import Prashant from "../assets/team/technical/prashant.jpg";
import Anshu from "../assets/team/technical/anshu.jpeg";
import Utsav from "../assets/team/technical/utsav.jpeg";
import Anurag from "../assets/team/technical/anurag.jpeg";
import Sagar from "../assets/team/technical/sagar.jpeg";
import Rohit from "../assets/team/technical/rohit1.jpeg";
import Ajay from "../assets/team/technical/ajay1.jpeg";
import Riyaz from "../assets/team/technical/riyaz.jpeg";
import Rajeev from "../assets/team/technical/rajeev.jpeg";
import Pranav from "../assets/team/technical/pranav.jpeg";
import Sauravj from "../assets/team/technical/saurav.jpeg";
import heroImg from "../assets/hero/junoon_hero.png";
  
import Shiv from "../assets/team/cricket/shiv.jpg";
import Ankit from "../assets/team/cricket/ankit.jpeg";
import Aayan from "../assets/team/cricket/aayan.jpeg";
import Akash from "../assets/team/cricket/akashece.jpeg";

//kabaddi///
import Akib from "../assets/team/kabaddi/akib.jpeg";
import Rajnish from "../assets/team/kabaddi/rajnish.jpeg";
import Shubham from "../assets/team/kabaddi/shubham.jpeg";
import Shivam from "../assets/team/kabaddi/shivam.jpeg";
import Ankush from "../assets/team/kabaddi/ankush.jpeg";
import Ashutosh from "../assets/team/kabaddi/ashutosh.jpeg";
import Ranjan from "../assets/team/kabaddi/ranjan.jpg";
import Piyush from "../assets/team/kabaddi/piyush.jpeg";
import Akhilesh from "../assets/team/kabaddi/akhilesh.jpeg";
import Abhinav from "../assets/team/kabaddi/abhinav.jpeg";
import Ashutosh1 from "../assets/team/kabaddi/ashutosh1.jpeg";
import Hare from "../assets/team/kabaddi/harekrishna.jpeg";
//volleyball//
import Arun from "../assets/team/volleyball/arun.jpeg";
import Mehak from "../assets/team/volleyball/mehak.jpeg";
import Ishika from "../assets/team/volleyball/ishika.jpeg";
import AkashJha from "../assets/team/volleyball/akashjha.jpeg";
import Karan from "../assets/team/volleyball/karan.jpeg";
import PrashantRanjan from "../assets/team/volleyball/prashantranjan.jpeg";
import Sujeetj from "../assets/team/volleyball/sujeet.jpeg";
import Saurav from "../assets/team/volleyball/saurav.jpeg";
import Raushanj from "../assets/team/volleyball/raushan.jpeg";
import Kundanj from "../assets/team/volleyball/kundan.jpeg";
import Priyanshuj from "../assets/team/volleyball/priyanshu.jpeg";
import Ayushj from "../assets/team/volleyball/ayush.jpeg";
import Vishal from "../assets/team/volleyball/vishal.jpeg";
import Pratham from "../assets/team/volleyball/pratham.jpeg";

//badminton//
import Rohan from "../assets/team/badminton/rohan.jpeg";
import Sujeet from "../assets/team/badminton/sujeet.png";
import Anjum from "../assets/team/badminton/anjum.jpeg";
import AnjaliPrakash from "../assets/team/badminton/anjali.jpeg";
import Ankitj from "../assets/team/badminton/ankitj.jpeg";
import Sushant from "../assets/team/badminton/sushant.jpeg";
import Ashish1 from "../assets/team/badminton/ashish1.jpeg";
import Vishnu from "../assets/team/badminton/vishnu.jpeg";
import Raunak from "../assets/team/badminton/raunak.jpeg";
import Hariom from "../assets/team/badminton/hariom.jpeg";
import Aditya from "../assets/team/badminton/aditya.jpeg";
import Mithun from "../assets/team/badminton/mithun.jpeg";
import Om from "../assets/team/badminton/om.jpeg";

//athlete//
import Anjit from "../assets/team/athlete/anjit.jpeg";
import Vikash from "../assets/team/athlete/vikash.jpeg";
import Murari from "../assets/team/cricket/murari.jpeg";
import Priyanshu from "../assets/team/athlete/priyanshu.jpeg";
import Unnati from "../assets/team/athlete/unntai.jpeg";
import Raushan from "../assets/team/athlete/raushan.jpeg";
import Ayush from "../assets/team/athlete/ayush.jpeg";
import Dheeraj from "../assets/team/athlete/dheeraj.jpeg";
import Jay from "../assets/team/athlete/jaykumar.jpeg";
import Karanj from "../assets/team/athlete/karanj.jpeg";
import Chitranjan from "../assets/team/athlete/chitranjan.jpeg";
import Vipul from "../assets/team/athlete/vipul.jpeg";

//arm//
import Indrejeet from "../assets/team/arm/inderjeet.jpeg";
import Faiz from "../assets/team/arm/faiz.jpeg";

//tug of war//
import AkashRanjan from "../assets/team/tug of war/akashranjan.jpeg";
import Kundan from "../assets/team/tug of war/kundan.jpeg";
import Unnati1 from "../assets/team/tug of war/unnati1.jpeg";

//cricket
import Sonali from "../assets/team/cricket/sonali.jpeg";
import Bandana from "../assets/team/cricket/bandana.jpeg";
import Ritick from "../assets/team/cricket/ritik.jpeg";
import Abhi from "../assets/team/cricket/abhiraj.jpeg";
import Aryan1 from "../assets/team/cricket/aryanj.jpeg";
import Prince from "../assets/team/cricket/prince.jpeg";

//tt///
import Rahul from "../assets/team/tt/rahul.jpeg";
import Priyanjan from "../assets/team/tt/priyanjan.jpeg";
import Abhiskekm from "../assets/team/tt/abhishekm.jpeg";
import Rahulj from "../assets/team/tt/rahulj.jpeg";

//carrom///
import Avinash from "../assets/team/carrom/avinash.jpeg";
import RajAryan from "../assets/team/carrom/rajaryan.jpeg";
import Aashique from "../assets/team/carrom/aashique.jpeg";
import Aryan from "../assets/team/carrom/aryan.jpeg";
import Abhishek from "../assets/team/carrom/abhishek.jpeg";
import Nishant from "../assets/team/carrom/nishant.jpeg";
import Anuragj from "../assets/team/carrom/anuragj.jpeg";
import Faruk from "../assets/team/carrom/faruk.jpeg";
import Ansh from "../assets/team/carrom/ansh.jpeg";


//esports//
import Nikhil from "../assets/team/esports/nikhil1.jpeg";
import Baibhav from "../assets/team/esports/baibhav.jpeg";
import Manish from "../assets/team/esports/manish.jpeg";
import Ankitjj from "../assets/team/esports/ankitjj.jpeg";
import Aniket from "../assets/team/esports/aniket.jpeg";



// 🔹 Team data with categories + contact
// 🔹 Team data with categories + contact
const teamData = [
  {
    section: "Technical Team",
    sectionId: "tech",
    people: [
      {
        name: "Prashant Kumar",
        role: "Coordinator",
        // tag: "Java • Spring Boot • MERN",
        insta: "https://www.instagram.com/prashantt_1718/",
        linkedin: "https://www.linkedin.com/in/prashantcoder/",
        whatsapp: "7367055728",
        email: "prashantkumarcse15@gmail.com",
        img: Prashant1,
      },
      {
        name: "Rohit Kumar Gupta ",
        role: "Coordinator",

        insta: "#",
        linkedin: "#",
        whatsapp: "9999999999",
        email: "",
        img: Rohit,
      },
      {
        name: "Rajeev Kumar  ",
        role: "Coordinator",
        insta: "#",
        linkedin: "#",
        whatsapp: "9999999999",
        email: "",
        img: Rajeev,
      },
      {
        name: "Ajay Shankar  ",
        role: "Sub Coordinator",
        insta: "#",
        linkedin: "#",
        whatsapp: "9999999999",
        email: "",
        img: Ajay,
      },
      {
        name: "Anurag Chandra  ",
        role: " Sub Coordinator",
        insta: "#",
        linkedin: "#",
        whatsapp: "9999999999",
        email: "",
        img: Anurag,
      },
      {
        name: "Riyaz Ahmad  ",
        role: " Sub Coordinator",
        insta: "#",
        linkedin: "#",
        whatsapp: "9999999999",
        email: "",
        img: Riyaz,
      },
      {
        name: "Sagar  ",
        role: " Sub Coordinator",
        insta: "#",
        linkedin: "#",
        whatsapp: "9999999999",
        email: "",
        img: Sagar,
      },
      {
        name: "Saurav  ",
        role: " Sub Coordinator",
        insta: "#",
        linkedin: "#",
        whatsapp: "9999999999",
        email: "",
        img: Sauravj,
      },
      {
        name: "Ashutosh Kumar",
        role: " Member",
        insta: "https://www.instagram.com/ashutosh0264kumar?igsh=NGJrM3llajdrMzM1",
        linkedin: "#",
        whatsapp: "9999999999",
        email: "",
        img: Ashutosh,
      },
      {
        name: "Anshu Kumar",
        role: " Member",
        insta: "https://www.instagram.com/anshurajput_2707?igsh=MWN5djk1a2tseDh5OA==",
        linkedin: "#",
        whatsapp: "9999999999",
        email: "",
        img: Anshu,
      },
      {
        name: "Utsav Kumar",
        role: " Member",
        insta: "#",
        linkedin: "#",
        whatsapp: "9999999999",
        email: "",
        img: Utsav,
      },
    ],
  },


  //--mediacla///

{
    section: "Medical Team",
    sectionId: "medical",
    people: [
      {
        name: "Utsav",
        whatsapp: "",
        insta: "#",
        linkedin: "#",
        img: Utsav,
      },
      {
        name: "Pranav Kumar",
        whatsapp: "9876543228",
        insta: "#",
        linkedin: "#",
        img: Pranav,
      },
    ],
  },


  /* ==============================
     🏅 SPORTS COMMITTEES (10)
  =============================== */

  {
    section: "Cricket Committee",
    sectionId: "cricket",
    people: [
      {
        name: "Shiv Prakash",
        role: "Coordinator",

        whatsapp: "8252288190",
        insta: "https://www.instagram.com/abhay08____/",
        linkedin: "https://www.linkedin.com/in/shiv-prakash-3107682a2/",
        img: Shiv,
      },
      {
        name: "Ankit Kumar",
        role: "Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Ankit,
      },
      {
        name: "Aayan Atharv",
        role: "Coordinator",
        whatsapp: "XXXXXXXXXXX",
        insta: "#",
        linkedin: "#",
        img: Aayan,
      },
      {
        name: "Akash Kumar",
        role: "Coordinator",
        whatsapp: "XXXXXXXXXXX",
        insta: "#",
        linkedin: "#",
        img: Akash,
      },
      {
        name: "Krishna Murari",
        role: "Coordinator",
        whatsapp: "XXXXXXXXXXX",
        insta: "#",
        linkedin: "#",
        img: Murari,
      },
      {
        name: "Sonali Kumari",
        role: " Coordinator",
        whatsapp: "XXXXXXXXXXX",
        insta: "#",
        linkedin: "#",
        img: Sonali,
      },
      {
        name: "Bandana",
        role: " Coordinator",
        whatsapp: "XXXXXXXXXXX",
        insta: "#",
        linkedin: "#",
        img: Bandana,
      },
      {
        name: "Ritick",
        role: " Sub Coordinator",
        whatsapp: "XXXXXXXXXXX",
        insta: "#",
        linkedin: "#",
        img: Ritick,
      },
      {
        name: "AbhiRaj",
        role: "Sub Coordinator",
        whatsapp: "XXXXXXXXXXX",
        insta: "#",
        linkedin: "#",
        img: Abhi,
      },
      {
        name: "Ayush",
        role: " Sub Coordinator",
        whatsapp: "XXXXXXXXXXX",
        insta: "#",
        linkedin: "#",
        img: Ayushj,
      },
      {
        name: "Anshu Kumar",
        role: " Member",
        whatsapp: "XXXXXXXXXXX",
        insta: "#",
        linkedin: "#",
        img: Anshu,
      },
      {
        name: "Ashutosh Kumar",
        role: " Member",
        whatsapp: "XXXXXXXXXXX",
        insta: "#",
        linkedin: "#",
        img: Ashutosh,
      },
      {
        name: "Mithun Kumar",
        role: " Member",
        whatsapp: "XXXXXXXXXXX",
        insta: "#",
        linkedin: "#",
        img: Mithun,
      },
      {
        name: "Aryan Kumar",
        role: " Member",
        whatsapp: "XXXXXXXXXXX",
        insta: "#",
        linkedin: "#",
        img: Aryan1,
      },
      {
        name: "Prince Kumar",
        role: " Member",
        whatsapp: "XXXXXXXXXXX",
        insta: "#",
        linkedin: "#",
        img: Prince,
      },
    ],
  },

  {
    section: "Football Committee",
    sectionId: "football",
    people: [
      {
        name: "Om Vats",
        role: "Coordinator",
        tag: "Tournament Control",
        whatsapp: "9876543213",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
      {
        name: "Amit Kumar",
        role: "Sub-Coordinator",
        tag: "Referee",
        whatsapp: "9876543214",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
      {
        name: "Deepak",
        role: "Member",
        tag: "Linesman",
        whatsapp: "9876543215",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
    ],
  },

  {
    section: "Volleyball Committee",
    sectionId: "volleyball",
    people: [
      {
        name: "Prashant Kumar",
        role: "Coordinator",
        whatsapp: "7367055728",
        insta: "https://www.instagram.com/prashantt_1718/",
        linkedin: "https://www.linkedin.com/in/prashantcoder/",
        img: Prashant1,
      },
      {
        name: "Karan Kumar",
        role: "Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Karan,
      },
      {
        name: "Prashant Ranjan",
        role: "Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: PrashantRanjan,
      },
      {
        name: "Akash Jha ",
        role: "Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: AkashJha,
      },
      {
        name: "Arun Prakash ",
        role: "Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Arun,
      },
      {
        name: "Ishika Raj ",
        role: "Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Ishika,
      },
      {
        name: "Mehak ",
        role: "Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Mehak,
      },
      {
        name: "Priyansh ",
        role: " Sub-Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Priyanshuj,
      },
      {
        name: "Pratham ",
        role: " Sub-Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Pratham,
      },
      {
        name: "Ayush Kumar",
        role: " Sub-Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Ayushj,
      },
      {
        name: "Vishal Kumar ",
        role: " Sub-Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Vishal,
      },
      {
        name: "Ashutosh Kumar ",
        role: "Memebr",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Ashutosh,
      },
      {
        name: "Sujeet Kumar",
        role: "Member",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Sujeetj,
      },
      {
        name: "Kundan Kumar",
        role: "Member",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Kundanj,
      },
      {
        name: "Saurav Kumar",
        role: "Member",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Saurav,
      },
      {
        name: "Raushan Kumar",
        role: "Member",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Raushanj,
      },
    ],
  },

  {
    section: "Badminton Committee",
    sectionId: "badminton",
    people: [
      {
        name: "Rohan Kumar",
        role: "Coordinator",
        whatsapp: "9876543219",
        insta: "#",
        linkedin: "#",
        img: Rohan,
      },
      {
        name: "Sujeet Kumar",
        role: "Coordinator",

        whatsapp: "9876543220",
        insta: "#",
        linkedin: "#",
        img: Sujeet,
      },
      {
        name: "Aayan Atharv",
        role: "Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Aayan,
      },
      {
        name: "Ankit Kumar",
        role: "Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Ankit,
      },
      {
        name: "Shiv Prakash",
        role: "Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Shiv,
      },
      {
        name: "Anjali Prakash",
        role: "Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: AnjaliPrakash,
      },
      {
        name: "Anjum ",
        role: "Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Anjum,
      },
      {
        name: "Ashish Kumar ",
        role: "Sub Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Ashish1,
      },
      {
        name: "Vishnu Kumar ",
        role: " SubCoordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Vishnu,
      },
      {
        name: "Hariom Prajapati  ",
        role: "Sub Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Hariom,
      },
      {
        name: "Raunak Kumar ",
        role: " Sub Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Raunak,
      },
      {
        name: "Aditya Kumar Bharti ",
        role: " Sub-Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Aditya,
      },
      {
        name: "Anshu Kumar ",
        role: "Memeber",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Anshu,
      },
      {
        name: "Sushant Himanshu ",
        role: "Memeber",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Sushant,
      },
      {
        name: "Ankit Kumar ",
        role: "Memeber",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Ankitj,
      },
      {
        name: "Mithun Kumar ",
        role: "Memeber",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Mithun,
      },
      {
        name: "Om Dubey ",
        role: "Memeber",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Om,
      },
    ],
  },

  {
    section: "Chess Committee",
    sectionId: "chess",
    people: [
      {
        name: "Shivam Kumar",
        role: "Coordinator",

        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Shivam,
      },
      {
        name: "Aayan Atharv",
        role: "Coordinator",
        whatsapp: "9876543222",
        insta: "#",
        linkedin: "#",
        img: Aayan,
      },
      {
        name: "Mehak ",
        role: "Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Mehak,
      },
    ],
  },

  {
    section: "E-Sports Committee",
    sectionId: "e-sports",
    people: [
      {
        name: "Shiv Prakash",
        role: "Coordinator",
        whatsapp: "9876543223",
        insta: "#",
        linkedin: "#",
        img: Shiv,
      },
      {
        name: "Rohan Kumar",
        role: "Coordinator",
        whatsapp: "9876543224",
        insta: "#",
        linkedin: "#",
        img: Rohan,
      },
      {
        name: "Raushan Kumar",
        role: "Coordinator",
        whatsapp: "9876543224",
        insta: "#",
        linkedin: "#",
        img: Raushan,
      },
      {
        name: "Manish Kumar",
        role: "Coordinator",
        whatsapp: "9876543224",
        insta: "#",
        linkedin: "#",
        img: Manish,
      },
      {
        name: "Akash Kumar",
        role: "Coordinator",
        whatsapp: "9876543224",
        insta: "#",
        linkedin: "#",
        img: Akash,
      },
      {
        name: "Nikhil ",
        role: "Sub Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Nikhil,
      },
      {
        name: "Baibhav Dutta ",
        role: "Sub Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Baibhav,
      },
      {
        name: "Anshu Kumar",
        role: "Member",
        whatsapp: "9876543224",
        insta: "#",
        linkedin: "#",
        img: Anshu,
      },
      {
        name: "Saurav Kumar",
        role: "Member",
        whatsapp: "9876543224",
        insta: "#",
        linkedin: "#",
        img: Saurav,
      },
      {
        name: "Hare Krishan",
        role: "Member",
        whatsapp: "9876543224",
        insta: "#",
        linkedin: "#",
        img: Hare,
      },
      {
        name: "Ankit Kumar",
        role: "Member",
        whatsapp: "9876543224",
        insta: "#",
        linkedin: "#",
        img: Ankitjj,
      },
      {
        name: "Aniket Kumar",
        role: "Member",
        whatsapp: "9876543224",
        insta: "#",
        linkedin: "#",
        img: Aniket,
      },
    ],
  },

  {
    section: "Kabaddi Committee",
    sectionId: "kabaddi",
    people: [
      {
        name: "Shivam Kumar",
        role: "Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Shivam,
      },
      {
        name: "Shubham Kumar",
        role: "Coordinator",
        whatsapp: "9876543226",
        insta: "#",
        linkedin: "#",
        img: Shubham,
      },
      {
        name: "Rajnish raj",
        role: "Coordinator",
        whatsapp: "9876543226",
        insta: "#",
        linkedin: "#",
        img: Rajnish,
      },
      {
        name: "Satish Kumar",
        role: "Coordinator",
        whatsapp: "9876543226",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
      {
        name: "Akib ",
        role: "Coordinator",
        whatsapp: "9876543226",
        insta: "#",
        linkedin: "#",
        img: Akib,
      },
      {
        name: "Vaishali ",
        role: "Coordinator",
        whatsapp: "9876543226",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
      {
        name: "Arachna ",
        role: "Coordinator",
        whatsapp: "9876543226",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
      {
        name: "Akhilesh Kumar ",
        role: "Sub Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Akhilesh,
      },
      {
        name: "Abhinav Kumar ",
        role: "Sub Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Abhinav,
      },
      {
        name: "Piyush Kumar ",
        role: "Sub Coordinator",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Piyush,
      },
      {
        name: " Ashutosh Kumar ",
        role: "Member",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Ashutosh,
      },
      {
        name: " Ranjan Kumar ",
        role: "Member",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Ranjan,
      },
      {
        name: " Ankush Kumar ",
        role: "Member",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Ankush,
      },
      {
        name: " Ashutosh Singh ",
        role: "Member",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Ashutosh1,
      },
      {
        name: " Hare Krishna ",
        role: "Member",
        whatsapp: "9999999999",
        insta: "#",
        linkedin: "#",
        img: Hare,
      },
    ],
  },

  {
    section: "Athletics Committee",
    sectionId: "athletics",
    people: [
      {
        name: "Anjit Kumar",
        role: "Coordinator",

        whatsapp: "9876543227",
        insta: "#",
        linkedin: "#",
        img: Anjit,
      },
      {
        name: "Raushan kumar",
        role: "Coordinator",

        whatsapp: "9876543227",
        insta: "#",
        linkedin: "#",
        img: Raushan,
      },
      {
        name: "Vikash kumar",
        role: "Coordinator",

        whatsapp: "9876543227",
        insta: "#",
        linkedin: "#",
        img: Vikash,
      },
      {
        name: "Ayush kumar",
        role: "Coordinator",

        whatsapp: "9876543227",
        insta: "#",
        linkedin: "#",
        img: Ayush,
      },
      {
        name: "Murari kumar",
        role: "Coordinator",

        whatsapp: "9876543227",
        insta: "#",
        linkedin: "#",
        img: Murari,
      },
      {
        name: "Priyanshu kumari",
        role: "Coordinator",
        whatsapp: "9876543227",
        insta: "#",
        linkedin: "#",
        img: Priyanshu,
      },
      {
        name: "Vipul kumar",
        role: "Sub Coordinator",
        whatsapp: "9876543227",
        insta: "#",
        linkedin: "#",
        img: Vipul,
      },
      {
        name: "Dheeraj kumar",
        role: "Member",
        whatsapp: "9876543227",
        insta: "#",
        linkedin: "#",
        img: Dheeraj,
      },
      {
        name: "Jay kumar",
        role: "Member",
        whatsapp: "9876543227",
        insta: "#",
        linkedin: "#",
        img: Jay,
      },
      {
        name: "Karan kumar",
        role: "Member",
        whatsapp: "9876543227",
        insta: "#",
        linkedin: "#",
        img: Karanj,
      },
      {
        name: "Chitranjan kumar",
        role: "Member",
        whatsapp: "9876543227",
        insta: "#",
        linkedin: "#",
        img: Chitranjan,
      },
    ],
  },

  {
    section: "Table Tennis Committee",
    sectionId: "tt",
    people: [
      {
        name: "Priyanjan Raj",
        role: "Coordinator",
        whatsapp: "9876543228",
        insta: "#",
        linkedin: "#",
        img: Priyanjan,
      },
      {
        name: "Rohan Kumar",
        role: "Coordinator",
        whatsapp: "9876543228",
        insta: "#",
        linkedin: "#",
        img: Rohan,
      },
      {
        name: "Rahul Chaudhary",
        role: "Coordinator",
        whatsapp: "9876543228",
        insta: "#",
        linkedin: "#",
        img: Rahul,
      },
      {
        name: "Anjum ",
        role: "Coordinator",
        whatsapp: "9876543228",
        insta: "#",
        linkedin: "#",
        img: Anjum,
      },
      {
        name: "Abhiskek Mourya ",
        role: "Sub Coordinator",
        whatsapp: "9876543228",
        insta: "#",
        linkedin: "#",
        img: Abhiskekm,
      },
      {
        name: "Rahul Kumar ",
        role: "Sub Coordinator",
        whatsapp: "9876543228",
        insta: "#",
        linkedin: "#",
        img: Rahulj,
      },
    ],
  },

  {
    section: "Carrom Committee",
    sectionId: "carrom",
    people: [
      {
        name: "Aashique Quddus",
        role: "Coordinator",
        whatsapp: "9876543229",
        insta: "#",
        linkedin: "#",
        img: Aashique,
      },
      {
        name: "Avinash Chandra",
        role: "Coordinator",
        whatsapp: "9876543229",
        insta: "#",
        linkedin: "#",
        img: Avinash,
      },
      {
        name: "Raj Aryan",
        role: "Coordinator",
        whatsapp: "9876543229",
        insta: "#",
        linkedin: "#",
        img: RajAryan,
      },
      {
        name: "Anjali Prakash ",
        role: "Coordinator",
        whatsapp: "9876543229",
        insta: "#",
        linkedin: "#",
        img: AnjaliPrakash,
      },
      {
        name: "Priyansh  ",
        role: " Sub Coordinator",
        whatsapp: "9876543229",
        insta: "#",
        linkedin: "#",
        img: Priyanshuj,
      },
      {
        name: "Ajay Shankar  ",
        role: " Sub Coordinator",
        whatsapp: "9876543229",
        insta: "#",
        linkedin: "#",
        img: Ajay,
      },
      {
        name: "Anurag Kumar  ",
        role: " Sub Coordinator",
        whatsapp: "9876543229",
        insta: "#",
        linkedin: "#",
        img: Anuragj,
      },
      {
        name: "Nishant Kumar",
        role: " Member",
        whatsapp: "9876543229",
        insta: "#",
        linkedin: "#",
        img: Nishant,
      },
      {
        name: "Aryan  ",
        role: " Member",
        whatsapp: "9876543229",
        insta: "#",
        linkedin: "#",
        img: Aryan,
      },
      {
        name: "Abhishek  ",
        role: "Member",
        whatsapp: "9876543229",
        insta: "#",
        linkedin: "#",
        img: Abhishek,
      },
      {
        name: "Faruk  ",
        role: "Member",
        whatsapp: "9876543229",
        insta: "#",
        linkedin: "#",
        img: Faruk,
      },
      {
        name: "Ansh  ",
        role: "Member",
        whatsapp: "9876543229",
        insta: "#",
        linkedin: "#",
        img: Ansh,
      },
    ],
  },
  {
    section: "Arm Wrestling",
    sectionId: "armwrestling",
    people: [
      {
        name: "Faiz ",
        role: "Coordinator",
        
        whatsapp: "9876543210",
        insta: "#",
        linkedin: "#",
        img: Faiz,
      },
      {
        name: "Indrajeet Kumar",
        role: "Coordinator",
        whatsapp: "9876543211",
        insta: "#",
        linkedin: "#",
        img: Indrejeet,
      },
      {
        name: "Unnati Bhamini",
        role: "Coordinator",
        whatsapp: "9876543211",
        insta: "#",
        linkedin: "#",
        img: Unnati1,
      },
      
    ],
  },
  {
    section: " Tug of War",
    sectionId: "tugofwar",
    people: [
      {
        name: "Aahan Raj",
        role: "Coordinator",
        whatsapp: "9876543210",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
      {
        name: "Akash Kumar",
        role: "Coordinator",
        
        whatsapp: "9876543211",
        insta: "#",
        linkedin: "#",
        img: AkashRanjan,
      },
      {
        name: "Kundan Kumar",
        role: "Coordinator",
        tag: "Ground Setup",
        whatsapp: "9876543212",
        insta: "#",
        linkedin: "#",
        img: Kundan,
      },
      {
        name: "Unnati Bhamini",
        role: "Coordinator",
        whatsapp: "9876543212",
        insta: "#",
        linkedin: "#",
        img: Unnati1,
      },
    ],
  },
];

const TeamPage = () => {
  const [activeFilter, setActiveFilter] = useState("all"); // all | tech | sports | media
  const [selectedMember, setSelectedMember] = useState(null);

  const filters = [
    { id: "all", label: "All" },
    { id: "tech", label: "Technical" },
    { id: "cricket", label: "Cricket" },
    { id: "football", label: "Football" },
    { id: "volleyball", label: "Volleyball" },
    { id: "badminton", label: "Badminton" },
    { id: "chess", label: "Chess" },
    { id: "e-sports", label: "E-Sports" },
    { id: "kabaddi", label: "Kabaddi" },
    { id: "athletics", label: "Athletics" },
    { id: "tt", label: "Table Tennis" },
    { id: "carrom", label: "Carrom" },
    { id: "armwrestling", label: "Arm Wrestling" },
    { id: "tugofwar", label: "Tug of War" },
  ];

  // Filter sections based on active filter
  const filteredSections =
    activeFilter === "all"
      ? teamData
      : teamData.filter((sec) => sec.sectionId === activeFilter);

  return (
    <main className="bg-black min-h-screen pt-28 pb-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Header */}
        <header className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/90">
            JUNOON 4.0 • CREW
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
            <span className="block text-white">Meet the</span>
            <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent">
              Organizing Team
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-200/80">
            From fixtures to website, every detail of JUNOON 4.0 is powered by
            this dedicated core crew.
          </p>
        </header>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`
                px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold 
                border 
                transition-all duration-200 
                ${
                  activeFilter === f.id
                    ? "bg-gradient-to-r from-sky-500 via-fuchsia-500 to-rose-500 text-black border-transparent shadow-[0_0_20px_rgba(236,72,153,0.7)]"
                    : "bg-white/5 border-white/20 text-slate-200 hover:bg-white/10"
                }
              `}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* SECTION BLOCKS */}
        {filteredSections.map((section, i) => (
          <section key={i} className="space-y-8">
            {/* Section Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent">
              {section.section}
            </h2>

            {/* Cards Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {section.people.map((person, idx) => (
                <article
                  key={idx}
                  onClick={() =>
                    setSelectedMember({ ...person, section: section.section })
                  }
                  className="
                    group relative overflow-hidden cursor-pointer
                    rounded-3xl border border-white/10
                    bg-white/5 backdrop-blur-xl
                    p-6 space-y-4
                    shadow-[0_0_35px_rgba(0,0,0,0.5)]
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:shadow-[0_0_55px_rgba(236,72,153,0.6)]
                  "
                >
                  {/* Glow */}
                  <div
                    className="
                      pointer-events-none absolute -inset-20 -z-10
                      bg-gradient-to-br from-sky-500/25 via-fuchsia-500/20 to-rose-500/25 
                      opacity-0 blur-3xl
                      group-hover:opacity-100
                      transition-opacity duration-300
                    "
                  />

                  {/* Avatar */}
                  <div className="flex justify-center">
                    <img
                      src={person.img}
                      alt={person.name}
                      className="h-50 w-40 rounded-2xl object-cover border border-white/20"
                    />
                  </div>

                  {/* Text */}
                  <div className="text-center space-y-1">
                    <h3 className="text-lg font-bold text-white">
                      {person.name}
                    </h3>
                    <p className="text-sm text-slate-100/80">{person.role}</p>
                    <p className="text-[0.7rem] tracking-[0.25em] uppercase text-sky-300/90">
                      {person.tag}
                    </p>
                  </div>

                  {/* Social Icons (just preview in card) */}
                  <div className="flex justify-center gap-4 text-lg mt-3">
                    {person.insta && (
                      <span className="text-pink-400/80 group-hover:text-pink-300 transition">
                        <FaInstagram />
                      </span>
                    )}
                    {person.linkedin && (
                      <span className="text-blue-400/80 group-hover:text-blue-300 transition">
                        <FaLinkedinIn />
                      </span>
                    )}
                    {person.facebook && (
                      <span className="text-sky-400/80 group-hover:text-sky-300 transition">
                        <FaFacebookF />
                      </span>
                    )}
                  </div>

                  <p className="text-[0.65rem] text-slate-400 text-center mt-1">
                    Tap to view full profile
                  </p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* ========= MODAL POPUP ========= */}
      {selectedMember && (
        <div
          className="
            fixed inset-0 z-50 flex items-center justify-center 
            bg-black/70 backdrop-blur-md
          "
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="
              relative w-full max-w-md mx-4
              rounded-3xl bg-black/90 border border-white/15 
              p-6 space-y-5
              shadow-[0_0_45px_rgba(236,72,153,0.7)]
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="
                absolute top-3 right-3 
                h-8 w-8 flex items-center justify-center
                rounded-full border border-white/20
                text-slate-200 text-sm
                hover:bg-white/10 transition
              "
            >
              <FiX />
            </button>

            {/* Section Label */}
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-sky-300/90 text-center">
              {selectedMember.section}
            </p>

            {/* Avatar */}
            <div className="flex justify-center">
              <img
                src={selectedMember.img}
                alt={selectedMember.name}
                className="h-28 w-28 rounded-3xl object-cover border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              />
            </div>

            {/* Info */}
            <div className="text-center space-y-1">
              <h2 className="text-xl font-bold text-white">
                {selectedMember.name}
              </h2>
              <p className="text-sm text-slate-200">{selectedMember.role}</p>
              <p className="text-[0.7rem] tracking-[0.25em] uppercase text-sky-300/90">
                {selectedMember.tag}
              </p>
            </div>

            {/* Contacts */}
            <div className="space-y-3 text-sm text-slate-200">
              {selectedMember.whatsapp && (
                <a
                  href={`https://wa.me/${selectedMember.whatsapp.replace(
                    /[^0-9]/g,
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2 rounded-2xl bg-white/5 border border-white/15 hover:bg-white/10 transition"
                >
                  <FaWhatsapp className="text-green-400 text-lg" />
                  <div>
                    <p className="text-xs text-slate-300">WhatsApp</p>
                    <p className="text-sm text-white">
                      {selectedMember.whatsapp}
                    </p>
                  </div>
                </a>
              )}

              {selectedMember.email && (
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="flex items-center gap-3 px-3 py-2 rounded-2xl bg-white/5 border border-white/15 hover:bg-white/10 transition"
                >
                  <FiMail className="text-fuchsia-300 text-lg" />
                  <div>
                    <p className="text-xs text-slate-300">Email</p>
                    <p className="text-sm text-white">{selectedMember.email}</p>
                  </div>
                </a>
              )}

              {selectedMember.whatsapp && (
                <div className="flex items-center gap-3 px-3 py-2 text-slate-200">
                  <FiPhone className="text-sky-300" />
                  <span className="text-sm">{selectedMember.whatsapp}</span>
                </div>
              )}
            </div>

            {/* Social links full */}
            <div className="flex justify-center gap-5 pt-3 text-xl">
              {selectedMember.insta && selectedMember.insta !== "#" && (
                <a
                  href={selectedMember.insta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition transform hover:scale-110"
                >
                  <FaInstagram />
                </a>
              )}
              {selectedMember.linkedin && selectedMember.linkedin !== "#" && (
                <a
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 transition transform hover:scale-110"
                >
                  <FaLinkedinIn />
                </a>
              )}
              {selectedMember.facebook && selectedMember.facebook !== "#" && (
                <a
                  href={selectedMember.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 transition transform hover:scale-110"
                >
                  <FaFacebookF />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default TeamPage;
