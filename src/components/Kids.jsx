
import React from 'react'

const getdata=async(e)=>{
    e.preventDefault();
    let res=await fetch("https://movie-fake-server.herokuapp.com/products/kids",{
        method:"POST",
        headers:{"content-type":"application-json"},
        body:JSON.stringify()
    });
    data=await(res.json())
}
let data=[
    
      {
        "id": 22,
        "brand": "Wish Karo",
        "title": "Printed Straight Kurti",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11985624/2020/6/25/2f2e3507-09e0-4330-a9c0-818583f0cdac1593065483501WishKaroGirlsMaroonSolidFitandFlareDress1.jpg",
        "category": "kids",
        "price": 399
      },
      {
        "id": 23,
        "brand": "Style Karo",
        "title": "Girls Print Flared Dress",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11811376/2020/4/24/d003ff16-e2b8-4e31-991a-51a9cb0a089d1587709778184StyleStoneGirlsNavyBluePrintedFitandFlareDress1.jpg",
        "category": "kids",
        "price": 799
      },
      {
        "id": 24,
        "brand": "Style Karo",
        "title": "Girls Solid Print Flared Dress",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/8/23/e4894be3-139c-4c80-aa6f-a69d09bb6df31566545182265-5.jpg",
        "category": "kids",
        "price": 599
      },
      {
        "id": 25,
        "brand": "PSPeaches Karo",
        "title": "Girls Checked Print Flared Dress",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11279500/2020/1/13/c1d506dd-3449-4967-b98e-f1745c91e4bf1578913886254-pspeaches-Girls-Yellow-Checked-Fit-and-Flare-Dress-246157891-1.jpg",
        "category": "kids",
        "price": 599
      },
      {
        "id": 27,
        "brand": "Hell Cat Karo",
        "title": "Pack of 3 Boys T-shirts",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/7/17/c36871cc-2632-423e-944c-4bc1bb55df9f1594942107913-1.jpg",
        "category": "kids",
        "price": 599
      },
      {
        "id": 29,
        "brand": "Disney",
        "title": "Boys Color Blocked T-shirt",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/7/17/c36871cc-2632-423e-944c-4bc1bb55df9f1594942107913-1.jpg",
        "category": "kids",
        "price": 899
      },
      {
        "id": 30,
        "brand": "Disney",
        "title": "Pack of 3 Round Necked Shirts",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/7/16/913d5278-4a71-42cf-8102-dc52bb2c1ca51594850274502-1.jpg",
        "category": "kids",
        "price": 1299
      },
      
]

const Kids = () => {
  return (
    <div>
         <h1> Kids Products</h1>
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

export default Kids
