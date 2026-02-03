import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Code2, Database } from 'lucide-react';
import data from '../data.json';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-blue-600 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

                    <div className="md:w-1/2 p-10 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                            <p className="text-blue-100 mb-8">
                                I'm open to new opportunities and collaborations. Feel free to reach out!
                            </p>

                            <div className="space-y-4">
                                <a href={`mailto:${data.personalInfo.links.email}`} className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                        <Mail size={20} />
                                    </div>
                                    <span>Send an email</span>
                                </a>
                                <a href={data.personalInfo.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                        <Linkedin size={20} />
                                    </div>
                                    <span>LinkedIn</span>
                                </a>
                                <a href={data.personalInfo.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                        <Github size={20} />
                                    </div>
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="text-sm text-blue-200">
                                © {new Date().getFullYear()} {data.personalInfo.name}
                            </p>
                        </div>
                    </div>

                    <div className="md:w-1/2 bg-gray-50 p-10">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Your message..."></textarea>
                            </div>
                            <button type="button" className="w-full bg-gray-900 text-white font-medium py-3 rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-2">
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
