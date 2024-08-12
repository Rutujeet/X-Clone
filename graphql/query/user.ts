import {graphql} from "../../gql";

export const verifyUserGoogleTokenQuery = graphql(`#graphql
    query verifyUserGoogleTokenQuery($token: String!) {
        verifyGoogleToken(token: $token)
    }
`)

export const getCurrentUserQuery = graphql(`
query GetCurrentUser {
    getCurrentUser {
        id
        profileImageUrl
        email
        firstName
        lastName
    }
}


`)