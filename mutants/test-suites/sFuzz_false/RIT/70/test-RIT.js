const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITCCslQCL = await RIT.new({from: accounts[3]});
		const uintxqtBeiz = BigInt("768")
		const addressJx2bZM = accounts[5]
		const uint8v9Zak9v = await RITCCslQCL.decimals.call({from: accounts[3]});
		const string1f0JNn = await RITCCslQCL.name.call({from: accounts[3]});
		const stringwcy8Da5 = await RITCCslQCL.symbol.call({from: accounts[0]});
//		const boolTxGF8Yz = await RITCCslQCL.decreaseAllowance.call(addressJx2bZM, uintxqtBeiz, {from: accounts[4]});

		assert.equal(string1f0JNn, "Real Estate Investment Token")
		assert.equal(stringwcy8Da5, "RIT 2.0")
		assert.equal(uint8v9Zak9v, BigInt("18"))
		await expect(RITCCslQCL.decreaseAllowance.call(addressJx2bZM, uintxqtBeiz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITHDJRSZP = await RIT.new({from: accounts[3]});
		const uintpHZYDRf = BigInt("193")
		const addressHRaf1p = accounts[5]
		const uintaXApJeH = BigInt("1892")
		const addresst3QKd9M = accounts[1]
		const boolzCa1BX = await RITHDJRSZP.increaseAllowance.call(addressHRaf1p, uintpHZYDRf, {from: accounts[4]});
//		const boollEa82jg = await RITHDJRSZP.decreaseAllowance.call(addresst3QKd9M, uintaXApJeH, {from: accounts[3]});
//		const uint256RPqDxHW = await RITHDJRSZP.totalSupply.call({from: accounts[4]});
//		const uint8VRWDeud = await RITHDJRSZP.decimals.call({from: accounts[0]});
//		const uint256Dppbmb = await RITHDJRSZP.totalSupply.call({from: accounts[0]});

		assert.equal(boolzCa1BX, true)
		await expect(RITHDJRSZP.decreaseAllowance.call(addresst3QKd9M, uintaXApJeH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITwkxc1M5 = await RIT.new({from: accounts[2]});
		const addressRxK0ROz = accounts[2]
		const uintSRRWjwm = BigInt("1766")
		const addressRJFuFPz = accounts[1]
		const uintAwM4SQ = BigInt("668")
		const addressvoM3OCr = accounts[2]
		const addressPfGTRkK = accounts[3]
		const uint256f3vHIuf = await RITwkxc1M5.balanceOf.call(addressRxK0ROz, {from: accounts[4]});
//		const boolLYXwPF = await RITwkxc1M5.transfer.call(addressRJFuFPz, uintSRRWjwm, {from: accounts[2]});
//		const stringvLSV29m = await RITwkxc1M5.symbol.call({from: accounts[3]});
//		const boolo1Kk5y = await RITwkxc1M5.transferFrom.call(addressPfGTRkK, addressvoM3OCr, uintAwM4SQ, {from: accounts[0]});
//		const uint8LjVM2hM = await RITwkxc1M5.decimals.call({from: accounts[2]});
//		const stringbUQjUlE = await RITwkxc1M5.symbol.call({from: accounts[0]});

		assert.equal(uint256f3vHIuf, BigInt("0"))
		await expect(RITwkxc1M5.transfer.call(addressRJFuFPz, uintSRRWjwm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITWRbKOUt = await RIT.new({from: accounts[1]});
		const uintaTdRc0a = BigInt("562")
		const addressjMhcT8T = accounts[2]
		const uintgWpRSka = BigInt("1272")
		const address6yZ8rj = accounts[1]
		const uintnRx7ZmT = BigInt("1044")
		const addressvKbxtSq = accounts[1]
		const addressG7UolUx = accounts[0]
		const addressakee8XN = accounts[1]
		const boolVPlsp3z = await RITWRbKOUt.approve.call(addressjMhcT8T, uintaTdRc0a, {from: accounts[3]});
//		const boolqVmYeUT = await RITWRbKOUt.decreaseAllowance.call(address6yZ8rj, uintgWpRSka, {from: accounts[3]});
//		const boolyFmusDn = await RITWRbKOUt.decreaseAllowance.call(addressvKbxtSq, uintnRx7ZmT, {from: accounts[1]});
//		const uint256geqJeKm = await RITWRbKOUt.allowance.call(addressakee8XN, addressG7UolUx, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolVPlsp3z, true)
		await expect(RITWRbKOUt.decreaseAllowance.call(address6yZ8rj, uintgWpRSka, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITOl0ECzb = await RIT.new({from: accounts[5]});
		const addresszkUAchG = accounts[3]
		const address8UgsJf = accounts[4]
		const uintBSjFtYF = BigInt("729")
		const addressmaQ782w = accounts[2]
		const uintg1m4DPy = BigInt("341")
		const addressM9Z4JO5 = accounts[1]
		const uintWkk5ioI = BigInt("868")
		const addressSeKGZWR = accounts[3]
		const uintGZGfn4J = BigInt("1473")
		const uint256HjQcpho = await RITOl0ECzb.allowance.call(address8UgsJf, addresszkUAchG, {from: accounts[3]});
		const boolRkKcVYP = await RITOl0ECzb.increaseAllowance.call(addressmaQ782w, uintBSjFtYF, {from: accounts[3]});
		const boolhAo2a1m = await RITOl0ECzb.increaseAllowance.call(addressM9Z4JO5, uintg1m4DPy, {from: accounts[4]});
//		const boolVs2ZXT4 = await RITOl0ECzb.transfer.call(addressSeKGZWR, uintWkk5ioI, {from: accounts[2]});
//		const stringX0J4zt2 = await RITOl0ECzb.name.call({from: accounts[0]});
//		const uint256RG58Am8 = await RITOl0ECzb._burn.call(uintGZGfn4J, {from: accounts[0]});

		assert.equal(boolRkKcVYP, true)
		assert.equal(boolhAo2a1m, true)
		assert.equal(uint256HjQcpho, BigInt("0"))
		await expect(RITOl0ECzb.transfer.call(addressSeKGZWR, uintWkk5ioI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITAYIOqVQ = await RIT.new({from: accounts[2]});
		const uintDLQdds2 = BigInt("592")
		const addresstY0IGt2 = "0x0000000000000000000000000000000000000001"
		const addressgTAYV2X = accounts[1]
		const addressqlnvB4J = "0x0000000000000000000000000000000000000001"
		const addressGQSu23a = accounts[2]
		const uint256WR9UYQT = await RITAYIOqVQ.totalSupply.call({from: accounts[1]});
//		const boolXDWR99b = await RITAYIOqVQ.transferFrom.call(addressgTAYV2X, addresstY0IGt2, uintDLQdds2, {from: accounts[2]});
//		const uint256Hc8sRk2 = await RITAYIOqVQ.allowance.call(addressGQSu23a, addressqlnvB4J, {from: accounts[4]});
//		const stringnCbBGCO = await RITAYIOqVQ.symbol.call({from: accounts[0]});

		assert.equal(uint256WR9UYQT, BigInt("500000000000000000000000000"))
		await expect(RITAYIOqVQ.transferFrom.call(addressgTAYV2X, addresstY0IGt2, uintDLQdds2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITgpFSHzs = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwb3lAB7 = BigInt("1006")
		const addressS0gu2Qx = accounts[1]
		const addressISgct5I = accounts[4]
		const uintsxpyX79 = BigInt("104")
		const address0IMhsF = accounts[0]
		const addressKOG2bjw = accounts[2]
		const boolfQnIhFk = await RITgpFSHzs.transferFrom.call(addressISgct5I, addressS0gu2Qx, uintwb3lAB7, {from: accounts[1]});
		const stringHbNgSZd = await RITgpFSHzs.symbol.call({from: accounts[0]});
		const boolYKaZJzU = await RITgpFSHzs.transfer.call(address0IMhsF, uintsxpyX79, {from: accounts[2]});
		const uint256BXCQIcY = await RITgpFSHzs.balanceOf.call(addressKOG2bjw, {from: accounts[1]});
	});

	it('test for RIT', async () => {
		const RITqnVojWe = await RIT.new({from: accounts[3]});
		const uintTJCFE5T = BigInt("1636")
//		const uint256MkE2qxp = await RITqnVojWe._burn.call(uintTJCFE5T, {from: accounts[1]});
//		const stringaoZP39 = await RITqnVojWe.name.call({from: accounts[0]});

		await expect(RITqnVojWe._burn.call(uintTJCFE5T, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})