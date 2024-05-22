const addAndUpdateLocalStorage = (id: number, count: number, imageSrc: string) => {
    const items = getLocalStorageItems();
    if (count === 0) {
      // Видаляємо елемент, якщо count рівний нулю
      const updatedItems = items.filter((item: { id: number }) => item.id !== id);
      localStorage.setItem('items', JSON.stringify(updatedItems));
      if (updatedItems.length === 0) {
        localStorage.removeItem('items');
      }
    } else {
      const index = items.findIndex((item: { id: number }) => item.id === id);
      if (index !== -1) {
        // Оновлюємо існуючий елемент, якщо він знайдений
        items[index] = { id, count, imageSrc };
      } else {
        // Додаємо новий елемент, якщо він не знайдений
        items.push({ id, count, imageSrc });
      }
      localStorage.setItem('items', JSON.stringify(items));
    }
  };
  
const getLocalStorageItems = () => {
    return JSON.parse(localStorage.getItem('items') || '[]');
  };

const getLocalStorageUser = () => {
  return JSON.parse(localStorage.getItem('user') || '{}');
};


export {addAndUpdateLocalStorage, getLocalStorageItems, getLocalStorageUser}