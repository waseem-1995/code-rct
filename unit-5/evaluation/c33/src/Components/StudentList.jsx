import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { useSearchParams } from "react-router-dom";
import { getStudents } from "../Redux/StudentReducer/action";
import { StudentCard } from "./StudentCard";

export const StudentList = () => {
  const dispatch=useDispatch()
  const students=useSelector((store)=>store.studentReducer.students)
  const [searchParams]=useSearchParams()

  const paramObj={
    params:{
      batch:searchParams.getAll("batch"),
      _limit:10,
      _page:searchParams.get("page")
    }
  }

  useEffect(()=>{
    dispatch(getStudents(paramObj))
  },[searchParams])

  return (
    <div>
      <div data-testid="student-list">
        {/* Map through the student list using StudentCard component  */}

        {students.length>0 &&
          students.map((el)=>{
            return<StudentCard key={el.id} {...el} />
          })
        }
        
      </div>
    </div>
  );
};
