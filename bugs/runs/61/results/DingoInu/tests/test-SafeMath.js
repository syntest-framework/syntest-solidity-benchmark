const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contracteV72nuv = await SafeMath.new({from: accounts[4]});
		const bDkXuseR = BigInt("1462")
		const aTbKurKq = BigInt("82")
		const bxcBpcoh = BigInt("1792")
		const aBMpKpFY = BigInt("1805")
		const bGCWoRoU = BigInt("231")
		const aTKucgsT = BigInt("287")
		const cmhar8MI = await contracteV72nuv.safeSub.call(aTbKurKq, bDkXuseR, {from: accounts[3]});
		const cQUOxxw4 = await contracteV72nuv.safeAdd.call(aBMpKpFY, bxcBpcoh, {from: accounts[4]});
		const clo5qWAG = await contracteV72nuv.safeDiv.call(aTKucgsT, bGCWoRoU, {from: accounts[5]});

		await expect(contracteV72nuv.safeSub.call(aTbKurKq, bDkXuseR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractbGvfpc9 = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const b2NhxxE = BigInt("883")
		const a8qIEqn = BigInt("314")
		const bx3hyFFJ = BigInt("301")
		const aLyVxep2 = BigInt("1341")
		const bvEJLPN8 = BigInt("1861")
		const ajA6gy8S = BigInt("1149")
		const bA9TF568 = BigInt("1989")
		const aKxd4Zra = BigInt("1767")
		const ckqMH6EK = await contractbGvfpc9.safeMul.call(a8qIEqn, b2NhxxE, {from: accounts[1]});
		const c7YhbeS = await contractbGvfpc9.safeMul.call(aLyVxep2, bx3hyFFJ, {from: accounts[0]});
		const coHgpkve = await contractbGvfpc9.safeAdd.call(ajA6gy8S, bvEJLPN8, {from: accounts[5]});
		const cEpqN7b = await contractbGvfpc9.safeSub.call(aKxd4Zra, bA9TF568, {from: "0x0000000000000000000000000000000000000001"});
	});
})