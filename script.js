// Common donation function
function handleDonation(id) {
    const inputBalance = parseFloat(document.getElementById(`input-balance-${id}`).value);
    const currentBalanceButton = document.getElementById(`current-balance-${id}`);
    const myAccount = document.getElementById("my-Ammount");

    // Validate input balance
    if (isNaN(inputBalance) || inputBalance <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    // Get the current balance from the button
    const currentBalanceAmount = parseFloat(currentBalanceButton.innerText.replace(' BDT', ''));

    // Add the input balance to the current balance
    const newCurrentBalance = currentBalanceAmount + inputBalance;
    currentBalanceButton.innerHTML = `<span><img src="./assets/coin.png" alt=""></span> ${newCurrentBalance} BDT`;

    // Get the current my-account balance
    const myCurrentAccount = parseFloat(myAccount.innerText.replace(' BDT', ''));

    // Subtract the input balance from the my-account balance
    const updatedMyAccountBalance = myCurrentAccount - inputBalance;

    // Prevent negative balance
    if (updatedMyAccountBalance < 0) {
        alert("Insufficient funds.");
        return;
    }

    // Update the my-account 
    myAccount.innerText = `${updatedMyAccountBalance} BDT`;

    //modelactive
    const modal = document.getElementById("donation-modal");
    modal.classList.remove("hidden");
    modal.style.display = 'flex'; // Set display to flex
    modal.style.alignItems = 'center'; // Center vertically
    modal.style.justifyContent = 'center'; 
}

// Attach event listeners to buttons for all cards
document.getElementById("donate-now-1").addEventListener('click', () => handleDonation(1));
document.getElementById("donate-now-2").addEventListener('click', () => handleDonation(2));
document.getElementById("donate-now-3").addEventListener('click', () => handleDonation(3));

function setupCloseModal() {
    const closeButton = document.getElementById("close-modal");
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            const modal = document.getElementById("donation-modal");
            modal.classList.add("hidden");
            modal.style.display = 'none'; // Hide the modal
        });
    }
}

setupCloseModal();
