const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenZC840y = await MIMOToken.new({from: accounts[2]});
		const uintIlmg2P4 = BigInt("156")
		const uintA4dK8Pl = BigInt("1635")
		const uintC9AN1z2 = BigInt("453")
		const uintBb0bQ7N = BigInt("551")
		const addressVAAAVP0 = accounts[4]
		const addressGKG8Vj = accounts[0]
		const uint256GaEAHDF = await MIMOTokenZC840y.setMinFee.call(uintIlmg2P4, {from: accounts[5]});
		const uint256HSNwWWT = await MIMOTokenZC840y.getFee.call(uintA4dK8Pl, {from: accounts[0]});
		const uint256KuIyxVl = await MIMOTokenZC840y.getFee.call(uintC9AN1z2, {from: accounts[4]});
		const boolC1NHfGS = await MIMOTokenZC840y.transferFrom.call(addressGKG8Vj, addressVAAAVP0, uintBb0bQ7N, {from: accounts[0]});

		assert.equal(uint256HSNwWWT, BigInt("50000000000000000"))
		assert.equal(uint256KuIyxVl, BigInt("50000000000000000"))
		await expect(MIMOTokenZC840y.transferFrom.call(addressGKG8Vj, addressVAAAVP0, uintBb0bQ7N, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenEz8TpKd = await MIMOToken.new({from: accounts[4]});
		const uintAHQXhc = BigInt("171")
		const addressek8RyDv = accounts[3]
		const uintaGkg0lW = BigInt("530")
		const addresssSMbzed = accounts[4]
		const boolGi3Tiyz = await MIMOTokenEz8TpKd.transfer.call(addressek8RyDv, uintAHQXhc, {from: accounts[3]});
		const boolvFLH3Mr = await MIMOTokenEz8TpKd.approve.call(addresssSMbzed, uintaGkg0lW, {from: accounts[0]});

		await expect(MIMOTokenEz8TpKd.transfer.call(addressek8RyDv, uintAHQXhc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenCm2ymiy = await MIMOToken.new({from: accounts[0]});
		const uintBXb8jy = BigInt("1530")
		const addressoanW9kV = accounts[2]
		const uintGbSdb8W = BigInt("1754")
		const addressGoYRJ4Y = accounts[5]
		const addressvYDTiqu = accounts[2]
		const boolsKd7Z4b = await MIMOTokenCm2ymiy.approve.call(addressoanW9kV, uintBXb8jy, {from: accounts[3]});
		const boolohvhfjJ = await MIMOTokenCm2ymiy.approve.call(addressGoYRJ4Y, uintGbSdb8W, {from: accounts[0]});
		const uintBwKRcjr = await MIMOTokenCm2ymiy.balanceOf.call(addressvYDTiqu, {from: accounts[2]});

		assert.equal(boolohvhfjJ, true)
		assert.equal(boolsKd7Z4b, true)
		assert.equal(uintBwKRcjr, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenbU2J3GK = await MIMOToken.new({from: accounts[2]});
		const uintx7FhCwn = BigInt("1121")
		const uintfgAorG0 = BigInt("13")
		const addressXrKveB = accounts[5]
		const addresseH9iUkM = "0x0000000000000000000000000000000000000001"
		const uint0QME0D = BigInt("574")
		const addressDJapZz = "0x0000000000000000000000000000000000000001"
		const addresspV10ddo = accounts[2]
		const uint256WT00Hfc = await MIMOTokenbU2J3GK.setFeeRate.call(uintx7FhCwn, {from: accounts[2]});
		const boolga8vhzZ = await MIMOTokenbU2J3GK.transfer.call(addressXrKveB, uintfgAorG0, {from: accounts[4]});
		const uintxmfLSED = await MIMOTokenbU2J3GK.balanceOf.call(addresseH9iUkM, {from: accounts[0]});
		const boolJj6uuZE = await MIMOTokenbU2J3GK.transferFrom.call(addresspV10ddo, addressDJapZz, uint0QME0D, {from: accounts[4]});

		await expect(MIMOTokenbU2J3GK.transfer.call(addressXrKveB, uintfgAorG0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenn5CPJim = await MIMOToken.new({from: accounts[0]});
		const uintqG1ezR = BigInt("1503")
		const uintISCTlix = BigInt("1157")
		const uintF34Vor3 = BigInt("1558")
		const addresswQIfYAY = accounts[4]
		const uintUfu2cwm = BigInt("1611")
		const addresszV029Ry = accounts[1]
		const uintx31vKT8 = await MIMOTokenn5CPJim.totalSupply.call({from: accounts[3]});
		const uintAXOhhG = await MIMOTokenn5CPJim.totalSupply.call({from: accounts[1]});
		const uint256PoLJetm = await MIMOTokenn5CPJim.getFee.call(uintqG1ezR, {from: accounts[5]});
		const uint256VHklVVh = await MIMOTokenn5CPJim.setFeeRate.call(uintISCTlix, {from: accounts[3]});
		const boolW2lyDXC = await MIMOTokenn5CPJim.approve.call(addresswQIfYAY, uintF34Vor3, {from: accounts[4]});
		const boolKn75dnX = await MIMOTokenn5CPJim.approve.call(addresszV029Ry, uintUfu2cwm, {from: accounts[5]});

		assert.equal(boolKn75dnX, true)
		assert.equal(boolW2lyDXC, true)
		assert.equal(uint256PoLJetm, BigInt("50000000000000000"))
		assert.equal(uintAXOhhG, BigInt("16000000000000000000000000"))
		assert.equal(uintx31vKT8, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenD4Yc1zG = await MIMOToken.new({from: accounts[1]});
		const uintIm1XCjb = BigInt("1803")
		const uintrtkuXuM = BigInt("153")
		const addressNv1xuUx = accounts[2]
		const addressELQoC95 = accounts[0]
		const addressJURyNRf = accounts[2]
		const uint256tgc54W = await MIMOTokenD4Yc1zG.getFee.call(uintIm1XCjb, {from: accounts[1]});
		const boolFPneqbR = await MIMOTokenD4Yc1zG.approve.call(addressNv1xuUx, uintrtkuXuM, {from: accounts[4]});
		const uintHUw6831 = await MIMOTokenD4Yc1zG.totalSupply.call({from: accounts[3]});
		const uintOcqSXq3 = await MIMOTokenD4Yc1zG.allowance.call(addressJURyNRf, addressELQoC95, {from: accounts[4]});
		const uinthjfkDB0 = await MIMOTokenD4Yc1zG.totalSupply.call({from: accounts[0]});

		assert.equal(boolFPneqbR, true)
		assert.equal(uint256tgc54W, BigInt("50000000000000000"))
		assert.equal(uintHUw6831, BigInt("16000000000000000000000000"))
		assert.equal(uintOcqSXq3, BigInt("0"))
		assert.equal(uinthjfkDB0, BigInt("16000000000000000000000000"))
	});
})