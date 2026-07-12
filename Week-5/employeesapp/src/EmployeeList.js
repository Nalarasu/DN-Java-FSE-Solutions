import EmployeeCard from "./EmployeeCard";

function EmployeeList() {

    const employees = [
        { id: 1, name: "John" },
        { id: 2, name: "Smith" },
        { id: 3, name: "David" }
    ];

    return ( <
        div > {
            employees.map((emp) => ( <
                EmployeeCard key = { emp.id }
                employee = { emp }
                />
            ))
        } <
        /div>
    );
}

export default EmployeeList;