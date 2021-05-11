import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import API from '../../services/api'

import SwiperImages from '../components/SwiperImages'
import SwiperReviews from '../components/SwiperReviews'
import MapShow from '../components/MapShow'
import Popup from '../components/Popup'

const Property = props => {
    const [property, setProperty] = useState(null)
    const [open, setOpen] = useState(false)
    const params = useParams()

    const handlePopup = () => {
        if(open)
            setOpen(false)
        else
            setOpen(true)
    }
    useEffect(() => {
        API.read('properties', params.id).then(res => {
            setProperty(res.data.attributes)
        }).catch(err => {
            console.log(err)
        })
    }, [params])

    return (
        <>
        {
            property &&
            <>
            <main className="properties-show">
                <section className="swiper-images">
                    <SwiperImages images={property.images}/>
                </section>
                <div className="container">
                    <section className="property-details">
                        <div className="content">
                            <div className="top half">
                                <p className="normal">{property.title}</p>
                                <p className="large">{property.address}</p>
                            </div>
                            <div className="bottom half">
                                <p className="normal">{property['max-guests']} guests allowed</p>
                                <p className="description">{property.description}</p>
                            </div>
                        </div>
                    </section>

                    <section className="amenities">
                        <h2>Amenities</h2>
                        <div className="amenities-container">
                            {
                                property['has-swimming-pool'] &&
                                <>
                                <div className="amenity swimming-pool">
                                    <p>swimming pool</p>
                                </div>
                                </>
                            }
                            {
                                property['has-hdtv'] &&
                                <>
                                <div className="amenity hdtv">
                                    <p>HDTV</p>
                                </div>
                                </>
                            }
                            {
                                property['has-kitchen'] &&
                                <>
                                <div className="amenity kitchen">
                                    <p>kitchen</p>
                                </div>
                                </>
                            }
                            {
                                property['has-bathtub'] &&
                                <>
                                <div className="amenity bathtub">
                                    <p>bathtub</p>
                                </div>
                                </>
                            }
                            {
                                property['has-beach-nearby'] &&
                                <>
                                <div className="amenity beach">
                                    <p>beach nearby</p>
                                </div>
                                </>
                            }
                            {
                                property['has-beds'] &&
                                <>
                                <div className="amenity beds">
                                    <p>beds</p>
                                </div>
                                </>
                            }
                        </div>
                    </section>

                    <section className="map">
                        <MapShow property={property} />
                    </section>
                </div>

                <section className="reviews">
                    <div className="title">
                        <h2>Reviews</h2>
                        <div className="average-rating">
                            <p>{property['average-rating']} stars ({property.reviews.length} reviews)</p>
                        </div>
                    </div>
                    <SwiperReviews reviews={property.reviews}/>
                </section>

                <section className="make-a-reservation mobile">
                    <button onClick={() => handlePopup()} className="red button"><span>Make a reservation</span></button>
                </section>
            </main>
        <Popup makeAReservation open={open} closePopup={handlePopup} bookings={property.bookings}/>
        </>
        }

    </>
    )
}

export default Property