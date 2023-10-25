const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinU3EG2d5 = await DJCoin.new({from: accounts[3]});
		const addressY8SPpSn = await DJCoinU3EG2d5.owner.call({from: "0x0000000000000000000000000000000000000001"});
		await DJCoinU3EG2d5.onlyOwner.call({from: accounts[2]});

		assert.equal(addressY8SPpSn, 0xD393C4E0c1b5d55020358aD98893912B449A275d)
		await expect(DJCoinU3EG2d5.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinRUCB1np = await DJCoin.new({from: accounts[3]});
		const addressIY0pZgw = accounts[4]
		const addressEFSKDUo = accounts[0]
		const uintfuEsq41 = BigInt("1000")
		const addressVSwTC4D = accounts[2]
		const uintOrq0XH5 = BigInt("1197")
		const addressX8D6oas = accounts[4]
		await DJCoinRUCB1np.renounceOwnership.call({from: accounts[3]});
		const uint256mkSzfWM = await DJCoinRUCB1np.balanceOf.call(addressIY0pZgw, {from: accounts[2]});
		const uint256N2m3nTo = await DJCoinRUCB1np.balanceOf.call(addressEFSKDUo, {from: accounts[1]});
		await DJCoinRUCB1np.renounceOwnership.call({from: accounts[4]});
		const boolh9fvuoG = await DJCoinRUCB1np.increaseAllowance.call(addressVSwTC4D, uintfuEsq41, {from: accounts[2]});
		const boolRMuhyPl = await DJCoinRUCB1np.decreaseAllowance.call(addressX8D6oas, uintOrq0XH5, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DJCoinRUCB1np.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinm5g7ry0 = await DJCoin.new({from: accounts[3]});
		const addressU6pJgco = accounts[1]
		const addressPGB7DE2 = accounts[4]
		const uintw6mJmI = BigInt("1748")
		const addressmb3dm8N = accounts[4]
		const addressbV0DsP = accounts[4]
		const addressgMNKj7v = accounts[0]
		const addressEa6EdAT = accounts[4]
		const addresspcvJMYS = accounts[2]
		const addressfhUXkTD = await DJCoinm5g7ry0.transferOwnership.call(addressU6pJgco, {from: accounts[3]});
		const uint256sB62VW6 = await DJCoinm5g7ry0.balanceOf.call(addressPGB7DE2, {from: accounts[3]});
		const boolKCRQ8ag = await DJCoinm5g7ry0.transferFrom.call(addressbV0DsP, addressmb3dm8N, uintw6mJmI, {from: accounts[2]});
		const uint256hRkoJr4 = await DJCoinm5g7ry0.allowance.call(addressEa6EdAT, addressgMNKj7v, {from: accounts[1]});
		const addressGw5jxi0 = await DJCoinm5g7ry0.transferOwnership.call(addresspcvJMYS, {from: accounts[3]});
		await DJCoinm5g7ry0.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint256sB62VW6, BigInt("0"))
		await expect(DJCoinm5g7ry0.transferFrom.call(addressbV0DsP, addressmb3dm8N, uintw6mJmI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinHRNk4IO = await DJCoin.new({from: accounts[5]});
		const uintwuRfapB = BigInt("586")
		const addressPSOCmrY = accounts[0]
		const uint1TvEVQ = BigInt("1738")
		const addressJtRe8dp = accounts[2]
		const uintaqpfJmR = BigInt("1080")
		const addressgJIpSNw = accounts[5]
		const uintsmX1hJ = BigInt("1474")
		const addressOEO5rgT = accounts[2]
		const addressUwIBA43 = accounts[4]
		const boolLYK0GGv = await DJCoinHRNk4IO.increaseAllowance.call(addressPSOCmrY, uintwuRfapB, {from: accounts[0]});
		const boolOOpYSX = await DJCoinHRNk4IO.transfer.call(addressJtRe8dp, uint1TvEVQ, {from: accounts[4]});
		const boolMFon9kB = await DJCoinHRNk4IO.increaseAllowance.call(addressgJIpSNw, uintaqpfJmR, {from: accounts[0]});
		await DJCoinHRNk4IO.renounceOwnership.call({from: accounts[3]});
		const boolCelPDLE = await DJCoinHRNk4IO.transferFrom.call(addressUwIBA43, addressOEO5rgT, uintsmX1hJ, {from: accounts[3]});

		assert.equal(boolLYK0GGv, true)
		await expect(DJCoinHRNk4IO.transfer.call(addressJtRe8dp, uint1TvEVQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinvcjNlL = await DJCoin.new({from: accounts[2]});
		const uintOLCth3K = BigInt("1789")
		const addressYS4M6yV = accounts[0]
		const addresseSw4GOH = accounts[2]
		const address6R6HW2 = accounts[3]
		const addressbiD82F = accounts[4]
		const addressrRLfZrj = accounts[4]
		const addressrm6aB3i = accounts[2]
		const boollAy1xt7 = await DJCoinvcjNlL.decreaseAllowance.call(addressYS4M6yV, uintOLCth3K, {from: accounts[0]});
		const uint256ob4ERcm = await DJCoinvcjNlL.totalSupply.call({from: accounts[5]});
		const uint256eJwBf8Q = await DJCoinvcjNlL.allowance.call(address6R6HW2, addresseSw4GOH, {from: accounts[2]});
		const uint256TnIOTrX = await DJCoinvcjNlL.totalSupply.call({from: accounts[3]});
		const uint256hUAvz2y = await DJCoinvcjNlL.balanceOf.call(addressbiD82F, {from: accounts[2]});
		const uint256CbiyLmK = await DJCoinvcjNlL.allowance.call(addressrm6aB3i, addressrRLfZrj, {from: accounts[4]});

		assert.equal(boollAy1xt7, true)
		assert.equal(uint256CbiyLmK, BigInt("0"))
		assert.equal(uint256TnIOTrX, BigInt("2100000000000"))
		assert.equal(uint256eJwBf8Q, BigInt("0"))
		assert.equal(uint256hUAvz2y, BigInt("0"))
		assert.equal(uint256ob4ERcm, BigInt("2100000000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinhDsbOdx = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressEhX0TXn = accounts[5]
		await DJCoinhDsbOdx.renounceOwnership.call({from: accounts[3]});
		const addresspThPzK5 = await DJCoinhDsbOdx.validRecipient.call(addressEhX0TXn, {from: accounts[0]});
	});

	it('test for DJCoin', async () => {
		const DJCoinQBhl6S6 = await DJCoin.new({from: accounts[1]});
		const uintBYYqAa3 = BigInt("153")
		const addressIHUoZ01 = accounts[4]
		const uint256Qtvg61o = await DJCoinQBhl6S6.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolL7Y61d5 = await DJCoinQBhl6S6.approve.call(addressIHUoZ01, uintBYYqAa3, {from: accounts[5]});
		await DJCoinQBhl6S6.renounceOwnership.call({from: accounts[0]});

		assert.equal(boolL7Y61d5, true)
		assert.equal(uint256Qtvg61o, BigInt("2100000000000"))
		await expect(DJCoinQBhl6S6.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinQl7uvCl = await DJCoin.new({from: accounts[5]});
		const uintAxW9tbV = BigInt("288")
		const addressJPAqyxY = accounts[4]
		const uintJJvtyn = BigInt("1846")
		const uintiaDtHhF = BigInt("1796")
		const uintBfZroI2 = BigInt("76")
		const uintYPTxNR = BigInt("838")
		const addressVEjvSz8 = accounts[1]
		const boolTjw6E9g = await DJCoinQl7uvCl.decreaseAllowance.call(addressJPAqyxY, uintAxW9tbV, {from: accounts[1]});
		const booljcSsVfd = await DJCoinQl7uvCl.changetokensPerBlock.call(uintJJvtyn, {from: accounts[0]});
		await DJCoinQl7uvCl.renounceOwnership.call({from: accounts[1]});
		const uint256t2hiQg1 = await DJCoinQl7uvCl.burn.call(uintBfZroI2, uintiaDtHhF, {from: accounts[0]});
		const boolYSQTu3X = await DJCoinQl7uvCl.approve.call(addressVEjvSz8, uintYPTxNR, {from: accounts[1]});

		assert.equal(boolTjw6E9g, true)
		assert.equal(booljcSsVfd, true)
		await expect(DJCoinQl7uvCl.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinU3EG2d5 = await DJCoin.new({from: accounts[3]});
		const uintr8wZWqZ = BigInt("2040")
		const uintaHMpSqn = BigInt("1067")
		const uint256yWob88 = await DJCoinU3EG2d5.burn.call(uintaHMpSqn, uintr8wZWqZ, {from: accounts[3]});
		const addressY8SPpSn = await DJCoinU3EG2d5.owner.call({from: "0x0000000000000000000000000000000000000001"});
		await DJCoinU3EG2d5.onlyOwner.call({from: accounts[2]});

		assert.equal(addressY8SPpSn, 0xD393C4E0c1b5d55020358aD98893912B449A275d)
		assert.equal(uint256yWob88, BigInt("1671600000000"))
		await expect(DJCoinU3EG2d5.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinsLxUozn = await DJCoin.new({from: accounts[3]});
		const uintcA5Sz01 = BigInt("1402")
		const addresshGWDDws = "0x0000000000000000000000000000000000000001"
		const uintYCktafs = BigInt("0")
		const addressdZCMbQX = accounts[3]
		const uintolgouk0 = BigInt("490")
		const addressx1mR5dN = accounts[3]
		const addressfL5VJ4C = accounts[3]
		const uintwuZOB5 = BigInt("566")
		const addressXoLDpba = accounts[3]
		const addresshoqKYrM = accounts[4]
		const bool9Kup9B = await DJCoinsLxUozn.transfer.call(addresshGWDDws, uintcA5Sz01, {from: accounts[3]});
		const addressXlVGcGJ = await DJCoinsLxUozn.owner.call({from: accounts[2]});
		const boolkkYtqew = await DJCoinsLxUozn.transfer.call(addressdZCMbQX, uintYCktafs, {from: accounts[2]});
		const boolwO0khcK = await DJCoinsLxUozn.transferFrom.call(addressfL5VJ4C, addressx1mR5dN, uintolgouk0, {from: accounts[2]});
		const boolhjCjFO1 = await DJCoinsLxUozn.transferFrom.call(addresshoqKYrM, addressXoLDpba, uintwuZOB5, {from: accounts[2]});

		assert.equal(addressXlVGcGJ, 0xD393C4E0c1b5d55020358aD98893912B449A275d)
		assert.equal(bool9Kup9B, true)
		assert.equal(boolkkYtqew, true)
		await expect(DJCoinsLxUozn.transferFrom.call(addressfL5VJ4C, addressx1mR5dN, uintolgouk0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})