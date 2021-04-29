import React from 'react';
import styled from 'styled-components';
import backimg from './backreal.png'
import { NavigationBar } from './components/Navigation';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import chart from './chart.png'
import piechart from './piechart.png'
import ProgressBar from "@ramonak/react-progress-bar";
import { Icon, InlineIcon } from '@iconify/react';
import threeDots from '@iconify-icons/bi/three-dots';
import threeDotsVertical from '@iconify-icons/bi/three-dots-vertical';
import profileIcon from '@iconify-icons/gg/profile';


 
const UserInfo = ({name, field}) => {
  return (
    <div className="row" style={{paddingTop:"20px"}}>
    <div className="col-2">
    <Icon icon={profileIcon} color="white" width="35px" height="35px" />
    </div>
    <div className="col-6" style={{textAlign:"left"}}>
      <div style={{fontSize:"15px"}}>{name}</div>
      <div style={{fontSize:"10px"}}>Applied for <span style={{color:"#1589FF"}}>{field}</span></div>
    </div>
    <div className="col-2">
    <div className="col-2" style={{ width:"40px", height:"40px",textAlign:"center"}}>
    <i className="fa fa-envelope" aria-hidden="true" />
    </div>
    </div>
    <div className="col-2" style={{ width:"40px", height:"40px",textAlign:"center"}}>
    <i className="fa fa-phone" aria-hidden="true" />
    </div>
 </div>
  )
}




export const Home = () => {
  return (
    <div>

    <NavigationBar/>

    <div className="row ">
    <div className="col-9">
    <div className="row">
    <div className="col-4">

      <div className="card text-white " style={{backgroundColor:"#222", borderRadius:"10px", height:"120px",width:"300px",  marginLeft:"70px",border:"1px solid #565051"}}>

       <div className="row">

        <div className="col-8">
        <div style={{paddingTop:"20px"}}>Total Applications</div>
        <div style={{paddingTop:"10px", fontWeight:"inherit", fontSize:"23px", textAlign:"left", paddingLeft:"33px"}}><strong>7956</strong></div>
        <div style={{color:"#A74AC7", fontSize:"10px", fontWeight:"inherit", textAlign:"left",paddingLeft:"33px"}}>+3.59%</div>
        </div>

        <div className="col-4">
        <div><Icon icon={threeDots} color="white" width="15px" height="15px" /></div>
        <div style={{width:"60px", height:"60px", paddingTop:"20px"}}>
        <CircularProgressbarWithChildren value={70} strokeWidth="8" styles={{
          path: {
          // Path color
          stroke: '#A74AC7',
          strokeLinecap: 'butt',
          transformOrigin: 'center center',
           },
        }}>
        <div style={{ fontSize: 10 , width:"30px", color:"#A74AC7", textAlign:"center"}}>
        <span>+70%</span>
        </div>
        </CircularProgressbarWithChildren>
        </div>
        </div>
       </div>

      </div>
      </div>

       <div className="col-4">

        <div className="card text-white" 
        style={{backgroundColor:"#222", borderRadius:"10px", height:"120px",width:"300px", marginLeft:"50px",border:"1px solid #565051"}}> 

        <div className="card text-white" 
        style={{backgroundColor:"#0C76E5", marginTop:"10px", marginLeft:"10px", borderRadius:"10px", border:"1px solid #565051", height:"120px",width:"300px"}}>
               

        <div className="row">

          <div className="col-8">
            <div style={{paddingTop:"10px"}}>Shortlisted Candidates</div>
            <div style={{paddingTop:"10px", fontWeight:"inherit", fontSize:"23px", textAlign:"left", paddingLeft:"33px"}}><strong>4658</strong></div>
            <div style={{fontSize:"10px", fontWeight:"inherit", textAlign:"left",paddingLeft:"33px"}}>-0.6%</div>
            </div>
            <div className="col-4">
            <div><Icon icon={threeDots} color="white" width="15px" height="15px" /></div>
            <div style={{width:"60px", height:"60px", paddingTop:"10px"}}>
            <CircularProgressbarWithChildren value={60} strokeWidth="8" styles={{
             path: {
             // Path color
             stroke: '#F0FFFF',
             strokeLinecap: 'butt',
             transformOrigin: 'center center',
              },
              }}>
             <div style={{ fontSize: 10 , width:"30px", color:"white", textAlign:"center"}}>
             <span>+60%</span>
            </div>
            </CircularProgressbarWithChildren>
            </div>
             </div>
        </div>
             
            
            </div>
         </div>
         </div>

        <div className="col-4">
           <div className="card text-white" style={{backgroundColor:"#222", borderRadius:"10px", height:"120px",width:"300px", marginLeft:"50px",border:"1px solid #565051"}}>
           
           <div className="row">

           <div className="col-8">
            <div style={{paddingTop:"20px"}}>Total Applications</div>
            <div style={{paddingTop:"10px", fontWeight:"inherit", fontSize:"23px", textAlign:"left", paddingLeft:"33px"}}><strong>1501</strong></div>
            <div style={{color:"#DC3817", fontSize:"10px", fontWeight:"inherit", textAlign:"left",paddingLeft:"33px"}}>-0.4%</div>
           </div>
            <div className="col-4">
            <div><Icon icon={threeDots} color="white" width="15px" height="15px" /></div>
          <div style={{width:"60px", height:"60px", paddingTop:"20px"}}>
          <CircularProgressbarWithChildren value={40} strokeWidth="8" styles={{
          path: {
            // Path color
            stroke: '#DC3817',
            strokeLinecap: 'butt',
            transformOrigin: 'center center',
          },
          }}>
          <div style={{ fontSize: 10 , width:"30px", color:"#DC3817", textAlign:"center"}}>
            <span>+40%</span>
          </div>
          </CircularProgressbarWithChildren>
           </div>
           </div>
         </div>
           
           
           
        </div>
    
        </div>
        </div>





        <div className="row">
          <div className="col-8">
          <div className="card text-white" style={{backgroundColor:"#222", borderRadius:"10px", height:"300px",   width:"750px", marginLeft:"70px", marginTop:"30px", border:"1px solid #565051"}}> 
          
          <div className="row">
           <div className="col-3" style={{fontSize:"15px", paddingTop:"10px"}}>Application Recevied</div>
           <div className="col-2" style={{fontSize:"15px", paddingTop:"10px"}}>This Year</div>
           <div className="col-2" style={{fontSize:"15px", paddingTop:"10px"}}>This Week</div>
           <div className="col-2" style={{fontSize:"15px", paddingTop:"10px"}}>Today</div>
           <div className="col-3">
           <div className="row" style={{textAlign:"left"}}>
           <div className="col-8"style={{fontSize:"13px", paddingTop:"10px"}}>Download Report</div>
           <div className="col-4" style={{textAlign:"left", paddingTop:"10px"}}><Icon icon={threeDotsVertical} color="white" width="12px" height="12px" /></div>
           </div>
          </div>
          </div>
          <div className="row" style={{width:"650px", height:"400px", paddingLeft:"60px", marginLeft:"20px"}}><img src={chart}/></div>
          
          </div> 
          </div>

          <div className="col-4">
            <div className="card text-white" style={{backgroundColor:"#222", borderRadius:"10px", height:"300px",width:"270px", marginLeft:"70px" , marginTop:"30px", border:"1px solid #565051"}}> 
            
            <div style={{paddingTop:"20px"}}>Total Applications</div>
            <div className="row" style={{paddingLeft:"40px"}}>
              <ul>
              <li style={{color:"#98AFC7", fontSize:"20px", marginTop:"10px"}}>

              <div className="row">
                <div className="col-4" style={{fontSize:"10px"}}>Applicants</div>
                <div className="col-8">


                {/* first progressbar*/ }
                <ProgressBar completed={40} height="10px" bgColor="#98AFC7" labelAlignment="center" labelSize="8px" width="100px" baseBgColor="#565051" />
                
                </div>
              </div></li>
              <li style={{color:"#1589FF", fontSize:"20px", marginTop:"10px"}}>
              <div className="row">
                <div className="col-4" style={{fontSize:"10px"}}>Short Listed</div>
                <div className="col-8">

                {/* second progressbar*/ }
                <ProgressBar completed={70} height="10px" bgColor="#1589FF" 
                labelAlignment="center" labelSize="8px" width="100px" baseBgColor="#565051"/>
                
                </div>
              </div>
              </li>
              <li style={{color:"#DC3817",fontSize:"20px", marginTop:"10px"}}>
              <div className="row">
                <div className="col-4" style={{fontSize:"10px"}}>Rejected</div>
                <div className="col-8">

                {/* third progressbar*/ }
                <ProgressBar completed={40} height="10px" bgColor="#DC3817" 
                labelAlignment="center" labelSize="8px" width="100px" baseBgColor="#565051"/>

                </div>
              </div>
              </li>
              <li style={{color:"#E6A9EC", fontSize:"20px", marginTop:"10px"}}>
              <div className="row">
                <div className="col-4" style={{fontSize:"10px"}}>On hold</div>
                <div className="col-8">

                {/* fourth progressbar*/ }
                <ProgressBar completed={20} height="10px" bgColor="#E6A9EC" 
                labelAlignment="center" labelSize="8px" width="100px" baseBgColor="#565051"/>

                </div>
              </div>
              </li>
              <li style={{color:"#A74AC7",fontSize:"20px", marginTop:"10px"}}>
              <div className="row">
              <div className="col-4" style={{fontSize:"10px"}}>Finalised</div>
              <div className="col-8">

              {/* fifth progressbar*/ }
              <ProgressBar completed={80} height="10px" bgColor="#A74AC7" labelAlignment="center" labelSize="8px" width="100px" baseBgColor="#565051"/>

              </div>
            </div>
              </li>
              </ul>
            </div>
            </div>
            </div>
            </div>

          <div className="row">
          <div className="col-8">
          <div className="card text-white" style={{backgroundColor:"#222", borderRadius:"10px", height:"300px",   width:"750px", marginLeft:"70px", marginTop:"30px", border:"1px solid #565051"}}>
             
          <div className="row" style={{paddingTop:"40px"}}>
          <div className="col-6" >
            <div>Referals and Campaign Stats</div>
          </div>
          <div className="col-6">
            <div style={{color:"#DC3817"}}>40 Campaign sent in total</div>
            <div>4 Campaign sent in last month</div>
          </div>
          </div>
          <div className="row" style={{paddingTop:"40px"}}>
           <div className="col-3" style={{paddingLeft:"100px", borderRight:"1px solid #565051"}}>
             <div className="row" style={{fontSize:"10px"}}>User's Reached</div>
             <div className="row" style={{fontSize:"10px", color:"#1589FF", paddingTop:"10px"}}>+3.59%</div>
             <div className="row"style={{fontWeight:"inherit"}}>7596</div>
           </div>

           <div className="col-3" style={{paddingLeft:"100px", borderRight:"1px solid #565051"}}>
             <div className="row" style={{fontSize:"10px"}}>Referals</div>
             <div className="row" style={{fontSize:"10px", color:"#1589FF", paddingTop:"10px"}}>+9.01%</div>
             <div className="row"style={{fontWeight:"inherit"}}>0662</div>
           </div>

           <div className="col-3" style={{paddingLeft:"100px", borderRight:"1px solid #565051"}}>
             <div className="row" style={{fontSize:"10px"}}>Shares</div>
             <div className="row" style={{fontSize:"10px", color:"#1589FF", paddingTop:"10px"}}>+39.18%</div>
             <div className="row"style={{fontWeight:"inherit"}}>1478</div>
           </div>

           <div className="col-3" style={{paddingLeft:"100px"}}>
             <div className="row" style={{fontSize:"10px"}}>Applications</div>
             <div className="row" style={{fontSize:"10px", color:"#1589FF", paddingTop:"10px"}}>+12.00%</div>
             <div className="row"style={{fontWeight:"inherit"}}>0564</div>
           </div>
          
          </div>
          <div className="row" style={{paddingTop:"30px"}}>
            <div className="col-6" >
               <button className="btn btn-primary block round" style={{fontSize:"12px", width:"250px", height:"45px"}}>Start a New campaign now</button>
            </div>
            <div className="col-6">
            <button className="btn btn-danger block round" style={{fontSize:"12px", width:"250px", height:"45px"}}>Pause all running campaign</button>
            </div>
          </div>
          
          </div> 
          </div>

          <div className="col-4">
            <div className="card text-white" style={{backgroundColor:"#222", borderRadius:"10px", height:"300px",width:"270px", marginLeft:"70px" , marginTop:"30px", border:"1px solid #565051"}}> 
            <div className="row">
            <div className="col-10">
            <div style={{fontSize:"12px", textAlign:"left", paddingLeft:"20px", marginTop:"20px"}}>Open Position By Department</div>
            </div>
            <div className="col-2" style={{textAlign:"left", padding:"10px"}}><Icon icon={threeDots} color="white" width="15px" height="15px" /></div>
            </div>
            <div><img src={piechart} style={{width:"220px", height:"220px", marginTop:"30px"}}/></div>
            </div>
            </div>
          </div>

       </div>

    <div className="col-3">{
      <div className="card text-white" style={{backgroundColor:"#222", marginTop:"20px", borderRadius:"10px", border:"1px solid #565051"}}>
            <div className="card-header lead text-center text-white" style={{fontSize:"15px"}}>Hello John Bayer,<br/>You have 8 New Applications Today!</div>
            <div className="card-body">
               <img src={backimg} style={{ height:"250px", width:"350px"}}/>
                <div className="card text-white bg-dark" style={{borderRadius:"30px", width:"350px"}}>
                <div className="card-header lead text-white" style={{fontSize:"18px", textAlign:'left'}}>New Applicants
                    <UserInfo name="Rosie Mettes." field="iOS Developer"/>
                    <UserInfo name="James Scotts" field="Marketing"/>
                    <UserInfo name="Jamie Laurenson" field="Web Developer"/>
                    <UserInfo name="Elizabet Hurton" field="Software Developer"/>
                    <UserInfo name="Danny Watson" field="Android Developer"/>
                    <UserInfo name="Reha Scarlet" field="DevOops"/>
                 </div>
                   <div/>
                </div>
            </div>
          </div>
    }</div>
  </div>
  </div>
  )
  
  }