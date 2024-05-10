import MenuItem from "./item";

export default function MenuList({ list = [] }) {
  return (
    <ul className="list-container">
      {list && list.length
        ? list.map((listItem) => <Item item={listItem} />)
        : null}
    </ul>
  );
}