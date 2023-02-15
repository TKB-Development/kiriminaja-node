const Auth = {
  bearerAuthHeader(key) {
    return `Bearer ${key}`;
  },

  authWithBasicHeader(accessToken, contentType) {
    return {
      'Content-Type': contentType,
      'Authorization': Auth.bearerAuthHeader(accessToken),
    };
  }
}

module.exports = Auth;