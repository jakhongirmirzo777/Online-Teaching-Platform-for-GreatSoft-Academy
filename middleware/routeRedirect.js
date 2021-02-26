export default function ({ route, redirect }) {
  if (route.fullPath === '/useraccount/mylearning') {
    return redirect('/useraccount/mylearning/category')
  }
}
