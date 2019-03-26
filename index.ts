    enum week{ // 枚举类型 
          sun = 100,mon,tue,wed,thu,fri,sat  
    }
    let day:week;
    day = week.sun
    const strDay:string = week[day];
    console.log(day);
    console.log(strDay)
