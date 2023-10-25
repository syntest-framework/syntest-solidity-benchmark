const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressQaxNppU = accounts[3]
		const LayerxAB7UzBv = await Layerx.new(addressQaxNppU, {from: accounts[5]});
		const booleoRcx28 = true
		const uintnwKrpKw = BigInt("1913")
		const boolVvnq0qn = await LayerxAB7UzBv.setIsPaused.call(booleoRcx28, {from: accounts[3]});
		const uint2568uWT2d = await LayerxAB7UzBv.burn.call(uintnwKrpKw, {from: accounts[3]});
	});

	it('test for Layerx', async () => {
		const addressko2uUi1 = accounts[2]
		const LayerxoEWDtPq = await Layerx.new(addressko2uUi1, {from: accounts[0]});
		const boolHQQCf6K = false
		const uintNuzygXn = BigInt("1915")
		await LayerxoEWDtPq.onlyOwner.call({from: accounts[4]});
		const bool9HwSEw = await LayerxoEWDtPq.setIsPaused.call(boolHQQCf6K, {from: accounts[5]});
		const uintlzVvHAC = await LayerxoEWDtPq.totalSupply.call({from: accounts[4]});
		const uint256ofIKfVH = await LayerxoEWDtPq.burn.call(uintNuzygXn, {from: accounts[2]});
		const uintWuXMJq1 = await LayerxoEWDtPq.totalSupply.call({from: accounts[0]});

		await expect(LayerxoEWDtPq.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressHEfIH5S = accounts[0]
		const LayerxlQRwzSx = await Layerx.new(addressHEfIH5S, {from: accounts[5]});
		const boolxaBRp9y = true
		const boolzqfp4Pc = await LayerxlQRwzSx.setIsPaused.call(boolxaBRp9y, {from: accounts[3]});
		await LayerxlQRwzSx.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uintkUyMhP1 = await LayerxlQRwzSx.totalSupply.call({from: accounts[1]});
		await LayerxlQRwzSx.paused.call({from: accounts[4]});

		await expect(LayerxlQRwzSx.setIsPaused.call(boolxaBRp9y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresswyB6gqF = accounts[2]
		const LayerxCaGOz1f = await Layerx.new(addresswyB6gqF, {from: accounts[4]});
		const uintrCFYRK = BigInt("1335")
		const addressi67uyR = accounts[0]
		const uintvPTEMNC = BigInt("1382")
		const boolQm6HsQ5 = true
		const boollKUInjS = await LayerxCaGOz1f.approve.call(addressi67uyR, uintrCFYRK, {from: accounts[1]});
		await LayerxCaGOz1f.f.call({from: accounts[3]});
		const uint256K3qZ9Nh = await LayerxCaGOz1f.burn.call(uintvPTEMNC, {from: "0x0000000000000000000000000000000000000001"});
		const bools1OdHIF = await LayerxCaGOz1f.setIsPaused.call(boolQm6HsQ5, {from: accounts[1]});

		assert.equal(boollKUInjS, true)
		await expect(LayerxCaGOz1f.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const address8vSVzn = accounts[1]
		const LayerxYBtnoYl = await Layerx.new(address8vSVzn, {from: "0x0000000000000000000000000000000000000001"});
		const uintLwmAqqN = BigInt("1360")
		const uintJRIwoQ = BigInt("879")
		const addressdYMkFqo = accounts[4]
		const addressmV8dhTT = accounts[2]
		const uintO8SEe7Y = BigInt("274")
		const addressuXSWkT1 = accounts[1]
		const uintIYRLIi9 = await LayerxYBtnoYl.lock.call(uintLwmAqqN, {from: accounts[4]});
		const boolAlZMYPh = await LayerxYBtnoYl.transferFrom.call(addressmV8dhTT, addressdYMkFqo, uintJRIwoQ, {from: accounts[3]});
		const boolTokYO1B = await LayerxYBtnoYl.approve.call(addressuXSWkT1, uintO8SEe7Y, {from: accounts[0]});
	});

	it('test for Layerx', async () => {
		const addressmCiilMv = accounts[1]
		const Layerx63oMKL = await Layerx.new(addressmCiilMv, {from: accounts[0]});
		const uintBCZz40i = BigInt("1902")
		const addressH1TVUG6 = accounts[0]
		const uintYf4YNfM = BigInt("33")
		const boolB5OpeIS = await Layerx63oMKL.transfer.call(addressH1TVUG6, uintBCZz40i, {from: accounts[1]});
		const uintwVLcxli = await Layerx63oMKL.exist.call(uintYf4YNfM, {from: accounts[3]});

		assert.equal(boolB5OpeIS, true)
		await expect(Layerx63oMKL.exist.call(uintYf4YNfM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresseb2clFK = accounts[1]
		const Layerxe1lDTsB = await Layerx.new(addresseb2clFK, {from: accounts[0]});
		const addressCbDO0D8 = accounts[3]
		const uintdzdNv3u = await Layerxe1lDTsB.balanceOf.call(addressCbDO0D8, {from: accounts[3]});
		await Layerxe1lDTsB.addStakePayment.call({from: accounts[2]});

		assert.equal(uintdzdNv3u, BigInt("0"))
		await expect(Layerxe1lDTsB.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresseU9ECwQ = accounts[0]
		const LayerxGI86jHl = await Layerx.new(addresseU9ECwQ, {from: accounts[1]});
		const uintPFDvKM = BigInt("183")
		const addressX1c5zX = accounts[4]
		const addressF56qPnp = accounts[3]
		const uintUHJXsG = BigInt("343")
		const bool2J7yd5 = await LayerxGI86jHl.transferFrom.call(addressF56qPnp, addressX1c5zX, uintPFDvKM, {from: "0x0000000000000000000000000000000000000001"});
		const uintIjPKOUM = await LayerxGI86jHl.withdraw.call(uintUHJXsG, {from: accounts[2]});
		const uintU1oCMFN = await LayerxGI86jHl.getStakesNum.call({from: "0x0000000000000000000000000000000000000001"});
		await LayerxGI86jHl.addStakePayment.call({from: accounts[4]});

		await expect(LayerxGI86jHl.transferFrom.call(addressF56qPnp, addressX1c5zX, uintPFDvKM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressVB9zUC5 = accounts[1]
		const Layerxe1lDTsB = await Layerx.new(addressVB9zUC5, {from: accounts[0]});
		const uintIFAiXmA = BigInt("548")
		const addressXpvXoV = accounts[4]
		const byteG96Uuw = "0x1e090d041f050b0c1006130410091c1205021f091b"
		const uintXFrB38k = BigInt("843")
		const addressDc9fsWP = "0x0000000000000000000000000000000000000001"
		const addressUvJQuo4 = accounts[2]
		const uintMDmORzC = BigInt("1096")
		const addressg8Azkvc = accounts[4]
		const boolYPYYSOA = await Layerxe1lDTsB.approve.call(addressXpvXoV, uintIFAiXmA, {from: "0x0000000000000000000000000000000000000001"});
		await Layerxe1lDTsB.unlock.call({from: accounts[2]});
		const booleseVOVV = await Layerxe1lDTsB.approveAndCall.call(addressDc9fsWP, uintXFrB38k, byteG96Uuw, {from: accounts[1]});
		const uintdzdNv3u = await Layerxe1lDTsB.balanceOf.call(addressUvJQuo4, {from: accounts[3]});
		const uinttFI2VOe = await Layerxe1lDTsB.totalSupply.call({from: accounts[4]});
		const boolKxhGYa4 = await Layerxe1lDTsB.transfer.call(addressg8Azkvc, uintMDmORzC, {from: accounts[1]});
		await Layerxe1lDTsB.addStakePayment.call({from: accounts[2]});

		assert.equal(boolYPYYSOA, true)
		await expect(Layerxe1lDTsB.unlock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressXzphIz = accounts[1]
		const LayerxVlPrgVO = await Layerx.new(addressXzphIz, {from: accounts[0]});
		const byteHbSyJkV = "0x070217000e06150b120d090e050105200a1a04170f"
		const uintyffgeYV = BigInt("261")
		const addressIN2SlX0 = "0x0000000000000000000000000000000000000001"
		const addresspg8uT2 = accounts[3]
		const uintXsuUOLF = BigInt("91")
		const addressywaDfu7 = "0x0000000000000000000000000000000000000001"
		const booltbLMel2 = await LayerxVlPrgVO.approveAndCall.call(addressIN2SlX0, uintyffgeYV, byteHbSyJkV, {from: accounts[5]});
		await LayerxVlPrgVO.addStakePayment.call({from: accounts[1]});
		const addresst3zUwBZ = await LayerxVlPrgVO.setNewStakeCreator.call(addresspg8uT2, {from: accounts[4]});
		const boolINJzc9M = await LayerxVlPrgVO.transfer.call(addressywaDfu7, uintXsuUOLF, {from: accounts[3]});

		await expect(LayerxVlPrgVO.approveAndCall.call(addressIN2SlX0, uintyffgeYV, byteHbSyJkV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressT5Uc2hk = accounts[0]
		const LayerxQEmNU12 = await Layerx.new(addressT5Uc2hk, {from: accounts[0]});
		const uintLcZxCOB = BigInt("14")
		const uinttf9R0oc = BigInt("370")
		const addressrGmECA = accounts[2]
		const addressMf92oxT = accounts[0]
		const addresskmu1UoL = accounts[2]
		const uintym2T1kJ = BigInt("31")
		const addressCosUwF1 = accounts[2]
		const uintxQiHWHc = await LayerxQEmNU12.lock.call(uintLcZxCOB, {from: accounts[3]});
		const boolpZXbzJ = await LayerxQEmNU12.approve.call(addressrGmECA, uinttf9R0oc, {from: accounts[4]});
		await LayerxQEmNU12.unlock.call({from: accounts[0]});
		const uintY4M3ciS = await LayerxQEmNU12.allowance.call(addresskmu1UoL, addressMf92oxT, {from: accounts[5]});
		const boolBkYulCI = await LayerxQEmNU12.transfer.call(addressCosUwF1, uintym2T1kJ, {from: accounts[3]});

		await expect(LayerxQEmNU12.lock.call(uintLcZxCOB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressLO61Haj = accounts[3]
		const Layerxv5wbQd3 = await Layerx.new(addressLO61Haj, {from: accounts[4]});
		const uintLmHQYyu = BigInt("1190")
		const uintVlksKo = BigInt("894")
		const addressLLeFpy = accounts[3]
		const uintzMcalqN = BigInt("1590")
		const uintdvvl8Rg = await Layerxv5wbQd3.withdraw.call(uintLmHQYyu, {from: accounts[2]});
		const boolCthdFxE = await Layerxv5wbQd3.transfer.call(addressLLeFpy, uintVlksKo, {from: accounts[1]});
		const uintPKAwNrI = await Layerxv5wbQd3.withdraw.call(uintzMcalqN, {from: accounts[5]});

		await expect(Layerxv5wbQd3.withdraw.call(uintLmHQYyu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressqHkHLh5 = accounts[1]
		const Layerxe1lDTsB = await Layerx.new(addressqHkHLh5, {from: accounts[0]});
		const addressLrGYFOS = accounts[3]
		const uintCMHQYM = BigInt("1158")
		const addressK6L1AXh = await Layerxe1lDTsB.transferOwnership.call(addressLrGYFOS, {from: accounts[1]});
		const uintVtBMiYv = await Layerxe1lDTsB.withdraw.call(uintCMHQYM, {from: accounts[1]});
		await Layerxe1lDTsB.addStakePayment.call({from: accounts[2]});
		const uintCYYpRHQ = await Layerxe1lDTsB.getStakesNum.call({from: accounts[1]});

		await expect(Layerxe1lDTsB.withdraw.call(uintCMHQYM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressRoQwZFA = accounts[1]
		const Layerxe1lDTsB = await Layerx.new(addressRoQwZFA, {from: accounts[0]});
		const uintIXMZljN = await Layerxe1lDTsB.getStakesNum.call({from: accounts[4]});
		await Layerxe1lDTsB.addStakePayment.call({from: accounts[2]});
		await Layerxe1lDTsB.paused.call({from: accounts[3]});

		assert.equal(uintIXMZljN, BigInt("1"))
		await expect(Layerxe1lDTsB.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressLGiIyEO = accounts[1]
		const Layerxe1lDTsB = await Layerx.new(addressLGiIyEO, {from: accounts[0]});
		const addressuBi4pWy = accounts[3]
		const uintMWO3ROG = BigInt("1768")
		const addressantg1qt = "0x0000000000000000000000000000000000000001"
		const addressXzA0XR = accounts[5]
		const uintlHdtf7n = await Layerxe1lDTsB.totalSupply.call({from: accounts[5]});
		const uintdzdNv3u = await Layerxe1lDTsB.balanceOf.call(addressuBi4pWy, {from: accounts[3]});
		const boolWqQqRId = await Layerxe1lDTsB.transferFrom.call(addressXzA0XR, addressantg1qt, uintMWO3ROG, {from: accounts[2]});
		await Layerxe1lDTsB.addStakePayment.call({from: accounts[2]});
		await Layerxe1lDTsB.unlock.call({from: accounts[0]});

		assert.equal(uintdzdNv3u, BigInt("0"))
		assert.equal(uintlHdtf7n, BigInt("40000000000000000000000"))
		await expect(Layerxe1lDTsB.transferFrom.call(addressXzA0XR, addressantg1qt, uintMWO3ROG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressXbJM808 = "0x0000000000000000000000000000000000000001"
		const LayerxJNDGkQW = await Layerx.new(addressXbJM808, {from: accounts[5]});
		const addressRTpmPkr = accounts[4]
		const addressuhyKBgp = accounts[2]
		const boolqkNp2na = true
		const uintVlWT1O = BigInt("1712")
		const uintu7pIHnD = await LayerxJNDGkQW.getStakesNum.call({from: accounts[0]});
		const uintPkBLFNq = await LayerxJNDGkQW.allowance.call(addressuhyKBgp, addressRTpmPkr, {from: accounts[5]});
		await LayerxJNDGkQW.addStakePayment.call({from: accounts[1]});
		const boolHPs46XZ = await LayerxJNDGkQW.setIsPaused.call(boolqkNp2na, {from: accounts[3]});
		const uintYcodrES = await LayerxJNDGkQW.exist.call(uintVlWT1O, {from: accounts[4]});

		assert.equal(uintPkBLFNq, BigInt("0"))
		assert.equal(uintu7pIHnD, BigInt("1"))
		await expect(LayerxJNDGkQW.addStakePayment.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressqLa6IWB = accounts[1]
		const Layerxe1lDTsB = await Layerx.new(addressqLa6IWB, {from: accounts[0]});
		const addressfgNGLZh = "0x0000000000000000000000000000000000000001"
		const uintkpfSAIY = BigInt("533")
		const addressF3OOCzC = await Layerxe1lDTsB.setNewStakeCreator.call(addressfgNGLZh, {from: accounts[1]});
		await Layerxe1lDTsB.unlock.call({from: accounts[4]});
		const uintBFDkDZV = await Layerxe1lDTsB.withdraw.call(uintkpfSAIY, {from: accounts[2]});

		await expect(Layerxe1lDTsB.unlock.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressnQDjG4 = accounts[1]
		const Layerxe1lDTsB = await Layerx.new(addressnQDjG4, {from: accounts[0]});
		const addressRKfBTzr = accounts[0]
		const addresstZhVMJ7 = accounts[2]
		const uintf1N369X = await Layerxe1lDTsB.allowance.call(addresstZhVMJ7, addressRKfBTzr, {from: accounts[3]});
		await Layerxe1lDTsB.addStakePayment.call({from: accounts[1]});
		await Layerxe1lDTsB.unlock.call({from: accounts[4]});

		assert.equal(uintf1N369X, BigInt("0"))
		await expect(Layerxe1lDTsB.addStakePayment.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressrgVRD81 = accounts[0]
		const LayerxQEmNU12 = await Layerx.new(addressrgVRD81, {from: accounts[0]});
		const uintoVlB7Hh = BigInt("0")
		const addressFGcQGOh = "0x0000000000000000000000000000000000000001"
		const byteDmsdKAW = "0x111810121c021917060d1806060a03111d17001415071e0017071e200b141c07"
		const uintbUhdIwV = BigInt("2033")
		const addressWacRy0U = accounts[0]
		const uintxQiHWHc = await LayerxQEmNU12.lock.call(uintoVlB7Hh, {from: accounts[3]});
		const addresspBOuqme = await LayerxQEmNU12.transferOwnership.call(addressFGcQGOh, {from: accounts[3]});
		const boolTrJYkcl = await LayerxQEmNU12.approveAndCall.call(addressWacRy0U, uintbUhdIwV, byteDmsdKAW, {from: accounts[0]});

		await expect(LayerxQEmNU12.lock.call(uintoVlB7Hh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})