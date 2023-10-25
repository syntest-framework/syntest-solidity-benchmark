const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractczLkSAp = await SafeMath.new({from: accounts[2]});
		const bgWu0glB = BigInt("1510")
		const akZFav7O = BigInt("333")
		const bCCIQgSP = BigInt("1308")
		const aZgbaitm = BigInt("1004")
		const bj5y8k4j = BigInt("1175")
		const ac0fXTP0 = BigInt("886")
		const ciZ3uDOD = await contractczLkSAp.safeSub.call(akZFav7O, bgWu0glB, {from: accounts[1]});
		const cRDoXp08 = await contractczLkSAp.safeSub.call(aZgbaitm, bCCIQgSP, {from: accounts[4]});
		const cCwm4k0n = await contractczLkSAp.safeMul.call(ac0fXTP0, bj5y8k4j, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractczLkSAp.safeSub.call(akZFav7O, bgWu0glB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractAtVrVgr = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bHIUQhym = BigInt("1769")
		const aA4OaDpv = BigInt("1643")
		const bhETBBid = BigInt("247")
		const aN8nArIy = BigInt("1913")
		const cogXwKNg = await contractAtVrVgr.safeSub.call(aA4OaDpv, bHIUQhym, {from: accounts[4]});
		const cNBciRo = await contractAtVrVgr.safeMul.call(aN8nArIy, bhETBBid, {from: accounts[3]});
	});
})