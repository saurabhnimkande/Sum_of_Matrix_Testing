function sum(matrix,m,n) {
    let sum=0;
    for(let r=0;r<m;r++) {
        for(let c=0;c<n;c++) {
            sum=sum+matrix[r][c];
        }
    }
    return sum;
}

module.exports = sum;