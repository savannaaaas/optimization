import React from "react";
/*2. **Компонент `SearchInput`**:
    - Рендерит текстовое поле, которое позволяет пользователю вводить текст для поиска по списку.
    - Ввод текста в поле поиска должен обновлять состояние поиска в родительском компоненте.
    - Использовать `useCallback` для передачи функции изменения состояния в дочерний компонент.*/
export const SearchInput = () => {
  return (
    <>
      <input type="text" />
    </>
  );
};
