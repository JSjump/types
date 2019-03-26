var week;
(function (week) {
    week[week["sun"] = 100] = "sun";
    week[week["mon"] = 101] = "mon";
    week[week["tue"] = 102] = "tue";
    week[week["wed"] = 103] = "wed";
    week[week["thu"] = 104] = "thu";
    week[week["fri"] = 105] = "fri";
    week[week["sat"] = 106] = "sat";
})(week || (week = {}));
var day;
day = week.sun;
var strDay = week[day];
console.log(day);
console.log(strDay);
