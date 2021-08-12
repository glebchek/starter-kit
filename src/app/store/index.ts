import { faAddressBook, faUser } from "@fortawesome/free-regular-svg-icons"
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";

import { ICategory } from "../interfaces";

import { About } from "../main/left/about"
import { Contacts } from "../main/left/contacts";
import { Eductaion } from "../main/left/education";

export interface IStaticStore {
    categories: {
        left: ICategory[],
        right: ICategory[],
    }
}

export const StaticStore: IStaticStore = {
    categories: {
        left: [
            {
                id: 'contacts',
                name: 'Contacts',
                icon: faAddressBook,
                component: Contacts
              },
            {
                id: 'about',
                name: 'About me',
                icon: faUser,
                component: About
              },
              {
                id: 'education',
                name: 'Education',
                icon: faUserGraduate,
                component: Eductaion,
              }
        ],
        right: [

        ]
    }
}
