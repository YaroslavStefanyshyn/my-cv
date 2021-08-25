let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: 'Hi how are you', likes: '20 likes' },
        { id: 2, message: 'I wont to have a job', likes: '15 likes' }
      ],
      newPostText: 'it-brat'
    },
    messagesPage: {
      dialogsData: [
        { id: 1, name: 'Ivan' },
        { id: 2, name: 'Maksim' },
        { id: 3, name: 'Yaroslav' },
        { id: 4, name: 'Luybomyr' },
        { id: 5, name: 'Olga' },
      ],
      messageData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'Youtube' }
      ]
    }
  },
  _callSubscriber() {
    console.log('state changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likes: '5 likes'
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  }
};
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
  }
};

export default store;