const insert = document.getElementById("insert")
window.addEventListener("keydown",function(e){
    insert.innerHTML = `
    <div class="color">
        <table>
  <thead>
    <tr>
      <th scope="col">Key</th>
      <th scope="col">keycode</th>
      <th scope="col">Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${e.key === " " ? "space" : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </tbody>
</table>
    </div>
    `
})