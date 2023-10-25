const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenXSxxsIP = await ThriftToken.new({from: accounts[3]});
		const uinteLiyFis = BigInt("380")
		const addressv7zquLF = accounts[0]
		const addressgsgncCA = "0x0000000000000000000000000000000000000001"
		const uintE8RjlVY = BigInt("1395")
		const addressYBNjkui = accounts[5]
		const addressWluPkbG = accounts[3]
		const boolJGRBs7e = await ThriftTokenXSxxsIP.approve.call(addressv7zquLF, uinteLiyFis, {from: accounts[2]});
//		const addressL58T3j = await ThriftTokenXSxxsIP.transferOwnership.call(addressgsgncCA, {from: accounts[5]});
//		const boolbFXkYFM = await ThriftTokenXSxxsIP.approve.call(addressYBNjkui, uintE8RjlVY, {from: accounts[0]});
//		const uint256OiaL5Fn = await ThriftTokenXSxxsIP.transferableTokens.call(addressWluPkbG, {from: accounts[5]});

		assert.equal(boolJGRBs7e, true)
		await expect(ThriftTokenXSxxsIP.transferOwnership.call(addressgsgncCA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenLBcZxy = await ThriftToken.new({from: accounts[3]});
		const uintVkK02uO = BigInt("942")
		const addresslHCd8Em = accounts[0]
		const uintcnCPeAO = BigInt("139")
		const addresssKHAyLE = accounts[4]
		const uintbKqpSP = BigInt("1283")
		const addressYQERuen = accounts[2]
		const uintAnBNB9o = BigInt("1273")
		const addressidsPsi2 = accounts[3]
		const addressB4ToFbp = accounts[2]
		const uintMw35U46 = BigInt("970")
		const addressTjZgeul = accounts[1]
		const boolFtEoCpb = await ThriftTokenLBcZxy.decreaseApproval.call(addresslHCd8Em, uintVkK02uO, {from: accounts[3]});
		const boolIy1Y9RE = await ThriftTokenLBcZxy.decreaseApproval.call(addresssKHAyLE, uintcnCPeAO, {from: accounts[3]});
		const boolUh7wzhC = await ThriftTokenLBcZxy.approve.call(addressYQERuen, uintbKqpSP, {from: accounts[5]});
//		const boolnFFeO5m = await ThriftTokenLBcZxy.transferFrom.call(addressB4ToFbp, addressidsPsi2, uintAnBNB9o, {from: accounts[2]});
//		const boolJsB5QAX = await ThriftTokenLBcZxy.transfer.call(addressTjZgeul, uintMw35U46, {from: accounts[2]});

		assert.equal(boolFtEoCpb, true)
		assert.equal(boolIy1Y9RE, true)
		assert.equal(boolUh7wzhC, true)
		await expect(ThriftTokenLBcZxy.transferFrom.call(addressB4ToFbp, addressidsPsi2, uintAnBNB9o, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenD7fsXS = await ThriftToken.new({from: accounts[3]});
		const uintJLll2K = BigInt("311")
		const addressW1onZhg = accounts[0]
		const uinttge4AbN = BigInt("1527")
		const addressKUtuvYY = accounts[2]
		const addressE4hRoy = accounts[1]
		const boolMTHdjYI = await ThriftTokenD7fsXS.increaseApproval.call(addressW1onZhg, uintJLll2K, {from: "0x0000000000000000000000000000000000000001"});
		const boolMhcs0N5 = await ThriftTokenD7fsXS.increaseApproval.call(addressKUtuvYY, uinttge4AbN, {from: accounts[1]});
		const uint256YaucYmc = await ThriftTokenD7fsXS.transferableTokens.call(addressE4hRoy, {from: accounts[2]});

		assert.equal(boolMTHdjYI, true)
		assert.equal(boolMhcs0N5, true)
		assert.equal(uint256YaucYmc, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenaCuwNPW = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uint72LlOQ = BigInt("1837")
		const addressEILIBlN = accounts[2]
		const addressd67NiUq = "0x0000000000000000000000000000000000000001"
		const uintHWOt1S5 = BigInt("1727")
		const addressziDi5dm = accounts[0]
		const boolEBrnyFV = await ThriftTokenaCuwNPW.transferFrom.call(addressd67NiUq, addressEILIBlN, uint72LlOQ, {from: accounts[2]});
		const boolllmNEja = await ThriftTokenaCuwNPW.approve.call(addressziDi5dm, uintHWOt1S5, {from: accounts[0]});
	});

	it('test for ThriftToken', async () => {
		const ThriftTokend6mIxaJ = await ThriftToken.new({from: accounts[4]});
		const addresssq5UNkU = accounts[1]
		const addresscy2Tmk3 = "0x0000000000000000000000000000000000000001"
		const addressEirwBt = accounts[2]
		const uintYmNvFlM = BigInt("1657")
		const addressgnakDE9 = accounts[2]
		const uintzF6Tir6 = BigInt("944")
		const addressRsgfdC2 = accounts[0]
		const uinthHOJuv0 = BigInt("2005")
		const addressdo1fJn = accounts[1]
		const addressmeImiS1 = accounts[1]
		const addressrgs71EL = accounts[0]
		const uint256TiNrC5d = await ThriftTokend6mIxaJ.balanceOf.call(addresssq5UNkU, {from: accounts[2]});
		const uint256GNRYdy3 = await ThriftTokend6mIxaJ.allowance.call(addressEirwBt, addresscy2Tmk3, {from: accounts[2]});
//		const boolDMG9xOe = await ThriftTokend6mIxaJ.approve.call(addressgnakDE9, uintYmNvFlM, {from: accounts[2]});
//		const booldOxfe8U = await ThriftTokend6mIxaJ.increaseApproval.call(addressRsgfdC2, uintzF6Tir6, {from: accounts[2]});
//		const boolji7fRQC = await ThriftTokend6mIxaJ.transferFrom.call(addressmeImiS1, addressdo1fJn, uinthHOJuv0, {from: accounts[4]});
//		const uint256wr0aNAy = await ThriftTokend6mIxaJ.balanceOf.call(addressrgs71EL, {from: accounts[5]});

		assert.equal(uint256GNRYdy3, BigInt("0"))
		assert.equal(uint256TiNrC5d, BigInt("0"))
		await expect(ThriftTokend6mIxaJ.approve.call(addressgnakDE9, uintYmNvFlM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokendYxEqv0 = await ThriftToken.new({from: accounts[5]});
		const addressrBnr0ju = accounts[2]
		const addresswlYfrSd = accounts[0]
		const addresse1aQucC = accounts[3]
		const addressWLHdAGW = accounts[3]
		const uintx5aDXp3 = BigInt("55")
		const addressNPmCOMK = accounts[1]
		const addressYlhCYBE = accounts[2]
		const addressbbbyc3W = accounts[1]
		const addressqlzOEHj = accounts[2]
		const uint256rlvX84N = await ThriftTokendYxEqv0.balanceOf.call(addressrBnr0ju, {from: "0x0000000000000000000000000000000000000001"});
		const uint256K5RP1Zx = await ThriftTokendYxEqv0.allowance.call(addresse1aQucC, addresswlYfrSd, {from: accounts[3]});
		const uint256NVAe47c = await ThriftTokendYxEqv0.balanceOf.call(addressWLHdAGW, {from: accounts[2]});
//		const boolvAEbGlI = await ThriftTokendYxEqv0.transfer.call(addressNPmCOMK, uintx5aDXp3, {from: accounts[3]});
//		const uint256j06ToEc = await ThriftTokendYxEqv0.allowance.call(addressbbbyc3W, addressYlhCYBE, {from: accounts[0]});
//		const uint256wSLrT5T = await ThriftTokendYxEqv0.balanceOf.call(addressqlzOEHj, {from: accounts[3]});

		assert.equal(uint256K5RP1Zx, BigInt("0"))
		assert.equal(uint256NVAe47c, BigInt("0"))
		assert.equal(uint256rlvX84N, BigInt("0"))
		await expect(ThriftTokendYxEqv0.transfer.call(addressNPmCOMK, uintx5aDXp3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})