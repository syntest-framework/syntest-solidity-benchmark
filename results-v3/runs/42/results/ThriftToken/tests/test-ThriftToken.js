const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenVEaJcwV = await ThriftToken.new({from: accounts[3]});
		const addressIHlRAP = accounts[2]
		const uintUiVxauD = BigInt("1643")
		const addressAk0po7w = accounts[1]
		const uintWvbWCxx = BigInt("172")
		const addressBDOzFFg = accounts[1]
		const addressOTYOIt9 = accounts[1]
		const uintsIBtd8 = BigInt("1548")
		const addressKJHzTum = accounts[2]
		const uint256wJv19NA = await ThriftTokenVEaJcwV.balanceOf.call(addressIHlRAP, {from: accounts[3]});
		const boolJ2bCm1X = await ThriftTokenVEaJcwV.decreaseApproval.call(addressAk0po7w, uintUiVxauD, {from: accounts[2]});
		const boolrpHLoVg = await ThriftTokenVEaJcwV.approve.call(addressBDOzFFg, uintWvbWCxx, {from: accounts[5]});
		const uint256slCBgoM = await ThriftTokenVEaJcwV.transferableTokens.call(addressOTYOIt9, {from: accounts[5]});
		const boolPYYXOeM = await ThriftTokenVEaJcwV.transfer.call(addressKJHzTum, uintsIBtd8, {from: accounts[0]});

		assert.equal(boolJ2bCm1X, true)
		assert.equal(boolrpHLoVg, true)
		assert.equal(uint256slCBgoM, BigInt("0"))
		assert.equal(uint256wJv19NA, BigInt("0"))
		await expect(ThriftTokenVEaJcwV.transfer.call(addressKJHzTum, uintsIBtd8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenkKTPYzR = await ThriftToken.new({from: accounts[4]});
		const uintByeevco = BigInt("146")
		const addressbGEXBo0 = accounts[1]
		const uintB04eZz = BigInt("202")
		const addressFaJY1I3 = accounts[4]
		const addressEmslyxe = accounts[3]
		const uintbv7CcGt = BigInt("1876")
		const addressvO6W4gQ = accounts[1]
		const boolEkQDFfT = await ThriftTokenkKTPYzR.increaseApproval.call(addressbGEXBo0, uintByeevco, {from: "0x0000000000000000000000000000000000000001"});
		const boolc6JHKm9 = await ThriftTokenkKTPYzR.decreaseApproval.call(addressFaJY1I3, uintB04eZz, {from: accounts[2]});
		const uint256u9t1n6H = await ThriftTokenkKTPYzR.balanceOf.call(addressEmslyxe, {from: accounts[5]});
		const boolM8E8ijx = await ThriftTokenkKTPYzR.increaseApproval.call(addressvO6W4gQ, uintbv7CcGt, {from: accounts[2]});

		assert.equal(boolEkQDFfT, true)
		assert.equal(boolM8E8ijx, true)
		assert.equal(boolc6JHKm9, true)
		assert.equal(uint256u9t1n6H, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenOah8L3Q = await ThriftToken.new({from: accounts[5]});
		const uintt8rIlKb = BigInt("1794")
		const addressBdS7NcL = accounts[4]
		const uintfPzMBfD = BigInt("1248")
		const addressPyCvb0N = "0x0000000000000000000000000000000000000001"
		const addressoMUkgLR = accounts[0]
		const uintLvWfIv = BigInt("507")
		const addressVw0L5Al = accounts[5]
		const uintmjXU5d7 = BigInt("1753")
		const addressM5rm6xs = accounts[2]
		const addressL3gpGU = accounts[1]
		const uintMoB4PHk = BigInt("1254")
		const addressz7LCa6 = accounts[1]
		const boolWdyee7 = await ThriftTokenOah8L3Q.decreaseApproval.call(addressBdS7NcL, uintt8rIlKb, {from: accounts[2]});
		const boolzVxeZA = await ThriftTokenOah8L3Q.transferFrom.call(addressoMUkgLR, addressPyCvb0N, uintfPzMBfD, {from: accounts[4]});
		const boolEWVleCB = await ThriftTokenOah8L3Q.transfer.call(addressVw0L5Al, uintLvWfIv, {from: accounts[3]});
		const boolZnDRfbl = await ThriftTokenOah8L3Q.transferFrom.call(addressL3gpGU, addressM5rm6xs, uintmjXU5d7, {from: accounts[4]});
		const bools2YIlGU = await ThriftTokenOah8L3Q.decreaseApproval.call(addressz7LCa6, uintMoB4PHk, {from: accounts[2]});

		assert.equal(boolWdyee7, true)
		await expect(ThriftTokenOah8L3Q.transferFrom.call(addressoMUkgLR, addressPyCvb0N, uintfPzMBfD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenXCrLDC = await ThriftToken.new({from: accounts[3]});
		const uint3vh0BA = BigInt("46")
		const addressNNP53f = accounts[1]
		const uintOfdQVPp = BigInt("47")
		const addressWDOvpL = accounts[0]
		const addressVDmnEa = accounts[0]
		const addressRsJbmDq = accounts[2]
		const addressEI1sePV = accounts[4]
		const boolEGrkyKN = await ThriftTokenXCrLDC.increaseApproval.call(addressNNP53f, uint3vh0BA, {from: accounts[0]});
		const boolbF4wsFg = await ThriftTokenXCrLDC.increaseApproval.call(addressWDOvpL, uintOfdQVPp, {from: accounts[3]});
		const uint256wLxhWvc = await ThriftTokenXCrLDC.balanceOf.call(addressVDmnEa, {from: accounts[0]});
		const uint256K9SB7gi = await ThriftTokenXCrLDC.allowance.call(addressEI1sePV, addressRsJbmDq, {from: accounts[0]});

		assert.equal(boolEGrkyKN, true)
		assert.equal(boolbF4wsFg, true)
		assert.equal(uint256K9SB7gi, BigInt("0"))
		assert.equal(uint256wLxhWvc, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenxZBHk37 = await ThriftToken.new({from: accounts[3]});
		const uinta5n0p72 = BigInt("1389")
		const addressiFI6Op = accounts[0]
		const uintaXAZSWs = BigInt("1263")
		const addressHxobWVG = accounts[2]
		const addressi30TgJF = accounts[2]
		const addressIStmJJ4 = accounts[0]
		const addressd6625kY = accounts[0]
		const uintWVPyTPO = BigInt("1764")
		const addressOiRaTD6 = accounts[2]
		const boollA1cvmn = await ThriftTokenxZBHk37.increaseApproval.call(addressiFI6Op, uinta5n0p72, {from: accounts[4]});
		const boolfx1htke = await ThriftTokenxZBHk37.increaseApproval.call(addressHxobWVG, uintaXAZSWs, {from: accounts[3]});
		const addressznHbfwq = await ThriftTokenxZBHk37.transferOwnership.call(addressi30TgJF, {from: accounts[3]});
		const uint256wLaXXXR = await ThriftTokenxZBHk37.balanceOf.call(addressIStmJJ4, {from: accounts[5]});
		const uint256v7iXQsy = await ThriftTokenxZBHk37.transferableTokens.call(addressd6625kY, {from: "0x0000000000000000000000000000000000000001"});
		const boolH5Furo = await ThriftTokenxZBHk37.decreaseApproval.call(addressOiRaTD6, uintWVPyTPO, {from: accounts[5]});

		assert.equal(boolH5Furo, true)
		assert.equal(boolfx1htke, true)
		assert.equal(boollA1cvmn, true)
		assert.equal(uint256v7iXQsy, BigInt("0"))
		assert.equal(uint256wLaXXXR, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenYPAz7nl = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressqZRAFVZ = accounts[5]
		const uintpwahb1k = BigInt("283")
		const addressCs53a1V = accounts[2]
		const addressJaqqc71 = accounts[0]
		const uintE6UWwZk = BigInt("1880")
		const addressA3Du1Jt = accounts[2]
		const addresscrLZWkg = accounts[2]
		const uint256TtXtJOL = await ThriftTokenYPAz7nl.balanceOf.call(addressqZRAFVZ, {from: accounts[3]});
		const boolyFpx3Gi = await ThriftTokenYPAz7nl.transferFrom.call(addressJaqqc71, addressCs53a1V, uintpwahb1k, {from: accounts[3]});
		const boolpsUZ46P = await ThriftTokenYPAz7nl.transferFrom.call(addresscrLZWkg, addressA3Du1Jt, uintE6UWwZk, {from: accounts[2]});
	});
})