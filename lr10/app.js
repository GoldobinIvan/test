/**
 * Типы данных
 */
// let myNumber: number;
var Status;
(function(Status) {
    Status[Status["admin"] = 10] = "admin";
    Status[Status["moderator"] = 100] = "moderator";
    Status[Status["user"] = 1000] = "user";
})(Status || (Status = {}));
Status.admin;
Status.moderator;