      fetch("http://www.apilayer.net/api/list?access_key=075d15d60a95b06528ad8d5812e3d35e&format=1")
        .then(response => response.json())
        .then(response => response.currencies)
        .then(data => {
          for (key in data) {
            let options = document.createElement("option");
            options.setAttribute("value", key);
            options.innerText = `${key} - ${data[key]}`;
            options.setAttribute("id", key);
            document.querySelector("#fromcurr").appendChild(options);
          }
        });

      
      fetch("http://www.apilayer.net/api/list?access_key=075d15d60a95b06528ad8d5812e3d35e&format=1")
        .then(response => response.json())
        .then(response => response.currencies)
        .then(data => {
          for (key in data) {
            let options = document.createElement("option");
            options.setAttribute("value", key);
            options.innerText = `${key} - ${data[key]}`;
            options.setAttribute("id", key);
            document.querySelector("#tocurr").appendChild(options);
          }
        });

      
      function convertCurr() {
        let choice1 = document.querySelector("#fromcurr").selectedIndex;
        let monney1 = document.querySelector("#fromcurr").options[choice1].id;
        let choice2 = document.querySelector("#tocurr").selectedIndex;
        let monney2 = document.querySelector("#fromcurr").options[choice2].id;
        let amount = document.querySelector("input").value;
        fetch("http://www.apilayer.net/api/live?access_key=075d15d60a95b06528ad8d5812e3d35e&format=1")
          .then(response => response.json())
          .then(response => response.quotes)
          //.then(console.log)
          .then(data => {
            for (key in data) {
              if (key == "USD" + monney1) {
                value1 = data[key];
               }
              if (key == "USD" + monney2) {
                value2 = data[key];
               }
            }

             return [value1, value2];
          })
          .then(values => {
             document.querySelector("p").textContent =
              (amount * value2) / value1 + " " + monney2;
          });
      };