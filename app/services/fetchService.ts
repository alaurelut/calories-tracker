export class FetchService {

  loadFoods() {
    return new Promise((resolve, reject) => {
      fetch('data/Foods.json')
      .then(response => response.json())
      .then(response => {
        resolve(response);
      }).catch(() => {
        reject();
      });
    });
  }

}