const year = new Date().getFullYear();


export default function Footer(urls) {
    return (
        <footer>
            <div className="row">
            <div className="col">
                <div className="link-container">
                    <a
                        className="footer-link"
                        href={urls.linkedIn}
                        >LinkedIn</a
                    >
                    <a className="footer-link" href={urls.instagram}
                        >Instagram</a
                    >
                    <a className="footer-link" href={`mailto:${urls.email}`}>Email</a>
                    </div>
                    <p className="copyright">© {year} {urls.name}</p>
                </div>
            </div>
      </footer>
    );
};