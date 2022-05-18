export function getUnique(data){
    let uniqueCategories = [];

    data.forEach((item) => {
        if (!uniqueCategories.includes(item.category)) {
            uniqueCategories.push(item.category);
        }
    });

    return (uniqueCategories);
}