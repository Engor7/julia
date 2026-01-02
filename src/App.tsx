import { useState } from 'react'

const App = () => {
  type User = {
    name: string
    age: number
    email?: string
  }

  const users: User[] = [
    { name: 'Egor', age: 20 },
    { name: 'Elena', age: 20 },
    { name: 'Julia', age: 20, email: 'gg@gmail.com' },
    { name: 'Misha', age: 20 },
    { name: 'Galya', age: 20 },
    { name: 'Galya', age: 20, email: 'olx@gmail.com' },
    { name: 'Misha', age: 21 },
  ]

  const [active, setActive] = useState<number | null>(null)

  const UserImte = ({ user, index }) => (
    <li
      onClick={() => {
        setActive(index)
      }}
      className={index === active ? 'active' : ''}
    >
      {`${index}. ${user.name}`} - {user.email ? user.email : 'Иди нахуй (скачай приложение MAX)'}
    </li>
  )

  return (
    <>
      <ul>
        {users.map((user, index) => (
          <UserImte user={user} index={index} />
        ))}
      </ul>
      <div className="desk">Мы на десктопе (пк)</div>
      <div className="mob">Мы в телефоне</div>
    </>
  )
}

export default App
