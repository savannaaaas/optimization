import React, {useRef} from "react";
/*2. **Компонент `SearchInput`**:
    - Рендерит текстовое поле, которое позволяет пользователю вводить текст для поиска по списку.
    - Ввод текста в поле поиска должен обновлять состояние поиска в родительском компоненте.
    - Использовать `useCallback` для передачи функции изменения состояния в дочерний компонент.*/
export const SearchInput = ({ updateInput }) => {
  const handleChange = (event) => {
    if (event.key === "Enter") {
      updateInput(event.target.value);
    }
  };
  return (
    <>
      <input ref = {}type="text" onMouseDown={handleChange} />
    </>
  );
};
