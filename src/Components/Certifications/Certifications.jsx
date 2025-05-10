import { CertificationCard } from "../certification-card/CertificationCard";
import './certifications.styles.css';

export function Certifications() {
    const certifications = [
        {
            title: 'CompTIA A+',
            issuer: 'CompTIA',
            image: '/public/certification-badges/comptia-a-ce-certification.1.png'
        },
        {
            title: 'CompTIA Linux+',
            issuer: 'CompTIA',
            image: '/public/certification-badges/comptia-linux-powered-by-lpi-certification.2.png'
        },
        {
            title: 'CompTIA Network+',
            issuer: 'CompTIA',
            image: '/public/certification-badges/comptia-network-ce-certification.1.png'
        },
        {
            title: 'CompTIA Security+',
            issuer: 'CompTIA',
            image: '/public/certification-badges/comptia-security-ce-certification.png'
        },
        
    ]
    return (
        <section id="certifications">
            <h2>Certifications</h2>
            <div className="cert-grid">
                {certifications.map((cert, idx) => (
                    <CertificationCard 
                        key={idx}
                        title={cert.title}
                        issuer={cert.issuer}
                        image={cert.image}
                    />
                ))}
            </div>
        </section>
    );
}