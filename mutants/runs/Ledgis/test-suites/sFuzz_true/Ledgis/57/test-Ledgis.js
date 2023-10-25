const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisJgO4qNX = await Ledgis.new({from: accounts[2]});
		const uintgOM1JCJ = BigInt("59")
		const addresspz99GSD = accounts[1]
		const uintH7aSGkt = BigInt("1450")
		const addressQq1Qzsw = "0x0000000000000000000000000000000000000001"
		const addressrNYEHT6 = accounts[2]
		const addressPC7DRSS = accounts[5]
		const addressmtua6xI = await LedgisJgO4qNX.burn.call(addresspz99GSD, uintgOM1JCJ, {from: accounts[3]});
		await LedgisJgO4qNX.whenNotPaused.call({from: accounts[2]});
		const addressNXWmBiZ = await LedgisJgO4qNX.burn.call(addressQq1Qzsw, uintH7aSGkt, {from: accounts[0]});
		const uint256lolP8Og = await LedgisJgO4qNX.allowance.call(addressPC7DRSS, addressrNYEHT6, {from: accounts[1]});
		await LedgisJgO4qNX.onlyOwner.call({from: accounts[0]});
		await LedgisJgO4qNX.whenNotFrozen.call({from: accounts[2]});

		await expect(LedgisJgO4qNX.burn.call(addresspz99GSD, uintgOM1JCJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisicOh3T = await Ledgis.new({from: accounts[1]});
		const addressFuiUM6g = accounts[3]
		const addresskF11FSQ = accounts[2]
		const uint256wjYyTip = await LedgisicOh3T.balanceOf.call(addressFuiUM6g, {from: "0x0000000000000000000000000000000000000001"});
		await LedgisicOh3T.whenPaused.call({from: accounts[1]});
		const addressVw2CHiT = await LedgisicOh3T.transferOwnership.call(addresskF11FSQ, {from: accounts[5]});

		assert.equal(uint256wjYyTip, BigInt("0"))
		await expect(LedgisicOh3T.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgishpMPL8m = await Ledgis.new({from: accounts[1]});
		const uintBGR6MjN = BigInt("431")
		const addressyfxZBoJ = accounts[1]
		const uintCm3BG3E = BigInt("1465")
		const uintI6WPsZ5 = BigInt("1100")
		const addressa8UwURW = accounts[0]
		const uinthHZQhUz = BigInt("516")
		const addressuDCMuB = accounts[4]
		const addressEGhUzzQ = accounts[5]
		const boolhHtDtIm = await LedgishpMPL8m.transfer.call(addressyfxZBoJ, uintBGR6MjN, {from: accounts[4]});
		const addressvNIGPl = await LedgishpMPL8m.lock.call(addressa8UwURW, uintI6WPsZ5, uintCm3BG3E, {from: accounts[2]});
		await LedgishpMPL8m.unpause.call({from: accounts[0]});
		const boolyntswqQ = await LedgishpMPL8m.approve.call(addressuDCMuB, uinthHZQhUz, {from: accounts[3]});
		const uint256t5Qh7ML = await LedgishpMPL8m.lockCount.call(addressEGhUzzQ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgishpMPL8m.transfer.call(addressyfxZBoJ, uintBGR6MjN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisvoHwKMv = await Ledgis.new({from: accounts[2]});
		const uintdYTm55Q = BigInt("183")
		const addressx14ETHM = accounts[3]
		const uintHXtr8ka = BigInt("1881")
		const uintniJm6H4 = BigInt("1228")
		const uintjs3WCx5 = BigInt("1990")
		const addressIESre3 = accounts[1]
		const uintWXBXeQl = BigInt("1")
		const addresscRSdf76 = accounts[0]
		const addressN5Yr7F = accounts[2]
		const boolOCc4EKm = await LedgisvoHwKMv.increaseAllowance.call(addressx14ETHM, uintdYTm55Q, {from: accounts[5]});
		const uint256Ah7UNBd = await LedgisvoHwKMv.afterTime.call(uintHXtr8ka, {from: accounts[2]});
		const boolrkmTqh = await LedgisvoHwKMv.transferWithLockAfter.call(addressIESre3, uintjs3WCx5, uintniJm6H4, {from: accounts[4]});
		const boolhoElFEN = await LedgisvoHwKMv.transferFrom.call(addressN5Yr7F, addresscRSdf76, uintWXBXeQl, {from: accounts[3]});

		assert.equal(boolOCc4EKm, true)
		assert.equal(uint256Ah7UNBd, BigInt("1630233789"))
		await expect(LedgisvoHwKMv.transferWithLockAfter.call(addressIESre3, uintjs3WCx5, uintniJm6H4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisnhPukav = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintWgQco9E = BigInt("1979")
		const uintLMPFXXf = BigInt("935")
		const uintfrG7fKl = BigInt("1293")
		const addressjnJGCe4 = accounts[1]
		const uintauQWShi = BigInt("364")
		const uintacxQDM = BigInt("1033")
		const address7vjEAW = accounts[3]
		await LedgisnhPukav.whenPaused.call({from: accounts[0]});
		const uint256rw4cOer = await LedgisnhPukav.afterTime.call(uintWgQco9E, {from: accounts[3]});
		const addressnRFQwL5 = await LedgisnhPukav.lock.call(addressjnJGCe4, uintfrG7fKl, uintLMPFXXf, {from: accounts[4]});
		const addressN6FTC72 = await LedgisnhPukav.lockAfter.call(address7vjEAW, uintacxQDM, uintauQWShi, {from: accounts[0]});
	});

	it('test for Ledgis', async () => {
		const LedgisvoHwKMv = await Ledgis.new({from: accounts[2]});
		const uintEaQ8cr7 = BigInt("183")
		const addressgzO5Wut = accounts[3]
		const uintkEOyc0 = BigInt("1878")
		const uintImxd0ev = BigInt("1")
		const addressVdIntae = accounts[0]
		const addressYMtZcZl = accounts[2]
		const boolOCc4EKm = await LedgisvoHwKMv.increaseAllowance.call(addressgzO5Wut, uintEaQ8cr7, {from: accounts[5]});
		const uint256Ah7UNBd = await LedgisvoHwKMv.afterTime.call(uintkEOyc0, {from: accounts[2]});
		const boolhoElFEN = await LedgisvoHwKMv.transferFrom.call(addressYMtZcZl, addressVdIntae, uintImxd0ev, {from: accounts[3]});

		assert.equal(boolOCc4EKm, true)
		assert.equal(uint256Ah7UNBd, BigInt("1630233798"))
		await expect(LedgisvoHwKMv.transferFrom.call(addressYMtZcZl, addressVdIntae, uintImxd0ev, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisvoHwKMv = await Ledgis.new({from: accounts[2]});
		const uintzdPqhfO = BigInt("183")
		const addressOcuIC44 = accounts[3]
		const uintNugXWL = BigInt("1881")
		const uintYvdGokQ = BigInt("1228")
		const uintHqsI0e2 = BigInt("1990")
		const address18nJeM = accounts[1]
		const uintHnyvS0Y = BigInt("1")
		const addressnk7uGY5 = accounts[1]
		const addressqJ1B2Q6 = accounts[2]
		await LedgisvoHwKMv.pause.call({from: accounts[2]});
		const boolOCc4EKm = await LedgisvoHwKMv.increaseAllowance.call(addressOcuIC44, uintzdPqhfO, {from: accounts[5]});
		const uint256Ah7UNBd = await LedgisvoHwKMv.afterTime.call(uintNugXWL, {from: accounts[2]});
		const boolrkmTqh = await LedgisvoHwKMv.transferWithLockAfter.call(address18nJeM, uintHqsI0e2, uintYvdGokQ, {from: accounts[4]});
		const boolhoElFEN = await LedgisvoHwKMv.transferFrom.call(addressqJ1B2Q6, addressnk7uGY5, uintHnyvS0Y, {from: accounts[3]});

		await expect(LedgisvoHwKMv.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisQ7KgShd = await Ledgis.new({from: accounts[1]});
		const uintoIZmoWy = BigInt("162")
		const addressidSw2N8 = accounts[5]
		const uint256v8wxZHs = await LedgisQ7KgShd.currentTime.call({from: accounts[0]});
		const boola0QipHu = await LedgisQ7KgShd.mint.call(addressidSw2N8, uintoIZmoWy, {from: accounts[0]});
		await LedgisQ7KgShd.renounceOwnership.call({from: accounts[3]});
		await LedgisQ7KgShd.pause.call({from: accounts[4]});
		await LedgisQ7KgShd.renounceOwnership.call({from: accounts[2]});

		assert.equal(uint256v8wxZHs, BigInt("1630231915"))
		await expect(LedgisQ7KgShd.mint.call(addressidSw2N8, uintoIZmoWy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisicOh3T = await Ledgis.new({from: accounts[1]});
		const addressFA61gKC = accounts[3]
		const addresshnJJeH = "0x0000000000000000000000000000000000000001"
		const addressXqU0D37 = accounts[1]
		const addresszlpq8IT = accounts[3]
		const addresssLaGsEz = accounts[0]
		const uint256wjYyTip = await LedgisicOh3T.balanceOf.call(addressFA61gKC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256li5W23d = await LedgisicOh3T.allowance.call(addressXqU0D37, addresshnJJeH, {from: accounts[4]});
		const addressVw2CHiT = await LedgisicOh3T.transferOwnership.call(addresszlpq8IT, {from: accounts[5]});
		const uint256IAYnT7L = await LedgisicOh3T.balanceOf.call(addresssLaGsEz, {from: accounts[4]});

		assert.equal(uint256li5W23d, BigInt("0"))
		assert.equal(uint256wjYyTip, BigInt("0"))
		await expect(LedgisicOh3T.transferOwnership.call(addresszlpq8IT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisvoHwKMv = await Ledgis.new({from: accounts[2]});
		const uintvKbto0G = BigInt("183")
		const addressUEV4LqS = accounts[3]
		const uintA640t1N = BigInt("1")
		const addressDmO6kYZ = accounts[0]
		const addressT5BHt5 = accounts[2]
		const boolOCc4EKm = await LedgisvoHwKMv.increaseAllowance.call(addressUEV4LqS, uintvKbto0G, {from: accounts[5]});
		await LedgisvoHwKMv.renounceOwnership.call({from: accounts[2]});
		const boolhoElFEN = await LedgisvoHwKMv.transferFrom.call(addressT5BHt5, addressDmO6kYZ, uintA640t1N, {from: accounts[3]});

		assert.equal(boolOCc4EKm, true)
		await expect(LedgisvoHwKMv.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisicOh3T = await Ledgis.new({from: accounts[1]});
		const addressdLxq9It = accounts[4]
		const addressGltsaXW = accounts[1]
		const addressZLmgTBx = accounts[2]
		const uint256wjYyTip = await LedgisicOh3T.balanceOf.call(addressdLxq9It, {from: "0x0000000000000000000000000000000000000001"});
		const addressm4wxldG = await LedgisicOh3T.transferOwnership.call(addressGltsaXW, {from: accounts[1]});
		const addressVw2CHiT = await LedgisicOh3T.transferOwnership.call(addressZLmgTBx, {from: accounts[5]});

		assert.equal(uint256wjYyTip, BigInt("0"))
		await expect(LedgisicOh3T.transferOwnership.call(addressZLmgTBx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis4V7Pq2 = await Ledgis.new({from: accounts[5]});
		const addresskR3yoWq = accounts[0]
		const addressnrysoZS = accounts[1]
		const addresszBim7GY = accounts[4]
		const addressukUmRyh = accounts[3]
		const uint256ddtRoeB = await Ledgis4V7Pq2.balanceOf.call(addresskR3yoWq, {from: accounts[0]});
		const boolhNNAIji = await Ledgis4V7Pq2.isFrozen.call(addressnrysoZS, {from: accounts[4]});
		const boolNp6GoCq = await Ledgis4V7Pq2.isFrozen.call(addresszBim7GY, {from: accounts[2]});
		const addresslnz1cUV = await Ledgis4V7Pq2.transferOwnership.call(addressukUmRyh, {from: accounts[5]});

		assert.equal(boolNp6GoCq, false)
		assert.equal(boolhNNAIji, false)
		assert.equal(uint256ddtRoeB, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisicOh3T = await Ledgis.new({from: accounts[1]});
		const addressi6UdNEe = accounts[3]
		const uintxiLgYUr = BigInt("503")
		const addressd1eNtWC = accounts[4]
		const addressssUP5u0 = accounts[3]
		const uint256wjYyTip = await LedgisicOh3T.balanceOf.call(addressi6UdNEe, {from: "0x0000000000000000000000000000000000000001"});
		const boolsvZWIy = await LedgisicOh3T.decreaseAllowance.call(addressd1eNtWC, uintxiLgYUr, {from: accounts[5]});
		const addressVw2CHiT = await LedgisicOh3T.transferOwnership.call(addressssUP5u0, {from: accounts[5]});
		await LedgisicOh3T.whenPaused.call({from: accounts[5]});

		assert.equal(uint256wjYyTip, BigInt("0"))
		await expect(LedgisicOh3T.decreaseAllowance.call(addressd1eNtWC, uintxiLgYUr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisvoHwKMv = await Ledgis.new({from: accounts[2]});
		const uintB9shaaX = BigInt("254")
		const addressk1m6rT = accounts[0]
		const uintu074ogW = BigInt("183")
		const addresscqOpGdB = accounts[3]
		await LedgisvoHwKMv.lockState.call(addressk1m6rT, uintB9shaaX, {from: accounts[5]});
		const boolOCc4EKm = await LedgisvoHwKMv.increaseAllowance.call(addresscqOpGdB, uintu074ogW, {from: accounts[5]});

		await expect(LedgisvoHwKMv.lockState.call(addressk1m6rT, uintB9shaaX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisicOh3T = await Ledgis.new({from: accounts[1]});
		const uinthEhbJdb = BigInt("2030")
		const addressRJ0l2FC = accounts[4]
		const addressircO7d9 = accounts[4]
		const addressUh1AqOD = accounts[4]
		const addressummkZYA = accounts[2]
		const boolpJnVgS = await LedgisicOh3T.approve.call(addressRJ0l2FC, uinthEhbJdb, {from: accounts[0]});
		const uint256wjYyTip = await LedgisicOh3T.balanceOf.call(addressircO7d9, {from: "0x0000000000000000000000000000000000000001"});
		const addressHTEVGr = await LedgisicOh3T.freeze.call(addressUh1AqOD, {from: accounts[4]});
		const addressVw2CHiT = await LedgisicOh3T.transferOwnership.call(addressummkZYA, {from: accounts[5]});

		assert.equal(boolpJnVgS, true)
		assert.equal(uint256wjYyTip, BigInt("0"))
		await expect(LedgisicOh3T.freeze.call(addressUh1AqOD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisicOh3T = await Ledgis.new({from: accounts[1]});
		const addressZtR1Gap = accounts[4]
		const addressGkagCRl = accounts[4]
		const addresshs8V6VN = accounts[2]
		await LedgisicOh3T.renounceOwnership.call({from: accounts[1]});
		const address47uWQm = await LedgisicOh3T.freeze.call(addressZtR1Gap, {from: accounts[1]});
		const uint256wjYyTip = await LedgisicOh3T.balanceOf.call(addressGkagCRl, {from: "0x0000000000000000000000000000000000000001"});
		const addressVw2CHiT = await LedgisicOh3T.transferOwnership.call(addresshs8V6VN, {from: accounts[5]});

		await expect(LedgisicOh3T.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisvoHwKMv = await Ledgis.new({from: accounts[2]});
		const uintfsFxKVF = BigInt("183")
		const addressjAMmpWD = accounts[3]
		const uintE9x27fL = BigInt("0")
		const addressSkGjOvw = accounts[0]
		const addressFqFggX3 = accounts[2]
		const boolOCc4EKm = await LedgisvoHwKMv.increaseAllowance.call(addressjAMmpWD, uintfsFxKVF, {from: accounts[5]});
		const boolhoElFEN = await LedgisvoHwKMv.transferFrom.call(addressFqFggX3, addressSkGjOvw, uintE9x27fL, {from: accounts[3]});

		assert.equal(boolOCc4EKm, true)
		assert.equal(boolhoElFEN, true)
	});

	it('test for Ledgis', async () => {
		const LedgispmqVv5p = await Ledgis.new({from: accounts[3]});
		const addressygb3O3E = accounts[4]
		const addressEKeWRTF = accounts[2]
		const uint256M0cJjyC = await LedgispmqVv5p.balanceOf.call(addressygb3O3E, {from: accounts[1]});
		const uint256j1nEGBZ = await LedgispmqVv5p.totalSupply.call({from: accounts[4]});
		await LedgispmqVv5p.whenNotPaused.call({from: accounts[1]});
		const uint256aNlMFAL = await LedgispmqVv5p.lockCount.call(addressEKeWRTF, {from: accounts[2]});

		assert.equal(uint256M0cJjyC, BigInt("0"))
		assert.equal(uint256j1nEGBZ, BigInt("10000000000000"))
		await expect(LedgispmqVv5p.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis6xUbIu = await Ledgis.new({from: accounts[1]});
		const uintyhNf9T6 = BigInt("123")
		const uintaGVJBig = BigInt("28")
		const addressyDvuLO2 = accounts[1]
		const uintFNkSkFU = BigInt("643")
		const uintqZt22ao = BigInt("1111")
		const addressDwjask2 = accounts[2]
		const uintReTS8xY = BigInt("1394")
		const addressvgU0OKr = accounts[4]
		const addresseindqzQ = accounts[4]
		const addressyWW5XVv = accounts[2]
		const boolE9W9juZ = await Ledgis6xUbIu.transferWithLock.call(addressyDvuLO2, uintaGVJBig, uintyhNf9T6, {from: accounts[1]});
		const boolJqk9kL4 = await Ledgis6xUbIu.transferWithLock.call(addressDwjask2, uintqZt22ao, uintFNkSkFU, {from: accounts[4]});
		const booleNOUnVd = await Ledgis6xUbIu.transferFrom.call(addresseindqzQ, addressvgU0OKr, uintReTS8xY, {from: accounts[3]});
		const addresslFg79fd = await Ledgis6xUbIu.unfreeze.call(addressyWW5XVv, {from: accounts[2]});

		assert.equal(boolE9W9juZ, true)
		await expect(Ledgis6xUbIu.transferWithLock.call(addressDwjask2, uintqZt22ao, uintFNkSkFU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisicOh3T = await Ledgis.new({from: accounts[1]});
		const addresscq9CgPN = accounts[4]
		const uintcu6QMre = BigInt("1406")
		const uintkmF4vuT = BigInt("249")
		const addressNGxd0Iu = accounts[4]
		const uint256wjYyTip = await LedgisicOh3T.balanceOf.call(addresscq9CgPN, {from: "0x0000000000000000000000000000000000000001"});
		const bool53frRr = await LedgisicOh3T.transferWithLockAfter.call(addressNGxd0Iu, uintkmF4vuT, uintcu6QMre, {from: accounts[1]});

		assert.equal(bool53frRr, true)
		assert.equal(uint256wjYyTip, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisvoHwKMv = await Ledgis.new({from: accounts[2]});
		const addressJmbrcZD = accounts[5]
		const uintnI8FGWp = BigInt("1009")
		const addressKaqCDbt = "0x0000000000000000000000000000000000000001"
		const uintSyZ4hT = BigInt("183")
		const addressW4YzgLh = accounts[4]
		const boolYDrXTL = await LedgisvoHwKMv.isFrozen.call(addressJmbrcZD, {from: accounts[4]});
		const addressXoazpok = await LedgisvoHwKMv.unlock.call(addressKaqCDbt, uintnI8FGWp, {from: accounts[2]});
		const boolOCc4EKm = await LedgisvoHwKMv.increaseAllowance.call(addressW4YzgLh, uintSyZ4hT, {from: accounts[5]});

		assert.equal(boolYDrXTL, false)
		await expect(LedgisvoHwKMv.unlock.call(addressKaqCDbt, uintnI8FGWp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisvoHwKMv = await Ledgis.new({from: accounts[2]});
		const uintZoQBnu3 = BigInt("1017")
		const addressDLHiIf6 = accounts[3]
		const addressu4yYQm7 = accounts[2]
		const boolOCc4EKm = await LedgisvoHwKMv.increaseAllowance.call(addressDLHiIf6, uintZoQBnu3, {from: accounts[5]});
		const uint256AJv09wW = await LedgisvoHwKMv.lockCount.call(addressu4yYQm7, {from: accounts[5]});

		assert.equal(boolOCc4EKm, true)
		assert.equal(uint256AJv09wW, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisvoHwKMv = await Ledgis.new({from: accounts[2]});
		const uintoTirvej = BigInt("1468")
		const uintOkRcIKV = BigInt("1757")
		const addressmLamPVV = accounts[1]
		const uintREiaisw = BigInt("149")
		const addressrrBR2EV = accounts[3]
		const addressw8ta5i5 = await LedgisvoHwKMv.lockAfter.call(addressmLamPVV, uintOkRcIKV, uintoTirvej, {from: accounts[2]});
		const boolOCc4EKm = await LedgisvoHwKMv.increaseAllowance.call(addressrrBR2EV, uintREiaisw, {from: accounts[5]});

		await expect(LedgisvoHwKMv.lockAfter.call(addressmLamPVV, uintOkRcIKV, uintoTirvej, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisvoHwKMv = await Ledgis.new({from: accounts[2]});
		const addressCEAnumw = accounts[4]
		const uintf38louH = BigInt("1850")
		const uintGqAesDo = BigInt("693")
		const addressqj9JFe = "0x0000000000000000000000000000000000000001"
		const uintTby9HSI = BigInt("1")
		const addresszS7o6YR = accounts[0]
		const addressmZ8NFKe = accounts[2]
		const uint256Ynf3xvc = await LedgisvoHwKMv.lockCount.call(addressCEAnumw, {from: accounts[2]});
		const addressHQLKOP = await LedgisvoHwKMv.lock.call(addressqj9JFe, uintGqAesDo, uintf38louH, {from: accounts[2]});
		const boolhoElFEN = await LedgisvoHwKMv.transferFrom.call(addressmZ8NFKe, addresszS7o6YR, uintTby9HSI, {from: accounts[3]});

		assert.equal(uint256Ynf3xvc, BigInt("0"))
		await expect(LedgisvoHwKMv.lock.call(addressqj9JFe, uintGqAesDo, uintf38louH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisvoHwKMv = await Ledgis.new({from: accounts[2]});
		const addressAPekZoa = accounts[5]
		const uintNRj2gMv = BigInt("111")
		const addressbXjJG8v = accounts[3]
		const uintfiQVQOu = BigInt("199")
		const addressKmuI3RM = accounts[1]
		const addressHF9Es3p = accounts[2]
		const uintvV5KjMM = BigInt("1")
		const addressQAmHjSZ = accounts[0]
		const addresslSop7Ab = accounts[3]
		const uint256GCeS6tP = await LedgisvoHwKMv.balanceOf.call(addressAPekZoa, {from: accounts[3]});
		const addressbLxinPd = await LedgisvoHwKMv.burn.call(addressbXjJG8v, uintNRj2gMv, {from: accounts[2]});
		const boolLt0GShR = await LedgisvoHwKMv.mint.call(addressKmuI3RM, uintfiQVQOu, {from: accounts[2]});
		const addressR5StZA = await LedgisvoHwKMv.unfreeze.call(addressHF9Es3p, {from: accounts[4]});
		const boolhoElFEN = await LedgisvoHwKMv.transferFrom.call(addresslSop7Ab, addressQAmHjSZ, uintvV5KjMM, {from: accounts[3]});

		assert.equal(uint256GCeS6tP, BigInt("0"))
		await expect(LedgisvoHwKMv.burn.call(addressbXjJG8v, uintNRj2gMv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisvoHwKMv = await Ledgis.new({from: accounts[2]});
		const addressOqg1yhY = accounts[0]
		const uintJKJBvgc = BigInt("1069")
		const addressaXyVNpn = accounts[4]
		const uintrWfs5VD = BigInt("1")
		const addressQ1A7ij = accounts[0]
		const addresscEHTYpN = accounts[2]
		const addressQxJQ3to = await LedgisvoHwKMv.unfreeze.call(addressOqg1yhY, {from: accounts[2]});
		const boolnS7VRMc = await LedgisvoHwKMv.transfer.call(addressaXyVNpn, uintJKJBvgc, {from: accounts[3]});
		const boolhoElFEN = await LedgisvoHwKMv.transferFrom.call(addresscEHTYpN, addressQ1A7ij, uintrWfs5VD, {from: accounts[3]});

		await expect(LedgisvoHwKMv.transfer.call(addressaXyVNpn, uintJKJBvgc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisvoHwKMv = await Ledgis.new({from: accounts[2]});
		const uintSCOpkmP = BigInt("867")
		const addressjlWyzBG = accounts[4]
		const uintmYHliwz = BigInt("1")
		const addressRPqOwYD = accounts[1]
		const addressGnnyNFa = accounts[2]
		const boolb45gVsD = await LedgisvoHwKMv.mint.call(addressjlWyzBG, uintSCOpkmP, {from: accounts[2]});
		const boolhoElFEN = await LedgisvoHwKMv.transferFrom.call(addressGnnyNFa, addressRPqOwYD, uintmYHliwz, {from: accounts[3]});

		assert.equal(boolb45gVsD, true)
		await expect(LedgisvoHwKMv.transferFrom.call(addressGnnyNFa, addressRPqOwYD, uintmYHliwz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisvoHwKMv = await Ledgis.new({from: accounts[2]});
		const uintFBoObW = BigInt("1")
		const addressv34xOYC = accounts[0]
		const addresszhp5rWU = accounts[2]
		await LedgisvoHwKMv.unpause.call({from: accounts[2]});
		await LedgisvoHwKMv.onlyOwner.call({from: accounts[0]});
		const boolhoElFEN = await LedgisvoHwKMv.transferFrom.call(addresszhp5rWU, addressv34xOYC, uintFBoObW, {from: accounts[3]});

		await expect(LedgisvoHwKMv.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})