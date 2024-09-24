// blog
document.getElementById('blog-id').addEventListener('click', function () {
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
    const costAmmount = getInputValueById('donate-input-one');
    const mainBalance = getInnerTextById('main-balance');
    const firstCardDonationAmmount = getInnerTextById('first-card-donation-ammount');

    if (typeof costAmmount === 'number' && costAmmount > 0 && costAmmount < mainBalance) {

        const newMainBalance = mainBalance - costAmmount;
        document.getElementById('first-card-donation-ammount').innerText = (costAmmount + firstCardDonationAmmount).toFixed(2);

        const innerText = document.getElementById('main-balance').innerText = newMainBalance.toFixed(2);

        // modal
        const myModal = gettingElementById('my_modal_5');
        myModal.showModal();

        document.getElementById('close-btn').addEventListener('click', function () {
            const myModal = getAtributeById('my_modal_5');
            myModal.add('hidden')
        })

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
        const mainBalance = getInnerTextById('main-balance');
        const donatedAmount = getInnerTextById('donated-amount')

        if (typeof costAmmount === 'number' && costAmmount > 0 && costAmmount < mainBalance) {
            const balance = mainBalance - costAmmount;
            document.getElementById('main-balance').innerText = balance.toFixed(2);
            document.getElementById('donated-amount').innerText = (costAmmount + donatedAmount).toFixed(2);

            // modal
            const myModal = gettingElementById('my_modal_5');
            myModal.showModal();

            document.getElementById('close-btn').addEventListener('click', function () {
                const myModal = getAtributeById('my_modal_5');
                myModal.add('hidden')
            })

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
    const showigCostAmount = getInnerTextById('showig-costAmount');

    if (typeof inputCostAmmount === 'number' && inputCostAmmount > 0 && inputCostAmmount < mainBalance) {

        const newMainBalance = mainBalance - inputCostAmmount;
        document.getElementById('main-balance').innerText = newMainBalance.toFixed(2);
        document.getElementById('showig-costAmount').innerText = (inputCostAmmount + showigCostAmount).toFixed(2);

        // modal
        const myModal = gettingElementById('my_modal_5');
        myModal.showModal();

        document.getElementById('close-btn').addEventListener('click', function () {
            const myModal = getAtributeById('my_modal_5');
            myModal.add('hidden')
        })

        // history card
        const historySection = gettingElementById('history-section');
        const div = document.createElement('div');
        div.className = 'border-2 border-gray-100 rounded-lg shadow-lg p-5 space-y-3';

        div.innerHTML = `
        <p class='text-xl font-semibold text-hColor'>${inputCostAmmount} Donate for Aid for Injured in the Quota Movement</p>
        <p class='text-pColor'>Date : ${new Date()}
        `;
        historySection.insertBefore(div, historySection.firstChild);
    } else {
        alert('Invalid Donation Ammount');

    }
})