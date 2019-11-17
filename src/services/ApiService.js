const ApiService ={
  // functions
  addClinic: function(clinic)
  {
    alert('service function called!');
    console.log('service function called!');
    localStorage.setItem("clinic", clinic);
  }
}

export default ApiService;
