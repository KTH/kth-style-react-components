/**
 * Extension of the i18n module that depends on the server configuration
 * and is therefore not consumable by the server.
 */

const i18n = require('kth-node-i18n')

const messagesEnglish = require('./messages.en')
const messagesSwedish = require('./messages.sv')

i18n.messages = {
  sv: messagesSwedish,
  en: messagesEnglish
}
function getCookie () {
  if (typeof document === 'undefined') {
    return
  }
  var name = 'language='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[ i ]
    while (c.charAt(0) === ' ') c = c.substring(1)
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length)
  }
}

i18n.getMessages = (lang = getCookie() || 'sv' ) => {
  return i18n.messages[lang]
}

module.exports = i18n
