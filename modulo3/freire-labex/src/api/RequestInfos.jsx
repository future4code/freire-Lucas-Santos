export const UrlGetTrips = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:lucas-monteiro-freire/trips"
export const UrlPostLogin = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:lucas-monteiro-freire/login"
export const Header = {
  "Content-Type": "application/json",
  auth: localStorage.getItem("token")
}