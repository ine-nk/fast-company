export function validator(data, config) {
  const errors = {}
  function validate(validateMethod, data, config) {
    let statusValidate
    switch (validateMethod) {
      case 'isRequired':
        statusValidate = data.trim() === ''
        // if (data.trim() === '') return config.message
        break
      case 'isEmail': {
        const emailReExp = /^\S+@\S+\.\S+$/g
        statusValidate = !emailReExp.test(data)
        // if (!emailReExp.test(data)) return config.message
        break
      }
      case 'isCapitalSymbol': {
        const capitalReExp = /[A-Z]/g
        statusValidate = !capitalReExp.test(data)

        // if (!capitalReExp.test(data)) return config.message
        break
      }
      case 'isContainDigit': {
        const digitRegExp = /\d+/g
        statusValidate = !digitRegExp.test(data)
        break
      }
      case 'min': {
        statusValidate = data.length < config.value
        break
      }
      default:
        break
    }
    if (statusValidate) return config.message
  }
  // data  - это состония у которого есть имена полей
  for (const fieldName in data) {
    // получили имя поля и далее надо получить конфигурацию для этого поля
    for (const validateMethod in config[fieldName]) {
      const error = validate(validateMethod, data[fieldName], config[fieldName][validateMethod])
      if (error && !errors[fieldName]) {
        console.log('error = ', error, '\nerrors[fieldName] = ', errors[fieldName])
        errors[fieldName] = error
      }
    }
  }
  return errors
}
