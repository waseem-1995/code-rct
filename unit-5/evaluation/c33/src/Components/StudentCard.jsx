import { Link } from "react-router-dom";

export const StudentCard = ({id,name,Poster,green_card,batch}) => {
  return (
    <div className={"student-card"}>
      {/* Show student details here with a button to view details */}
      <Link to={`/students/${id}`}>
      <img src={Poster} alt="Poster" />
      </Link>
      
      <p className="student-name">{name}</p>
      <p className="student-batch">{batch}</p>
      <h3 className="student-green-card">{green_card}</h3>
     
    </div>
  );
};

// Show image in image tag with class `student-image`
// - Show name with class `student-name`
// - Show batch in p tag with class `student-batch`
// - Show the number of green card in h3 tag with class `student-green-card`
// - Show `View Details` button with class `student-detail`
// * Do not add any extra text, only response values should be present *