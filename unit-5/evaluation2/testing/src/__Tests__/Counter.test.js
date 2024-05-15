import Counter from "../Counter"
import {fireEvent, render, screen} from "@testing-library/react"

describe("Test the counter Component",()=>{
    it("should render without any error",()=>{
        render(<Counter/>)
        const text=screen.getByTestId("Counter")
        const addbutton=screen.getByTestId("Add-Button")
        const redbutton=screen.getByTestId("Reduce-Button")
        expect(text).toBeInTheDocument()
        expect(addbutton).toBeInTheDocument()
         expect(redbutton).toBeInTheDocument()
    })
    it("should have add and reduce buttons",()=>{
        render(<Counter/>)
        const addbutton=screen.getByTestId("Add-Button")
        const redbutton=screen.getByTestId("Reduce-Button")
        expect(addbutton).toBeInTheDocument()
        expect(redbutton).toBeInTheDocument()
    })
    it("should have an element with counter value as default ( 0 )",()=>{
        render(<Counter/>)
        const text=screen.getByTestId("Counter")
        expect(text).toHaveTextContent("Counter:0")

    })
    it("onClick of ADD, value of Counter should increment by 5",()=>{
        render(<Counter/>)
        const text=screen.getByTestId("Counter")
        expect(text).toHaveTextContent("Counter:0")
        const addbutton=screen.getByTestId("Add-Button")
        fireEvent.click(addbutton)
        expect(text).toHaveTextContent("Counter:5")
        fireEvent.click(addbutton)
        expect(text).toHaveTextContent("Counter:10")
    })
  

    it("onClick of reduce, value of Counter should decrement by 5",()=>{
        render(<Counter/>)
        const text=screen.getByTestId("Counter")
        expect(text).toHaveTextContent("Counter:0")
        const redbutton=screen.getByTestId("Reduce-Button")
        fireEvent.click(redbutton)
        expect(text).toHaveTextContent("Counter:-5")
        
    })
   

})