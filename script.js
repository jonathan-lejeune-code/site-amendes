const Montants = document.getElementsByClassName("Montants");
    for (element of Montants) {
      element.addEventListener("change", (event) => {
        let Total = +document.getElementById("Total").innerHTML;
        const value = +event.target.value;
        Total = event.target.checked ? (Total + value) : (Total - value);
        document.getElementById("Total").innerHTML = Total;
      });
    }