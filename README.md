
We CRUD with laravel Apllication.
So At first We should done some configuration in laravel application.
Without we cannot get or post data with laravel application.
CORS permission should be completed first for get data from laravel Project.


This Link shoud be solve some problem.

## CORS Permission:

https://www.mynotepaper.com/easiest-way-to-allow-cors-in-laravel
Go to bootstrap folder and open app.php file. Then just add these lines at the top of the file:

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');
In the project directory, you can run:

### `CSRF middleware configuration`

VerifyCsrfToken Middleware:
</br>
    protected $except = [
        'route/*',
    ];
    
## Laravel Project Link 
https://github.com/monsur22/Laravel-React-Api-CRUD
## This link also for help Crud Operation


https://www.positronx.io/react-mern-stack-crud-app-tutorial/

