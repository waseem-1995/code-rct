import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export const StudentDetail = () => {
  const {id}=useParams()
      const [data,setData]=useState({})
      const students=useSelector((store)=>store.studentReducer.students)

      useEffect(()=>{
          const studentDetails=students.find((el)=>el.id===+id)
          studentDetails && setData(studentDetails)
      },[])
  return (
    <div className={"student-card"}>
      <h3 className="student-id">{data.id} </h3>
      <img src={data.Poster} alt="poster" className="student-image"/>
      <h3 className="student-name">{data.name}</h3>
      <p className="student-code">{data.student_code}</p>
      <p className="student-batch">{data.batch}</p>
      <p className="student-score">{data.score}</p>
      <h3 className="student-green-card"> {data.green_card}</h3>
    </div>
  );
};

// `
// - Show the `student id` in h3 tag with class `student-id`
// - Show image in image tag with class `student-image`
// - Show name with class `student-name`
// - Show student code in p tag with class `student-code`
// - Show batch in p tag with class `student-batch`
// - Show score in p tag with class `student-score`
// - Show the number of green cards in h3 tag with class `student-green-card`
