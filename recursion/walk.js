function walk(node) {
  if (!node.next) return node;
  return walk(node.next);
}

console.log(walk({ id: 5 }), { id: 5 });
export default walk;
