import Button from "../../Common/Buttons/Button"

const serviceData = [
    {
        id: crypto.randomUUID(),
        icon: "bi bi-headset",
        service: "Immediate Support",
        description: "Quick response times for urgent staffing needs",
    },
    {
        id: crypto.randomUUID(),
        icon: "bi bi-shield-check",
        service: "End to End IT Services",
        description: "Complete staffing and consulting solutions",
        btn: "Apply Now",
    },
    {
        id: crypto.randomUUID(),
        icon: "bi bi-globe-americas",
        service: "Worldwide Operations",
        description: "Global presence across 5 key markets",
        btn: "Join Now",
    },
    {
        id: crypto.randomUUID(),
        icon: "bi bi-person-check",
        service: "Certified Technology Experts",
        description: "Highly qualified professionals with proven expertise",
        btn: "Explore Our Services",
    },

]
const Service = () => {
    return (
        <section className="py-5">
            <div className='container'>
                <div className='row g-3'>

                    {serviceData.map(({ id, service, description, icon }) => (
                        <div className='col-12 col-lg-6 col-xl-3 ' key={id}>
                            <div className='card h-100 shadow-sm' >
                                <div className='card-body text-center'>
                                    <div className='card-icon mb-4'>
                                        <i className={`display-4 ${icon}`}></i>
                                    </div>
                                    <h3 className='sub-heading mb-3 fw-semibold font-trenda'>{service}</h3>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    )
}

export default Service