/**
 * Implemnted by Cheenou
 * never used the class
 */
export default class Person {
    #_TYPE
    constructor (){
        this.#_TYPE = null
    }

    setPersonType(type){
        this.#_TYPE = type
    }
    getPersonType(){
        return this.#_TYPE
    }
}