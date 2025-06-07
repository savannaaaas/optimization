import React, { useMemo } from "react";
export const ItemList = ({ people, stateInput }) => {
  /****Компонент `ItemList`**:
    - Получает список элементов и значение поиска как пропсы.
    - Фильтрует список на основе значения поиска.
    - Результат фильтрации должен быть мемоизирован с помощью `useMemo`, чтобы избежать лишних вычислений при каждом рендере. */
  const optim = useMemo(() => {
    const keys = crypto.randomUUID();
    return people
      .filter((item) => item.module.toLowerCase().includes(stateInput))
      .map((item) => {
        return (
          <ul>
            <li>{item.name}</li>
            <li>{item.age}</li>
            <li>{item.module}</li>
          </ul>
        );
      });
  }, [people, stateInput]);
  return <>{optim}</>;
};
