const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITubG8LXn = await RIT.new({from: accounts[2]});
		const uintI2whJiH = BigInt("1472")
		const addressNIn6jsB = accounts[2]
		const addressh646Ilg = accounts[1]
		const uinthpUV6H2 = BigInt("1496")
		const addresskTrMKKR = accounts[3]
		const uint256uiFfJfV = await RITubG8LXn.totalSupply.call({from: accounts[0]});
		const boolF7wnw1k = await RITubG8LXn.transfer.call(addressNIn6jsB, uintI2whJiH, {from: accounts[4]});
		const uint256XHp5PHZ = await RITubG8LXn.balanceOf.call(addressh646Ilg, {from: accounts[1]});
		const boolT7edDiP = await RITubG8LXn.approve.call(addresskTrMKKR, uinthpUV6H2, {from: accounts[1]});

		assert.equal(uint256uiFfJfV, BigInt("500000000000000000000000000"))
		await expect(RITubG8LXn.transfer.call(addressNIn6jsB, uintI2whJiH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITDEujcGp = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintqdeqTes = BigInt("1033")
		const addressswKYlYV = accounts[4]
		const addressBZxqOEG = accounts[3]
		const addresshEMyGna = accounts[3]
		const uintOsOfwUY = BigInt("1038")
		const addressgegxEui = accounts[1]
		const boolTCYMHKD = await RITDEujcGp.transfer.call(addressswKYlYV, uintqdeqTes, {from: accounts[0]});
		const uint8SoDIkuA = await RITDEujcGp.decimals.call({from: accounts[4]});
		const stringXWbR8qS = await RITDEujcGp.symbol.call({from: accounts[4]});
		const uint256PCyledE = await RITDEujcGp.allowance.call(addresshEMyGna, addressBZxqOEG, {from: accounts[1]});
		const uint256ZFlF7n7 = await RITDEujcGp.totalSupply.call({from: accounts[2]});
		const bool35aQpI = await RITDEujcGp.decreaseAllowance.call(addressgegxEui, uintOsOfwUY, {from: accounts[4]});
	});

	it('test for RIT', async () => {
		const RITI7oyK99 = await RIT.new({from: accounts[3]});
		const uintda9jESV = BigInt("1546")
		const addressdXdrVtZ = "0x0000000000000000000000000000000000000001"
		const uint8Bpwfaxb = await RITI7oyK99.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolrzp5ZcP = await RITI7oyK99.transfer.call(addressdXdrVtZ, uintda9jESV, {from: accounts[3]});

		assert.equal(uint8Bpwfaxb, BigInt("18"))
		await expect(RITI7oyK99.transfer.call(addressdXdrVtZ, uintda9jESV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITboqMaY4 = await RIT.new({from: accounts[5]});
		const uintvaJRqQv = BigInt("734")
		const addressYgjiKPa = accounts[2]
		const addressn3F2vAy = accounts[1]
		const uintbsxQunK = BigInt("1240")
		const addressOxM8AOQ = "0x0000000000000000000000000000000000000001"
		const addressaIiDDeK = accounts[0]
		const boolOvgW1k7 = await RITboqMaY4.increaseAllowance.call(addressYgjiKPa, uintvaJRqQv, {from: "0x0000000000000000000000000000000000000001"});
		const stringpVTHvSO = await RITboqMaY4.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256X8LLlA = await RITboqMaY4.balanceOf.call(addressn3F2vAy, {from: accounts[1]});
		const boolJ2c5mKS = await RITboqMaY4.transferFrom.call(addressaIiDDeK, addressOxM8AOQ, uintbsxQunK, {from: accounts[5]});

		assert.equal(boolOvgW1k7, true)
		assert.equal(stringpVTHvSO, "Real Estate Investment Token")
		assert.equal(uint256X8LLlA, BigInt("0"))
		await expect(RITboqMaY4.transferFrom.call(addressaIiDDeK, addressOxM8AOQ, uintbsxQunK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITbkYf6kS = await RIT.new({from: accounts[1]});
		const uintOCYVOal = BigInt("1290")
		const address8PGTMl = accounts[5]
		const uint256YPG0pdi = await RITbkYf6kS.totalSupply.call({from: accounts[2]});
		const boolRPiiBmD = await RITbkYf6kS.approve.call(address8PGTMl, uintOCYVOal, {from: accounts[2]});

		assert.equal(boolRPiiBmD, true)
		assert.equal(uint256YPG0pdi, BigInt("500000000000000000000000000"))
	});

	it('test for RIT', async () => {
		const RITGxHmHXS = await RIT.new({from: accounts[0]});
		const addressIEz6Ao = accounts[3]
		const addressLkVYHOR = accounts[0]
		const uintZFe2kds = BigInt("712")
		const addressLNoAhW2 = accounts[3]
		const addressae5Bo2c = "0x0000000000000000000000000000000000000001"
		const uint256CtZx8IP = await RITGxHmHXS.allowance.call(addressLkVYHOR, addressIEz6Ao, {from: accounts[2]});
		const stringlXT9oEf = await RITGxHmHXS.symbol.call({from: accounts[2]});
		const boolyUlbMHW = await RITGxHmHXS.transferFrom.call(addressae5Bo2c, addressLNoAhW2, uintZFe2kds, {from: accounts[2]});

		assert.equal(stringlXT9oEf, "RIT 2.0")
		assert.equal(uint256CtZx8IP, BigInt("0"))
		await expect(RITGxHmHXS.transferFrom.call(addressae5Bo2c, addressLNoAhW2, uintZFe2kds, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITMXORQs = await RIT.new({from: accounts[1]});
		const uinth1CcTI = BigInt("1762")
		const addressPfpfSb3 = accounts[3]
		const uintsziH4fU = BigInt("468")
		const addressSlqKGnV = accounts[0]
		const uintVI9PpG4 = BigInt("562")
		const addressx34Zec = accounts[4]
		const addressPS9H7y = accounts[4]
		const addresskTvjuVr = accounts[5]
		const boolhxp92CU = await RITMXORQs.increaseAllowance.call(addressPfpfSb3, uinth1CcTI, {from: "0x0000000000000000000000000000000000000001"});
		const boolZjVKYTc = await RITMXORQs.decreaseAllowance.call(addressSlqKGnV, uintsziH4fU, {from: accounts[4]});
		const boolaKsu2cN = await RITMXORQs.increaseAllowance.call(addressx34Zec, uintVI9PpG4, {from: accounts[1]});
		const uint256u8WNfsU = await RITMXORQs.allowance.call(addresskTvjuVr, addressPS9H7y, {from: accounts[1]});

		assert.equal(boolhxp92CU, true)
		await expect(RITMXORQs.decreaseAllowance.call(addressSlqKGnV, uintsziH4fU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITI7oyK99 = await RIT.new({from: accounts[3]});
		const uintfFHtAAj = BigInt("782")
		const addressZlnMN3 = accounts[1]
		const addressubDabJE = accounts[0]
		const uint8Bpwfaxb = await RITI7oyK99.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ARlxig = await RITI7oyK99._burn.call(uintfFHtAAj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256xhgmURb = await RITI7oyK99.allowance.call(addressubDabJE, addressZlnMN3, {from: accounts[1]});

		assert.equal(uint8Bpwfaxb, BigInt("18"))
		await expect(RITI7oyK99._burn.call(uintfFHtAAj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})