const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinadB0OsV = await EdenCoin.new({from: accounts[2]});
		const uintMkOAiH6 = BigInt("1723")
		const addresskjf2ivG = accounts[3]
		const uintnkuAKis = BigInt("327")
		const addressddpJdxl = accounts[3]
		const boolIRHvsDp = await EdenCoinadB0OsV.approve.call(addresskjf2ivG, uintMkOAiH6, {from: accounts[0]});
//		const boolrEjur2d = await EdenCoinadB0OsV.transfer.call(addressddpJdxl, uintnkuAKis, {from: accounts[1]});

		assert.equal(boolIRHvsDp, true)
		await expect(EdenCoinadB0OsV.transfer.call(addressddpJdxl, uintnkuAKis, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinSJM3Kif = await EdenCoin.new({from: accounts[4]});
		const uintEZqJ5jp = BigInt("79")
		const addressqvJ0V3V = accounts[1]
		const addressoKEqkB = accounts[3]
		const uintjCW268H = BigInt("438")
		const addresswvE7PTB = accounts[4]
		const uintsbjJcdG = BigInt("790")
		const addressdwBciPr = accounts[1]
		const addressZXYN75 = accounts[3]
		const uintNUrgBFZ = BigInt("1903")
		const addressrgQw2iN = accounts[0]
//		const boolw6gLK1F = await EdenCoinSJM3Kif.transferFrom.call(addressoKEqkB, addressqvJ0V3V, uintEZqJ5jp, {from: accounts[2]});
//		const boolFuF2nNP = await EdenCoinSJM3Kif.increaseApproval.call(addresswvE7PTB, uintjCW268H, {from: accounts[2]});
//		const boolpi84DUr = await EdenCoinSJM3Kif.transferFrom.call(addressZXYN75, addressdwBciPr, uintsbjJcdG, {from: accounts[1]});
//		const boolBRouxd = await EdenCoinSJM3Kif.increaseApproval.call(addressrgQw2iN, uintNUrgBFZ, {from: accounts[0]});

		await expect(EdenCoinSJM3Kif.transferFrom.call(addressoKEqkB, addressqvJ0V3V, uintEZqJ5jp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoine3EPHje = await EdenCoin.new({from: accounts[1]});
		const uintwi6RiC = BigInt("1155")
		const addresssK1Gr3v = accounts[5]
		const uintfNrZDuo = BigInt("14")
		const addressqIYqrWp = accounts[0]
		const addressZ8N42Jx = accounts[1]
		const booljJiGlNi = await EdenCoine3EPHje.increaseApproval.call(addresssK1Gr3v, uintwi6RiC, {from: accounts[5]});
		const boolbkGu1Fm = await EdenCoine3EPHje.increaseApproval.call(addressqIYqrWp, uintfNrZDuo, {from: accounts[2]});
		const uint256wEB8PcW = await EdenCoine3EPHje.balanceOf.call(addressZ8N42Jx, {from: accounts[3]});

		assert.equal(boolbkGu1Fm, true)
		assert.equal(booljJiGlNi, true)
		assert.equal(uint256wEB8PcW, BigInt("1000000000000000000000000000"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinhBDhbWm = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZjQtkMP = BigInt("1793")
		const addressvBkR5x = accounts[1]
		const uintdxYXwOE = BigInt("1041")
		const addressASRN53E = accounts[4]
		const uintrLoVbX = BigInt("1212")
		const addresstUNyhCP = accounts[5]
		const uintOZu2DWC = BigInt("83")
		const addressAAUuwz6 = accounts[2]
		const uintxipDJQ2 = BigInt("1777")
		const addresslgmc52x = accounts[4]
		const boolqiVXJRr = await EdenCoinhBDhbWm.transfer.call(addressvBkR5x, uintZjQtkMP, {from: accounts[5]});
		const boolw9Nk55y = await EdenCoinhBDhbWm.approve.call(addressASRN53E, uintdxYXwOE, {from: accounts[4]});
		const boolU3Z1M2G = await EdenCoinhBDhbWm.transfer.call(addresstUNyhCP, uintrLoVbX, {from: accounts[3]});
		const boolLdmpGWf = await EdenCoinhBDhbWm.approve.call(addressAAUuwz6, uintOZu2DWC, {from: accounts[2]});
		const boollagIXqF = await EdenCoinhBDhbWm.increaseApproval.call(addresslgmc52x, uintxipDJQ2, {from: accounts[1]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinyvbzBmh = await EdenCoin.new({from: accounts[2]});
		const uintSFRaajM = BigInt("2018")
		const addresso1zJWZ = accounts[0]
		const uintWBN1XHC = BigInt("1367")
		const addressYCMRxVv = accounts[4]
		const uintDCGqmpp = BigInt("422")
		const addressdN400Yx = accounts[2]
		const addressmwcUjKs = accounts[1]
		const addressNHKZcfT = "0x0000000000000000000000000000000000000001"
		const uint1KeAEP = BigInt("1599")
		const addressczZlvC = accounts[5]
		const boolCqhDu2B = await EdenCoinyvbzBmh.increaseApproval.call(addresso1zJWZ, uintSFRaajM, {from: accounts[2]});
		const boolODnXHsl = await EdenCoinyvbzBmh.approve.call(addressYCMRxVv, uintWBN1XHC, {from: accounts[2]});
		const boolaWshRB = await EdenCoinyvbzBmh.decreaseApproval.call(addressdN400Yx, uintDCGqmpp, {from: accounts[4]});
		const uint256ZcKhkA5 = await EdenCoinyvbzBmh.allowance.call(addressNHKZcfT, addressmwcUjKs, {from: accounts[2]});
		const boolbPKUaDb = await EdenCoinyvbzBmh.increaseApproval.call(addressczZlvC, uint1KeAEP, {from: accounts[1]});

		assert.equal(boolCqhDu2B, true)
		assert.equal(boolODnXHsl, true)
		assert.equal(boolaWshRB, true)
		assert.equal(boolbPKUaDb, true)
		assert.equal(uint256ZcKhkA5, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinqAoPLqI = await EdenCoin.new({from: accounts[3]});
		const uintE6mfIO = BigInt("496")
		const addressjkCbHIv = accounts[1]
		const address1shnDd = accounts[3]
		const addresstTVtvPs = "0x0000000000000000000000000000000000000001"
		const addressy75Zvu = accounts[0]
		const uintn75VWeK = BigInt("1387")
		const addressEg5IRsy = accounts[3]
//		const boold4eyabo = await EdenCoinqAoPLqI.transferFrom.call(address1shnDd, addressjkCbHIv, uintE6mfIO, {from: accounts[4]});
//		const uint256oaVPC7 = await EdenCoinqAoPLqI.allowance.call(addressy75Zvu, addresstTVtvPs, {from: accounts[2]});
//		const boolPIdNOWc = await EdenCoinqAoPLqI.increaseApproval.call(addressEg5IRsy, uintn75VWeK, {from: accounts[3]});

		await expect(EdenCoinqAoPLqI.transferFrom.call(address1shnDd, addressjkCbHIv, uintE6mfIO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinqAoPLqI = await EdenCoin.new({from: accounts[3]});
		const uinto1q2sDt = BigInt("1068")
		const addressXm9N2me = accounts[3]
		const uintRZ0AnNs = BigInt("1959")
		const addressUg9wT0k = "0x0000000000000000000000000000000000000000"
		const boolpFDc6lp = await EdenCoinqAoPLqI.transfer.call(addressXm9N2me, uinto1q2sDt, {from: accounts[3]});
//		const boolgUisnK2 = await EdenCoinqAoPLqI.transfer.call(addressUg9wT0k, uintRZ0AnNs, {from: accounts[1]});

		assert.equal(boolpFDc6lp, true)
		await expect(EdenCoinqAoPLqI.transfer.call(addressUg9wT0k, uintRZ0AnNs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinqAoPLqI = await EdenCoin.new({from: accounts[3]});
		const uintGtQweea = BigInt("0")
		const addressWi6Xzbi = accounts[6]
		const uintaIVACXl = BigInt("1756")
		const addressX0rm0ur = accounts[2]
		const boolKA5reG0 = await EdenCoinqAoPLqI.decreaseApproval.call(addressWi6Xzbi, uintGtQweea, {from: accounts[3]});
//		const boolCSO1cNV = await EdenCoinqAoPLqI.transfer.call(addressX0rm0ur, uintaIVACXl, {from: accounts[2]});

		assert.equal(boolKA5reG0, true)
		await expect(EdenCoinqAoPLqI.transfer.call(addressX0rm0ur, uintaIVACXl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})