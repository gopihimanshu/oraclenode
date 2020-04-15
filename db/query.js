const query = {
    GET_EMPLOYEE_DATA: `SELECT * FROM himanshu.employee`,
    CREATE_NEW_EMPLOYEE: `INSERT INTO himanshu.employee values ( :EMPNO, :ENAME, :JOB, :SAL, :COMM, :DEPTNO )`
};

module.exports = query;