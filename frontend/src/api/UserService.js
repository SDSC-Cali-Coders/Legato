import axios from 'axios';

export async function getUserNotifications(id){
  /**
   * Get all the notifications currently stored on the database associated
   * with a particular user. Refer to specs/"Data Models"/DesignNotes.md for more
   * info on the notification data model.
   * @param  {string} id - id of user who's notification you want to get
   * @return {Array notificationObj} - Array of notification objects. 
   */
  try {
    let call = '/notification/' + id;
    const response = await fetch(call);
    return await response.json();
  }catch(error) {
    return error;
  }
}

export async function changeUserVisibility(visibility, userId){
  /**
   * change the visibility of a given user
   * @param {string} userId - id of whose visibility will be changed
   * @param {bool} visibility - whether the account with the associated user id is private or not
   * @return {acknowledgedObj} - object used to determine if api call was acknowledged
   */
  let b = {
    id: userId,
    visible: visibility
  }
  //console.log(b.visible)
  const response = await fetch('/visibility', {
    method: 'PATCH',
    body: JSON.stringify(b)
  })
  const data = await response.json();
  return data;
}

export async function deleteUserNotification(objId){
  /**
   * delete a notification on the database using the notifications object id
   * created by mongodb
   * @param {string} objId - mongodb generated id for notification object
   * @return {bool} - whether or not deletion was acknowledged
   * @return {int} - number of deletions made
   */
  let call = 'notification/delete/' + objId;
  const response = await fetch(call, {
    method: 'DELETE'
  });
  return await response.json();
}

export async function addUserNotification(notification){
  /**
   * add a notification object to the database. For more info on the notification
   * object data model, refer to specs/"Data Models"/DesignNotes.md
   * @param {notificationObj} notification - notification object to add to db
   * @return {bool} - whether or not deletion was acknowledged
   * @return {int} - number of deletions made
   */
  const response = await fetch('/notification/add', {
    method: 'PUT',
    body: JSON.stringify(notification)
  });
  const data = await response.json();
  return data;
}

export async function requestFollow(followId, userId){
  /**
   * send a follow request to the user with followId in the form of a notification
   * @param {string} followId - id of user receiving the follow request
   * @param {string} userId - id of the current user sending the follow request to followId
   * @return {acknowledgedObj} - object used to determine if api call was acknowledged
   */
  let b = {
    userId: userId
  }
  const response = await fetch('/requestFollow/' + followId, {
    method: 'PUT',
    body: JSON.stringify(b)
  });
  const data = await response.json();
  return data;
}

export async function followUser(followId, userId){
  /**
   * add friend to users following list, and add user to friends followers list
   * @param {string} followId - id of friend to be followed by user
   * @param {string} userId - id of user sending follow
   * @return {acknowledgedObj} - refer to recieve section of respective api 
   * documentation
   */
  let b = {
    userId: userId
  }
  const response = await fetch('/follow/' + followId, {
    method: 'PUT',
    body: JSON.stringify(b)
  });
  const data = await response.json();
  return data;
}

export async function unfollowUser(followId, userId){
  /**
   * remove friend from users following list, and remove user to friends
   * followers list
   * @param {string} followId - id of friend to be unfollowed by user
   * @param {string} userId - id of user sending unfollow
   * @return {acknowledgedObj} - refer to recieve section of respective api 
   * documentation
   */
  let b = {
    followId: followId,
    userId: userId
  }
  const response = await fetch('/unfollow', {
    method: 'DELETE',
    body: JSON.stringify(b)
  });
  const data = response.json();
  return data;
}
