export class Patient {
    // TODO: This will be mapped to DB
    constructor(id, name, lastname, birthday, {city, code, address}) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.birthday = birthday;
        this.address = [];
    }

    createAddress(city, code, address) {
        this.address.push(new Address(city, code, address));
    }
}

class Address {
    constructor(city, code, address) {
        this.city = city;
        this.code = code;
        this.address = address;
    }
}