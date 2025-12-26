import './resultList.css'

function ResultList({ properties }) {

  console.log("im in Result List (data)",properties.properties)

  return (
    <>
    <div>
      { properties.properties.map((property) => (
        <div key={property.id} className="property-card">
          <div>{property.id}</div>
          <div>{property.name}</div>
          <div>{property.location}</div>
          <div>{property.type}</div>
        </div>
      ))}
    </div>
    
    </>
  )
}

export default ResultList