# создание нового проекта

`npx create-react- app fast-company`

# установка в проект bootctrap

`npm i bootstrap@5.1.0`

# развернуть реакт проект

`imr` для импорта react
`sfc` для генерации компонента

#

`

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
        `

`const userRend = () => { console.log('pingo==================')`
`return ( <>`

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

`{users.forEach((user) => {return (<>`
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
)})
}
</tbody>
</table>
</>)}`

мой рендер
`
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

`

# тест разбивки на li

код
``
// { \_id, name, qualities, completedMeetings, rate }
const li = testUsers.map(
({ \_id, name, qualities, completedMeetings, rate }) => (

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

``

# экспорт данных из модуля

для того чтобы делать экспорт данных то для каждого экспортируемого элемента надо делать отдельный модуль
и из него делать экспорт по умолчанию

там где нужны данные из этого модуля надо делать импорт

# хуки

`useEffect()`

> нужен для отслеживания различного этапа нашего компонента:

- монтирование компонента в DOM
- изменение компонента
- удаление компонента из DOM

useEffect используется как вызов в которую мы передаем какую-либо функцию

useEffect(()=>{ console.log('render')})

- монтирование компонента - вызов useEffect без параметров - первый этап жизненного цикла компонента и useEffect будет вызваться каждый раз когда монтируется что-то в DOM
- useEffect(()=>{ console.log('render')},[]) - будет вызвываться только 1 раз при монтировании - так как в массив ничего не передано и следить не за чем
- useEffect может вызваться каждый раз при изменении какого-либо компонента
  > `useEffect(()=>{ console.log('render')},[parameter])`
- когда компонент удаляется (демонтируется) для этого надо в useEffect вернуть функцию:

  > `useEffect(() => { console.log('change currentPage') return () => { console.log('unmount') } }, [currentPage])`
  > эта функция будет вызвываться когда компонент `users` будет демонтирован

  # сброс фильтрации

  если фильтруется массив - то можно добавить еще один элемент ( в нашем случае мы добавили объект {allProfessions = {name: 'Все профессии'}})
  `(setProfessions(Object.assign(data, { allProfessions: { name: 'Все профессии' } }))`
  у которого нет \_id, в объект объектов и делать фильтрацию по этому элементу и так как этого элемента у объектов нет то фильтр сбросится
  `const filteredUsers = selectedProf && selectedProf._id ? allUsers.filter((user) => user.profession === selectedProf) : allUsers`

  в данном случае добавляем условие `&& selectedProf._id` и так как его нет то покажет все данные

  > но в случае с массивами это не сработает !!!!

  и поэтому есть другой метод.

  # сброс фильтрации через кнопку вызова сброса фильтра

  для того чтобы работал сброс для любого объекта или массва - лучше сделать отдельню кнопку и на нее навешать функцию перезаписи состояния

  `const clearFilter = () => { setSelectedProf() }`
  в сброс можно добавить и установку начального состояния страниц и все эти сбросы реакт будет считать как один сбросы

# работа с итерацией объекта или массва

> необходимо вначале делать проверку - что приходящий объект это массив -
> и от результата проверки делать логику

`if (Array.isArray(items)) {return ... }`

# сравнение массивов и объектов

> надо сравнивать не сами объекты а их содержимое приведённое к строке

`allUsers.filter((user)=>JSON.stringify(user.profession) === JSON.stringify(selectedProf)`

или использовать библиотеку `lodash`

# useState()

## вычисление состояния только один раз при первой загрузке

`const [counter, setCounter] = useState(()=> factorial(10))`

так как задана функция - то выполнится только один раз при первом монтировании (выпонятется и устанавливается первоначальное значение состояния), далее при рендеринге она вызываться не будет

## что нужно знать про useState()

- хук работает асинхронно
- схлопываются одинаковые действия в один из-за системы оптимизации
- первоначальное значение будет всегда вычислятся при перерендеринге - и чтобы этого избежать используется стрелочная функция
- в случае задания первоначального значения в виде объекта не забывать о предыдущем значении чтобы оно не перезатиралось при мутациях
