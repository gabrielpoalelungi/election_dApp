const { assert } = require("chai");

var Election = artifacts.require("./Election.sol");

contract('Election',() => {
    let electionInstance;

    before(async () => {
        electionInstance = await Election.deployed()
    })

    describe('deployment', async () => {
        it('deploys successfully', async() => {
            const numberOfCandidates = await electionInstance.candidatesCount();
            assert.equal(numberOfCandidates, 2)
        })

        it('it initializes the canidates with the correct values', async () => {
            candidate1 = await electionInstance.candidates(1);
            candidate2 = await electionInstance.candidates(2);

            assert.equal(candidate1[0], 1, "contains the correct id");
            assert.equal(candidate1[1], "Candidate1", "contains the correct name");
            assert.equal(candidate1[2], 0, "contians the correct votes count");

            assert.equal(candidate2[0], 2, "contains the correct id");
            assert.equal(candidate2[1], "Candidate2", "contains the correct name");
            assert.equal(candidate2[2], 0, "contians the correct votes count");
        })
    })
})