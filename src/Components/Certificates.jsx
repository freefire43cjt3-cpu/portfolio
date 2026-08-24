import "./Certificates.css";

function Certificates() {
  return (
    <section className="certificates" id="certificates">

      <div className="certificates-header">
        <span>MY ACHIEVEMENTS</span>

        <h2>
          Certificates & <b>Recognition</b>
        </h2>

        <p>
          A collection of certifications and milestones that represent my
          growth, dedication, and journey in web development.
        </p>
      </div>

      {/* MAIN CERTIFICATE */}
      <div className="certificate-main">

        <div className="certificate-image">
          <a
            href="/images/buezetechcertificate.jpeg"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/buezetechcertificate.jpeg"
              alt="BuezeTech Certificate"
            />
          </a>
        </div>

        <div className="certificate-info">

          <span className="certificate-tag">
            CERTIFICATE OF TRAINING
          </span>

          <h3>
            Front-End Web Development
          </h3>

          <p>
            Successfully completed the 6-week BuezeTech SMS Bootcamp,
            developing practical skills in modern front-end web development.
          </p>

          <div className="certificate-details">

            <div>
              <small>ISSUED BY</small>
              <strong>BuezeTech</strong>
            </div>

            <div>
              <small>DATE</small>
              <strong>July 1, 2025</strong>
            </div>

          </div>

          <a
            href="/images/buezetechcertificate.jpeg"
            target="_blank"
            rel="noreferrer"
            className="view-certificate"
          >
            View Certificate ↗
          </a>

        </div>

      </div>

      {/* ACHIEVEMENT PHOTOS */}
      <div className="achievement-title">

        <span>MY JOURNEY</span>

        <h3>
          Moments Along The Way
        </h3>

      </div>

      <div className="achievement-gallery">

        <a
          href="/images/achievement1.jpeg"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/achievement1.jpeg"
            alt="Web development achievement"
          />
        </a>

        <a
          href="/images/achievement2.jpeg"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/achievement2.jpeg"
            alt="Web development achievement"
          />
        </a>

        <a
          href="/images/achievement3.jpeg"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/achievement3.jpeg"
            alt="Web development achievement"
          />
        </a>
        

      </div>
        {/* VIDEO */}
      <div className="defense-video">
  <video controls>
    <source src="/video/defense.mp4" type="video/mp4" />
    Your browser does not support the video.
  </video>

  <h3>Project Defense</h3>
  <p>
    A short clip from my project defense presentation.
  </p>
</div>

    </section>
  );
}

export default Certificates;