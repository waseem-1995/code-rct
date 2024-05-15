// Your code goes here
// do a default export
import {useState} from"react";

const UserCard=(props)=>{
    let {name,avatar,posts,followers,address}=props;
    let[followBtn,setFollowBtn]=useState(false);
    return(
        <div>
            <div style={{display:"flex"}}>
                <img src={avatar} alt={name} style={{borderRadius:"50%"}} />
                <div style={{margin:"1rem"}}></div>
                <div>
                <h2 data-testid="user_name">{name}</h2>
                <p  data-testid = "user_address">{address}</p>
                <h3>Posts</h3>
                <p data-testid = "user_posts">{posts}</p>
                <h3>Followers</h3>
                <p data-testid ="user_followers">{followers}</p>
                </div>
            </div>
               <div>
                    <button onClick={()=>setFollowBtn(!followBtn)} style={{padding:"0.5rem"}}>
                        {followBtn ? "following" : "follow"}
                    </button>
               </div>
        </div>
    )
}
export default UserCard
  