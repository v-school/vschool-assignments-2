const database = [
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jill", lastName: "Johnson", age: 20},
    {firstName: "Jill", lastName: "Smith", age: 100},
    {firstName: "Jack", lastName: "White", age: 2},
    {firstName: "Jill", lastName: "Smith", age: 50},
    {firstName: "Jack", lastName: "Jackson", age: 2},
    {firstName: "Jill", lastName: "Jillson", age: 20},
    {firstName: "Jack", lastName: "Johnson", age: 2},
    {firstName: "Jill", lastName: "Jilly", age: 100},
    {firstName: "Jack", lastName: "Jillson", age: 2}
];

const filterDatabase = (query, data) => {
    // we need a filter. In that filter, we'll use the for loop to loop over the query object
    // if part of the query object doesn't match our item (person), we'll return false for the callback
    // if we successfully make it throught the for loop, we'll return true for the callback

    const filteredData = data.filter(item => {
        for(key in query){
            if(query[key] !== item[key]){
                return false
            } 

            // if key value doesn't match item's key's value, return false for filters callback
          
        }

        return true 
    })

    return filteredData
}

console.log(filterDatabase({}, database));