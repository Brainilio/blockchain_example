let expect = require("chai").expect;
let blockhain = require('./../blockchain');
let solutions = require('./../solutions');

describe('Array', function() {
    describe("String to ASCII and split individual digits", function () {
        it('should convert string to ASCII', function () {
            expect(blockhain.stringtoASCII(solutions.asciiParameter)).to.deep.equal(solutions.asciiSolution);
        })
    });
    describe('Chunk Array', function () {
        it('Should chunk arrays into equal 10s', function () {
            expect(blockhain.chunkArray(solutions.chunkParameter)).to.deep.equal(solutions.chunkSolution);
        })
    });
    describe('Fill it to 10', function () {
        it('Fill array with additional numbers when they do not meet 10 length', function () {
            expect(blockhain.fillArray(solutions.fillParameter)).to.deep.equal(solutions.fillSolution);
        })
    });
    describe('Sum up both arrays', function () {
        it('Sum up all arrays and store them in one', function () {
            expect(blockhain.sumArray(solutions.addUpParameter)).to.deep.equal(solutions.addUpSolution);
        })
    });
    describe('Hash the single row array', function () {
        it('SHA256 Hash the array', function () {
            expect(blockhain.hashArray(solutions.hashArrayParameter)).to.equal(solutions.hashArraySolution);
        } )
    });
});