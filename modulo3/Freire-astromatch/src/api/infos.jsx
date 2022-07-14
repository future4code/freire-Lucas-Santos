export const getProfileToChoose = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"

export const getMatches = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches"

export const postChoice = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person"

export const putClearMatchs = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear"

export const headers = {
    headers: {
        "Content-Type": "application/json"
    }
}