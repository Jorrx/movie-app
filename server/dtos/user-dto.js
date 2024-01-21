


export class UserDto {
    email;
    id;
    fullName;
    savedMovies;
    constructor(model){
        this.email = model.email
        this.id = model.id
        this.fullName = model.fullName
        this.savedMovies = model.savedMovies
    }
}

