const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinooqLQLd = await DJCoin.new({from: accounts[0]});
		const uintBuGcM5 = BigInt("376")
		const addresse2xdqyT = accounts[3]
		const uintCHNWm34 = BigInt("86")
		const addressvWteuAo = accounts[1]
		const addresscSDz5ZB = accounts[3]
		const addressDaASU0w = accounts[1]
		const uintSFeKoae = BigInt("1562")
		const addressAXrxmO = accounts[2]
		const boolJi9Hdt8 = await DJCoinooqLQLd.approve.call(addresse2xdqyT, uintBuGcM5, {from: accounts[1]});
		const boolJhH67V = await DJCoinooqLQLd.approve.call(addressvWteuAo, uintCHNWm34, {from: accounts[4]});
		const addressHN5G5t9 = await DJCoinooqLQLd.transferOwnership.call(addresscSDz5ZB, {from: accounts[2]});
		const addressQ48Dmf3 = await DJCoinooqLQLd.transferOwnership.call(addressDaASU0w, {from: accounts[2]});
		await DJCoinooqLQLd.renounceOwnership.call({from: accounts[3]});
		const boolnuf14fX = await DJCoinooqLQLd.approve.call(addressAXrxmO, uintSFeKoae, {from: accounts[0]});

		assert.equal(boolJhH67V, true)
		assert.equal(boolJi9Hdt8, true)
		await expect(DJCoinooqLQLd.transferOwnership.call(addresscSDz5ZB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoineOPIVhS = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzAQCl8n = BigInt("1377")
		const addressfAzGr2X = accounts[2]
		const uintSOrW6dH = BigInt("523")
		const boolBT2rPM = await DJCoineOPIVhS.transfer.call(addressfAzGr2X, uintzAQCl8n, {from: accounts[0]});
		const boolP7si3Q = await DJCoineOPIVhS.changetokensPerBlock.call(uintSOrW6dH, {from: accounts[3]});
	});

	it('test for DJCoin', async () => {
		const DJCoinyXknrtk = await DJCoin.new({from: accounts[2]});
		const uintqCsggrT = BigInt("1428")
		const addresshPbtxJe = accounts[1]
		const uintcRiOxpH = BigInt("45")
		const addressfynQSJv = accounts[4]
		const uintON6G2su = BigInt("982")
		const addressKV34TDt = accounts[1]
		const addresso7FL83R = accounts[5]
		const boolONZw0FA = await DJCoinyXknrtk.transfer.call(addresshPbtxJe, uintqCsggrT, {from: accounts[2]});
		const boolt2C5vEh = await DJCoinyXknrtk.decreaseAllowance.call(addressfynQSJv, uintcRiOxpH, {from: accounts[0]});
		const boolsiM1yrR = await DJCoinyXknrtk.decreaseAllowance.call(addressKV34TDt, uintON6G2su, {from: accounts[2]});
		await DJCoinyXknrtk.onlyOwner.call({from: accounts[4]});
		const uint256y7TY6zn = await DJCoinyXknrtk.balanceOf.call(addresso7FL83R, {from: accounts[0]});
		await DJCoinyXknrtk.onlyOwner.call({from: accounts[3]});

		assert.equal(boolONZw0FA, true)
		assert.equal(boolsiM1yrR, true)
		assert.equal(boolt2C5vEh, true)
		await expect(DJCoinyXknrtk.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinH08qCML = await DJCoin.new({from: accounts[5]});
		const addressAm0eGis = accounts[2]
		const addressiwOCM60 = accounts[1]
		const addressi2BET0I = "0x0000000000000000000000000000000000000001"
		const uinth7RKik = BigInt("1019")
		const uintTq7i1HE = BigInt("19")
		const uintWJDN7pQ = BigInt("1751")
		const addressMjeD3cE = accounts[2]
		const uintS6J3y4O = BigInt("994")
		const addressUgUAYR5 = accounts[4]
		const uint256Pi0ksOQ = await DJCoinH08qCML.balanceOf.call(addressAm0eGis, {from: accounts[2]});
		const uint256jmpmYC2 = await DJCoinH08qCML.allowance.call(addressi2BET0I, addressiwOCM60, {from: accounts[0]});
		const uint256cRsxsO8 = await DJCoinH08qCML.burn.call(uintTq7i1HE, uinth7RKik, {from: "0x0000000000000000000000000000000000000001"});
		const boolsOwZXy = await DJCoinH08qCML.increaseAllowance.call(addressMjeD3cE, uintWJDN7pQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolBt3Rabq = await DJCoinH08qCML.decreaseAllowance.call(addressUgUAYR5, uintS6J3y4O, {from: accounts[5]});

		assert.equal(uint256Pi0ksOQ, BigInt("0"))
		assert.equal(uint256jmpmYC2, BigInt("0"))
		await expect(DJCoinH08qCML.burn.call(uintTq7i1HE, uinth7RKik, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinbHd6lUq = await DJCoin.new({from: accounts[4]});
		const uintk3ykZXe = BigInt("226")
		const addressAoAdES4 = accounts[0]
		const addressi1zoWsY = accounts[4]
		const addresstkEruqI = accounts[3]
		const addressnKLyK5 = accounts[3]
		const boolpQWv9i1 = await DJCoinbHd6lUq.changetokensPerBlock.call(uintk3ykZXe, {from: accounts[5]});
		const uint256sjmUVnY = await DJCoinbHd6lUq.allowance.call(addressi1zoWsY, addressAoAdES4, {from: accounts[5]});
		const addressVFdDR56 = await DJCoinbHd6lUq.validRecipient.call(addresstkEruqI, {from: accounts[2]});
		const addressQrb0tdc = await DJCoinbHd6lUq.validRecipient.call(addressnKLyK5, {from: accounts[1]});

		assert.equal(boolpQWv9i1, true)
		assert.equal(uint256sjmUVnY, BigInt("0"))
		await expect(DJCoinbHd6lUq.validRecipient.call(addresstkEruqI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoina0O5gKU = await DJCoin.new({from: accounts[2]});
		const uintwy1BIQd = BigInt("192")
		const addressG5wJsb = accounts[5]
		const uintxn1KhDj = BigInt("1559")
		const addresscFON2s4 = accounts[0]
		const uintGlew3fg = BigInt("825")
		const addressEpn9v6Y = accounts[0]
		const boolxmTNdhx = await DJCoina0O5gKU.transfer.call(addressG5wJsb, uintwy1BIQd, {from: accounts[5]});
		await DJCoina0O5gKU.onlyOwner.call({from: accounts[3]});
		const bool26Uwrj = await DJCoina0O5gKU.increaseAllowance.call(addresscFON2s4, uintxn1KhDj, {from: accounts[2]});
		const boolLZpa9LY = await DJCoina0O5gKU.decreaseAllowance.call(addressEpn9v6Y, uintGlew3fg, {from: accounts[1]});

		await expect(DJCoina0O5gKU.transfer.call(addressG5wJsb, uintwy1BIQd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinikwG29U = await DJCoin.new({from: accounts[3]});
		const addressYTLQYOd = accounts[2]
		const addresse05nd2D = accounts[3]
		const addressQqE7g0 = "0x0000000000000000000000000000000000000001"
		const uintnixedq = BigInt("770")
		const uintcfYwWqI = BigInt("70")
		const uint256k9WE7s8 = await DJCoinikwG29U.allowance.call(addresse05nd2D, addressYTLQYOd, {from: accounts[5]});
		const addressb031SLB = await DJCoinikwG29U.transferOwnership.call(addressQqE7g0, {from: accounts[3]});
		const uint256F6O3TU = await DJCoinikwG29U.burn.call(uintcfYwWqI, uintnixedq, {from: accounts[3]});

		assert.equal(uint256F6O3TU, BigInt("1938300000000"))
		assert.equal(uint256k9WE7s8, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinsJE2JML = await DJCoin.new({from: accounts[4]});
		const uintCcSLm4m = BigInt("1815")
		const addressLDXIjAY = accounts[3]
		const addressyHg6e93 = accounts[0]
		const addressGbUWomA = accounts[0]
		const addressfpkZyLF = accounts[1]
		const uintO6fSqg = BigInt("452")
		const address3TnNKA = accounts[3]
		const boolCYHPLKZ = await DJCoinsJE2JML.transferFrom.call(addressyHg6e93, addressLDXIjAY, uintCcSLm4m, {from: accounts[3]});
		const addresssNUuJ8y = await DJCoinsJE2JML.validRecipient.call(addressGbUWomA, {from: accounts[2]});
		const addressMl0E0q = await DJCoinsJE2JML.transferOwnership.call(addressfpkZyLF, {from: accounts[0]});
		const boolEiaUyqx = await DJCoinsJE2JML.decreaseAllowance.call(address3TnNKA, uintO6fSqg, {from: accounts[0]});

		await expect(DJCoinsJE2JML.transferFrom.call(addressyHg6e93, addressLDXIjAY, uintCcSLm4m, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoina0O5gKU = await DJCoin.new({from: accounts[2]});
		const uintj90UMhT = BigInt("1580")
		const addressXT4gnFl = accounts[0]
		const bool26Uwrj = await DJCoina0O5gKU.increaseAllowance.call(addressXT4gnFl, uintj90UMhT, {from: accounts[2]});

		assert.equal(bool26Uwrj, true)
	});

	it('test for DJCoin', async () => {
		const DJCoina0O5gKU = await DJCoin.new({from: accounts[2]});
		const uintjv3N6s = BigInt("1580")
		const addresspRSCCWo = accounts[1]
		const uint256RSjwICC = await DJCoina0O5gKU.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const bool26Uwrj = await DJCoina0O5gKU.increaseAllowance.call(addresspRSCCWo, uintjv3N6s, {from: accounts[2]});

		assert.equal(bool26Uwrj, true)
		assert.equal(uint256RSjwICC, BigInt("2100000000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinw1eZYxz = await DJCoin.new({from: accounts[1]});
		const uintwi0r1NC = BigInt("1539")
		const addressDiEvhQI = accounts[3]
		const addressF6ujFLJ = "0x0000000000000000000000000000000000000001"
		const uintHCa6XAJ = BigInt("1017")
		const uintV4Tm3vO = BigInt("660")
		const addresswtbiNNX = await DJCoinw1eZYxz.owner.call({from: accounts[0]});
		const boolchWJJeu = await DJCoinw1eZYxz.transferFrom.call(addressF6ujFLJ, addressDiEvhQI, uintwi0r1NC, {from: accounts[3]});
		const uint256YXqrV4 = await DJCoinw1eZYxz.totalSupply.call({from: accounts[2]});
		const uint256sRZGzQz = await DJCoinw1eZYxz.burn.call(uintV4Tm3vO, uintHCa6XAJ, {from: accounts[2]});

		assert.equal(addresswtbiNNX, 0x8632430D93B9a5BC6Be1B4E4C5368AF72cACB4A9)
		await expect(DJCoinw1eZYxz.transferFrom.call(addressF6ujFLJ, addressDiEvhQI, uintwi0r1NC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinnSbKOpf = await DJCoin.new({from: accounts[2]});
		const addressSNKbMCX = accounts[2]
		const addressIX6Z7Ul = accounts[3]
		const addressCRLHjiM = accounts[4]
		const addressfzA5Ds1 = accounts[4]
		const uintkapuOBi = BigInt("517")
		const addressSCmpQLY = accounts[0]
		const addresslXwiup = accounts[2]
		const uintlLhIgYr = BigInt("1385")
		const addressWGbzujz = accounts[4]
		const uint256QfqKwoD = await DJCoinnSbKOpf.balanceOf.call(addressSNKbMCX, {from: accounts[0]});
		const uint256FelSsLV = await DJCoinnSbKOpf.allowance.call(addressCRLHjiM, addressIX6Z7Ul, {from: accounts[0]});
		await DJCoinnSbKOpf.renounceOwnership.call({from: accounts[2]});
		const addressnTaqsbY = await DJCoinnSbKOpf.validRecipient.call(addressfzA5Ds1, {from: accounts[3]});
		const booltNJhfMt = await DJCoinnSbKOpf.transferFrom.call(addresslXwiup, addressSCmpQLY, uintkapuOBi, {from: accounts[0]});
		const boolBp4XRtT = await DJCoinnSbKOpf.increaseAllowance.call(addressWGbzujz, uintlLhIgYr, {from: accounts[3]});

		assert.equal(uint256FelSsLV, BigInt("0"))
		assert.equal(uint256QfqKwoD, BigInt("2100000000000"))
		await expect(DJCoinnSbKOpf.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoina0O5gKU = await DJCoin.new({from: accounts[2]});
		const uintQeaTGDq = BigInt("0")
		const address5X12bv = accounts[2]
		const addressCd96JPh = accounts[1]
		const addressavw3aWM = accounts[4]
		const boolCNz36yI = await DJCoina0O5gKU.transfer.call(address5X12bv, uintQeaTGDq, {from: accounts[0]});
		const uint2565ZA1ik = await DJCoina0O5gKU.allowance.call(addressavw3aWM, addressCd96JPh, {from: accounts[3]});

		assert.equal(boolCNz36yI, true)
		assert.equal(uint2565ZA1ik, BigInt("0"))
	});
})