import { gql } from "@apollo/client";

export const GET_RECPTA_SCORE = gql`
query recaptcha($token:String!){
    recaptcha(token:$token)
}




`;
