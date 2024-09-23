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


//    history button show 
    


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

const historyBtn = document.getElementById('history-btn');
const donationBtn = document.getElementById('donation-btn');

// Handle History button click
historyBtn.addEventListener("click", function() {
    // Change the design of the History button to match the Donation button styles
    historyBtn.classList.add("bg-lime-300", "text-base", "font-medium"); // Add donation button styles to history
    historyBtn.classList.remove("text-gray-500", "border", "border-gray-300"); // Remove original history button styles

    // Reset the Donation button to its default styles
    donationBtn.classList.remove("bg-lime-300", "text-base", "font-medium"); // Remove donation styles
    donationBtn.classList.add("text-gray-500", "border", "border-gray-300"); // Add original donation styles
});

// Handle Donation button click
donationBtn.addEventListener("click", function() {
    // Revert the Donation button to its original design
    donationBtn.classList.add("bg-lime-300", "text-base", "font-medium"); // Add original donation styles
    donationBtn.classList.remove("text-gray-500", "border", "border-gray-300"); // Remove history button styles

    // Reset the History button to its default styles
    historyBtn.classList.remove("bg-lime-300", "text-base", "font-medium"); // Remove donation styles from history
    historyBtn.classList.add("text-gray-500", "border", "border-gray-300"); // Add original history styles
});

