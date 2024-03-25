import React, { useState } from 'react';

import CrudForm from './CrudForm';
import CrudTable from './CrudTable';


const initialDb = [
  {
    id: 1,
    name: "Seiya",
    constellation: "Pegasus"

  },
  {
    id: 2,
    name: "Shiryu",
    constellation: "Dragon"
  },
  {
    id: 3,
    name: "Hyoga",
    constellation: "Cygnus"
  },
  {
    id: 4,
    name: "Shun",
    constellation: "Andromeda"
  },
  {
    id: 5,
    name: "Ikki",
    constellation: "Phoenix"
  },
]


const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);
  const createData = (data) => {
    data.id = Date.now();
    // console.log(data)

    setDb([...db, data])

  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData)
  };
  const deleteData = (id) => {

    let isDelete = window.confirm(`¿Estás el registro con el id:'${id}' ?`)

    if (isDelete) {

      let newData = db.filter((el) => el.id !== id);
      setDb(newData)

    } else {
      return;
    }
  }
  return (
    <div>
      <h2>CRUD APP</h2>
      <article className="grid-1-2"> <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />

        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}

        />
      </article>



    </div>
  );
}

export default CrudApp;