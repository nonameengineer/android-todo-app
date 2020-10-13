const Utils = {
  // --------------------------------
  //  Parse a url and break it into resource, id and verb
  // --------------------------------
  parseRequestURL: () => {
    let url = location.pathname.slice(1).toLowerCase() || '/'
    let r = url.split('/') || url
    let request = {
      resource: null,
      id: null,
      verb: null,
    }
    request.resource = r[0];
    request.id = r[2];
    request.verb = r[3];

    return request
  }

  // --------------------------------
  //  Simple sleep implementation
  // --------------------------------
  , sleep: (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  },
}

export default Utils
