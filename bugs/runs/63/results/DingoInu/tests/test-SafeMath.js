const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractuVc3azw = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const b6IE9Qd = BigInt("484")
		const ahqJv6Yx = BigInt("441")
		const bTABExKp = BigInt("1901")
		const ak3yZqL1 = BigInt("1078")
		const bWVqex3e = BigInt("1405")
		const aYZ08oCh = BigInt("1763")
		const bRYqooJ = BigInt("753")
		const agD6wWV = BigInt("560")
		const cK51ghhQ = await contractuVc3azw.safeMul.call(ahqJv6Yx, b6IE9Qd, {from: accounts[3]});
		const c2AMKG2 = await contractuVc3azw.safeAdd.call(ak3yZqL1, bTABExKp, {from: accounts[3]});
		const cHDJOt0N = await contractuVc3azw.safeSub.call(aYZ08oCh, bWVqex3e, {from: accounts[2]});
		const cURuPXCG = await contractuVc3azw.safeMul.call(agD6wWV, bRYqooJ, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for SafeMath', async () => {
		const contractQVDzVqs = await SafeMath.new({from: accounts[0]});
		const bH6sR5li = BigInt("966")
		const ayCLrJTY = BigInt("602")
		const bvvEB6r6 = BigInt("1339")
		const ajwPUlni = BigInt("1424")
		const bzLz7mhL = BigInt("23")
		const aVxE55L8 = BigInt("100")
		const bjBAiNWO = BigInt("439")
		const axXw1tKW = BigInt("2026")
		const bIkVgvpe = BigInt("130")
		const aWs6qnv1 = BigInt("601")
		const cGL856r3 = await contractQVDzVqs.safeSub.call(ayCLrJTY, bH6sR5li, {from: accounts[4]});
		const czzE5MNI = await contractQVDzVqs.safeMul.call(ajwPUlni, bvvEB6r6, {from: accounts[1]});
		const crt1OAeQ = await contractQVDzVqs.safeDiv.call(aVxE55L8, bzLz7mhL, {from: accounts[2]});
		const cx6LDiy3 = await contractQVDzVqs.safeAdd.call(axXw1tKW, bjBAiNWO, {from: "0x0000000000000000000000000000000000000001"});
		const ckW0BP4p = await contractQVDzVqs.safeMul.call(aWs6qnv1, bIkVgvpe, {from: accounts[1]});

		await expect(contractQVDzVqs.safeSub.call(ayCLrJTY, bH6sR5li, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})