
import Cookies from 'js-cookie'

export function getAlertCounts() {
  const alertCount = Cookies.get('alertsCount') || 0
  if (alertCount) return alertCount
}

