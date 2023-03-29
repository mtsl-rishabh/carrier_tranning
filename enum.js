"use strict";
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Customer"] = 2] = "Customer";
    Role[Role["Worker"] = 3] = "Worker";
})(Role || (Role = {}));
console.log(Role);
