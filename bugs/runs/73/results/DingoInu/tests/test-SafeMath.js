const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractw2KZJRo = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bpGfDBXu = BigInt("1551")
		const am5G7xNN = BigInt("1982")
		const bKXrQhFp = BigInt("41")
		const aJEnG3H = BigInt("657")
		const b5GjybA = BigInt("1959")
		const ahvB3NEw = BigInt("640")
		const bvcNSXkR = BigInt("434")
		const ajZHS7vb = BigInt("438")
		const cW58PSUg = await contractw2KZJRo.safeMul.call(am5G7xNN, bpGfDBXu, {from: accounts[4]});
		const ctXMiA6H = await contractw2KZJRo.safeDiv.call(aJEnG3H, bKXrQhFp, {from: accounts[3]});
		const cRgJMgSD = await contractw2KZJRo.safeDiv.call(ahvB3NEw, b5GjybA, {from: accounts[3]});
		const cm7hnmj = await contractw2KZJRo.safeSub.call(ajZHS7vb, bvcNSXkR, {from: accounts[3]});
	});

	it('test for SafeMath', async () => {
		const contractFQGV6lj = await SafeMath.new({from: accounts[2]});
		const bJUQ3uCs = BigInt("83")
		const amKr6lDx = BigInt("1316")
		const bXi4wYjR = BigInt("185")
		const aiTI3Jr2 = BigInt("789")
		const bIJuyTUu = BigInt("1137")
		const adww8JTq = BigInt("1060")
		const cMa8jmLe = await contractFQGV6lj.safeMul.call(amKr6lDx, bJUQ3uCs, {from: accounts[4]});
		const cdeh4lc = await contractFQGV6lj.safeMul.call(aiTI3Jr2, bXi4wYjR, {from: accounts[3]});
		const cz1n1VLo = await contractFQGV6lj.safeSub.call(adww8JTq, bIJuyTUu, {from: accounts[2]});

		assert.equal(cMa8jmLe, 109228)
		assert.equal(cdeh4lc, 145965)
		await expect(contractFQGV6lj.safeSub.call(adww8JTq, bIJuyTUu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})