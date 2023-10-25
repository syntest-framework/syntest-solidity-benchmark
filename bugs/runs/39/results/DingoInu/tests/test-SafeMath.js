const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractUNHSLS = await SafeMath.new({from: accounts[0]});
		const bBZfekhm = BigInt("1071")
		const agwW679J = BigInt("185")
		const bZwfDD9 = BigInt("1069")
		const aUWBfqPt = BigInt("1026")
		const bdmlBShu = BigInt("939")
		const aLgKdpCk = BigInt("1423")
		const bvSfMAdu = BigInt("1513")
		const af9UdczU = BigInt("1025")
		const bFUiP2Z3 = BigInt("1285")
		const axotaY4A = BigInt("1756")
		const bHyIaVpJ = BigInt("1488")
		const aQiRaJh7 = BigInt("1598")
		const cTEXHuCZ = await contractUNHSLS.safeSub.call(agwW679J, bBZfekhm, {from: "0x0000000000000000000000000000000000000001"});
		const cCa92IAN = await contractUNHSLS.safeDiv.call(aUWBfqPt, bZwfDD9, {from: accounts[1]});
		const cpz4ngq = await contractUNHSLS.safeAdd.call(aLgKdpCk, bdmlBShu, {from: accounts[1]});
		const ckBXxtZQ = await contractUNHSLS.safeMul.call(af9UdczU, bvSfMAdu, {from: "0x0000000000000000000000000000000000000001"});
		const cBngm7xp = await contractUNHSLS.safeDiv.call(axotaY4A, bFUiP2Z3, {from: accounts[4]});
		const cSc8AwsX = await contractUNHSLS.safeAdd.call(aQiRaJh7, bHyIaVpJ, {from: accounts[1]});

		await expect(contractUNHSLS.safeSub.call(agwW679J, bBZfekhm, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractTUUgpN = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bk1lBu5G = BigInt("790")
		const aQI3Rr4M = BigInt("353")
		const bxwpm9D3 = BigInt("1007")
		const awdDWNb8 = BigInt("1409")
		const bH9qnVHS = BigInt("287")
		const al9QbaO9 = BigInt("1889")
		const cFqe16Rq = await contractTUUgpN.safeMul.call(aQI3Rr4M, bk1lBu5G, {from: accounts[4]});
		const cYwlQI3X = await contractTUUgpN.safeMul.call(awdDWNb8, bxwpm9D3, {from: accounts[5]});
		const c840sxk = await contractTUUgpN.safeSub.call(al9QbaO9, bH9qnVHS, {from: accounts[2]});
	});
})