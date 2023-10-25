const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractcWKAXJM = await SafeMath.new({from: accounts[4]});
		const bcZRUiT = BigInt("916")
		const awXZ8ZVP = BigInt("596")
		const bxvtKQaA = BigInt("227")
		const asREnnKf = BigInt("653")
		const bMyEEJqa = BigInt("1945")
		const aVbaB950 = BigInt("1723")
		const bdZxUj58 = BigInt("765")
		const a3bAVzl = BigInt("1037")
		const cIe15nC = await contractcWKAXJM.safeSub.call(awXZ8ZVP, bcZRUiT, {from: accounts[2]});
		const cVpkEpQ6 = await contractcWKAXJM.safeSub.call(asREnnKf, bxvtKQaA, {from: accounts[0]});
		const cChay26n = await contractcWKAXJM.safeAdd.call(aVbaB950, bMyEEJqa, {from: accounts[0]});
		const cHJNjZd = await contractcWKAXJM.safeDiv.call(a3bAVzl, bdZxUj58, {from: accounts[1]});

		await expect(contractcWKAXJM.safeSub.call(awXZ8ZVP, bcZRUiT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractuJVrnrn = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bqzQ7iex = BigInt("1686")
		const a9IkaeG = BigInt("482")
		const bUVhSMD = BigInt("738")
		const aYa8Ycb6 = BigInt("709")
		const bBrjMPP = BigInt("1168")
		const aPjDEREE = BigInt("1593")
		const bFNxAbW = BigInt("91")
		const aFdTnky = BigInt("1055")
		const bepwJ3NR = BigInt("668")
		const aK2spvZO = BigInt("329")
		const cPdLbtps = await contractuJVrnrn.safeSub.call(a9IkaeG, bqzQ7iex, {from: accounts[4]});
		const cYWn2qAs = await contractuJVrnrn.safeMul.call(aYa8Ycb6, bUVhSMD, {from: accounts[0]});
		const cN0YbNcX = await contractuJVrnrn.safeSub.call(aPjDEREE, bBrjMPP, {from: accounts[1]});
		const cOK0lm7t = await contractuJVrnrn.safeSub.call(aFdTnky, bFNxAbW, {from: "0x0000000000000000000000000000000000000001"});
		const cSzU4wd = await contractuJVrnrn.safeSub.call(aK2spvZO, bepwJ3NR, {from: accounts[1]});
	});
})