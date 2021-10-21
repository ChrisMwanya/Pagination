exports.paginate = (data, params) => {
  const page = Number(params.page || 1);
  const limit = Number(params.limit || 10);
  const dataPaginated = [];
  let pages = data.length / limit;

  let previousPage = null;
  let nextPage = null;
  let currentPage = page;
  let startIndex = 0;

  if (Number.isInteger(pages) === false) {
    pages = Math.floor(pages) + 1;
  }
  if (page > 1) {
    previousPage = Number(page - 1);
    startIndex = (page - 1) * limit;
  }
  if (page < pages) {
    nextPage = Number(page + 1);
  }
  const loopNumber = startIndex + limit;
  for (let i = startIndex; i < loopNumber; i++) {
    if (data[i]) dataPaginated.push(data[i]);
  }

  if(page>pages){
      currentPage = null
  }
  return {
    result: dataPaginated,
    totalElement: data.length,
    totalPages: pages,
    currentPage: currentPage,
    previousPage: previousPage,
    nextPage: nextPage,
  };
};
const array = [{name :"Franck"},{name :"Franck"},{name :"Franck"},{name :"Franck"},{name :"Franck"},{name :"Franck"},{name :"Franck"},{name :"Franck"},{name :"Franck"}]
const params = {
    page:1,
    limit:7
}
console.log(this.paginate(array,params))
