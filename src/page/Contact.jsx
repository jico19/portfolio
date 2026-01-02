import React, { useState } from "react";
import { Mail, Copy } from "lucide-react";

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "jerwinquijano19@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    };

    return (
        <div className="p-10 flex flex-col items-center bg-gray-50 rounded-lg shadow-md space-y-4">
            <h1 className="text-4xl font-bold">Contact Me</h1>
            <div className="flex items-center space-x-3 text-lg sm:text-xl">
                <Mail className="w-6 h-6 text-blue-500" />
                <span>{email}</span>
                <button
                    onClick={handleCopy}
                    className="flex items-center px-2 py-1 rounded hover:bg-blue-500 transition"
                >
                    <Copy className="w-4 h-4 mr-1" />
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>
        </div>
    );
};

export default Contact;
