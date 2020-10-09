function sortShuffleNodes(sort) {
  var list = document.getElementById("shuffle_Sort");
  var child_nodes = list.children,i = 0;
  child_nodes = Array.prototype.slice.call(child_nodes); // make array
  child_nodes = sort ? sortList(child_nodes) : shuffle(child_nodes);
  for(let i=0; i<child_nodes.length; i++) {
    list.appendChild(child_nodes[i]);
  }
}
function shuffle(list) {
    var random,static,array
    for ( array= list.length - 1; array > 0;array--) {
        random = Math.floor(Math.random() * (array + 1));
        static = list[array];
        list[array] = list[random];
        list[random] = static;
    }
    return list;
}
function sortList(list) {
  let sorted_list = list.sort((a, b) => {
    return a.value - b.value;
  });
  return sorted_list;
}
