import { Contact } from "../../ContactsList/models/contact"

type ContactItem = {
    contact: Contact;
}

export const ContactRender = ({contact}:ContactItem) => {
    const {id, firstName, surname, address, phone, isDone} = contact;

    return  <ul>
                <li key={contact.id}>
                    <input type="checkbox" defaultChecked={isDone} />
                    <div>
                        <p>{firstName}</p>
                        <p>{surname}</p>
                        <p>{address}</p>
                        <p>{phone}</p>
                    </div>
                    <button id={id}>Удалить</button>
                </li>
            </ul>
}