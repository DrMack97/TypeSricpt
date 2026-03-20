/**
 * 11. Manipulació bàsica d'objectes 
 */
// user:
interface User {
    name?: string;
    surname?: string;
}

const user: User = {};
user.name = "David";
user.surname = "Mack";
user.name = "Elias";
delete user.surname;