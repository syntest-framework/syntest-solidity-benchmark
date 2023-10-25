const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenNnjFVel = await ThriftToken.new({from: accounts[0]});
		const addressmm5Ypak = "0x0000000000000000000000000000000000000001"
		const addressV07WqI1 = accounts[1]
		const addressrVp5Zpa = accounts[2]
		const addressKBY3TPp = accounts[4]
		const uintbPu80cO = BigInt("490")
		const addressuVRXdCR = accounts[2]
		const uintS7j3ZiK = BigInt("120")
		const addressfwurGcP = accounts[3]
		const uintgVW3mso = BigInt("125")
		const addresskIioOET = accounts[0]
		const uint256qXbjgAy = await ThriftTokenNnjFVel.allowance.call(addressV07WqI1, addressmm5Ypak, {from: accounts[4]});
		const uint256dZQz6kw = await ThriftTokenNnjFVel.allowance.call(addressKBY3TPp, addressrVp5Zpa, {from: accounts[0]});
		const boolcb8sRjC = await ThriftTokenNnjFVel.increaseApproval.call(addressuVRXdCR, uintbPu80cO, {from: accounts[1]});
		const boolXuVm1ah = await ThriftTokenNnjFVel.approve.call(addressfwurGcP, uintS7j3ZiK, {from: accounts[0]});
		const boolLKKI5ff = await ThriftTokenNnjFVel.decreaseApproval.call(addresskIioOET, uintgVW3mso, {from: accounts[1]});

		assert.equal(boolLKKI5ff, true)
		assert.equal(boolXuVm1ah, true)
		assert.equal(boolcb8sRjC, true)
		assert.equal(uint256dZQz6kw, BigInt("0"))
		assert.equal(uint256qXbjgAy, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokengcrfcr4 = await ThriftToken.new({from: accounts[2]});
		const uintIK5Rurj = BigInt("1681")
		const addressZXojOp = accounts[2]
		const addressvIBxfQB = accounts[1]
		const addressujHZgXp = accounts[4]
		const addressS4Gv0Yu = accounts[4]
		const uintG1wBg2G = BigInt("726")
		const addressk1QDG5a = accounts[5]
		const addresss8WxHR = accounts[2]
		const uintxmVIz5x = BigInt("921")
		const addressgjbiZn = accounts[1]
		const address9OJlt8 = accounts[3]
//		const booli4GNq3P = await ThriftTokengcrfcr4.transferFrom.call(addressvIBxfQB, addressZXojOp, uintIK5Rurj, {from: accounts[2]});
//		const uint256RUK0B3r = await ThriftTokengcrfcr4.balanceOf.call(addressujHZgXp, {from: accounts[3]});
//		const addressvZcr7r = await ThriftTokengcrfcr4.transferOwnership.call(addressS4Gv0Yu, {from: accounts[4]});
//		const boolHm10obi = await ThriftTokengcrfcr4.transferFrom.call(addresss8WxHR, addressk1QDG5a, uintG1wBg2G, {from: accounts[2]});
//		const boolXuKUFnb = await ThriftTokengcrfcr4.increaseApproval.call(addressgjbiZn, uintxmVIz5x, {from: accounts[3]});
//		const addressG0tyt2q = await ThriftTokengcrfcr4.transferOwnership.call(address9OJlt8, {from: accounts[0]});

		await expect(ThriftTokengcrfcr4.transferFrom.call(addressvIBxfQB, addressZXojOp, uintIK5Rurj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenhTVQanX = await ThriftToken.new({from: accounts[0]});
		const addressooZfPuq = accounts[1]
		const uintEcgyYdY = BigInt("1642")
		const addressDa5FOJl = accounts[4]
		const uintHC6U9P = BigInt("1540")
		const addressRLjrtUT = accounts[0]
		const uintayQ4jS = BigInt("1646")
		const addressTkVq4No = "0x0000000000000000000000000000000000000001"
		const addressCOKQIr = accounts[1]
		const uintZfl66D6 = BigInt("1101")
		const addressGNrKpyQ = accounts[0]
//		const addressNpx5aPa = await ThriftTokenhTVQanX.transferOwnership.call(addressooZfPuq, {from: accounts[3]});
//		const boolC3iFRS = await ThriftTokenhTVQanX.decreaseApproval.call(addressDa5FOJl, uintEcgyYdY, {from: accounts[2]});
//		const boolCP2mQHL = await ThriftTokenhTVQanX.approve.call(addressRLjrtUT, uintHC6U9P, {from: accounts[4]});
//		const boolsQd8aQG = await ThriftTokenhTVQanX.transferFrom.call(addressCOKQIr, addressTkVq4No, uintayQ4jS, {from: "0x0000000000000000000000000000000000000001"});
//		const boolz8AYnU8 = await ThriftTokenhTVQanX.increaseApproval.call(addressGNrKpyQ, uintZfl66D6, {from: accounts[3]});

		await expect(ThriftTokenhTVQanX.transferOwnership.call(addressooZfPuq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenXpbTFwh = await ThriftToken.new({from: accounts[2]});
		const uinttDF4PmM = BigInt("179")
		const addressLVkU1rk = accounts[2]
		const uintrVkFhFP = BigInt("739")
		const addressLU5Uiz2 = accounts[1]
		const uinthTFVFv3 = BigInt("1956")
		const addresssXOS6Xd = accounts[5]
		const addressAlimg6N = accounts[0]
		const uintGAhVV5D = BigInt("159")
		const addressYozZ0f = accounts[3]
		const boolaVzhLB1 = await ThriftTokenXpbTFwh.decreaseApproval.call(addressLVkU1rk, uinttDF4PmM, {from: accounts[3]});
//		const boolgLDLhXe = await ThriftTokenXpbTFwh.transfer.call(addressLU5Uiz2, uintrVkFhFP, {from: accounts[2]});
//		const boolE9igkzA = await ThriftTokenXpbTFwh.transferFrom.call(addressAlimg6N, addresssXOS6Xd, uinthTFVFv3, {from: accounts[2]});
//		const boolrh0HWO = await ThriftTokenXpbTFwh.approve.call(addressYozZ0f, uintGAhVV5D, {from: accounts[4]});

		assert.equal(boolaVzhLB1, true)
		await expect(ThriftTokenXpbTFwh.transfer.call(addressLU5Uiz2, uintrVkFhFP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenEbp6UFe = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressZqOTuD4 = accounts[1]
		const uintBRuYOK = BigInt("575")
		const addressoC3BY4e = accounts[1]
		const uintoLdktT6 = BigInt("318")
		const addresshMVnpf = accounts[4]
		const addressl4jmFK7 = "0x0000000000000000000000000000000000000001"
		const addressZTMtmfN = accounts[4]
		const uint256eR09lDN = await ThriftTokenEbp6UFe.transferableTokens.call(addressZqOTuD4, {from: accounts[4]});
		const boolrrG4aPH = await ThriftTokenEbp6UFe.increaseApproval.call(addressoC3BY4e, uintBRuYOK, {from: accounts[3]});
		const booliogNZP = await ThriftTokenEbp6UFe.approve.call(addresshMVnpf, uintoLdktT6, {from: accounts[5]});
		const addressNlrXvX0 = await ThriftTokenEbp6UFe.transferOwnership.call(addressl4jmFK7, {from: accounts[0]});
		const uint256sjyXT3W = await ThriftTokenEbp6UFe.transferableTokens.call(addressZTMtmfN, {from: accounts[3]});
	});
})