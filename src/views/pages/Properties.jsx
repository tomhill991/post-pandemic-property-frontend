import {useState, useEffect} from 'react'
import MapIndex from '../components/MapIndex'
import API from '../../services/api'

const Properties = props => {
    const [properties, setProperties] = useState([])

    useEffect(() => {
        API.list('properties').then(res => {
            console.log(res.data)
            setProperties(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <main className="properties">
            <section className="map">
                <MapIndex properties={properties}/>
            </section>
        </main>
    )
}

export default Properties