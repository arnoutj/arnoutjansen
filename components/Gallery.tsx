export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1" style={{ height: 1000 }}>
      <div>Item</div>
      <div>Item 2</div>
      <div className="md:col-span-2">Item 3</div>
      <div>Item 4</div>
      <div>Item 5</div>
    </div>
  );
}
