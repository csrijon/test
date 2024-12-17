
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

dropdownToggles.forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent link behavior
        const dropdownMenu = toggle.nextElementSibling;
        dropdownMenu.classList.toggle('active');
    });
});


let main = document.querySelector("main");
let registration = document.querySelector(".registration");
let sponsors = document.querySelector(".sponsors");
let contact = document.querySelector(".contact");
let mainprogram = document.querySelector(".main-program");
let rumpsession = document.querySelector(".rump-session");

registration.addEventListener("click", (e) => {
    e.preventDefault();
    main.innerHTML = "";
    main.innerHTML= `
     <div class="registration-section">
        <h2 class="title">Registration</h2>
        <div class="registration-table">
            <table>
                <thead>
                    <tr>
                        <th>Registration Cost</th>
                        <th>Regular</th>
                        <th>Student</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Registration for IACR members on or before Nov 20</td>
                        <td>$650</td>
                        <td>$325</td>
                    </tr>
                    <tr>
                        <td>Registration for IACR members Nov 21 and later</td>
                        <td>$750</td>
                        <td>$425</td>
                    </tr>
                    <tr>
                        <td>Registration on or before Nov 20 + IACR dues</td>
                        <td>$700</td>
                        <td>$350</td>
                    </tr>
                    <tr>
                        <td>Registration Nov 21 and later + IACR dues</td>
                        <td>$800</td>
                        <td>$450</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="notice">
            <p>⚠️ People who register for the conference agree to abide by the <a href="#">IACR code of conduct</a>.</p>
        </div>
        <div class="info-section">
            <div class="info-box">
                <h3>What the Conference Fee Includes</h3>
                <p>The conference registration fee includes participation in the technical program, daily lunch and coffee breaks, all social functions, and an electronic copy of the conference proceedings. Accompanying guests can also be registered for participation in the conference social functions.</p>
            </div>
            <div class="info-box">
                <h3>Additional Information</h3>
                <p>IACR dues are $50 for regular attendees and $25 for student attendees. All attendees who register after November 20th, 2024 will incur a $100 late registration surcharge. Fee for an accompanying person will be $200.</p>
            </div>
        </div>
        <div class="cta-button">
            <button>Register Now!</button>
        </div>
        <div class="info-section">
            <div class="info-box">
                <h3>Refund Policy</h3>
                <p>Cancellation requests should be made in writing or email to the conference general chair. Those received by December 1st will receive a full refund less $100 to cover fixed costs for the conference. No refunds will be made for cancellations after this date.</p>
            </div>
            <div class="info-box">
                <h3>IACR Policy for Proceedings</h3>
                <p>Proceedings will be made available online to attendees. If you would like to obtain a printed copy of the proceedings, please purchase it from the publisher.</p>
            </div>
        </div>
        <div class="student-support">
            <h3>Student Support</h3>
            <p>If you are a student who would like to attend the conference, <a href="#">the student support page</a> has more information about housing and registration discounts that are available to you.</p>
        </div>
    </div>
    `
});

sponsors.addEventListener("click", (e) => {
    e.preventDefault();
    main.innerHTML = "";
    main.innerHTML= `<div class="container">
        <section class="sponsors">
            <h2>Sponsors</h2>
            <p class="description">
                Asiacrypt 2024 relies on sponsors to help ensure student participation. 
                Please contact the <a href="#" class="link">conference general chair</a> if your company is interested in sponsoring this conference. 
                Information about the various levels of sponsorship is 
                <a href="#" class="link">available in PDF format</a>.
            </p>

            <!-- Gold Level -->
            <div class="sponsor-level">
                <h3 class="gold">Gold level</h3>
                <div class="sponsor-logo">
                    <img src="https://via.placeholder.com/250x100?text=tcg+crest" alt="tcg crest logo">
                    <p class="slogan">Inventing Harmonious Future</p>
                </div>
            </div>

            <!-- Silver Level -->
            <div class="sponsor-level">
                <h3 class="silver">Silver level</h3>
                <div class="sponsor-logo">
                    <img src="https://via.placeholder.com/250x100?text=SILENCE+LABORATORIES" alt="Silence Labs logo">
                </div>
            </div>

            <!-- Bronze Level -->
            <div class="sponsor-level">
                <h3 class="bronze">Bronze level</h3>
                <div class="sponsor-logo">
                    <img src="https://via.placeholder.com/250x100?text=IBM" alt="IBM logo">
                </div>
            </div>
        </section>
    </div>`
});

contact.addEventListener("click",(e) => {
    e.preventDefault();
    main.innerHTML = "";
    main.innerHTML = `<div class="contact-container">
    <h2 class="contact-title">Contact</h2>

    <!-- General Chair -->
    <div class="section">
      <h3 class="section-title general-chair">General Chair</h3>
      <p class="name">Bimal Kumar Roy</p>
      <p class="org">TCG CREST</p>
      <p class="location">Kolkata, India</p>
      <p class="email">
        📧 <a href="mailto:asiacrypt2024@iacr.org">asiacrypt2024@iacr.org</a>
      </p>
    </div>

    <!-- Program Co-Chairs -->
    <div class="section">
      <h3 class="section-title">Program Co-Chairs</h3>
      <div class="chairs">
        <div class="chair">
          <p class="name">Kai-Min Chung</p>
          <p class="org">Academia Sinica</p>
          <p class="location">Taipei, Taiwan</p>
        </div>
        <div class="chair">
          <p class="name">Yu Sasaki</p>
          <p class="org">NTT Social Informatics Laboratories</p>
          <p class="location">Tokyo, Japan</p>
          <p class="org">National Institute of Standards and Technology</p>
          <p class="location">USA</p>
        </div>
      </div>
      <p class="email">
        📧 <a href="mailto:asiacrypt2024programchairs@iacr.org">asiacrypt2024programchairs@iacr.org</a>
      </p>
    </div>

    <!-- Local Organizing Committee -->
    <div class="section">
      <h3 class="section-title">Local Organizing Committee</h3>
      <div class="committee">
        <div class="member">
          <p class="name bold">Debashis Roy</p>
          <p class="role">Organizing Chair</p>
          <p class="location">Government of West Bengal</p>
        </div>
        <div class="member"><p class="name">Avik Chakraborti</p><p>TCG CREST, Kolkata, India</p></div>
        <div class="member"><p class="name">Suprakash Das</p><p>TCG CREST, Kolkata, India</p></div>
        <div class="member"><p class="name">Nilanjan Datta</p><p>TCG CREST, Kolkata, India</p></div>
        <div class="member"><p class="name">Avijit Dutta</p><p>TCG CREST, Kolkata, India</p></div>
        <div class="member"><p class="name">Indivar Gupta</p><p>SAG DRDO, New Delhi, India</p></div>
        <div class="member"><p class="name">Ajeet Kumar</p><p>Government of India</p></div>
        <div class="member"><p class="name">Rakesh Kumar</p><p>Indian Statistical Institute, Kolkata, India</p></div>
        <div class="member"><p class="name">Girish Mishra</p><p>SAG DRDO, New Delhi, India</p></div>
        <div class="member"><p class="name">Pratyay Mukherjee</p><p>Supra Research</p></div>
        <div class="member"><p class="name">Mridul Nandi</p><p>Indian Statistical Institute, Kolkata, India</p></div>
        <div class="member"><p class="name">Saibal Pal</p><p>SAG DRDO, New Delhi, India</p></div>
        <div class="member"><p class="name">Subhabrata Samajder</p><p>TCG CREST, Kolkata, India</p></div>
      </div>
    </div>
  </div>`
});

mainprogram.addEventListener("click", (e) => {
    e.preventDefault();
    main.innerHTML = "";
    main.innerHTML = `
        <div class="main-container">
        <!-- Date Header -->
        <div class="date-header">Tuesday, December 10 (Kolkata)</div>

        <!-- Schedule Section -->
        <div class="schedule">
            <!-- Event 1 -->
            <div class="time-block">
                <div class="time">
                    Kolkata: 8:50-9:00<br>
                    Tue Dec 10 08:50<br>
                    to<br>
                    Tue Dec 10 09:00
                </div>
                <div class="event-block">
                    <div class="event-title">Opening remarks</div>
                    <div class="event-subtitle">Dhono Dhanyo Auditorium Hall 2 (2nd Floor)</div>
                    <a href="#" class="zoom-button">Zoom</a>
                </div>
            </div>

            <!-- Event 2 -->
            <div class="time-block">
                <div class="time">
                    Kolkata: 9:00-10:15<br>
                    Tue Dec 10 09:00<br>
                    to<br>
                    Tue Dec 10 10:15
                </div>
                <div class="event-block">
                    <div class="event-title">Best Paper Award</div>
                    <div class="event-subtitle">Dhono Dhanyo Auditorium Hall 2 (2nd Floor)</div>
                    <a href="#" class="zoom-button">Zoom</a>

                    <!-- Papers -->
                    <div class="paper-section">
                        <div class="paper-title">Revisiting Key Decomposition Techniques for FHE: Simpler, Faster and More Generic</div>
                        <div class="speaker">Speaker(s): Nicolas Gama</div>
                        <a href="#" class="abstract-link">Show abstract ›</a>
                    </div>

                    <div class="paper-section">
                        <div class="paper-title">Unbounded ABE for Circuits from LWE, Revisited</div>
                        <div class="speaker">Speaker(s): Valerio Cini</div>
                        <a href="#" class="abstract-link">Show abstract ›</a>
                    </div>

                    <div class="paper-section">
                        <div class="paper-title">The First Practical Collision for 31-Step SHA-256</div>
                        <div class="speaker">Speaker(s): Yingxin Li (online)</div>
                        <a href="#" class="abstract-link">Show abstract ›</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`
});

rumpsession.addEventListener("click", (e) => {
    e.preventDefault();
    main.innerHTML = "";
    main.innerHTML = `    <div class="rump-session-wrapper">
        <!-- Header -->
        <header>
            <h1>Rump Session</h1>
        </header>

        <!-- Call for Contributions -->
        <section class="section">
            <h2>Call for Contributions</h2>
            <p>The success of a great rump session lies in you – the brilliant minds attending Asiacrypt 2024 – sending in your best submissions so we can create a cracking program. Do you have breaking news, progress reports, or other topics of interest to the cryptographic community? Can you keep your talk short and entertaining? The rump session is where people show off their talents, present breaking news with their own sense of humour, or in rare cases either commiserate their rejected Asiacrypt submission to a rowdy audience, or present work under submission in the hope of influencing potential reviewers in the audience.</p>
        </section>

        <!-- Submission Guidelines -->
        <section class="section">
            <h2>Submission Guidelines</h2>
            <p><strong>Time constraints:</strong> 1-5 minutes, 6 minutes if very funny</p>
            <p><strong>Submission deadline:</strong> Wednesday December 11th at 3:29:59PM (GMT+5.5)</p>
            <button class="submit-btn">Submit a talk</button>
        </section>

        <!-- Platform -->
        <section class="section">
            <h3>Platform</h3>
            <p>The rump session video and slides will be made available online to the wider world afterwards. The act of submitting will be taken as your consent to these terms. Note that it is your responsibility as a rump session contender that no plagiarism or copyright infringement takes place.</p>
            <p>If you are presenting in person, make sure you are close to the stage near the appointed time. Remote participation in the rump session will be allowed. Submissions for remote talks must be clearly marked as such in the form.</p>
        </section>

        <!-- Format -->
        <section class="section">
            <h3>Format</h3>
            <p>Your slides must be submitted as a PDF, which we will collect together to avoid laptop changes during the presentation. If you have a sufficiently entertaining reason why you should be exempted from this requirement, let us know in your submission. If you plan to give a talk without slides, or if you don’t have slides ready yet, please prepare and submit one slide with your name and talk title. If your proposed submission has any special requirements (e.g., other presentation formats, extra microphones, extraterrestrial lighting cues, etc.), please describe your full requirements in your original submission.</p>
        </section>
        <!-- Detailed Instructions -->
        <section class="section warning">
            <h3>Detailed Instructions</h3>
            <p>Any submissions not following these guidelines may be rejected. Some submissions may have to be rejected or shortened because of time constraints. Please remember that the rump session is meant for short and entertaining presentations. We will only be accepting a very limited number of talks (if any) that are conference/meeting announcements or job advertisements, since these types of announcements are now well served by the IACR’s calendar of <a href="#">events</a> and <a href="#">open positions in cryptology</a> pages.</p>
            <p><strong>⚠️ A final reminder: do not play copyrighted music as part of your talks. Yes, we’re serious. Yes, we know it’s a bummer. Since the rump session is recorded and posted on YouTube, if you play copyrighted music, the IACR YouTube account is at risk of being shut down. Please don’t put us at risk!</strong></p>
        </section>

        <!-- Chairs -->
        <section class="chairs">
            <h2>Rump Session Chairs</h2>
            <div class="chair-names">
                <p><strong>Avik Chakraborti</strong><br>TCG CREST India</p>
                <p><strong>Nilanjon Datta</strong><br>TCG CREST India</p>
                <p><strong>Pratyay Mukherjee</strong><br>Supra Research</p>
            </div>
            <p class="email">📧 <a href="mailto:asiacrypt2024rump@iacr.org">asiacrypt2024rump@iacr.org</a></p>
        </section>
    </div>`
})

