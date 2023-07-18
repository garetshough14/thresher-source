import Service from "./Service";
import AcUnits from "../Images/work-images/ac-units-above.jpg";
import StructuralSteel from "../Images/work-images/work-car.png";
import GeneralContracting from "../Images/work-images/finished-house.jpeg";

export default function Services() {
    return (
        <div className="services-wrapper">
            <div className="services-heading-section">
                <h1 className="services-main-heading">
                    QUALITY WORK WITH ON TIME SERVICE
                </h1>
                <p className="services-paragraph">
                    Elevate Your Indoor Comfort and Control with Premier Services in
                    General Contracting, Structural Steel, and HVAC.
                </p>
            </div>
            <div className="services-images">
                <Service title="HVAC SERVICES" img={AcUnits} />
                <Service title="Structural Steel Work" img={StructuralSteel} />
                <Service title="GENERAL CONTRACTING" img={GeneralContracting} />
            </div>
        </div>
    )
}