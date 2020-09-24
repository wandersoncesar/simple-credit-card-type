function getType(number) {
    var match = false;
    var creditCardType = null;
    
    var types = [
        { name: 'Visa', regex: /^4\d{5}?/ },
        { name: 'Amex', regex: /^(34|37)\d?/ },
        { name: 'Master', regex: /^5[1-5]\d?/ },
        { name: 'Elo', regex: /^(40117[8-9]|431274|438935|451416|457393|45763[1-2]|506(699|7[0-6][0-9]|77[0-8])|509\d{3}|504175|627780|636297|636368|65003[1-3]|6500(3[5-9]|4[0-9]|5[0-1])|6504(0[5-9]|[1-3][0-9])|650(4[8-9][0-9]|5[0-2][0-9]|53[0-8])|6505(4[1-9]|[5-8][0-9]|9[0-8])|6507(0[0-9]|1[0-8])|65072[0-7]|6509(0[1-9]|1[0-9]|20)|6516(5[2-9]|[6-7][0-9])|6550([0-1][0-9]|2[1-9]|[3-4][0-9]|5[0-8]))\d?/ },
        { name: 'JCB', regex: /^35\d?/ },
        { name: 'Aura', regex: /^50\d{2}?/ },
        { name: 'Diners', regex: /^(301|305|36\d{3}?|38)\d?/ },
        { name: 'Discover', regex: /^(6011|622|64|65)\d?/ },
    ];

    types.forEach(function(type) {
        if (type && type.regex && type.regex.test(number)) {
            match = true;
            creditCardType = type.name;
            return;
        }
    });

    return match && creditCardType ? creditCardType : null;
}

module.exports = getType;
