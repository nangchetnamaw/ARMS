const controller = require('../controllers');
module.exports=(app) =>
{ 
    //Employee
    app.post('/api/employee', controller.employee.save);
    app.get('/api/employee/:id', controller.employee.get);
    app.get("/api/employees", (req, res)=>controller.employee.getAll(req, res));
    app.get("/api/employeeBySearch/:searchBy", (req, res)=>controller.employee.searchRecord(req, res));
    app.patch('/api/employee/:id', controller.employee.modify);
    app.delete('/api/employee/:id', controller.employee.remove);
    
    // Sample get route
    // app.get('/login', controller.);


    app.post('/api/interview', controller.interview.createInterview);
    app.patch('/api/interview/:id', controller.interview.updateInterview);
    app.delete('/api/interview/:id', controller.interview.deleteInterview);
    app.get('/api/interview/:id', controller.interview.getInterview);
}
