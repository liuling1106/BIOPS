
import Cookies from 'js-cookie'

export function getAlertCounts() {
  const alertCount = Cookies.get('alert_count')
  if (alertCount) return alertCount

  return 0
}
