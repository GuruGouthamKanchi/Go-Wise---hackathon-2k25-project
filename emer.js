$(document).ready(function() {
    const predefinedData = {
        "Mumbai": {
            medical: [
                { name: "Tata Memorial Hospital", phone: "022-24177000", distance: "2.1km" },
                { name: "Kokilaben Hospital", phone: "022-30666666", distance: "3.0km" }
            ],
            police: [{ name: "Mumbai Police HQ", phone: "100", distance: "1.5km" }],
            fire: [{ name: "Mumbai Fire Brigade", phone: "101", distance: "3.2km" }],
            embassy: [{ name: "US Consulate Mumbai", phone: "+91-22-26724000", distance: "4.5km" }]
        },
        "Bangalore": {
            medical: [
                { name: "Narayana Health", phone: "080-71222222", distance: "2.8km" },
                { name: "Manipal Hospital", phone: "080-25023255", distance: "3.6km" }
            ],
            police: [{ name: "Bangalore Police HQ", phone: "100", distance: "2.0km" }],
            fire: [{ name: "Bangalore Fire Station", phone: "101", distance: "3.9km" }],
            embassy: [{ name: "US Consulate Bangalore", phone: "+91-80-22212227", distance: "4.8km" }]
        },
        "Chennai": {
            medical: [
                { name: "Apollo Hospital", phone: "044-28293333", distance: "2.2km" },
                { name: "MIOT Hospital", phone: "044-42002288", distance: "3.4km" }
            ],
            police: [{ name: "Chennai Police HQ", phone: "100", distance: "2.1km" }],
            fire: [{ name: "Chennai Fire Station", phone: "101", distance: "3.7km" }],
            embassy: [{ name: "US Consulate Chennai", phone: "+91-44-28574200", distance: "4.6km" }]
        },
        "Kolkata": {
            medical: [
                { name: "AMRI Hospitals", phone: "033-66800000", distance: "3.2km" },
                { name: "Fortis Hospital", phone: "033-66284444", distance: "5.1km" }
            ],
            police: [{ name: "Kolkata Police HQ", phone: "100", distance: "1.8km" }],
            fire: [{ name: "Kolkata Fire Brigade", phone: "101", distance: "2.7km" }],
            embassy: [{ name: "US Consulate Kolkata", phone: "+91-33-39844000", distance: "3.9km" }]
        },
        "Pune": {
            medical: [
                { name: "Ruby Hall Clinic", phone: "020-66455555", distance: "2.8km" },
                { name: "Jehangir Hospital", phone: "020-66819999", distance: "3.5km" }
            ],
            police: [{ name: "Pune City Police", phone: "100", distance: "2.0km" }],
            fire: [{ name: "Pune Fire Brigade", phone: "101", distance: "2.9km" }],
            embassy: [{ name: "German Consulate Pune", phone: "+91-20-40196000", distance: "4.3km" }]
        },
        "Ahmedabad": {
            medical: [
                { name: "CIMS Hospital", phone: "079-66515555", distance: "3.1km" },
                { name: "Apollo Hospitals", phone: "079-66701800", distance: "4.2km" }
            ],
            police: [{ name: "Ahmedabad City Police", phone: "100", distance: "2.5km" }],
            fire: [{ name: "Ahmedabad Fire Service", phone: "101", distance: "3.3km" }],
            embassy: [{ name: "British Deputy High Commission", phone: "+91-79-22869000", distance: "4.8km" }]
        },
        "Jaipur": {
            medical: [
                { name: "Sawai Man Singh Hospital", phone: "0141-2510849", distance: "2.7km" },
                { name: "Fortis Escorts Hospital", phone: "0141-2547000", distance: "3.8km" }
            ],
            police: [{ name: "Jaipur City Police", phone: "100", distance: "1.9km" }],
            fire: [{ name: "Jaipur Fire Service", phone: "101", distance: "2.6km" }],
            embassy: [{ name: "French Consulate Jaipur", phone: "+91-141-2560256", distance: "4.1km" }]
        },
        "Lucknow": {
            medical: [
                { name: "SGPGIMS", phone: "0522-2495000", distance: "4.3km" },
                { name: "Apollo Hospitals", phone: "0522-2407123", distance: "3.5km" }
            ],
            police: [{ name: "Lucknow Police HQ", phone: "100", distance: "2.2km" }],
            fire: [{ name: "Lucknow Fire Service", phone: "101", distance: "3.1km" }],
            embassy: [{ name: "German Consulate Lucknow", phone: "+91-522-4060700", distance: "4.7km" }]
        },
        "Surat": {
            medical: [
                { name: "Surat Institute of Medical Sciences", phone: "0261-2240000", distance: "2.9km" },
                { name: "New Civil Hospital", phone: "0261-2244000", distance: "3.4km" }
            ],
            police: [{ name: "Surat City Police", phone: "100", distance: "2.1km" }],
            fire: [{ name: "Surat Fire Brigade", phone: "101", distance: "2.8km" }],
            embassy: [{ name: "Japanese Consulate Surat", phone: "+91-261-2464000", distance: "4.2km" }]
        },
        "Kanpur": {
            medical: [
                { name: "GSVM Medical College", phone: "0512-2530000", distance: "3.2km" },
                { name: "Regency Hospital", phone: "0512-2531111", distance: "4.0km" }
            ],
            police: [{ name: "Kanpur Police HQ", phone: "100", distance: "2.4km" }],
            fire: [{ name: "Kanpur Fire Service", phone: "101", distance: "3.0km" }],
            embassy: [{ name: "Italian Consulate Kanpur", phone: "+91-512-2534000", distance: "4.5km" }]
        },
        "Nagpur": {
            medical: [
                { name: "Orange City Hospital", phone: "0712-2424000", distance: "2.7km" },
                { name: "Care Hospital", phone: "0712-2233333", distance: "3.5km" }
            ],
            police: [{ name: "Nagpur City Police", phone: "100", distance: "2.0km" }],
            fire: [{ name: "Nagpur Fire Brigade", phone: "101", distance: "2.9km" }],
            embassy: [{ name: "Russian Consulate Nagpur", phone: "+91-712-2534000", distance: "4.1km" }]
        },
        "Indore": {
            medical: [
                { name: "CHL Hospitals", phone: "0731-4671000", distance: "3.0km" },
                { name: "Bombay Hospital", phone: "0731-2533333", distance: "3.8km" }
            ],
            police: [{ name: "Indore City Police", phone: "100", distance: "2.2km" }],
            fire: [{ name: "Indore Fire Service", phone: "101", distance: "3.1km" }],
            embassy: [{ name: "Australian Consulate Indore", phone: "+91-731-2534000", distance: "4.3km" }]
        },
        "Thane": {
            medical: [
                { name: "Bethany Hospital", phone: "022-25420000", distance: "2.5km" },
                { name: "Horizon Prime Hospital", phone: "022-25890000", distance: "3.2km" }
            ],
            police: [{ name: "Thane City Police", phone: "100", distance: "1.8km" }],
            fire: [{ name: "Thane Fire Brigade", phone: "101", distance: "2.7km" }],
            embassy: [{ name: "Canadian Consulate Thane", phone: "+91-22-2534000", distance: "4.0km" }]
        }
    };

    $('#searchButton').click(function() {
        const city = $('#citySearch').val().trim();
        if (!city) return;
        
        $('#loadingSpinner').show();
        clearServices();
        
        // Simulate API delay
        setTimeout(() => {
            if (predefinedData[city]) {
                updateServices(predefinedData[city]);
            } else {
                showNoResults();
            }
            $('#loadingSpinner').hide();
        }, 800);
    });

    // Allow search on Enter key
    $('#citySearch').keypress(function(e) {
        if (e.which === 13) {
            $('#searchButton').click();
        }
    });

    function updateServices(services) {
        Object.keys(services).forEach(type => {
            const list = services[type].map(service => `
                <div class="service-list-item">
                    <div class="fw-bold">${service.name}</div>
                    <div class="small text-muted">${service.distance} away</div>
                    <a href="tel:${service.phone}" class="btn btn-sm btn-success service-phone-btn">
                        <i class="bi bi-telephone"></i> ${service.phone}
                    </a>
                </div>
            `).join('');
            $(`#${type}Services`).html(list || '<div class="empty-state">No services found</div>');
        });
    }

    function clearServices() {
        $('#medicalServices, #policeServices, #fireServices, #embassyServices').html('');
    }

    function showNoResults() {
        const message = '<div class="empty-state">No data available for this city</div>';
        $('#medicalServices, #policeServices, #fireServices, #embassyServices').html(message);
    }
});