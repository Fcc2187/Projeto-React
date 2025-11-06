import { useState } from "react";

function AddTask({onAddTaskSubmit}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input type="text" placeholder="Digite o titulo da tarefa" className="border border-slate-400 outline-slate-400 px-4 pt-2 rounded-md" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Digite a descrição da tarefa" className="border border-slate-400 outline-slate-400 px-4 pt-2 rounded-md" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button className="bg-slate-400 text-white p-2 rounded-md hover:bg-slate-500" onClick={() => onAddTaskSubmit(title, description)}>Adicionar Tarefa</button>
        </div>
    );
}
export default AddTask;