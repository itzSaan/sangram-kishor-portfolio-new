import Footer from '../components/Footer'
import emailjs from '@emailjs/browser';
import './contact.css'
import SuccessModal from '../components/successModal'
import ErrorModal from '../components/ErrorModal';
import { useRef, useState } from 'react';

export default function Contact() {
    const form = useRef();

    const [isMailSendSuccess, setIsMailSendSuccess] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_z9no04m', 'template_xittfeo', form.current, { publicKey: '_IYL6egh7VITjsmVm'})
            .then(() => {
                console.log("SUCCESS");
                setIsMailSendSuccess(prev => prev = true);
                setModalOpen(prev => prev = true)
                form.current.reset();
            }, (error) => {
                console.log('FAILED...', error.text);
                setIsMailSendSuccess(prev => prev = false);
                setModalOpen(prev => prev = true);
            });
    }

    return (
<>
<section id="contact" className="container-fluid">
    <div className="mx-auto h-full container flex ac">
        <div className="contact-section-wrap">                    
            <h2 className="section-title">Contact me</h2>                           
            <div className="w-full">
                <div className="flex jb gap-1 f-col-r lg-f-row">
                    <div className="left flex f-col gap-1">
                        <div className="flex gap-1">
                            <div><i className="ri-map-pin-fill"></i></div>
                            <div className="flex f-col">
                                <span className="text-grey uppercase">Address</span>
                                <p>Bhubaneswar, Odisha, IND - 751010</p>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <div><i className="ri-phone-fill"></i></div>
                            <div className="flex f-col">
                                <span className="text-grey uppercase">Phone</span>
                                <p>+91 8908 221 784</p>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <div><i className="ri-mail-send-line"></i></div>
                            <div className="flex f-col">
                                <span className="text-grey uppercase">Email</span>
                                <p>sangramm7@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex gap-1 mb-2">
                            <div><i className="ri-earth-fill"></i></div>
                            <div className="flex f-col">
                                <span className="text-grey uppercase">Website</span>
                                <p>sangramkishor.tk</p>
                            </div>
                        </div>
                        <div className="flex f-col gap-1 social">
                            <span>find me on.</span>
                            <div className="social-icon-wrap flex gap-1">
                                <a href="https://x.com/dev_saan"><i className="ri-twitter-fill"></i></a>
                                <a href="https://instagram.com/dev_saan"><i className="ri-instagram-fill"></i></a>
                                <a href="https://github.com/itzSaan"><i className="ri-github-fill"></i></a>
                                <a href="https://codepen.io/dev_saan"><i className="ri-codepen-fill"></i></a>
                                <a href="https://linkedin.com/in/sangramkishor"><i className="ri-linkedin-fill"></i></a>
                            </div>                            
                           
                        </div>
                    </div>
                    <div className="right">
                        <div className="form-container">
                            <h2>Get in touch</h2>
                            <form action="" className="flex f-col gap-1" ref={form} onSubmit={sendEmail}>
                                <input type="text" placeholder="Name" name='name' required/>
                                <input type="email" placeholder="Email" name='email' required/>
                                <input type="text" placeholder="Subject" name='subject' required/>
                                <textarea type="textbox" placeholder="Message" name='message' rows="5" required></textarea>
                                <button type="submit" className='form-submit-btn'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
</section> 
    <Footer />
    { isMailSendSuccess && modalOpen && <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} /> }
    { isMailSendSuccess === false && modalOpen && <ErrorModal modalOpen={modalOpen} setModalOpen={setModalOpen} /> }
</>
    )
}