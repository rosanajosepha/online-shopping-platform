function showPaymentOption() {
    const selected = document.getElementById("payment-select").value;
  
    document.getElementById("paypal-box").classList.add("hidden");
    document.getElementById("googlepay-box").classList.add("hidden");
    document.getElementById("creditcard-box").classList.add("hidden");
  
    if (selected === "paypal") {
      document.getElementById("paypal-box").classList.remove("hidden");
    } else if (selected === "googlepay") {
      document.getElementById("googlepay-box").classList.remove("hidden");
    } else if (selected === "creditcard") {
      document.getElementById("creditcard-box").classList.remove("hidden");
    }
  }
  