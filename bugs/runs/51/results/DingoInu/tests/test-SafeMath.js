const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractldzaQAU = await SafeMath.new({from: accounts[0]});
		const bfQCLVGf = BigInt("1459")
		const ar8M15OW = BigInt("576")
		const bHdNrST = BigInt("1304")
		const ao5OTAPV = BigInt("679")
		const bVDLqxzX = BigInt("963")
		const alVzSY8 = BigInt("479")
		const bp0sXhBM = BigInt("1909")
		const aa0B9Wrf = BigInt("786")
		const bL0aIvg6 = BigInt("100")
		const aWSHJfOp = BigInt("1780")
		const cDOCSyd = await contractldzaQAU.safeSub.call(ar8M15OW, bfQCLVGf, {from: accounts[2]});
		const cNov2qG5 = await contractldzaQAU.safeSub.call(ao5OTAPV, bHdNrST, {from: accounts[3]});
		const c09DUy0 = await contractldzaQAU.safeSub.call(alVzSY8, bVDLqxzX, {from: "0x0000000000000000000000000000000000000001"});
		const calz3b3l = await contractldzaQAU.safeAdd.call(aa0B9Wrf, bp0sXhBM, {from: accounts[3]});
		const cL93wCoG = await contractldzaQAU.safeSub.call(aWSHJfOp, bL0aIvg6, {from: accounts[3]});

		await expect(contractldzaQAU.safeSub.call(ar8M15OW, bfQCLVGf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractB2ZjOou = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bDLsM9BL = BigInt("1856")
		const aZeWKZj = BigInt("1783")
		const bbozxjMK = BigInt("1498")
		const aOKHbHp = BigInt("740")
		const brWcCMxu = BigInt("1327")
		const ayLmHTp7 = BigInt("82")
		const bZoirDD = BigInt("1795")
		const awrPZtNX = BigInt("2031")
		const cDXdkuop = await contractB2ZjOou.safeSub.call(aZeWKZj, bDLsM9BL, {from: accounts[4]});
		const cGXdc0I = await contractB2ZjOou.safeSub.call(aOKHbHp, bbozxjMK, {from: accounts[1]});
		const cHWh5rJU = await contractB2ZjOou.safeSub.call(ayLmHTp7, brWcCMxu, {from: accounts[3]});
		const cO0rZdEG = await contractB2ZjOou.safeAdd.call(awrPZtNX, bZoirDD, {from: accounts[5]});
	});
})