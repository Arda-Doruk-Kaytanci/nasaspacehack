import React, { useState } from 'react';
import "./CssFiles/Quiz.css";

function PlanetForm() {
    const [planetName, setPlanetName] = useState("");
    const [planetSize, setPlanetSize] = useState("");
    const [atmosphere, setAtmosphere] = useState("");
    const [surfaceTemperature, setSurfaceTemperature] = useState("");
    const [orbitalPeriod, setOrbitalPeriod] = useState("");
    const [surfaceGravity, setSurfaceGravity] = useState("");
    const [starType, setStarType] = useState("");
    const [starAge, setStarAge] = useState("");
    const [magneticField, setMagneticField] = useState("");
    const [habitableZone, setHabitableZone] = useState("");
    const [planetaryFeatures, setPlanetaryFeatures] = useState("");
    const [planetInfo, setPlanetInfo] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

    const generatePlanetReport = (data) => {
        let report = `Planet Name: ${data.name}\n\n`;

        report += `**Planetary Characteristics**\n`;
        report += `- Size: Approximately ${data.size} times the mass of Earth.\n`;
        report += `- Atmosphere: The primary composition is ${data.atmosphere}.\n`;
        report += `- Surface Temperature: The average surface temperature is ${data.surfaceTemperature}°C.\n`;
        report += `- Orbit: The planet orbits its star every ${data.orbitalPeriod} Earth days.\n`;
        report += `- Surface Gravity: Estimated surface gravity is ${data.surfaceGravity} m/s².\n\n`;

        report += `**Host Star**\n`;
        report += `- Star Type: This planet orbits a ${data.starType}.\n`;
        report += `- Star Age: The star is around ${data.starAge} billion years old, suggesting a ${data.starAge < 5 ? "relatively young" : "mature"} planetary system.\n\n`;

        report += `**Magnetic Field and Habitability**\n`;
        report += `- Magnetic Field: The planet ${data.magneticField === "Yes" ? "has" : "does not have"} a magnetic field, which ${data.magneticField === "Yes" ? "could help protect its atmosphere from stellar radiation." : "might leave its atmosphere vulnerable to stellar wind."}\n`;
        report += `- Habitable Zone: The planet is ${data.habitableZone === "Yes" ? "" : "not "}in the habitable zone of its star, ${data.habitableZone === "Yes" ? "which suggests potential for liquid water and favorable conditions for life." : "reducing the likelihood of liquid water on its surface."}\n\n`;

        report += `**Unique Features**\n`;
        report += `${data.features}\n`;

        return report;
    };

    const onSubmitHandler = (event) => {
        event.preventDefault(); // Prevent the default form submission

        const planetData = {
            name: planetName,
            size: planetSize,
            atmosphere: atmosphere,
            surfaceTemperature: surfaceTemperature,
            orbitalPeriod: orbitalPeriod,
            surfaceGravity: surfaceGravity,
            starType: starType,
            starAge: starAge,
            magneticField: magneticField,
            habitableZone: habitableZone,
            features: planetaryFeatures,
        };

        const report = generatePlanetReport(planetData);
        setPlanetInfo(report);
        setIsSubmitted(true); 
        console.log(report)
        console.log(isSubmitted)
    };

    return (
        <>
            <form id="planetForm" className="form-container" onSubmit={onSubmitHandler}>
                <label htmlFor="planetName">1. What is the name of your planet?</label><br />
                <div className="answers">
                    <input
                        type="text"
                        id="planetName"
                        name="planetName"
                        value={planetName}
                        onChange={(e) => setPlanetName(e.target.value)}
                        required
                    />
                </div><br />

                <label htmlFor="planetSize">2. What is the size of your planet (in Earth masses)?</label><br />
                <div className="answers">
                    <input
                        type="number"
                        id="planetSize"
                        name="planetSize"
                        min="0.1"
                        value={planetSize}
                        onChange={(e) => setPlanetSize(e.target.value)}
                        required
                    />
                </div><br />

                <label htmlFor="atmosphere">3. What is the primary composition of the planet's atmosphere?</label><br />
                <div className="answers">
                    <select
                        id="atmosphere"
                        name="atmosphere"
                        value={atmosphere}
                        onChange={(e) => setAtmosphere(e.target.value)}
                        required
                    >
                        <option value="">Select an option</option>
                        <option value="Oxygen-Nitrogen">Oxygen-Nitrogen (Earth-like)</option>
                        <option value="Carbon Dioxide">Carbon Dioxide (Venus-like)</option>
                        <option value="Methane">Methane</option>
                        <option value="Hydrogen-Helium">Hydrogen-Helium (Gas Giant-like)</option>
                        <option value="None">No Atmosphere</option>
                    </select>
                </div><br />

                <label htmlFor="surfaceTemperature">4. What is the average surface temperature (°C)?</label><br />
                <div className="answers">
                    <input
                        type="number"
                        id="surfaceTemperature"
                        name="surfaceTemperature"
                        value={surfaceTemperature}
                        onChange={(e) => setSurfaceTemperature(e.target.value)}
                        required
                    />
                </div><br />

                <label htmlFor="orbitalPeriod">5. What is the orbital period around its star (in Earth days)?</label><br />
                <div className="answers">
                    <input
                        type="number"
                        id="orbitalPeriod"
                        name="orbitalPeriod"
                        min="1"
                        value={orbitalPeriod}
                        onChange={(e) => setOrbitalPeriod(e.target.value)}
                        required
                    />
                </div><br />

                <label htmlFor="surfaceGravity">6. What is the surface gravity of the planet (in m/s²)?</label><br />
                <div className="answers">
                    <input
                        type="number"
                        id="surfaceGravity"
                        name="surfaceGravity"
                        step="0.1"
                        value={surfaceGravity}
                        onChange={(e) => setSurfaceGravity(e.target.value)}
                        required
                    />
                </div><br />

                <label htmlFor="starType">7. What type of star does your planet orbit?</label><br />
                <div className="answers">
                    <select
                        id="starType"
                        name="starType"
                        value={starType}
                        onChange={(e) => setStarType(e.target.value)}
                        required
                    >
                        <option value="">Select an option</option>
                        <option value="Red Dwarf">Red Dwarf</option>
                        <option value="Yellow Dwarf">Yellow Dwarf (Sun-like)</option>
                        <option value="Blue Giant">Blue Giant</option>
                        <option value="White Dwarf">White Dwarf</option>
                        <option value="Neutron Star">Neutron Star</option>
                    </select>
                </div><br />

                <label htmlFor="starAge">8. What is the age of the host star (in billion years)?</label><br />
                <div className="answers">
                    <input
                        type="number"
                        id="starAge"
                        name="starAge"
                        step="0.1"
                        value={starAge}
                        onChange={(e) => setStarAge(e.target.value)}
                        required
                    />
                </div><br />

                <label htmlFor="magneticField">9. Does the planet have a magnetic field?</label><br />
                <div className="answers">
                    <input
                        type="radio"
                        id="magneticFieldYes"
                        name="magneticField"
                        value="Yes"
                        checked={magneticField === "Yes"}
                        onChange={(e) => setMagneticField(e.target.value)}
                        required
                    />
                    <label htmlFor="magneticFieldYes">Yes</label><br />
                    <input
                        type="radio"
                        id="magneticFieldNo"
                        name="magneticField"
                        value="No"
                        checked={magneticField === "No"}
                        onChange={(e) => setMagneticField(e.target.value)}
                        required
                    />
                    <label htmlFor="magneticFieldNo">No</label><br />
                </div><br />

                <label htmlFor="habitableZone">10. Is the planet within the habitable zone of its star?</label><br />
                <div className="answers">
                    <input
                        type="radio"
                        id="habitableZoneYes"
                        name="habitableZone"
                        value="Yes"
                        checked={habitableZone === "Yes"}
                        onChange={(e) => setHabitableZone(e.target.value)}
                        required
                    />
                    <label htmlFor="habitableZoneYes">Yes</label><br />
                    <input
                        type="radio"
                        id="habitableZoneNo"
                        name="habitableZone"
                        value="No"
                        checked={habitableZone === "No"}
                        onChange={(e) => setHabitableZone(e.target.value)}
                        required
                    />
                    <label htmlFor="habitableZoneNo">No</label><br />
                </div><br />

                <label htmlFor="planetaryFeatures">11. What unique features does your planet have (e.g., rings, moons, water oceans)?</label><br />
                <div className="answers">
                    <textarea
                        id="planetaryFeatures"
                        name="planetaryFeatures"
                        rows="4"
                        value={planetaryFeatures}
                        onChange={(e) => setPlanetaryFeatures(e.target.value)}
                        required
                    ></textarea>
                </div><br />

                <button type="submit" onClick={onSubmitHandler}className="submit-btn">Submit</button>
            </form>

            {isSubmitted && (
                <div className="planet-report">
                    <h2>Planet Report</h2>
                    <pre>{planetInfo}</pre>
                </div>
            )}
        </>
    );
}

export default PlanetForm;
