import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';
type Props = {
    item: Item
}
// Definição do que se recebe pelas Props
export const ListItem = ({ item }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);
    return (
        <C.Container done={isChecked}>
            <input type="checkbox" 
                checked = {isChecked} // Se for TRUE, marca a Checkbox;
                onChange={e => setIsChecked(e.target.checked)}
                // Se mudar a Marcação, o Alvo do Evento possui Checked alterado;
            />
            <label>{item.name}</label>
        </C.Container>
    );
}