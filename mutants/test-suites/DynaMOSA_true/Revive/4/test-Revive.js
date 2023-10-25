const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveZkNsQ0a = await Revive.new({from: accounts[1]});
		const uintvtz7rMj = BigInt("1822")
		const byteWXsBWYn = "0x20010f031d1e1615181a0f1c09030e131f17130d12171e140210081808080a1e"
		const addressh9n1A11 = accounts[2]
		const uintVcdN5tI = BigInt("1373")
		const addressnAVsoG8 = accounts[1]
		const addresstk2GC8Z = accounts[3]
		const addresszeOWRD = "0x0000000000000000000000000000000000000001"
		const uint256ZzertlC = await ReviveZkNsQ0a.tokensLockedAtTime.call(addressh9n1A11, byteWXsBWYn, uintvtz7rMj, {from: accounts[3]});
		const boolpDancS2 = await ReviveZkNsQ0a.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolHQemBaW = await ReviveZkNsQ0a.transferFrom.call(addresstk2GC8Z, addressnAVsoG8, uintVcdN5tI, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256HjHgloT = await ReviveZkNsQ0a.totalBalanceOf.call(addresszeOWRD, {from: accounts[4]});

		assert.equal(boolpDancS2, false)
		assert.equal(uint256ZzertlC, BigInt("0"))
		await expect(ReviveZkNsQ0a.transferFrom.call(addresstk2GC8Z, addressnAVsoG8, uintVcdN5tI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveGPpLnR = await Revive.new({from: accounts[4]});
		const addressAV7GM4H = accounts[2]
		const uintY03ikpa = BigInt("413")
		const addressi6Lb5d = accounts[2]
		const uint256dvQJgJJ = await ReviveGPpLnR.totalBalanceOf.call(addressAV7GM4H, {from: accounts[5]});
//		const address24zb7X = await ReviveGPpLnR.recoverERC20.call(addressi6Lb5d, uintY03ikpa, {from: accounts[1]});

		assert.equal(uint256dvQJgJJ, BigInt("0"))
		await expect(ReviveGPpLnR.recoverERC20.call(addressi6Lb5d, uintY03ikpa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOHuUTRC = await Revive.new({from: accounts[0]});
		const uintnJAGcpI = BigInt("139")
		const addressjprfEnw = accounts[3]
		const uint5PxvCr = BigInt("1923")
		const addressK3IxgRp = accounts[2]
//		const boolhqUswVl = await ReviveOHuUTRC.transfer.call(addressjprfEnw, uintnJAGcpI, {from: accounts[3]});
//		const boolDR3XbbK = await ReviveOHuUTRC.approve.call(addressK3IxgRp, uint5PxvCr, {from: accounts[1]});

		await expect(ReviveOHuUTRC.transfer.call(addressjprfEnw, uintnJAGcpI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveu66Wooa = await Revive.new({from: accounts[0]});
		const addressEHANb97 = accounts[4]
		const addressS6wigPE = accounts[0]
		const uintaiJFoNz = BigInt("1136")
		const byteWIhB6I0 = "0x0c0a0f1f0e1e180b120c1c010a0517030100051d191c03170e00131503131418"
		const addressLxDaN5D = accounts[5]
		const uint256rYmTGjv = await Reviveu66Wooa.totalBalanceOf.call(addressEHANb97, {from: accounts[3]});
		const uint256XDoGcrb = await Reviveu66Wooa.unlock.call(addressS6wigPE, {from: accounts[5]});
		const uint256r2EmAmq = await Reviveu66Wooa.tokensLockedAtTime.call(addressLxDaN5D, byteWIhB6I0, uintaiJFoNz, {from: accounts[4]});

		assert.equal(uint256XDoGcrb, BigInt("0"))
		assert.equal(uint256r2EmAmq, BigInt("0"))
		assert.equal(uint256rYmTGjv, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveQXlRpNa = await Revive.new({from: accounts[3]});
		const byteRoR4MQ = "0x1118081b0c050d010c01070f1b0f0901090f1c080f0b151c1e1b021d151b1a12"
		const addressRGJSgY2 = accounts[2]
		const addressnusERkA = accounts[2]
		const uintDflZxxd = BigInt("580")
		const uintnuCpdYX = BigInt("1373")
		const byteB7zwc3 = "0x100c050e0c11110c041813180d041e181816150c0704160012070f0c0b171304"
		const addressFFkVy1x = "0x0000000000000000000000000000000000000001"
		const uint256iVnWNgA = await ReviveQXlRpNa.tokensUnlockable.call(addressRGJSgY2, byteRoR4MQ, {from: accounts[2]});
		const uint256ApB7cnT = await ReviveQXlRpNa.totalBalanceOf.call(addressnusERkA, {from: accounts[4]});
		const boolGdHLiiD = await ReviveQXlRpNa.isOwner.call({from: accounts[1]});
//		const boolEmiC5lg = await ReviveQXlRpNa.transferWithLock.call(addressFFkVy1x, byteB7zwc3, uintnuCpdYX, uintDflZxxd, {from: accounts[2]});

		assert.equal(boolGdHLiiD, false)
		assert.equal(uint256ApB7cnT, BigInt("0"))
		assert.equal(uint256iVnWNgA, BigInt("0"))
		await expect(ReviveQXlRpNa.transferWithLock.call(addressFFkVy1x, byteB7zwc3, uintnuCpdYX, uintDflZxxd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveb6ejYoC = await Revive.new({from: accounts[3]});
		const uintMPYseOr = BigInt("1444")
		const addresskP6gKbD = accounts[3]
		const uintbdBfRD6 = BigInt("839")
		const bytejIYVXr3 = "0x1d12020e090b0e19141b1116190513081617011902090f0d07151d11160a1414"
//		const booloJPf1ZG = await Reviveb6ejYoC.decreaseAllowance.call(addresskP6gKbD, uintMPYseOr, {from: accounts[1]});
//		const boolHsn5zXz = await Reviveb6ejYoC.extendLock.call(bytejIYVXr3, uintbdBfRD6, {from: accounts[2]});

		await expect(Reviveb6ejYoC.decreaseAllowance.call(addresskP6gKbD, uintMPYseOr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivenL8hlP6 = await Revive.new({from: accounts[3]});
		const addressMhtzeS = accounts[1]
		const uintgxCZDWO = BigInt("2011")
		const byteTAQUyKh = "0x1a09130220010b0b161b1d091a0f0713100d1a1206141b0c20110b1e0d1c180c"
		const addressgQRctcp = accounts[4]
		const addressQsN6cvv = await RevivenL8hlP6.transferOwnership.call(addressMhtzeS, {from: accounts[3]});
//		const boolNtgjTSY = await RevivenL8hlP6.extendLock.call(byteTAQUyKh, uintgxCZDWO, {from: accounts[4]});
//		const addressr2rATM5 = await RevivenL8hlP6.transferOwnership.call(addressgQRctcp, {from: accounts[2]});

		await expect(RevivenL8hlP6.extendLock.call(byteTAQUyKh, uintgxCZDWO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveu66Wooa = await Revive.new({from: accounts[0]});
		const addressIa9Z2wX = accounts[4]
		const uintbVBkHYd = BigInt("1754")
		const addressQem9MrW = accounts[0]
		const uintEVrGNwW = BigInt("1136")
		const bytex3UAkxE = "0x0c0a0f1f0e1e180b120c1c010a0517030100051d191c03170e00131503131418"
		const addresszYm7pYG = accounts[5]
//		await Reviveu66Wooa.onlyOwner.call({from: accounts[1]});
//		const uint256rYmTGjv = await Reviveu66Wooa.totalBalanceOf.call(addressIa9Z2wX, {from: accounts[3]});
//		const uint256VhOp2Gj = await Reviveu66Wooa.recoverERC20.call(uintbVBkHYd, {from: accounts[2]});
//		const uint256XDoGcrb = await Reviveu66Wooa.unlock.call(addressQem9MrW, {from: accounts[5]});
//		const uint256r2EmAmq = await Reviveu66Wooa.tokensLockedAtTime.call(addresszYm7pYG, bytex3UAkxE, uintEVrGNwW, {from: accounts[4]});

		await expect(Reviveu66Wooa.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivekZ602E6 = await Revive.new({from: accounts[1]});
		const uintLjZxSjQ = BigInt("263")
		const byteC9aJM7y = "0x100a0b07010513191d0c0b04200d011c040b030a1705161d0b1f0d0e0411181e"
		const addressykZL6e6 = accounts[0]
		const addressm1tfu2O = accounts[2]
		const uint256PV9r2J4 = await RevivekZ602E6.tokensLockedAtTime.call(addressykZL6e6, byteC9aJM7y, uintLjZxSjQ, {from: accounts[1]});
		const uint256J6c4k3j = await RevivekZ602E6.getUnlockableTokens.call(addressm1tfu2O, {from: accounts[1]});

		assert.equal(uint256J6c4k3j, BigInt("0"))
		assert.equal(uint256PV9r2J4, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveGPpLnR = await Revive.new({from: accounts[4]});
		const addressskOnZsG = accounts[3]
		const addresse3KsKC = accounts[3]
		const uint256gC9DXFm = await ReviveGPpLnR.unlock.call(addressskOnZsG, {from: accounts[3]});
		const addresspks7i26 = await ReviveGPpLnR.owner.call({from: accounts[2]});
		const uint256dvQJgJJ = await ReviveGPpLnR.totalBalanceOf.call(addresse3KsKC, {from: accounts[5]});
//		await ReviveGPpLnR.onlyOwner.call({from: accounts[2]});

		assert.equal(addresspks7i26, 0x7B7730f84715a47CF04B09543842a7309EB539eF)
		assert.equal(uint256dvQJgJJ, BigInt("0"))
		assert.equal(uint256gC9DXFm, BigInt("0"))
		await expect(ReviveGPpLnR.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveQXlRpNa = await Revive.new({from: accounts[3]});
		const uintgAhc68z = BigInt("158")
		const addressxtNK9rT = accounts[3]
		const addressAX4Ken2 = accounts[0]
		const byteNFGaWr3 = "0x1118081b0c050d010c01070f1b0f0901090f1c080f0b151c1e1b021d151b1a12"
		const address4ZVkWB = accounts[2]
		const uintjRYAdC = BigInt("580")
		const uintUjsiKm7 = BigInt("1373")
		const bytegqD0s1Y = "0x100c050e0c11110c041813180d041e181816150c0704160012070f0c0b171304"
		const addressEVzuw9H = "0x0000000000000000000000000000000000000001"
		const boolgxwKods = await ReviveQXlRpNa.increaseAllowance.call(addressxtNK9rT, uintgAhc68z, {from: accounts[2]});
		const uint256kedh2w6 = await ReviveQXlRpNa.totalBalanceOf.call(addressAX4Ken2, {from: accounts[0]});
		const uint256iVnWNgA = await ReviveQXlRpNa.tokensUnlockable.call(address4ZVkWB, byteNFGaWr3, {from: accounts[2]});
//		const boolEmiC5lg = await ReviveQXlRpNa.transferWithLock.call(addressEVzuw9H, bytegqD0s1Y, uintUjsiKm7, uintjRYAdC, {from: accounts[2]});

		assert.equal(boolgxwKods, true)
		assert.equal(uint256iVnWNgA, BigInt("0"))
		assert.equal(uint256kedh2w6, BigInt("0"))
		await expect(ReviveQXlRpNa.transferWithLock.call(addressEVzuw9H, bytegqD0s1Y, uintUjsiKm7, uintjRYAdC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveu66Wooa = await Revive.new({from: accounts[0]});
		const uintE9QRQde = BigInt("1752")
		const addressS9HTIq2 = accounts[2]
		const addressEIYMjK = accounts[4]
		const addressHPIefEx = accounts[3]
		const addressNXCDsHX = accounts[1]
		const uintWBQwPDg = BigInt("1136")
		const byteemoQMhz = "0x0c0a0f1f0e1e180b120c1c010a0517030100051d191c03170e00131503131418"
		const addresssMIsZXP = accounts[5]
//		const addressljYX90D = await Reviveu66Wooa.recoverERC20.call(addressS9HTIq2, uintE9QRQde, {from: accounts[0]});
//		const uint256rYmTGjv = await Reviveu66Wooa.totalBalanceOf.call(addressEIYMjK, {from: accounts[3]});
//		const addressashfZAT = await Reviveu66Wooa.transferOwnership.call(addressHPIefEx, {from: accounts[1]});
//		const uint256XDoGcrb = await Reviveu66Wooa.unlock.call(addressNXCDsHX, {from: accounts[5]});
//		const uint256r2EmAmq = await Reviveu66Wooa.tokensLockedAtTime.call(addresssMIsZXP, byteemoQMhz, uintWBQwPDg, {from: accounts[4]});

		await expect(Reviveu66Wooa.recoverERC20.call(addressS9HTIq2, uintE9QRQde, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveGPpLnR = await Revive.new({from: accounts[4]});
		const addresske9Rgyf = accounts[3]
		const uintv0GZJbf = BigInt("1541")
		const addresstUldriS = "0x0000000000000000000000000000000000000001"
		const uint256dvQJgJJ = await ReviveGPpLnR.totalBalanceOf.call(addresske9Rgyf, {from: accounts[5]});
		const boolVkugnVL = await ReviveGPpLnR.approve.call(addresstUldriS, uintv0GZJbf, {from: accounts[5]});

		assert.equal(boolVkugnVL, true)
		assert.equal(uint256dvQJgJJ, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveWLD06uL = await Revive.new({from: accounts[3]});
		const uintZMqyZvU = BigInt("1515")
		const bytehYLSQ2 = "0x1202111318080f1e0907050f15061619131a082009011f0f091f1519180e021a"
//		const boolW3nTTIL = await ReviveWLD06uL.increaseLockAmount.call(bytehYLSQ2, uintZMqyZvU, {from: accounts[1]});
//		const uint256fYShxCt = await ReviveWLD06uL.totalSupply.call({from: accounts[5]});

		await expect(ReviveWLD06uL.increaseLockAmount.call(bytehYLSQ2, uintZMqyZvU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveu66Wooa = await Revive.new({from: accounts[0]});
		const addressBPc6Eg1 = accounts[3]
		const addressyWlzXo = accounts[4]
		const addressWXpJee2 = accounts[4]
		const addressZYFwJK = accounts[1]
		const uintCfyWcN9 = BigInt("1136")
		const byteFmafZQ = "0x0c0a0f1f0e1e180b120c1c010a0517030100051d191c03170e00131503131418"
		const addressgPgDG6s = accounts[5]
		const uint256VcmMIg = await Reviveu66Wooa.allowance.call(addressyWlzXo, addressBPc6Eg1, {from: accounts[2]});
		const uint256rYmTGjv = await Reviveu66Wooa.totalBalanceOf.call(addressWXpJee2, {from: accounts[3]});
		const uint256XDoGcrb = await Reviveu66Wooa.unlock.call(addressZYFwJK, {from: accounts[5]});
		const uint256r2EmAmq = await Reviveu66Wooa.tokensLockedAtTime.call(addressgPgDG6s, byteFmafZQ, uintCfyWcN9, {from: accounts[4]});

		assert.equal(uint256VcmMIg, BigInt("0"))
		assert.equal(uint256XDoGcrb, BigInt("0"))
		assert.equal(uint256r2EmAmq, BigInt("0"))
		assert.equal(uint256rYmTGjv, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveVPbTmZS = await Revive.new({from: accounts[1]});
		const addressUQ5kNU = accounts[5]
		const addressqHbb3TK = accounts[3]
		const uintfHWE0d1 = BigInt("749")
		const uintsWFp0t0 = BigInt("1073")
		const byteSvc7Lzs = "0x1f0f0a0508080902161219040c1d18010803011013131a111f0b142006080701"
		const addresshcbw9Ne = accounts[0]
		const uint256VtFc41S = await ReviveVPbTmZS.totalBalanceOf.call(addressUQ5kNU, {from: accounts[4]});
		const uint256aF1wjMW = await ReviveVPbTmZS.unlock.call(addressqHbb3TK, {from: accounts[5]});
//		const boolgd5qYw5 = await ReviveVPbTmZS.lock.call(byteSvc7Lzs, uintsWFp0t0, uintfHWE0d1, {from: accounts[4]});
//		const uint256AdAoK9U = await ReviveVPbTmZS.getUnlockableTokens.call(addresshcbw9Ne, {from: accounts[3]});

		assert.equal(uint256VtFc41S, BigInt("0"))
		assert.equal(uint256aF1wjMW, BigInt("0"))
		await expect(ReviveVPbTmZS.lock.call(byteSvc7Lzs, uintsWFp0t0, uintfHWE0d1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWLD06uL = await Revive.new({from: accounts[3]});
		const uint256fYShxCt = await ReviveWLD06uL.totalSupply.call({from: accounts[5]});

		assert.equal(uint256fYShxCt, BigInt("3000000000000000000000000000"))
	});

	it('test for Revive', async () => {
		const RevivenL8hlP6 = await Revive.new({from: accounts[3]});
		const byteKNdWTv8 = "0x131e040609110b180219060908130e0a03110802081f17081a0907140e1f1c1b"
		const addressCh8KOV6 = accounts[4]
		const uintQFE1vim = BigInt("2041")
		const byteGKRCuzB = "0x1a09130220010b0b161b1d091a0f0713100d1a1206141b0c20110b1e0d1c180c"
		const uint256g1daUEG = await RevivenL8hlP6.tokensLocked.call(addressCh8KOV6, byteKNdWTv8, {from: accounts[0]});
//		await RevivenL8hlP6.renounceOwnership.call({from: accounts[3]});
//		const boolNtgjTSY = await RevivenL8hlP6.extendLock.call(byteGKRCuzB, uintQFE1vim, {from: accounts[4]});

		assert.equal(uint256g1daUEG, BigInt("0"))
		await expect(RevivenL8hlP6.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive18mwvw = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uinthcdAxJF = BigInt("101")
		const byteRNvzs2k = "0x190f091e0c181b1c0709100415100018040d06141507080b00110c140718041c"
		const addressOH9MHhf = accounts[1]
		const addressIYB3MIT = accounts[0]
		const bytebanENbT = "0x08181a03101d141e12031d1220020e001c081d160b0315101f0505040e03080c"
		const addressbP1OiZj = accounts[0]
		const uintByqjGA4 = BigInt("1461")
		const addresslrx4GkX = accounts[0]
		const addressjnfL3i8 = accounts[2]
		const uint256iMjpECX = await Revive18mwvw.tokensLockedAtTime.call(addressOH9MHhf, byteRNvzs2k, uinthcdAxJF, {from: accounts[5]});
		const boolE6S1H1s = await Revive18mwvw.isOwner.call({from: accounts[3]});
		const uint256KJ1VCc2 = await Revive18mwvw.totalBalanceOf.call(addressIYB3MIT, {from: accounts[4]});
		const uint256xJGD3wy = await Revive18mwvw.tokensUnlockable.call(addressbP1OiZj, bytebanENbT, {from: accounts[4]});
		const boolvrzXyWE = await Revive18mwvw.transferFrom.call(addressjnfL3i8, addresslrx4GkX, uintByqjGA4, {from: accounts[0]});
	});

	it('test for Revive', async () => {
		const Reviveb6ejYoC = await Revive.new({from: accounts[3]});
		const uinttYVOozj = BigInt("1697")
		const uintkNYnfua = BigInt("1444")
		const addressEYuCWJ7 = accounts[4]
		const addressDMnnthp = await Reviveb6ejYoC.owner.call({from: accounts[3]});
//		const uint256cawSZYj = await Reviveb6ejYoC.recoverERC20.call(uinttYVOozj, {from: accounts[0]});
//		await Reviveb6ejYoC.onlyOwner.call({from: accounts[2]});
//		const booloJPf1ZG = await Reviveb6ejYoC.decreaseAllowance.call(addressEYuCWJ7, uintkNYnfua, {from: accounts[1]});

		assert.equal(addressDMnnthp, 0xcA037C036aDDFf63028f21cd198a9DF438b1cDda)
		await expect(Reviveb6ejYoC.recoverERC20.call(uinttYVOozj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWLD06uL = await Revive.new({from: accounts[3]});
		const uintnJJAwi = BigInt("1063")
		const addressTviPmH8 = accounts[2]
		const addressPyHdxrb = accounts[3]
//		const boolwn8AgQ = await ReviveWLD06uL.transferFrom.call(addressPyHdxrb, addressTviPmH8, uintnJJAwi, {from: accounts[4]});
//		const uint256fYShxCt = await ReviveWLD06uL.totalSupply.call({from: accounts[5]});

		await expect(ReviveWLD06uL.transferFrom.call(addressPyHdxrb, addressTviPmH8, uintnJJAwi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOwXH9hB = await Revive.new({from: accounts[4]});
		const uintigo9Ej = BigInt("1617")
		const addressiKgKKVb = accounts[5]
		const uint256E96HV5 = await ReviveOwXH9hB.totalSupply.call({from: accounts[1]});
//		const uint256CLLBh31 = await ReviveOwXH9hB.recoverERC20.call(uintigo9Ej, {from: accounts[3]});
//		const addressPQDmlzE = await ReviveOwXH9hB.transferOwnership.call(addressiKgKKVb, {from: accounts[1]});

		assert.equal(uint256E96HV5, BigInt("3000000000000000000000000000"))
		await expect(ReviveOwXH9hB.recoverERC20.call(uintigo9Ej, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveGPpLnR = await Revive.new({from: accounts[4]});
		const uint6OvaZF = BigInt("741")
		const addressIinoHBU = accounts[4]
//		const uint256gLrVSFH = await ReviveGPpLnR.recoverERC20.call(uint6OvaZF, {from: accounts[1]});
//		const uint256dvQJgJJ = await ReviveGPpLnR.totalBalanceOf.call(addressIinoHBU, {from: accounts[5]});

		await expect(ReviveGPpLnR.recoverERC20.call(uint6OvaZF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivetl2VLMU = await Revive.new({from: accounts[3]});
		const uintkRc1JI1 = BigInt("318")
		const uintQq1p4Js = BigInt("1168")
		const addressq2GNb3L = accounts[4]
		const uintMzzVKPb = BigInt("449")
		const uintSaAqUxX = BigInt("891")
		const byteiwvc9gh = "0x15100c17200a0b101a041a121e0d1b161c040d121912170c040d030e0c02181f"
//		const uint256tx09yhw = await Revivetl2VLMU.recoverERC20.call(uintkRc1JI1, {from: accounts[2]});
//		const boolPSShClQ = await Revivetl2VLMU.decreaseAllowance.call(addressq2GNb3L, uintQq1p4Js, {from: "0x0000000000000000000000000000000000000001"});
//		const boolcTf8zO = await Revivetl2VLMU.lock.call(byteiwvc9gh, uintSaAqUxX, uintMzzVKPb, {from: accounts[1]});

		await expect(Revivetl2VLMU.recoverERC20.call(uintkRc1JI1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveg7R1ZE6 = await Revive.new({from: accounts[4]});
		const uintUDRoo5Z = BigInt("1697")
		const uintDDVsBcd = BigInt("1915")
		const byteF6paKha = "0x08191308120f0e1e1d07110b1a1f02100b0a1a0e0411141e000c12161507100e"
		const uintzPxEohy = BigInt("257")
		const booldiz0l5U = await Reviveg7R1ZE6.lock.call(byteF6paKha, uintDDVsBcd, uintUDRoo5Z, {from: accounts[4]});
//		const uint256rA4qhuP = await Reviveg7R1ZE6.recoverERC20.call(uintzPxEohy, {from: accounts[1]});

		assert.equal(booldiz0l5U, true)
		await expect(Reviveg7R1ZE6.recoverERC20.call(uintzPxEohy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveGPpLnR = await Revive.new({from: accounts[4]});
		const uintVM80w22 = BigInt("929")
		const addressCP1lEvy = accounts[1]
		const addressuhel1fT = accounts[0]
		const addresslp1qsUH = accounts[4]
		const uintDVSogWN = BigInt("849")
		const byteGZPZ0lB = "0x0301071e01150a1b09031b070d0a171c17010314080d1910010c0e1811020c14"
		const addressSaVYuiS = accounts[5]
//		const uint256ivXUm6X = await ReviveGPpLnR.recoverERC20.call(uintVM80w22, {from: accounts[3]});
//		const uint256IJzw5KH = await ReviveGPpLnR.allowance.call(addressuhel1fT, addressCP1lEvy, {from: accounts[3]});
//		const uint256dvQJgJJ = await ReviveGPpLnR.totalBalanceOf.call(addresslp1qsUH, {from: accounts[5]});
//		const uint256Q5Fwrzo = await ReviveGPpLnR.tokensLockedAtTime.call(addressSaVYuiS, byteGZPZ0lB, uintDVSogWN, {from: accounts[3]});

		await expect(ReviveGPpLnR.recoverERC20.call(uintVM80w22, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivenL8hlP6 = await Revive.new({from: accounts[3]});
		const uintGt8WuS = BigInt("592")
		const uintaRY8iW9 = BigInt("1699")
		const uintbxTqRKz = BigInt("996")
		const bytenPKymYt = "0x101216081b1f171014091f20161b02080606090b0c1e131f1d121a13041c1420"
		const addressIatY2hh = accounts[6]
		const boolvYxKiA = await RevivenL8hlP6.isOwner.call({from: accounts[5]});
//		const uint256DFcdDq = await RevivenL8hlP6.recoverERC20.call(uintGt8WuS, {from: accounts[2]});
//		const boolqdvyonf = await RevivenL8hlP6.transferWithLock.call(addressIatY2hh, bytenPKymYt, uintbxTqRKz, uintaRY8iW9, {from: accounts[4]});

		assert.equal(boolvYxKiA, false)
		await expect(RevivenL8hlP6.recoverERC20.call(uintGt8WuS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivenL8hlP6 = await Revive.new({from: accounts[3]});
		const uintvMR9yIA = BigInt("2040")
		const bytepRE3j4U = "0x1a0913ffffffff20010b0b161b1d091a0f0713100d1a1206141b0c20110b1e0d1c180c"
//		const boolNtgjTSY = await RevivenL8hlP6.extendLock.call(bytepRE3j4U, uintvMR9yIA, {from: accounts[4]});
//		await RevivenL8hlP6.onlyOwner.call({from: accounts[0]});

		await expect(RevivenL8hlP6.extendLock.call(bytepRE3j4U, uintvMR9yIA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveu3Ara5g = await Revive.new({from: accounts[4]});
		const uintiU8Q1H8 = BigInt("533")
		const uint256GGcJd8 = await Reviveu3Ara5g.totalSupply.call({from: accounts[0]});
//		const uint256f81RAHp = await Reviveu3Ara5g.recoverERC20.call(uintiU8Q1H8, {from: accounts[4]});

		assert.equal(uint256GGcJd8, BigInt("3000000000000000000000000000"))
		await expect(Reviveu3Ara5g.recoverERC20.call(uintiU8Q1H8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveGPpLnR = await Revive.new({from: accounts[4]});
		const addressoSvLAzo = accounts[4]
		const uintDtD2ILp = BigInt("560")
		const byteGLyM91W = "0x0d130312160e140b110106080b0b1a181b0c08050501040419170b0c0310161d"
		const addressv8B7gac = accounts[3]
		const uint256dvQJgJJ = await ReviveGPpLnR.totalBalanceOf.call(addressoSvLAzo, {from: accounts[5]});
//		const uint256ijzACp = await ReviveGPpLnR.recoverERC20.call(uintDtD2ILp, {from: accounts[4]});
//		const uint256jY17YQ = await ReviveGPpLnR.tokensUnlockable.call(addressv8B7gac, byteGLyM91W, {from: accounts[3]});

		assert.equal(uint256dvQJgJJ, BigInt("3000000000000000000000000000"))
		await expect(ReviveGPpLnR.recoverERC20.call(uintDtD2ILp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWLD06uL = await Revive.new({from: accounts[3]});
		const addresssw7aPEc = accounts[0]
		const uinto69XoBd = BigInt("225")
		const uintgrScz14 = BigInt("1515")
		const byteMChnXyN = "0x1202111318080f1e0907050f15061619131a082009011f0f091f1519180e021a"
		const uint256LzOAb51 = await ReviveWLD06uL.balanceOf.call(addresssw7aPEc, {from: accounts[4]});
//		const uint256WIKHbqV = await ReviveWLD06uL.recoverERC20.call(uinto69XoBd, {from: accounts[0]});
//		const boolW3nTTIL = await ReviveWLD06uL.increaseLockAmount.call(byteMChnXyN, uintgrScz14, {from: accounts[1]});

		assert.equal(uint256LzOAb51, BigInt("0"))
		await expect(ReviveWLD06uL.recoverERC20.call(uinto69XoBd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveXM8JBsw = await Revive.new({from: accounts[4]});
		const uintNQCVQtm = BigInt("1667")
		const addressdP4J6rC = accounts[0]
		const uintMOn4dO5 = BigInt("1532")
		const uintE4hUPQR = BigInt("221")
		const bytehvj2aAW = "0x101a0510061416020e100f1e1915201d1a081b03030c1907140a1a1702081a03"
		const boolwwJwn26 = await ReviveXM8JBsw.approve.call(addressdP4J6rC, uintNQCVQtm, {from: accounts[3]});
//		const uint256j4vuTWQ = await ReviveXM8JBsw.recoverERC20.call(uintMOn4dO5, {from: accounts[1]});
//		const boolruSswh9 = await ReviveXM8JBsw.extendLock.call(bytehvj2aAW, uintE4hUPQR, {from: accounts[4]});

		assert.equal(boolwwJwn26, true)
		await expect(ReviveXM8JBsw.recoverERC20.call(uintMOn4dO5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivenL8hlP6 = await Revive.new({from: accounts[3]});
		const addressQnm4SPp = accounts[0]
		const uintkzD9MH = BigInt("1")
		const uintTNOkW41 = BigInt("1699")
		const uintpGYyw4a = BigInt("996")
		const byteLXuPQj9 = "0x1f0e0e001c050518091d1f1513070d11110f1f1005031a1d1b0e1a1315120211"
		const addressTdPK9iq = accounts[5]
		const uint256BoHWVF = await RevivenL8hlP6.totalBalanceOf.call(addressQnm4SPp, {from: accounts[5]});
//		const uint256YKlNNMd = await RevivenL8hlP6.recoverERC20.call(uintkzD9MH, {from: accounts[3]});
//		const boolqdvyonf = await RevivenL8hlP6.transferWithLock.call(addressTdPK9iq, byteLXuPQj9, uintpGYyw4a, uintTNOkW41, {from: accounts[4]});

		assert.equal(uint256BoHWVF, BigInt("0"))
		await expect(RevivenL8hlP6.recoverERC20.call(uintkzD9MH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivenL8hlP6 = await Revive.new({from: accounts[3]});
		const uinty8Jkt9f = BigInt("88")
		const addressqXUYW5g = accounts[3]
		const uintQufIn3h = BigInt("2018")
		const byteYM7Q3mt = "0x1a09130220010b0b161b1d091a0f0713100d1a1206141b0c20110b1e0d1c180c"
		const uintDp88sAY = BigInt("149")
		const uintlPuu1OS = BigInt("1356")
		const byteYuXPTeF = "0x0e080019051b121a1005090f1b0110140408060e081b141b0b10050e0f0f050c"
		const addresskeB2leF = accounts[5]
//		const uint256qWOxyOB = await RevivenL8hlP6.recoverERC20.call(uinty8Jkt9f, {from: "0x0000000000000000000000000000000000000001"});
//		const addressArmshui = await RevivenL8hlP6.transferOwnership.call(addressqXUYW5g, {from: accounts[0]});
//		const boolNtgjTSY = await RevivenL8hlP6.extendLock.call(byteYM7Q3mt, uintQufIn3h, {from: accounts[4]});
//		const boolHpI0L5K = await RevivenL8hlP6.transferWithLock.call(addresskeB2leF, byteYuXPTeF, uintlPuu1OS, uintDp88sAY, {from: accounts[3]});

		await expect(RevivenL8hlP6.recoverERC20.call(uinty8Jkt9f, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveogbiaKy = await Revive.new({from: accounts[1]});
		const addressHKyxISf = accounts[2]
		const uintnvgeaDJ = BigInt("1295")
		const uintUwfhjhT = BigInt("1196")
		const addressYJV2YuL = accounts[2]
		const addresspdtUDLh = accounts[0]
		const uintlIq9xHJ = BigInt("776")
		const addressSvXMhKF = accounts[4]
		const uint256c2B16uF = await ReviveogbiaKy.balanceOf.call(addressHKyxISf, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256pD1OK2L = await ReviveogbiaKy.recoverERC20.call(uintnvgeaDJ, {from: accounts[3]});
//		const boolpsEpqgd = await ReviveogbiaKy.transferFrom.call(addresspdtUDLh, addressYJV2YuL, uintUwfhjhT, {from: "0x0000000000000000000000000000000000000001"});
//		const addressL8yPK1X = await ReviveogbiaKy.recoverERC20.call(addressSvXMhKF, uintlIq9xHJ, {from: accounts[2]});
//		const boolsCAKdQ3 = await ReviveogbiaKy.isOwner.call({from: accounts[0]});

		assert.equal(uint256c2B16uF, BigInt("0"))
		await expect(ReviveogbiaKy.recoverERC20.call(uintnvgeaDJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivekZ602E6 = await Revive.new({from: accounts[1]});
		const uintfLrx011 = BigInt("1196")
		const uintnB82P9Q = BigInt("1741")
		const addresstAsTgfi = "0x0000000000000000000000000000000000000001"
		const addresspfVXFS6 = accounts[4]
		const addressZjMQmVi = accounts[1]
		const addressiJm7AEW = accounts[3]
//		const uint2569JNdi5 = await RevivekZ602E6.recoverERC20.call(uintfLrx011, {from: accounts[3]});
//		const boolpp3jrZn = await RevivekZ602E6.transferFrom.call(addresspfVXFS6, addresstAsTgfi, uintnB82P9Q, {from: accounts[2]});
//		const uint256BrLfKqt = await RevivekZ602E6.balanceOf.call(addressZjMQmVi, {from: accounts[3]});
//		const uint256J6c4k3j = await RevivekZ602E6.getUnlockableTokens.call(addressiJm7AEW, {from: accounts[1]});

		await expect(RevivekZ602E6.recoverERC20.call(uintfLrx011, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWLD06uL = await Revive.new({from: accounts[3]});
		const uintSfAen1p = BigInt("2009")
		const addressUCx1C5f = accounts[0]
		const uintGPcd4Ot = BigInt("1515")
		const bytet0Grp2G = "0x1202111318080f1e0907050f15061619131a082009011f0f091f1519180efffffffb1a"
		const boolD44gv8 = await ReviveWLD06uL.approve.call(addressUCx1C5f, uintSfAen1p, {from: accounts[0]});
//		const boolW3nTTIL = await ReviveWLD06uL.increaseLockAmount.call(bytet0Grp2G, uintGPcd4Ot, {from: accounts[1]});

		assert.equal(boolD44gv8, true)
		await expect(ReviveWLD06uL.increaseLockAmount.call(bytet0Grp2G, uintGPcd4Ot, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWLD06uL = await Revive.new({from: accounts[3]});
		const uintzpZsl4 = BigInt("1515")
		const byteNdJoL5g = "0x1202111318080f1e0907050f15061619131a082009fffffffd1f0f091f1519180e021a"
		const uintp3950r2 = BigInt("1267")
		const uintdYqjEH0 = BigInt("141")
		const bytefPl3RV3 = "0x021c19171e0b0b1e1009081612111803091b07090819100e1a191a08100c0601"
		const addressM3Y0xj = accounts[1]
//		const boolW3nTTIL = await ReviveWLD06uL.increaseLockAmount.call(byteNdJoL5g, uintzpZsl4, {from: accounts[1]});
//		const boolMNhOZii = await ReviveWLD06uL.transferWithLock.call(addressM3Y0xj, bytefPl3RV3, uintdYqjEH0, uintp3950r2, {from: accounts[3]});

		await expect(ReviveWLD06uL.increaseLockAmount.call(byteNdJoL5g, uintzpZsl4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveu66Wooa = await Revive.new({from: accounts[0]});
		const addressgr7KcIp = accounts[1]
		const uintXZQNPpd = BigInt("939")
		const uint256XDoGcrb = await Reviveu66Wooa.unlock.call(addressgr7KcIp, {from: accounts[5]});
//		const uint256FkgOzy2 = await Reviveu66Wooa.recoverERC20.call(uintXZQNPpd, {from: accounts[3]});

		assert.equal(uint256XDoGcrb, BigInt("0"))
		await expect(Reviveu66Wooa.recoverERC20.call(uintXZQNPpd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveu66Wooa = await Revive.new({from: accounts[0]});
		const addressF0HEdXw = accounts[3]
		const uintcZG8oDG = BigInt("275")
		const uintmke3QO1 = BigInt("82")
		const uintnvOKguQ = BigInt("1565")
		const bytejeXAMgu = "0x01071c09070c170d070c0a190d121315071505160516040e001e1806121e1111"
		const uint256XDoGcrb = await Reviveu66Wooa.unlock.call(addressF0HEdXw, {from: accounts[5]});
//		const uint256tdrdyAN = await Reviveu66Wooa.recoverERC20.call(uintcZG8oDG, {from: accounts[2]});
//		const booljbAMZ1W = await Reviveu66Wooa.lock.call(bytejeXAMgu, uintnvOKguQ, uintmke3QO1, {from: accounts[4]});

		assert.equal(uint256XDoGcrb, BigInt("0"))
		await expect(Reviveu66Wooa.recoverERC20.call(uintcZG8oDG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})