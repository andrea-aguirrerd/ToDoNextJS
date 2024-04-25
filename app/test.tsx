export default function Test() {
  const data = null || { name: "somethingÏ" };
  return (
    <div>
      <ul>
        <li>{data.name}</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}
