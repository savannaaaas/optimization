import React, { useMemo } from "react";
export const ItemList = ({ people, stateInput }) => {
  /****Компонент `ItemList`**:
    - Получает список элементов и значение поиска как пропсы.
    - Фильтрует список на основе значения поиска.
    - Результат фильтрации должен быть мемоизирован с помощью `useMemo`, чтобы избежать лишних вычислений при каждом рендере. */
  const optim = useMemo(() => {
    return people
      .filter((item) => item.module.toLoweCase().includes(stateInput))
      .map((item) => {
        return <></>;
      });
  }, [people, stateInput]);
  return <>{optim}</>;
};
