
const Food = () => {
    const food1 = "banana";
    const food2 = "apple";

    const foodArray = ["Banana", "Apple", "Cherry", "Cake"];
    return (
        <div>
            <ul>
                <li>{food1}</li>
                <li>{food2}</li>
            </ul>
            <ul>
                {
                    foodArray.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
        
    );
}
export default Food