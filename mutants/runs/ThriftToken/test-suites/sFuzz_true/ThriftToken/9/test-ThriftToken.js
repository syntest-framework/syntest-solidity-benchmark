const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenIBSWa7d = await ThriftToken.new({from: accounts[1]});
		const uintgwNPK6i = BigInt("1365")
		const addressN3x5R1r = accounts[0]
		const uintsKzLLDV = BigInt("1973")
		const addressI8ruOEL = accounts[4]
		const addressgqcghQ0 = "0x0000000000000000000000000000000000000001"
		const uintqvjcKXM = BigInt("172")
		const addressgFh7nFq = accounts[2]
		const boolfA2hjkB = await ThriftTokenIBSWa7d.approve.call(addressN3x5R1r, uintgwNPK6i, {from: accounts[4]});
		const boolJCvRE2H = await ThriftTokenIBSWa7d.transferFrom.call(addressgqcghQ0, addressI8ruOEL, uintsKzLLDV, {from: accounts[3]});
		const boolADdGED = await ThriftTokenIBSWa7d.decreaseApproval.call(addressgFh7nFq, uintqvjcKXM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolfA2hjkB, true)
		await expect(ThriftTokenIBSWa7d.transferFrom.call(addressgqcghQ0, addressI8ruOEL, uintsKzLLDV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenjtquvNm = await ThriftToken.new({from: accounts[4]});
		const uintnf352ZG = BigInt("1350")
		const addressvagKO1Z = accounts[4]
		const addressWRqZmIm = accounts[4]
		const addressCnInAkE = accounts[4]
		const addressSNvVSwn = accounts[3]
		const addressLQWxagM = accounts[4]
		const uintZO4jbfq = BigInt("140")
		const addressmfTlf4c = accounts[2]
		const uintxdxxRV4 = BigInt("1055")
		const addresscdM0q5f = accounts[1]
		const boolwlasZBG = await ThriftTokenjtquvNm.decreaseApproval.call(addressvagKO1Z, uintnf352ZG, {from: accounts[2]});
		const addressXpHSD5q = await ThriftTokenjtquvNm.transferOwnership.call(addressWRqZmIm, {from: accounts[3]});
		const uint256lVLeoDw = await ThriftTokenjtquvNm.balanceOf.call(addressCnInAkE, {from: accounts[3]});
		const uint256X4dUWW = await ThriftTokenjtquvNm.allowance.call(addressLQWxagM, addressSNvVSwn, {from: accounts[0]});
		const boolxycWW7 = await ThriftTokenjtquvNm.decreaseApproval.call(addressmfTlf4c, uintZO4jbfq, {from: "0x0000000000000000000000000000000000000001"});
		const boolPZBOzkz = await ThriftTokenjtquvNm.approve.call(addresscdM0q5f, uintxdxxRV4, {from: accounts[2]});

		assert.equal(boolwlasZBG, true)
		await expect(ThriftTokenjtquvNm.transferOwnership.call(addressWRqZmIm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenCkJBdod = await ThriftToken.new({from: accounts[1]});
		const addressuKr1Hdq = accounts[3]
		const addressvPDsYL = accounts[0]
		const uintAxjZowI = BigInt("1741")
		const addressnI4THqq = accounts[4]
		const uinti6vjcXw = BigInt("657")
		const addressrP1sajU = accounts[4]
		const uint256j0R3984 = await ThriftTokenCkJBdod.balanceOf.call(addressuKr1Hdq, {from: accounts[3]});
		const uint256ViqA2Kp = await ThriftTokenCkJBdod.balanceOf.call(addressvPDsYL, {from: accounts[3]});
		const boolQLEtxxl = await ThriftTokenCkJBdod.transfer.call(addressnI4THqq, uintAxjZowI, {from: "0x0000000000000000000000000000000000000001"});
		const boolqFS0pMc = await ThriftTokenCkJBdod.approve.call(addressrP1sajU, uinti6vjcXw, {from: accounts[5]});

		assert.equal(uint256ViqA2Kp, BigInt("0"))
		assert.equal(uint256j0R3984, BigInt("0"))
		await expect(ThriftTokenCkJBdod.transfer.call(addressnI4THqq, uintAxjZowI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenm0EtCFN = await ThriftToken.new({from: accounts[2]});
		const addressK1Lqu94 = accounts[4]
		const addressXsSRME = accounts[4]
		const addressoYvOW4w = accounts[0]
		const uintCpTLwIV = BigInt("335")
		const addressDAyGTEC = accounts[4]
		const uint256ypkAWNp = await ThriftTokenm0EtCFN.allowance.call(addressXsSRME, addressK1Lqu94, {from: accounts[4]});
		const addressxxOQ0Y = await ThriftTokenm0EtCFN.transferOwnership.call(addressoYvOW4w, {from: accounts[3]});
		const boolN3L0G3C = await ThriftTokenm0EtCFN.approve.call(addressDAyGTEC, uintCpTLwIV, {from: accounts[2]});

		assert.equal(uint256ypkAWNp, BigInt("0"))
		await expect(ThriftTokenm0EtCFN.transferOwnership.call(addressoYvOW4w, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenJCPyM2c = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintrSZ0a9o = BigInt("772")
		const addressNDl3FUR = accounts[3]
		const addresszMdfbVL = "0x0000000000000000000000000000000000000001"
		const uinthPVDe8m = BigInt("562")
		const addressHgrnV9s = accounts[2]
		const boolcRRVeqc = await ThriftTokenJCPyM2c.decreaseApproval.call(addressNDl3FUR, uintrSZ0a9o, {from: accounts[0]});
		const uint256Ajzam6 = await ThriftTokenJCPyM2c.balanceOf.call(addresszMdfbVL, {from: accounts[0]});
		const booldOJk22L = await ThriftTokenJCPyM2c.decreaseApproval.call(addressHgrnV9s, uinthPVDe8m, {from: accounts[0]});
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenIBSWa7d = await ThriftToken.new({from: accounts[1]});
		const uintBl3D03O = BigInt("1069")
		const addressoZq3VqE = accounts[1]
		const addresszTWSxW9 = accounts[5]
		const uintPPlTzN = BigInt("1973")
		const addressUN0zZST = accounts[6]
		const addressf3bLLlG = "0x0000000000000000000000000000000000000001"
		const booljdk5GiU = await ThriftTokenIBSWa7d.increaseApproval.call(addressoZq3VqE, uintBl3D03O, {from: accounts[1]});
		const uint256sDDFkIo = await ThriftTokenIBSWa7d.transferableTokens.call(addresszTWSxW9, {from: "0x0000000000000000000000000000000000000001"});
		const boolJCvRE2H = await ThriftTokenIBSWa7d.transferFrom.call(addressf3bLLlG, addressUN0zZST, uintPPlTzN, {from: accounts[3]});

		await expect(ThriftTokenIBSWa7d.increaseApproval.call(addressoZq3VqE, uintBl3D03O, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenIBSWa7d = await ThriftToken.new({from: accounts[1]});
		const uintCyRrzrL = BigInt("2039")
		const addressz919b7o = accounts[3]
		const uintDet7awt = BigInt("1973")
		const addressIJ4Y6pz = accounts[6]
		const addressTzmZjVW = "0x0000000000000000000000000000000000000001"
		const boolCMON5cH = await ThriftTokenIBSWa7d.increaseApproval.call(addressz919b7o, uintCyRrzrL, {from: accounts[5]});
		const boolJCvRE2H = await ThriftTokenIBSWa7d.transferFrom.call(addressTzmZjVW, addressIJ4Y6pz, uintDet7awt, {from: accounts[3]});

		assert.equal(boolCMON5cH, true)
		await expect(ThriftTokenIBSWa7d.transferFrom.call(addressTzmZjVW, addressIJ4Y6pz, uintDet7awt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenIBSWa7d = await ThriftToken.new({from: accounts[1]});
		const addressboTGGgt = accounts[0]
		const uintPv7PUn6 = BigInt("1973")
		const addressIrW6PNL = accounts[6]
		const addressW8maHWS = "0x0000000000000000000000000000000000000001"
		const addressD6aQtR2 = await ThriftTokenIBSWa7d.transferOwnership.call(addressboTGGgt, {from: accounts[1]});
		const boolJCvRE2H = await ThriftTokenIBSWa7d.transferFrom.call(addressW8maHWS, addressIrW6PNL, uintPv7PUn6, {from: accounts[3]});

		await expect(ThriftTokenIBSWa7d.transferFrom.call(addressW8maHWS, addressIrW6PNL, uintPv7PUn6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})