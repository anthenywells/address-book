class Contact {
    constructor(name, email, phone, relation){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

class AddressBook {
    constructor(){
        this.contacts = [];
    }
    add(info) {
        this.contacts.push(info);
    }
    deleteAt(index) {
        this.contacts.splice(index,1);
        console.log(`Index ${index} was deleted.`);
    }
    deleteByName(nameDel) {
        const index = this.contacts.indexOf(nameDel);
        this.contacts.splice(index,1);
        console.log(`Contact ${nameDel} was deleted.`);
    }
    print() {
        for(let i = 0; i < this.contacts.length; i++){
            console.log(this.contacts[i]);
        }
    }
}


const book = new AddressBook;
book.add(new Contact("Snoopy", "dog@email.com", 1234, "My dog"));
book.add(new Contact("Woodstock", "bird@email.com", 1234, "My bird"));
book.add(new Contact("Charlie", "cbrown@email.com", 1234, "My friend"));


 while (true) {
    const choice = prompt("add, delete, print, or quit?");
    if (choice === "add") {
        const name = prompt("Name?"); 
        const email = prompt("Email?");
        const phone = prompt("Phone?"); 
        const relation = prompt("Relation?");
        book.add(new Contact(name, email, phone, relation));
    } else if (choice === "delete") {
        const delChoice = prompt(`Would you like to delete by index or name?`);
        if (delChoice === "index"){
          const index = prompt("Index to delete?")
          book.deleteAt(index);
        } else if (delChoice === "name") {
          const nameDel = prompt("Name to delete?")
          book.deleteByName(nameDel)
        }
    } else if (choice === "print") {
        book.print();
    } else if (choice === "quit") {
        console.log(`See ya later nerd`)
        break;
    } 
    else if (choice === null) {
        break;
    }
}
