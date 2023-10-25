const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractqbrwEcp = await SafeMath.new({from: accounts[2]});
		const bnpChP4u = BigInt("94")
		const apSOfEnQ = BigInt("610")
		const bWHDC4oX = BigInt("1015")
		const abwYIPij = BigInt("421")
		const bE8KdKWN = BigInt("1866")
		const akamb9iw = BigInt("837")
		const bY6VHViK = BigInt("1976")
		const au3UYgl9 = BigInt("496")
		const bUPsMasw = BigInt("1976")
		const aAsmpyyq = BigInt("842")
		const bG1RvLTV = BigInt("440")
		const aYdTIbCg = BigInt("651")
		const cezLPXUR = await contractqbrwEcp.safeDiv.call(apSOfEnQ, bnpChP4u, {from: accounts[1]});
		const cewLls56 = await contractqbrwEcp.safeSub.call(abwYIPij, bWHDC4oX, {from: accounts[4]});
		const cWt5DTeY = await contractqbrwEcp.safeSub.call(akamb9iw, bE8KdKWN, {from: accounts[2]});
		const czABCwDt = await contractqbrwEcp.safeDiv.call(au3UYgl9, bY6VHViK, {from: accounts[4]});
		const cMcaS4r5 = await contractqbrwEcp.safeDiv.call(aAsmpyyq, bUPsMasw, {from: accounts[1]});
		const c8EEXsF = await contractqbrwEcp.safeAdd.call(aYdTIbCg, bG1RvLTV, {from: accounts[1]});

		assert.equal(cezLPXUR, 6)
		await expect(contractqbrwEcp.safeSub.call(abwYIPij, bWHDC4oX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractujnj1W6 = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bqYIGVg4 = BigInt("1442")
		const apWCkKT6 = BigInt("171")
		const bJ1UOyz7 = BigInt("751")
		const aHCWhMb = BigInt("1493")
		const cqeje8XG = await contractujnj1W6.safeAdd.call(apWCkKT6, bqYIGVg4, {from: accounts[5]});
		const cACQc68u = await contractujnj1W6.safeSub.call(aHCWhMb, bJ1UOyz7, {from: accounts[3]});
	});
})