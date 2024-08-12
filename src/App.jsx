import { useState } from 'react'
import {InputBox} from './Components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
 
const [amount, setAmount]=useState(0)
const [from, setFrom]=useState("usd")


const [convertedAmount, setConvertedAmount] = useState(0)
const [to, setTo]=useState("npr")

const currencyInfo =useCurrencyInfo(from)

const swap=()=>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}

const convert = () =>{
setConvertedAmount(amount * currencyInfo[to])
}
const options= Object.keys(currencyInfo)


  return (
    <div className='w-full h-screen flex flex-wrap
    justify-center items-center bg-cover bg-no-repeat'
    style={{
      backgroundImage:`url(https://img.freepik.com/free-photo/abstract-digital-grid-black-background_53876-97647.jpg?size=626&ext=jpg&ga=GA1.1.1380258727.1721136826&semt=ais_user)`,
    }}>

     
      <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5
        backdrop-blur-sm bg-white/30'>
      
      <form 
      onSubmit={(e) =>{
        e.preventDefault();
        convert()
      }}>
        <div className='w-full mb-1'>
          <InputBox 
            label="from"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency)=> setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) =>
              setAmount(amount)
            }
          />

         
        </div>

        <div className='relative w-full h-1/2'>
          <button type='button' className='absolute left-1/2 -translate-x-1/2 
          -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
          onClick={swap}>
            Swap
          </button>
        </div>
        <div className='w-full mt-1 mb-4'>
          <InputBox label="to" 
           amount={convertedAmount}
           currencyOptions={options}
           onCurrencyChange={(currency)=> setTo(currency)}
             selectCurrency={to}
             amountDisable
         
          />
        </div>
        <button type="submit" 
        className='text-white bg-blue-700 px-4 py-2 rounded-md'>
          Convert {from.toUpperCase()} to {to.toUpperCase()}

        </button>
      </form>
      </div>
    </div>
  )
}

export default App
