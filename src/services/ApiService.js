class ApiService {
  // constructor
  constructor() {}

  // functions
  createClinic(clinic)
  {
    localStorage.setItem("clinic", clinic);
  }
}

export default new ApiService();
