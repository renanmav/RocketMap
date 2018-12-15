/**
 * Types
 */
export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
};

/**
 * Reducers
 */
const INITIAL_STATE = [];

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return [
        ...state,
        {
          login: 'renanmav',
          id: 43140758,
          node_id: 'MDQ6VXNlcjQzMTQwNzU4',
          avatar_url: 'https://avatars0.githubusercontent.com/u/43140758?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/renanmav',
          html_url: 'https://github.com/renanmav',
          followers_url: 'https://api.github.com/users/renanmav/followers',
          following_url: 'https://api.github.com/users/renanmav/following{/other_user}',
          gists_url: 'https://api.github.com/users/renanmav/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/renanmav/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/renanmav/subscriptions',
          organizations_url: 'https://api.github.com/users/renanmav/orgs',
          repos_url: 'https://api.github.com/users/renanmav/repos',
          events_url: 'https://api.github.com/users/renanmav/events{/privacy}',
          received_events_url: 'https://api.github.com/users/renanmav/received_events',
          type: 'User',
          site_admin: false,
          name: 'Renan Machado',
          company: null,
          blog: '',
          location: 'Palmas, Tocantins',
          email: null,
          hireable: null,
          bio: 'Atualmente trabalhando com NodeJS, ReactJS e React Native.',
          public_repos: 7,
          public_gists: 0,
          followers: 0,
          following: 0,
          created_at: '2018-09-10T13:24:25Z',
          updated_at: '2018-11-24T12:13:23Z',
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        },
      ];
    case Types.ADD_SUCCESS:
      return state;
    case Types.ADD_FAILURE:
      return state;
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  /** addUserRequest: user => ({
    type: Types.ADD_REQUEST,
    payload: { user },
  }), */

  addUserRequest: (latitude, longitude) => ({
    type: Types.ADD_REQUEST,
    payload: { latitude, longitude },
  }),

  addUserSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addUserFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
