const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinzfPSc9q = await DJCoin.new({from: accounts[0]});
		const addressX9lVl31 = accounts[2]
		const addressENjcmL2 = accounts[4]
		const uintjhE8ciG = BigInt("255")
		const uintPKLKqy4 = BigInt("1990")
		const uinti4QUfhI = BigInt("870")
		const addresspcHwxdh = accounts[1]
		const addressWg7o9BT = accounts[3]
		const uintBd9qCP3 = BigInt("697")
		const addressODLcQlw = accounts[1]
		const uint256Ah6cyML = await DJCoinzfPSc9q.allowance.call(addressENjcmL2, addressX9lVl31, {from: accounts[3]});
//		const uint256T3LdFRk = await DJCoinzfPSc9q.burn.call(uintPKLKqy4, uintjhE8ciG, {from: accounts[3]});
//		const boolUT2EQ3p = await DJCoinzfPSc9q.transferFrom.call(addressWg7o9BT, addresspcHwxdh, uinti4QUfhI, {from: accounts[1]});
//		const boolJkjLBi6 = await DJCoinzfPSc9q.decreaseAllowance.call(addressODLcQlw, uintBd9qCP3, {from: accounts[0]});

		assert.equal(uint256Ah6cyML, BigInt("0"))
		await expect(DJCoinzfPSc9q.burn.call(uintPKLKqy4, uintjhE8ciG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinqotY1wG = await DJCoin.new({from: accounts[3]});
		const uintGfvxhPk = BigInt("1335")
		const addressrKdTHm0 = accounts[5]
		const uintfPLGLVK = BigInt("386")
		const uintEhOqVs4 = BigInt("1760")
		const uintEjUE0M = BigInt("263")
		const addresszIPw8R = accounts[2]
		const addressTXKTQDW = accounts[5]
		const uintaE6sJRj = BigInt("257")
		const addressP0nptSM = accounts[5]
		const boolNbPi0i = await DJCoinqotY1wG.increaseAllowance.call(addressrKdTHm0, uintGfvxhPk, {from: accounts[3]});
//		const uint256IDg78bR = await DJCoinqotY1wG.burn.call(uintEhOqVs4, uintfPLGLVK, {from: accounts[1]});
//		const boolaUQlY3w = await DJCoinqotY1wG.transferFrom.call(addressTXKTQDW, addresszIPw8R, uintEjUE0M, {from: accounts[0]});
//		const boolsJvwr9q = await DJCoinqotY1wG.approve.call(addressP0nptSM, uintaE6sJRj, {from: accounts[4]});

		assert.equal(boolNbPi0i, true)
		await expect(DJCoinqotY1wG.burn.call(uintEhOqVs4, uintfPLGLVK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinOKh5r8W = await DJCoin.new({from: accounts[1]});
		const uinttaP37Pm = BigInt("437")
		const addressugF8fX = accounts[1]
		const addresslFy86p = accounts[5]
		const addresshU9uQZT = accounts[0]
//		const boolYZlaPLX = await DJCoinOKh5r8W.transferFrom.call(addresslFy86p, addressugF8fX, uinttaP37Pm, {from: accounts[3]});
//		await DJCoinOKh5r8W.onlyOwner.call({from: accounts[3]});
//		const addressVy2ZPDH = await DJCoinOKh5r8W.transferOwnership.call(addresshU9uQZT, {from: "0x0000000000000000000000000000000000000001"});
//		await DJCoinOKh5r8W.renounceOwnership.call({from: accounts[4]});

		await expect(DJCoinOKh5r8W.transferFrom.call(addresslFy86p, addressugF8fX, uinttaP37Pm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinSJr57PP = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		await DJCoinSJr57PP.onlyOwner.call({from: accounts[1]});
		const uint256vod97B = await DJCoinSJr57PP.totalSupply.call({from: accounts[2]});
	});

	it('test for DJCoin', async () => {
		const DJCoinKTdvLH = await DJCoin.new({from: accounts[0]});
		const addressYOUxZjE = accounts[4]
		const addressuOM4RO = accounts[2]
		const addressqSpZNY = accounts[0]
		const addressfHgzq5D = accounts[4]
		const uint256PJ1DOH9 = await DJCoinKTdvLH.allowance.call(addressuOM4RO, addressYOUxZjE, {from: accounts[3]});
//		await DJCoinKTdvLH.renounceOwnership.call({from: accounts[0]});
//		const uint256RbL09zt = await DJCoinKTdvLH.allowance.call(addressfHgzq5D, addressqSpZNY, {from: accounts[2]});
//		await DJCoinKTdvLH.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256PJ1DOH9, BigInt("0"))
		await expect(DJCoinKTdvLH.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoin4Im1Qe = await DJCoin.new({from: accounts[0]});
		const uintIERgnT4 = BigInt("1741")
		const addressmaYtJUa = accounts[0]
		const addressDKesmDo = accounts[2]
		const uintHBe9Xag = BigInt("464")
		const boolorWi95V = await DJCoin4Im1Qe.increaseAllowance.call(addressmaYtJUa, uintIERgnT4, {from: accounts[0]});
		const uint256oo9KBvC = await DJCoin4Im1Qe.balanceOf.call(addressDKesmDo, {from: accounts[1]});
		const booljJdW1Y = await DJCoin4Im1Qe.changetokensPerBlock.call(uintHBe9Xag, {from: accounts[0]});

		assert.equal(booljJdW1Y, true)
		assert.equal(boolorWi95V, true)
		assert.equal(uint256oo9KBvC, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinRMAUlVM = await DJCoin.new({from: accounts[0]});
		const uintCPWpkv = BigInt("801")
		const addressdA2uhbk = accounts[2]
		const boolNmp9ZQk = await DJCoinRMAUlVM.increaseAllowance.call(addressdA2uhbk, uintCPWpkv, {from: accounts[1]});
		const addressXn6M4Td = await DJCoinRMAUlVM.owner.call({from: accounts[2]});
//		await DJCoinRMAUlVM.renounceOwnership.call({from: accounts[2]});

		assert.equal(addressXn6M4Td, 0xb28B0FDA3330CA610A278393e0E3bbb3D7839Bf2)
		assert.equal(boolNmp9ZQk, true)
		await expect(DJCoinRMAUlVM.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinOKh5r8W = await DJCoin.new({from: accounts[1]});
		const uintDWHVxQn = BigInt("153")
		const addressmqfRbEG = accounts[1]
		const uintV76HBWi = BigInt("437")
		const addresshIBF5U2 = accounts[1]
		const addressn34omkd = accounts[5]
		const addressIQXNZ8L = accounts[0]
		const boolEBDvN7A = await DJCoinOKh5r8W.approve.call(addressmqfRbEG, uintDWHVxQn, {from: accounts[5]});
//		const boolYZlaPLX = await DJCoinOKh5r8W.transferFrom.call(addressn34omkd, addresshIBF5U2, uintV76HBWi, {from: accounts[3]});
//		await DJCoinOKh5r8W.onlyOwner.call({from: accounts[3]});
//		const addressVy2ZPDH = await DJCoinOKh5r8W.transferOwnership.call(addressIQXNZ8L, {from: "0x0000000000000000000000000000000000000001"});
//		await DJCoinOKh5r8W.renounceOwnership.call({from: accounts[4]});

		assert.equal(boolEBDvN7A, true)
		await expect(DJCoinOKh5r8W.transferFrom.call(addressn34omkd, addresshIBF5U2, uintV76HBWi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinuIE4quw = await DJCoin.new({from: accounts[3]});
		const uintM6KC8iJ = BigInt("799")
		const uintDQw6nuV = BigInt("752")
		const addressjjZYTYn = accounts[3]
		const uintL1q8qA3 = BigInt("1318")
		const boolwPIiKW = await DJCoinuIE4quw.changetokensPerBlock.call(uintM6KC8iJ, {from: accounts[4]});
		const boolkmPFX9Z = await DJCoinuIE4quw.decreaseAllowance.call(addressjjZYTYn, uintDQw6nuV, {from: accounts[2]});
		const boolhvaDQqB = await DJCoinuIE4quw.changetokensPerBlock.call(uintL1q8qA3, {from: accounts[2]});
		const uint256ZZls0uT = await DJCoinuIE4quw.totalSupply.call({from: accounts[0]});

		assert.equal(boolhvaDQqB, true)
		assert.equal(boolkmPFX9Z, true)
		assert.equal(boolwPIiKW, true)
		assert.equal(uint256ZZls0uT, BigInt("2100000000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinutBRIRT = await DJCoin.new({from: accounts[2]});
		const uintoEcR45Z = BigInt("331")
		const addresspCCpa5q = accounts[0]
		const addresseLjAell = accounts[1]
		const uinttr7Ior = BigInt("294")
		const addressBPLbBUi = accounts[4]
		const uintaITHr2R = BigInt("1424")
		const addressxApa1Iv = accounts[0]
		const boolppk1RNO = await DJCoinutBRIRT.transfer.call(addresspCCpa5q, uintoEcR45Z, {from: accounts[2]});
//		const addressviXFn70 = await DJCoinutBRIRT.validRecipient.call(addresseLjAell, {from: accounts[5]});
//		const boolRLJPHuq = await DJCoinutBRIRT.transfer.call(addressBPLbBUi, uinttr7Ior, {from: accounts[4]});
//		await DJCoinutBRIRT.onlyOwner.call({from: accounts[3]});
//		const boolooJ5vK0 = await DJCoinutBRIRT.transfer.call(addressxApa1Iv, uintaITHr2R, {from: accounts[3]});

		assert.equal(boolppk1RNO, true)
		await expect(DJCoinutBRIRT.validRecipient.call(addresseLjAell, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinSVDiH3x = await DJCoin.new({from: accounts[4]});
		const uintkseUdxR = BigInt("618")
		const uintzF7LfDO = BigInt("1598")
		const uintzhluRQx = BigInt("2024")
		const addressuEU7IV2 = accounts[3]
		const uint06yWdl = BigInt("772")
		const addressQ9J4jmo = accounts[4]
		const uint256r8ZsxEv = await DJCoinSVDiH3x.burn.call(uintzF7LfDO, uintkseUdxR, {from: accounts[4]});
		const boolB7514Q2 = await DJCoinSVDiH3x.decreaseAllowance.call(addressuEU7IV2, uintzhluRQx, {from: accounts[3]});
		const boolZSv34m7 = await DJCoinSVDiH3x.approve.call(addressQ9J4jmo, uint06yWdl, {from: accounts[2]});
		const uint256FKEPVSX = await DJCoinSVDiH3x.totalSupply.call({from: accounts[3]});
		const addressbtQ75QM = await DJCoinSVDiH3x.owner.call({from: accounts[3]});

		assert.equal(addressbtQ75QM, 0xd5236b9A0a6001C26dfD6870D8AdDeC15caB0c60)
		assert.equal(boolB7514Q2, true)
		assert.equal(boolZSv34m7, true)
		assert.equal(uint256FKEPVSX, BigInt("2100000000000"))
		assert.equal(uint256r8ZsxEv, BigInt("1970220000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinutBRIRT = await DJCoin.new({from: accounts[2]});
		const uintXA9IOCG = BigInt("331")
		const addressMT6lWeE = accounts[0]
		const addressIvjqFzW = "0x0000000000000000000000000000000000000001"
		const uintrSbe8gJ = BigInt("231")
		const addressxCZy7WD = accounts[0]
		const addressIle5ldy = accounts[1]
		const uintdqwryHG = BigInt("294")
		const addressU4yuEFH = accounts[4]
		const uintoy4kTne = BigInt("338")
		const addressA3PleyS = accounts[4]
		const uintyyZv5Ya = BigInt("1424")
		const addressLQa1q8K = accounts[0]
		const boolppk1RNO = await DJCoinutBRIRT.transfer.call(addressMT6lWeE, uintXA9IOCG, {from: accounts[2]});
		const addressxLXpzX = await DJCoinutBRIRT.transferOwnership.call(addressIvjqFzW, {from: accounts[2]});
//		const boolRslYMhy = await DJCoinutBRIRT.transfer.call(addressxCZy7WD, uintrSbe8gJ, {from: accounts[3]});
//		await DJCoinutBRIRT.renounceOwnership.call({from: accounts[2]});
//		const addressviXFn70 = await DJCoinutBRIRT.validRecipient.call(addressIle5ldy, {from: accounts[5]});
//		const boolRLJPHuq = await DJCoinutBRIRT.transfer.call(addressU4yuEFH, uintdqwryHG, {from: accounts[4]});
//		await DJCoinutBRIRT.onlyOwner.call({from: accounts[3]});
//		const booleRTJV9Q = await DJCoinutBRIRT.approve.call(addressA3PleyS, uintoy4kTne, {from: "0x0000000000000000000000000000000000000001"});
//		const boolooJ5vK0 = await DJCoinutBRIRT.transfer.call(addressLQa1q8K, uintyyZv5Ya, {from: accounts[3]});

		assert.equal(boolppk1RNO, true)
		await expect(DJCoinutBRIRT.transfer.call(addressxCZy7WD, uintrSbe8gJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinbidqwpn = await DJCoin.new({from: accounts[0]});
		const addressA8QztBv = accounts[3]
		const addressldzBYfw = "0x0000000000000000000000000000000000000001"
		const uintr23BRwB = BigInt("0")
		const addressElFE3sr = accounts[2]
		const uint256FTZw6vE = await DJCoinbidqwpn.balanceOf.call(addressA8QztBv, {from: accounts[1]});
		const uint256W4f5ZFX = await DJCoinbidqwpn.balanceOf.call(addressldzBYfw, {from: accounts[1]});
		const boolSpXH3Hi = await DJCoinbidqwpn.transfer.call(addressElFE3sr, uintr23BRwB, {from: accounts[1]});

		assert.equal(boolSpXH3Hi, true)
		assert.equal(uint256FTZw6vE, BigInt("0"))
		assert.equal(uint256W4f5ZFX, BigInt("0"))
	});
})