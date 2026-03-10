import * as React from "react";
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components";

interface ContactEmailProps {
    name: string;
    email: string;
    topic: string;
    message: string;
}

export const ContactEmail = ({
    name,
    email,
    topic,
    message,
}: ContactEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>New inquiry from {name} via HONTO SOZO</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>New Contact Inquiry</Heading>
                    <Text style={text}>
                        You have received a new message from the HONTO SOZO website contact form.
                    </Text>

                    <Section style={section}>
                        <Text style={itemText}>
                            <strong>Name:</strong> {name}
                        </Text>
                        <Text style={itemText}>
                            <strong>Email:</strong> {email}
                        </Text>
                        <Text style={itemText}>
                            <strong>Topic:</strong> {topic}
                        </Text>
                    </Section>

                    <Hr style={hr} />

                    <Section style={messageSection}>
                        <Text style={msgTitle}><strong>Message:</strong></Text>
                        <Text style={msgContent}>{message}</Text>
                    </Section>

                    <Hr style={hr} />

                    <Text style={footer}>
                        This email was automatically generated from your website contact form.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

export default ContactEmail;

// --- CSS styles
const main = {
    backgroundColor: "#f6f9fc",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "40px 20px",
    borderRadius: "8px",
    maxWidth: "600px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
};

const h1 = {
    color: "#1978E5",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "0 0 20px",
    padding: "0",
};

const text = {
    color: "#333",
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "30px",
};

const section = {
    backgroundColor: "#f8fafc",
    padding: "20px",
    borderRadius: "6px",
    marginBottom: "30px",
};

const messageSection = {
    padding: "10px 0",
};

const itemText = {
    color: "#333",
    fontSize: "15px",
    lineHeight: "1.5",
    margin: "0 0 10px",
};

const msgTitle = {
    color: "#333",
    fontSize: "15px",
    margin: "0 0 10px",
};

const msgContent = {
    color: "#475569",
    fontSize: "15px",
    lineHeight: "24px",
    whiteSpace: "pre-wrap" as const,
    backgroundColor: "#f1f5f9",
    padding: "15px",
    borderRadius: "6px",
};

const hr = {
    borderColor: "#e2e8f0",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
    lineHeight: "16px",
    textAlign: "center" as const,
};
