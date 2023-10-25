const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressexHXAh3 = accounts[1]
		const addresszbZiZOg = accounts[1]
		const SpiritCoinsdAQ0v = await SpiritCoin.new(addressexHXAh3, addresszbZiZOg, {from: accounts[4]});
		const uintQ66tCIC = BigInt("1212")
		const addressev1emHp = accounts[3]
		const addressmvHKqR6 = accounts[2]
		const boolXMhZX2 = await SpiritCoinsdAQ0v.approve.call(addressev1emHp, uintQ66tCIC, {from: accounts[1]});
		const uintXSZo8tN = await SpiritCoinsdAQ0v.balanceOf.call(addressmvHKqR6, {from: accounts[0]});

		assert.equal(boolXMhZX2, true)
		assert.equal(uintXSZo8tN, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressIQ3nD2o = accounts[4]
		const addressjoKal3I = accounts[4]
		const SpiritCoinx1fOMm9 = await SpiritCoin.new(addressIQ3nD2o, addressjoKal3I, {from: accounts[2]});
		const addressn8qSBPz = accounts[1]
		const addressGoflT3a = "0x0000000000000000000000000000000000000001"
		const uintDsoJCUk = BigInt("340")
		const addressZDKavqW = accounts[2]
		const uintBj0z6x = BigInt("1160")
		const addressDrcCD6F = accounts[0]
		const uint5WpvPI = BigInt("1405")
		const addressbPlQ2b = "0x0000000000000000000000000000000000000001"
		const uint16OGyb = BigInt("262")
		const addressN0fuUV = accounts[3]
		const uintGg5R86u = await SpiritCoinx1fOMm9.allowance.call(addressGoflT3a, addressn8qSBPz, {from: accounts[1]});
		const boolYqQdUwY = await SpiritCoinx1fOMm9.approve.call(addressZDKavqW, uintDsoJCUk, {from: accounts[0]});
		const boolIgZH10F = await SpiritCoinx1fOMm9.transfer.call(addressDrcCD6F, uintBj0z6x, {from: accounts[4]});
//		const boolCqkgv0Q = await SpiritCoinx1fOMm9.transfer.call(addressbPlQ2b, uint5WpvPI, {from: accounts[3]});
//		const addresswDQh6XG = await SpiritCoinx1fOMm9.mint.call(addressN0fuUV, uint16OGyb, {from: accounts[3]});

		assert.equal(boolIgZH10F, true)
		assert.equal(boolYqQdUwY, true)
		assert.equal(uintGg5R86u, BigInt("0"))
		await expect(SpiritCoinx1fOMm9.transfer.call(addressbPlQ2b, uint5WpvPI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresszhGHETT = accounts[1]
		const addressuvnyK4q = accounts[4]
		const SpiritCoinjcdOMDN = await SpiritCoin.new(addresszhGHETT, addressuvnyK4q, {from: accounts[4]});
		const uintdYy1ca4 = BigInt("522")
		const addressarDZSLQ = accounts[0]
		const addressjEYYTtu = accounts[1]
		const uintTZGSk1I = BigInt("1513")
		const addressYxPW3EO = accounts[3]
//		const boolJQdXNL7 = await SpiritCoinjcdOMDN.transferFrom.call(addressjEYYTtu, addressarDZSLQ, uintdYy1ca4, {from: "0x0000000000000000000000000000000000000001"});
//		const addressqlqARR = await SpiritCoinjcdOMDN.mint.call(addressYxPW3EO, uintTZGSk1I, {from: accounts[1]});

		await expect(SpiritCoinjcdOMDN.transferFrom.call(addressjEYYTtu, addressarDZSLQ, uintdYy1ca4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressBn0wQ5X = accounts[3]
		const addressd4biYg2 = accounts[2]
		const SpiritCoinKmY89Za = await SpiritCoin.new(addressBn0wQ5X, addressd4biYg2, {from: accounts[4]});
		const addressh8Hmewp = accounts[2]
		const addresstiUMT9v = accounts[0]
		const addressPuUmKwX = accounts[2]
		const uintbgMMo5P = BigInt("1918")
		const addresskHOXgcL = accounts[3]
		const uintXoC9YoO = BigInt("800")
		const addressHisQecl = accounts[1]
		const uintUxOKlAo = await SpiritCoinKmY89Za.allowance.call(addresstiUMT9v, addressh8Hmewp, {from: accounts[2]});
		const uintoM88b7k = await SpiritCoinKmY89Za.balanceOf.call(addressPuUmKwX, {from: accounts[0]});
//		const addressugHKwq2 = await SpiritCoinKmY89Za.mint.call(addresskHOXgcL, uintbgMMo5P, {from: accounts[1]});
//		const boolOAXu0Ch = await SpiritCoinKmY89Za.approve.call(addressHisQecl, uintXoC9YoO, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintUxOKlAo, BigInt("0"))
		assert.equal(uintoM88b7k, BigInt("0"))
		await expect(SpiritCoinKmY89Za.mint.call(addresskHOXgcL, uintbgMMo5P, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressloHGb8c = accounts[2]
		const addressUUAkXOF = accounts[0]
		const SpiritCoinKhqRDf = await SpiritCoin.new(addressloHGb8c, addressUUAkXOF, {from: accounts[3]});
		const addressUlCKHY = accounts[1]
		const addresstAprDjK = "0x0000000000000000000000000000000000000001"
		const addressGr8lP1v = accounts[5]
		const uintkr9JnUr = BigInt("1128")
		const addressee4eJZ = accounts[1]
		const addressgVHkYDL = accounts[0]
		const uintcBJFTxu = await SpiritCoinKhqRDf.allowance.call(addresstAprDjK, addressUlCKHY, {from: accounts[0]});
//		const addressMZuo8Vn = await SpiritCoinKhqRDf.setMinter.call(addressGr8lP1v, {from: accounts[3]});
//		const boolYhDdGiS = await SpiritCoinKhqRDf.transferFrom.call(addressgVHkYDL, addressee4eJZ, uintkr9JnUr, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintcBJFTxu, BigInt("0"))
		await expect(SpiritCoinKhqRDf.setMinter.call(addressGr8lP1v, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressegHiVZd = accounts[3]
		const addressAdbtBIs = accounts[0]
		const SpiritCoindnBcuD = await SpiritCoin.new(addressegHiVZd, addressAdbtBIs, {from: "0x0000000000000000000000000000000000000001"});
		const addresswP9y6MX = accounts[4]
		const uintoE74O1R = BigInt("452")
		const addressrEo1bV5 = accounts[0]
		const addresslVreHhV = await SpiritCoindnBcuD.setMinter.call(addresswP9y6MX, {from: accounts[1]});
		const addressU65cIlX = await SpiritCoindnBcuD.mint.call(addressrEo1bV5, uintoE74O1R, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for SpiritCoin', async () => {
		const addresscyzHOEP = accounts[2]
		const addressXqf3LzO = accounts[5]
		const SpiritCoinJD4DVO = await SpiritCoin.new(addresscyzHOEP, addressXqf3LzO, {from: accounts[1]});
		const uintf1NAayk = BigInt("879")
		const addressE2PEBVX = accounts[2]
		const addresssmgvTo = accounts[1]
		const uintMSJpQPW = BigInt("157")
		const addressjqWEKp2 = accounts[4]
		const addressKXqKxSv = accounts[6]
		const addressOWoTH7 = accounts[5]
		const uintB7A8PO = BigInt("210")
		const addressSiI9SG = accounts[2]
		const uintpmIoWBi = BigInt("48")
		const addresszDDDHiK = accounts[2]
		const uintGljCcTf = BigInt("150")
		const addressNECMmUO = accounts[3]
		const uintpbUpZNv = BigInt("199")
		const addresswTH6d9J = accounts[2]
		const booltQaGYAw = await SpiritCoinJD4DVO.transfer.call(addressE2PEBVX, uintf1NAayk, {from: accounts[2]});
		const uintchKHtDI = await SpiritCoinJD4DVO.balanceOf.call(addresssmgvTo, {from: "0x0000000000000000000000000000000000000001"});
		const addressuD7LcaV = await SpiritCoinJD4DVO.mint.call(addressjqWEKp2, uintMSJpQPW, {from: accounts[5]});
		const uintLznwyvJ = await SpiritCoinJD4DVO.allowance.call(addressOWoTH7, addressKXqKxSv, {from: accounts[0]});
		const booll1swSeu = await SpiritCoinJD4DVO.approve.call(addressSiI9SG, uintB7A8PO, {from: accounts[0]});
		const boolWb2RBwZ = await SpiritCoinJD4DVO.approve.call(addresszDDDHiK, uintpmIoWBi, {from: accounts[2]});
//		const addressA9tENFg = await SpiritCoinJD4DVO.mint.call(addressNECMmUO, uintGljCcTf, {from: accounts[0]});
//		const boolHCioWGu = await SpiritCoinJD4DVO.transfer.call(addresswTH6d9J, uintpbUpZNv, {from: accounts[0]});

		assert.equal(boolWb2RBwZ, true)
		assert.equal(booll1swSeu, true)
		assert.equal(booltQaGYAw, true)
		assert.equal(uintLznwyvJ, BigInt("0"))
		assert.equal(uintchKHtDI, BigInt("0"))
		await expect(SpiritCoinJD4DVO.mint.call(addressNECMmUO, uintGljCcTf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressrNBTfbT = accounts[1]
		const addressq9sRLFn = accounts[1]
		const SpiritCoinsdAQ0v = await SpiritCoin.new(addressrNBTfbT, addressq9sRLFn, {from: accounts[4]});
		const uintnAA4PsU = BigInt("1945")
		const addressgLTFb5S = accounts[4]
		const uintUivKa1 = BigInt("1777")
		const addressTOyvPx2 = "0x0000000000000000000000000000000000000000"
		const boolSAej8gN = await SpiritCoinsdAQ0v.transfer.call(addressgLTFb5S, uintnAA4PsU, {from: accounts[1]});
//		const addressBu53LO = await SpiritCoinsdAQ0v.mint.call(addressTOyvPx2, uintUivKa1, {from: accounts[1]});

		assert.equal(boolSAej8gN, true)
		await expect(SpiritCoinsdAQ0v.mint.call(addressTOyvPx2, uintUivKa1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})