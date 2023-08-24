const errorClass = 'error'

const nameInput = document.getElementById('name')
const nameDiv = document.getElementById('name-div')

function nameValidation(){
  const nameValue = nameInput.value.trim()

  if(nameValue.length < 6){
      nameDiv.classList.add(errorClass)
      return false
  }else{
      nameDiv.classList.remove(errorClass)
      return true
  }
}

nameInput.addEventListener('input', () => {
    const nameValue = nameInput.value
    const cleanValue = nameValue.replace(/\d/g, '')
    const maxCleanValue = cleanValue.replace(/[^\w\sÀ-ÖØ-öø-ÿ]|!/gi, '')
    nameInput.value = maxCleanValue
    nameValidation()
})

const mailInput = document.getElementById('mail')
const mailDiv = document.getElementById('mail-div')

function mailValidation(){
    const mailValue = mailInput.value.trim()

    if(mailValue.length < 10 || mailValue.includes('@') === false || mailValue.includes('.') === false){
        mailDiv.classList.add(errorClass)
        return false
    }else{
        mailDiv.classList.remove(errorClass)
        return true
    }
}

mailInput.addEventListener('input', () => {
  const mailValue = mailInput.value.trim()
  const cleanValue = mailValue.replace(/[^a-zA-Z0-9!#$%&'@*+/=?^_`{|}~.-]/, '')
  mailInput.value = cleanValue
  mailValidation()
})

const messageInput = document.getElementById('mensagem')
const messageDiv = document.getElementById('message-div')

function messageValidation(){
    const messageValue = messageInput.value.trim()

    if(messageValue.length < 10){
        messageDiv.classList.add(errorClass)
        return false
    }else{
        messageDiv.classList.remove(errorClass)
        return true
    }
}

messageInput.addEventListener('input', () => {
    messageValidation()
})

const form = document.querySelector('form')

form.addEventListener("submit", (event) => {
    event.preventDefault()
    nameValidation()
    mailValidation()
    messageValidation()
    if(nameValidation() && mailValidation() && messageValidation()){
        form.submit()
        form.reset()
    }else{
        nameValidation()
    }
  })