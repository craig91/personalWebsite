export function CertificationCard({ title, issuer, image }) {
    return (
        <div className="cert-card">
            <img src={image} alt={`${title} badge`} className="cert-image" />
            <h3 className="cert-title">{title}</h3>
            <p className="cert-issuer">{issuer}</p>
        </div>
    )
}