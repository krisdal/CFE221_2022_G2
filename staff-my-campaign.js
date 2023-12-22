function fetchCampaigns() {
    fetch('/api/staff-my-campaign')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayCampaigns(data.activeCampaigns, 'activeCampaigns');
            displayCampaigns(data.inactiveCampaigns, 'inactiveCampaigns');
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

function displayCampaigns(campaigns, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; 

    campaigns.forEach(campaign => {
        const div = document.createElement('div');
        div.innerHTML = `<p>${campaign.name}   Start Date: ${campaign.startdate}   End Date: ${campaign.enddate}    Budget: ${campaign.budget}</p>`;
        container.appendChild(div);
    });
}

fetchCampaigns();
