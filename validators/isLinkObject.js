import config from '~/phanan.config'

export default function (value) {
  return value.hasOwnProperty('name') &&
    value.hasOwnProperty('url') &&
    config.URL_REGEX.test(value.url)
}
