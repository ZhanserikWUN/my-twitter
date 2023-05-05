export default function MenuItem(item) {
    console.log(item)
  return (

    <div className="d-flex my-3">
      <div style={{ width: 30, height: 30 }}>{item.item.icon}</div>
      <p className="mx-3" style={{fontSize:20, color: 'black'}}>{item.item.name}</p>
    </div>
  );
}
