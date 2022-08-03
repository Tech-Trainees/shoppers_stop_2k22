 import React, { useState } from "react";
 import '../assets/styles/About_Us_Component.css';
 import About_Us_data from './About_Us_Data';
 import Top_Categories_Data from './Top_Categories_Data';
 import Quick_Links_Data from './Quick_Links_Data';
 import Help_Data from './Help_Data';
 import Policies_Data from './Policies_Data';
 import Inspire_Me_Data from './Inspire_Me_Data';
  
export default function About_Us_Component(){
    const [aboutUsList,SetaboutUsList] = useState(About_Us_data);
    const [topCategoriesData,SettopCategoriesData] = useState(Top_Categories_Data);
    const [quickLinksList,SetquickLinksList] = useState(Quick_Links_Data);
    const [helpDataList,SethelpDataList] = useState(Help_Data);
    const [policiesList,SetpoliciesList] = useState(Policies_Data);
    const [inspireMeList,SetinspireMeList] = useState(Inspire_Me_Data);
    return(
        <div>
            <div className="About_Us_div">About Us
            <div>
                {aboutUsList.map((item)=>{
                    const{link}=item;
                    return(
                        <div className="aboutUsList_map">{link}</div>
                    )
                })}
            </div>                                               
            </div>
            <div className="Top_Categories_div">Top Categories
            <div>
                {topCategoriesData.map((item)=>{
                    const{link}=item;
                    return(
                        <div className="topCategoriesData_map">{link}</div>
                    )
                })}
            </div>                                   
            </div>
            <div className="Quick_Links_div">Quick Links
            <div>
                {quickLinksList.map((item)=>{
                    const{link}=item;
                    return(
                        <div className="quickLinksList_map">{link}</div>
                    )
                })}
            </div>                                   
            </div>
            <div className="Help_div">Help
            <div>
                {helpDataList.map((item)=>{
                    const{link}=item;
                    return(
                        <div className="helpDataList_map">{link}</div>
                    )
                })}
            </div>                                   
            </div>
            <div className="Policies_div">Policies
            <div>
                {policiesList.map((item)=>{
                    const{link}=item;
                    return(
                        <div className="policiesList_map">{link}</div>
                    )
                })}
            </div>                     
            </div>
            <div className="Inspire_Me_div">Inspire Me
            <div>
                {inspireMeList.map((item)=>{
                    const{link}=item;
                    return(
                        <div className="inspireMeList_map">{link}</div>
                    )
                })}
            </div>                     
            </div>         
            <div className="lastdivline"></div>    
            <div className="rightsReserved">© ShoppersStopBeauty. 2022. All Rights Reserved.</div>
            <div className="PrivacyPolicy_lastdiv">Privacy Policy</div>
            <div className="Conditions_lastdiv">Terms & Conditions</div>
            <div className="Disclaimer_lastdiv">Disclaimer</div>
        </div>
    )
}