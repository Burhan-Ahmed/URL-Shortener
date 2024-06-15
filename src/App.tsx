import { useState, useEffect } from 'react'

const cards = [
  {
    id: 1,
    ques: "Javascript Ignore Extra Space?",
    op1: "Yes",
    op2: "No",
    op3: "I don't know!!!",
    ans: "Yes"
  },
  {
    id: 2,
    ques: "In React what is used to pass data to a component from outside?",
    op1: "Hooks",
    op2: "DOM",
    op3: "Props",
    ans: "Props"
  },
  {
    id: 3,
    ques: "Which component of the MERN stack is used as a runtime environment for executing JavaScript code on the server side ?",
    op1: "MongoDB",
    op2: "Express",
    op3: "Node",
    ans: "Node"
  },
  {
    id: 4,
    ques: "In a typical MERN application, which part would handle authentication and authorization?",
    op1: "Express",
    op2: "MongoDB",
    op3: "React",
    ans: "Express"
  },
  {
    id: 5,
    ques: "What advantage does using React provide in the MERN stack compared to traditional server- rendered frameworks?",
    op1: "Simpler backend development",
    op2: "Faster initial page loads",
    op3: "Built -in authentication",
    ans: "Faster initial page loads"
  }
]

export default function App() {
  const [count, setcount] = useState(10);
  const [num, setnum] = useState(0);
  const [click1, setClicked1] = useState('');
  const [click2, setClicked2] = useState('');
  const [click3, setClicked3] = useState('');
  const [ending, setending] = useState(false);

  useEffect(() => {
    if (!ending) {
      setTimeout(() => { setcount(count - 1) }, 1000)
      console.log(cards.length)
    }
  })
  useEffect(() => {
    if (count == 0) {
      setcount(10)
      setnum(num + 1)
      if (num == 4) {
        setending(true);
      }
    }
  },)
  if (num == cards.length) {
    return (
      <div className=' m-52 border border-black rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-400'>
        <div className=' font-medium py-20 px-20 flex justify-between text-4xl'>
          <h2>Time Left {count}</h2>
          <h1>Quiz Ended</h1>
        </div>
      </div>
    )
  }

  const Colorit1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClicked1(event.target.id)
  }
  const Colorit2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClicked2(event.target.id)
  }
  const Colorit3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClicked3(event.target.id)
  }

  return (
    <div className=' m-52 border border-black rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-400'>
      <div className=' font-medium pt-20 px-20 flex justify-between text-4xl'>
        <h6>Quiz App <br /> Question no. {cards[num].id} </h6>
        <h2>Time Left : {count} seconds</h2>
      </div>
      <div className='px-20 py-14 text-xl'>
        <div >
          {cards[num].ques}
          <div>
            <ul className=' pt-6 space-y-2'>
              <li className={`rounded-3xl ${(click1 == cards[num].ans) ? ' border border-black bg-green-400 font-bold' : ''}`}>
                <input className='m-3' id={cards[num].op1} name='radiobtn' type="radio" onChange={Colorit1} />
                <label htmlFor="rd1">
                  {cards[num].op1}
                </label>
              </li>
              <li className={(click2 == cards[num].ans) ? ' rounded-3xl border border-black bg-green-400 font-bold' : ''}>
                <input className='m-3' id={cards[num].op2} name="radiobtn" type="radio" onChange={Colorit2} />
                <label htmlFor="rd2">
                  {cards[num].op2}
                </label>
              </li>
              <li className={(click3 == cards[num].ans) ? 'rounded-3xl border border-black bg-green-400 font-bold' : ''}>
                <input className='m-3' id={cards[num].op3} name="radiobtn" type="radio" onChange={Colorit3} />
                <label htmlFor="rd3">
                  {cards[num].op3}
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
