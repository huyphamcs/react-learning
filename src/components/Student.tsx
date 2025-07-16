interface Information{
    name: string,
    age: number,
    isStudent: boolean
}


function Student(props:Information) {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent? "Yes" : "No"}</p>

        </div>
    );
}
export default Student