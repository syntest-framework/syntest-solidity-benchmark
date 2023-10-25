const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const stringhuLj5u4 = "3Ydb72VO1rbjOPdJDiQ1rUva3h"
		const stringlb1vW4j = "xK7aVuWKzeiWkmI3Ljdtpq3eeicRH6sh6a9yHXRDdTuNuAyCPGzGK3Fcg5kKapNcofeVqYF9RiRPIvCIcCy9zWCjR85T0"
		const uintKRwo0kD = BigInt("81")
		const TPAR7l28gw = await TPA.new(stringhuLj5u4, stringlb1vW4j, uintKRwo0kD, {from: accounts[0]});
		const addressXGT7fw = accounts[1]
		const boolEdXzCAV = await TPAR7l28gw.isOwner.call(addressXGT7fw, {from: accounts[2]});
		await TPAR7l28gw.pause.call({from: accounts[1]});
		const stringwYj3z4N = await TPAR7l28gw.symbol.call({from: accounts[1]});
	});

	it('test for TPA', async () => {
		const TPANradKHs = await TPA.new({from: accounts[3]});
		const addressBPMNID = accounts[3]
		const uintZ6F0kz = BigInt("419")
		const addresseFcaes0 = "0x0000000000000000000000000000000000000001"
		const addressm1dFt3z = await TPANradKHs.notFrozen.call(addressBPMNID, {from: accounts[2]});
		const boolFYlxik8 = await TPANradKHs.decreaseAllowance.call(addresseFcaes0, uintZ6F0kz, {from: accounts[2]});

		await expect(TPANradKHs.notFrozen.call(addressBPMNID, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAzVTFpkm = await TPA.new({from: accounts[4]});
		const addresso7fwYbC = accounts[5]
		const addressZQCu2Xo = accounts[1]
		const addressxl7u86Y = accounts[0]
		const addressbjENfZx = accounts[2]
		const uint256obZWc6 = await TPAzVTFpkm.allowance.call(addressZQCu2Xo, addresso7fwYbC, {from: accounts[3]});
		const boolr5bsUp = await TPAzVTFpkm.isAdmin.call(addressxl7u86Y, {from: accounts[3]});
		const boolF8ln8iH = await TPAzVTFpkm.freezeAccount.call(addressbjENfZx, {from: accounts[3]});

		assert.equal(boolr5bsUp, false)
		assert.equal(uint256obZWc6, BigInt("0"))
		await expect(TPAzVTFpkm.freezeAccount.call(addressbjENfZx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPALbGlN81 = await TPA.new({from: accounts[1]});
		const uintEF1pofD = BigInt("572")
		const addressofFnYiu = accounts[3]
		const addressYvgg2Vt = "0x0000000000000000000000000000000000000001"
		const uintLNcvVE = BigInt("728")
		const addressamVUNGX = "0x0000000000000000000000000000000000000001"
		const bool70jmoj = await TPALbGlN81.decreaseAllowance.call(addressofFnYiu, uintEF1pofD, {from: accounts[0]});
		const addresswA8uSU5 = await TPALbGlN81.transferOwnership.call(addressYvgg2Vt, {from: "0x0000000000000000000000000000000000000001"});
		const strings7UmHp = await TPALbGlN81.symbol.call({from: accounts[5]});
		const boolf05OqFO = await TPALbGlN81.increaseAllowance.call(addressamVUNGX, uintLNcvVE, {from: accounts[4]});

		await expect(TPALbGlN81.decreaseAllowance.call(addressofFnYiu, uintEF1pofD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAjfR2TOx = await TPA.new({from: accounts[0]});
		const uintofNHMrd = BigInt("623")
		const addressHLIbg9k = accounts[5]
		const addressDRMqx86 = "0x0000000000000000000000000000000000000001"
		const addresstZuzJo6 = accounts[2]
		const uintwtQ2pNq = BigInt("1401")
		const booltuqUc1 = await TPAjfR2TOx.transferFrom.call(addressDRMqx86, addressHLIbg9k, uintofNHMrd, {from: accounts[4]});
		await TPAjfR2TOx.unpause.call({from: accounts[5]});
		await TPAjfR2TOx.whenPaused.call({from: accounts[4]});
		const uint256JTMxKGU = await TPAjfR2TOx.totalSupply.call({from: accounts[0]});
		const addresszB0V65D = await TPAjfR2TOx.notFrozen.call(addresstZuzJo6, {from: accounts[1]});
		const uint256cMkWb13 = await TPAjfR2TOx.burn.call(uintwtQ2pNq, {from: accounts[2]});

		await expect(TPAjfR2TOx.transferFrom.call(addressDRMqx86, addressHLIbg9k, uintofNHMrd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAzVTFpkm = await TPA.new({from: accounts[4]});
		const addresstM3UuGS = accounts[5]
		const addressHlS67G = accounts[1]
		const addressKRL5BPh = accounts[1]
		const uintLUbNffK = BigInt("1879")
		const addresszld79Ai = accounts[1]
		const addressEayy0De = accounts[4]
		const addressgvE9oCJ = accounts[2]
		const uint256obZWc6 = await TPAzVTFpkm.allowance.call(addressHlS67G, addresstM3UuGS, {from: accounts[3]});
		const boolr5bsUp = await TPAzVTFpkm.isAdmin.call(addressKRL5BPh, {from: accounts[3]});
		const stringLhcjme4 = await TPAzVTFpkm.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolTsrDsUb = await TPAzVTFpkm.transferFrom.call(addressEayy0De, addresszld79Ai, uintLUbNffK, {from: accounts[1]});
		const boolF8ln8iH = await TPAzVTFpkm.freezeAccount.call(addressgvE9oCJ, {from: accounts[3]});

		assert.equal(boolr5bsUp, false)
		assert.equal(stringLhcjme4, "TPA")
		assert.equal(uint256obZWc6, BigInt("0"))
		await expect(TPAzVTFpkm.transferFrom.call(addressEayy0De, addresszld79Ai, uintLUbNffK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAzVTFpkm = await TPA.new({from: accounts[4]});
		const uintqeK13nW = BigInt("356")
		const uintnxYZIJ = BigInt("1853")
		const addressudsbC1D = accounts[5]
		const addressEA7JC65 = accounts[3]
		const uint256t8YQ5p6 = await TPAzVTFpkm.burn.call(uintqeK13nW, {from: accounts[3]});
		const boolX0CBmLs = await TPAzVTFpkm.unlock.call(addressudsbC1D, uintnxYZIJ, {from: accounts[3]});
		const boolF8ln8iH = await TPAzVTFpkm.freezeAccount.call(addressEA7JC65, {from: accounts[3]});

		await expect(TPAzVTFpkm.burn.call(uintqeK13nW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAzVTFpkm = await TPA.new({from: accounts[4]});
		const addressYNakpjQ = accounts[5]
		const addressQQmksPg = accounts[2]
		const addressA9E84Dx = "0x0000000000000000000000000000000000000001"
		const addressCNZA1r2 = accounts[1]
		const addressyMtBsQ5 = accounts[2]
		const uintao9Tl2 = BigInt("1921")
		const addresszB9iWOI = accounts[5]
		const uint256obZWc6 = await TPAzVTFpkm.allowance.call(addressQQmksPg, addressYNakpjQ, {from: accounts[3]});
		const uint256lkWWq26 = await TPAzVTFpkm.balanceOf.call(addressA9E84Dx, {from: accounts[1]});
		const boolYTsE2Oc = await TPAzVTFpkm.paused.call({from: accounts[2]});
		const boolr5bsUp = await TPAzVTFpkm.isAdmin.call(addressCNZA1r2, {from: accounts[3]});
		const boolF8ln8iH = await TPAzVTFpkm.freezeAccount.call(addressyMtBsQ5, {from: accounts[3]});
		const boolZX8ekIJ = await TPAzVTFpkm.decreaseAllowance.call(addresszB9iWOI, uintao9Tl2, {from: accounts[4]});
		await TPAzVTFpkm.whenPaused.call({from: accounts[0]});

		assert.equal(boolYTsE2Oc, false)
		assert.equal(boolr5bsUp, false)
		assert.equal(uint256lkWWq26, BigInt("0"))
		assert.equal(uint256obZWc6, BigInt("0"))
		await expect(TPAzVTFpkm.freezeAccount.call(addressyMtBsQ5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAzVTFpkm = await TPA.new({from: accounts[4]});
		const addressB41sczk = accounts[5]
		const address3sZx1J = accounts[1]
		const uinthZx6fK = BigInt("399")
		const addressY9Zj5H = accounts[1]
		const addressvt2gIU5 = accounts[1]
		const uinttF71ITq = BigInt("768")
		const addressbRwOJ4c = accounts[3]
		const addressF5h2c2o = accounts[2]
		const uintRPLHHnb = BigInt("1921")
		const addressha0ZYC = accounts[6]
		const uint256obZWc6 = await TPAzVTFpkm.allowance.call(address3sZx1J, addressB41sczk, {from: accounts[3]});
		const boolqhWugBT = await TPAzVTFpkm.transfer.call(addressY9Zj5H, uinthZx6fK, {from: accounts[0]});
		const boolr5bsUp = await TPAzVTFpkm.isAdmin.call(addressvt2gIU5, {from: accounts[3]});
		const boolZnpB2x = await TPAzVTFpkm.decreaseAllowance.call(addressbRwOJ4c, uinttF71ITq, {from: accounts[5]});
		const boolF8ln8iH = await TPAzVTFpkm.freezeAccount.call(addressF5h2c2o, {from: accounts[3]});
		const boolZX8ekIJ = await TPAzVTFpkm.decreaseAllowance.call(addressha0ZYC, uintRPLHHnb, {from: accounts[4]});

		assert.equal(uint256obZWc6, BigInt("0"))
		await expect(TPAzVTFpkm.transfer.call(addressY9Zj5H, uinthZx6fK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAzVTFpkm = await TPA.new({from: accounts[4]});
		const uintYdTiw3J = BigInt("777")
		const addressmwuF8vQ = accounts[1]
		const addressBKFURVA = accounts[6]
		const address1rLfQH = accounts[1]
		const addressrRWNXH = accounts[1]
		const uintCwBve5x = BigInt("1879")
		const addressnbwHGE5 = accounts[1]
		const addressr4ryOXz = accounts[4]
		const addresseCTPVyQ = accounts[5]
		const addressGN786x = accounts[2]
		const addressiMYvhcC = await TPAzVTFpkm.burnFrom.call(addressmwuF8vQ, uintYdTiw3J, {from: accounts[3]});
		const uint256obZWc6 = await TPAzVTFpkm.allowance.call(address1rLfQH, addressBKFURVA, {from: accounts[3]});
		const boolr5bsUp = await TPAzVTFpkm.isAdmin.call(addressrRWNXH, {from: accounts[3]});
		const stringLhcjme4 = await TPAzVTFpkm.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolTsrDsUb = await TPAzVTFpkm.transferFrom.call(addressr4ryOXz, addressnbwHGE5, uintCwBve5x, {from: accounts[1]});
		const addressSeSMPd4 = await TPAzVTFpkm.transferOwnership.call(addresseCTPVyQ, {from: accounts[2]});
		const boolF8ln8iH = await TPAzVTFpkm.freezeAccount.call(addressGN786x, {from: accounts[3]});

		await expect(TPAzVTFpkm.burnFrom.call(addressmwuF8vQ, uintYdTiw3J, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAzVTFpkm = await TPA.new({from: accounts[4]});
		const addresswDyglWo = accounts[4]
		const addressumDDppv = accounts[5]
		const addressXIceazr = accounts[1]
		const addressA1neDXo = accounts[2]
		const uintF4wZrfs = BigInt("1879")
		const addresskfBRPGl = accounts[1]
		const addressLVS9fI1 = accounts[4]
		const addressHCyxwPL = accounts[2]
		const addressGBWSzeY = await TPAzVTFpkm.transferOwnership.call(addresswDyglWo, {from: accounts[4]});
		const uint256obZWc6 = await TPAzVTFpkm.allowance.call(addressXIceazr, addressumDDppv, {from: accounts[3]});
		await TPAzVTFpkm.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolr5bsUp = await TPAzVTFpkm.isAdmin.call(addressA1neDXo, {from: accounts[3]});
		const uint8IlGWFG = await TPAzVTFpkm.decimals.call({from: accounts[1]});
		const stringLhcjme4 = await TPAzVTFpkm.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolTsrDsUb = await TPAzVTFpkm.transferFrom.call(addressLVS9fI1, addresskfBRPGl, uintF4wZrfs, {from: accounts[1]});
		const boolF8ln8iH = await TPAzVTFpkm.freezeAccount.call(addressHCyxwPL, {from: accounts[3]});

		assert.equal(uint256obZWc6, BigInt("0"))
		await expect(TPAzVTFpkm.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAzVTFpkm = await TPA.new({from: accounts[4]});
		const addresswrCKEaV = accounts[5]
		const addressQwmwJIT = accounts[2]
		const addressrD1DkJC = accounts[1]
		const addresswmE8AUD = accounts[2]
		const addressqplp1VH = accounts[2]
		const addressqs7lvht = accounts[2]
		const uint256obZWc6 = await TPAzVTFpkm.allowance.call(addressQwmwJIT, addresswrCKEaV, {from: accounts[3]});
		const boolr5bsUp = await TPAzVTFpkm.isAdmin.call(addressrD1DkJC, {from: accounts[3]});
		const address7peOVv = await TPAzVTFpkm.upgradeTo.call(addresswmE8AUD, {from: accounts[4]});
		const stringLhcjme4 = await TPAzVTFpkm.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolF8ln8iH = await TPAzVTFpkm.freezeAccount.call(addressqplp1VH, {from: accounts[3]});
		const boolUismprx = await TPAzVTFpkm.unfreezeAccount.call(addressqs7lvht, {from: accounts[0]});

		assert.equal(boolr5bsUp, false)
		assert.equal(stringLhcjme4, "TPA")
		assert.equal(uint256obZWc6, BigInt("0"))
		await expect(TPAzVTFpkm.freezeAccount.call(addressqplp1VH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAX7H93SW = await TPA.new({from: accounts[1]});
		const addresstUNJV2N = accounts[2]
		const uint256CajwCqV = await TPAX7H93SW.totalSupply.call({from: accounts[1]});
		const uint8tH0ncdz = await TPAX7H93SW.decimals.call({from: accounts[1]});
		const addressqpOlN4t = await TPAX7H93SW.notFrozen.call(addresstUNJV2N, {from: accounts[2]});

		assert.equal(uint256CajwCqV, BigInt("10000000000000000000000000000"))
		assert.equal(uint8tH0ncdz, BigInt("18"))
		await expect(TPAX7H93SW.notFrozen.call(addresstUNJV2N, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAzVTFpkm = await TPA.new({from: accounts[4]});
		const addressQ2QdtLH = accounts[2]
		const addressLAD7KBp = accounts[3]
		const addresspVU2Cog = accounts[1]
		const boolR5O5ZY = await TPAzVTFpkm.freezeAccount.call(addressQ2QdtLH, {from: accounts[4]});
		const boolF8ln8iH = await TPAzVTFpkm.freezeAccount.call(addressLAD7KBp, {from: accounts[3]});
		const addressGlDlcro = await TPAzVTFpkm.upgradeTo.call(addresspVU2Cog, {from: accounts[3]});

		assert.equal(boolR5O5ZY, true)
		await expect(TPAzVTFpkm.freezeAccount.call(addressLAD7KBp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAzVTFpkm = await TPA.new({from: accounts[4]});
		const addressxoqHeRo = accounts[3]
		const uintJ2DoQ0J = BigInt("1712")
		const address6vh0Qt = accounts[5]
		const addressHs24LS = accounts[2]
		const uintrsCxJ8 = BigInt("1777")
		const addressC1I0VuR = accounts[3]
		const stringmXbYotF = await TPAzVTFpkm.name.call({from: accounts[3]});
		const boolF8ln8iH = await TPAzVTFpkm.freezeAccount.call(addressxoqHeRo, {from: accounts[3]});
		const boolOoYPldZ = await TPAzVTFpkm.transferFrom.call(addressHs24LS, address6vh0Qt, uintJ2DoQ0J, {from: accounts[1]});
		const addressReDQ8GX = await TPAzVTFpkm.burnFrom.call(addressC1I0VuR, uintrsCxJ8, {from: accounts[1]});

		assert.equal(stringmXbYotF, "TPA")
		await expect(TPAzVTFpkm.freezeAccount.call(addressxoqHeRo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAzVTFpkm = await TPA.new({from: accounts[4]});
		const addressCvtxqHP = accounts[5]
		const addressUJaaFWo = accounts[2]
		const addresso9aup0I = "0x0000000000000000000000000000000000000001"
		const addressWZ4B74 = accounts[2]
		const uintnYSycof = BigInt("989")
		const addresscaxBRMZ = accounts[1]
		const address98jX6e = accounts[2]
		const uintxhkwFZD = BigInt("1921")
		const addresshOkcovm = accounts[5]
		const uint256obZWc6 = await TPAzVTFpkm.allowance.call(addressUJaaFWo, addressCvtxqHP, {from: accounts[3]});
		const uint256lkWWq26 = await TPAzVTFpkm.balanceOf.call(addresso9aup0I, {from: accounts[1]});
		const boolYTsE2Oc = await TPAzVTFpkm.paused.call({from: accounts[2]});
		const boolr5bsUp = await TPAzVTFpkm.isAdmin.call(addressWZ4B74, {from: accounts[3]});
		const bool6xuZBW = await TPAzVTFpkm.approve.call(addresscaxBRMZ, uintnYSycof, {from: accounts[0]});
		const boolF8ln8iH = await TPAzVTFpkm.freezeAccount.call(address98jX6e, {from: accounts[3]});
		const boolZX8ekIJ = await TPAzVTFpkm.decreaseAllowance.call(addresshOkcovm, uintxhkwFZD, {from: accounts[4]});
		await TPAzVTFpkm.whenPaused.call({from: accounts[0]});

		assert.equal(bool6xuZBW, true)
		assert.equal(boolYTsE2Oc, false)
		assert.equal(boolr5bsUp, false)
		assert.equal(uint256lkWWq26, BigInt("0"))
		assert.equal(uint256obZWc6, BigInt("0"))
		await expect(TPAzVTFpkm.freezeAccount.call(address98jX6e, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAzVTFpkm = await TPA.new({from: accounts[4]});
		const addressHxCHdzt = accounts[3]
		const uintLHt4eh = BigInt("963")
		const addressCmZrOZq = accounts[5]
		const addresssMi1cA = accounts[3]
		const booliTaCuFu = await TPAzVTFpkm.unfreezeAccount.call(addressHxCHdzt, {from: accounts[4]});
		const boolXialVy = await TPAzVTFpkm.transfer.call(addressCmZrOZq, uintLHt4eh, {from: accounts[1]});
		const boolF8ln8iH = await TPAzVTFpkm.freezeAccount.call(addresssMi1cA, {from: accounts[3]});

		await expect(TPAzVTFpkm.unfreezeAccount.call(addressHxCHdzt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAzVTFpkm = await TPA.new({from: accounts[4]});
		const addressYZZc5uY = accounts[3]
		await TPAzVTFpkm.renounceAdmin.call({from: accounts[5]});
		const boolF8ln8iH = await TPAzVTFpkm.freezeAccount.call(addressYZZc5uY, {from: accounts[3]});

		await expect(TPAzVTFpkm.renounceAdmin.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAikyDehu = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const uintaj90vH3 = BigInt("198")
		const uintI4kXKwg = BigInt("1892")
		const addressdiF4LPk = accounts[5]
		const uintRbCEvV1 = BigInt("1606")
		const addressDokUk0e = accounts[2]
		const addressCMv4i2J = accounts[3]
		const addressiep8iUx = accounts[1]
		const boolsw7jyy3 = await TPAikyDehu.lock.call(addressdiF4LPk, uintI4kXKwg, uintaj90vH3, {from: accounts[0]});
		const booleTeYg69 = await TPAikyDehu.decreaseAllowance.call(addressDokUk0e, uintRbCEvV1, {from: accounts[4]});
		const addresssi3JQ6W = await TPAikyDehu.notFrozen.call(addressCMv4i2J, {from: accounts[0]});
		const uint256nsJTnON = await TPAikyDehu.balanceOf.call(addressiep8iUx, {from: accounts[3]});
	});

	it('test for TPA', async () => {
		const TPAzVTFpkm = await TPA.new({from: accounts[4]});
		const uinteLZwPSc = BigInt("421")
		const addressg5dXBT = accounts[2]
		const addressuhR7PiJ = accounts[3]
		const boolGHV5N3u = await TPAzVTFpkm.increaseAllowance.call(addressg5dXBT, uinteLZwPSc, {from: accounts[2]});
		const boolF8ln8iH = await TPAzVTFpkm.freezeAccount.call(addressuhR7PiJ, {from: accounts[3]});

		assert.equal(boolGHV5N3u, true)
		await expect(TPAzVTFpkm.freezeAccount.call(addressuhR7PiJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAzVTFpkm = await TPA.new({from: accounts[4]});
		const addressnC3p8b = accounts[4]
		const uintHU87mkR = BigInt("706")
		const addressJfXqWAo = "0x0000000000000000000000000000000000000001"
		const booleuYBqw = await TPAzVTFpkm.isOwner.call(addressnC3p8b, {from: "0x0000000000000000000000000000000000000001"});
		const booljqEy6D3 = await TPAzVTFpkm.transfer.call(addressJfXqWAo, uintHU87mkR, {from: accounts[3]});

		assert.equal(booleuYBqw, true)
		await expect(TPAzVTFpkm.transfer.call(addressJfXqWAo, uintHU87mkR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAzVTFpkm = await TPA.new({from: accounts[4]});
		const addressdanEnfw = "0x0000000000000000000000000000000000000001"
		await TPAzVTFpkm.renounceAdmin.call({from: accounts[4]});
		const stringVXbGo36 = await TPAzVTFpkm.symbol.call({from: accounts[5]});
		await TPAzVTFpkm.renounceAdmin.call({from: accounts[4]});
		const uint256lkWWq26 = await TPAzVTFpkm.balanceOf.call(addressdanEnfw, {from: accounts[1]});

		await expect(TPAzVTFpkm.renounceAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})