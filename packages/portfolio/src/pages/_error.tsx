import Error404 from 'pages/404'
const Error = ({ statusCode }) => {
  if (statusCode === 404) {
    return <Error404 />
  }
  return <div>error 404</div>
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
