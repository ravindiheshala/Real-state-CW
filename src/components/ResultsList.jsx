import './resultsList.css'

function ResultList({ properties }) {

  console.log("im in Result List (data)",properties.properties)

  return (
  <>
    
      <div className="results-List">
      { properties.properties.map((property) => (
        <div key={property.id} className="property-card">
          <div>
          <div>{property.id}</div>
          <div>{property.name}</div>
          <div>{property.location}</div>
          <div>{property.type}</div>
          <img src={property.picture} alt={property.type}/>
          <div>{property.bedrooms}</div>
          <div>RS. {property.price}</div>
          <div>{property.tenure}</div>
          <div>{property.description}</div>
        </div>
      </div>
      ))}
    </div>
  </>
  )
}

export default ResultList