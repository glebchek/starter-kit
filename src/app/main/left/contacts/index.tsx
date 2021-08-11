import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';

interface IContactLink {
  href: string;
  icon: IconDefinition;
}

const contacts: IContactLink[] = [
  {
    href: 'mailto:mail@glebchek.com',
    icon: faEnvelopeOpen,
  },
  {
    href: 'tg://resolve?domain=glebchek',
    icon: faTelegram,
  },
];

export function Contacts(): JSX.Element {
  return (
      <ul>
        {contacts.map(contact => (
          <li>
            <a href={contact.href}>
              <FontAwesomeIcon icon={contact.icon} />
            </a>
          </li>
        ))}
      </ul>
  );
}
