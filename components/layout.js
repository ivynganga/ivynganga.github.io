import Particles from "react-tsparticles";
import particleConfig from "./particle-config";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function Layout( {children} ) {
	const particlesInit = useCallback(async engine => {
		console.log(engine);
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async container => {
		await console.log(container);
	}, []);
	return (
		<div class="container">
			<Particles init={particlesInit} loaded={particlesLoaded} options={particleConfig} />
			<div className="content">{ children }</div>
		</div>
	);
}