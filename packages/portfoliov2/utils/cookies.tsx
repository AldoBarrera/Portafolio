import Banner from 'components/PrivacyPolicy/Banner'

export const setCookie = (key: string, value: string, expiration?: string) => {
  if (typeof window !== 'undefined') {
    const exp = expiration ? `expires=${expiration};` : ''
    document.cookie = `${key}=${value}; ${exp}`
  }
}

const generateUserId = () => {
  return 'user_' + Math.random().toString(36).substr(2, 9)
}

export const setUniqueUserId = (key = 'user_id') => {
  if (typeof window !== 'undefined') {
    let userId = getCookie('user_id')
    if (!userId) {
      userId = generateUserId()
      document.cookie = `${key}=${userId};`
    }
    return userId
  }
}

const getCookie = (key: string) => {
  if (typeof window !== 'undefined') {
    return document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${key}=`))
      ?.split('=')[1]
  }
}

export const setCookieExpiration = (months: number) => {
  const now = new Date()
  now.setMonth(now.getMonth() + months)
  return new Date(now).toUTCString()
}

const isCookieExpired = (exp: string) => {
  return new Date() > new Date(exp)
}

const removeCookie = (key: string) => {
  if (typeof window !== 'undefined') {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`
  }
}

export const renderPolicyBanner = () => {
  if (typeof window !== 'undefined') {
    const userConsent = getCookie('acceptedPolicy')
    const cookiExp = getCookie('acceptedPolicyExp')
    if (isCookieExpired(cookiExp)) {
      removeCookie('acceptedPolicy')
      removeCookie('acceptedPolicyExp')
      return <Banner />
    } else {
      return userConsent !== 'true' && <Banner />
    }
  } else {
    return <></>
  }
}
