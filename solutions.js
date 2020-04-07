const solutions = (function() {

    const asciiParameter = 'text';
    const asciiSolution = [1, 1, 6, 1, 0, 1, 1, 2, 0, 1, 1, 6];

    const chunkParameter = asciiSolution;
    const chunkSolution = [ [1, 1, 6, 1, 0, 1, 1, 2, 0, 1],
    [1, 6] ];

    const fillParameter = chunkSolution;
    const fillSolution  = [[1, 1, 6, 1, 0, 1, 1, 2, 0, 1],
    [1, 6, 0, 1, 2, 3, 4, 5, 6, 7]];

    const addUpParameter = fillSolution;
    const addUpSolution = [[2, 7, 6, 2, 2, 4, 5, 7, 6, 8]];

    const hashArrayParameter = addUpSolution;
    const hashArraySolution = 'd0b3cb0cc9100ef243a1023b2a129d15c28489e387d3f8b687a7299afb4b5079';



    return {
        asciiParameter,
        asciiSolution,
        chunkParameter,
        chunkSolution,
        fillParameter,
        fillSolution,
        addUpParameter,
        addUpSolution,
        hashArrayParameter,
        hashArraySolution

}
}());

module.exports = solutions;