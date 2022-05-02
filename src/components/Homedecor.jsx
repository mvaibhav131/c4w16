import React from 'react'

const getdata=async(e)=>{
    e.preventDefault();
    let res=await fetch("https://movie-fake-server.herokuapp.com/products/homedecor",{
        method:"POST",
        headers:{"content-type":"application-json"},
        body:JSON.stringify()
    });
    data=await(res.json())
}
let data=[
   
      {
        "id": 31,
        "brand": "Tied Ribbons",
        "title": "Set of 2 Artificial bunches",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/15/bbd18059-da43-425e-87e5-64f5321277f41576372604988-1.jpg",
        "category": "homedecor",
        "price": 597
      },
      {
        "id": 32,
        "brand": "Fancy Mart",
        "title": "Artificial Bamboo plants",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2334609/2017/12/12/11513083183045-na-881513083182960-1.jpg",
        "category": "homedecor",
        "price": 487
      },
      {
        "id": 33,
        "brand": "Fancy Mart",
        "title": "Artificial flowers with pot",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/7/30/078471d8-aa80-4fe9-9831-0af81ee4e2c41564476690067-1.jpg",
        "category": "homedecor",
        "price": 399
      },
      {
        "id": 34,
        "brand": "Fancy Mart",
        "title": "Set of 3 wall paintings",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/6/7/2685ea80-19e2-415f-a1e8-dc9a1b14ef3a1559906891935-1.jpg",
        "category": "homedecor",
        "price": 1599
      },
      {
        "id": 35,
        "brand": "Random Mart",
        "title": "Set of photo frames",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6556105/2018/5/28/b5fc076f-b094-4956-8679-d962eba8eeb61527509319846-Random-Set-of-06-photo-frames-WITH-MDF-flowers-plaque-4X6-4PCS--5x7-2pcs-BLACK-2611527509319705-1.jpg",
        "category": "homedecor",
        "price": 799
      },
      {
        "id": 36,
        "brand": "Wall Stick",
        "title": "Bird nest on tree",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/8/21/6914db9e-3422-46cc-b9d9-a61e5bdfb6411597960381943-1.jpg",
        "price": 699,
        "category": "homedecor"
      },
      {
        "id": 37,
        "brand": "EximDecor Stick",
        "title": "Handcrafted Leather crafted",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12640284/2020/9/29/18d30ec1-3aa8-4caf-b631-252811e1df971601360503171-EXIM-DECOR-Brown-Showpiece-5671601360502705-1.jpg",
        "price": 2589,
        "category": "homedecor"
      },
      {
        "id": 38,
        "brand": "Ecraft India",
        "title": "Handcrafted Leather crafted",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6698630/2018/6/9/023f7703-453d-4d60-92fb-ed99704223d11528527564425-eCraftIndia-Brass-Antique-Music-Decorative-Canon-Showpiece-4671528527564162-1.jpg",
        "price": 1477,
        "category": "homedecor"
      },
      {
        "id": 39,
        "brand": "Exim India",
        "title": "Hour glass",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12640286/2020/9/29/29e1abc6-a571-43a7-a09d-a9c61a5244541601360519753-EXIM-DECOR-Pink-Showpiece-6201601360519040-1.jpg",
        "price": 1299,
        "category": "homedecor"
      },
      {
        "id": 40,
        "brand": "Tied Ribbons",
        "title": "Set of 3 Owl",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/15/777efffd-ccf5-42c9-b20f-5630d360b57f1576371164101-1.jpg",
        "price": 1299,
        "category": "homedecor"
      }
]

const Homedecor = () => {
  return (
    <div>
         <h1> Home Decoration Products</h1>
        <select name="" id="">
            <option value="">Sort By</option>
            <option value="">High to Low</option>
            <option value="">Low to High</option>
        </select>
       <div >
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
                {data.map((item)=>(
                    <div key={item.id}>
                        <h2 style={{color:"green"}}>{item.title}</h2>
                        <img src={item.image} alt="" />
                        <h3 style={{color:"blue"}}>  {`Brand : ${item.brand}`}</h3>
                        <h4 style={{color:"red"}}>{`Catagory : ${item.category}`}</h4>
                        <h4 style={{color:"orange"}}>{`Price : ${item.price}`}</h4>

                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Homedecor
