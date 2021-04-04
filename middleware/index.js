export function quizRedirect({ route, redirect }) {
  if (route.fullPath === '/quiz/' || route.fullPath === '/quiz') {
    return redirect('/quiz/subject/')
  } else if (route.fullPath === '/ru/quiz/' || route.fullPath === '/ru/quiz') {
    return redirect('/ru/quiz/subject/')
  } else if (route.fullPath === '/uz/quiz/' || route.fullPath === '/uz/quiz') {
    return redirect('/uz/quiz/subject/')
  }
}

export function instructorPageRedirect({ route, redirect }) {
  if (
    route.fullPath === '/instructor-page/' ||
    route.fullPath === '/instructor-page'
  ) {
    return redirect('/instructor-page/courses')
  } else if (
    route.fullPath === '/ru/instructor-page/' ||
    route.fullPath === '/ru/instructor-page'
  ) {
    return redirect('/ru/instructor-page/courses')
  } else if (
    route.fullPath === '/uz/instructor-page/' ||
    route.fullPath === '/uz/instructor-page'
  ) {
    return redirect('/uz/instructor-page/courses')
  }
}

export function instructorToolsRedirect({ route, redirect }) {
  if (
    route.fullPath === '/instructor-page/tools/' ||
    route.fullPath === '/instructor-page/tools'
  ) {
    return redirect('/instructor-page/tools/profile')
  } else if (
    route.fullPath === '/ru/instructor-page/tools/' ||
    route.fullPath === '/ru/instructor-page/tools'
  ) {
    return redirect('/ru/instructor-page/tools/profile')
  } else if (
    route.fullPath === '/uz/instructor-page/tools/' ||
    route.fullPath === '/uz/instructor-page/tools'
  ) {
    return redirect('/uz/instructor-page/tools/profile')
  }
}

export function pricingPage({ route, redirect }) {
  if (route.fullPath === '/pricing' || route.fullPath === '/pricing/') {
    return redirect('/')
  } else if (
    route.fullPath === '/ru/pricing' ||
    route.fullPath === '/ru/pricing/'
  ) {
    return redirect('/ru')
  } else if (
    route.fullPath === '/uz/pricing' ||
    route.fullPath === '/uz/pricing/'
  ) {
    return redirect('/uz')
  }
}

export function userProfile({ route, redirect }) {
  if (route.fullPath === '/userprofile' || route.fullPath === '/userprofile/') {
    return redirect('/userprofile/profile')
  } else if (
    route.fullPath === '/ru/userprofile' ||
    route.fullPath === '/ru/userprofile/'
  ) {
    return redirect('/ru/userprofile/profile')
  } else if (
    route.fullPath === '/uz/userprofile' ||
    route.fullPath === '/uz/userprofile/'
  ) {
    return redirect('/uz/userprofile/profile')
  }
}
