import React, { useState } from 'react';
import './Info.css';

const Info = () => {
    const [starType, setStarType] = useState('Sun-like');

    const handleStarTypeChange = (event) => {
        setStarType(event.target.value);
    };

    const renderHabitableZone = () => {
        switch (starType) {
            case 'Red Dwarf':
                return 'The habitable zone is extremely close to the star, usually between 0.02 AU to 0.05 AU. Planets here may experience tidal locking, leading to one side always facing the star (extremely hot) and the other in perpetual darkness (extremely cold). Advanced atmospheric models suggest that with a thick enough atmosphere, heat can be distributed, potentially making such planets habitable.';
            case 'Sun-like':
                return 'The habitable zone for Sun-like stars extends from about 0.95 AU to 1.37 AU. Earth sits comfortably within this range at 1 AU. The atmosphere, magnetic field, geological activity, and the presence of water further influence the habitability of planets in this zone.';
            case 'Blue Giant':
                return 'The habitable zone of a blue giant is located far from the star, spanning distances of 5 AU to 10 AU or more. However, blue giants have relatively short lifespans (a few million years), which might not provide sufficient time for life to develop and evolve on orbiting planets. The intense radiation also poses a challenge to maintaining a stable atmosphere.';
            default:
                return '';
        }
    };

    return (
        <div className="info-container">
            <section id="goldilocks-zone" className="section">
                <h2>The Goldilocks Zone</h2>
                <p>
                    The Goldilocks Zone, or habitable zone (HZ), is the region around a star where the temperature conditions are "just right" for liquid water to exist on a planet's surface. This region is crucial in the search for potentially habitable exoplanets, as water is considered a key requirement for life. The position and width of the habitable zone vary with the star's luminosity and temperature.
                </p>
                <h3>Characteristics of the Habitable Zone</h3>
                <p>
                    The nature of a star heavily influences its habitable zone. For instance:
                    <ul>
                        <li>
                            **Red Dwarfs**: These small, cool stars have a narrow and close habitable zone. Due to their long lifespans (potentially trillions of years), they are interesting targets for finding habitable planets. However, planets in this zone often face strong stellar flares and radiation, which can strip away atmospheres if not protected by a magnetic field.
                        </li>
                        <li>
                            **Sun-like Stars**: The habitable zone is moderately distant and wide. Earth lies in the Sun’s habitable zone, benefiting from a stable atmosphere and a magnetic field that shields it from harmful solar winds.
                        </li>
                        <li>
                            **Blue Giants**: Blue giants have a wide and far-reaching habitable zone but pose challenges due to their short lifespans and high radiation. Their intense heat can quickly strip planets of their atmospheres, especially if the planets lack a magnetic field.
                        </li>
                    </ul>
                </p>
                <h3>Challenges and Considerations</h3>
                <p>
                    Merely existing in the habitable zone does not guarantee a planet's habitability. Key factors include:
                    <ul>
                        <li>
                            **Atmospheric Composition**: A planet must have a suitable atmosphere with greenhouse gases (like CO₂) to regulate surface temperatures.
                        </li>
                        <li>
                            **Magnetic Field**: Protects the planet’s atmosphere from stellar wind erosion.
                        </li>
                        <li>
                            **Tidal Locking**: In close-orbiting planets (common around red dwarfs), one side may face the star constantly, causing extreme temperature differences. An atmosphere capable of heat distribution can potentially make such worlds habitable.
                        </li>
                    </ul>
                </p>
                <h3>Explore the Habitable Zone</h3>
                <div className="interactive-diagram">
                    <label htmlFor="star-type">Select Star Type: </label>
                    <select id="star-type" value={starType} onChange={handleStarTypeChange}>
                        <option value="Red Dwarf">Red Dwarf</option>
                        <option value="Sun-like">Sun-like</option>
                        <option value="Blue Giant">Blue Giant</option>
                    </select>
                    <p>{renderHabitableZone()}</p>
                </div>
            </section>

            <section id="planetary-formation" className="section">
                <h2>Planetary Formation</h2>
                <p>
                    Planets form in the protoplanetary disk of gas and dust surrounding a young star. The formation process is intricate, involving physical and chemical processes that span millions of years. Here’s an in-depth look at the stages of planetary formation:
                </p>
                <h3>1. Accretion of Dust and Planetesimal Formation</h3>
                <p>
                    Within the protoplanetary disk, dust grains collide and stick together through electrostatic forces, forming small clumps. Over time, these clumps grow larger through continuous collisions, eventually forming kilometer-sized bodies known as planetesimals. The process is influenced by:
                    <ul>
                        <li>
                            **Temperature Gradient**: In the inner regions of the disk, only rocky materials can withstand the heat, leading to the formation of rocky planets. In the outer, colder regions, ices can condense, allowing gas and ice giants to form.
                        </li>
                        <li>
                            **Gravitational Interactions**: As planetesimals grow, their gravity affects the motion of surrounding material, increasing the likelihood of further collisions and accretion.
                        </li>
                    </ul>
                </p>
                <h3>2. Formation of Protoplanets</h3>
                <p>
                    As planetesimals grow, they attract more mass through gravitational accretion, forming protoplanets. This phase, known as "runaway accretion," involves the rapid accumulation of material, resulting in a diverse array of planetary bodies:
                    <ul>
                        <li>
                            **Rocky Planets**: Form close to the star, where temperatures are too high for volatile compounds like water to condense.
                        </li>
                        <li>
                            **Gas Giants**: Form beyond the "frost line," where ices can accumulate. They quickly amass thick atmospheres of hydrogen and helium.
                        </li>
                        <li>
                            **Ice Giants**: Similar to gas giants but form farther out, acquiring more ices and less gas.
                        </li>
                    </ul>
                </p>
                <h3>3. Disk Clearing and Planetary Migration</h3>
                <p>
                    As the young star matures, its solar winds clear the remaining gas and dust in the disk. During this phase, gravitational interactions between protoplanets can cause significant migrations, altering the final architecture of the planetary system. For example:
                    <ul>
                        <li>
                            **Hot Jupiters**: Gas giants that migrated inward to orbit very close to their stars.
                        </li>
                        <li>
                            **Orbital Resonances**: Planets can settle into stable configurations where their orbital periods are simple ratios (e.g., 2:1, 3:2), contributing to system stability.
                        </li>
                    </ul>
                </p>
                <h3>4. Differentiation and Geological Activity</h3>
                <p>
                    After their formation, planets undergo internal differentiation, where heavier materials (like iron) sink to form a core, while lighter materials form the mantle and crust. This geological activity is crucial for:
                    <ul>
                        <li>
                            **Magnetic Field Generation**: A molten iron core can generate a magnetic field through the dynamo effect, protecting the planet's atmosphere from stellar winds.
                        </li>
                        <li>
                            **Surface Conditions**: Plate tectonics and volcanism recycle materials and shape the planet's surface, influencing atmospheric composition and climate.
                        </li>
                    </ul>
                </p>
            </section>

            <section id="gravitational-effects" className="section">
                <h2>Gravitational Effects</h2>
                <h3>1. Gravitational Microlensing</h3>
                <p>
                    Gravitational microlensing occurs when the gravitational
                    Gravitational microlensing is particularly valuable because it can detect:
                    <ul>
                        <li>
                            **Distant Planets**: Unlike other methods, microlensing can detect planets located far from their stars or in other galaxies.
                        </li>
                        <li>
                            **Rogue Planets**: Free-floating planets that do not orbit any star. These rogue planets were likely ejected from their original planetary systems.
                        </li>
                    </ul>
                    Although microlensing events are rare and short-lived, they provide a unique window into a wide variety of planetary systems that other methods, like the transit or radial velocity techniques, cannot easily detect.
                </p>

                <h3>2. Tidal Locking</h3>
                <p>
                    Tidal locking is a gravitational phenomenon where a planet's rotational period matches its orbital period around its host star. This results in one hemisphere of the planet always facing the star (experiencing constant daylight) while the other side remains in perpetual darkness. The Moon, for instance, is tidally locked to Earth, always showing the same face.

                    Tidal locking has significant implications for habitability, especially for planets orbiting close to their stars, such as those in the habitable zones of red dwarfs:
                    <ul>
                        <li>
                            **Extreme Temperature Differences**: One side of the planet may become scorching hot, while the dark side could be freezing. However, if the planet has a thick atmosphere, it might redistribute heat through atmospheric circulation, potentially creating a "twilight zone" with moderate temperatures.
                        </li>
                        <li>
                            **Stellar Radiation**: The day side of a tidally locked planet could be bombarded with high levels of stellar radiation, especially around active red dwarfs. This might strip away the atmosphere if the planet lacks a magnetic field.
                        </li>
                    </ul>
                    While tidal locking presents challenges for habitability, the presence of an atmosphere capable of heat distribution can mitigate some of the adverse effects, making such planets intriguing targets for further study.
                </p>

                <h3>3. Orbital Resonances and System Stability</h3>
                <p>
                    In multi-planet systems, planets can enter orbital resonances where their orbital periods are simple ratios of each other (e.g., 2:1, 3:2). This gravitational interaction can either stabilize the system or lead to chaotic changes in orbital parameters over time. A prime example is the TRAPPIST-1 system, where several of its seven Earth-sized planets are in orbital resonance.

                    Resonances play a crucial role in:
                    <ul>
                        <li>
                            **Long-Term Stability**: Resonant orbits can lock planets into stable configurations, preventing close encounters that could lead to collisions or ejections from the system.
                        </li>
                        <li>
                            **Tidal Heating**: In tightly packed systems, gravitational interactions between resonant planets can induce internal friction and heating, potentially maintaining subsurface oceans on icy moons or planets, as is theorized for Europa and Enceladus in our Solar System.
                        </li>
                    </ul>
                    Understanding these gravitational effects is key to assessing the long-term habitability of exoplanets and their potential to host life. For example, orbital resonances may help maintain liquid water on certain moons and planets, even if they are outside the conventional habitable zone.
                </p>
            </section>
        </div>
    )
}   
export default Info