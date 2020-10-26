import apiBaseUrl from '@/static/js/constants'

export default function ({$axios}) {
  $axios.setBaseURL(apiBaseUrl)
}
