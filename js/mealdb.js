const searchFood = () => {
    const searchFeild = document.getElementById('search-feild');
    const searchText = searchFeild.value;
    // console.log(searchText);
    searchFeild.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
    `
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}