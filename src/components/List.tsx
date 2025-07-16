import React from "react";

type Item = {
  id: number;
  name: string;
  calories: number;
};

type ListProps = {
  items: Item[];
};

const List: React.FC<ListProps> = ({items}) => {
  return (
    <div>
        <ul>
        {items.map((item) => (
            <li key={item.id}>
            {item.name} - {item.calories} calories
            </li>
        ))}
        </ul>
    </div>
  );
};

export default List;