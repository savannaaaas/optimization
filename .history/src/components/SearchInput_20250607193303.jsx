import { range } from "express/lib/request";
import React, { useRef } from "react";
/*2. **Компонент `SearchInput`**:
    - Рендерит текстовое поле, которое позволяет пользователю вводить текст для поиска по списку.
    - Ввод текста в поле поиска должен обновлять состояние поиска в родительском компоненте.
    - Использовать `useCallback` для передачи функции изменения состояния в дочерний компонент.*/
export const SearchInput = ({ updateInput }) => {
  const ref = useRef(null);
  const handleChange = (event) => {
    if (event.key === "Enter") {
      updateInput(ref.current.value);
    }
  };
  return (
    <>
      <input
        ref={ref}
        type="text"
        onKeyDown={handleChange}
        placeholder="Введите название модуля"
        style={{ margin: "15px", backgroundColor: "teal" , border-radius:"4px"}}
      />
    </>
  );
};
