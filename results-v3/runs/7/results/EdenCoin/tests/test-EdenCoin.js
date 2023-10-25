const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinAfgNdY9 = await EdenCoin.new({from: accounts[0]});
		const addressxWT020v = "0x0000000000000000000000000000000000000001"
		const addressWAyxL1P = accounts[2]
		const uintdm3yaKD = BigInt("799")
		const addressnjQDKVd = accounts[0]
		const uinty0rhHIh = BigInt("806")
		const addressPUvKhm0 = accounts[4]
		const addressN9uxlCp = accounts[0]
		const uintZ92LyD = BigInt("1749")
		const addressh5VkKYx = accounts[1]
		const uintH3pm7qn = BigInt("1899")
		const addressTqdxZmZ = accounts[1]
		const uint256gOlPXkA = await EdenCoinAfgNdY9.allowance.call(addressWAyxL1P, addressxWT020v, {from: accounts[1]});
		const boolcRtAM7h = await EdenCoinAfgNdY9.approve.call(addressnjQDKVd, uintdm3yaKD, {from: accounts[1]});
		const boolTMLAcwr = await EdenCoinAfgNdY9.transferFrom.call(addressN9uxlCp, addressPUvKhm0, uinty0rhHIh, {from: accounts[2]});
		const boolYvhsrEH = await EdenCoinAfgNdY9.decreaseApproval.call(addressh5VkKYx, uintZ92LyD, {from: accounts[4]});
		const boolNOfVogg = await EdenCoinAfgNdY9.increaseApproval.call(addressTqdxZmZ, uintH3pm7qn, {from: accounts[0]});

		assert.equal(boolcRtAM7h, true)
		assert.equal(uint256gOlPXkA, BigInt("0"))
		await expect(EdenCoinAfgNdY9.transferFrom.call(addressN9uxlCp, addressPUvKhm0, uinty0rhHIh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinUUfNWYz = await EdenCoin.new({from: accounts[3]});
		const address6epOuE = accounts[3]
		const addressy9hwQIu = accounts[4]
		const uinttyyYZwF = BigInt("2005")
		const addressCyhGGU9 = accounts[4]
		const uint5uc5is = BigInt("395")
		const addressoCoLoQr = accounts[0]
		const addressSHCV7P8 = accounts[0]
		const addresshlf7upF = accounts[4]
		const uint256YQ8jsa = await EdenCoinUUfNWYz.allowance.call(addressy9hwQIu, address6epOuE, {from: accounts[1]});
		const boolgAcU1I = await EdenCoinUUfNWYz.decreaseApproval.call(addressCyhGGU9, uinttyyYZwF, {from: accounts[2]});
		const boolE31558t = await EdenCoinUUfNWYz.increaseApproval.call(addressoCoLoQr, uint5uc5is, {from: accounts[2]});
		const uint256CrFNyZD = await EdenCoinUUfNWYz.allowance.call(addresshlf7upF, addressSHCV7P8, {from: accounts[5]});

		assert.equal(boolE31558t, true)
		assert.equal(boolgAcU1I, true)
		assert.equal(uint256CrFNyZD, BigInt("0"))
		assert.equal(uint256YQ8jsa, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinHYagjNC = await EdenCoin.new({from: accounts[1]});
		const uint8qTwam = BigInt("1486")
		const addressW8AGDal = accounts[4]
		const addressDrJTnLR = accounts[5]
		const addressSrB7VZK = accounts[2]
		const uintneat3AE = BigInt("1217")
		const addressikNr8OK = accounts[3]
		const uintx7WnA3v = BigInt("1455")
		const addressIMJ5pLi = accounts[1]
		const uintfXdQeaj = BigInt("395")
		const addresszRQvtAH = "0x0000000000000000000000000000000000000001"
		const boolsYO1Gqa = await EdenCoinHYagjNC.transfer.call(addressW8AGDal, uint8qTwam, {from: accounts[0]});
		const uint256stWXF3u = await EdenCoinHYagjNC.allowance.call(addressSrB7VZK, addressDrJTnLR, {from: accounts[0]});
		const boolXmYyYjI = await EdenCoinHYagjNC.decreaseApproval.call(addressikNr8OK, uintneat3AE, {from: accounts[0]});
		const boolCejzkQ1 = await EdenCoinHYagjNC.transfer.call(addressIMJ5pLi, uintx7WnA3v, {from: accounts[2]});
		const boolbkFYeI = await EdenCoinHYagjNC.increaseApproval.call(addresszRQvtAH, uintfXdQeaj, {from: accounts[4]});

		await expect(EdenCoinHYagjNC.transfer.call(addressW8AGDal, uint8qTwam, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoiniIPyO83 = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintYiPodR0 = BigInt("404")
		const addressoKGxOlu = accounts[1]
		const addresscdSLBb3 = accounts[3]
		const uintR2QqmHN = BigInt("1513")
		const addressCAarhTW = "0x0000000000000000000000000000000000000001"
		const addressu9ZWKdF = accounts[2]
		const addressrhQ5IlZ = accounts[1]
		const uintjDu8NeA = BigInt("1570")
		const addresseANqR7G = accounts[3]
		const boolATbIGJ = await EdenCoiniIPyO83.decreaseApproval.call(addressoKGxOlu, uintYiPodR0, {from: accounts[3]});
		const uint256puDLHLH = await EdenCoiniIPyO83.balanceOf.call(addresscdSLBb3, {from: accounts[5]});
		const booll360lzX = await EdenCoiniIPyO83.decreaseApproval.call(addressCAarhTW, uintR2QqmHN, {from: accounts[4]});
		const uint256lujQWs = await EdenCoiniIPyO83.allowance.call(addressrhQ5IlZ, addressu9ZWKdF, {from: accounts[0]});
		const boolCpG2bcP = await EdenCoiniIPyO83.increaseApproval.call(addresseANqR7G, uintjDu8NeA, {from: accounts[0]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinbjDgX9O = await EdenCoin.new({from: accounts[5]});
		const uintXs0WZ5z = BigInt("1900")
		const addresstgSDRkE = accounts[5]
		const uintUDoCHvl = BigInt("239")
		const addressIpAgzdU = "0x0000000000000000000000000000000000000001"
		const uintLqjVkjg = BigInt("1926")
		const addressdqvxy7T = accounts[3]
		const addressgWvQPGp = accounts[2]
		const boole7IiOsi = await EdenCoinbjDgX9O.approve.call(addresstgSDRkE, uintXs0WZ5z, {from: accounts[4]});
		const boolt0poJaQ = await EdenCoinbjDgX9O.decreaseApproval.call(addressIpAgzdU, uintUDoCHvl, {from: accounts[0]});
		const boolUocX5h = await EdenCoinbjDgX9O.approve.call(addressdqvxy7T, uintLqjVkjg, {from: accounts[4]});
		const uint256Kr6Y36 = await EdenCoinbjDgX9O.balanceOf.call(addressgWvQPGp, {from: accounts[0]});

		assert.equal(boolUocX5h, true)
		assert.equal(boole7IiOsi, true)
		assert.equal(boolt0poJaQ, true)
		assert.equal(uint256Kr6Y36, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinbjDgX9O = await EdenCoin.new({from: accounts[5]});
		const uintdJkpvVd = BigInt("0")
		const addressvdmc7Tf = "0x0000000000000000000000000000000000000001"
		const uintX71khJG = BigInt("239")
		const addressSBvOtZy = "0x0000000000000000000000000000000000000001"
		const uinto5ieYZb = BigInt("1680")
		const addressWDhznnR = accounts[1]
		const uintItXiaOb = BigInt("1113")
		const addressTlaS2EG = "0x0000000000000000000000000000000000000001"
		const boolcuPPQWJ = await EdenCoinbjDgX9O.decreaseApproval.call(addressvdmc7Tf, uintdJkpvVd, {from: accounts[5]});
		const boolt0poJaQ = await EdenCoinbjDgX9O.decreaseApproval.call(addressSBvOtZy, uintX71khJG, {from: accounts[0]});
		const boolzOf2Yr0 = await EdenCoinbjDgX9O.approve.call(addressWDhznnR, uinto5ieYZb, {from: accounts[0]});
		const boolxA8thUp = await EdenCoinbjDgX9O.transfer.call(addressTlaS2EG, uintItXiaOb, {from: accounts[5]});

		assert.equal(boolcuPPQWJ, true)
		assert.equal(boolt0poJaQ, true)
		assert.equal(boolxA8thUp, true)
		assert.equal(boolzOf2Yr0, true)
	});
})