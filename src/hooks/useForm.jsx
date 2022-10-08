import { useState } from "react"


const useForm = (initialForm = {}) => {

  const [formValue, setFormValue] = useState(initialForm)

  const onInputChange = ({target}) => {
    const {name, value} = target

    setFormValue({
      ...formValue,
      [name]: value
    })
  }
  
  return {
    ...formValue,
    formValue,
    onInputChange
  } 
}

export default useForm