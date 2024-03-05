const Json = ({data}) => {
  return <pre style={{margin: 20}}>{JSON.stringify(data, null, 2)}</pre>
}

export default Json
