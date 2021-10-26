import React, { useEffect, useState } from 'react'
import TextField from '../components/textField'
import { validator } from '../utils/validator'

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const validatorConfig = {
    email: {
      isRequired:
        { message: 'Электронная почта обязательна для заполнения' },
      isEmail: { message: 'email введен некорректно' }
    },
    password: {
      isRequired: { message: 'пароль обязателен для заполнения' },
      isCapitalSymbol: {
        message: 'пароль должен содержать хотя бы одну заглавню букву'
      },
      isContainDigit: {
        message: 'пароль должен содержать хотя бы одну цифру'
      },
      min: {
        message: 'пароль должен быть не менне 8 символов',
        value: 8
      }
    }
  }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    // const errors = {}
    const errors = validator(data, validatorConfig)
    // for (const fieldName in data) {
    //   if (data[fieldName].trim() === '') {
    //     errors[fieldName] = `${fieldName} is required`
    //   }
    // }
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const isValid = Object.keys(errors).length === 0

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return // если валидатор не прошел то прекращаем действие функции  - и отправка не будет происходить
    console.log(data)
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h3 className="mb-4">Login</h3>
          <form onSubmit={ handleSubmit }>
            <TextField
              label="Электронная почта"
              // type="text" так как задан по умолчанию
              name="email"
              value={ data.name }
              onChange={ handleChange }
              error={ errors.email } />
            <TextField label="Пароль" type="password" name="password" value={ data.password } onChange={ handleChange } error={ errors.password } />
            <button type='submit' disabled={ !isValid } className="btn btn-primary w-100 mx-a">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  )
}
// type='button' - отправки формы происходить не будет
// type='submit'  - тип по умолчанию - можно не прописывать
// так как поля являются контролируемыми то получить значения полей можно из data
// так как пользователь может нажть отправку до того как все поля будут занесены
// в состояние  - то необходимо контролировать процесс отправки

export default Login

  // < div >
  //       <label htmlFor="email">Email</label><input
  //         type="text"
  //         id="email"
  //         name="email"
  //         value={ data.email }
  //         onChange={ handleChange } />
  //    </ >
  // <div>
  //   <label htmlFor="password">Password</label><input type="password"
  //     id="password"
  //     name="password"
  //     value={ data.password }
  //     onChange={ handleChange } />
  // </div>
