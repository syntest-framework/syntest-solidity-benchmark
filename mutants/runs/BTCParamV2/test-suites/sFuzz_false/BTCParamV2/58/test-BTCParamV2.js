const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2iXS2pr3 = await BTCParamV2.new({from: accounts[4]});
		const uintjmPj1Jm = BigInt("1466")
		const uintGU3a5ai = BigInt("678")
		const uint256EbvsWkb = await BTCParamV2iXS2pr3.setBtcTxFeeRewardRate.call(uintjmPj1Jm, {from: accounts[0]});
		const uint256rcv7n6V = await BTCParamV2iXS2pr3.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintGU3a5ai, {from: accounts[0]});
		await BTCParamV2iXS2pr3.updateBtcPrice.call({from: accounts[0]});

		await expect(BTCParamV2iXS2pr3.setBtcTxFeeRewardRate.call(uintjmPj1Jm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2rl0k2Nn = await BTCParamV2.new({from: accounts[2]});
		const addressZMKb0JA = accounts[4]
		const addressRp5HCm = await BTCParamV2rl0k2Nn.transferOwnership.call(addressZMKb0JA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pShtpV = await BTCParamV2rl0k2Nn.btcPrice.call({from: accounts[0]});

		await expect(BTCParamV2rl0k2Nn.transferOwnership.call(addressZMKb0JA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2cvCbKcu = await BTCParamV2.new({from: accounts[1]});
		await BTCParamV2cvCbKcu.onlyParamSetter.call({from: accounts[0]});
		await BTCParamV2cvCbKcu.onlyOwner.call({from: accounts[5]});
		await BTCParamV2cvCbKcu.onlyOwner.call({from: accounts[1]});

		await expect(BTCParamV2cvCbKcu.onlyParamSetter.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2FzqALnH = await BTCParamV2.new({from: accounts[2]});
		const boolnYIIM3Z = true
		const addressLBV2zF = accounts[3]
		const uintYtmZADD = BigInt("1065")
		const uintUxzDxXF = BigInt("325")
		const addressxAs8dnr = accounts[0]
		const addressRwdQkJB = accounts[3]
		const uintC1igG1o = BigInt("2027")
		const uintBjjIcb5 = BigInt("1344")
		const addressfKY7ya = accounts[5]
		const uintdJqzXXg = BigInt("600")
		const addressblpWV1l = await BTCParamV2FzqALnH.initialize.call(addressRwdQkJB, addressxAs8dnr, uintUxzDxXF, uintYtmZADD, addressLBV2zF, boolnYIIM3Z, {from: accounts[3]});
		const uint256Q9ao4j5 = await BTCParamV2FzqALnH.setBtcNetDiff.call(uintC1igG1o, {from: accounts[0]});
		const uint256dZVtrkc = await BTCParamV2FzqALnH.setBtcBlockReward.call(uintBjjIcb5, {from: accounts[4]});
		const addressiL1mXFH = await BTCParamV2FzqALnH.addListener.call(addressfKY7ya, {from: accounts[4]});
		const uint25685dbO8 = await BTCParamV2FzqALnH.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintdJqzXXg, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BTCParamV2FzqALnH.initialize.call(addressRwdQkJB, addressxAs8dnr, uintUxzDxXF, uintYtmZADD, addressLBV2zF, boolnYIIM3Z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2Yj3Tx8H = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintGIbbP0K = BigInt("88")
		await BTCParamV2Yj3Tx8H.onlyParamSetter.call({from: accounts[4]});
		const uint256PlJtddQ = await BTCParamV2Yj3Tx8H.setBtcBlockReward.call(uintGIbbP0K, {from: accounts[1]});
		await BTCParamV2Yj3Tx8H.updateBtcPrice.call({from: accounts[1]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2rl0k2Nn = await BTCParamV2.new({from: accounts[2]});
		const addressitM1mTR = accounts[0]
		const uint256pShtpV = await BTCParamV2rl0k2Nn.btcPrice.call({from: accounts[0]});
		const boolEhp7gxd = await BTCParamV2rl0k2Nn.removeListener.call(addressitM1mTR, {from: accounts[4]});

		assert.equal(uint256pShtpV, BigInt("0"))
		await expect(BTCParamV2rl0k2Nn.removeListener.call(addressitM1mTR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2rl0k2Nn = await BTCParamV2.new({from: accounts[2]});
		const uint256tHtRlBz = await BTCParamV2rl0k2Nn.btcIncomePerTPerSecInWei.call({from: accounts[4]});
		const uint256pShtpV = await BTCParamV2rl0k2Nn.btcPrice.call({from: accounts[0]});

		await expect(BTCParamV2rl0k2Nn.btcIncomePerTPerSecInWei.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})