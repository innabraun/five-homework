function createNewUser(){

    let newUser={
        firstName: prompt("Write your first name: "),
        lastName: prompt("Write your second name: "),
        getLogin(){
            return this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase()
        }
    }
    return newUser;
}

// console.log(createNewUser().getLogin())--

function setFirstName(obj, date){
    return Object.defineProperty(obj,"firstName",{
        value:date,
        writable:false,
        // get:function (){return date},
        // set:function (newValue){if (typeof newValue === "string"){
        //      date = newValue
        // }}
    });

}
const user = createNewUser();
const user1 = setFirstName(user, 'vasya')
user1.set('qweqwe')
console.log(user1)
// console.log(setFirstName(user,"Vasya"))

