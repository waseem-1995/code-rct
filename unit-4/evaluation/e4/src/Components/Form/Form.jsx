
export default function Form() {
  
// TODO: Remove below const and instead import them from chakra
  const Button = () => <div />;
  const Checkbox = () => <div />;
  const FormControl = () => <div />;
  const FormLabel = () => <div />;
  const Input = () => <div />;

  return (
      <div className = "addHouseContainer" >
        <form className = "form" >
          <FormControl>
              <Input className = "name" placeholder = "Name" />
              <Input className = "ownerName" placeholder = "Owners name" />
              <Input className = "address" placeholder = "Address" />
              <Input className = "areaCode" placeholder = "Area code" />
              <Input className = "rent" placeholder = "Rent" />
              <Checkbox className = "bachelor" >
                <FormLabel>Married Tenants Allowed</FormLabel>
              </Checkbox>
              <br />
              <Checkbox className = "married" >
                <FormLabel>Bachelor Tenants Allowed</FormLabel>
              </Checkbox>
              <br />
              <Button className = "submitBtn" > Submit</Button>
          </FormControl>
        </form>
      </div>
  )
}
