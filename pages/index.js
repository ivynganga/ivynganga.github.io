import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";


function Header() {
	return(
		<Head>
			<title>Ivy Nganga - Software Developer</title>
			<script src="https://kit.fontawesome.com/09a8afe55f.js" crossorigin="anonymous"></script>
		</Head>
	);
}

export default function Index() {
	return(
		<Layout>
			<Header />
			<div class="heading"><h1 class="name">Ivy Nganga</h1></div>
			<div class="sub-heading">
				<h2 class="title">Software Developer</h2>
				<p>
				<i class="fa-brands fa-php fa-lg"></i>
				<i class="fa-brands fa-square-js fa-lg"></i>
				<i class="fa-brands fa-react fa-lg"></i>
				<i class="fa-brands fa-html5 fa-lg"></i>
				<i class="fa-brands fa-css3-alt fa-lg"></i>
				</p>
			</div>
			<div class="content">
				<div className=""><h5>Some Works</h5></div>
				<div className="work-container">
					<ul className="work">
						<li>
							<div className="each-work">
								<div className="each-work-child"><span>Some Crypto App</span></div>
								<div className="each-work-child">
									<Link href="https://some-crypto-app.herokuapp.com/" target="_blank"><i class="fa-solid fa-link fa-2xs"></i></Link>
									<Link href="https://github.com/ivynganga/some-crypto-app" target="_blank"><i class="fa-brands fa-github fa-2xs"></i></Link>

								</div>
							</div>
						</li>
						<li>
							<div className="each-work">
								<div className="each-work-child"><span>Some Weather App</span></div>
								<div className="each-work-child">
									<Link href="https://some-weather-app.herokuapp.com" target="_blank"><i class="fa-solid fa-link fa-2xs"></i></Link>
									<Link href="https://github.com/ivynganga/some-weather-app" target="_blank"><i class="fa-brands fa-github fa-2xs"></i></Link>
								</div>
							</div>
						</li>
						<li>
							<div className="each-work">
								<div className="each-work-child"><span>Portfolio</span></div>
								<div className="each-work-child">
									<Link href="/"><i class="fa-solid fa-link fa-2xs"></i></Link>
									<Link href="https://github.com/ivynganga/ivynganga.github.io" target="_blank"><i class="fa-brands fa-github fa-2xs"></i></Link>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="social">
				<Link href="https://github.com/ivynganga" target="_blank"><i class="fa-brands fa-github fa-sm"></i></Link>
				<Link href="https://www.linkedin.com/in/ivy-nganga" target="_blank"><i class="fa-brands fa-linkedin"></i></Link>
				<Link href="mailto:ivynnganga@gmail.com" target="_blank"><i class="fa-regular fa-envelope"></i></Link>
			</div>
		</Layout>
	);
}


