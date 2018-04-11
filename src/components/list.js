import React from 'react';
import './list.css';

export default function List(props) { 
const contactList = props.contacts.map((v, i) => (<li key={i}>{v.name}<br />{v.address}<br/><br /></li>) )
return (
<ul>
    {contactList}
    
</ul>
)

}