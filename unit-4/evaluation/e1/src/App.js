// import Courses ,Title and UserCard here
// keep a user object with mentioned properties and pass down to UserCard as prop
import Title from "./Components/Title";
import UserCard from "./Components/UserCard";
import Courses from "./Components/Courses";
export default function App() {
  let user={
    avatar:"https://avatars.githubusercontent.com/u/110045723?v=4",
    name:"waseem",
    address:"asd  ff",
    followers:12345,
    posts:123434,
  };
  return <>
<Title/>
<UserCard
  avatar={user.avatar} name={user.name} address={user.address} posts={user.posts} />
  <Courses />
  </>;
}
