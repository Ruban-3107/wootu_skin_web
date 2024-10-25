import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { WhatsAppWidget } from 'react-whatsapp-widget'; // Correctly import as a named import
import 'react-whatsapp-widget/dist/index.css'; // Import the default styles
import './WhatsappFloating.css';
import { whatsappMobile } from '../../common/utils';

const WhatsAppButton = () => {
 
  
    return (
        <div className="whatsapp-widget-container">  {/* Apply the floating container */}
        <WhatsAppWidget
          phoneNumber="7550248451"  // Replace with your WhatsApp number
          message="Hello! How can we help you?"  // Initial message
          companyName="Wootu"  // Your company or title
          sendButton="Start Chat"  // Text on the button
          replyOptions={[
            { id: 1, name: 'Support', message: 'I need help with support!' },
            { id: 2, name: 'Sales', message: 'I would like to inquire about your products.' },
            { id: 3, name: 'General Inquiry', message: 'I have a general inquiry.' },
          ]}
        />
      </div>
    )
};

export default WhatsAppButton;
