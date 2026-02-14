import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import { footerContent } from "../data/siteData.js";

const Footer = () => {
    return (
        <div className="bg-black text-white rounded-t-3xl mt-8 md:mt-0" id="contact">
            <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
                <div className="w-full md:w-1/4">
                    <h1 className="font-semibold text-xl pb-4">{footerContent.brandName}</h1>
                    <p className="text-sm">{footerContent.brandTagline}</p>
                </div>
                <div>
                    <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">{footerContent.linksTitle}</h1>
                    <nav className="flex flex-col gap-2">
                        {footerContent.links.map((link) => (
                            <ScrollLink
                                key={link.id}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-90}
                                className="hover:text-orange-500 transition-all cursor-pointer"
                            >
                                {link.label}
                            </ScrollLink>
                        ))}
                    </nav>
                </div>
                <div>
                    <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">{footerContent.contactTitle}</h1>
                    <nav className="flex flex-col gap-2">
                        {footerContent.contacts.map((contact) => (
                            <a
                                key={contact.id}
                                className="hover:text-orange-500 transition-all cursor-pointer"
                                href={contact.href}
                                target={contact.newTab ? "_blank" : undefined}
                                rel={contact.newTab ? "noreferrer" : undefined}
                            >
                                {contact.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Footer