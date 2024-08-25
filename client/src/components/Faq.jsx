import React from 'react';
import { Accordion, Container, Row, Col } from 'react-bootstrap';

const Faq = () => {
    const faqs = [
        {
            question: 'What is phishing?',
            answer: 'Phishing is a malicious activity through which attackers defraud online users to get their sensitive information. Attackers mimic the features of reputable websites, which aim to disclose personal information such as user credentials for net banking or debit/credit card details, and other personal details.',
        },
        {
            question: 'How can I recognize a phishing email?',
            answer: 'This is the most common attacks that we faced in our daily life. They will prompt as a genuine company website and contains malicious URL.'
        },
        {
            question: 'What should I do if I receive a suspicious email?',
            answer: 'Do not click on any links or download attachments.Verify the sender’s email address and contact the company or person directly using known contact information.Report the email to your IT department or email provider and mark it as spam or phishing.'
        },
        {
            question: 'How can I protect myself from phishing attacks?',
            answer: 'Be cautious with unsolicited messages: Avoid clicking on links or providing personal information in response to unsolicited emails or messages.Verify sources: Contact organizations directly through official channels if you receive unexpected requests for information.Use strong, unique passwords and enable two-factor authentication (2FA) where possible.Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod facere maxime placeat possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet voluptates.'
        },
        {
            question: 'What should I do if I think I’ve fallen for a phishing scam?',
            answer: 'Change your passwords immediately for any affected accounts.Notify your financial institutions if you provided financial informationScan your device for malware and run a security check.'
        },

        {
            question: 'What are some common phishing techniques?',
            answer: '1.	Phishing via email: This is the most common attacks that we faced in our daily life. They will prompt as a genuine company website and contains malicious UR.Spear Phishing: This is the type of attacks that targets on a specific individuals or organisations. This kind of scam trick victim into deposing sensitive data, downloading malware or sending money to attackers.Whaling: It is a spear phishing that aimed exclusively at higher executives or officials.Clone phishing: This is a newer type of attack in a email based threat, where attackers clone a real email message with attachment and resend it pretending to be the original sender.Smishing and Vishing: Phishing attacks that taken places through voice mails and SMS are called vishing and smishing respectively.'
        }

    ];

    return (
        <section className="faq-area faq-padding">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} xl={9} lg={11}>
                        <Accordion defaultActiveKey="0">
                            {faqs.map((faq, index) => (
                                <Accordion.Item eventKey={index.toString()} key={index}>
                                    <Accordion.Header>
                                        {`${index + 1}. ${faq.question}`}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        {faq.answer}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Faq;
