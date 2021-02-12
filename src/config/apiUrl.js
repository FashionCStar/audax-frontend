const env = process.env.NODE_ENV;
let apiOriginUrl = '';

switch (env) {
  case 'production':
    apiOriginUrl = 'https://api-blueadmin.mixcarehealth.com';
    break;
  case 'testing':
    apiOriginUrl = 'http://localhost:3000';
    break;
  default:
    apiOriginUrl = 'http://localhost:3000';
    break;
}

const apiUrl = {
  // Register
  REGISTER: `${apiOriginUrl}/users/register`,

  //Session
  SIGNIN: `${apiOriginUrl}/users/login`,
  SIGNOUT: `${apiOriginUrl}/users/logout`,
  VERIFY_TOKEN: `${apiOriginUrl}/api/verify_token`,

  //Record
  RECORDS: `${apiOriginUrl}/api/records`,
  ADD_RECORDS: `${apiOriginUrl}/api/add_records`,
  EMEDICAL_CARD_IMAGES: `${apiOriginUrl}/emedical_card_images/`,
  SEND_MEDICAL_CARD_CONFIRMATION_EMAIL: `${apiOriginUrl}/api/send_confirmation_email/`,
  DELETE_RECORDS: `${apiOriginUrl}/api/delete_records/`,

  //Membership
  MEMBERSHIPS: `${apiOriginUrl}/api/memberships`,
};

export default apiUrl;

