import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';
// Entende-se C como Componente
const App = () => {
  const [list, setList] = useState<Item[]>([]);
  let newList = [...list];
  const handleAddTask = (taskName: string) => {
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }
  return (
      <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>
           <AddArea onEnter={handleAddTask} />
          {/* Área de adicionar Nova Tarefa */}

          {/* Lista de Tarefas - To-Do List */}
          {list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </C.Area>
      </C.Container>
  );
}
export default App;