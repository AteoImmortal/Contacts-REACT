import { useRef, useState } from "react";
import { Contact } from "./models/contact";
import { v4 as uuidv4 } from 'uuid';
import { ContactRender } from "../components/Contact";


export const ContactsList = () => {
    const [data, setData] = useState<Contact[]>([]);

    const firstNameRef = useRef<HTMLInputElement>(null);
    const surnameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const handleAddContact = () => {
        const firstName = firstNameRef.current;
        const surname = surnameRef.current;
        const phone = phoneRef.current;
        const address = addressRef.current;

        data.push({
            id: uuidv4(),
            firstName: firstName?.value?? '',
            surname: surname?.value?? '',
            phone: phone?.value?? '',
            address: address?.value?? '',
            isDone: false
        })
        setData([...data]);
        firstName!.value = '';
        surname!.value = '';
        phone!.value = '';
        address!.value = '';
    }

    return  <div className="container">
                <h1>Контактная книга</h1>
                <div className="contacts__input_data">
                    <input ref={firstNameRef} type="text" name="firstName" placeholder="Имя" required/>
                    <input ref={surnameRef} type="text" name="surname" placeholder="Фамилия" required/>
                    <input ref={phoneRef} type="text" name="phone" placeholder="Телефон" required/>
                    <input ref={addressRef} type="text" name="address" placeholder="Адрес" required/>
                    <button onClick={handleAddContact}>Добавить контакт</button>
                </div>
                <ul className="contacts__list">
                        {data.map((contact) => <ContactRender contact={contact}/>)}
                    
                </ul>
            </div> 
}

