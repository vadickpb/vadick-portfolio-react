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

  const onResetForm = () => {
    setFormValue(initialForm)
  }
  
  return {
    ...formValue,
    formValue,
    onInputChange,
    onResetForm
  } 
}

export default useForm