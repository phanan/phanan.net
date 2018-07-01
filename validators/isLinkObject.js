import config from '~/phanan.config'

export default function (value) {
  return value.hasOwnProperty('name') &&
    typeof value.name === 'string' &&
    value.name.trim() !== '' &&
    value.hasOwnProperty('url') &&
    config.URL_REGEX.test(value.url)
}
