//named export
export let name = 'TutorialsPoint'

let company = {
    getName:function(){
        return name
    },
    setName:function(newName){
        name =newName
    }
}
//default export
export default company
