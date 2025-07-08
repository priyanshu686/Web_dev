const data = async function fetchdata(){
    try{
        const data = await fetch("https://dummyjson.com/products");
        const json = await data.json();
        const product = json.products.map((item)=>{
            return {
                Title: item.title,
                Description: item.description,
                Price: item.price
            }
        })
        return product;
    }
    catch(err){
        console.log("Error: " + err.message);
    }

}


const showdata = document.getElementById("first");
data().then((res)=>{
    showdata.innerHTML = res.map((p) => {
            return `
                <div>
                    <h3>${p.Title}</h3>
                    <p>${p.Description}</p>
                    <strong>Price: $${p.Price}</strong>
                </div>`
            ;
        })
})
