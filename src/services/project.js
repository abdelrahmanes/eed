import mainService from "./mainService";

export function GetProjectData() {
  return mainService
    .get(`project-data`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}
