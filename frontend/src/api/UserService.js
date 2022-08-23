
export async function getUserNotifications(id){
  /**
   * Get all the notifications currently stored on the database associated
   * with a particular user. Refer to specs/"Data Models"/DesignNotes.md for more
   * info on the notification data model.
   * @param  {string} id - id of user who's notification you want to get
   * @return {Array notificationObj} - Array of notification objects. 
   */
  const response = await fetch('/notification/' + id);
  return await response;
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
  return await response.json()
}
