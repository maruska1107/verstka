export default function userService() {
  const get = async () => {
    const userResponse = await fetch('http://127.0.0.1:8000/users/get_user/');

    console.log('response', userResponse);

    const userData = await userResponse.json();
    return userData?.id || 0;
  };

  return { getUser: get };
}
