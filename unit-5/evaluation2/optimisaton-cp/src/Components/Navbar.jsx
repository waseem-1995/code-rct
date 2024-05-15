import { NavLink } from "react-router-dom"

const links=[
    {
      to:"/coffee-data",
      title:"CoffeeData"
    },
    {
      to:"/employee-data",
      title:"EmployeeData"
    },
    {
      to:"/restaurant-data",
      title:"RestaurantData"
    }

]

function Navbar() {
    return(
        <div className = "navbar" >
            {
      links.map((link)=>(
        <NavLink
            exactstyle={{gap:"40px"}}
            key={link.to}
            to={link.to}
        >
          {link.title}
        </NavLink>
      ))
    }

        </div>
    )
}

export { Navbar }