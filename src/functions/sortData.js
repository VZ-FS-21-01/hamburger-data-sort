
const sortData = (data) => {
    // [
    //     {
    //         buchstabe: "a",
    //         contacts: []
    //     },
    // ]
    let sortedArray = []
    for (let i = 0; i < 26; i++) {
        sortedArray.push(
            {
                buchstabe: (i + 10).toString(36).toUpperCase(),
                contacts: data.filter((ele) => ele.first_name[0].toLowerCase() === (i + 10).toString(36))
            }
        )

    }
    return sortedArray
}

export default sortData