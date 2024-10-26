import React from 'react'
import Input from '../Input/Input'
import Table from '../Table/Table'

const Main = () => {
  const [userList, setUserList] = useState(data);

  useEffect(() => {
      setUserList(data);
  }, [data]);

  return (
    <div>
    <Input/>   
    <Table userList={userList} setUserList={setUserList} data={data}/>
    </div>
  )
}

export default Main
