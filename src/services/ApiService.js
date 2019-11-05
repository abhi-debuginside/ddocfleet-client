class ApiService {
  // constructor
  constructor() {}

  // functions
  createClinic(clinic)
  {
    console.log('service function called!');
    localStorage.setItem("clinic", clinic);
  }
}

export default new ApiService();
