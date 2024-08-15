type User = {
    id: number;
    name: string,
    username: string,
    email: string,
    phone: string,
    address: {type: string,
        street: string,
        city: string
    },
}


export default async function Users(){
    await new Promise((resolve)=> setTimeout(resolve, 2000));
    const res = await  fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
    return(
        <div>
            {data.map((user : User)=> (
                <div key={user.id}>
                 <div className="flex gap-4">
                    <ul className="flex w-full justify-around text-start">
                    <li>Name: {user.username}</li>
                <li>Email: {user.username}</li>
                <li>Address: {user.address.city}, {user.address.street}</li>
                    </ul>
                
                 </div>
                </div>
            ))}
        </div>
    )
}