import React from 'react'
// now adding props to the card // if we want to reuse the card but want diffrent name or something // with minnor changes
// just write props in argument of Card function and use the parameter passing in app.jsx when calling 

// here we can also pass direct | channel,buttontext like that insead of doing props.user props.btn etcc..
// also default parameters are supproted for example username="Ansh" // by default
function Card(props){
  // console.log(`Props : ${props}`);
  // we can use props by for example we have channel there so props.channel | props is an object afterall
    return (
      <>        <div
      className="flex flex-col rounded-xl  p-4"
      style={{
        border: "0.88px solid",

        backdropFilter: "saturate(180%) blur(14px)",
        background: " #ffffff0d",
      }}
    >
      <div>
        <img
          src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
          alt="nft-gif"
          width="200"
          height="200"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col  rounded-b-xl py-4 ">
        <div className="flex justify-between">
          <h1 className="font-RubikBold ">{props.channel}</h1>
          <h1 className="font-bold font-RubikBold">Price</h1>
        </div>
        <div className="flex  justify-between font-mono">
          <p>#345</p>
          <p>0.01</p>
        </div>
      </div>
    </div>
    </>

    )
}

export default Card;