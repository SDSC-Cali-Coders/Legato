
export async function getUserNotifications(id){
  /**
   * Get all the notifications currently stored on the database associated
   * with a particular user.Refer to specs/"Data Models"/DesignNotes.md for more
   * info on the notification data model.
   * @param  {string} id - id of user who's notification you want to get
   * @return {Array notificationObj} - Array of notification objects. 
   */
  try {
    let call = '/notification/' + id
    const response = await fetch(call);
    return await response.json();
  }catch(error) {
    throw error;
  }
}