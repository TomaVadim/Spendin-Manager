import { useTranslation } from "react-i18next";

export const FilteredList = ({shoppingList, selectedCategory}) => {
  const { t } = useTranslation();

  return (
    <section>
      {
        shoppingList.length < 1
        ?
        <h2 style={{textAlign: 'center', marginTop: '40px', fontSize: '18px'}}>There is no any shopping</h2>
        :
        <></>
      }
      {selectedCategory === 'all' ? (
        shoppingList.map((el) => (
          <li style={{textAlign: 'center', marginTop: '20px'}} key={el.id}>
            id{el.id} name{el.name} cost{el.cost} category{el.category}
          </li>
        ))
      ) : (
        <></>
      )}
      {shoppingList
        .filter((el) => el.category === selectedCategory)
        .map((el) => (
          <li key={el.id}>
            id{el.id} name{el.name} cost{el.cost} category{el.category}
          </li>
        ))}
    </section>
  );
};
