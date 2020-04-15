const formatData = (data) => {
    let { EMPNO, ENAME, JOB, SAL, COMM, DEPTNO } = data;
    return [ EMPNO, ENAME, JOB, SAL, COMM, DEPTNO ];
}

const formatEmployee = (metaData, rows) => {
    let employees = new Map();
    console.log(metaData);
    console.log(rows);

    for (let i = 0; i < metaData.length; i++) {
        let j = i;
        while(j< i)
        Object.assign(metaData[i].name);
    }
    return employees;
}

module.exports = {formatData};
module.exports = {formatEmployee};