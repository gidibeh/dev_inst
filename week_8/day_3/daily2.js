const root = document.getElementById('root');
function search() {
    let xhr = new XMLHttpRequest();
    let APIKEY = "yeHrdF8tFuj08NYzsDBVIryOUNskp3Yy";
    let q = document.getElementsByTagName("input")[0].value;
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=5&q=` + q;
    xhr.open('GET',url);
    xhr.send();
    xhr.responseType = 'json';
    xhr.onload = function () {
        if(xhr.status != 200){
        console.log(`Error: ${xhr.status}: ${xht.statusText}`);
        }
          else 
            built(xhr.response.data);
          }
        }


const built = (arr) => {
  
  arr.forEach((item, i) => {
    let div = document.createElement('div');
    //let img = document.createElement("img");
    let img = document.createElement("iframe");
    img.setAttribute("src",item.embed_url)
    div.appendChild(img);
    root.appendChild(div);
  });
}

function removeDiv(id){
   document.getElementById('root').style.display = 'none';
  }
