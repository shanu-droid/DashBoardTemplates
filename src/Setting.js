import blogo from './blogo.png'
import ReactRoundedImage from "react-rounded-image";
import profimg from './profimg.jpg'
import sk from './sk.jpeg'
import sr from './sr.jpeg'
import sp from './sp.jpeg'
import ss from './ss.jpeg'
import sl from './sl.jpg'



export const Setting = () => {
    return (
        <div className="row" >

            <div className="col-4" style={{height:"100%"}}>
            <div style={{textAlign:"left"}}>
            <img src={blogo} style={{width:"50px", height:"50px", marginLeft:"80px", marginTop:"50px"}}/>
            </div>

            <div className="row">
            <div className="col-3" style={{ marginTop:"60px"}}>
            <div style={{paddingLeft:"80px"}}>
            <ReactRoundedImage image={profimg} roundedSize="0" imageWidth="50" imageHeight="50" />
            </div>
            </div>

            <div className="col-9" style={{textAlign:"left",  marginTop:"60px"}}>
                <div style={{fontSize:"18px", color:"white", marginLeft:"15px"}}>
                Shreya Malik</div>
                <div style={{fontSize:"12px", color:"#B6B6B4", marginLeft:"15px"}}>
                sher@ya.com</div>
                </div>
            </div>
            <div style={{color:"white", textAlign:"left", paddingLeft:"80px", marginTop:"80px"}}>
             Motivation</div>
            <div className="row" style={{marginTop:"15px"}}>
                <div className="col-6" style={{ color:"#5C5858", paddingRight:"10px"}}>
                Productivity</div>
                <div className="col-6" style={{textAlign:"left"}}>
                <button className="btn " style={{background:"#F778A1", width:"80px",  height:"30px", fontSize:"10px"}}>
                 New</button></div>
                </div>
                <div style={{marginTop:"10px", color:"#5C5858",paddingLeft:"80px", textAlign:"left"}}>
                Design</div>
                <div style={{marginTop:"10px", color:"#5C5858",paddingLeft:"80px", textAlign:"left"}}>
                Study</div>

                <div style={{ background:"#5C5858", height:"150px", width:"250px", marginLeft:"80px", marginTop:"30px", borderRadius:"10px"}}>
                <div className = "row">
                    <div className="col-3" style={{ color:"#F778A1", marginTop:"50px", textAlign:"right"}}>
                    <i className="fas fa-rocket fa-3x"></i></div>
                    <div className="col-9">
                    <div style={{color:"whitesmoke", paddingTop:"20px", paddingRight:"10px"}}>
                    Pro account is more powerful. Get 30% off</div>
                    <div className="col-6" style={{paddingTop:"20px", paddingLeft:"25px"}}>
                    <button className="btn " style={{background:"white", width:"80px", height:"30px", fontSize:"10px", color:"#F778A1"}}>
                    Get Pro</button></div>
                    </div>
                </div> 
                </div>
                <div style={{marginTop:"50px", textAlign:"left",marginLeft:"90px", marginBottom:"40px"}}>
                <a href="/" style={{color:"white", textDecoration:"none", fontSize:"20px"}}>Log Out</a>
                </div>
           </div>


           <div className="col-8" style={{background:"#2C3539", width:"1000px", borderRadius:"20px", marginTop:"20px", marginRight:"20px"}}>
               <div style={{fontSize:"30px",textAlign:"left", fontWeight:"bolder", color:"white", marginTop:"30px", marginLeft:"30px"}}>Motivation
               </div>
            <div className="row" style={{paddingTop:"20px"}}>
               <div className="col-9">
                   <div className="row">
                       <div className="col-2" style={{color:"white", fontSize:"15px"}}>All</div>
                       <div className="col-2" style={{color:"white", fontSize:"15px"}}>Actions</div>
                       <div className="col-2" style={{color:"white", fontSize:"15px"}}>Podcast</div>
                       <div className="col-2" style={{color:"white", fontSize:"15px"}}>Video</div>
                       <div className="col-2" style={{color:"white", fontSize:"15px"}}>Downloads</div>
                       <div className="col-2">
                       <button style={{background:"#F778A1", width:"80px", height:"30px", fontSize:"10px", borderRadius:"5px", color:"white"}}>Play All</button>
                       </div>
                   </div>
               </div>
           </div>

           <div className="row">
               <div className="col-6" style={{borderRadius:"20px", height:"500px", marginLeft:"50px", width:"370px", marginTop:"20px", backgroundImage:`url(${sp})`, backgroundSize:"cover", backgroundPosition: "center"}}/>
               <div className="col-6" style={{borderRadius:"20px", height:"500px", background:"white", marginLeft:"30px", width:"250px", marginTop:"20px", backgroundImage:`url(${sr})`, backgroundSize:"cover", backgroundPosition: "center"}}/>
               <div className="col-3" style={{borderRadius:"20px", height:"500px", background:"white", marginLeft:"30px", width:"250px", marginTop:"20px", backgroundImage:`url(${sl})`, backgroundSize:"cover", backgroundPosition: "center"}}/>
               <div className="col-3" style={{borderRadius:"20px", height:"300px", background:"white", marginLeft:"50px", width:"270px", marginTop:"20px", backgroundImage:`url(${ss})`, backgroundSize:"cover", backgroundPosition: "center"}}/>
               <div style={{borderRadius:"20px", height:"300px", background:"white", marginLeft:"30px", width:"600px",marginTop:"20px",backgroundImage:`url(${sk})`, backgroundSize:"cover", backgroundPosition: "center"}}/>
           </div>
               

           </div>
        </div>
    )
}

