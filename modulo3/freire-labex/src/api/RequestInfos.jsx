export const UrlGetCountries = "https://servicodados.ibge.gov.br/api/v1/paises/{paises}";

export const UrlGetTrips = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:lucas-monteiro-freire/trips"
export const UrlPostLogin = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:lucas-monteiro-freire/login"
export const UrlApplyToTrip = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:lucas-monteiro-freire/trips/:${window.localStorage.getItem("tripId")}/apply`
export const UrlDeleteTrip = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:lucas-monteiro-freire/trips/:${window.localStorage.getItem("tripId")}`
export const UrlGetTripDetails = (id) => {
  return `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:lucas-monteiro-freire/trip/${id}`
}

export const UrlPutDecideCandidate = (tripId, candidateId) => {
  return `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:lucas-monteiro-freire/trips/${tripId}/candidates/${candidateId}/decide`
}

export const UrlPostCreateTrip = (trip) => {
  return `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips`
}

export const Header = {
  "Content-Type": "application/json",
  auth: window.localStorage.getItem("token")
}