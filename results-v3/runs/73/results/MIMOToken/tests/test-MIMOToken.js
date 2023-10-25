const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenLQEHKDM = await MIMOToken.new({from: accounts[2]});
		const uintju0sYfh = BigInt("1821")
		const addressXrCfTcT = accounts[2]
		const addressBn3M5bv = accounts[5]
		const addressmqszhkk = accounts[1]
		const addressTS4vmxh = accounts[1]
		const uintmlETJOj = BigInt("738")
		const uintVqh1wr2 = BigInt("1567")
		const addressByYhEc5 = accounts[0]
		const addressYDLDuhf = accounts[3]
		const boolW1sGEbB = await MIMOTokenLQEHKDM.transferFrom.call(addressBn3M5bv, addressXrCfTcT, uintju0sYfh, {from: accounts[1]});
		const uintqCjAvy = await MIMOTokenLQEHKDM.allowance.call(addressTS4vmxh, addressmqszhkk, {from: accounts[0]});
		const uint256ebFzpI6 = await MIMOTokenLQEHKDM.setFeeRate.call(uintmlETJOj, {from: accounts[2]});
		const boolIVcsK9 = await MIMOTokenLQEHKDM.transferFrom.call(addressYDLDuhf, addressByYhEc5, uintVqh1wr2, {from: accounts[2]});

		await expect(MIMOTokenLQEHKDM.transferFrom.call(addressBn3M5bv, addressXrCfTcT, uintju0sYfh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenp5AX551 = await MIMOToken.new({from: accounts[0]});
		const uintryQrnHv = BigInt("672")
		const addresszDiPJIO = accounts[4]
		const uintQaz5VVn = BigInt("1685")
		const boolGVRPR54 = await MIMOTokenp5AX551.transfer.call(addresszDiPJIO, uintryQrnHv, {from: accounts[5]});
		const uint256Hfe99zW = await MIMOTokenp5AX551.setMinFee.call(uintQaz5VVn, {from: accounts[2]});
		const uintOM1zY6 = await MIMOTokenp5AX551.totalSupply.call({from: accounts[2]});

		await expect(MIMOTokenp5AX551.transfer.call(addresszDiPJIO, uintryQrnHv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokengTEKKkJ = await MIMOToken.new({from: accounts[0]});
		const addressD50lXKI = accounts[3]
		const addressiUGcndr = accounts[1]
		const addressqm3wm7 = accounts[4]
		const uint2ymFzb = BigInt("898")
		const addressKD6drRP = accounts[2]
		const uintb1oTuPM = BigInt("892")
		const addressY5DJVzH = accounts[3]
		const addresspjZ03sJ = accounts[2]
		const uinttcOD2CO = BigInt("744")
		const addressk4B3FNd = accounts[4]
		const uintlALR6HJ = await MIMOTokengTEKKkJ.allowance.call(addressiUGcndr, addressD50lXKI, {from: accounts[1]});
		const uintyGECYkW = await MIMOTokengTEKKkJ.totalSupply.call({from: accounts[4]});
		const uintDyKRkyP = await MIMOTokengTEKKkJ.balanceOf.call(addressqm3wm7, {from: accounts[0]});
		const boolECjfx6b = await MIMOTokengTEKKkJ.transfer.call(addressKD6drRP, uint2ymFzb, {from: accounts[3]});
		const boollU7uuLC = await MIMOTokengTEKKkJ.transferFrom.call(addresspjZ03sJ, addressY5DJVzH, uintb1oTuPM, {from: accounts[4]});
		const boolPiqqEoc = await MIMOTokengTEKKkJ.transfer.call(addressk4B3FNd, uinttcOD2CO, {from: accounts[0]});

		assert.equal(uintDyKRkyP, BigInt("0"))
		assert.equal(uintlALR6HJ, BigInt("0"))
		assert.equal(uintyGECYkW, BigInt("16000000000000000000000000"))
		await expect(MIMOTokengTEKKkJ.transfer.call(addressKD6drRP, uint2ymFzb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenUqtOqOn = await MIMOToken.new({from: accounts[5]});
		const uintxBvHLtV = BigInt("1784")
		const addressrbZpMoN = accounts[4]
		const uintr4jZpkz = BigInt("1925")
		const addressTqX5ANK = accounts[1]
		const boolRvLJTO3 = await MIMOTokenUqtOqOn.approve.call(addressrbZpMoN, uintxBvHLtV, {from: accounts[3]});
		const boolY3MxKAS = await MIMOTokenUqtOqOn.approve.call(addressTqX5ANK, uintr4jZpkz, {from: accounts[0]});
		const uintj6Iv3p8 = await MIMOTokenUqtOqOn.totalSupply.call({from: accounts[1]});

		assert.equal(boolRvLJTO3, true)
		assert.equal(boolY3MxKAS, true)
		assert.equal(uintj6Iv3p8, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenNkwsnca = await MIMOToken.new({from: accounts[5]});
		const uintx4ffKXS = BigInt("1359")
		const uinty3ECiSy = BigInt("932")
		const addressIx5Sm19 = "0x0000000000000000000000000000000000000001"
		const addressKOKiBEs = accounts[1]
		const uint256wy373l6 = await MIMOTokenNkwsnca.getFee.call(uintx4ffKXS, {from: accounts[3]});
		const boolEftmPM8 = await MIMOTokenNkwsnca.transferFrom.call(addressKOKiBEs, addressIx5Sm19, uinty3ECiSy, {from: accounts[0]});

		assert.equal(uint256wy373l6, BigInt("50000000000000000"))
		await expect(MIMOTokenNkwsnca.transferFrom.call(addressKOKiBEs, addressIx5Sm19, uinty3ECiSy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenJG1plDl = await MIMOToken.new({from: accounts[3]});
		const addressGlvH9CE = accounts[3]
		const uintld98xSN = BigInt("1953")
		const uintCna5gVJ = BigInt("232")
		const addressbsbVwdP = "0x0000000000000000000000000000000000000001"
		const addressu2f3pju = "0x0000000000000000000000000000000000000001"
		const addressgVXlAE = accounts[0]
		const uintIMMWKDK = BigInt("1097")
		const addresshz6TMc1 = accounts[0]
		const addressGyZaPSz = accounts[1]
		const uintCI17XsH = await MIMOTokenJG1plDl.balanceOf.call(addressGlvH9CE, {from: accounts[2]});
		const uint256xAYkeDP = await MIMOTokenJG1plDl.setFeeRate.call(uintld98xSN, {from: accounts[0]});
		const boolMW3zj9I = await MIMOTokenJG1plDl.approve.call(addressbsbVwdP, uintCna5gVJ, {from: accounts[5]});
		const uintlrSwN9h = await MIMOTokenJG1plDl.allowance.call(addressgVXlAE, addressu2f3pju, {from: accounts[2]});
		const boolNzvjFGs = await MIMOTokenJG1plDl.approve.call(addresshz6TMc1, uintIMMWKDK, {from: accounts[1]});
		const uintSGZ1ot = await MIMOTokenJG1plDl.balanceOf.call(addressGyZaPSz, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolMW3zj9I, true)
		assert.equal(boolNzvjFGs, true)
		assert.equal(uintCI17XsH, BigInt("0"))
		assert.equal(uintSGZ1ot, BigInt("0"))
		assert.equal(uintlrSwN9h, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenNkwsnca = await MIMOToken.new({from: accounts[5]});
		const uint7QGP6A = BigInt("1359")
		const uintNmuZeQa = BigInt("1032")
		const uintkWtmU3T = BigInt("932")
		const addressQ5HcKOi = "0x0000000000000000000000000000000000000000"
		const addressrq3uHJc = accounts[1]
		const uint256wy373l6 = await MIMOTokenNkwsnca.getFee.call(uint7QGP6A, {from: accounts[3]});
		const uint256d34XUhF = await MIMOTokenNkwsnca.setFeeRate.call(uintNmuZeQa, {from: accounts[0]});
		const boolEftmPM8 = await MIMOTokenNkwsnca.transferFrom.call(addressrq3uHJc, addressQ5HcKOi, uintkWtmU3T, {from: accounts[0]});
		const uintlux0CF = await MIMOTokenNkwsnca.totalSupply.call({from: accounts[0]});

		assert.equal(uint256wy373l6, BigInt("50000000000000000"))
		await expect(MIMOTokenNkwsnca.transferFrom.call(addressrq3uHJc, addressQ5HcKOi, uintkWtmU3T, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenWY6ikdB = await MIMOToken.new({from: accounts[2]});
		const addressBeinL5O = accounts[1]
		const uintqYrteAh = BigInt("845")
		const uintgWR3LUy = BigInt("543")
		const uintf3CS9UX = BigInt("1772")
		const uintYrrYEyd = BigInt("126")
		const addressQm0LJb = accounts[4]
		const addresshwcIbfX = accounts[3]
		const uintxwpgYcJ = BigInt("1260")
		const uintOY1s8es = await MIMOTokenWY6ikdB.balanceOf.call(addressBeinL5O, {from: accounts[1]});
		const uint2565lO6WG = await MIMOTokenWY6ikdB.setMinFee.call(uintqYrteAh, {from: accounts[4]});
		const uint256DFI9R9f = await MIMOTokenWY6ikdB.setFeeRate.call(uintgWR3LUy, {from: "0x0000000000000000000000000000000000000001"});
		const uint256wknz7C3 = await MIMOTokenWY6ikdB.setMinFee.call(uintf3CS9UX, {from: accounts[2]});
		const boolxqb3riR = await MIMOTokenWY6ikdB.transferFrom.call(addresshwcIbfX, addressQm0LJb, uintYrrYEyd, {from: accounts[4]});
		const uint256kyzn3yZ = await MIMOTokenWY6ikdB.getFee.call(uintxwpgYcJ, {from: accounts[2]});

		assert.equal(uintOY1s8es, BigInt("0"))
		await expect(MIMOTokenWY6ikdB.transferFrom.call(addresshwcIbfX, addressQm0LJb, uintYrrYEyd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenXP5BmDN = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintItl3whR = BigInt("1159")
		const addressDANTw4t = accounts[3]
		const addressYqKRbtD = accounts[4]
		const addresswT0wyE7 = accounts[1]
		const boolDXcFRtu = await MIMOTokenXP5BmDN.approve.call(addressDANTw4t, uintItl3whR, {from: accounts[1]});
		const uintu6JtsLs = await MIMOTokenXP5BmDN.allowance.call(addresswT0wyE7, addressYqKRbtD, {from: accounts[1]});
	});
})