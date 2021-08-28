# создание нового проекта

```  npx create-react- app fast-company```

# установка в проект bootctrap

 ``` npm i bootstrap@5.1.0```

# развернуть реакт проект

```imr```  для импорта react
``` sfc``` для генерации компонента

# 

tmp```
 <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        ```

asd```
const userRend = () => {
    console.log('pingo==================')
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">profession</th>
              <th scope="col">qualities</th>
              <th scope="col">completedMeetings</th>
              <th scope="col">rate</th>
              <th scope="col">?</th>
            </tr>
          </thead>
          <tbody>
            {users.forEach((user) => {
              return (
                <>
                  <tr key={user._id}>
                    <th scope="row"></th>
                    <td >{user.name}</td>
                    <td>{user.profession}</td>
                    <td>{user.qualities}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate}</td>
                    <td> <button className="btn btn-sm btn-danger" >Del</button></td>
                  </tr>
                </>
              )
            }
            )}
          </tbody>
        </table>
      </>)
  }`
  
  
  ``
мой рендер```

return (
    <>
      <h1>Users</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">profession</th>
            <th scope="col">qualities</th>
            <th scope="col">completedMeetings</th>
            <th scope="col">rate</th>
            <th scope="col">?</th>
          </tr>
        </thead>
        <tbody>
          {userRender}
        </tbody>
      </table>
    </>
  )
```

# тест разбивки на li 

```
  const testUsers = [
    {
      _id: "67rdca3eeb7f6fgeed471815",
      name: "Джон Дориан",
      qualities: ['tedious', 'uncertain', 'strange'],
      completedMeetings: 36,
      rate: 2.5
    },
    {
      _id: "67rdca3eeb7f6fgeed471816",
      name: "Кокс",
      qualities: ['buller', 'handsome', 'alcoholic'],
      completedMeetings: 15,
      rate: 2.5
    },
    {
      _id: "67rdca3eeb7f6fgeed471817",
      name: "Боб Келсо",
      qualities: ['buller'],
      completedMeetings: 247,
      rate: 3.5
    },
    {
      _id: "67rdca3eeb7f6fgeed471818",
      name: "Рэйчел Грин",
      qualities: ['uncertain'],
      completedMeetings: 148,
      rate: 3.5
    },
    {
      _id: "67rdca3eeb7f6fgeed471819",
      name: "Шелдон Купер",
      qualities: ['strange', 'tedious'],
      completedMeetings: 37,
      rate: 4.6
    },
    {
      _id: "67rdca3eeb7f6fgeed471820",
      name: "Леонард Хофстедтер",
      qualities: ['strange', 'uncertain'],
      completedMeetings: 147,
      rate: 3.5
    },
    {
      _id: "67rdca3eeb7f6fgeed471821",
      name: "Говард Воловиц",
      qualities: ['strange', 'tedious'],
      completedMeetings: 72,
      rate: 3.5
    },
    {
      _id: "67rdca3eeb7f6fgeed471822",
      name: "Никола Тесла",
      qualities: ['handsome'],
      completedMeetings: 72,
      rate: 5
    },
    {
      _id: "67rdca3eeb7f6fgeed471823",
      name: "Моника Геллер",
      qualities: ['strange', 'uncertain'],
      completedMeetings: 17,
      rate: 4.5
    },
    {
      _id: "67rdca3eeb7f6fgeed471824",
      name: "Рататуй",
      qualities: ['handsome', 'buller'],
      completedMeetings: 17,
      rate: 4.5
    },
    {
      _id: "67rdca3eeb7f6fgeed47181f",
      name: "Джоуи Триббиани",
      qualities: ['uncertain', 'strange'],
      completedMeetings: 434,
      rate: 3.5
    },
    {
      _id: "67rdca3eeb7f6fgeed47181r",
      name: "Брэд Питт",
      qualities: ['handsome'],
      completedMeetings: 434,
      rate: 5
    },
  ]

```

код```
  // { _id, name, qualities, completedMeetings, rate }
  const li = testUsers.map(
    ({ _id, name, qualities, completedMeetings, rate }) => (

      <li key={_id}> {name}
        <ul ul >
          <li>
            <ul>
              character:
              {qualities.map((el, idx) => (
                <li key={idx}>{el}</li>
              ))}
            </ul>
          </li>

          <li>completedMeetings: {completedMeetings}</li>
          <li>rate:  {rate}</li>
        </ul>
      </li>
    )
  )

 return (
   <>
    <h1>Users</h1>
     <ul>
      {li}
    </ul>
   </>
 )

```




