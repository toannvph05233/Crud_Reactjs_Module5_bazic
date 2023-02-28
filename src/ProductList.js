import React, { useState } from 'react';

const CrudApp = () => {
    const [data, setData] = useState([
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Doe', age: 30 },

    ]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const [nameEdit, setNameEdit] = useState('');
    const [idEdit, setIDEdit] = useState(-1);
    const [ageEdit, setAgeEdit] = useState('');

    const addData = () => {
        const newData = {
            id: data.length + 1,
            name: name,
            age: age
        };
        setData([...data, newData]);
        setAge(0);
        setName("");
    };

    const deleteData = (id) => {
        const newData = data.filter(item => item.id !== id);
        setData(newData);
    };

    const updateData = () => {
        const newData = {
            id: idEdit,
            name: nameEdit,
            age: ageEdit
        };
        const updatedData = data.map(item => item.id === idEdit ? newData : item);
        setData(updatedData);
        setIDEdit(0);
        setAgeEdit(0);
        setNameEdit("");
    };

    return (
        <div>
            <h1>CRUD App</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>
                            <button onClick={() => deleteData(item.id)}>Delete</button>
                            <button onClick={() => {setNameEdit(item.name); setAgeEdit(item.age); setIDEdit(item.id)}}>Edit</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <h2>Add Data</h2>
            <div>
                <label>Name: </label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <label>Age: </label>
                <input type="number" value={age} onChange={e => setAge(e.target.value)} />
            </div>
            <button onClick={addData}>Add</button>
            <h2>Edit Data</h2>
            <div>
                <label>Name: </label>
                <input type="text" value={nameEdit} onChange={e => setNameEdit(e.target.value)} />
            </div>
            <div>
                <label>Age: </label>
                <input type="number" value={ageEdit} onChange={e => setAgeEdit(e.target.value)} />
            </div>
            <button onClick={() => updateData()}>Save</button>
        </div>
    );
};

export default CrudApp;
