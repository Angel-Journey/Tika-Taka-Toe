'use strict'

// this file includes the functions that will be run when an 'event' occurs
// on a button or form

// import the functions that make requests to the api
const api = require('./api')
// import the functions that update our webpage's content
const ui = require('./ui')
// import the getFormFields function
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
  // prevent the defaul action of refreshing the page when a form is submitted
  event.preventDefault()

  // event.target is our '#sign-up' form so store it in a better named variable
  const form = event.target
  // get the data from our form
  const formData = getFormFields(form)

  console.log(formData)

  // make a request to submit sign-up form data to API
  api.signUp(formData)
    // show success or failure
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}

const onSignIn = function (event) {
  // prevent the defaul action of refreshing the page when a form is submitted
  event.preventDefault()

  // event.target is our ''#sign-up' form so store it in a better named variable
  const form = event.target
  // get the data from our form
  const formData = getFormFields(form)

  console.log(formData)

  // make a request to submit sign-up form data to API
  api.signIn(formData)
    // show success or failure
    .then(ui.onSignInSuccess)
    .catch(ui.onError)
}

const onSignOut = function (event) {
  // prevent the defaul action of refreshing the page when a form is submitted
  event.preventDefault()

  // make a request to submit sign-up form data to API
  api.signOut()
    // show success or failure
    .then(ui.onSignOutSuccess)
    .catch(ui.onError)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}