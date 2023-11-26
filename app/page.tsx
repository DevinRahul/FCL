import Image from 'next/image'

export default function Home() {


  const BatchForm = () =>{
    const defaultvalue = ({
           model: "",
            date:"",
            quantity:"",
            license: "",
            comments: ""
    })

  }


const onSubmit = async (values)=>{
  const response = await fetch('/http://localhost:3000',{
     method: 'POST',
     headers: {
    'Content-Type': 'application/json'
  },
  body:JSON.stringify({
            model: values.model,
            date: values.date,
            quantity: values.quantity,
            license: values.license,
            comments: values.comments
  })
 
  })
  if(response.ok){

  }
}



  return (
    <div className="w-full min-h-screen bg-[#222222]">
      <div className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <img className="h-10 w-auto" src="https://fcl.software/img/Logo.svg" alt=""></img>
      </div>



            
      <div className="flex min-h-full flex-col justify-center px-8 py-12 lg:px-8 ">
      <div className="flex min-h-full flex-col justify-center px-8 py-12 lg:px-8 ">
        <div className="flex min-h-full flex-col justify-center px-8 py-12 lg:px-8 ">
          <div className="flex min-h-full flex-col justify-center px-8 py-8 lg:px-8 border border-yellow-600">
              <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm " >
                <form className="space-y-6"  method="POST">
                <h1 className="mb-6 text-xl leading-none tracking-tight   dark:text-white">Batch Form</h1>
                  <div>
                    <div className="mt-2 py-1 text-lg block mb-2">
                    <select id="model" className="outline-none w-full h-7 text-sm">
                      <option selected>Model</option>
                      <option value="m1">Model 1</option>
                      <option value="m2">Model 2</option>
                      <option value="m3">Model 3</option>
                      <option value="m4">Model 4</option>
                    </select>
                    </div>
                  </div>
                  <div>
                    <div className="mt-2 py-1 text-lg block mb-2">
                      <input className='outline-none w-full h-7 text-sm' type='date' id='date'></input>
                    </div>
                  </div>
                  <div>
                    <div className="mt-2 py-1 text-lg block mb-2">
                      <input id="quantity" name="quantity" placeholder='Quantity' type="number" required className="outline-none w-full h-7 text-sm"></input>
                    </div>
                  </div>
                  <div>
                    <div className="mt-2 py-1 text-lg block mb-2">
                    <select id="license" className="outline-none w-full h-7 text-sm">
                      <option selected>License Level</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                    </select>
                    </div> 
                  </div>
                  <div>
                    <div className="mt-2 py-1 text-lg block mb-2">
                      <textarea id="comments" name="password" placeholder='Comments(Not Required)' required className="outline-none w-full h-7 text-sm"></textarea>
                    </div>
                  </div>
                  <div className="mt-2 py-1 text-lg block mb-2">
                    <button type="submit" className="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold 
                    leading-6 text-white shadow-sm hover:bg-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                    focus-visible:outline-indigo-600">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}
