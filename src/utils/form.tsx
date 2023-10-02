const validateTheEmail = (email: any) => {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const validatePassword = (password: string) => {
  if (password.length < 6) {
    return false
  }

  if (!/[A-Z]/.test(password)) {
    // Verifique se a senha contém pelo menos uma letra maiúscula
    return false
  }

  // Verifique se a senha contém apenas letras maiúsculas, minúsculas ou números
  if (!/^[A-Za-z0-9@]+$/.test(password)) {
    return false
  }

  // Verifique se a senha contém pelo menos um caractere especial
  if (!/[@#$%^&+=]/.test(password)) {
    return false
  }

  return true
}

export { validateTheEmail, validatePassword }
