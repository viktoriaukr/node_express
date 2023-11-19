# Buggy app issues

In the process of reviewing given application I identified several issues:

1. **Verifying token in auth.js**: Considering given hint I review function authUser in auth.js where I saw that instead of verifying given token it used decoding method for creating token. This issue can be fixed by replacing:
   `let payload = jwt.decode(token);` with:
   `let payload = jwt.verify(token, SECRET_KEY);`.
   I provided fixed in file middleware/auth.js and commented it out below originally provided code.
   I created auth.test.js file where I showed using test that jwt.decode() method is not able to verify token properly.

2. **Missing await for login route**: Login route is missing await method, which can lead to issues with using application because in the process it would not wait for authentication process to finish, it would just move to next step.
   In correct scenario if await is being used and information for login route is incorrect, it would return 401 error code or 500 error code if data is missing, in our case, where we don't have `await`, information about user is not being checked properly and error is not being raised, instead we receive 200 status code.

3. **Missing await for delete route**: Delete route is missing await method as well, which can lead to issues with using application because in the process it would not wait to verify if correct user is being deleted.
   In correct scenario if await is being used and information for delete route is incorrect, it would return 404 error code, in our case, where we don't have `await`, information about user is not being checked properly and 404 error is not being raised.

4. **Patch route** : Patch route should allow to update information not only for admin but for right users as well.
