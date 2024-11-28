import {IRCTC} from "train-book-console";

async function booking() {
    const irctc = new IRCTC({
        "userID": "", // Secret User ID
        "password": "", // Secret Password
    });
    const params = {
        "payment": "", // Your NPCI UPI VPA ID
        "class": "SL", // class code such as 2A | 3A | SL | CC | 2S | FC | 1A | 3E | Any other valid class code
        "quota": "GN", // GN | TQ | PT | any other valid quota code
        "train": "19418", // 5 Digit Train Number - string
        "from": "ADI", // Station code
        "to": "BVI", // Station code
        "date": "20241202", // YYYYMMDD
        "mobile": "", // 10 Digit Mobile Number
        "passengers": [ // Passengers List - Max 4 members for Tatkal and 6 for General Quota
            {
                "age": 24, // Age of Passenger - Integer
                "name": "smit patel", // Full Name of Passenger
                "gender": "M" // Gender of Passenger - M | F | T
            }
        ]
    };
    const response = await irctc.book(params);
    return response;
};

async function last_txn() {
    const irctc = new IRCTC({
        "userID": "smit4297", // Secret User ID
        "password": "Darksoul@4297", // Secret Password
    });
    const response = await irctc.last_transaction();
    console.log(response);
}

const ticket = await booking();

console.log(ticket);

const lastTxn = await last_txn();

console.log(lastTxn);
