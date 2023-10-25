const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenO4jzbzG = await MIMOToken.new({from: accounts[5]});
		const uintGZ71Jzn = BigInt("1156")
		const addressutuZwPV = "0x0000000000000000000000000000000000000001"
		const addressXXMidAv = accounts[2]
		const uintwzN2Qn0 = await MIMOTokenO4jzbzG.totalSupply.call({from: accounts[5]});
		const booled52DDV = await MIMOTokenO4jzbzG.transferFrom.call(addressXXMidAv, addressutuZwPV, uintGZ71Jzn, {from: accounts[0]});

		assert.equal(uintwzN2Qn0, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenO4jzbzG.transferFrom.call(addressXXMidAv, addressutuZwPV, uintGZ71Jzn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenuZeIN5s = await MIMOToken.new({from: accounts[0]});
		const uintlBudeRs = BigInt("1727")
		const addressnlix4LH = accounts[1]
		const addresss6RvS1c = accounts[3]
		const uintt7VTM2r = await MIMOTokenuZeIN5s.totalSupply.call({from: accounts[1]});
		const uinteaL3QNN = await MIMOTokenuZeIN5s.totalSupply.call({from: accounts[4]});
		const uint256Gy4nmsg = await MIMOTokenuZeIN5s.setFeeRate.call(uintlBudeRs, {from: accounts[4]});
		const uintg2a47mo = await MIMOTokenuZeIN5s.allowance.call(addresss6RvS1c, addressnlix4LH, {from: accounts[0]});

		assert.equal(uinteaL3QNN, BigInt("16000000000000000000000000"))
		assert.equal(uintg2a47mo, BigInt("0"))
		assert.equal(uintt7VTM2r, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokengBY4UZh = await MIMOToken.new({from: accounts[2]});
		const uintwqAq5ey = BigInt("999")
		const uintTSzlPBJ = BigInt("511")
		const addressBuTHMj = accounts[2]
		const uintgMpxaIv = BigInt("1355")
		const addressobowg7j = accounts[3]
		const uintOsoeRiL = BigInt("921")
		const addressv6jAPiS = accounts[4]
		const uint256XwW4QmD = await MIMOTokengBY4UZh.getFee.call(uintwqAq5ey, {from: accounts[4]});
		const boolAgEprwe = await MIMOTokengBY4UZh.approve.call(addressBuTHMj, uintTSzlPBJ, {from: accounts[1]});
		const boolqwXevQt = await MIMOTokengBY4UZh.transfer.call(addressobowg7j, uintgMpxaIv, {from: accounts[2]});
		const uint256kCmbK5Z = await MIMOTokengBY4UZh.setFeeRate.call(uintOsoeRiL, {from: accounts[4]});
		const uintGfIwURO = await MIMOTokengBY4UZh.balanceOf.call(addressv6jAPiS, {from: accounts[3]});

		assert.equal(boolAgEprwe, true)
		assert.equal(uint256XwW4QmD, BigInt("50000000000000000"))
		await expect(MIMOTokengBY4UZh.transfer.call(addressobowg7j, uintgMpxaIv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenVUK4QUp = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const address4T2st0 = "0x0000000000000000000000000000000000000001"
		const addressrdRZGAW = accounts[2]
		const uintzAI74xY = BigInt("1171")
		const uintLKnyl15 = BigInt("1780")
		const uintb0byoVo = await MIMOTokenVUK4QUp.balanceOf.call(address4T2st0, {from: accounts[3]});
		const uintN7olT10 = await MIMOTokenVUK4QUp.totalSupply.call({from: accounts[2]});
		const uintMqi9a2 = await MIMOTokenVUK4QUp.balanceOf.call(addressrdRZGAW, {from: accounts[3]});
		const uint256h9UKb7D = await MIMOTokenVUK4QUp.setMinFee.call(uintzAI74xY, {from: accounts[2]});
		const uint256xrmlYp = await MIMOTokenVUK4QUp.setFeeRate.call(uintLKnyl15, {from: accounts[1]});
	});

	it('test for MIMOToken', async () => {
		const MIMOToken71av9N = await MIMOToken.new({from: accounts[0]});
		const addressHRI2P0U = accounts[5]
		const uintDfzh9JT = BigInt("389")
		const uintATsgbr1 = await MIMOToken71av9N.balanceOf.call(addressHRI2P0U, {from: accounts[2]});
		const uintOEEgk8 = await MIMOToken71av9N.totalSupply.call({from: accounts[0]});
		const uint256vYGGK7s = await MIMOToken71av9N.setFeeRate.call(uintDfzh9JT, {from: accounts[4]});

		assert.equal(uintATsgbr1, BigInt("0"))
		assert.equal(uintOEEgk8, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenO4jzbzG = await MIMOToken.new({from: accounts[5]});
		const uintTupnX5 = BigInt("1900")
		const uintFaA2C1l = BigInt("1156")
		const addressDfnKjA7 = "0x0000000000000000000000000000000000000002"
		const addressPv5EEy = accounts[2]
		const uintefgpbNz = BigInt("207")
		const addressHzv6Mev = accounts[1]
		const addressknFxCLd = accounts[3]
		const uint256jaouBAO = await MIMOTokenO4jzbzG.setMinFee.call(uintTupnX5, {from: accounts[1]});
		const booled52DDV = await MIMOTokenO4jzbzG.transferFrom.call(addressPv5EEy, addressDfnKjA7, uintFaA2C1l, {from: accounts[0]});
		const boolXUTvz8p = await MIMOTokenO4jzbzG.transferFrom.call(addressknFxCLd, addressHzv6Mev, uintefgpbNz, {from: accounts[2]});
		const uintqnbOnve = await MIMOTokenO4jzbzG.totalSupply.call({from: accounts[4]});

		await expect(MIMOTokenO4jzbzG.transferFrom.call(addressPv5EEy, addressDfnKjA7, uintFaA2C1l, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})