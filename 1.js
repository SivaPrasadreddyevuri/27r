let but=document.createElement("p")
//  but.textContent="clickme"
document.body.append(but)
but.innerHTML="djfjhdvjhv"


let data = {
  name: "siva",
  id: 44,
  email: "siva123@gmail.com",
};
let url = "https://67a573a5c0ac39787a1e5355.mockapi.io/users";
fetch(url, {
  method: "post",
  headers: { "content-type": "application/json" },
  body: JSON.stringify(data),
});
