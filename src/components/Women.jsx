
import React from 'react'

const getdata=async(e)=>{
    e.preventDefault();
    let res=await fetch("https://movie-fake-server.herokuapp.com/products/womens",{
        method:"POST",
        headers:{"content-type":"application-json"},
        body:JSON.stringify()
    });
    data=await(res.json())
}
let data=[
  
      {
        "id": 13,
        "brand": "Ahika",
        "title": "Men Linen Regular Fit",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10808284/2019/10/30/c35d059d-a357-4863-bcb1-eacd8c988fb01572422803188-AHIKA-Women-Kurtas-8841572422802083-1.jpg",
        "category": "women",
        "price": 1099
      },
      {
        "id": 14,
        "brand": "Max",
        "title": "A line kurta",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10808284/2019/10/30/c35d059d-a357-4863-bcb1-eacd8c988fb01572422803188-AHIKA-Women-Kurtas-8841572422802083-1.jpg",
        "category": "women",
        "price": 699
      },
      {
        "id": 15,
        "brand": "Ziyaa",
        "title": "A line kurta",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11056866/2019/12/9/67a0d919-cbca-4d89-a8f1-6a25c9e9305c1575891613300-Round-NeckWith--34th-Sleeve-Straight-Floral-print-Crepe-Kurt-1.jpg",
        "category": "women",
        "price": 499
      },
      {
        "id": 16,
        "brand": "Libas",
        "title": "Anarkali kurta",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10356511/2019/8/8/a28f9ccb-c0d7-4e66-87f0-e639f157ff2d1565263388836-Libas-Women-Kurta-Sets-571565263387250-1.jpg",
        "category": "women",
        "price": 1019
      },
      {
        "id": 17,
        "brand": "IndoEra",
        "title": "Anarkali kurta",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/8969717/2019/3/28/e448c9a1-3a0f-40e7-b267-1bf44a44ba501553778956208-Indo-Era-Beige-Solid-Straight-Kurta-Sets-9801553778954623-1.jpg",
        "category": "women",
        "price": 1599
      },
      {
        "id": 18,
        "brand": "FabIndia",
        "title": "Anarkali kurta",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11564850/2020/3/5/afd1a957-467e-4a15-abd8-994b8970f72a1583400100776-Fabindia-Women-Kurtas-3311583400099769-1.jpg",
        "category": "women",
        "price": 2699
      },
      {
        "id": 19,
        "brand": "Visudh",
        "title": "Max slit kurta",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2329502/2017/12/12/11513075473636-na-1991513075473475-1.jpg",
        "category": "women",
        "price": 2135
      },
      {
        "id": 20,
        "brand": "Anubhuthee",
        "title": "Ethnic Embroidary Kurti",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10942392/2019/11/19/79f3d4a1-bbf3-442b-b7de-83573ebb99851574150523536-Anubhutee-Women-Kurta-Sets-1381574150520307-1.jpg",
        "category": "women",
        "price": 1499
      },
      {
        "id": 21,
        "brand": "Max",
        "title": "Printed Straight Kurti",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10942392/2019/11/19/79f3d4a1-bbf3-442b-b7de-83573ebb99851574150523536-Anubhutee-Women-Kurta-Sets-1381574150520307-1.jpg",
        "category": "women",
        "price": 1499
      },
     
]

const Women = () => {
  return (
    <div>
         <h1> Women Products</h1>
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

export default Women
