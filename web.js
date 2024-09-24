// blog
document.getElementById('blog-id').addEventListener('click',function(){
window.location.href = './blog.html';


})

// history tab btn
document.getElementById('history-tab').addEventListener('click', function () {
    const donationTab = getAtributeById('donation-tab');
    donationTab.remove('bg-btnColor', 'text-hColor', 'sm:text-xs', 'font-semibold');
    donationTab.add('text-pColor')

    const historyTab = getAtributeById('history-tab');
    historyTab.add('bg-btnColor', 'text-hColor', 'sm:text-xs', 'font-semibold');
    historyTab.remove('text-pColor')

    getAtributeById('main').add('hidden');
    getAtributeById('footer').add('hidden');

    // history card
    const historyCard = getAtributeById('history-section');
    historyCard.remove('hidden');

})

// donation tab btn
document.getElementById('donation-tab').addEventListener('click', function () {

    const donationTab = getAtributeById('donation-tab');
    donationTab.add('bg-btnColor', 'text-hColor', 'sm:text-xs', 'font-semibold');
    donationTab.remove('text-pColor')

    const historyTab = getAtributeById('history-tab');
    historyTab.remove('bg-btnColor', 'text-hColor', 'sm:text-xs', 'font-semibold');

    getAtributeById('main').remove('hidden');
    getAtributeById('footer').remove('hidden');

    // history card
    const historySection = getAtributeById('history-section');
    historySection.add('hidden');


});

// submit donate btn {btn-1}
document.getElementById('donate-now1').addEventListener('click', function () {
    const costAmmount = parseFloat(getInputValueById('donate-input-one'));
    const mainBalance = parseFloat(getInnerTextById('main-balance'));
    const firstCardDonationAmmount = parseFloat(getInnerTextById('first-card-donation-ammount'));

    if (typeof costAmmount === 'number' && costAmmount > 0 && costAmmount < mainBalance) {

        const newMainBalance = mainBalance - costAmmount;
        document.getElementById('first-card-donation-ammount').innerText = costAmmount;

        const innerText = document.getElementById('main-balance').innerText = newMainBalance;

        // history card
        const historySection = gettingElementById('history-section');
        const div = document.createElement('div');
        div.className = 'border-2 border-gray-100 rounded-lg shadow-lg p-5 space-y-3';

        div.innerHTML = `
        <p class='text-xl font-semibold text-hColor'>${costAmmount} Donate for Flood at Noakhali, Bangladesh</p>
        <p class='text-pColor'>Date : ${new Date()}
        `;
        historySection.insertBefore(div, historySection.firstChild);

    } else {
        alert('Invalid Donation Ammount');

    }
});

// btn-2
document.getElementById('donate-now2')
    .addEventListener('click', function () {
        const costAmmount = getInputValueById('card2-input');
        const mainBalance = parseFloat(getInnerTextById('main-balance'));

        if (typeof costAmmount === 'number' && costAmmount > 0 && costAmmount < mainBalance) {
            const balance = mainBalance - costAmmount;
            document.getElementById('main-balance').innerText = balance;
            document.getElementById('donated-amount').innerText = costAmmount;

            // history card
            const historySection = gettingElementById('history-section');
            const div = document.createElement('div');
            div.className = 'border-2 border-gray-100 rounded-lg shadow-lg p-5 space-y-3';

            div.innerHTML = `
        <p class='text-xl font-semibold text-hColor'>${costAmmount} Donate for Flood Relief in Feni,Bangladesh</p>
        <p class='text-pColor'>Date : ${new Date()}
        `;
            historySection.insertBefore(div, historySection.firstChild);
        } else {
            alert('Invalid Donation Ammount');

        }
    });

// btn-3

document.getElementById('donate-nowBtn3').addEventListener('click', function () {
    const inputCostAmmount = getInputValueById('input-costAmmount');

    const mainBalance = getInnerTextById('main-balance');

    if (typeof inputCostAmmount === 'number' && inputCostAmmount > 0 && inputCostAmmount < mainBalance) {
        document.getElementById('showig-costAmount').innerText = inputCostAmmount;

        const newMainBalance = mainBalance - inputCostAmmount;

        document.getElementById('main-balance').innerText = newMainBalance;

        // history card
        const historySection = gettingElementById('history-section');
        const div = document.createElement('div');
        div.className = 'border-2 border-gray-100 rounded-lg shadow-lg p-5 space-y-3';

        div.innerHTML = `
        <p class='text-xl font-semibold text-hColor'>${inputCostAmmount} Donate for Aid for Injured in the Quota Movement</p>
        <p class='text-pColor'>Date : ${new Date()}
        `;
        historySection.insertBefore(div, historySection.firstChild);
    }else {
        alert('Invalid Donation Ammount');

    }

})